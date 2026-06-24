import { useState } from 'react'

export default function FaleConosco() {
  const [form, setForm] = useState({ nome: '', email: '', whatsapp: '', mensagem: '' })

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const texto = `Olá, meu nome é ${form.nome}. Tenho interesse no ITT.${form.email ? ` Meu e-mail é ${form.email}.` : ''}${form.whatsapp ? ` Meu WhatsApp é ${form.whatsapp}.` : ''}${form.mensagem ? ` ${form.mensagem}` : ''}`
    const url = `https://wa.me/5541991392407?text=${encodeURIComponent(texto)}`
    window.open(url, '_blank')
  }

  return (
    <section id="contato" className="bg-gray-50 py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* Lado esquerdo */}
          <div>
            <p className="text-itt-blue text-xs font-semibold tracking-widest uppercase mb-2">Fale conosco</p>
            <h2 className="text-2xl md:text-3xl font-semibold text-itt-dark mb-4">Quer saber mais?</h2>
            <p className="text-gray-500 text-sm leading-relaxed mb-8">
              Tire suas dúvidas sobre o ITT, modalidades, datas e como se inscrever. Fale com a gente pelo WhatsApp ou preencha o formulário ao lado.
            </p>
            <a
              href="https://wa.me/5541991392407"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] text-white text-sm font-semibold px-5 py-3 rounded-full hover:opacity-90 transition-opacity"
            >
              <svg width="18" height="18" fill="white" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Atendimento via WhatsApp
            </a>
          </div>

          {/* Formulário */}
          <div className="bg-white rounded-2xl border border-gray-100 p-8">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-itt-dark text-sm font-semibold mb-2">Nome</label>
                <input
                  type="text"
                  name="nome"
                  required
                  value={form.nome}
                  onChange={handleChange}
                  className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-700 focus:outline-none focus:border-itt-blue transition-colors"
                  placeholder="Seu nome completo"
                />
              </div>
              <div>
                <label className="block text-itt-dark text-sm font-semibold mb-2">E-mail</label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-700 focus:outline-none focus:border-itt-blue transition-colors"
                  placeholder="seu@email.com"
                />
              </div>
              <div>
                <label className="block text-itt-dark text-sm font-semibold mb-2">WhatsApp</label>
                <input
                  type="tel"
                  name="whatsapp"
                  value={form.whatsapp}
                  onChange={handleChange}
                  className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-700 focus:outline-none focus:border-itt-blue transition-colors"
                  placeholder="(41) 99999-9999"
                />
              </div>
              <div>
                <label className="block text-itt-dark text-sm font-semibold mb-2">Mensagem</label>
                <textarea
                  name="mensagem"
                  value={form.mensagem}
                  onChange={handleChange}
                  rows={4}
                  className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-700 focus:outline-none focus:border-itt-blue transition-colors resize-none"
                  placeholder="Escreva sua dúvida ou mensagem..."
                />
              </div>
              <button
                type="submit"
                className="w-full bg-itt-blue text-white font-semibold py-3 rounded-lg hover:opacity-90 transition-opacity text-sm"
              >
                Enviar pelo WhatsApp
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  )
}
