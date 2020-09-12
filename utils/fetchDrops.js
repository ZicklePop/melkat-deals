import fetch from 'isomorphic-unfetch'
import get from 'lodash/get'
import reduceDrops from './reduceDrops'

const COLLECTION_ID = get(process, 'env.DEALS_RAINDROP_COLLECTION_ID', '')
const API = `https://api.raindrop.io/rest/v1/raindrops/${COLLECTION_ID}?perpage=50`
const headers = {
  Authorization: `Bearer ${get(process, 'env.RAINDROP_TOKEN', '')}`
}

const fetchDrops = async () => {
  const apiResponse = await fetch(`${API}`, { headers })
  const data = await apiResponse.json()
  return reduceDrops(get(data, 'items', []))
}

export default fetchDrops
