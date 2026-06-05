import { Link } from 'react-router-dom'
import useScrollReveal from '../hooks/useScrollReveal'

const stackBadges = [
  'React', 'Node.js', 'JavaScript', 'Python',
  'MongoDB', 'Express', 'Tailwind CSS', 'Git',
]

export default function Home() {
  const hero = useScrollReveal()
  return (
    <section
      className="relative flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] px-4 text-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/Hero.section.png')" }}
    >
      <div className="absolute inset-0 bg-slate-900/70" />
      <div ref={hero.ref} className={`relative z-10 max-w-3xl w-full mx-auto transition-all duration-1000 ${hero.visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>

        {/* Location tag */}
        <p className="text-emerald-400 text-xs font-semibold tracking-widest uppercase mb-6">
          Auckland, New Zealand
        </p>

        {/* Name */}
        <h1 className="text-5xl sm:text-7xl font-extrabold mb-4 leading-tight">
          <span className="bg-gradient-to-r from-emerald-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Turei Milner
          </span>
        </h1>

        {/* Title */}
        <h2 className="text-2xl sm:text-3xl font-semibold text-slate-300 mb-5">
          Full Stack Developer
        </h2>

        {/* Tagline */}
        <p className="text-slate-400 text-base sm:text-lg mb-10 max-w-xl mx-auto leading-relaxed">
          From the bush to the browser — building full-stack tools for real clients, real communities, and real impact.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <Link
            to="/contact"
            className="px-8 py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold rounded-lg transition-colors duration-150 animate-pulse-slow shadow-lg shadow-emerald-600/40"
          >
            Hire Me
          </Link>
          <Link
            to="/projects"
            className="px-8 py-3 border border-slate-600 hover:border-emerald-400 text-slate-300 hover:text-emerald-400 font-semibold rounded-lg transition-colors duration-150"
          >
            View My Work
          </Link>
        </div>

        {/* Stack badges */}
        <div className="flex flex-wrap justify-center gap-2">
          {stackBadges.map(badge => (
            <span
              key={badge}
              className="px-3 py-1.5 bg-slate-800 border border-slate-700 rounded-full text-slate-400 text-xs font-mono"
            >
              {badge}
            </span>
          ))}
        </div>

      </div>
    </section>

  )
}
