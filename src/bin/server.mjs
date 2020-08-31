#!/usr/bin/env node

import { cli } from '@grundstein/commons'

import run from '../index.mjs'

const opts = {
  options: [
    ['--help', '-help', 'help', '--h', '-h'],
    ['--cert-dir', '--cert', '-c'],
    ['--protocol', '--prot', '-p'],
    ['--url', '-u'],
  ],
  default: {
    '--cert-dir': './ca',
    '--protocol': 'http',
    '--url': 'tile.stamen.com/toner',
  },
  single: ['--url', '--protocol', '--cert-dir'],
  help: {
    name: 'tile.thesystem.at server',
    header: 'loads map images from remote server, converts them to jpg then serves them locally.',
    options: {
      '--cert-dir': 'directory containing https certificates',
      '--protocol': 'https or http',
      '--url': 'remote url to load from, excluding the (a,b,c) subdomains.',
    },
    example: `
# start production server
npm start

# start dev server
npm run dev
`,
  },
}

const { args } = cli(opts)

run(args)
