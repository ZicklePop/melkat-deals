import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps (ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render () {
    return (
      <Html lang='en'>
        <Head>
          <link rel='apple-touch-icon' href='/apple-touch-icon.png' />
          <link rel='icon' href='/favicon.ico' />
          <link rel='mask-icon' sizes='any' href='/mask-icon.svg' color='#00d6ff' />
          <meta charSet='utf-8' />
          <meta name='keywords' content='melkat, melanie, kat, dev, codes' />
          <meta property='og:type' content='website' />
          <meta name='twitter:image' content='/facebook-open-graph.png' />
          <meta name='twitter:image:alt' content='logo for melkat.deals' />
          <meta property='og:image' content='/facebook-open-graph.png' />
          <meta property='og:image:height' content='630' />
          <meta property='og:image:width' content='1200' />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
