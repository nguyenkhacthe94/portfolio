# Java Magical: Why 1000 == 1000 is false, but 100 == 100 is true?

October 28, 2025

We'll start with the following code:

```java
Integer a = 1000, b = 1000; 
System.out.println(a == b); //A
Integer c = 100, d = 100; 
System.out.println(c == d); //B
```

Then, please choose one of the following results:

- **A.** Line A is true, line B is true
- **B.** Line A is true, line B is false
- **C.** Line A is false, line B is true
- **D.** Line A is false, line B is false

Without reading the title, most of you would likely choose A or D. You must be very drunk to choose B. Congrats if you choose D, you learnt enough theories. If you choose A, you might know about the wrapper. But here is the result:

```
false
true
```

This means "a" and "b" are pointing to different objects. "c" and "d" are pointing to the same object.

## But WHY?

Let's take a look at the `Integer.java` class ([Java 8 Documentation](https://docs.oracle.com/javase/8/docs/api/java/lang/Integer.html)). We'll find the following quote at the `valueOf` method:

> Returns an Integer instance representing the specified int value. If a new Integer instance is not required, this method should generally be used in preference to the constructor Integer(int), as this method is likely to yield significantly better space and time performance by caching frequently requested values. This method will always cache values in the range -128 to 127, inclusive, and may cache other values outside of this range.

This means if you create a variable like this:

```java
Integer a = 100;
```

It will be declared like this:

```java
Integer a = Integer.valueOf(100);
```

Let's take a look at the `valueOf` method:

```java
public static Integer valueOf(int i) {  
    if (i >= IntegerCache.low && i <= IntegerCache.high)  
        return IntegerCache.cache[i + (-IntegerCache.low)];  
    return new Integer(i);  
}
```

It uses the `IntegerCache` class to create an array of integer numbers to cache. If you create an Integer value inside the cache range, it will then return you the cached one instead of creating a new one. It does make sense because in the range of Integer numbers, the values from -128 to 127 are used the most, so they chose that range to cache. This will help the program save memory.

Below is the `IntegerCache`:

```java
private static class IntegerCache {  
    static final int low = -128;  
    static final int high;  
    static final Integer cache[];  

    static {  
        // high value may be configured by property  
        int h = 127;  
        String integerCacheHighPropValue =  
            sun.misc.VM.getSavedProperty("java.lang.Integer.IntegerCache.high");  
        if (integerCacheHighPropValue != null) {  
            try {  
                int i = parseInt(integerCacheHighPropValue);  
                i = Math.max(i, 127);  
                // Maximum array size is Integer.MAX_VALUE  
                h = Math.min(i, Integer.MAX_VALUE - (-low) -1);  
            } catch( NumberFormatException nfe) {  
                // If the property cannot be parsed into an int, ignore it.  
            }  
        }  
        high = h;  

        cache = new Integer[(high - low) + 1];  
        int j = low;  
        for(int k = 0; k < cache.length; k++)  
            cache[k] = new Integer(j++);  

        // range [-128, 127] must be interned (JLS7 5.1.7)  
        assert IntegerCache.high >= 127;  
    }  

    private IntegerCache() {}  
}
```

## A Tricky Example Using Reflection

And with this `IntegerCache` class, we can create some tricky things using Reflection:

```java
public static void main(String[] args) throws NoSuchFieldException, IllegalAccessException {
    Class cache = Integer.class.getDeclaredClasses()[0]; //1
    Field myCache = cache.getDeclaredField("cache"); //2
    myCache.setAccessible(true);//3

    Integer[] newCache = (Integer[]) myCache.get(cache); //4
    newCache[132] = newCache[133]; //5

    int a = 2;
    int b = a + a;

    System.out.printf("%d + %d = %d", a, a, b); 
}
```

Run the above code, and we'll see this result:

```
2 + 2 = 5
```

Here is the explanation:

1. We use the ReflectionAPI to create a doppelganger of the `IntegerCache` class.
2. We create a field named "myCache" that refers to the "cache[]" field inside the `IntegerCache` class.
3. We change the accessibility of the "myCache".
4. We get the cache array. It's the array from -128 to 127.
5. We change the index 132 (the cell that has the value of 4) to index 133 (the cell that has the value of 5).

When we perform the `2+2`, it'll find the index 132 in the array, and return the modified value as 5.
