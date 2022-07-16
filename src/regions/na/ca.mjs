const toronto = {
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

const ottawa = {
  name: 'Ottawa',
  slug: 'ottawa',
  country: 'ca',
  region: 'na',
  lat: {
    min: 45.329,
    max: 45.507,
  },
  lng: {
    max: -75.575,
    min: -75.96,
  },
  zoom: {
    min: 11,
    max: 16,
  },
}

const kingston = {
  name: 'Kingston',
  slug: 'kingston',
  country: 'ca',
  region: 'na',
  lat: {
    min: 44.21,
    max: 44.26,
  },
  lng: {
    max: -76.475,
    min: -76.54,
  },
  zoom: {
    min: 11,
    max: 16,
  },
}

export const ca = {
  slug: 'ca',
  name: 'Canada',
  bounds: {},
  zoom: {},
  cities: [
    toronto,
    ottawa,
    kingston,
  ],
}
