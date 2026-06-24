export default function CTAFinal({ inscricaoUrl }) {
  return (
    <section className="bg-itt-dark py-20 px-4 md:px-6 text-center overflow-hidden">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-2xl md:text-4xl font-semibold text-white mb-10">
          ITT — Destravando Propósitos, Formando Discípulos.
        </h2>
        <a
          href={inscricaoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-itt-orange text-white font-semibold px-10 py-4 rounded-md hover:opacity-90 transition-opacity text-sm"
        >
          Quero me inscrever
        </a>
      </div>
    </section>
  )
}
