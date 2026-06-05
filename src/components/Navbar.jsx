import { useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'

const navLinks = [
  { to: '/', label: 'Home', end: true },
  { to: '/projects', label: 'Projects' },
  { to: '/about', label: 'About' },
  { to: '/learning-outcomes', label: 'Learning Outcomes' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const navigate = useNavigate()

  return (
    <>
    <nav className="sticky top-0 z-50 bg-slate-900/90 backdrop-blur-md border-b border-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-20">

        {/* Logo — navigates home */}
        <button onClick={() => navigate('/')} className="flex items-center cursor-pointer ml-20">
          <span className="text-2xl font-bold tracking-tight text-emerald-400">TM</span>
        </button>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map(link => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.end}
              className={({ isActive }) =>
                `text-base font-medium transition-colors duration-150 relative pb-1 ${
                  isActive
                    ? 'text-emerald-400 after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-emerald-400 after:rounded-full'
                    : 'text-slate-400 hover:text-slate-100'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </div>

        {/* Mobile burger */}
        <button
          className="md:hidden p-2 text-slate-400 hover:text-slate-100 transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
        >
          {menuOpen ? (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-slate-800 border-b border-slate-700 px-4 py-4 flex flex-col gap-4">
          {navLinks.map(link => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.end}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                `text-base font-medium transition-colors pl-2 border-l-2 ${
                  isActive
                    ? 'text-emerald-400 border-emerald-400'
                    : 'text-slate-400 hover:text-slate-100 border-transparent'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </div>
      )}
    </nav>

</>
  )
}
