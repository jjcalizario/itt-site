# ITT — Instituto Teológico Taber

Landing page oficial do ITT, desenvolvida em Next.js + Tailwind CSS.

---

## Como rodar localmente

```bash
npm install
npm run dev
```

Acesse: http://localhost:3000

---

## Como hospedar na Vercel

1. Crie um repositório no GitHub e suba o projeto
2. Acesse vercel.com e importe o repositório
3. A Vercel detecta automaticamente o Next.js
4. Configure a variável de ambiente (veja abaixo)
5. Configure o domínio: `itt.tabernaculodedavi.com.br`

---

## Variáveis de ambiente

Crie um arquivo `.env.local` na raiz com:

```
NEXT_PUBLIC_INSCRICAO_URL=https://link-da-sua-pagina-de-inscricao.com
```

Na Vercel, adicione essa variável em: Project Settings > Environment Variables

---

## Como atualizar o conteúdo

### Depoimentos
Edite o arquivo `data/depoimentos.json`:
```json
[
  {
    "id": 1,
    "nome": "Nome do aluno",
    "turma": "Turma 2024",
    "curso": "Teológico",
    "texto": "Texto do depoimento aqui."
  }
]
```

### Perguntas frequentes (FAQ)
Edite o arquivo `data/faq.json`:
```json
[
  {
    "id": 1,
    "pergunta": "Pergunta aqui?",
    "resposta": "Resposta aqui."
  }
]
```

### Grade curricular
Edite o arquivo `data/grade.json` para adicionar ou remover disciplinas.

---

## Imagens necessárias

Coloque as imagens na pasta `public/images/` com os seguintes nomes:

| Arquivo | Onde aparece | Tamanho sugerido |
|---|---|---|
| `hero-sala.jpg` | Fundo do Hero (opacidade baixa) | 1920x900px |
| `sobre-turma.jpg` | Seção Sobre o ITT | 800x600px |
| `banner-modalidades.jpg` | Banner produzido — Presencial ou Online | 1920x600px |
| `presencial.jpg` | Card da modalidade Presencial | 800x500px |
| `ead.jpg` | Card da modalidade EAD | 800x500px |
| `og-image.jpg` | Preview ao compartilhar no WhatsApp/redes | 1200x630px |

---

## Estrutura do projeto

```
itt-site/
  components/       — componentes de cada seção
  data/             — JSONs editáveis (depoimentos, FAQ, grade)
  pages/            — páginas Next.js
  public/images/    — imagens do site
  styles/           — CSS global
```

---

## Cores oficiais ITT

| Nome | Hex |
|---|---|
| Azul ITT | #0B9FD4 |
| Azul escuro | #0A2D5A |
| Laranja | #FF9B00 |
