import Head from 'next/head'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import PorqueITT from '../components/PorqueITT'
import Pilares from '../components/Pilares'
import Sobre from '../components/Sobre'
import MissaoValores from '../components/MissaoValores'
import ComoFunciona from '../components/ComoFunciona'
import Modalidades from '../components/Modalidades'
import Grade from '../components/Grade'
import Depoimentos from '../components/Depoimentos'
import FAQ from '../components/FAQ'
import FaleConosco from '../components/FaleConosco'
import CTAFinal from '../components/CTAFinal'
import Footer from '../components/Footer'

import depoimentos from '../data/depoimentos.json'
import faq from '../data/faq.json'

const INSCRICAO_URL = process.env.NEXT_PUBLIC_INSCRICAO_URL || '#'

export default function Home() {
  return (
    <>
      <Head>
        <title>ITT — Instituto Teológico Taber</title>
        <meta name="description" content="Mude a perspectiva. Viva pela Palavra. Formacao biblica que transforma a lente com que voce enxerga a vida, o ministerio e o seu chamado." />
        <meta property="og:title" content="ITT — Instituto Teológico Taber" />
        <meta property="og:description" content="Mude a perspectiva. Viva pela Palavra." />
        <meta property="og:image" content="/images/og-image.jpg" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar inscricaoUrl={INSCRICAO_URL} />
      <main>
        <Hero inscricaoUrl={INSCRICAO_URL} />
        <PorqueITT />
        <Pilares />
        <Sobre />
        <MissaoValores />
        <ComoFunciona />
        <Modalidades />
        <Grade />
        <Depoimentos depoimentos={depoimentos} />
        <FAQ faq={faq} />
        <FaleConosco />
        <CTAFinal inscricaoUrl={INSCRICAO_URL} />
      </main>
      <Footer />
    </>
  )
}
