import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  const meta = {
    title: 'Lucas Kaíque - Software Engineer, Event Producer and DJ',
    description: 'Software Engineer, Event Producer and DJ in my spare time.',
    image: 'https://res.cloudinary.com/lucaos/image/upload/v1687836847/lucaoskaique/pysales_Carnaval_PLANO_2020_-_7_fhn3rb.jpg'
  }

  return (
    <Html lang="en">
      <Head>
        <meta name="robots" content="follow, index" />
        <meta name="description" content={meta.description} />
        <meta property="og:url" content="http://lucaskaique.com.br/" />
        <meta property="og:site_name" content={meta.title} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@lucaoskaique" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
