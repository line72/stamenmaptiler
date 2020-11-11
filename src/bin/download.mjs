#!/usr/bin/env node

import { zoom } from './config.mjs'

import { downloadTiles } from './lib/tiles.mjs'

const main = async () => {
  const layers = {}

  for (let i = zoom.min; i <= zoom.max; i++) {
    layers[`${i}`] = await downloadTiles(i)
    console.log(`downloaded zoom layer ${i}`)
  }
}

main()
