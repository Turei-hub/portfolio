import { useState } from 'react'
import useScrollReveal from '../hooks/useScrollReveal'

const outcomes = [
  {
    id: 'LO1',
    title: 'Full Stack Technical Capability',
    summary: 'Design and build a complete web application from front end to back end.',
    detail:
      'Across three production projects I designed and shipped complete full-stack applications. For 2 Little Leashes I built the entire platform solo — a Next.js frontend, Node.js/Express API, and Supabase (PostgreSQL) database, deployed to Vercel with dual transactional email notifications and a photo approval workflow. For Racket Up I built REST API endpoints with Express and Sequelize on a MySQL database, integrating with a React frontend built alongside a product team. For Zina App I owned the ChatPage and BriefFormPage, integrated the Gemini AI API and Google Maps API, and connected the voice input feature end-to-end. In each case I handled data modelling, API design, state management, and deployment — not just isolated components.',
    projects: ['Racket Up', 'Zina App', '2 Little Leashes'],
  },
  {
    id: 'LO2',
    title: 'Agile Development Practices',
    summary: 'Apply iterative, user-centred Agile methods throughout a project lifecycle.',
    detail:
      'On Racket Up I worked within a real product team structure with a client (Ryan), a project manager (Frankie), a UX partner (Ain), and a developer peer (Joe). We ran sprints with a product backlog, held regular standups, and iterated based on client feedback in review sessions. Features were broken into user stories and prioritised collaboratively — nothing was built without a clear user need behind it. On Zina App the team used a shared GitHub repo with branch-based workflows, pull request reviews, and a Show & Tell delivery deadline that drove sprint planning. Both projects gave me direct experience of the gap between what a client asks for and what they actually need — and how Agile ceremonies create the space to close that gap.',
    projects: ['Racket Up', 'Zina App'],
  },
  {
    id: 'LO3',
    title: 'Security, Testing & Quality',
    summary: 'Write secure, tested, and maintainable code across front and back end.',
    detail:
      'For Zina App I wrote 28 Jest unit tests covering the core AI and form logic — the most rigorous test suite I\'ve built to date. For 2 Little Leashes I implemented environment variable management for Supabase keys and email credentials, keeping secrets out of the codebase entirely. Input validation runs on both the client and server side. I applied OWASP principles around authentication flows and protected admin routes with server-side checks rather than relying on client state alone. On Racket Up I used Sequelize as an ORM to prevent SQL injection at the data layer. Quality to me means code that a teammate can read without asking questions — I aim for clear naming, small focused functions, and no silent failures.',
    projects: ['Zina App', '2 Little Leashes'],
  },
  {
    id: 'LO4',
    title: 'Collaboration & Communication',
    summary: 'Work effectively in a team and communicate technical concepts to varied audiences.',
    detail:
      'On Racket Up I held direct client meetings with Ryan to gather requirements, translate them into technical tasks, and report back on progress in plain language. I worked alongside Ain on UX decisions, bridging design intent and implementation constraints. Code collaboration ran through GitHub — branching, pull requests, and peer reviews were part of the daily workflow. For Zina App the team presented a full Show & Tell to Z Energy stakeholders in April 2026, where I explained the AI integration and demo\'d the voice input feature live. For 2 Little Leashes I managed the entire client relationship with Meihana — scoping requirements, communicating timelines, and training her on the admin dashboard after launch. Communicating across technical and non-technical audiences is something I\'ve had to do consistently across every project.',
    projects: ['Racket Up'],
  },
  {
    id: 'LO5',
    title: 'Professional Reflection & Growth',
    summary: 'Reflect critically on your own learning journey and professional development.',
    detail:
      'I came into this programme from a trades background — felling trees, building structures, working with my hands in the bush. The instincts are the same: read the situation, make a plan, execute with precision, and own the result. What changed at Mission Ready was the speed. I had to get comfortable being wrong quickly, adjusting, and shipping anyway. The biggest shift in my thinking was moving from "I need to understand everything before I start" to "start, get feedback, understand through doing." I\'m still working on depth in system design and database optimisation. But I\'ve shipped real products for real clients, and I\'ve done it as part of teams and solo. I\'m building toward a career where technical skill meets cultural purpose — tools that serve Māori communities, veterans, and the people around me. Everything I\'m doing in tech is part of the legacy I\'m leaving for my sons.',
    projects: ['Racket Up', 'Zina App', '2 Little Leashes'],
  },
]

