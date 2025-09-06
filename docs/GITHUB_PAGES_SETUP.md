# 🌐 GitHub Pages Setup Guide

## Live Demo Website Setup

GitHub Pages will create a live website for your repository at:
`https://GitHer-Muna.github.io/learn-web-development/`

## Step-by-Step Setup

### 1. Enable GitHub Pages
```
1. Go to: https://github.com/GitHer-Muna/learn-web-development
2. Click: Settings tab
3. Scroll to: Pages (left sidebar)
4. Under "Source": Select "Deploy from a branch"
5. Branch: Select "main"
6. Folder: Select "/ (root)"
7. Click: Save
```

### 2. Wait for Deployment
- GitHub will build your site (takes 2-10 minutes)
- You'll get a green checkmark when ready
- URL will be: `https://GitHer-Muna.github.io/learn-web-development/`

### 3. Custom Domain (Optional)
If you have a custom domain:
```
1. Add CNAME file to repository root
2. Enter your domain in Pages settings
3. Configure DNS records
```

## What Gets Published

Your repository structure becomes a website:
```
https://GitHer-Muna.github.io/learn-web-development/
├── index.html (Homepage)
├── project-01-personal-portfolio/
├── project-02-restaurant-website/
├── project-03-javascript-apps/
├── project-04-dynamic-web-apps/
├── examples/
└── exercises/
```

## Live Demo URLs

Once deployed, students can access:

### **Main Homepage:**
`https://GitHer-Muna.github.io/learn-web-development/`

### **Project Demos:**
- **Portfolio:** `https://GitHer-Muna.github.io/learn-web-development/project-01-personal-portfolio/`
- **Restaurant:** `https://GitHer-Muna.github.io/learn-web-development/project-02-restaurant-website/`
- **Calculator:** `https://GitHer-Muna.github.io/learn-web-development/project-03-javascript-apps/calculator/`
- **Todo App:** `https://GitHer-Muna.github.io/learn-web-development/project-04-dynamic-web-apps/todo-app/`
- **Weather App:** `https://GitHer-Muna.github.io/learn-web-development/project-04-dynamic-web-apps/weather-dashboard/`

### **Learning Resources:**
- **Examples:** `https://GitHer-Muna.github.io/learn-web-development/examples/`
- **Exercises:** `https://GitHer-Muna.github.io/learn-web-development/exercises/`

## Update README with Live Demos

Add this section to your README.md:
```markdown
## 🌐 Live Demos

Try the projects online without downloading:

| Project | Live Demo | Description |
|---------|-----------|-------------|
| Portfolio | [View Demo](https://GitHer-Muna.github.io/learn-web-development/project-01-personal-portfolio/) | Personal portfolio website |
| Restaurant | [View Demo](https://GitHer-Muna.github.io/learn-web-development/project-02-restaurant-website/) | Multi-page restaurant site |
| Calculator | [View Demo](https://GitHer-Muna.github.io/learn-web-development/project-03-javascript-apps/calculator/) | Interactive calculator |
| Todo App | [View Demo](https://GitHer-Muna.github.io/learn-web-development/project-04-dynamic-web-apps/todo-app/) | Task management app |
| Weather Dashboard | [View Demo](https://GitHer-Muna.github.io/learn-web-development/project-04-dynamic-web-apps/weather-dashboard/) | Weather information app |
```

## Benefits
- 🌐 **Instant access** for students
- 📱 **Test on mobile devices**
- 🔗 **Share direct links**
- 💼 **Portfolio showcase**
- 🎓 **Better learning experience**

## Automatic Updates
- Every push to main branch updates the live site
- Changes appear within 2-10 minutes
- No manual deployment needed

---
*This file can be deleted after setup is complete.*
