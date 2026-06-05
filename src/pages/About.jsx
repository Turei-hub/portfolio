import { useEffect } from 'react'
import useScrollReveal from '../hooks/useScrollReveal'

const skills = [
  'JavaScript', 'TypeScript', 'React', 'Node.js',
  'Express', 'Python', 'MongoDB', 'PostgreSQL',
  'REST APIs', 'Git', 'Docker', 'Tailwind CSS',
]

const timeline = [
  {
    period: 'Before the Keyboard',
    title: 'Trades & the Bush',
    description:
      'Years working with my hands — felling trees, building structures, navigating the bush. That world taught me precision, problem-solving under pressure, and how to see a job through. The pivot into tech wasn\'t accidental. Those same instincts are what I bring into code every single day.',
  },
  {
    period: 'Level 3 — 10 Weeks',
    title: 'Tech Career Launchpad',
    description:
      'Started at Mission Ready HQ with the Tech Career Launchpad — 10 weeks that introduced the developer mindset, digital fundamentals, and what a career in tech actually looks like. This was the spark that confirmed I was making the right move.',
  },
  {
    period: 'Level 4 — 10 Weeks',
    title: 'Learning to Code',
    description:
      'The first 10 weeks of the full 32-week diploma. Deep focus on programming fundamentals — logic, problem-solving, and writing real code from scratch. This phase built the foundation everything else sits on.',
  },
  {
    period: 'Level 5 — 10 Weeks',
    title: 'Out on Missions',
    description:
      'Deployed on real-world missions — built an AI chatbot for a car insurance policy guide, delivered the Zina App (AI road trip planner) for Z Energy, and shipped 2 Little Leashes and Jerrican Trust as personal client projects. Every mission had a real brief, a real client, and a real deadline.',
  },
  {
    period: 'Level 6 — Week 7 of 10',
    title: 'Final Mission — Internship',
    description:
      'Currently in week 7 of a 10-week internship building Racket Up — a tennis academy management platform for a real client. Working inside a live product team with a PM, UX partner, and fellow developer. This is the final phase of the diploma and the bridge into my first full-time role in tech.',
  },
]

export default function About() {
  useEffect(() => { document.title = 'About — Turei Milner' }, [])
  const bio        = useScrollReveal()
  const skillsEl   = useScrollReveal()
  const timelineEl = useScrollReveal()

  return (
    <div
      className="min-h-screen"
      style={{
        backgroundImage: 'url(/about.bg.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      <div className="min-h-screen bg-[#0b1a17]/80">
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-16">
      {/* Bio + photo */}
      <div ref={bio.ref} className={`grid grid-cols-1 md:grid-cols-2 gap-10 items-stretch mb-20 transition-all duration-700 ${bio.visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="flex flex-col justify-center space-y-4 text-slate-400 leading-relaxed">
          <h1 className="text-4xl font-bold text-slate-100 mb-2">About</h1>
          <p>
            Ko Turei Milner tōku ingoa. I grew up in a small village, spent years working with my hands — felling trees, building structures, navigating the bush. That world taught me how to problem-solve under pressure, work with precision, and see a job through. Those same instincts are what I bring into tech every single day.
          </p>
          <p>
            The switch into software wasn't accidental — it was a deliberate move to build something lasting. I enrolled at Mission Ready HQ and discovered that coding scratches the same itch as construction: you design something, you build it, you ship it. What clicked for me was realising I could create tools that actually serve communities — especially my own.
          </p>
          <p>
            I'm building toward a career where technical skill meets cultural purpose. Whether that's platforms that centre Māori data sovereignty, wellness tools for veterans, or clean full-stack products for real clients — I want to build things that matter. I'm a father, and everything I'm doing in tech is part of the legacy I'm leaving for my sons.
          </p>
        </div>

        <div className="rounded-xl overflow-hidden min-h-80">
          <img
            src="/tootstech.jpg"
            alt="Turei Milner"
            className="w-full h-full object-cover object-top"
          />
        </div>
      </div>

      {/* Skills grid */}
      <div ref={skillsEl.ref} className={`mb-20 transition-all duration-700 delay-100 ${skillsEl.visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <h2 className="text-emerald-400 text-sm font-semibold uppercase tracking-widest mb-6">
          Tech &amp; Skills
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
          {skills.map(skill => (
            <div
              key={skill}
              className="bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-center text-sm font-mono text-slate-300 hover:border-emerald-500/50 transition-colors"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>

      {/* Timeline */}
      <div ref={timelineEl.ref} className={`transition-all duration-700 delay-200 ${timelineEl.visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <h2 className="text-emerald-400 text-sm font-semibold uppercase tracking-widest mb-8">
          Timeline
        </h2>
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-[15px] top-2 bottom-2 w-px bg-slate-700 hidden sm:block" />

          <div className="space-y-10">
            {timeline.map((item, i) => (
              <div key={i} className="sm:pl-12 relative">
                {/* Dot */}
                <div className="hidden sm:flex absolute left-0 top-1 w-8 h-8 rounded-full bg-slate-900 border-2 border-emerald-500 items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-emerald-400" />
                </div>

                <span className="text-xs font-mono text-emerald-400 uppercase tracking-wider">
                  {item.period}
                </span>
                <h3 className="text-lg font-semibold text-slate-100 mt-1 mb-1.5">
                  {item.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
    </div>
    </div>
  )
}
