import { useState } from 'react'

export default function Depoimentos({ depoimentos }) {
  const [atual, setAtual] = useState(0)
  const total = depoimentos.length

  const anterior = () => setAtual((atual - 1 + total) % total)
  const proximo = () => setAtual((atual + 1) % total)

  const visiveis = [
    depoimentos[atual % total],
    depoimentos[(atual + 1) % total],
    depoimentos[(atual + 2) % total],
  ]

  return (
    <section id="depoimentos" className="bg-itt-blue py-16 px-4 md:px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <p className="text-itt-orange text-xs font-semibold tracking-widest uppercase mb-2">Depoimentos</p>
        <h2 className="text-2xl md:text-3xl font-semibold text-white mb-8">Quem viveu o ITT</h2>

        <div className="grid md:grid-cols-3 gap-5 mb-8">
          {visiveis.map((d, i) => (
            <div key={i} className="bg-white rounded-xl p-6">
              <svg className="mb-3" width="24" height="24" fill="#0B9FD4" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
              </svg>
              <p className="text-gray-600 text-sm leading-relaxed mb-4 italic">"{d.texto}"</p>
              <div>
                <p className="text-itt-dark font-semibold text-sm">{d.nome}</p>
                <p className="text-gray-400 text-xs mt-1">{d.turma ? `${d.turma} · ` : ''}{d.curso}</p>
              </div>
            </div>
          ))}
        </div>

        {total > 3 && (
          <div className="flex justify-center gap-3">
            <button onClick={anterior} className="w-10 h-10 rounded-full border border-white/30 text-white hover:bg-white/10 transition-colors flex items-center justify-center">
              <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><polyline points="15 18 9 12 15 6"/></svg>
            </button>
            <button onClick={proximo} className="w-10 h-10 rounded-full border border-white/30 text-white hover:bg-white/10 transition-colors flex items-center justify-center">
              <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><polyline points="9 18 15 12 9 6"/></svg>
            </button>
          </div>
        )}
      </div>
    </section>
  )
}
