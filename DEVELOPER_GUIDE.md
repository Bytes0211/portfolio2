# Developer's Guide

## Table of Contents
1. [Local Development Setup](#local-development-setup)
2. [Project Structure](#project-structure)
3. [Development Workflow](#development-workflow)
4. [GitHub Pages Configuration](#github-pages-configuration)
5. [Deployment](#deployment)
6. [Troubleshooting](#troubleshooting)

---

## Local Development Setup

### Prerequisites
- **Node.js** (v20 or higher recommended)
- **npm** (comes with Node.js)
- **Git**
- **Python 3** (optional, for local server)

### Initial Setup

1. **Clone the repository**
   ```bash
   git clone git@github.com:Bytes0211/portfolio2.git
   cd portfolio2
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

### Starting Development

#### Option 1: Recommended Two-Terminal Approach

**Terminal 1 - Sass Compilation (watch mode):**
```bash
npm run sass:watch
```
This watches for changes in `sass/` directory and automatically recompiles to `dist/css/main.css`.

**Terminal 2 - Local Development Server:**
```bash
# Using Python (recommended)
python3 -m http.server 8000

# OR using Node.js
npx serve .
```

**Access the site:**
- Open browser to `http://localhost:8000`

#### Option 2: Manual Compilation

For one-time Sass compilation without watching:
```bash
npm run sass
```
Then start your preferred local server.

---

## Project Structure

```
portfolio2/
├── .github/
│   └── workflows/
│       └── ci.yml              # GitHub Actions workflow for deployment
├── assets/                     # Static assets (favicons, images)
│   ├── favicon.ico
│   └── favicon.png
├── dist/
│   ├── css/
│   │   └── main.css           # Compiled CSS (generated, don't edit)
│   └── notebooks/             # Converted Jupyter notebooks (if any)
├── js/
│   └── main.js                # Main JavaScript file
├── sass/                       # Sass source files (7-1 architecture)
│   ├── abstracts/
│   │   ├── _mixins.scss       # Reusable mixins
│   │   └── _variables.scss    # Design tokens (colors, spacing, etc.)
│   ├── base/
│   │   ├── _reset.scss        # CSS reset
│   │   └── _typography.scss   # Typography styles
│   ├── components/
│   │   ├── _buttons.scss      # Button styles
│   │   ├── _cards.scss        # Project card styles
│   │   └── _nav-pills.scss    # Navigation pill styles
│   ├── layout/
│   │   ├── _footer.scss       # Footer styles
│   │   └── _header.scss       # Header/navigation styles
│   ├── pages/
│   │   └── _home.scss         # Homepage-specific styles
│   └── main.scss              # Main entry point (imports all partials)
├── index.html                  # Main HTML file
├── package.json                # NPM configuration
├── README.md                   # Project overview
├── WARP.md                     # Warp AI agent instructions
└── DEVELOPER_GUIDE.md          # This file

```

### Key Files to Edit

**HTML Content:**
- `index.html` - Main content, projects, sections

**Styling:**
- `sass/**/*.scss` - All style changes (NEVER edit `dist/css/main.css` directly)
- `sass/_variables.scss` - Colors, spacing, breakpoints
- `sass/_mixins.scss` - Reusable style patterns

**JavaScript:**
- `js/main.js` - All interactive functionality

**Configuration:**
- `package.json` - NPM scripts and dependencies
- `.github/workflows/ci.yml` - CI/CD pipeline

---

## Development Workflow

### Making Style Changes

1. **Edit Sass files** in `sass/` directory
2. Sass watcher automatically compiles to `dist/css/main.css`
3. Refresh browser to see changes (no build step required)

### Adding New Sass Modules

1. Create new file in appropriate directory: `sass/components/_new-component.scss`
2. Add import to `sass/main.scss`:
   ```scss
   @use 'components/new-component';
   ```

### Working with the Theme System

The site supports dark/light themes via CSS custom properties:
- Theme is controlled by `data-theme` attribute on `<body>`
- Variables defined in `sass/abstracts/_variables.scss`
- JavaScript toggle in `js/main.js`
- Theme persists via localStorage

### Responsive Design

Use predefined breakpoints with mixins:
```scss
// Mobile-first approach
.element {
  // Base mobile styles
  
  @include tablet-up {
    // Tablet styles (≥ 600px)
  }
  
  @include desktop {
    // Desktop styles (≥ 1024px)
  }
  
  @include wide {
    // Wide desktop (≥ 1220px)
  }
}
```

---

## GitHub Pages Configuration

### Current Setup

The project is **already configured** with GitHub Actions for automated deployment.

#### How It Works

1. **Push to `main` branch** triggers the workflow
2. **GitHub Actions** (`.github/workflows/ci.yml`):
   - Checks out code
   - Installs Node.js dependencies
   - Compiles Sass (`npm run sass`)
   - Uploads site artifact
   - Deploys to GitHub Pages
3. **Site is live** at `https://bytes0211.github.io/portfolio2/`

### Manual Configuration (If Starting Fresh)

If you need to set up GitHub Pages from scratch:

#### Step 1: Repository Settings
1. Go to repository on GitHub
2. Navigate to **Settings** → **Pages**
3. Under "Source", select **GitHub Actions**

#### Step 2: Verify Workflow File
Ensure `.github/workflows/ci.yml` exists with proper configuration:
```yaml
name: ci
on:
  push:
    branches:
      - main
permissions:
  contents: read
  pages: write
  id-token: write
```

#### Step 3: Push to Main Branch
```bash
git add .
git commit -m "Configure GitHub Pages"
git push origin main
```

#### Step 4: Monitor Deployment
1. Go to **Actions** tab in GitHub repository
2. Watch the workflow run
3. Once complete, site is live at `https://[username].github.io/[repo-name]/`

### Custom Domain (Optional)

To use a custom domain:

1. **In GitHub Settings → Pages:**
   - Enter custom domain (e.g., `portfolio.example.com`)
   - Enable "Enforce HTTPS"

2. **In DNS Provider:**
   - Add CNAME record pointing to `[username].github.io`
   - Or A records pointing to GitHub Pages IPs

3. **Add CNAME file to repository root:**
   ```bash
   echo "portfolio.example.com" > CNAME
   git add CNAME
   git commit -m "Add custom domain"
   git push origin main
   ```

---

## Deployment

### Automated Deployment (GitHub Pages)

**Every push to `main` automatically deploys:**
```bash
# Make changes
git add .
git commit -m "Update portfolio content"
git push origin main

# GitHub Actions handles the rest
```

### Manual Deployment to Other Hosts

#### Prerequisites
```bash
npm run sass  # Compile Sass first
```

#### Netlify
1. Connect repository in Netlify dashboard
2. Build command: `npm run sass`
3. Publish directory: `.`

#### Vercel
1. Connect repository in Vercel dashboard
2. Build command: `npm run sass`
3. Output directory: `.`

#### AWS S3 + CloudFront
```bash
# Build
npm run sass

# Upload to S3
aws s3 sync . s3://your-bucket-name \
  --exclude ".git/*" \
  --exclude "node_modules/*" \
  --exclude "sass/*"

# Invalidate CloudFront cache
aws cloudfront create-invalidation \
  --distribution-id YOUR_DIST_ID \
  --paths "/*"
```

---

## Troubleshooting

### Sass Not Compiling

**Problem:** Changes not reflected after editing Sass files

**Solutions:**
1. Check if `sass:watch` is running
2. Look for syntax errors in terminal output
3. Manually compile: `npm run sass`
4. Restart the watch process

### Local Server Not Working

**Problem:** Cannot access `http://localhost:8000`

**Solutions:**
1. Ensure server is running in terminal
2. Try different port: `python3 -m http.server 3000`
3. Check for port conflicts: `lsof -i :8000`
4. Try alternative server: `npx serve .`

### GitHub Actions Failing

**Problem:** Deployment workflow fails

**Solutions:**
1. Check **Actions** tab for error logs
2. Common issues:
   - `npm ci` fails → Delete `package-lock.json`, run `npm install` locally, commit
   - Sass compilation fails → Check for syntax errors in Sass files
   - Permission denied → Verify Pages permissions in `.github/workflows/ci.yml`

3. Test locally first:
   ```bash
   npm ci
   npm run sass
   ```

### Theme Not Persisting

**Problem:** Theme resets on page reload

**Solutions:**
1. Check browser console for JavaScript errors
2. Verify localStorage is enabled in browser
3. Check `js/main.js` theme toggle code
4. Clear browser cache and localStorage

### Mobile Menu Not Working

**Problem:** Hamburger menu doesn't open/close

**Solutions:**
1. Check browser console for errors
2. Verify `js/main.js` is loaded: `<script src="js/main.js"></script>`
3. Check that hamburger button has `id="hamburger"`
4. Check that nav has `id="nav"`

---

## NPM Scripts Reference

```bash
# Compile Sass once
npm run sass

# Watch and recompile Sass on changes
npm run sass:watch

# Convert Jupyter notebooks to HTML (if applicable)
npm run notebooks
```

---

## Additional Resources

### Documentation
- [Sass Documentation](https://sass-lang.com/documentation)
- [GitHub Pages Docs](https://docs.github.com/en/pages)
- [GitHub Actions Docs](https://docs.github.com/en/actions)

### Project Links
- **Repository:** https://github.com/Bytes0211/portfolio2
- **Live Site:** https://bytes0211.github.io/portfolio2/
- **Issues:** https://github.com/Bytes0211/portfolio2/issues

---

## Quick Reference Commands

```bash
# Development
npm install                    # Install dependencies
npm run sass:watch            # Start Sass watcher
python3 -m http.server 8000   # Start local server

# Production
npm run sass                  # Build for production
git push origin main          # Deploy to GitHub Pages

# Troubleshooting
npm ci                        # Clean install dependencies
rm -rf node_modules package-lock.json && npm install  # Reset dependencies
```

---

**Last Updated:** January 15, 2026
