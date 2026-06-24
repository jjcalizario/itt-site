const itens = [
  {
    label: 'Quando',
    valor: 'Toda terça-feira',
    svg: <svg width="28" height="28" fill="none" stroke="#0B9FD4" strokeWidth="1.8" viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>,
  },
  {
    label: 'Horário',
    valor: '19h30 às 22h00',
    svg: <svg width="28" height="28" fill="none" stroke="#0B9FD4" strokeWidth="1.8" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>,
  },
  {
    label: 'Duração',
    valor: '3 anos + 1 de graduação',
    svg: <svg width="28" height="28" fill="none" stroke="#0B9FD4" strokeWidth="1.8" viewBox="0 0 24 24"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>,
  },
  {
    label: 'Certificação',
    valor: 'Ao final de cada etapa',
    svg: <svg width="28" height="28" fill="none" stroke="#0B9FD4" strokeWidth="1.8" viewBox="0 0 24 24"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11"/></svg>,
  },
]

export default function ComoFunciona() {
  return (
    <section id="como" className="bg-white py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <p className="text-itt-blue text-xs font-semibold tracking-widest uppercase mb-2">Como funciona</p>
        <h2 className="text-2xl md:text-3xl font-semibold text-itt-dark mb-1">Teologia Bíblica Ministerial</h2>
        <p className="text-gray-400 text-sm mb-10">Tudo que você precisa saber sobre o curso</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {itens.map((item, i) => (
            <div key={i} className="bg-gray-50 rounded-xl p-6 text-center">
              <div className="flex justify-center mb-3">{item.svg}</div>
              <p className="text-gray-400 text-xs uppercase tracking-widest mb-1">{item.label}</p>
              <p className="text-itt-dark font-semibold text-sm leading-snug">{item.valor}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
