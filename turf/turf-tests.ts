/// <reference path="turf.d.ts"/>
import * as turf from '@turf/turf'
import {
  collect,
  random,
  sample,
  hexGrid,
  pointGrid,
  squareGrid,
  triangleGrid,
  featureCollection
} from '@turf/turf'

///////////////////////////////////////////
// Tests data initialisation
///////////////////////////////////////////
const bbox = [0, 0, 10, 10]
const properties = {pop: 3000}
const point1: GeoJSON.Feature<GeoJSON.Point> = {
  "type": "Feature",
  "properties": {},
  "geometry": {
    "type": "Point",
    "coordinates": [-75.343, 39.984]
  }
}

const point2: GeoJSON.Feature<GeoJSON.Point> = {
  "type": "Feature",
  "properties": {},
  "geometry": {
    "type": "Point",
    "coordinates": [-75.401, 39.884]
  }
}
const point = point1

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
        "coordinates": [-63.601226, 44.642643]
      }
    }, {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "type": "Point",
        "coordinates": [-63.591442, 44.651436]
      }
    }, {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "type": "Point",
        "coordinates": [-63.580799, 44.648749]
      }
    }, {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "type": "Point",
        "coordinates": [-63.573589, 44.641788]
      }
    }, {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "type": "Point",
        "coordinates": [-63.587665, 44.64533]
      }
    }, {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "type": "Point",
        "coordinates": [-63.595218, 44.64765]
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
turf.along(line, 50)
turf.along(line, 50, 'miles')

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
turf.destination(point1, 50, 90)
turf.destination(point1, 50, 90, 'miles')

// -- Test distance --
turf.distance(point1, point2)
turf.distance(point1, point2, 'miles')

// -- Test envelope --
turf.envelope(polygons)

// -- Test lineDistance
turf.lineDistance(line)
turf.lineDistance(line, 'miles')

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
turf.buffer(point1, 50)
turf.buffer(point1, 50, 'miles')

// -- Test concave --
turf.concave(points, 1, 'miles')

// -- Test convex --
turf.convex(points)

// -- Test difference --
turf.difference(polygon1, polygon2)

// -- Test intersect --
turf.intersect(polygon1, polygon2)

// -- Test simplify --

turf.simplify(polygon1, 0.01, false)

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
turf.random('points', 100)
turf.random('points', 100, { bbox })
turf.random('polygons', 100, {
  bbox,
  num_vertices: 10,
  max_radial_length: 10
})

// -- Test sample --
turf.random('points', 100)
turf.sample(points, 10)

///////////////////////////////////////////
// Tests Interpolation
///////////////////////////////////////////

// -- Test hexGrid --
turf.hexGrid(bbox, 50)
turf.hexGrid(bbox, 50, 'miles')

// -- Test pointGrid --
turf.pointGrid(bbox, 50)
turf.pointGrid(bbox, 50, 'miles')

// -- Test squareGrid --
turf.squareGrid(bbox, 50)
turf.squareGrid(bbox, 50, 'miles')

// -- Test triangleGrid --
turf.triangleGrid(bbox, 50)
turf.triangleGrid(bbox, 50, 'miles')

///////////////////////////////////////////
// Tests Interpolation
///////////////////////////////////////////

// -- Test isolines --
turf.isolines(points, 'z', 15, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10])

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
turf.tag(points, polygons, 'pop', 'population')

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
