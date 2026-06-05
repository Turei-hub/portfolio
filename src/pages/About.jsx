const skills = [
  'JavaScript', 'TypeScript', 'React', 'Node.js',
  'Express', 'Python', 'MongoDB', 'PostgreSQL',
  'REST APIs', 'Git', 'Docker', 'Tailwind CSS',
]

const timeline = [
  {
    period: '2022 – 2023',
    title: 'Before the Bootcamp',
    description:
      'Placeholder — prior work experience, life background, the moment you decided to pivot into tech. What drove you here?',
  },
  {
    period: '2024',
    title: 'Mission Ready HQ',
    description:
      'Placeholder — describe the bootcamp, the intensity, the skills you built, and the people around you. What changed in your thinking?',
  },
  {
    period: '2025',
    title: 'Building Real Things',
    description:
      'Placeholder — Racket Up, Zina App, 2 Little Leashes. Real problems, real users, real code. What are you most proud of?',
  },
]

export default function About() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-16">
      {/* Bio + photo */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-stretch mb-20">
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
      <div className="mb-20">
        <h2 className="text-indigo-400 text-sm font-semibold uppercase tracking-widest mb-6">
          Tech &amp; Skills
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
          {skills.map(skill => (
            <div
              key={skill}
              className="bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-center text-sm font-mono text-slate-300 hover:border-indigo-500/50 transition-colors"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>

      {/* Timeline */}
      <div>
        <h2 className="text-indigo-400 text-sm font-semibold uppercase tracking-widest mb-8">
          Timeline
        </h2>
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-[15px] top-2 bottom-2 w-px bg-slate-700 hidden sm:block" />

          <div className="space-y-10">
            {timeline.map((item, i) => (
              <div key={i} className="sm:pl-12 relative">
                {/* Dot */}
                <div className="hidden sm:flex absolute left-0 top-1 w-8 h-8 rounded-full bg-slate-900 border-2 border-indigo-500 items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-indigo-400" />
                </div>

                <span className="text-xs font-mono text-indigo-400 uppercase tracking-wider">
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
  )
}