const projectBadgeStyle = {
  'Racket Up': 'border-emerald-700 bg-emerald-900/40 text-emerald-300',
  'Zina App': 'border-emerald-700 bg-emerald-900/40 text-emerald-300',
  '2 Little Leashes': 'border-amber-700 bg-amber-900/40 text-amber-300',
}

function AccordionItem({ lo, isOpen, onToggle }) {
  return (
    <div className={`border rounded-xl overflow-hidden transition-colors duration-150 ${
      isOpen ? 'border-emerald-500/50' : 'border-slate-700'
    }`}>
      {/* Header button */}
      <button
        onClick={onToggle}
        className="w-full flex items-start sm:items-center justify-between gap-4 px-6 py-5 text-left bg-slate-800 hover:bg-slate-700/50 transition-colors duration-150"
      >
        <div className="flex items-start sm:items-center gap-4">
          <span className="text-emerald-400 font-mono font-bold text-sm shrink-0 mt-0.5 sm:mt-0">
            {lo.id}
          </span>
          <div>
            <p className="font-semibold text-slate-100 leading-snug">{lo.title}</p>
            <p className="text-slate-400 text-sm mt-0.5 leading-snug">{lo.summary}</p>
          </div>
        </div>
        <svg
          className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* Body */}
      {isOpen && (
        <div className="bg-slate-900 border-t border-slate-700 px-6 py-6">
          <p className="text-slate-400 text-sm leading-relaxed mb-6">{lo.detail}</p>

          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-3">
              Evidenced by
            </p>
            <div className="flex flex-wrap gap-2">
              {lo.projects.map(proj => (
                <span
                  key={proj}
                  className={`px-3 py-1 border rounded-full text-sm font-medium ${projectBadgeStyle[proj]}`}
                >
                  {proj}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default function LearningOutcomes() {
  const [openId, setOpenId] = useState('LO1')
  const header  = useScrollReveal()
  const legend  = useScrollReveal()
  const accordion = useScrollReveal()

  return (
    <div
      className="min-h-screen"
      style={{
        backgroundImage: 'url(/learning.bg.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      <div className="min-h-screen bg-[#0b1a17]/80">
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16">

      {/* Header */}
      <div ref={header.ref} className={`mb-12 transition-all duration-700 ${header.visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <h1 className="text-4xl font-bold mb-3">Learning Outcomes</h1>
        <p className="text-slate-400 leading-relaxed max-w-2xl">
          Each outcome maps to real projects built during Mission Ready HQ.
          Click an outcome to read the evidence and see which projects support it.
        </p>
      </div>

      {/* Legend */}
      <div ref={legend.ref} className={`flex flex-wrap gap-3 mb-8 transition-all duration-700 delay-100 ${legend.visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        {['Racket Up', 'Zina App', '2 Little Leashes'].map(proj => (
          <span
            key={proj}
            className={`px-3 py-1 border rounded-full text-xs font-medium ${projectBadgeStyle[proj]}`}
          >
            {proj}
          </span>
        ))}
        <span className="text-slate-500 text-xs self-center ml-1">— project legend</span>
      </div>

      {/* Accordion */}
      <div ref={accordion.ref} className={`space-y-3 transition-all duration-700 delay-200 ${accordion.visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        {outcomes.map(lo => (
          <AccordionItem
            key={lo.id}
            lo={lo}
            isOpen={openId === lo.id}
            onToggle={() => setOpenId(openId === lo.id ? null : lo.id)}
          />
        ))}
      </div>
    </div>
    </div>
    </div>
  )
}
