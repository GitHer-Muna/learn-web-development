# Project 1: Personal Portfolio Website

> Your first step into web development! Build a personal portfolio to showcase yourself.

## What you'll learn
- HTML structure and semantic elements
- CSS basics (selectors, styling, layout)
- Responsive design fundamentals
- How to deploy a website

## Project Preview
![Portfolio Preview](preview.png)

## Getting Started

### What you need
- Text editor (VS Code recommended)
- Web browser
- 30 minutes of your time

### Files in this project
```
project-01-personal-portfolio/
├── index.html          # Main HTML file
├── style.css           # CSS styling
├── images/             # Your photos and assets
├── README.md           # This file
└── examples/           # Code examples
```

## Step-by-Step Guide

### Step 1: Basic HTML Structure
Start with `index.html`:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Your Name - Portfolio</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <header>
        <h1>Hi, I'm [Your Name]</h1>
        <p>Web Development Student</p>
    </header>
    
    <main>
        <section id="about">
            <h2>About Me</h2>
            <p>Write something about yourself...</p>
        </section>
        
        <section id="skills">
            <h2>Skills</h2>
            <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>Learning JavaScript</li>
            </ul>
        </section>
        
        <section id="contact">
            <h2>Contact</h2>
            <p>Email: your.email@example.com</p>
        </section>
    </main>
</body>
</html>
```

### Step 2: Add Basic Styling
Create `style.css`:

```css
/* Reset and basics */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: Arial, sans-serif;
    line-height: 1.6;
    color: #333;
}

/* Header styling */
header {
    background: #4CAF50;
    color: white;
    text-align: center;
    padding: 2rem;
}

header h1 {
    font-size: 2.5rem;
    margin-bottom: 0.5rem;
}

/* Main content */
main {
    max-width: 800px;
    margin: 0 auto;
    padding: 2rem;
}

section {
    margin-bottom: 2rem;
}

h2 {
    color: #4CAF50;
    margin-bottom: 1rem;
}

/* Skills list */
#skills ul {
    list-style: none;
    display: flex;
    gap: 1rem;
}

#skills li {
    background: #f4f4f4;
    padding: 0.5rem 1rem;
    border-radius: 5px;
}

/* Responsive design */
@media (max-width: 600px) {
    header h1 {
        font-size: 2rem;
    }
    
    #skills ul {
        flex-direction: column;
    }
}
```

### Step 3: Make it Your Own
1. Replace "[Your Name]" with your actual name
2. Add your own photo to the `images/` folder
3. Write your own "About Me" section
4. Add your real contact information
5. Customize the colors to your liking

### Step 4: Test Your Website
1. Open `index.html` in your browser
2. Resize the window to test responsiveness
3. Check that all links work

## Challenges
Try these to level up:

### Easy
- [ ] Change the color scheme
- [ ] Add a profile photo
- [ ] Add more sections (Projects, Education)

### Medium  
- [ ] Add smooth scrolling navigation
- [ ] Create a CSS grid layout
- [ ] Add hover effects to elements

### Hard
- [ ] Add a dark/light theme toggle
- [ ] Create CSS animations
- [ ] Make it fully accessible

## Common Issues & Solutions

**Problem:** CSS not loading  
**Solution:** Check the file path in your HTML `<link>` tag

**Problem:** Website looks different on phone  
**Solution:** Make sure you have the viewport meta tag

**Problem:** Colors not showing  
**Solution:** Use valid CSS color values (#hex, rgb(), or color names)

## What's Next?
Once you complete this project:
1. Move on to Project 2 (Restaurant Website)
2. Deploy your site using GitHub Pages
3. Share it with friends and get feedback

## Resources
- [HTML Basics Guide](../resources/html-basics.md)
- [CSS Fundamentals](../resources/css-fundamentals.md)
- [Color Picker Tool](https://coolors.co/)
- [Google Fonts](https://fonts.google.com/)

## Need Help?
- Open an issue on GitHub
- Check the examples folder
- Ask in our community discussions

---
**Time to complete:** 2-4 hours  
**Difficulty:** Beginner ⭐  
**Skills gained:** HTML structure, CSS basics, responsive design
