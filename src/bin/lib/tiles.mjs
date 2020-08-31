import path from 'path'

import fs from '@magic/fs'

import * as config from './config.mjs'
import { httpRequest } from './httpRequest.mjs'

const degreesToRadians = degrees => (degrees * Math.PI) / 180

const degreesToTileXY = (lat, lon, zoom) => {
  const latRadian = degreesToRadians(lat)
  const n = 2 ** zoom
  const x = Math.round(((lon + 180) / 360) * n)

  const y = Math.round(((1.0 - Math.asinh(Math.tan(latRadian)) / Math.PI) / 2.0) * n)

  return { x, y }
}

const calcTileBounds = (bounds, zoom) => {
  const min = degreesToTileXY(bounds.left, bounds.top, zoom)
  const max = degreesToTileXY(bounds.right, bounds.bottom, zoom)

  return { left: min.x - 1, top: min.y - 1, right: max.x + 1, bottom: max.y + 1 }
}

const writeFile = async ({ x, y, zoom, subdomain, bounds }) => {
  const url = `${config.protocol}://${subdomain}.${config.url}/${zoom}/${x}/${y}.png`
  const filePath = path.join(config.imageDir, `${zoom}`, `${x}`, `${y}.png`)

  const exists = await fs.exists(filePath)
  if (!exists) {
    try {
      console.log('downloading', `/${zoom}/${x}/${y}.png`)

      const data = await httpRequest(url)
      const basename = path.dirname(filePath)

      await fs.mkdirp(basename)

      await fs.writeFile(filePath, data.body, 'binary')
      console.log(`downloaded ${zoom}/${x}/${y}. maxX: ${bounds.right}, maxY: ${bounds.bottom}`)
    } catch (e) {
      console.log(e, filePath)
    }
  }
}

export const downloadTiles = async zoom => {
  const bounds = calcTileBounds(config.bounds, zoom)

  const tiles = []

  let subdomainId = 0
  let subdomains = ['a', 'b', 'c']

  const filePromises = []

  for (let x = bounds.left; x <= bounds.right; x++) {
    for (let y = bounds.top; y <= bounds.bottom; y++) {
      const subdomain = subdomains[subdomainId]

      const prom = writeFile({ x, y, zoom, subdomain, bounds })
      filePromises.push(prom)

      subdomainId += 1
      if (subdomainId > 2) {
        subdomainId = 0
      }
    }
  }

  await Promise.all(filePromises)

  return tiles
}
