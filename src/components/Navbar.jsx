import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

const navLinks = [
  { to: '/', label: 'Home', end: true },
  { to: '/projects', label: 'Projects' },
  { to: '/about', label: 'About' },
  { to: '/learning-outcomes', label: 'Learning Outcomes' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [logoOpen, setLogoOpen] = useState(false)

  return (
    <>
    <nav className="sticky top-0 z-50 bg-slate-900/90 backdrop-blur-md border-b border-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-20">

        {/* Logo — click to preview, not navigate */}
        <button onClick={() => setLogoOpen(true)} className="flex items-center cursor-pointer">
          <img
            src="/TheBroToots Logo1.png"
            alt="Turei Milner logo"
            className="h-14 w-auto"
          />
        </button>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map(link => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.end}
              className={({ isActive }) =>
                `text-base font-medium transition-colors duration-150 ${
                  isActive
                    ? 'text-emerald-400'
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
                `text-base font-medium transition-colors ${
                  isActive
                    ? 'text-emerald-400'
                    : 'text-slate-400 hover:text-slate-100'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </div>
      )}
    </nav>

    {/* Logo lightbox */}
    {logoOpen && (
      <div
        className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-sm flex items-center justify-center p-6"
        onClick={() => setLogoOpen(false)}
      >
        <div className="relative max-w-lg w-full" onClick={e => e.stopPropagation()}>
          <img
            src="/TheBroToots Logo1.png"
            alt="Turei Milner logo"
            className="w-full h-auto rounded-xl shadow-2xl"
          />
          <button
            onClick={() => setLogoOpen(false)}
            className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-slate-700 hover:bg-slate-600 text-slate-300 hover:text-white flex items-center justify-center transition-colors"
            aria-label="Close"
          >
            ✕
          </button>
        </div>
      </div>
    )}
    </>
  )
}
