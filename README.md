# Portfolio 2.0

A modern, CSS-based portfolio website showcasing data engineering, AI integration, and cloud computing projects. Migrated from MkDocs to a custom Sass-powered single-page application.

## 🎨 Features

- **Modern Design**: Clean, professional design with smooth animations
- **Dark/Light Mode**: Toggle between themes with localStorage persistence
- **Responsive**: Mobile-first design that works on all devices
- **Animated Cards**: Project cards with hover effects and scroll-triggered animations
- **Smooth Navigation**: Sticky header with smooth scrolling and active link tracking
- **Performance**: Optimized Sass compilation and minimal JavaScript

## 🚀 Quick Start

### Development

1. **Compile Sass** (watch mode):
   ```bash
   npm run sass:watch
   ```

2. **Serve locally** (in a new terminal):
   ```bash
   python3 -m http.server 8000
   ```
   Or with Node:
   ```bash
   npx serve .
   ```

3. Open your browser to `http://localhost:8000`

### Production Build

```bash
npm run sass
```

## 📁 Project Structure

```
portfolio2/
├── index.html              # Main HTML file
├── js/
│   └── main.js            # JavaScript functionality
├── sass/                  # Sass source files (7-1 architecture)
│   ├── abstracts/         # Variables, mixins
│   ├── base/              # Reset, typography
│   ├── components/        # Cards, buttons, navigation
│   ├── layout/            # Header, footer
│   ├── pages/             # Page-specific styles
│   └── main.scss          # Main Sass entry point
├── dist/
│   └── css/
│       └── main.css       # Compiled CSS
├── assets/                # Favicon and images
└── package.json           # NPM dependencies
```

## 🛠️ Tech Stack

- **HTML5**: Semantic markup
- **Sass**: CSS preprocessor with 7-1 architecture
- **Vanilla JavaScript**: No frameworks, pure JS for interactivity
- **Font Awesome**: Icons
- **Google Fonts**: Merriweather Sans & Red Hat Mono

## ✨ Key Features Implemented

### Design
- Material Design inspired color scheme (Indigo/Blue)
- Gradient hero section with staggered fade-in animations
- Card-based project layout with hover effects
- Responsive grid (1/2/3 columns based on viewport)

### Functionality
- Theme toggle with localStorage
- Mobile hamburger menu
- Smooth scroll navigation
- Active nav link on scroll
- Intersection Observer for scroll animations
- Enhanced header shadow on scroll

### Sections
- **Hero**: Animated introduction with CTA buttons
- **Data Engineering**: 3 featured projects (Data Lake, Streaming, AWS Pipeline)
- **AI Integration**: Analytics chatbots and AI-powered insights
- **Cloud Computing**: 5 AWS/Terraform projects
- **About**: Skills grouped by category with tech stack

## 📝 npm Scripts

- `npm run sass` - Compile Sass once
- `npm run sass:watch` - Watch and recompile on changes

## 🌐 Deployment

### GitHub Pages (Automated)

The site is configured with GitHub Actions for automatic deployment:
1. Push changes to the `main` branch
2. GitHub Actions automatically compiles Sass and deploys
3. Site is available at `https://bytes0211.github.io/portfolio2/`

**Manual GitHub Pages Setup** (if needed):
1. Go to repository Settings → Pages
2. Source: "GitHub Actions"
3. Push to `main` branch to trigger deployment

### Other Hosting Options
The site can also be deployed to:
- Netlify
- Vercel
- AWS S3 + CloudFront
- Any static hosting service

## 📄 License

Copyright © 2018 - 2025 Steven Cotton

## 🔗 Connect

- [LinkedIn](https://www.linkedin.com/in/steven-cotton-7948157)
- [Bluesky](https://bsky.app/profile/stevenwcotton.bsky.social)
- [Email](mailto:stevenwcotton@gmail.com)
