import Image from 'next/image'

export default function Modalidades() {
  return (
    <section id="modalidades" className="bg-itt-dark py-16 px-4 md:px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <p className="text-itt-orange text-xs font-semibold tracking-widest uppercase mb-2">Modalidades</p>
        <h2 className="text-2xl md:text-3xl font-semibold text-white mb-8">Você decide como viver essa formação</h2>

        <div className="rounded-2xl overflow-hidden">
          <div className="relative w-full h-48 md:h-72 rounded-2xl overflow-hidden mb-6">
            <Image
              src="/images/banner-modalidades.jpg"
              alt="Presencial ou Online"
              fill
              className="object-cover object-left"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            <div className="bg-[#0a2240] rounded-2xl overflow-hidden">
              <div className="relative h-44 rounded-t-2xl overflow-hidden bg-[#1a3a6a]">
                <Image src="/images/presencial.jpg" alt="Aula presencial ITT" fill className="object-cover" />
              </div>
              <div className="p-5">
                <span className="inline-block bg-itt-orange text-white text-xs font-semibold tracking-widest uppercase px-3 py-1 rounded-full mb-3">Presencial</span>
                <h3 className="text-white font-semibold text-base mb-2">Aprenda em comunidade</h3>
                <p className="text-white/70 text-sm leading-relaxed">Viva a experiência do ITT de perto. Toda terça-feira, 19h30 às 22h00, no Tabernáculo de Davi em Curitiba.</p>
              </div>
            </div>

            <div className="bg-[#0a2240] rounded-2xl overflow-hidden">
              <div className="relative h-44 rounded-t-2xl overflow-hidden bg-[#1a3a6a]">
                <Image src="/images/ead.jpg" alt="Plataforma EAD ITT" fill className="object-cover" />
              </div>
              <div className="p-5">
                <span className="inline-block bg-itt-blue text-white text-xs font-semibold tracking-widest uppercase px-3 py-1 rounded-full mb-3">EAD</span>
                <h3 className="text-white font-semibold text-base mb-2">Estude de onde estiver</h3>
                <p className="text-white/70 text-sm leading-relaxed">No seu tempo, sem abrir mão da profundidade. Disponível para turmas do 1º ao 3º ano.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
