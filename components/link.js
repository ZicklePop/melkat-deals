import React from 'react'
import PropTypes from 'prop-types'

const cx = {
  article: 'mw5 pa3 fw5 grow hover-bg-highlight br3 pointer',
  name: 'f4 bb bw1 b--gray pb3 dib mb0 lh-title',
  description: 'lh-copy center f6 justify',
  a: 'link',
  imgWrapper: 'aspect-ratio aspect-ratio--16x9 mb1',
  img: 'aspect-ratio--object cover bg-center'
}

const Link = ({ className, description, img, name, url }) => (
  <a href={url} className={`${cx.a} ${className}`}>
    <article className={cx.article}>
      <div className={cx.imgWrapper}>
        <div
          className={cx.img}
          role='img'
          aria-label='header img'
          style={{ backgroundImage: `url(${img})` }}
        />
      </div>
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
  img: PropTypes.string,
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
