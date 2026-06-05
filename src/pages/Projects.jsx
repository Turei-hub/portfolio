import { useState } from 'react'

const projects = [
  {
    id: 1,
    name: 'Racket Up',
    description:
      'Placeholder — describe the problem Racket Up solves, who it is for, and what makes it interesting.',
    color: 'from-indigo-800 to-indigo-900',
    tags: ['React', 'Node.js', 'Express', 'MongoDB'],
    github: '#',
    live: '#',
  },
  {
    id: 2,
    name: 'Zina App',
    description:
      'Placeholder — describe the problem Zina App solves, who it is for, and the AI angle that makes it stand out.',
    color: 'from-emerald-800 to-emerald-900',
    tags: ['React', 'AI', 'Python', 'FastAPI'],
    github: '#',
    live: '#',
  },
  {
    id: 3,
    name: '2 Little Leashes',
    description:
      'Placeholder — describe the problem 2 Little Leashes solves, who it is for, and the key features.',
    color: 'from-amber-800 to-amber-900',
    image: '/2littleleashes.png',
    tags: ['React', 'Node.js', 'MongoDB'],
    github: '#',
    live: '#',
  },
  {
    id: 4,
    name: 'Jerrican Trust',
    description:
      'Placeholder — describe the problem Jerrican Trust solves, who it is for, and the key features.',
    color: 'from-rose-800 to-rose-900',
    image: '/Jerrican Trust.png',
    tags: ['React', 'Node.js'],
    github: '#',
    live: '#',
  },
  {
    id: 5,
    name: 'Tootstech',
    description:
      'Placeholder — describe the problem Tootstech solves, who it is for, and the key features.',
    color: 'from-sky-800 to-sky-900',
    image: '/tootstech.jpg',
    tags: ['React', 'Node.js'],
    github: '#',
    live: '#',
  },
]

const allTags = ['All', 'React', 'Node.js', 'Express', 'MongoDB', 'AI', 'Python', 'FastAPI']

function ProjectCard({ project }) {
  return (
    <div className="bg-slate-800 border border-slate-700 rounded-xl overflow-hidden flex flex-col hover:border-indigo-500/50 transition-colors duration-150">

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
          <a
            href={project.github}
            className="flex-1 text-center py-2 border border-slate-600 hover:border-indigo-400 text-slate-400 hover:text-indigo-400 text-sm rounded-lg transition-colors duration-150"
          >
            GitHub
          </a>
          <a
            href={project.live}
            className="flex-1 text-center py-2 bg-indigo-600 hover:bg-indigo-500 text-white text-sm rounded-lg transition-colors duration-150"
          >
            Live ↗
          </a>
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
                ? 'bg-indigo-600 text-white'
                : 'bg-slate-800 border border-slate-700 text-slate-400 hover:text-slate-100 hover:border-slate-500'
            }`}
          >
            {tag}
          </button>
        ))}
      </div>

      {/* Cards grid */}
      {filtered.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
  )
}
