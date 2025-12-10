# Database Optimization: From 45 Minutes to 20 Seconds

It sounds dramatic, but it's genuinely simple. The truth is, that mistakes like this can happen anywhere. Database optimization is something businesses highly value. Give this a read—you might find it useful somewhere.

## Background

I took on a project with quite a large dataset. Our system uses **SQL Server Enterprise 2016** with the client being **SQL Server Management Studio 2020**. The data comprises the sales figures of **ALL electronic products**, from **ALL brands**, in **ALL countries/regions**, for **EACH MONTH** from 2007 to now. With such a dataset, slow queries were **INEVITABLE**. Here's the situation:

```sql
SELECT * FROM <TABLE>
WHERE 1 = 1
AND NationCode = 'XX'
AND ProductCode = 'YY' 
AND Period like '20xx%'
```

The query looks simple, but it took about **25–30 minutes** to get results. For more complex nested queries with ordering for report screens, it took about **45 minutes** to process.

Looking at databases in other projects, I saw many larger databases running much faster. That's when I realized something was wrong with my database. So, I started investigating.

---

## I. INVESTIGATION

### 1. Checking Database Settings

After tracing the report screens, I found stored procedures corresponding to each screen. Each procedure had a simple query with 3 parameters like the one mentioned above. Since the query was simple, I didn't look there for the issue. Instead, I checked the database settings (under Options in Database Properties):

- **Auto Create Statistics**: True
- **Auto Update Statistics**: True
- **Auto Shrink**: False

The Auto Shrink setting indicated potential fragmentation issues. I focused on 4 key tables that fed data to the report screens—the critical tables of the system.

### 2. Checking Tables Structure

- No indexes on search fields. Even when indexed, it wasn't effective due to excessive duplication in the search fields.
- No partitioning, as old data was frequently deleted or updated.
- Used clustered columnstore indexes for numeric calculations.
- Tables were compressed using columnstore indexes.

The table design seemed fine, but since Auto Shrink wasn't enabled, I decided to check for fragmentation.

### 3. Checking Fragmentation

I used the following command to check:

```sql
DBCC SHOWCONTIG ('TABLE_NAME')
```

**Results:**

| Metric                         | Value      |
| ------------------------------ | ---------- |
| Pages Scanned                  | 6,196,802  |
| Extents Scanned                | 779,420    |
| Extent Switches                | 2,000,302  |
| Avg. Pages per Extent          | 8.0        |
| **Scan Density**               | **38.72%** |
| **Logical Scan Fragmentation** | **20.82%** |
| **Extent Scan Fragmentation**  | **50.15%** |
| Avg. Bytes Free per Page       | 754.8      |
| Avg. Page Density              | 90.67%     |

The three fragmentation metrics were **ALARMINGLY HIGH**. Essentially, SQL Server was scanning far too many underfilled pages, leading to inefficiencies.

**Diagnosis:** The critical tables were **SEVERELY FRAGMENTED**.

---

## II. TESTING

This alone wasn't enough to convince management, who believed the system was unfixable. I needed a test environment to prove my point. Luckily, I had a server to test on (same SQL Server version).

I replicated the tables with the same structure and imported the entire dataset.

### 1. Observation:
On the test server, the data only occupied **29GB**, compared to **360GB** in production—a **12x reduction**.

### 2. Query performance comparison:
- **Production:** 21:28
- **Test:** 2:51

### 3. Data density comparison:
- **Production:** 38.72%
- **Test:** 97.56%

These results, along with disk usage metrics, formed the basis for my proposal to the manager.

---

## III. IMPLEMENTATION

### 1. Preparation

- Suspend all data modifications (insert/update/delete).
- Back up data according to the **3-2-1-0-0 principle**: full database snapshot, and table backups on both the dev and production servers.
- Schedule the operation for the weekend to minimize client impact.
- Notify clients about the downtime.

### 2. Execution

Truncate the tables, reload the data, and validate at every step:

1. Load raw data.
2. Verify report screens.
3. Check data exports to other systems.

If any issue arose, the data must be restored (thankfully, there were no problems).

---

## IV. RESULTS

| Metric           | Before | After  | Improvement          |
| ---------------- | ------ | ------ | -------------------- |
| **Query Time**   | 21:28  | 0:20   | **60x faster**       |
| **Disk Usage**   | 360 GB | 29 GB  | **92% reduction**    |
| **Scan Density** | 38.72% | 97.56% | **2.5x improvement** |

---

## V. CONCLUSION

The key takeaway here is:

1. **Finding the RIGHT issue to fix is crucial.**
2. **Even small actions can drastically improve system performance.**
3. **No matter how experienced someone is, always validate your assumptions.**