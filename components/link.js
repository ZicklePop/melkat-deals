import React from 'react'
import PropTypes from 'prop-types'

const cx = {
  article: 'mw5 pa3 fw5',
  name: 'f4 bb bw1 b--gray pb3 dib mb0 lh-title',
  description: 'lh-copy center f6 justify',
  a: 'link'
}

const Link = ({ className, description, name, url }) => (
  <a href={url} className={`${cx.a} ${className}`}>
    <article className={cx.article}>
      <h1 className={cx.name}>{name}</h1>
      <p className={cx.description}>
        {description}
      </p>
    </article>
  </a>
)

Link.propTypes = {
  className: PropTypes.string,
  description: PropTypes.string,
  name: PropTypes.string,
  url: PropTypes.string
}

Link.defaultProps = {
  className: '',
  description: '',
  name: '',
  url: ''
}

export default Link
