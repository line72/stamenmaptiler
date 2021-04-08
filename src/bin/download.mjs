#!/usr/bin/env node

import { cities } from './config.mjs'

import { downloadTiles } from './lib/tiles.mjs'

const main = async () => {
  const layers = {}

  const promises = cities.map(async city => {
    const { min, max } = city.zoom

    for (let i = min; i <= max; i++) {
      layers[`${i}`] = await downloadTiles({ ...city, zoom: i })
      console.log(`downloaded zoom layer ${i} for ${city.name}`)
    }
  })

  await Promise.all(promises)
}

main()
