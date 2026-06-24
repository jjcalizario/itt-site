const pilares = [
  {
    num: 'Pilar 01',
    titulo: 'Palavra',
    texto: 'Nosso compromisso é equipar o aluno com o conhecimento e a compreensão necessárias para aplicar a Palavra de Deus em sua vida e ministério. A base bíblica sólida é o fundamento de tudo que ensinamos.',
  },
  {
    num: 'Pilar 02',
    titulo: 'Poder',
    texto: 'A verdadeira transformação acontece quando estamos cheios do Espírito. Nosso ensino vai além do teórico: buscamos equipar nossos alunos com a unção do Espírito Santo, proporcionando experiências práticas de ministério que ativam e desenvolvem esse poder em suas vidas.',
  },
  {
    num: 'Pilar 03',
    titulo: 'Propósito',
    texto: 'Trabalhamos para que você descubra e compreenda seu propósito, alinhando suas habilidades e paixões ao que Deus colocou em você. Cada aluno é único, e nossa formação respeita essa singularidade.',
  },
]

export default function Pilares() {
  return (
    <section id="pilares" className="bg-itt-blue py-16 px-4 md:px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <p className="text-itt-orange text-xs font-semibold tracking-widest uppercase mb-2">Nossos pilares</p>
        <h2 className="text-2xl md:text-3xl font-semibold text-white mb-4">O que sustenta a formação no ITT</h2>
        <p className="text-white/70 text-sm leading-relaxed max-w-2xl mb-8">
          Os três pilares do ITT são interligados e essenciais para a formação de um cristão completo. No ITT, não estamos apenas formando teólogos, estamos preparando líderes que levarão o amor e a verdade de Cristo a todas as áreas da vida.
        </p>
        <div className="grid md:grid-cols-3 gap-5">
          {pilares.map((p, i) => (
            <div key={i} className="bg-itt-dark rounded-xl p-6">
              <p className="text-itt-orange text-xs font-semibold tracking-widest uppercase mb-3">{p.num}</p>
              <h3 className="text-white font-semibold text-lg mb-3">{p.titulo}</h3>
              <p className="text-white/70 text-sm leading-relaxed">{p.texto}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
