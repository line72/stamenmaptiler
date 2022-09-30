const berlin = {
  name: 'Berlin',
  slug: 'berlin',
  country: 'de',
  region: 'eu',
  lat: {
    min: 52.38,
    max: 52.628,
  },
  lng: {
    min: 13.13,
    max: 13.64,
  },
  zoom: {
    min: 11,
    max: 18,
  },
  finished: true,
}

const chemnitz = {
  name: 'Chemnitz',
  slug: 'chemnitz',
  country: 'de',
  region: 'eu',
  lat: {
    min: 50.75,
    max: 50.9,
  },
  lng: {
    min: 12.8,
    max: 13.0,
  },
  zoom: {
    min: 11,
    max: 18,
  },
  finished: true,
}

const dresden = {
  name: 'Dresden',
  slug: 'dresden',
  country: 'de',
  region: 'eu',
  lat: {
    min: 51,
    max: 51.15,
  },
  lng: {
    min: 13.6,
    max: 13.83,
  },

  zoom: {
    min: 11,
    max: 18,
  },
  finished: true,
}

const gelsenkirchen = {
  name: 'Gelsenkirchen',
  slug: 'gelsenkirchen',
  country: 'de',
  region: 'eu',
  lat: {
    min: 51.46,
    max: 51.58,
  },
  lng: {
    min: 7,
    max: 7.18,
  },
  zoom: {
    min: 11,
    max: 18,
  },
  finished: true,
}

export const de = {
  slug: 'de',
  name: 'Germany',
  bounds: {},
  zoom: {},
  cities: [
    // berlin,
    chemnitz,
    dresden,
    gelsenkirchen,
  ],
}
