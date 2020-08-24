import map from 'lodash/map'
import omit from 'lodash/omit'
import pick from 'pick-random-weighted'
import referrals from '../../public/links.json'

export default async (req, res) => {
  const { links } = referrals
  const weights = map(links, el => [omit(el, 'weight'), el.weight])
  res.status(200).json(pick(weights))
}
