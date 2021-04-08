export const vienna = {
  name: 'Vienna',
  slug: 'vienna',
  country: 'at',
  region: 'eu',
  bounds: {
    north: 16.7,
    south: 16.1,
    west: 48,
    east: 48.4,
  },
  zoom: {
    min: 11,
    max: 18,
  },
}

export const chemnitz = {
  name: 'Chemnitz',
  slug: 'chemnitz',
  country: 'de',
  region: 'eu',
  bounds: {
    north: 13.06,
    south: 12.77,
    west: 50.75,
    east: 50.9,
  },
  zoom: {
    min: 11,
    max: 18,
  },
}

export const de = {
  slug: 'de',
  name: 'Germany',
  bounds: {},
  zoom: {},
  cities: [
    chemnitz,
  ],
}

export const at = {
  slug: 'at',
  name: 'Austria',
  bounds: {},
  zoom: {},
  cities: [
    vienna,
  ],
}

export const na = {
  name: 'North America',
  slug: 'na',
  bounds: {},
  zoom: {},
  countries: [],
}

export const eu = {
  name: 'Europe',
  slug: 'eu',
  bounds: {
    north: 61.53,
    south: 33.36,
    west: -11.23,
    east: 29.5,
  },

  zoom: {
    min: 6,
    max: 10,
  },

  countries: [
    at,
    de,
  ],
}

export const world = {
  bounds: {
    north: 84,
    south: -56,
    west: 0,
    east: 360,
  },
  zoom: {
    min: 4,
    max: 5,
  },

  regions: [
    eu,
    na,
  ],
}

export const cities = [
  {
    name: 'Vienna',
    slug: 'vienna',
    country: 'at',
    region: 'eu',
    bounds: {
      north: 16.7,
      south: 16.1,
      west: 48,
      east: 48.4,
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
      north: 13.06,
      south: 12.77,
      west: 50.75,
      east: 50.9,
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
