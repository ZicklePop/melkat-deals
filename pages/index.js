import React from 'react'
import Layout from '../components/layout'
import fetch from 'isomorphic-unfetch'

const devPort = parseInt(process.env.PORT, 10) || 3000
const host = process.env.NODE_ENV !== 'production' ? `http://localhost:${devPort}` : 'https://melkat.deals'
const API = `${host}/api`

const cx = {
  article: 'mw5 pa3 fw5',
  name: 'f4 bb bw1 b--gray pb3 dib mb0 lh-title',
  description: 'lh-copy center f6 justify',
  a: 'link'
}

const Index = ({ link }) => (
  <Layout>
    <a href={link.url} className={cx.a}>
      <article className={cx.article}>
        <h1 className={cx.name}>{link.name}</h1>
        <p className={cx.description}>
          {link.description}
        </p>
      </article>
    </a>
  </Layout>
)

Index.getInitialProps = async function () {
  const res = await fetch(API)
  const link = await res.json()
  return { link }
}

export default Index
