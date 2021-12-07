import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Layout } from '../coponents/Layout'

function MyApp({ Component, pageProps }) {
  return <Layout><Component {...pageProps} /></Layout>
}

export default MyApp
