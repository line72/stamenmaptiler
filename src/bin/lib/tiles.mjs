import path from 'path'

import fs from '@magic/fs'

import * as config from '../config.mjs'
import { httpRequest } from './httpRequest.mjs'

const degreesToRadians = degrees => (degrees * Math.PI) / 180

const degreesToTileXY = (lat, lon, zoom) => {
  const latRadian = degreesToRadians(lat)
  const n = 2 ** zoom
  const x = Math.round(((lon + 180) / 360) * n)

  const y = Math.round(((1.0 - Math.asinh(Math.tan(latRadian)) / Math.PI) / 2.0) * n)

  return { x, y }
}

const calcTileBounds = ({ bounds, zoom }) => {
  const min = degreesToTileXY(bounds.west, bounds.north, zoom)
  const max = degreesToTileXY(bounds.east, bounds.south, zoom)

  return { west: min.x - 1, north: min.y - 1, east: max.x + 1, south: max.y + 1 }
}

const writeFile = async ({ x, y, zoom, country, name, slug, region, subdomain, bounds }) => {
  const url = `${config.protocol}://${subdomain}.${config.url}/${zoom}/${x}/${y}.png`
  const filePath = path.join(config.imageDir, region, country, slug, `${zoom}`, `${x}`, `${y}.png`)

  const b = JSON.stringify(bounds)

  const exists = await fs.exists(filePath)
  if (!exists) {
    try {
      console.log(`${name}: downloading ${filePath} bounds: ${b}`)

      // const data = await httpRequest(url)
      // const basename = path.dirname(filePath)

      // await fs.mkdirp(basename)

      // await fs.writeFile(filePath, data.body, 'binary')
    } catch (e) {
      console.log(e, filePath)
    }
  }
}

export const downloadTiles = async args => {
  const bounds = calcTileBounds(args)
  const { zoom, name, country, slug, region } = args

  const tiles = []

  let subdomainId = 0
  let subdomains = ['a', 'b', 'c']

  for (let x = bounds.west; x <= bounds.east; x++) {
    for (let y = bounds.north; y <= bounds.south; y++) {
      const subdomain = subdomains[subdomainId]

      await writeFile({ x, y, zoom, country, name, slug, region, subdomain, bounds })

      subdomainId += 1
      if (subdomainId > 2) {
        subdomainId = 0
      }
    }
  }

  return tiles
}
