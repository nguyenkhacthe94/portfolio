# 🌱 Digital Garden - How to Add Posts

Your portfolio now includes a **Digital Garden** where you can share articles, tutorials, and thoughts!

## 📁 File Structure

```
portfolio/
├── garden.html          # Digital garden page
├── index.html           # Main portfolio page
├── posts/               # All your blog posts
│   ├── index.json      # Index of all posts (YOU MUST UPDATE THIS!)
│   ├── post-1.md       # Your markdown posts
│   ├── post-2.md
│   └── ...
└── img/                 # All images
    ├── post-thumb-1.jpg
    ├── post-thumb-2.jpg
    ├── diagram-1.png
    └── ...
```

## ✍️ Adding a New Post

### Step 1: Write Your Post in Markdown

Create a new `.md` file in the `posts/` folder. For example: `posts/my-new-post.md`

**Post Format:**

```markdown
---
title: Your Post Title
date: 2025-01-15
thumbnail: img/your-thumbnail.jpg
---

# Your Post Title

Your introduction paragraph goes here...

## Section 1

Content with **bold**, *italic*, and `code` formatting.

![Image description](img/your-image.jpg)

### Subsection

More content...

```code
Your code blocks
```

## Conclusion

Final thoughts...
```

### Step 2: Add Your Thumbnail Image

1. Create or find a thumbnail image (recommended: 800x400px)
2. Save it to the `img/` folder (e.g., `img/my-post-thumb.jpg`)
3. Make sure the filename matches what you wrote in the post frontmatter

### Step 3: Update the Index

**CRITICAL**: You must update `posts/index.json` to include your new post!

Open `posts/index.json` and add your post to the array:

```json
{
  "posts": [
    {
      "title": "Your New Post Title",
      "date": "2025-01-15",
      "file": "my-new-post.md",
      "thumbnail": "img/my-post-thumb.jpg",
      "excerpt": "A brief description of your post (1-2 sentences)."
    },
    {
      "title": "Existing Post",
      "date": "2025-01-08",
      "file": "existing-post.md",
      "thumbnail": "img/existing-thumb.jpg",
      "excerpt": "Description..."
    }
  ]
}
```

**Important**: Posts are automatically sorted by date (newest first), so the order in the JSON doesn't matter.

### Step 4: Push to GitHub

```bash
cd /path/to/your/portfolio

# Add your new files
git add posts/my-new-post.md
git add img/my-post-thumb.jpg
git add posts/index.json

# Commit
git commit -m "Add new post: My Post Title"

# Push to GitHub
git push origin main
```

### Step 5: Wait for Deployment

GitHub Pages will automatically rebuild your site (takes 1-2 minutes). Your new post will appear in the Digital Garden!

## 📝 Markdown Formatting Guide

### Text Formatting

```markdown
**Bold text**
*Italic text*
~~Strikethrough~~
`inline code`
[Link text](https://example.com)
```

### Headings

```markdown
# Heading 1
## Heading 2
### Heading 3
```

### Lists

```markdown
- Bullet point 1
- Bullet point 2
  - Nested bullet

1. Numbered item 1
2. Numbered item 2
```

### Images

```markdown
![Alt text](img/your-image.jpg)
```

**Tips for images:**
- Use descriptive alt text
- Keep images under 1MB for faster loading
- Recommended formats: JPG for photos, PNG for diagrams/screenshots
- All images must be in the `img/` folder

### Code Blocks

````markdown
```javascript
const greeting = "Hello World";
console.log(greeting);
```

```csharp
public class Example
{
    public string Property { get; set; }
}
```
````

### Blockquotes

```markdown
> This is a quote
> It can span multiple lines
```

### Tables

```markdown
| Column 1 | Column 2 | Column 3 |
|----------|----------|----------|
| Data 1   | Data 2   | Data 3   |
| Data 4   | Data 5   | Data 6   |
```

## 🎨 Post Template

Here's a complete template you can copy:

