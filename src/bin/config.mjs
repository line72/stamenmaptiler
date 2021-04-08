export const vienna = {
  name: 'Vienna',
  slug: 'vienna',
  country: 'at',
  region: 'eu',
  lat: {
    min: 48,
    max: 48.4,
  },
  lng: {
    min: 16.1,
    max: 16.7,
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
  lat: {
    min: 50.75,
    max: 50.9,
  },
  lng: {
    min: 12.77,
    max: 13.06,
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
  // lat: {
  //   min: 33.33,
  //   max: 61.53,
  // },
  // lng: {
  //   min: -11.23,
  //   max: 29.5,
  // },

  // zoom: {
  //   min: 6,
  //   max: 10,
  // },

  countries: [
    at,
    de,
  ],
}

export const world = {
  // bounds: {
  //   north: 84,
  //   south: -56,
  //   west: 0,
  //   east: 360,
  // },
  // zoom: {
  //   min: 4,
  //   max: 5,
  // },

  regions: [
    eu,
    na,
  ],
}

export const url = 'tile.stamen.com/toner'

export const protocol = 'http'

export const imageDir = 'docs'
