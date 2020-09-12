import map from 'lodash/map'
import omit from 'lodash/omit'
import pick from 'pick-random-weighted'
import fetchDrops from '../../utils/fetchDrops'

export default async (req, res) => {
  const links = await fetchDrops()
  const weights = map(links, el => [omit(el, 'weight'), el.weight])
  res.status(200).json(pick(weights))
}
