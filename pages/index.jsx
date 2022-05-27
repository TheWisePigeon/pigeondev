import Head from 'next/head'
import About from '../components/about'


export default function Home() {

  return (
    <div >
      <Head>
        <title>PigeonDev</title>
        <meta name="description" content="Pigeondev portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <About/>
      </main>

    </div>
  )
}
