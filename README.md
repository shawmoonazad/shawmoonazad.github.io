# Academic Portfolio - Md Shawmoon Azad

A clean, compact, and professional academic portfolio website featuring a multi-page structure with consistent navigation.

## 📁 File Structure

```
portfolio/
│
├── index.html          # Home page (Hero + News sections)
├── research.html       # Research Interests
├── publications.html   # Publications list
├── teaching.html       # Teaching Experience
├── timeline.html       # Academic Timeline + Awards
├── contact.html        # Contact Information
│
└── assets/
    ├── cv/
    │   └── CV_Md_Shawmoon_Azad.pdf  # Your CV
    └── img/
        ├── shawmoon.jpg              # Your profile photo
        ├── qc1.png                   # Publication image
        ├── qc2.png                   # Publication image
        ├── qc3.png                   # Publication image
        ├── qc4.png                   # Publication image
        ├── ml1.png                   # Publication image
        ├── ml2.png                   # Publication image
        └── ml3.png                   # Publication image
```

**Important:** Make sure to create the `assets/cv/` and `assets/img/` directories and place your files there.

## ✨ Features

### Compact Academic Design
- **Tighter spacing** and reduced white space for a more traditional academic look
- **Clean typography** using Crimson Text (serif) for headings and Inter (sans-serif) for body text
- **Professional color palette** with navy blue (#1e3a5f) as the primary color
- **Responsive layout** that works on all devices

### Multi-Page Structure
- **Consistent navigation** across all pages
- **Active page highlighting** in the navigation menu
- **Smooth transitions** between sections
- **Shared footer** with social links

### Sections Included
1. **Home (index.html)**: Hero section with bio + News & Updates
2. **Research**: Research interests with 3 main areas
3. **Publications**: Detailed publication cards with links
4. **Teaching**: Teaching experience cards
5. **Timeline**: Academic timeline + Awards & Honors
6. **Contact**: Contact information grid

## 🚀 Deployment on GitHub Pages

### Step 1: Create a GitHub Repository
1. Go to [GitHub](https://github.com) and sign in
2. Click the "+" icon in the top right → "New repository"
3. Name it: `username.github.io` (replace `username` with your GitHub username)
4. Make it public
5. Click "Create repository"

### Step 2: Upload Your Files
You have two options:

#### Option A: Upload via GitHub Web Interface
1. In your new repository, click "Add file" → "Upload files"
2. Drag and drop all 6 HTML files (index.html, research.html, etc.)
3. Create the folder structure:
   - Click "Add file" → "Create new file"
   - Type `assets/cv/CV_Md_Shawmoon_Azad.pdf` (this creates the folders)
   - Upload your CV file
   - Repeat for images: `assets/img/` and upload all image files
4. Click "Commit changes"

#### Option B: Use Git Command Line
```bash
# Navigate to your portfolio folder
cd /path/to/your/portfolio

# Create the assets directories
mkdir -p assets/cv assets/img

# Move your CV and images to the correct folders
# (Make sure to have your CV and images ready)

# Initialize git repository
git init

# Add all files
git add .

# Commit files
git commit -m "Initial portfolio commit"

# Connect to GitHub repository
git remote add origin https://github.com/username/username.github.io.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### Step 3: Enable GitHub Pages
1. Go to your repository settings
2. Scroll down to "Pages" section (in the left sidebar)
3. Under "Source", select "main" branch
4. Click "Save"
5. Your site will be live at: `https://username.github.io`

## 📝 Customization

### Update Your Information
1. **Add your profile image:**
   - Create the directory: `assets/img/`
   - Place your profile photo as `shawmoon.jpg` (or update the path in index.html)
   
2. **Add your CV:**
   - Create the directory: `assets/cv/`
   - Place your CV PDF as `CV_Md_Shawmoon_Azad.pdf` (or update the CV links in all HTML files)

3. **Add publication images:**
   - Place your publication images in `assets/img/` folder
   - Images used: `qc1.png`, `qc2.png`, `qc3.png`, `qc4.png`, `ml1.png`, `ml2.png`, `ml3.png`
   - Update the image paths in `publications.html` if you use different names

### Modify Colors
To change the color scheme, edit the `:root` CSS variables at the top of each HTML file:

```css
:root {
  --primary-blue: #1e3a5f;    /* Main color */
  --accent-blue: #2e5090;     /* Hover/active color */
  --gold-accent: #b8860b;     /* Accent color */
}
```

### Update Links
Make sure to update all external links:
- Google Scholar profile
- ORCID
- GitHub profile
- LinkedIn profile
- Email address
- Phone number
- DOI links for publications

## 🔧 Maintenance

### Adding New Publications
1. Open `publications.html`
2. Copy an existing `publication-card` div
3. Update the content with new publication details
4. Save and push to GitHub

### Adding News Items
1. Open `index.html`
2. Find the `<div class="news-container">` section
3. Copy an existing `news-item` div
4. Add your new news item at the top
5. Save and push to GitHub

## 📱 Mobile Responsiveness

The portfolio is fully responsive and will automatically adjust for:
- Desktop screens (1100px+ width)
- Tablets (768px - 1100px)
- Mobile phones (< 768px)

## 🎨 Design Principles Applied

1. **Academic Standard**: Clean, professional look suitable for academic portfolios
2. **Compact Layout**: Reduced padding and margins for efficient space usage
3. **Readable Typography**: Proper font sizes and line heights for readability
4. **Consistent Branding**: Same header/footer across all pages
5. **Accessibility**: Proper heading hierarchy and semantic HTML

## 📄 Browser Compatibility

Tested and works on:
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers

## 🆘 Troubleshooting

### Site not loading?
- Wait 5-10 minutes after first deployment
- Check that your repository is named correctly: `username.github.io`
- Ensure GitHub Pages is enabled in settings

### Navigation not working?
- Make sure all HTML files are in the root directory
- Check that file names match exactly (case-sensitive)

### Images not showing?
- Verify image URLs are correct
- Upload images to your repository and use relative paths

## 📧 Support

If you need help with customization or deployment, please refer to:
- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [GitHub Guides](https://guides.github.com/)

---

**Last Updated**: October 2025  
**Version**: 1.0
