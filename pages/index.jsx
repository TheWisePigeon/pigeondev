import Head from 'next/head'
import About from '../components/about'
import Bye from '../components/bye'
import Contact from '../components/contact'

export default function Home() {

  return (
    <div >
      <Head>
        <title>PigeonDev</title>
        <meta name="description" content="Pigeondev portfolio" />
        <link rel="icon" href="/faviconP.png" />
      </Head>
      <main>
        <About/>
        <Contact/>
      </main>

    </div>
  )
}
