const valores = [
  { icone: '❤️', label: 'Amor' },
  { icone: '🔥', label: 'Plenitude no Espírito Santo' },
  { icone: '🎵', label: 'Louvor e Adoração' },
  { icone: '🙏', label: 'Oração e Intercessão' },
  { icone: '🛡️', label: 'Integridade e Excelência' },
  { icone: '📖', label: 'Transformação pela Palavra' },
  { icone: '⭐', label: 'Santidade' },
  { icone: '🤝', label: 'Inclusão e Comunidade' },
]

export default function MissaoValores() {
  return (
    <section id="missao" className="bg-gray-50 py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <p className="text-itt-blue text-xs font-semibold tracking-widest uppercase mb-2">Missão e valores</p>
        <h2 className="text-2xl md:text-3xl font-semibold text-itt-dark mb-10">O que nos move e nos guia</h2>

        <div className="grid md:grid-cols-2 gap-5 mb-5">
          <div className="bg-white rounded-xl p-6 border border-gray-100">
            <p className="text-itt-blue text-xs font-semibold tracking-widest uppercase mb-3">Visão</p>
            <p className="text-gray-500 text-sm leading-relaxed">
              Levar a igreja de Jesus à maturidade cristã, formando obreiros conhecedores da Palavra e dos propósitos de Deus para as geracões presentes e futuras. Cumprir a grande comissão: ganhar, discipular, empoderar e enviar.
            </p>
          </div>
          <div className="bg-white rounded-xl p-6 border border-gray-100">
            <p className="text-itt-blue text-xs font-semibold tracking-widest uppercase mb-3">Missão</p>
            <ul className="text-gray-500 text-sm leading-relaxed space-y-3 list-disc list-inside">
              <li>Desenvolver uma instituição espiritualmente vibrante, academicamente excelente, orientada para o crescimento e centrada no discipulado.</li>
              <li>Promover amor pela aprendizagem que brota da paixão de servir bem ao Senhor e a todas as pessoas por quem Ele morreu.</li>
            </ul>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 border border-gray-100">
          <p className="text-itt-blue text-xs font-semibold tracking-widest uppercase mb-3">Valores</p>
          <p className="text-gray-500 text-sm leading-relaxed mb-5">
            O ITT busca criar dentro da comunidade cristã uma atmosfera de respeito mútuo e confianca, onde todos se comprometam com o alto chamamento de Cristo e promovam o bem-estar espiritual.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {valores.map((v, i) => (
              <div key={i} className="bg-gray-50 rounded-lg px-3 py-2 flex items-center gap-2">
                <span className="text-base">{v.icone}</span>
                <span className="text-itt-dark text-xs font-medium">{v.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
