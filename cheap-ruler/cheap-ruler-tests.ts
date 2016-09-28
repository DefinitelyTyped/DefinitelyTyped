/// <reference path="cheap-ruler.d.ts"/>

import * as cheapRuler from 'cheap-ruler'

// -- Fixtures --
const unit = 'miles'
const lineString: GeoJSON.Feature<GeoJSON.LineString> = {
  "type": "Feature",
  "properties": {},
  "geometry": {
    "type": "LineString",
    "coordinates": [
      [-77.031669, 38.878605],
      [-77.029609, 38.881946],
      [-77.020339, 38.884084],
      [-77.025661, 38.885821],
      [-77.021884, 38.889563],
      [-77.019824, 38.892368]
    ]
  }
}
const line = lineString.geometry.coordinates
const polygon = [[
    [-67.031, 50.458], [-67.031, 50.534], [-66.929, 50.534],
    [-66.929, 50.458], [-67.031, 50.458]
]]
const points = [
    [-67.031, 50.458], [-67.031, 50.534],
    [-66.929, 50.534], [-66.929, 50.458]
]

// -- Test initiators --
cheapRuler(35.05)
cheapRuler(35.05, 'miles')
cheapRuler(35.05, unit)
cheapRuler.fromTile(1567, 12)
cheapRuler.fromTile(1567, 12, 'miles')
cheapRuler.fromTile(1567, 12, unit)

// -- Test units --
cheapRuler.units
cheapRuler.units.miles
cheapRuler.units.kilometers
50 * cheapRuler.units.yards / cheapRuler.units.meters

// -- Test cheapRuler --
const ruler = cheapRuler(35.05, 'kilometers')

console.log(ruler.distance([30.5, 50.5], [30.51, 50.49]))
ruler.bearing([30.5, 50.5], [30.51, 50.49])
ruler.destination([30.5, 50.5], 0.1, 90)
ruler.lineDistance(points)
ruler.area(polygon)
ruler.along(line, 2.5)
ruler.pointOnLine(line, [-67.04, 50.5]).point
ruler.lineSlice([-67.04, 50.5], [-67.05, 50.56], line)
ruler.lineSliceAlong(10, 20, line)
ruler.bufferPoint([30.5, 50.5], 0.01)
ruler.bufferBBox([30.5, 50.5, 31, 51], 0.2)
ruler.insideBBox([30.5, 50.5], [30, 50, 31, 51])