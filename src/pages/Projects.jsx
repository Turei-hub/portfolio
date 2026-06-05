import { useState } from 'react'
import useScrollReveal from '../hooks/useScrollReveal'
import useMeta from '../hooks/useMeta'

const projects = [
  {
    id: 1,
    name: 'Racket Up',
    description:
      'Real client, real deadline. Built a full court booking and player management platform for a tennis academy during my Final Mission internship — shipped with a live product team.',
    color: 'from-emerald-800 to-emerald-900',
    image: '/RacketUp.png',
    tags: ['React', 'Node.js', 'Express', 'MySQL'],
    live: 'https://racketup.co.nz/',
  },
  {
    id: 2,
    name: 'Zina App',
    description:
      'Built for Z Energy — users describe a road trip and the app generates personalised routes using Gemini AI and Google Maps. Delivered as a team at Show & Tell.',
    color: 'from-emerald-800 to-emerald-900',
    image: '/Zina.app.png',
    tags: ['React', 'Node.js', 'Express', 'MongoDB', 'AI'],
    github: 'https://github.com/Turei-hub/zina-app',
  },
  {
    id: 3,
    name: '2 Little Leashes',
    description:
      'A real client needed a professional online presence — fast. Built a full booking system, admin dashboard, and photo approval workflow. Live and taking bookings in Rotorua.',
    color: 'from-amber-800 to-amber-900',
    image: '/2littleleashes.png',
    tags: ['React', 'Vite', 'Node.js', 'Supabase'],
    github: 'https://github.com/Turei-hub/2littleleashes',
    live: 'https://www.2littleleashes.co.nz',
  },
  {
    id: 4,
    name: 'Jerrican Trust',
    description:
      'Designed and built a web platform for a community trust — giving them a professional digital home to share their mission and connect with supporters.',
    color: 'from-rose-800 to-rose-900',
    image: '/Jerrican Trust.png',
    tags: ['React', 'Node.js'],
    github: 'https://github.com/Turei-hub/jerrican-trust',
    live: 'https://jerrican-trust.vercel.app/',
  },
]


const allTags = ['All', 'React', 'Next.js', 'Node.js', 'Express', 'MongoDB', 'MySQL', 'Supabase', 'AI']

function ProjectCard({ project, index }) {
  const { ref, visible } = useScrollReveal()
  return (
    <div
      ref={ref}
      className={`bg-slate-800 border border-slate-700 rounded-xl overflow-hidden flex flex-col hover:border-emerald-500/50 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >

      {project.image ? (
        <img
          src={project.image}
          alt={project.name}
          className="h-48 w-full object-cover"
        />
      ) : (
        <div className={`bg-gradient-to-br ${project.color} h-48 flex items-center justify-center`}>
          <span className="text-white/50 text-base font-semibold tracking-wide">
            {project.name}
          </span>
        </div>
      )}

      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-lg font-bold text-slate-100 mb-2">{project.name}</h3>
        <p className="text-slate-400 text-sm leading-relaxed mb-4 flex-1">
          {project.description}
        </p>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.tags.map(tag => (
            <span
              key={tag}
              className="px-2 py-0.5 bg-slate-700 text-slate-300 text-xs rounded font-mono"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-3">
          {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View ${project.name} on GitHub`}
            className="flex-1 text-center py-2 border border-slate-600 hover:border-emerald-400 text-slate-400 hover:text-emerald-400 text-sm rounded-lg transition-colors duration-150"
          >
            GitHub
          </a>
          )}
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${project.name} live site`}
              className="flex-1 text-center py-2 bg-emerald-600 hover:bg-emerald-500 text-white text-sm rounded-lg transition-colors duration-150"
            >
              Live ↗
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

export default function Projects() {
  useMeta({
    title: 'Projects — Turei Milner',
    description: 'Full-stack projects by Turei Milner — Racket Up, Zina App, 2 Little Leashes, and Jerrican Trust. Real clients, real deadlines, shipped code.',
    path: '/projects',
  })
  const [activeFilter, setActiveFilter] = useState('All')
  const header = useScrollReveal()
  const filters = useScrollReveal()

  const filtered =
    activeFilter === 'All'
      ? projects
      : projects.filter(p => p.tags.includes(activeFilter))

  return (
    <div
      className="min-h-screen"
      style={{
        backgroundImage: 'url(/projects.bg.png)',
        backgroundSize: '150%',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      <div className="min-h-screen bg-[#0b1a17]/80">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16">

      {/* Header */}
      <div ref={header.ref} className={`mb-10 transition-all duration-700 ${header.visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <h1 className="text-4xl font-bold mb-2">Projects</h1>
        <p className="text-slate-400">A selection of things I've built.</p>
      </div>

      {/* Filter buttons */}
      <div ref={filters.ref} className={`flex flex-wrap gap-2 mb-10 transition-all duration-700 delay-100 ${filters.visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        {allTags.map(tag => (
          <button
            key={tag}
            onClick={() => setActiveFilter(tag)}
            className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors duration-150 ${
              activeFilter === tag
                ? 'bg-emerald-600 text-white'
                : 'bg-slate-800 border border-slate-700 text-slate-400 hover:text-slate-100 hover:border-slate-500'
            }`}
          >
            {tag}
          </button>
        ))}
      </div>

      {/* Cards grid */}
      {filtered.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {filtered.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      ) : (
        <p className="text-slate-500 text-center py-16">
          No projects match this filter yet.
        </p>
      )}
    </div>
    </div>
    </div>
  )
}
