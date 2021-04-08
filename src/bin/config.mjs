//    [48.4, 16.1],
//    [48.0, 16.7],

export const cities = [
  {
    name: 'Vienna',
    slug: 'vienna',
    country: 'at',
    region: 'eu',
    bounds: {
      west: 48.4,
      east: 48,
      north: 16.1,
      south: 16.7,
    },
    zoom: {
      min: 11,
      max: 18,
    },
  },
  {
    name: 'Chemnitz',
    slug: 'chemnitz',
    country: 'de',
    region: 'eu',
    bounds: {
      west: 50.9,
      east: 50.75,
      north: 12.77,
      south: 13.06,
    },
    zoom: {
      min: 11,
      max: 18,
    },
  },
]

export const url = 'tile.stamen.com/toner'

export const protocol = 'http'

export const imageDir = 'docs'
