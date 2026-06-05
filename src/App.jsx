import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Projects from './pages/Projects'
import About from './pages/About'
import LearningOutcomes from './pages/LearningOutcomes'
import Contact from './pages/Contact'

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col bg-slate-900 text-slate-100">
        <Navbar />
        <div className="sticky top-20 z-40 overflow-hidden bg-black py-2 border-y border-[#39ff14]/30">
          <div className="flex animate-marquee-scroll whitespace-nowrap">
            {[0, 1, 2, 3].map(i => (
              <span key={i} className="text-sm font-bold tracking-widest shrink-0 pr-24" style={{ color: '#39ff14', textShadow: '0 0 8px #39ff14, 0 0 20px #39ff14' }}>
                ⚡ Full Stack Developer &nbsp;•&nbsp; Auckland, NZ &nbsp;•&nbsp; React &nbsp;•&nbsp; Node.js &nbsp;•&nbsp; Supabase &nbsp;•&nbsp; Open to Work &nbsp;•&nbsp; Trades to Tech &nbsp;•&nbsp; Mission Ready Graduate
              </span>
            ))}
          </div>
        </div>
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/about" element={<About />} />
            <Route path="/learning-outcomes" element={<LearningOutcomes />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}
