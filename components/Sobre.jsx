import Image from 'next/image'

export default function Sobre() {
  return (
    <section id="sobre" className="bg-white py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <p className="text-itt-blue text-xs font-semibold tracking-widest uppercase mb-2">Sobre o ITT</p>
        <h2 className="text-2xl md:text-3xl font-semibold text-itt-dark mb-10">O ministério de ensino do Tabernáculo de Davi</h2>
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-gray-500 text-sm leading-relaxed mb-4">
              O Instituto Teológico Taber é o ministério de ensino do Tabernáculo de Davi, em Curitiba. Dedicado à formação integral de cristãos, o ITT prepara seus alunos para cumprir o chamado de Deus com excelência, através de uma educação sólida, bíblica e prática.
            </p>
            <p className="text-gray-500 text-sm leading-relaxed mb-8">
              Mais do que um curso teológico, o ITT é um espaco de formação de caráter, discipulado e ativação do chamado, onde o conhecimento bíblico encontra a vida real.
            </p>
            <div className="border-l-4 border-itt-blue pl-4 bg-gray-50 py-3 pr-4 rounded-r-lg">
              <p className="text-itt-dark font-semibold text-sm">Pastora Marlici Santos</p>
              <p className="text-gray-400 text-xs mt-1">Diretora do ITT e Pastora do Tabernáculo de Davi</p>
            </div>
          </div>
          <div className="relative h-64 md:h-80 rounded-xl overflow-hidden bg-blue-50">
            <Image
              src="/images/sobre-turma.jpg"
              alt="Turma do ITT"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
