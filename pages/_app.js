import 'nextra-theme-blog/style.css'
import Head from 'next/head'
import { DefaultSeo } from 'next-seo'

import '../styles/main.css'
import nextSeoConfig from '../next-seo.config.js'

export default function Nextra({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link
          rel="alternate"
          type="application/rss+xml"
          title="RSS"
          href="/feed.xml"
        />
        <link
          rel="preload"
          href="/fonts/Inter-roman.latin.var.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="short icon"
          href="https://res.cloudinary.com/lucaos/image/upload/c_thumb,w_200,g_face/v1687836847/lucaoskaique/pysales_Carnaval_PLANO_2020_-_7_fhn3rb.jpg"
        ></link>
        <link
          rel="apple touch icon"
          href="https://res.cloudinary.com/lucaos/image/upload/c_thumb,w_200,g_face/v1687836847/lucaoskaique/pysales_Carnaval_PLANO_2020_-_7_fhn3rb.jpg"
        ></link>
        <link rel="manifest" href="/manifest.json"></link>
        <meta
          name="description"
          content="Software Engineer, Event Producer and DJ in my spare time."
        ></meta>
        <DefaultSeo {...nextSeoConfig} />
      </Head>
      <Component {...pageProps} />
    </>
  )
}
