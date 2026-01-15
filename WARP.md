# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Project Overview

A modern Data Engineering and AI-focused portfolio built as a static single-page application. The site showcases:
- **Data Engineering** projects (AWS Data Lakes, Streaming with Kafka/Flink)
- **AI Integration** capabilities (Analytics chatbots, LLM integration)
- **Cloud Computing** projects (AWS, Terraform, IaC)

The portfolio is deployed via GitHub Pages with automated CI/CD.

## Development Commands

### Sass Compilation
- **Development (watch mode)**: `npm run sass:watch` - Watches and recompiles Sass on file changes
- **Production build**: `npm run sass` - Compiles Sass once

### Local Development Server
Start one of these in a separate terminal after running sass:watch:
- `python3 -m http.server 8000` (recommended)
- `npx serve .`

Then open `http://localhost:8000`

## Architecture Overview

### Sass Architecture (7-1 Pattern)
The project uses the **7-1 architecture pattern** with Sass modules (@use):

- **abstracts/**: Design tokens and utilities
  - `_variables.scss`: Material-inspired colors, typography, spacing system (8px base unit), breakpoints, animations
  - `_mixins.scss`: Reusable patterns (flex utilities, responsive breakpoints, animations, card-base, container)
- **base/**: Foundation styles (reset, typography)
- **layout/**: Structural components (header, footer)
- **components/**: Reusable UI elements (buttons, cards, nav-pills)
- **pages/**: Page-specific styles (home)
- **main.scss**: Entry point that imports all partials in order

**All Sass files compile to** `dist/css/main.css`

### JavaScript Architecture (main.js)
Single vanilla JS file organized by feature:
1. Theme toggle with localStorage persistence
2. Mobile hamburger menu with outside click detection
3. Smooth scrolling navigation
4. Active nav link tracking on scroll
5. Intersection Observer for card/element animations
6. Header shadow effect on scroll
7. Hero page load animations

### Theming System
Dual theme (dark/light) implemented via:
- `data-theme` attribute on `<body>` tag
- CSS custom properties in _variables.scss
- LocalStorage persistence in main.js

### Responsive Design
Mobile-first with breakpoints:
- Mobile: < 600px
- Tablet: 600px - 1023px
- Desktop: ≥ 1024px
- Wide: ≥ 1220px

Use mixins: `@include mobile`, `@include tablet-up`, `@include desktop`, `@include wide`

## Key Design Patterns

### Spacing System
8px base unit: `$spacing-xs` (8px), `$spacing-sm` (16px), `$spacing-md` (24px), `$spacing-lg` (32px), `$spacing-xl` (48px), `$spacing-xxl` (64px)

### Animations
- Use predefined mixins: `@include fade-in()`, `@include slide-up()`, `@include hover-lift()`
- Timing: `$transition-fast` (0.2s), `$transition-base` (0.3s), `$transition-slow` (0.5s)
- Easing: `$easing-standard`, `$easing-decelerate`, `$easing-accelerate`

### Cards
Use `@include card-base` for consistent card styling. Cards observe scroll position and animate in via IntersectionObserver.

## File Organization

When editing styles:
1. **Never edit** `dist/css/main.css` directly - it's generated
2. Edit source files in `sass/` directory
3. Add new partials to appropriate subdirectory
4. Import new partials in `sass/main.scss`

When editing JavaScript:
- All interactivity lives in `js/main.js`
- Organized by feature with clear section comments

## Tech Stack
- **No build frameworks**: Pure HTML/CSS/JS
- **No testing framework**: Manual browser testing
- **Sass**: CSS preprocessing with dart-sass
- **Font Awesome**: Icons (via CDN in HTML)
- **Google Fonts**: Merriweather Sans & Red Hat Mono

## Deployment
Static site - no build step beyond Sass compilation. Deploy `index.html`, `dist/`, `js/`, and `assets/` to any static host (GitHub Pages, Netlify, Vercel, S3).
