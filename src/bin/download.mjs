#!/usr/bin/env node

import { cities, world } from './config.mjs'

import { downloadTiles } from './lib/tiles.mjs'

const downloadZoomLayer = async ({ bounds, zoom, name, slug, region, country }) => {
  const { min, max } = zoom

  for (let i = min; i <= max; i++) {
    await downloadTiles({ bounds, zoom: i, name, slug, region, country })

    console.log(`downloaded zoom layer ${i} for ${name}`)
  }
}

const main = async () => {
  const { regions } = world

  await Promise.all(regions.map(async region => {
    const { countries = [], slug: regionCode } = region

    await Promise.all(countries.map(async country => {
      const { slug: countryCode, cities = [] } = country

      await Promise.all(cities.map(async city => {
        const { bounds, zoom, slug, name } = city
        await downloadZoomLayer({ bounds, zoom, name, slug, region: regionCode, country: countryCode })
      }))
    }))
  }))
}

main()
