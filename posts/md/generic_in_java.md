# Generic in Java

Generics is a mechanism that allows developers to REUSE all methods in a class/interface with different data types, thereby helping to REDUCE CODE DUPLICATION and making it easier and more cohesive to separate interfaces. The implementing classes will be required to implement all common methods specified in the common interface fully.

Generic was introduced in Java version 5.0.

## Before Generic
Let's suppose we need to design a class that contains CRUD methods for data in a key-value format. The code would look alike below:

```java
public class KeyValueMgmt {
    private String key;
    private String value;

    public KeyValueMgmt(String key, String value) {
        this.key = key;
        this.value = value;
    }

    //getter & setter
    //CRUD methods
}
```

Here we have a class that can do the CRUD methods with the String type key and String type value.

What if we want to use an Integer-type key and Object-type value? Yes. The answer is, we have to create the same class, the same methods, and the same code. The only difference is the key and value data types.

How terrible! That was the situation before Generic.

## With Generic
With generic, we can make the key and value data type abstracts, so that we can reuse the above code on ANY data types. 

```java
public class KeyValueMgmt <K, V> {
    private K key;
    private V value;

    public KeyValueMgmt(K key, V value) {
        this.key = key;
        this.value = value;
    }

    //getter & setter
    //CRUD methods
}
```

First, we tell the class that we would have 2 generic data types, that are K and V. They are put in the angle brackets. You can use any character or word as a generic type, such as "ID", "E", ...
Next, we change the key data type from String to K
Then we change the value data type from String to V.

It's done. But how can we use it?

## Generic implementation
When we use a generic class, give it the specific data types that you want to use, just like below:

```java
//create an object
Book book = new Book();
book.setId(1);
book.setTitle("The pumpkin plan");

//Here we use the above generic class with Integer and String. But you can use any data type you want
KeyValueMgmt<Integer, String> bookKv = new KeyValueMgmt<>(book.getId(), book.getTitle());
```

Here we created an instance of the KeyValueMgmt generic class. 

First, we assigned the data types (Integer and String) by using the angle brackets beside the class name.
Because we have a 2-parameters constructor, we have to give it the corresponding data in the brackets.

No more copycat hell. This way, we can reuse the code on ANY DATA TYPE you want.