```markdown
---
title: Your Post Title Here
date: 2025-01-15
thumbnail: img/your-thumbnail.jpg
---

# Your Post Title Here

Opening paragraph that hooks the reader and explains what they'll learn...

## Introduction

Brief context about why this topic matters...

![Relevant image](img/intro-image.jpg)

## Main Section 1

Your main content with explanations...

```code
// Code examples if relevant
```

### Subsection 1.1

More detailed information...

## Main Section 2

Continue your content...

![Another helpful image](img/section2-image.jpg)

## Key Takeaways

- Point 1
- Point 2
- Point 3

## Conclusion

Wrap up your thoughts and provide a call to action...

---

*Have questions or feedback? Feel free to reach out!*
```

## 🖼️ Creating Good Thumbnails

**Recommended thumbnail specs:**
- Dimensions: 800x400px (2:1 ratio)
- Format: JPG (for photos) or PNG (for graphics)
- File size: Under 200KB
- Content: Should represent the post topic

**Free tools for creating thumbnails:**
- Canva (https://www.canva.com)
- Figma (https://www.figma.com)
- Remove.bg (for background removal)

**Free stock photos:**
- Unsplash (https://unsplash.com)
- Pexels (https://www.pexels.com)
- Pixabay (https://pixabay.com)

## 📅 Date Format

Always use the format: `YYYY-MM-DD`

Examples:
- ✅ `2025-01-15`
- ✅ `2024-12-25`
- ❌ `01/15/2025` (wrong)
- ❌ `15-01-2025` (wrong)

## 🔍 SEO Tips

1. **Title**: Keep it under 60 characters, be descriptive
2. **Excerpt**: Write a compelling 1-2 sentence summary
3. **Headings**: Use proper hierarchy (H1 → H2 → H3)
4. **Images**: Always include alt text
5. **Links**: Link to relevant resources

## 🎯 Best Practices

### Writing

- ✅ Write in a conversational tone
- ✅ Break content into scannable sections
- ✅ Use examples and code snippets
- ✅ Include images to break up text
- ✅ End with a call to action

### Technical

- ✅ Test markdown rendering before pushing
- ✅ Optimize images before uploading
- ✅ Use relative paths for images (`img/...`)
- ✅ Commit related changes together
- ✅ Write descriptive commit messages

### Content

- ✅ Share real experiences and learnings
- ✅ Provide actionable insights
- ✅ Include code examples when relevant
- ✅ Credit sources and inspiration
- ✅ Keep posts focused on one topic

## 🐛 Troubleshooting

### Post not showing up?

1. Check `posts/index.json` - is your post listed?
2. Verify the `file` path matches your actual filename
3. Make sure the date format is correct (`YYYY-MM-DD`)
4. Check browser console for JavaScript errors

### Images not loading?

1. Verify image exists in the `img/` folder
2. Check the path in your markdown (should start with `img/`)
3. Ensure image filename has no spaces or special characters
4. Try using lowercase filenames

### Formatting looks wrong?

1. Check your markdown syntax
2. Make sure code blocks use triple backticks (```)
3. Verify heading levels are correct
4. Test in a markdown preview tool first

## 📚 Example Posts

Look at the existing posts in the `posts/` folder for inspiration:
- `microservices-architecture.md` - Technical deep dive
- `database-optimization.md` - Case study with metrics
- `cicd-best-practices.md` - Best practices guide

## 🚀 Quick Workflow

```bash
# 1. Create your post
vim posts/my-awesome-post.md

# 2. Add thumbnail
cp ~/Downloads/thumb.jpg img/awesome-post-thumb.jpg

# 3. Update index
vim posts/index.json

# 4. Test locally (optional - view in browser)
open garden.html

# 5. Commit and push
git add posts/my-awesome-post.md img/awesome-post-thumb.jpg posts/index.json
git commit -m "Add post: My Awesome Post"
git push origin main

# 6. Wait 1-2 minutes for GitHub Pages to rebuild
```

## 💡 Pro Tips

1. **Draft posts**: Create posts with future dates - they'll appear automatically when the date arrives
2. **Series**: Use consistent naming for post series (e.g., `part-1.md`, `part-2.md`)
3. **Updates**: You can edit posts anytime - just push changes and GitHub Pages will update
4. **Analytics**: Consider adding Google Analytics to track which posts are popular

---

**Happy writing! Your thoughts and experiences are valuable - share them with the world! 🌱**
