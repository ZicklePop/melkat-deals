import React from 'react'
import Head from 'next/head'
import PropTypes from 'prop-types'

const cx = {
  main: 'sans-serif',
  footer: 'lh-copy f6 fw4 gray  ma3',
  h1: 'lh-title f5 ma3',
  h1a: 'no-underline',
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
          h1 a::after {
            content: '.deals';
            color: #ff52a3;
          }
          .hover-bg-highlight:hover {
            background-color: rgba(255,255,255,.1);
          }
          @media (prefers-color-scheme: light) {
            body {
              color: #111;
              background: #fff;
            }
            a {
              color: #111;
            }
            .hover-bg-highlight:hover {
              background-color: rgba(0,0,0,.025);
            }
          }
        `}
      </style>
      <h1 className={cx.h1}>
        <a
          className={cx.h1a}
          href='/'
        >
          {'melkat'}
        </a>
      </h1>
      {children}
      <footer className={cx.footer}>
        <p className={cx.p}>
          {'affliate links benefit '}
          <a href='https://melaniekat.com' rel='me'>
            {'melanie kat'}
          </a>
          {'; '}
          {'links from '}
          <a href='https://raindrop.io/collection/12902279'>
            {'raindrop.io'}
          </a>
          {'; '}
          {'this site does not track you'}
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
