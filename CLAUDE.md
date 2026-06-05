# Turei Milner — Portfolio App

## Project overview
Personal portfolio web app for Turei Milner, Full Stack Developer, Auckland NZ.
Built with React + Vite + Tailwind + React Router. Static site, no backend.
Deployed to Vercel at turei.dev.

## Purpose
1. Showcase projects to sponsors and recruiters
2. Evidence learning outcomes for Mission Ready Final Mission (Level 5 Diploma)
3. Personal brand — authentic, Māori identity, trades-to-tech story

## Three-tool workflow
Turei works across three tools:
- PowerShell — runs commands, manages git, installs packages. Always use
  PowerShell-compatible syntax (Select-String not grep, Remove-Item not rm)
- Claude Code (you) — writes and iterates on all code, one step at a time
- Claude AI (claude.ai) — clarity layer for copy, planning, report writing.
  Do not duplicate that work here — focus on code only

## Stack
- React + Vite
- Tailwind CSS
- React Router
- Vercel deployment

## Git workflow
- Always push directly to `master` to trigger a Vercel production deploy
- Vercel auto-deploys on every push to `master`

## Project structure
src/
  components/    # Reusable UI components (Navbar, Footer)
  hooks/         # Custom hooks (useScrollReveal)
  pages/         # One file per route
public/          # Static assets — images served directly by Vite/Vercel
  2littleleashes.png
  Jerrican Trust.png
  RacketUp.png
  TheBroToots Logo1.png
  Zina.app.png
  Hero.section.png
  tootstech.jpg
  projects.bg.png       # Projects page background
  about.bg.png          # About page background
  learning.bg.jpg       # Learning Outcomes page background
  contact.bg.jpg        # Contact page background
  robots.txt            # SEO — allows all crawlers
  sitemap.xml           # SEO — all 5 pages mapped
  googlec4088f0423494cb8.html  # Google Search Console verification file

## Pages
- /            → Hero/Home
- /projects    → Project showcase cards (2x2 grid, background image)
- /about       → Bio, skills, timeline (background image)
- /outcomes    → Learning Outcomes LO1–LO5 accordion (background image)
- /contact     → Contact form + social links (background image)

## Commands
npm run dev       # start dev server (Vite, http://localhost:5173)
npm run build     # production build to dist/
npm run preview   # serve the production build locally

## Projects featured

RACKET UP (primary — internship/Final Mission)
- Tennis academy management platform
- Client: Ryan (academy owner), Frankie (PM), Joe
- UX partner: Ain
- Stack: Node/Express/MySQL/Sequelize + React/Vite
- Status: LIVE at https://racketup.co.nz/
- GitHub: none (button removed from card)
- Card: Live button only

2 LITTLE LEASHES (personal client project — live)
- Dog walking business platform built for client Meihana, Rotorua
- Stack: Next.js + Node + Supabase + Vercel
- Features: booking system, admin dashboard, gallery with photo approval
  workflow, dual transactional email notifications (client + admin)
- Status: LIVE at www.2littleleashes.co.nz
- GitHub: https://github.com/Turei-hub/2littleleashes
- Card: GitHub + Live buttons

ZINA APP (team project — complete)
- AI-powered road trip planner built for Z Energy
- Stack: React, Vite, Node.js, Express, MongoDB, Gemini API, Google Maps API
- Turei's role: ChatPage, BriefFormPage, voice/AI integration, 28 Jest tests
- Status: Complete, Show & Tell delivered April 2026
- GitHub: https://github.com/Turei-hub/zina-app
- Card: GitHub button only (no live URL)

JERRICAN TRUST
- Web platform for the Jerrican Trust
- Stack: React, Node.js
- GitHub: https://github.com/Turei-hub/jerrican-trust
- Live: https://jerrican-trust.vercel.app/
- Card: GitHub + Live buttons

## Theme & design
- Base background: #0b1a17 (dark teal)
- Accent colour: emerald (was indigo — updated June 2026)
- Dot grid background pattern on all pages (index.css)
- Emerald glow blobs fixed to left/right edges (index.css, pulse animation)
- Each page has a unique fixed background image with #0b1a17/80 dark overlay
- Dark theme, mobile first, Tailwind utility classes only
- No alert() — use state swaps for form success/error feedback
- Live button on project cards is conditional — only renders when project.live is set
- GitHub button on project cards is conditional — only renders when project.github is set
- Smooth scroll enabled globally via scroll-behavior: smooth in index.css

## UI enhancements (June 2026)
- Sticky neon green (#39ff14) marquee banner below navbar — continuous loop, 4 copies, translateX(-25%)
  Slogan included: "From the Bush to the Browser"
- Scroll reveal animations on all 5 pages using src/hooks/useScrollReveal.js (IntersectionObserver)
- Hero CTA: "Hire Me" is primary button (emerald glow pulse), "View My Work" is secondary
- Active nav link: emerald underline on desktop, left border on mobile
- vercel.json rewrite rule added — fixes 404 on direct URL / page refresh
- Favicon set to TheBroToots Logo1.png
- Unique document.title set on every page via useEffect
- Image optimisation via vite-plugin-image-optimizer (68% reduction, runs on every build)
- Accessibility: skip-to-content link, aria-labels on all interactive elements,
  aria-expanded on LO accordion, marquee marked aria-hidden

## Mission Ready journey (for timeline accuracy)
- Level 3 — 10 weeks, Tech Career Launchpad
- Level 4 — 10 weeks, Learning to Code (start of 32-week diploma)
- Level 5 — 10 weeks, Missions (insurance chatbot, Zina App, 2 Little Leashes, Jerrican Trust)
- Level 6 — 10 weeks, Final Mission internship — Racket Up (currently week 7)

## Social links
- GitHub: https://github.com/Turei-hub
- LinkedIn: https://www.linkedin.com/in/turei-milner-2682b5361/

## Contact form
- Wired to Formspree: https://formspree.io/f/mbdelqpe
- Sends to: milner.turei@gmail.com
- Success/error state handled with React state (no page reload)

## SEO
- Meta description, Open Graph, Twitter Card all set in index.html
- Google Search Console verified for turei.dev (HTML file method)
- Sitemap submitted to Google Search Console

## Dev preferences
- PowerShell compatible commands only
- Work step by step — one change at a time
- Commit little and often with clear messages
- Ask before touching shared layout components (App.jsx, Layout, Nav)
- Placeholder content stays until Turei explicitly says to replace it
