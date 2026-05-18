# Turei Milner — Portfolio App

## Project overview
Personal portfolio web app for Turei Milner, Full Stack Developer, Auckland NZ.
Built with React + Vite + Tailwind + React Router. Static site, no backend.
Deployed to Vercel.

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

## Project structure
src/
  components/    # Reusable UI components
  pages/         # One file per route
  assets/        # Images, icons
  data/          # Project and LO data as JS objects

## Pages
- /            → Hero/Home
- /projects    → Project showcase cards
- /about       → Bio, skills, timeline
- /outcomes    → Learning Outcomes (LO1–LO5 mapped to projects)
- /contact     → Contact form + links

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
- Status: In development, deploying in ~5 weeks
- GitHub: [add link]
- Live: [add when deployed]

2 LITTLE LEASHES (personal client project — live)
- Dog walking business platform built for client Meihana, Rotorua
- Stack: Next.js + Node + Supabase + Vercel
- Features: booking system, admin dashboard, gallery with photo approval
  workflow, dual transactional email notifications (client + admin)
- Status: LIVE at www.2littleleashes.co.nz
- GitHub: [add link]

ZINA APP (team project — complete)
- AI-powered road trip planner built for Z Energy
- Stack: React, Vite, Node.js, Express, MongoDB, Gemini API, Google Maps API
- Turei's role: ChatPage, BriefFormPage, voice/AI integration, 28 Jest tests
- Status: Complete, Show & Tell delivered April 2026
- GitHub: [add link]

TRADEMEAPP (coursework — complete)
- Auction platform simulation
- Stack: React/Vite + Node/Express/MongoDB
- GitHub: [add link]

## Learning Outcomes (Final Mission evidence)
LO1 — Industry best practices (product backlog, data modelling, REST APIs)
LO2 — Agile + design thinking (iterative dev, client meetings, UX collaboration)
LO3 — Ethics (data privacy, accessibility, stakeholder impact)
LO4 — Communication + collaboration (client meetings, mentor check-ins, PR reviews)
LO5 — Personal contribution + employability growth

## Design conventions
- Dark theme default
- Mobile first always
- Tailwind utility classes only — no custom CSS unless absolutely necessary
- One component per section/page — keep them clean and reusable
- Placeholder divs for images until real assets are ready
- No alert() — use state swaps for form success/error feedback

## Dev preferences
- PowerShell compatible commands only
- Work step by step — one change at a time
- Commit little and often with clear messages
- Ask before touching shared layout components (App.jsx, Layout, Nav)
- Placeholder content stays until Turei explicitly says to replace it
