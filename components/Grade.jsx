import { useState } from 'react'
import grade from '../data/grade.json'

export default function Grade() {
  const [anoAtivo, setAnoAtivo] = useState(0)
  const anoSelecionado = grade.anos[anoAtivo]

  return (
    <section id="grade" className="bg-gray-50 py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <p className="text-itt-blue text-xs font-semibold tracking-widest uppercase mb-2">Grade curricular</p>
        <h2 className="text-2xl md:text-3xl font-semibold text-itt-dark mb-2">4 anos de formação bíblica</h2>
        <p className="text-gray-400 text-sm mb-8">Selecione o ano para ver as disciplinas</p>

        <div className="flex gap-0 border-b border-gray-200 mb-6 overflow-x-auto">
          {grade.anos.map((ano, i) => (
            <button
              key={i}
              onClick={() => setAnoAtivo(i)}
              className={`px-5 py-3 text-sm whitespace-nowrap border-b-2 transition-colors ${
                anoAtivo === i
                  ? 'border-itt-blue text-itt-blue font-semibold'
                  : 'border-transparent text-gray-400 hover:text-gray-600'
              }`}
            >
              {ano.ano}
            </button>
          ))}
        </div>

        <p className="text-itt-dark font-semibold text-sm mb-4">{anoSelecionado.subtitulo}</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {anoSelecionado.disciplinas.map((disciplina, i) => (
            <div
              key={i}
              className="bg-white border border-gray-100 rounded-lg px-4 py-3 text-sm text-itt-dark flex items-center gap-3"
            >
              <span className="w-5 h-5 rounded-full bg-itt-blue/10 text-itt-blue text-xs flex items-center justify-center font-semibold flex-shrink-0">
                {i + 1}
              </span>
              {disciplina}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
