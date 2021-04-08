import path from 'path'

import fs from '@magic/fs'

import * as config from '../config.mjs'
import { httpRequest } from './httpRequest.mjs'

const degreesToRadians = degrees => (degrees * Math.PI) / 180

const degreesToTileXY = (lat, lng, zoom) => {
  const latRadian = degreesToRadians(lat)
  const n = 2 ** zoom
  const x = Math.round(((lng + 180) / 360) * n)

  const y = Math.round(((1.0 - Math.asinh(Math.tan(latRadian)) / Math.PI) / 2.0) * n)

  return { x, y }
}

const getBigger = (a, b) => a > b ? a : b
const getSmaller = (a, b) => a < b ? a : b

const calcTileBounds = ({ lat, lng, zoom }) => {
  const latMax = getBigger(lat.max, lat.min)
  const latMin = getSmaller(lat.max, lat.min)
  const lngMax = getBigger(lng.max, lng.min)
  const lngMin = getSmaller(lng.max, lng.min)

  const min = degreesToTileXY(latMax, lngMin, zoom)
  const max = degreesToTileXY(latMin, lngMax, zoom)

  return {
    min: {
      x: min.x - 1,
      y: min.y - 1,
    },
    max: {
      x: max.x + 1,
      y: max.y + 1,
    }
  }
}

const writeFile = async ({ x, y, zoom, country, name, slug, region, subdomain }) => {
  const url = `${config.protocol}://${subdomain}.${config.url}/${zoom}/${x}/${y}.png`
  const filePath = path.join(config.imageDir, region, country, slug, `${zoom}`, `${x}`, `${y}.png`)

  const exists = await fs.exists(filePath)
  if (!exists) {
    try {
      console.log(`${name}: downloading ${filePath}`)

      // const data = await httpRequest(url)
      const basename = path.dirname(filePath)

      // await fs.mkdirp(basename)

      // await fs.writeFile(filePath, data.body, 'binary')
    } catch (e) {
      console.log(e, filePath)
    }
  } else {
    console.log('exists', filePath)
  }
}

export const downloadTiles = async ({ lat, lng, zoom, name, country, slug, region }) => {
  const { min, max } = calcTileBounds({ lat, lng, zoom })

  let subdomainId = 0
  let subdomains = ['a', 'b', 'c']

  console.log({ country, name, slug, lat, lng, min, max })

  for (let x = min.x; x <= max.x; x++) {
    for (let y = min.y; y <= max.y; y++) {
      const subdomain = subdomains[subdomainId]


      await writeFile({ x, y, zoom, country, name, slug, region, subdomain })

      subdomainId += 1
      if (subdomainId > 2) {
        subdomainId = 0
      }
    }
  }
}
