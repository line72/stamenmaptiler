import { degreesToTileXY } from './degreesToTileXY.mjs'

export const calcTileBounds = ({ lat, lng, zoom }) => {
  const latMax = Math.max(lat.max, lat.min)
  const latMin = Math.min(lat.max, lat.min)
  const lngMax = Math.max(lng.max, lng.min)
  const lngMin = Math.min(lng.max, lng.min)

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
