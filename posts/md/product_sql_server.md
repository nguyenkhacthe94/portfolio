# PRODUCT function in SQL Server 2025

December 4, 2025

15 years ago, someone asked this on StackOverflow:

![StackOverflow Question](../../img/PRODUCT_SQL_Server_1.png)

I don't know if Microsoft heard this guy's desire, but they DID release the new aggregate PRODUCT function in SQL Server 2025.

## PRODUCT()

The PRODUCT() function is similar to SUM() in that it is an aggregate that performs a mathematical calculation. SUM() works like this. Let's assume I have this table, called `dbo.Numbers`:

```sql
CREATE TABLE dbo.Numbers
(
    n INT
);
GO
INSERT dbo.Numbers
(
    n
)
VALUES
(1),
(2),
(3),
(4);
```

If I use the SUM function, I'll get the calculation: 1+2+3+4=10. Everyone knows.

The PRODUCT function works similarly. The calculation is now 1*2*3*4=24.

![PRODUCT Function Example](../../img/PRODUCT_SQL_Server_2.png)

## Why do we need this?

There are lots of financial calculations that might require implementing a product-type function. As an example, suppose that I want to calculate the value of something based on inflation. Suppose I have the inflation rate for a country each year, and I'm curious about the effect on its currency over time.

I have a table and some data from the UK, which is where Redgate is headquartered.

```sql
CREATE TABLE dbo.Inflation
(
    Country CHAR(3),
    TrackedYear INT,
    InflationRate NUMERIC(4, 2)
)
GO
INSERT dbo.Inflation
(
    Country,
    TrackedYear,
    InflationRate
)
VALUES
('UK', 2019, 1.8),
('UK', 2020, 0.9),
('UK', 2021, 2.6),
('UK', 2022, 9.1),
('UK', 2023, 6.8),
('UK', 2024, 3.8);
```

Suppose I want to know how the yen has changed in value since 2019? Before the PRODUCT function, what I would do is combine a few functions like this:

```sql
SELECT EXP(SUM(LOG(1 + (inflationRate / 100.0))))
FROM dbo.Inflation
WHERE country = 'UK';
```

I get a similar result due to rounding, but I'd argue this is much easier to read.

![Inflation Calculation](../../img/PRODUCT_SQL_Server_3.png)

## PRODUCT Syntax and Usage

According to Microsoft, the syntax is quite simple. There is 1 required parameter, it's the expression. The ALL and DISTINCT keywords are optional. If you want to use it as a window function, the OVER keyword is available.

![PRODUCT Syntax](../../img/PRODUCT_SQL_Server_4.png)

### ALL and DISTINCT

ALL is used by default. That means there's no difference between using ALL and not using it. But there will be if you use the DISTINCT keyword. Now I'll add a new "4" value to the Number table above, then compare them.

![ALL vs DISTINCT](../../img/PRODUCT_SQL_Server_5.png)

You can see the difference here. The DISTINCT keyword makes the function return 1*2*3*4=24 instead of 1*2*3*4*4=96. It eliminated the duplicates before calculating.

### Return Types

The return type is various, based on the expression type. But I expected the return type for int should be bigint instead of int, as the PRODUCT function makes the value grow so fast and causes type overflow error. So I truly recommend you guys to convert your int numbers to bigint type before using this function.

## Summary

The PRODUCT function is one of the many new features added to SQL Server 2025 that you should have a look at, especially in financial systems. This will reduce the code complexity and make the queries easier to read. But you should be careful when using it.
