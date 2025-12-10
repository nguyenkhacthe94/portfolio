# Portfolio Website - The Nguyen Khac

A clean, content-focused portfolio website inspired by editorial design principles, showcasing my experience as a .NET Engineer and Technical Leader.

## 🎨 Design Philosophy

This portfolio follows a refined editorial aesthetic inspired by Ness Labs, prioritizing:

- **Readability First**: Generous whitespace and optimal line-height for comfortable reading
- **Elegant Typography**: Lora (serif) for body text paired with DM Sans for headings
- **Warm Color Palette**: Cream background (#faf8f5) with coral and teal accents
- **Content Focus**: Minimal distractions, letting your experience shine
- **Professional Yet Approachable**: Clean borders and subtle hover effects

## 🚀 Live Demo

Once deployed, your portfolio will be available at: `https://[your-username].github.io/[repository-name]`

## ✨ Features

- **Sticky Navigation**: Easy access to all sections
- **Stats Showcase**: Highlight key achievements (7+ years, 96% satisfaction, 60x performance)
- **Experience Timeline**: Clean presentation of work history
- **Project Cards**: Showcase personal projects with descriptions
- **Responsive Design**: Works beautifully on all devices
- **Smooth Scrolling**: Enhanced navigation experience
- **Accessibility**: Respects user motion preferences

## 🛠️ Technologies Used

- HTML5 (Semantic markup)
- CSS3 (Custom Properties, Grid, Flexbox)
- Vanilla JavaScript (Smooth scrolling)
- Google Fonts (Lora & DM Sans)

## 📦 Deployment to GitHub Pages

### Step 1: Create a GitHub Repository

1. Go to [GitHub](https://github.com) and sign in
2. Click the "+" icon in the top right and select "New repository"
3. Name your repository (e.g., `portfolio` or `my-portfolio`)
4. Choose "Public" visibility
5. Click "Create repository"

### Step 2: Push Your Code

```bash
# Initialize git in your project folder
git init

# Add all files
git add .

# Commit your changes
git commit -m "Initial commit: Portfolio website"

# Add your GitHub repository as remote
git remote add origin https://github.com/[your-username]/[repository-name].git

# Push to GitHub
git branch -M main
git push -u origin main
```

### Step 3: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click on "Settings" tab
3. Scroll down to "Pages" in the left sidebar
4. Under "Source", select "main" branch
5. Select "/ (root)" folder
6. Click "Save"
7. Wait a few minutes for deployment

Your site will be live at: `https://[your-username].github.io/[repository-name]`

## 🎨 Customization

### Update Social Links

Replace the placeholder Facebook link in the HTML:

```html
<!-- Find this line and update with your actual Facebook profile -->
<a href="https://facebook.com/[your-facebook-username]" target="_blank" class="social-link">
    Facebook →
</a>
```

### Modify Colors

Edit the CSS variables at the top of the `<style>` section:

```css
:root {
    --bg-primary: #faf8f5;        /* Background color */
    --bg-secondary: #ffffff;       /* Card backgrounds */
    --text-primary: #2d2d2d;       /* Main text color */
    --text-secondary: #666666;     /* Secondary text */
    --accent-primary: #d4745a;     /* Coral accent */
    --accent-secondary: #7a9ea6;   /* Teal accent */
    --border-color: #e8e4de;       /* Border color */
}
```

### Change Typography

To use different fonts, update the Google Fonts import:

```html
<!-- Replace Lora and DM Sans with your preferred fonts -->
<link href="https://fonts.googleapis.com/css2?family=YOUR_FONT:wght@400;500;700&display=swap" rel="stylesheet">
```

Then update the CSS font-family declarations.

### Update Content

All content is in the HTML file. Simply find the relevant section and update:
- Personal information in the header
- Stats in the stats section
- Skills in the skills grid
- Work experience in the experience items
- Projects in the projects grid
- Education and certifications

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🔍 SEO Optimization

Consider adding these meta tags to the `<head>` section:

```html
<meta name="description" content="Portfolio of The Nguyen Khac - .NET Engineer & Technical Leader with 7+ years experience">
<meta name="keywords" content=".NET, C#, Java, Software Engineer, Technical Leader">
<meta name="author" content="The Nguyen Khac">
<meta property="og:title" content="The Nguyen Khac - Portfolio">
<meta property="og:description" content=".NET Engineer & Technical Leader">
<meta property="og:type" content="website">
```

## 📄 License

Feel free to use this template for your own portfolio! No attribution required.

## 🤝 Contact

- **Email**: nguyenkhacthe94@gmail.com
- **Location**: Hanoi, Vietnam
- **Phone**: +84 968 120 757
- **LinkedIn**: [linkedin.com/in/nguyenkhacthe94](https://linkedin.com/in/nguyenkhacthe94)
- **GitHub**: [github.com/nguyenkhacthe94](https://github.com/nguyenkhacthe94)

---

Built with attention to typography, readability, and content-first design principles.
