import { useState } from 'react'
import Image from 'next/image'

export default function Navbar({ inscricaoUrl }) {
  const [menuOpen, setMenuOpen] = useState(false)

  const links = [
    { href: '#sobre', label: 'Sobre' },
    { href: '#pilares', label: 'Pilares' },
    { href: '#grade', label: 'Grade Curricular' },
    { href: '#modalidades', label: 'Modalidades' },
    { href: '#depoimentos', label: 'Depoimentos' },
    { href: '#faq', label: 'FAQ' },
  ]

  return (
    <nav className="bg-itt-blue sticky top-0 z-50 shadow-sm">
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
        <div className="flex items-center gap-2">
          <Image src="/images/logo-itt.png" alt="Instituto Teológico Taber" width={170} height={150} className="object-contain" />
          <span className="text-white font-medium text-sm tracking-wide"></span>
        </div>

        <div className="hidden md:flex items-center gap-6">
          {links.map(link => (
            <a key={link.href} href={link.href} className="text-white/80 hover:text-white text-sm transition-colors">
              {link.label}
            </a>
          ))}
        </div>

        <a
          href={inscricaoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-itt-orange text-white text-sm font-medium px-4 py-2 rounded-md hover:opacity-90 transition-opacity hidden md:block"
        >
          Inscreva-se
        </a>

        <button
          className="md:hidden text-white"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
            {menuOpen
              ? <><line x1="6" y1="6" x2="18" y2="18"/><line x1="18" y1="6" x2="6" y2="18"/></>
              : <><line x1="4" y1="8" x2="20" y2="8"/><line x1="4" y1="14" x2="20" y2="14"/></>
            }
          </svg>
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-itt-dark px-6 pb-4">
          {links.map(link => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block text-white/80 py-2 text-sm border-b border-white/10"
            >
              {link.label}
            </a>
          ))}
          <a
            href={inscricaoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 block bg-itt-orange text-white text-sm font-medium px-4 py-2 rounded-md text-center"
          >
            Inscreva-se
          </a>
        </div>
      )}
    </nav>
  )
}
