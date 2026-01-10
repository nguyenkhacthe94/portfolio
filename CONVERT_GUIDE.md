# Content Conversion Guide

This document outlines the steps taken to convert the "COUNT() function in SQL Server (Part 2)" content into Markdown and HTML formats.

## 1. Preparation
- **Image Verification**: Checked `img/` directory to ensure all required images existed:
    - `post_file_name_x.png`
    - `post_file_name_thumbnail.png`

## 2. Markdown File Creation (`posts/md/post_title.md`)
- Created a new file named `post_title.md` in `posts/md/`.
- Inserted the provided text title and body.
- Replaced the string "Article content" with Markdown image syntax `![Description](../../img/image_name.png)` as follows:
    - 1st occurrence -> `![1st Alt text](../../img/post_file_name_1.png)`
    - 2nd occurrence -> `![2nd Alt text](../../img/post_file_name_2.png)`
    - 3rd occurrence -> `![3rd Alt text](../../img/post_file_name_3.png)`
    - 4th occurrence -> `![4th Alt text](../../img/post_file_name_4.png)`
    - 5th occurrence -> `![5th Alt text](../../img/post_file_name_5.png)`
- The image extension can be .png or .jpg or .jfif
- Added Markdown headers (`#`, `##`) to structure the content.

## 3. HTML File Creation (`posts/html/post_title.html`)
- Used `posts/html/layout.html` (or an existing post) as a template to maintain consistent styling (CSS, Navigation, Footer).
- **Metadata Updates**:
    - Updated `<title>` to the input title, e.g., "COUNT() function in SQL Server (Part 2) - The Nguyen Khac".
    - Updated the Article Header:
        - Set `<h1>` to the input title, e.g., "COUNT() function in SQL Server (Part 2)".
        - Updated the Main Thumbnail to `../../img/post_file_name_thumbnail.png`.
        - Updated the Article Intro text.
- **Content Insertion**:
    - Wrapped text in `<p>` tags.
    - Wrapped section titles in `<h2>` tags.
    - Replaced "Article content" placeholders with HTML image tags:
        ```html
        <img src="../../img/post_file_name_x.png" alt="Description">
        <p class="image-caption">Caption Text</p>
        ```
    - Mapped images to 1-5 exactly as done in the Markdown file.

## 4. Update Index File
- Added the new post entry to `posts/index.json` to ensure it appears in the blog list.
    ```json
    {
        "title": "Post Title. E.g: COUNT() function in SQL Server (Part 2)",
        "file": "post_file_name.md",
        "date": "Post Date. E.g: 2026-01-04",
        "thumbnail": "img/post_file_name_thumbnail.png",
        "excerpt": "Post excerpt. E.g: Explores the differences between COUNT(1), COUNT(*), and COUNT(COLUMN) in SQL Server..."
    }
    ```
## 5. Push the change to GitHub
- Push the changes to GitHub using the following commands:
    ```bash
    git add .
    git commit -m "Change content. E.g: add search feature"
    git push origin master
    ```
