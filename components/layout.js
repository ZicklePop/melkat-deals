import React from 'react'
import Head from 'next/head'
import PropTypes from 'prop-types'

const cx = {
  main: 'sans-serif',
  footer: 'lh-copy f6 fw4 gray mh3',
  p: 'ma0 pa0'
}

const Layout = ({ title, description, children, className }) => {
  return (
    <main className={`${cx.main} ${className}`}>
      <Head>
        <title>{title}</title>
        <meta name='description' content={description} />
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        <meta name='twitter:title' content={title} />
        <meta name='twitter:description' content={description} />
        <meta property='og:description' content={description} />
        <meta property='og:title' content={title} />
      </Head>
      <style global jsx>
        {`
          body {
            color: #fff;
            background: #000;
          }
          a {
            color: #fff;
          }
          @media (prefers-color-scheme: light) {
            body {
              color: #111;
              background: #fff;
            }
            a {
              color: #111;
            }
          }
        `}
      </style>
      {children}
      <footer className={cx.footer}>
        <p className={cx.p}>
          {'affliate links benefit '}
          <a href='https://melaniekat.com' rel='me'>
            {'melkat'}
          </a>
        </p>
        <p className={cx.p}>
          {'melkat.deals does not track you'}
        </p>
      </footer>
    </main>
  )
}

Layout.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string
}

Layout.defaultProps = {
  title: 'melkat.deals',
  description: 'melkat deals',
  className: ''
}

export default Layout
