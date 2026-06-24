const cards = [
  {
    icon: (
      <svg width="24" height="24" fill="none" stroke="#0B9FD4" strokeWidth="1.8" viewBox="0 0 24 24">
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/>
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
      </svg>
    ),
    titulo: 'Profundidade Bíblica',
    texto: 'Você aprende a manejar a Palavra com seriedade, profundidade e revelação, indo muito além da leitura superficial.',
  },
  {
    icon: (
      <svg width="24" height="24" fill="none" stroke="#0B9FD4" strokeWidth="1.8" viewBox="0 0 24 24">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"/>
        <path d="M12 6v6l4 2"/>
      </svg>
    ),
    titulo: 'Experiências com Deus',
    texto: 'Uma formação que passa pelo Espírito Santo, nao só pelo intelecto. Sua vida é tocada, nao só sua mente.',
  },
  {
    icon: (
      <svg width="24" height="24" fill="none" stroke="#0B9FD4" strokeWidth="1.8" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10"/>
        <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/>
      </svg>
    ),
    titulo: 'Clareza do Chamado',
    texto: 'Você descobre o que Deus colocou em você e aprende a caminhar nisso com propósito e direção.',
  },
]

export default function PorqueITT() {
  return (
    <section id="porque" className="bg-gray-50 py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <p className="text-itt-blue text-xs font-semibold tracking-widest uppercase mb-2">Por que fazer o ITT?</p>
        <h2 className="text-2xl md:text-3xl font-semibold text-itt-dark mb-4">O que muda quando você estuda a Palavra</h2>
        <p className="text-gray-500 text-sm leading-relaxed max-w-2xl mb-10">
          O ITT existe para que cada crente cresça em revelação e prática da Palavra de Deus. A transformação acontece quando o conhecimento bíblico encontra a vida real, e é isso que buscamos proporcionar.
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          {cards.map((card, i) => (
            <div key={i} className="bg-white rounded-xl p-6 border border-gray-100">
              <div className="mb-4">{card.icon}</div>
              <h3 className="font-semibold text-itt-dark text-sm mb-2">{card.titulo}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{card.texto}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
