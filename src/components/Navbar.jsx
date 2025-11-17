import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const links = [
    { href: '#services', label: 'Services' },
    { href: '#work', label: 'Work' },
    { href: '#contact', label: 'Contact' },
  ]

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-white/70 backdrop-blur border-b border-black/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <a href="#" className="font-bold tracking-tight text-gray-900 text-lg">
          Impact <span className="text-violet-600">Fusion</span> Labs
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-700">
          {links.map(l => (
            <a key={l.href} href={l.href} className="hover:text-violet-600 transition-colors">
              {l.label}
            </a>
          ))}
          <a href="#contact" className="inline-flex items-center rounded-full bg-violet-600 text-white px-4 py-2 hover:bg-violet-700 transition-colors">
            Start a project
          </a>
        </nav>
        <button onClick={() => setOpen(!open)} className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-md border border-black/10">
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-black/5 bg-white">
          <div className="max-w-6xl mx-auto px-4 py-4 grid gap-4">
            {links.map(l => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="py-2 text-gray-800">
                {l.label}
              </a>
            ))}
            <a href="#contact" onClick={() => setOpen(false)} className="inline-flex justify-center items-center rounded-full bg-violet-600 text-white px-4 py-2">
              Start a project
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
