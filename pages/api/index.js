import map from 'lodash/map'
import pick from 'pick-random-weighted'
import referrals from '../../public/links.json'

export default async (req, res) => {
  const { links } = referrals
  const weights = map(links, el => [el, el.weight])
  console.log(weights)
  res.status(200).json(pick(weights))
}
