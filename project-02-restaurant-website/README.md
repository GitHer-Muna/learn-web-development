# Project 2: Restaurant Website

> Build a complete multi-page restaurant website with navigation and image galleries!

## What you'll learn
- Multi-page website structure
- Advanced CSS layouts (Grid & Flexbox)
- Navigation systems
- Image galleries and optimization
- Professional website design

## Project Preview
![Restaurant Website Preview](preview.png)

## Getting Started

### What you need
- Completed Project 1 (or basic HTML/CSS knowledge)
- Text editor
- Web browser  
- 2-3 hours of your time

### Files in this project
```
project-02-restaurant-website/
├── index.html              # Homepage
├── breakfast.html          # Breakfast menu page
├── lunch.html             # Lunch menu page  
├── dinner.html            # Dinner menu page
├── restaurant.css         # All styling
├── restaurant.js          # Interactive features
├── images/                # Food photos
└── README.md              # This guide
```

## Step-by-Step Guide

### Step 1: Understanding the Structure
This is a **multi-page website**! Each HTML file is a separate page:

- `index.html` - Welcome page with hours & navigation
- `breakfast.html` - Morning menu
- `lunch.html` - Afternoon menu  
- `dinner.html` - Evening menu

### Step 2: Navigation Between Pages
Notice how we link between pages:
```html
<nav>
    <ul class="nav-links">
        <li><a href="index.html">Home</a></li>
        <li><a href="breakfast.html">Breakfast</a></li>
        <li><a href="lunch.html">Lunch</a></li>
        <li><a href="dinner.html">Dinner</a></li>
    </ul>
</nav>
```

### Step 3: CSS Grid for Layout
Learn CSS Grid with the menu items:
```css
.menu-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
}
```

### Step 4: Responsive Images
Make images work on all devices:
```css
.menu-item img {
    width: 100%;
    height: 200px;
    object-fit: cover;
}
```

### Step 5: Interactive Features
The JavaScript adds:
- Image modal viewing
- Smooth hover effects
- Loading animations

## Key Concepts Learned

### CSS Grid vs Flexbox
- **Grid**: For 2D layouts (rows AND columns)
- **Flexbox**: For 1D layouts (just rows OR columns)

### Navigation Patterns
```html
<!-- Always include navigation in each page -->
<nav>
    <ul>
        <li><a href="index.html">Home</a></li>
        <li><a href="page2.html">Page 2</a></li>
    </ul>
</nav>
```

### Responsive Images
```css
/* Make images responsive */
img {
    max-width: 100%;
    height: auto;
}

/* Fixed aspect ratio */
.card img {
    width: 100%;
    height: 200px;
    object-fit: cover;
}
```

### Card Layouts
```css
.card {
    background: white;
    border-radius: 10px;
    box-shadow: 0 5px 15px rgba(0,0,0,0.1);
    transition: transform 0.3s ease;
}

.card:hover {
    transform: translateY(-5px);
}
```

## Customization Ideas

### Easy Changes
- [ ] Change restaurant name and theme
- [ ] Replace food images with your own
- [ ] Update colors and fonts
- [ ] Add your own menu items

### Medium Challenges  
- [ ] Add a contact page with a form
- [ ] Create an "About Us" page
- [ ] Add customer review section
- [ ] Implement a image slideshow

### Advanced Features
- [ ] Add online ordering form
- [ ] Create a blog section
- [ ] Add Google Maps integration
- [ ] Implement search functionality

## Common Issues & Solutions

**Problem:** Images not showing  
**Solution:** Check file paths and make sure images are in the `images/` folder

**Problem:** Navigation not working  
**Solution:** Ensure all HTML files are in the same folder

**Problem:** Layout breaking on mobile  
**Solution:** Test your CSS Grid and Flexbox properties

**Problem:** Slow loading  
**Solution:** Optimize image sizes (use tools like TinyPNG)

## File Structure Best Practices

### Organize Your Files
```
project-folder/
├── index.html          # Main page
├── about.html          # Other pages  
├── contact.html
├── css/
│   └── style.css       # All CSS
├── js/
│   └── script.js       # All JavaScript  
├── images/
│   ├── food1.jpg       # Optimized images
│   └── food2.jpg
└── README.md
```

### Naming Conventions
- Use lowercase letters
- Use hyphens for spaces: `menu-item.html`
- Be descriptive: `breakfast-menu.html`

## Testing Your Website

### Test Checklist
- [ ] All pages load correctly
- [ ] Navigation works between pages
- [ ] Images display properly
- [ ] Website works on mobile
- [ ] All links are working
- [ ] Forms submit correctly (if added)

### Cross-Browser Testing
Test in different browsers:
- Chrome
- Firefox  
- Safari (if on Mac)
- Edge

## Deployment Options

### GitHub Pages (Free)
1. Push code to GitHub repository
2. Go to Settings > Pages
3. Select main branch
4. Your site will be at: `username.github.io/repo-name`

### Netlify (Free)
1. Drag your project folder to netlify.com
2. Get instant live URL
3. Updates automatically when you push to GitHub

## What's Next?

After completing this project:
1. **Move to Project 3** - JavaScript Apps
2. **Deploy your restaurant site** - Share it with friends!
3. **Get feedback** - Ask others to test your site
4. **Iterate and improve** - Keep making it better

## Resources

### Design Inspiration
- [Dribbble](https://dribbble.com/tags/restaurant_website)
- [Awwwards](https://www.awwwards.com/websites/restaurant/)

### Tools
- [Unsplash](https://unsplash.com/s/photos/food) - Free food images
- [Coolors](https://coolors.co/) - Color palette generator
- [Google Fonts](https://fonts.google.com/) - Free web fonts

### Learning
- [CSS Grid Guide](https://css-tricks.com/snippets/css/complete-guide-grid/)
- [Flexbox Guide](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)

## Need Help?
- Check the examples in this folder
- Open a GitHub issue
- Ask in community discussions
- Review Project 1 if you're stuck

---
**Time to complete:** 4-6 hours  
**Difficulty:** Beginner-Intermediate ⭐⭐  
**Skills gained:** Multi-page sites, CSS Grid, Navigation, Image handling
