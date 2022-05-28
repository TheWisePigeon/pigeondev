import Head from 'next/head'
import About from '../components/about'
import Bye from '../components/bye'
import Skills from '../components/skills'
import Projects from '../components/projects'
import Contact from '../components/contact'

export default function Home() {

  return (
    <div >
      <Head>
        <title>PigeonDev</title>
        <meta name="description" content="Hi, I'm Joseph, a.k.a. TheWisePigeon. I'm a Full Stack Developer and this is my portfolio :)" />
        <link rel="icon" href="/faviconP.png" />
      </Head>
      <main>
        <About/>
        <Skills/>
        <Projects/>
        <Contact/>
      </main>

    </div>
  )
}
