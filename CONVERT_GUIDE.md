# Content Conversion Guide

This document outlines the steps taken to convert the "COUNT() function in SQL Server (Part 2)" content into Markdown and HTML formats.

## 1. Preparation
- **Image Verification**: Checked `img/` directory to ensure all required images existed:
    - `post_file_name_x.png`
    - `post_file_name_thumbnail.png`

## 2. Markdown File Creation (`posts/post_title.md`)
- Created a new file named `post_title.md`.
- Inserted the provided text title and body.
- Replaced the string "Article content" with Markdown image syntax `![Description](../img/image_name.png)` as follows:
    - 1st occurrence -> `![Execution Plan](../img/post_file_name_1.png)`
    - 2nd occurrence -> `![Query profile](../img/post_file_name_2.png)`
    - 3rd occurrence -> `![I/O Stats](../img/post_file_name_3.png)`
    - 4th occurrence -> `![Query result](../img/post_file_name_4.png)`
    - 5th occurrence -> `![Null value count](../img/post_file_name_5.png)`
- Added Markdown headers (`#`, `##`) to structure the content.

## 3. HTML File Creation (`posts/post_title.html`)
- Used `posts/post_title.html` as a template to maintain consistent styling (CSS, Navigation, Footer).
- **Metadata Updates**:
    - Updated `<title>` to the input title, e.g., "COUNT() function in SQL Server (Part 2) - The Nguyen Khac".
    - Updated the Article Header:
        - Set `<h1>` to the input title, e.g., "COUNT() function in SQL Server (Part 2)".
        - Updated the Main Thumbnail to `../img/post_file_name_thumbnail.png`.
        - Updated the Article Intro text.
- **Content Insertion**:
    - Wrapped text in `<p>` tags.
    - Wrapped section titles in `<h2>` tags.
    - Replaced "Article content" placeholders with HTML image tags:
        ```html
        <img src="../img/post_file_name_x.png" alt="Description">
        <p class="image-caption">Caption Text</p>
        ```
    - Mapped images to 1-5 exactly as done in the Markdown file.

## 4. Update Index File
- Added the new post entry to `posts/index.json` to ensure it appears in the blog list.
    ```json
    {
        "title": "COUNT() function in SQL Server (Part 2)",
        "file": "count_in_sql_server_part_2.md",
        "date": "2026-01-04",
        "thumbnail": "img/count_in_sql_server_thumbnail.png",
        "excerpt": "Explores the differences between COUNT(1), COUNT(*), and COUNT(COLUMN) in SQL Server..."
    }
    ```
