import Image from 'next/image'
import { useState, useEffect } from 'react'

const slides = [
  { src: '/images/hero-sala.jpg', alt: 'Sala de aula do ITT' },
  { src: '/images/hero-slide-2.jpg', alt: 'Turma do ITT' },
  { src: '/images/hero-slide-3.jpg', alt: 'Aula no ITT' },
]

export default function Hero({ inscricaoUrl }) {
  const [atual, setAtual] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setAtual(prev => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="relative bg-itt-blue min-h-[480px] flex items-center overflow-hidden">
      {slides.map((slide, i) => (
        <Image
          key={i}
          src={slide.src}
          alt={slide.alt}
          fill
          className={`object-cover object-center transition-opacity duration-1000 ${i === atual ? 'opacity-15' : 'opacity-0'} [transform:scaleX(-1)]`}
          priority={i === 0}
        />
      ))}

      <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-6 py-20 w-full">
        <p className="text-itt-orange text-xs font-semibold tracking-widest uppercase mb-4">
          Instituto Teológico Taber
        </p>
        <h1 className="text-3xl md:text-5xl font-semibold text-white leading-tight mb-5 max-w-2xl">
          Mude a perspectiva.<br />
          <span className="text-itt-dark">Viva pela Palavra.</span>
        </h1>
        <p className="text-white/80 text-sm md:text-base leading-relaxed mb-8 max-w-xl">
          Formação bíblica que transforma a lente com que você enxerga a vida, o ministério e o seu chamado.
        </p>
        <div className="flex flex-wrap gap-3">
          <a
            href={inscricaoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-itt-orange text-white font-semibold px-6 py-3 rounded-md hover:opacity-90 transition-opacity text-sm"
          >
            Quero me inscrever
          </a>
          <a
            href="#sobre"
            className="border border-white/40 text-white px-6 py-3 rounded-md hover:bg-white/10 transition-colors text-sm"
          >
            Saiba mais
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setAtual(i)}
            className={`h-2 rounded-full transition-all ${i === atual ? 'bg-white w-5' : 'bg-white/40 w-2'}`}
          />
        ))}
      </div>

      <p className="absolute bottom-3 left-4 text-white/20 text-xs tracking-widest uppercase z-10 hidden md:block">
        ITT — Destravando Propósitos, Formando Discípulos
      </p>
    </section>
  )
}
