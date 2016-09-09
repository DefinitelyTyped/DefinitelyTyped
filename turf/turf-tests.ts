/// <reference path="turf.d.ts"/>
import * as turf from 'turf'

///////////////////////////////////////////
// Tests data initialisation
///////////////////////////////////////////

const resolution = 15
const cellWidth = 50
const count = 100
const bbox = [0, 0, 10, 10]
const distance = 50
const bearing = 90
const tolerance = 0.01
const maxEdge = 1
const units = 'miles'
const properties = {foo: 'bar'}
const highQuality = false
const breaks = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const num_vertices = 10
const max_radial_length = 10
const num = 10

const point: GeoJSON.Feature<GeoJSON.Point> = {
  "type": "Feature",
  "properties": {},
  "geometry": {
    "type": "Point",
    "coordinates": [-75.343, 39.984]
  }
}

const point1 = point

const point2: GeoJSON.Feature<GeoJSON.Point> = {
  "type": "Feature",
  "properties": {},
  "geometry": {
    "type": "Point",
    "coordinates": [-75.401, 39.884]
  }
}

const multiPoint: GeoJSON.Feature<GeoJSON.MultiPoint> = {
  "type": "Feature",
  "properties": {},
  "geometry": {
    "type": "MultiPoint",
    "coordinates": [ [100.0, 0.0], [101.0, 1.0] ]
  }
}

const line: GeoJSON.Feature<GeoJSON.LineString> = {
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

const multiLine: GeoJSON.Feature<GeoJSON.MultiLineString> = {
  "type": "Feature",
  "properties": {},
  "geometry": {
    "type": "MultiLineString",
    "coordinates": [
        [ [100.0, 0.0], [101.0, 1.0] ],
        [ [102.0, 2.0], [103.0, 3.0] ]
      ]
  }
}

const polygons: GeoJSON.FeatureCollection<GeoJSON.Polygon> = {
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "type": "Polygon",
        "coordinates": [[
          [-67.031021, 10.458102],
          [-67.031021, 10.53372],
          [-66.929397, 10.53372],
          [-66.929397, 10.458102],
          [-67.031021, 10.458102]
        ]]
      }
    }, {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "type": "Polygon",
        "coordinates": [[
          [-66.919784, 10.397325],
          [-66.919784, 10.513467],
          [-66.805114, 10.513467],
          [-66.805114, 10.397325],
          [-66.919784, 10.397325]
        ]]
      }
    }
  ]
}

const polygon: GeoJSON.Feature<GeoJSON.Polygon> = {
  "type": "Feature",
  "properties": {},
  "geometry": {
    "type": "Polygon",
    "coordinates": [[
      [105.818939,21.004714],
      [105.818939,21.061754],
      [105.890007,21.061754],
      [105.890007,21.004714],
      [105.818939,21.004714]
    ]]
  }
}

const polygon1 = polygon

const polygon2: GeoJSON.Feature<GeoJSON.Polygon> = {
  "type": "Feature",
  "properties": {},
  "geometry": {
    "type": "Polygon",
    "coordinates": [[
      [-122.520217, 45.535693],
      [-122.64038, 45.553967],
      [-122.720031, 45.526554],
      [-122.669906, 45.507309],
      [-122.723464, 45.446643],
      [-122.532577, 45.408574],
      [-122.487258, 45.477466],
      [-122.520217, 45.535693]
    ]]
  }
}

const multiPolygon: GeoJSON.Feature<GeoJSON.MultiPolygon> = {
  "type": "Feature",
  "properties": {},
  "geometry": {
    "type": "MultiPolygon",
    "coordinates": [
      [[[102.0, 2.0], [103.0, 2.0], [103.0, 3.0], [102.0, 3.0], [102.0, 2.0]]],
      [[[100.0, 0.0], [101.0, 0.0], [101.0, 1.0], [100.0, 1.0], [100.0, 0.0]],
       [[100.2, 0.2], [100.8, 0.2], [100.8, 0.8], [100.2, 0.8], [100.2, 0.2]]]
      ]
  }
}

const points: GeoJSON.FeatureCollection<GeoJSON.Point> = {
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "type": "Point",
        "coordinates": [-97.522259, 35.4691]
      }
    }, {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "type": "Point",
        "coordinates": [-97.502754, 35.463455]
      }
    }
  ]
}

const triangle: GeoJSON.Feature<GeoJSON.Polygon> = {
  "type": "Feature",
  "properties": {},
  "geometry": {
    "type": "Polygon",
    "coordinates": [[
      [-75.1221, 39.57],
      [-75.58, 39.18],
      [-75.97, 39.86],
      [-75.1221, 39.57]
    ]]
  }
}

///////////////////////////////////////////
// Tests Measurement
///////////////////////////////////////////

