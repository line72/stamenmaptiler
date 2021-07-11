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

export const stpoelten = {
  name: 'St. Pölten',
  slug: 'stpoelten',
  country: 'at',
  region: 'eu',
  lat: {
    min: 48.18,
    max: 48.25,
  },
  lng: {
    min: 15.5,
    max: 15.8,
  },
  zoom: {
    min: 11,
    max: 18,
  },
}

export const linz = {
  name: 'Linz',
  slug: 'linz',
  country: 'at',
  region: 'eu',
  lat: {
    min: 48.227,

    max: 48.3636,
  },
  lng: {
    min: 14.224,
    max: 14.370,
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
    min: 50.6,
    max: 51,
  },
  lng: {
    min: 12.5,
    max: 13.25,
  },
  zoom: {
    min: 11,
    max: 18,
  },
}

export const dresden = {
  name: 'Dresden',
  slug: 'dresden',
  country: 'de',
  region: 'eu',
  lat: {
    min: 50.8,
    max: 51.2,
  },
  lng: {
    min: 13.48,
    max: 13.88,
  },
  zoom: {
    min: 11,
    max: 18,
  },
}

export const toronto = {
  name: 'Toronto',
  slug: 'toronto',
  country: 'ca',
  region: 'na',
  lat: {
    min: 43.5782,
    max: 43.859,
  },
  lng: {
    max: -79.1341,
    min: -79.5923,
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
    dresden,
  ],
}

export const at = {
  slug: 'at',
  name: 'Austria',
  bounds: {},
  zoom: {},
  cities: [
    vienna,
    stpoelten,
    linz,
  ],
}

export const ca = {
  slug: 'ca',
  name: 'Canada',
  bounds: {},
  zoom: {},
  cities: [
    toronto,
  ],
}

export const na = {
  name: 'North America',
  slug: 'na',
  bounds: {},
  zoom: {},
  countries: [
    ca,
  ],
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
