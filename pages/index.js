import React from 'react'
import PropTypes from 'prop-types'
import Layout from '../components/layout'
import Link from '../components/link'
import map from 'lodash/map'
import sortBy from 'lodash/sortBy'
import referrals from '../public/links.json'

const cx = {
  layout: 'mw8 center',
  link: 'dib w-100 w-25-l w-third-m v-top'
}

const Index = ({ links }) => (
  <Layout className={cx.layout}>
    {map(links, (el, i) => (
      <Link className={cx.link} key={i} {...el} />
    ))}
  </Layout>
)

Index.getInitialProps = async function () {
  const links = sortBy(referrals.links, o => o.weight * -1)
  return { links }
}

Index.propTypes = {
  links: PropTypes.arrayOf(PropTypes.shape({
    description: PropTypes.string,
    name: PropTypes.string,
    url: PropTypes.string
  }))
}

export default Index
