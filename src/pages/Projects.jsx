import { useState } from 'react'

const projects = [
  {
    id: 1,
    name: 'Racket Up',
    description:
      'A tennis academy management platform built for a real client. Handles court bookings, player management, and admin workflows — built during my Final Mission internship with a full product team.',
    color: 'from-emerald-800 to-emerald-900',
    image: '/RacketUp.png',
    tags: ['React', 'Node.js', 'Express', 'MySQL'],
    live: 'https://racketup.co.nz/',
  },
  {
    id: 2,
    name: 'Zina App',
    description:
      'An AI-powered road trip planner built for Z Energy. Users describe their trip and the app generates personalised routes and recommendations using the Gemini API and Google Maps. Built as part of a team show-and-tell.',
    color: 'from-emerald-800 to-emerald-900',
    image: '/Zina.app.png',
    tags: ['React', 'Node.js', 'Express', 'MongoDB', 'AI'],
    github: 'https://github.com/Turei-hub/zina-app',
  },
  {
    id: 3,
    name: '2 Little Leashes',
    description:
      'A full dog walking business platform built for a real client in Rotorua. Features online booking, an admin dashboard, a gallery with photo approval workflow, and dual email notifications for clients and admin.',
    color: 'from-amber-800 to-amber-900',
    image: '/2littleleashes.png',
    tags: ['Next.js', 'Node.js', 'Supabase'],
    github: 'https://github.com/Turei-hub/2littleleashes',
    live: 'https://www.2littleleashes.co.nz',
  },
  {
    id: 4,
    name: 'Jerrican Trust',
    description:
      'A web platform built for the Jerrican Trust — supporting their mission and connecting the community with their work.',
    color: 'from-rose-800 to-rose-900',
    image: '/Jerrican Trust.png',
    tags: ['React', 'Node.js'],
    github: 'https://github.com/Turei-hub/jerrican-trust',
    live: 'https://jerrican-trust.vercel.app/',
  },
]


const allTags = ['All', 'React', 'Next.js', 'Node.js', 'Express', 'MongoDB', 'MySQL', 'Supabase', 'AI']

function ProjectCard({ project }) {
  return (
    <div className="bg-slate-800 border border-slate-700 rounded-xl overflow-hidden flex flex-col hover:border-emerald-500/50 transition-colors duration-150">

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
            className="flex-1 text-center py-2 border border-slate-600 hover:border-emerald-400 text-slate-400 hover:text-emerald-400 text-sm rounded-lg transition-colors duration-150"
          >
            GitHub
          </a>
          )}
          {project.live && (
            <a
              href={project.live}
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
  const [activeFilter, setActiveFilter] = useState('All')

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
      <div className="mb-10">
        <h1 className="text-4xl font-bold mb-2">Projects</h1>
        <p className="text-slate-400">A selection of things I've built.</p>
      </div>

      {/* Filter buttons */}
      <div className="flex flex-wrap gap-2 mb-10">
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
          {filtered.map(project => (
            <ProjectCard key={project.id} project={project} />
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