// -- Test along --
turf.along(line, distance, units)
turf.along(line, distance)

// -- Test area --
turf.area(polygons)

// -- Test bboxPolygon --
turf.bboxPolygon(bbox)

// -- Test bearing --
turf.bearing(point1, point2)

// -- Test center
turf.center(points)

// -- Test centroid --
turf.centroid(polygon1)

// -- Test destination --
turf.destination(point1, distance, bearing, units)

// -- Test distance --
turf.distance(point1, point2, units)

// -- Test envelope --
turf.envelope(polygons)

// -- Test lineDistance
turf.lineDistance(line, units)

// -- Test midpoint --
turf.midpoint(point1, point2)

// -- Test pointOnSurface --
turf.pointOnSurface(polygon1)

// -- Test square --
turf.square(bbox)

///////////////////////////////////////////
// Tests Transformation
///////////////////////////////////////////

// -- Test bezier --
turf.bezier(line)

// -- Test buffer --
turf.buffer(point1, distance, units)

// -- Test concave --
turf.concave(points, maxEdge, units)

// -- Test convex --
turf.convex(points)

// -- Test difference --
turf.difference(polygon1, polygon2)

// -- Test intersect --
turf.intersect(polygon1, polygon2)

// -- Test simplify --

turf.simplify(polygon1, tolerance, highQuality)

// -- Test union --
turf.union(polygon1, polygon2)

///////////////////////////////////////////
// Tests Misc
///////////////////////////////////////////

// -- Test combine --
turf.combine(points)

// -- Test explode --
turf.explode(polygon1)

// -- Test flip --
turf.flip(point1)

// -- Test kinks --
turf.kinks(polygon1)

// -- Test lineSlice --
turf.lineSlice(point1, point2, line)

// -- Test pointOnLine --
turf.pointOnLine(line, point1)

///////////////////////////////////////////
// Tests Helper
///////////////////////////////////////////

// -- Test featurecollection --
turf.featureCollection([point1, point2])
turf.featureCollection([point, polygon])
turf.featureCollection([polygon1, polygon2])
turf.featureCollection([line, polygon])
turf.featureCollection([line, point])

// -- Test feature --
turf.feature(point)
turf.feature(polygon)
turf.feature(line)

// -- Test lineString --
turf.lineString(line.geometry.coordinates)
turf.lineString(line.geometry.coordinates, properties)

// -- Test multiLineString --
turf.multiLineString(multiLine.geometry.coordinates)

// -- Test point --
turf.point(point.geometry.coordinates)
turf.point(point.geometry.coordinates, properties)

// -- Test multiPoint --
turf.multiPoint(multiPoint.geometry.coordinates)

// -- Test polygon --
turf.polygon(polygon.geometry.coordinates, properties)

// -- Test multiPolygon --
turf.multiPolygon(multiPolygon.geometry.coordinates, properties)

// -- Test geometryCollection --
turf.geometryCollection([point.geometry, line.geometry]);

///////////////////////////////////////////
// Tests Data
///////////////////////////////////////////

// -- Test random --
turf.random('points', count)
turf.random('points', count, { bbox })
turf.random('polygons', count, {
  bbox,
  num_vertices,
  max_radial_length
})

// -- Test sample --
turf.random('points', count)
turf.sample(points, num)

///////////////////////////////////////////
// Tests Interpolation
///////////////////////////////////////////

// -- Test hexGrid --
turf.hexGrid(bbox, cellWidth)
turf.hexGrid(bbox, cellWidth, 'miles')

// -- Test pointGrid --
turf.pointGrid(bbox, cellWidth)
turf.pointGrid(bbox, cellWidth, 'kilometres')

// -- Test squareGrid --
turf.squareGrid(bbox, cellWidth)
turf.squareGrid(bbox, cellWidth, 'inches')

// -- Test triangleGrid --
turf.triangleGrid(bbox, cellWidth)
turf.triangleGrid(bbox, cellWidth, units)

///////////////////////////////////////////
// Tests Interpolation
///////////////////////////////////////////

// -- Test isolines --
turf.isolines(points, 'z', resolution, breaks)

// -- Test planepoint --
turf.planepoint(point1, triangle)

// -- Test tin --
turf.tin(points, 'z')

///////////////////////////////////////////
// Tests Joins
///////////////////////////////////////////

// -- Test inside --
turf.inside(point, polygon)

// -- Test tag --
turf.tag(points, polygons, 'fill', 'marker-color')

// -- Test within --
turf.within(points, polygons)

///////////////////////////////////////////
// Tests Classification
///////////////////////////////////////////

// -- Test nearest --
turf.nearest(point1, points)

///////////////////////////////////////////
// Tests Aggregation
///////////////////////////////////////////
turf.collect(polygons, points, 'population', 'values')