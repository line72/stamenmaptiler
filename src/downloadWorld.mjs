import path from 'path'
import fs from '@magic/fs'

import { httpRequest } from './lib/httpRequest.mjs'


let subdomainId = 0
const subdomains = ['a', 'b', 'c']

const downloadLayer = async ({ num, zoom }) => {

  for (let i = 0; i < num; i++) {
    for (let j = 0; j < num; j++) {
      const filePath = path.join(process.cwd(), 'docs', 'world', `${zoom}`, `${i}`, `${j}.png`)

      const exists = await fs.exists(filePath)
      if (!exists) {
        const subdomain = subdomains[subdomainId]

        const url = `http://${subdomain}.tile.stamen.com/toner/${zoom}/${i}/${j}.png`

        try {
          const data = await httpRequest(url)
          const basename = path.dirname(filePath)

          await fs.mkdirp(basename)

          await fs.writeFile(filePath, data.body, 'binary')
          console.log('wrote file', filePath)
        } catch (e) {
          console.log(e, filePath)
        }

        subdomainId += 1
        if (subdomainId > 2) {
          subdomainId = 0
        }
      }
    }
  }
}

const run = async () => {
  const layers = [
    {
      num: 27,
      zoom: 5,
    },
    {
      num: 64,
      zoom: 6,
    },
  ]

  layers.forEach(downloadLayer)
}

run()
