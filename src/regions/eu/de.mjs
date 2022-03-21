const chemnitz = {
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

const dresden = {
  name: 'Dresden',
  slug: 'dresden',
  country: 'de',
  region: 'eu',
  lat: {
    min: 50.85,
    max: 51.26,
  },
  lng: {
    min: 13.5,
    max: 13.85,
  },
  zoom: {
    min: 11,
    max: 18,
  },
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
}

export const de = {
  slug: 'de',
  name: 'Germany',
  bounds: {},
  zoom: {},
  cities: [chemnitz, dresden, gelsenkirchen],
}
