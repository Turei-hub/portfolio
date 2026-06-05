import { useState } from 'react'

const outcomes = [
  {
    id: 'LO1',
    title: 'Full Stack Technical Capability',
    summary: 'Design and build a complete web application from front end to back end.',
    detail:
      'Placeholder — expand on what this outcome means in practice. What evidence do your projects provide? What specific technologies, patterns, or decisions demonstrate your full stack capability?',
    projects: ['Racket Up', 'Zina App', '2 Little Leashes'],
  },
  {
    id: 'LO2',
    title: 'Agile Development Practices',
    summary: 'Apply iterative, user-centred Agile methods throughout a project lifecycle.',
    detail:
      'Placeholder — describe your use of sprints, standups, Trello or Jira, retrospectives, and user stories. How did Agile shape the way you worked and what you shipped?',
    projects: ['Racket Up', 'Zina App'],
  },
  {
    id: 'LO3',
    title: 'Security, Testing & Quality',
    summary: 'Write secure, tested, and maintainable code across front and back end.',
    detail:
      'Placeholder — cover your approach to authentication, input validation, OWASP considerations, and which testing frameworks or strategies you used. What does quality mean to you in practice?',
    projects: ['Zina App', '2 Little Leashes'],
  },
  {
    id: 'LO4',
    title: 'Collaboration & Communication',
    summary: 'Work effectively in a team and communicate technical concepts to varied audiences.',
    detail:
      'Placeholder — evidence of teamwork, Git collaboration, pair programming, presenting work to stakeholders, writing documentation, and explaining decisions clearly.',
    projects: ['Racket Up'],
  },
  {
    id: 'LO5',
    title: 'Professional Reflection & Growth',
    summary: 'Reflect critically on your own learning journey and professional development.',
    detail:
      'Placeholder — where did you start? What shifted in your thinking? What are you still working on? This is your most personal outcome — make it honest and specific.',
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

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16">

      {/* Header */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-3">Learning Outcomes</h1>
        <p className="text-slate-400 leading-relaxed max-w-2xl">
          Each outcome maps to real projects built during Mission Ready HQ.
          Click an outcome to read the evidence and see which projects support it.
        </p>
      </div>

      {/* Legend */}
      <div className="flex flex-wrap gap-3 mb-8">
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
      <div className="space-y-3">
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
  )
}
