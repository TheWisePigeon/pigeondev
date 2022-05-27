import '../styles/globals.css'
import _layout from '../components/_layout'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <_layout>
      <Component {...pageProps} />
      </_layout>
    </>
    
  )
}

export default MyApp
