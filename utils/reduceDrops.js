import get from 'lodash/get'
import map from 'lodash/map'
import find from 'lodash/find'
import trim from 'lodash/trim'

const weightPrefix = 'w-'
const defaultWeight = `${weightPrefix}1`

const getWeight = tags => parseInt(
  find(tags,
    el => trim(el).indexOf(weightPrefix) === 0
  ).replace(weightPrefix, '')
)

const reduceDrops = items => map(items, el => {
  const weight = getWeight(get(el, 'tags', defaultWeight))
  return {
    img: get(el, 'cover'),
    description: get(el, 'excerpt'),
    url: get(el, 'link'),
    name: get(el, 'title'),
    weight
  }
})

export default reduceDrops
