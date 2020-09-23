import PropTypes from 'prop-types'
import Layout from '../components/layout'
import Link from '../components/link'
import map from 'lodash/map'
import sortBy from 'lodash/sortBy'
import fetchDrops from '../utils/fetchDrops'

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
  const drops = await fetchDrops()
  const links = sortBy(drops, o => o.weight * -1)
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
