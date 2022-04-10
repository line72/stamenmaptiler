import http from 'http'

export const httpRequest = url =>
  new Promise((resolve, reject) => {
    const req = http.request(url, res => {
      res.setEncoding('binary')
      let body = ''

      res.on('data', chunk => {
        body += chunk.toString()
      })

      res.on('end', () => resolve({ ...res, body }))
    })

    req.on('socket', function (socket) {
      socket.setTimeout(2000)
      socket.on('timeout', function () {
        req.destroy()
        console.warn('timeout occured')
      });
    })

    req.on('error', reject)
    req.end()
  })
