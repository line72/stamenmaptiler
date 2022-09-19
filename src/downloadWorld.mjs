#!/usr/bin/env node

import path from 'path'
import fs from '@magic/fs'

import { httpRequest } from './lib/httpRequest.mjs'

import { getDomain } from './config.mjs'

let subdomainId = 0
const subdomains = ['a', 'b', 'c']

const downloadLayer = async ({ num, zoom }) => {
  for (let i = 0; i <= num; i++) {
    for (let j = 0; j <= num; j++) {
      const filePath = path.join(process.cwd(), 'docs', 'world', `${zoom}`, `${i}`, `${j}.png`)

      const exists = await fs.exists(filePath)
      if (!exists) {
        const url = `${getDomain('earth', subdomainId)}/${zoom}/${i}/${j}.png`

        try {
          const data = await httpRequest(url)

          if (data.statusCode !== 200) {
            console.error('ERROR', filePath)
            return
          }

          const basename = path.dirname(filePath)

          await fs.mkdirp(basename)

          await fs.writeFile(filePath, data.body, 'binary')
          console.log('wrote file', filePath, data.body.length)
        } catch (e) {
          console.log(e, filePath)
        }

        subdomainId += 1
        if (subdomainId >= subdomains.length) {
          subdomainId = 0
        }
      }
    }
  }
}

const run = async () => {
  const layers = [
    {
      num: 1,
      zoom: 1,
    },
    {
      num: 3,
      zoom: 2,
    },
    {
      num: 7,
      zoom: 3,
    },
    {
      num: 15,
      zoom: 4,
    },
    {
      num: 26,
      zoom: 5,
    },
    {
      num: 63,
      zoom: 6,
    },
    {
      num: 127,
      zoom: 7,
    },
    {
      num: 255,
      zoom: 8,
    },
    {
      num: 511,
      zoom: 9,
    },
  ]

  layers.forEach(downloadLayer)
}

run()
