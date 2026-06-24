import { useState } from 'react'

export default function FAQ({ faq }) {
  const [aberto, setAberto] = useState(null)

  const toggle = (i) => setAberto(aberto === i ? null : i)

  return (
    <section id="faq" className="bg-white py-20 px-6">
      <div className="max-w-3xl mx-auto">
        <p className="text-itt-blue text-xs font-semibold tracking-widest uppercase mb-2">Dúvidas frequentes</p>
        <h2 className="text-2xl md:text-3xl font-semibold text-itt-dark mb-10">Perguntas sobre o ITT</h2>

        <div className="space-y-3">
          {faq.map((item, i) => (
            <div key={i} className="border border-gray-100 rounded-xl overflow-hidden">
              <button
                onClick={() => toggle(i)}
                className="w-full flex items-center justify-between px-5 py-4 text-left text-sm font-semibold text-itt-dark hover:bg-gray-50 transition-colors"
              >
                {item.pergunta}
                <svg
                  width="18"
                  height="18"
                  fill="none"
                  stroke="#0B9FD4"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  className={`flex-shrink-0 ml-4 transition-transform ${aberto === i ? 'rotate-45' : ''}`}
                >
                  <line x1="12" y1="5" x2="12" y2="19"/>
                  <line x1="5" y1="12" x2="19" y2="12"/>
                </svg>
              </button>
              {aberto === i && (
                <div className="px-5 pb-4 text-sm text-gray-500 leading-relaxed">
                  {item.resposta}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
