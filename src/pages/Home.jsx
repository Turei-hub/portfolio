import { Link } from 'react-router-dom'
import useScrollReveal from '../hooks/useScrollReveal'
import useMeta from '../hooks/useMeta'

const stackBadges = [
  'React', 'Node.js', 'JavaScript', 'Python',
  'MongoDB', 'Express', 'Tailwind CSS', 'Git',
]

const featuredProjects = [
  {
    name: '2 Little Leashes',
    description: 'Full booking system, admin dashboard, and photo approval workflow for a dog walking client in Rotorua.',
    tags: ['React', 'Supabase', 'Node.js'],
    live: 'https://www.2littleleashes.co.nz',
    github: 'https://github.com/Turei-hub/2littleleashes',
    image: '/2littleleashes.png',
  },
  {
    name: 'Jerrican Trust',
    description: 'Web platform for a NZ veteran community trust — giving them a professional digital home to share their mission and connect with supporters.',
    tags: ['React', 'Node.js'],
    live: 'https://jerrican-trust.vercel.app/',
    github: 'https://github.com/Turei-hub/jerrican-trust',
    image: '/Jerrican Trust.png',
  },
  {
    name: 'Kaupeka Tech',
    description: 'Official website for Kaupeka Tech — a NZ web and SaaS studio. Designed and built the brand from the ground up.',
    tags: ['React', 'Vite', 'Tailwind CSS'],
    live: 'https://kaupeka-tech.vercel.app',
    github: 'https://github.com/Turei-hub/kaupeka-tech',
    image: '/kaupeka-tech.png',
  },
]

function FeaturedCard({ project, index }) {
  const { ref, visible } = useScrollReveal()
  return (
    <div
      ref={ref}
      className={`bg-slate-800/80 border border-slate-700 rounded-xl overflow-hidden flex flex-col hover:border-emerald-500/50 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <img src={project.image} alt={project.name} className="h-44 w-full object-cover" />
      <div className="p-5 flex flex-col flex-1">
        <h3 className="text-base font-bold text-slate-100 mb-1.5">{project.name}</h3>
        <p className="text-slate-400 text-sm leading-relaxed mb-4 flex-1">{project.description}</p>
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.tags.map(tag => (
            <span key={tag} className="px-2 py-0.5 bg-slate-700 text-slate-300 text-xs rounded font-mono">{tag}</span>
          ))}
        </div>
        <div className="flex gap-2">
          {project.github && (
            <a href={project.github} target="_blank" rel="noopener noreferrer"
              className="flex-1 text-center py-1.5 border border-slate-600 hover:border-emerald-400 text-slate-400 hover:text-emerald-400 text-sm rounded-lg transition-colors duration-150">
              GitHub
            </a>
          )}
          {project.live && (
            <a href={project.live} target="_blank" rel="noopener noreferrer"
              className="flex-1 text-center py-1.5 bg-emerald-600 hover:bg-emerald-500 text-white text-sm rounded-lg transition-colors duration-150">
              Live ↗
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

export default function Home() {
  useMeta({
    title: 'Turei Milner — Full Stack Developer | Auckland, NZ',
    description: 'Turei Milner is a Full Stack Developer based in Auckland, NZ. Trades-to-tech story. Building real products with React, Node.js, and Supabase.',
    path: '/',
  })
  const hero = useScrollReveal()
  const projectsSection = useScrollReveal()
  const aboutSection = useScrollReveal()

  return (
    <>
      {/* Hero */}
      <section
        className="relative flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] px-4 text-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/Hero.section.png')" }}
      >
        <div className="absolute inset-0 bg-slate-900/70" />
        <div ref={hero.ref} className={`relative z-10 max-w-3xl w-full mx-auto transition-all duration-1000 ${hero.visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>

          <p className="text-emerald-400 text-xs font-semibold tracking-widest uppercase mb-6">
            Auckland, New Zealand
          </p>

          <h1 className="text-5xl sm:text-7xl font-extrabold mb-4 leading-tight">
            <span className="bg-gradient-to-r from-emerald-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Turei Milner
            </span>
          </h1>

          <h2 className="text-2xl sm:text-3xl font-semibold text-slate-300 mb-5">
            Full Stack Developer
          </h2>

          <p className="text-slate-400 text-base sm:text-lg mb-10 max-w-xl mx-auto leading-relaxed">
            From the bush to the browser — building full-stack tools for real clients, real communities, and real impact.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link
              to="/contact"
              className="px-8 py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold rounded-lg transition-colors duration-150 animate-pulse-slow shadow-lg shadow-emerald-600/40"
            >
              Hire Me
            </Link>
            <Link
              to="/projects"
              className="px-8 py-3 border border-emerald-500 hover:border-emerald-400 hover:bg-emerald-500/10 text-slate-200 hover:text-emerald-400 font-semibold rounded-lg transition-colors duration-150"
            >
              View My Work
            </Link>
            <a
              href="/Turei_Milner_CV.pdf"
              download
              className="px-8 py-3 border border-slate-600 hover:border-slate-400 text-slate-400 hover:text-slate-200 font-semibold rounded-lg transition-colors duration-150"
            >
              Download CV ↓
            </a>
          </div>

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

      {/* Featured Projects */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-20">
        <div ref={projectsSection.ref} className={`transition-all duration-700 ${projectsSection.visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="text-emerald-400 text-xs font-semibold tracking-widest uppercase mb-2">Selected Work</p>
          <div className="flex items-end justify-between mb-8">
            <h2 className="text-3xl font-bold text-slate-100">Featured Projects</h2>
            <Link to="/projects" className="text-sm text-slate-400 hover:text-emerald-400 transition-colors duration-150">
              View all →
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {featuredProjects.map((project, i) => (
              <FeaturedCard key={project.name} project={project} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* About teaser */}
      <section className="border-t border-slate-800">
        <div
          ref={aboutSection.ref}
          className={`max-w-6xl mx-auto px-4 sm:px-6 py-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center transition-all duration-700 ${aboutSection.visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <div>
            <p className="text-emerald-400 text-xs font-semibold tracking-widest uppercase mb-3">The Story</p>
            <h2 className="text-3xl font-bold text-slate-100 mb-4">From the Bush to the Browser</h2>
            <p className="text-slate-400 leading-relaxed mb-6">
              Years working with my hands — felling trees, building structures, navigating the bush — gave me the instincts I bring to code every day. Precision, problem-solving under pressure, and seeing a job through to the end.
            </p>
            <Link
              to="/about"
              className="inline-block px-6 py-2.5 border border-slate-600 hover:border-emerald-400 text-slate-300 hover:text-emerald-400 text-sm font-semibold rounded-lg transition-colors duration-150"
            >
              Read My Story →
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { number: '4+', label: 'Live Projects' },
              { number: '3', label: 'Real Clients' },
              { number: 'Full', label: 'Stack' },
              { number: 'NZ', label: 'Based' },
            ].map(stat => (
              <div key={stat.label} className="bg-slate-800 border border-slate-700 rounded-xl p-6 text-center hover:border-emerald-500/40 transition-colors">
                <p className="text-3xl font-extrabold text-emerald-400 mb-1">{stat.number}</p>
                <p className="text-slate-400 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
