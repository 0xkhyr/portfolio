# 🎨 My Portfolio Website

A modern, responsive portfolio website built with a **100% data-driven architecture**. All content is managed through a single JSON file, making updates quick and easy!

🌐 **Live Demo**: [View Portfolio](https://yourusername.github.io/portfolio)

---

## ✨ Features

- ✅ **Data-Driven Architecture** - Separate content from code completely
- ✅ **Single Source of Truth** - Edit one JSON file to update everything
- ✅ **Responsive Design** - Works perfectly on all devices
- ✅ **Dark/Light Theme** - Beautiful theme switcher
- ✅ **Smooth Animations** - Professional transitions and effects
- ✅ **SEO Optimized** - Meta tags and semantic HTML
- ✅ **Contact Form** - Integrated with Formspree
- ✅ **Dynamic Projects Slider** - Swiper.js integration
- ✅ **No Build Process** - Pure HTML/CSS/JavaScript

---

## 🚀 Quick Start

### Step 1: Update Your Data
Edit **one file**: `data/portfolio-data.json`

```json
{
  "personalInfo": {
    "name": "Your Name",
    "title": "Your Title",
    "email": "your.email@example.com"
  },
  "projects": [...],
  "skills": [...]
}
```

### Step 2: Refresh & Done!
Open `index.html` in your browser - all changes appear automatically! ✨

---

## 📁 Project Structure

```
portfolio/
├── index.html                      # Main HTML (clean & dynamic)
├── README.md                       # This file
├── CNAME                          # Custom domain config
├── data/
│   └── portfolio-data.json        # ⭐ YOUR CONTENT HERE
└── assets/
    ├── css/
    │   ├── styles.css            # Main stylesheet
    │   └── swiper-bundle.min.css # Slider styles
    ├── js/
    │   ├── data.js               # 🔄 Data loader
    │   ├── main.js               # ✨ Dynamic content
    │   └── swiper-bundle.min.js  # Slider functionality
    ├── img/                       # Your images
    └── pdf/                       # Documents (optional)
```

---

## 🎯 How It Works

1. **Page loads** → Shows "Loading..." placeholders
2. **data.js** → Fetches `data/portfolio-data.json`
3. **Event fires** → "portfolioDataLoaded" event
4. **main.js** → Populates all sections dynamically
5. **Content appears** → Portfolio fully loaded! 🎉

---

## 🔧 Customization Guide

### Update Personal Information

```json
{
  "personalInfo": {
    "name": "Your Name",
    "title": "Your Title",
    "description": "Short description",
    "location": "Your City, Country",
    "email": "your.email@example.com",
    "telegram": "@yourusername",
    "cv": "https://drive.google.com/...",
    "aboutDescription": "Longer about text",
    "completedProjects": "10+"
  }
}
```

### Add Social Links

```json
{
  "socialLinks": [
    {
      "name": "LinkedIn",
      "url": "https://linkedin.com/in/yourprofile",
      "icon": "uil uil-linkedin-alt"
    }
  ]
}
```

### Add Projects

```json
{
  "projects": [
    {
      "title": "Project Name",
      "description": "What it does",
      "image": "assets/img/project.png",
      "url": "https://github.com/username/repo"
    }
  ]
}
```

### Add Skills

```json
{
  "skills": [
    {
      "category": "Programming Languages",
      "icon": "uil uil-code-branch",
      "subtitle": "Years of experience",
      "items": [
        { "name": "Python", "level": 85 },
        { "name": "JavaScript", "level": 75 }
      ]
    }
  ]
}
```

### Add Education/Work

```json
{
  "education": [
    {
      "title": "Your Degree",
      "institution": "University Name",
      "institutionUrl": "https://university.edu",
      "period": "2020 - 2024"
    }
  ],
  "work": [
    {
      "title": "Job Title",
      "company": "Company Name",
      "companyUrl": "https://company.com",
      "period": "Jan 2024 - Present"
    }
  ]
}
```

---

## 📧 Contact Form Setup

1. Go to [Formspree](https://formspree.io/) and create a free account
2. Create a new form and get your token
3. Update `data/portfolio-data.json`:

```json
{
  "contactForm": {
    "action": "https://formspree.io/f/YOUR_TOKEN",
    "recaptchaSiteKey": "YOUR_RECAPTCHA_KEY"
  }
}
```

---

## 🚀 Deployment

### GitHub Pages

1. Fork this repository
2. Update `data/portfolio-data.json` with your info
3. Go to **Settings** → **Pages**
4. Select your branch and **Save**
5. Your site will be live at `https://yourusername.github.io/portfolio`

### Custom Domain (Optional)

1. Update `CNAME` file with your domain
2. Configure DNS settings with your provider
3. Enable HTTPS in GitHub Pages settings

---

## 🛠️ Local Development

```bash
# Clone the repository
git clone https://github.com/yourusername/portfolio.git
cd portfolio

# Open in browser (use a local server)
python3 -m http.server 8000
# or
php -S localhost:8000

# Visit http://localhost:8000
```

No build process needed! 🎉

---

## 📝 Content Update Workflow

1. **Edit** `data/portfolio-data.json`
2. **Save** the file
3. **Refresh** browser (Ctrl+Shift+R for hard refresh)
4. **Commit** and **Push** to deploy

That's it! 🎊

---

## � Customization Tips

### Change Theme Colors
Edit `assets/css/styles.css` and update CSS variables:

```css
:root {
  --hue-color: 250; /* Change this for different colors */
}
```

### Add More Sections
1. Add HTML structure in `index.html`
2. Add data to `portfolio-data.json`
3. Create population function in `main.js`

### Use Different Icons
- Browse [Unicons](https://iconscout.com/unicons)
- Update icon class in JSON: `"icon": "uil uil-icon-name"`

---

## 📊 Project Stats

- **Lines of Code**: ~1,300 (HTML + JS + JSON)
- **Load Time**: < 1 second
- **Dependencies**: Swiper.js, Unicons
- **Browser Support**: All modern browsers
- **Mobile Responsive**: 100%

---

## 🤝 Contributing

Contributions are welcome! 

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

## 💡 Tips & Best Practices

- ✅ Keep images optimized (< 500KB each)
- ✅ Use descriptive project titles
- ✅ Keep descriptions concise
- ✅ Test on multiple devices
- ✅ Validate JSON before deploying
- ✅ Use absolute URLs for external links
- ✅ Commit regularly to Git

---

## 🐛 Troubleshooting

**Content doesn't load?**
- Check browser console (F12) for errors
- Verify `data/portfolio-data.json` is valid JSON
- Ensure data.js loads before main.js

**Images not showing?**
- Check image paths in JSON
- Ensure images are in `assets/img/`
- Use relative paths: `assets/img/filename.png`

**Swiper slider not working?**
- Make sure swiper-bundle.min.js is loaded
- Check that projects array has items
- Verify swiper-pagination element exists

---

## 🎓 Technologies Used

- **HTML5** - Structure
- **CSS3** - Styling & animations
- **JavaScript (ES6+)** - Dynamic content
- **Swiper.js** - Project slider
- **Unicons** - Icons
- **Formspree** - Contact form
- **JSON** - Data storage

---

## 🌟 Acknowledgments

- Design inspiration from modern portfolio trends
- Icons by [Unicons](https://iconscout.com/unicons)
- Slider by [Swiper.js](https://swiperjs.com/)

---

## 📞 Support

Need help? 

- 📖 Check the code comments
- 🐛 [Open an issue](https://github.com/yourusername/portfolio/issues)
- 💬 Reach out via contact form

---

**Made with ❤️ and ☕**

⭐ Star this repo if you find it helpful!
