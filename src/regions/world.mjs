import { eu } from './eu/index.mjs'
import { na } from './na/index.mjs'
import { as } from './as/index.mjs'

export const world = {
  bounds: {
    north: 84,
    south: -56,
    west: 0,
    east: 360,
  },
  zoom: {
    min: 1,
    max: 9,
  },

  regions: [eu, na, as],
}
