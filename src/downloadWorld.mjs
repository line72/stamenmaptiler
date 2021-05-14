import path from 'path'
import fs from '@magic/fs'

import { httpRequest } from './lib/httpRequest.mjs'


let subdomainId = 0
const subdomains = ['a', 'b', 'c']

const run = async () => {

  for (let i = 0; i < 64; i++) {
    for (let j = 0; j < 64; j++) {

      const filePath = path.join(process.cwd(), 'docs', 'world', '6', `${i}`, `${j}.png`)

      const exists = await fs.exists(filePath)
      if (!exists) {
        const subdomain = subdomains[subdomainId]

        const url = `http://${subdomain}.tile.stamen.com/toner/6/${i}/${j}.png`

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

run()
