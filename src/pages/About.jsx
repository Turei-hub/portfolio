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
      <h1 className="text-4xl font-bold mb-12">About</h1>

      {/* Bio + photo placeholder */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-20">
        <div>
          <h2 className="text-indigo-400 text-sm font-semibold uppercase tracking-widest mb-5">
            Who I Am
          </h2>
          <div className="space-y-4 text-slate-400 leading-relaxed">
            <p>
              [ Bio paragraph one — who you are, where you come from, what grounds you.
              Write in your own voice. ]
            </p>
            <p>
              [ Bio paragraph two — your path into tech, why Mission Ready, what clicked
              when you started building things. ]
            </p>
            <p>
              [ Bio paragraph three — where you're headed, what kind of developer you
              want to be, what you care about building. ]
            </p>
          </div>
        </div>

        {/* Photo placeholder */}
        <div className="bg-slate-800 border border-slate-700 rounded-xl h-72 md:h-auto flex flex-col items-center justify-center gap-2">
          <div className="w-16 h-16 rounded-full bg-slate-700 border-2 border-indigo-500/40 flex items-center justify-center">
            <svg className="w-8 h-8 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </div>
          <span className="text-slate-500 text-sm">Photo placeholder</span>
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
