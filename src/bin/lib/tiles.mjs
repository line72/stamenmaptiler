import path from 'path'

import fs from '@magic/fs'

import * as config from '../config.mjs'
import { httpRequest } from './httpRequest.mjs'

import { calcTileBounds } from './calcTileBounds.mjs'

export const downloadTiles = async ({ lat, lng, zoom, name, country, slug, region }) => {
  const { min, max } = calcTileBounds({ lat, lng, zoom })

  let subdomainId = 0
  let subdomains = ['a', 'b', 'c']

  let newFiles = 0
  let existingFiles = 0

  for (let x = min.x; x <= max.x; x++) {
    for (let y = min.y; y <= max.y; y++) {
      const subdomain = subdomains[subdomainId]

      const filePath = path.join(config.imageDir, region, country, slug, `${zoom}`, `${x}`, `${y}.png`)

      const exists = await fs.exists(filePath)
      if (!exists) {
        const url = `${config.protocol}://${subdomain}.${config.url}/${zoom}/${x}/${y}.png`

        console.log(`${name}: downloading ${filePath}`)

        try {
          // const data = await httpRequest(url)
          const basename = path.dirname(filePath)

          // await fs.mkdirp(basename)

          // await fs.writeFile(filePath, data.body, 'binary')
        } catch (e) {
          console.log(e, filePath)
        }

        subdomainId += 1
        if (subdomainId > 2) {
          subdomainId = 0
        }

        newFiles++
      } else {
        existingFiles++
      }
    }
  }

  console.log(`${name}, zoom: ${zoom}: Downloaded ${newFiles} new tiles. Ignored ${existingFiles} existing files`)
}
