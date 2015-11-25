/// <reference path="turf.d.ts"/>

//////////////////////////////////////////////////////////////////////////
// Tests data initialisation
//////////////////////////////////////////////////////////////////////////

var point1 = {
  "type": "Feature",
  "properties": {},
  "geometry": {
    "type": "Point",
    "coordinates": [-75.343, 39.984]
  }
};

var point2 = {
  "type": "Feature",
  "properties": {},
  "geometry": {
    "type": "Point",
    "coordinates": [-75.534, 39.123]
    }
};

var line = {
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
};

var polygons = {
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
};

var polygon = {
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
};

var features = {
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
    }, {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "type": "Point",
        "coordinates": [-97.508269, 35.463245]
      }
    }, {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "type": "Point",
        "coordinates": [-97.516809, 35.465779]
      }
    }, {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "type": "Point",
        "coordinates": [-97.515372, 35.467072]
      }
    }, {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "type": "Point",
        "coordinates": [-97.509363, 35.463053]
      }
    }, {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "type": "Point",
        "coordinates": [-97.511123, 35.466601]
      }
    }, {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "type": "Point",
        "coordinates": [-97.518547, 35.469327]
      }
    }, {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "type": "Point",
        "coordinates": [-97.519706, 35.469659]
      }
    }, {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "type": "Point",
        "coordinates": [-97.517839, 35.466998]
      }
    }, {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "type": "Point",
        "coordinates": [-97.508678, 35.464942]
      }
    }, {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "type": "Point",
        "coordinates": [-97.514914, 35.463453]
      }
    }
  ]
};

//////////////////////////////////////////////////////////////////////////
// Tests Aggregation
//////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////
// Tests Measurement
//////////////////////////////////////////////////////////////////////////

// -- Test along --
var along = turf.along(line, 1, 'miles');

// -- Test area --
var area = turf.area(polygons);

// -- Test bboxPolygon --
var bbox = [0, 0, 10, 10];
var poly = turf.bboxPolygon(bbox);

// -- Test bearing --
var bearing = turf.bearing(point1, point2);

// -- Test center
var centerPt = turf.center(features);

// -- Test centroid --
var centroidPt = turf.centroid(poly);

// -- Test destination --
var distance = 50;
var bearing = 90;
var units = 'miles';
var destination = turf.destination(point1, distance, bearing, units);

// -- Test distance --
var units = "miles";
var distance = turf.distance(point1, point2, units);

// -- Test envelope --
var enveloped = turf.envelope(polygons);

// -- Test extent --
var bbox = turf.extent(polygons);

// -- Test lineDistance
var length = turf.lineDistance(line, 'miles');

// -- Test midpoint --
var midpointed = turf.midpoint(point1, point2);

// -- Test pointOnSurface --
var pointOnPolygon = turf.pointOnSurface(polygon);

// -- Test size --
var resized = turf.size(bbox, 2);

// -- Test square --
var squared = turf.square(bbox);

//////////////////////////////////////////////////////////////////////////
// Tests Transformation
//////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////
// Tests Misc
//////////////////////////////////////////////////////////////////////////

// -- Test pointOnLine --
var snapped = turf.pointOnLine(line, point1);

//////////////////////////////////////////////////////////////////////////
// Tests Helper
//////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////
// Tests Data
//////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////
// Tests Interpolation
//////////////////////////////////////////////////////////////////////////;

//////////////////////////////////////////////////////////////////////////
// Tests Joins
//////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////
// Tests Classification
//////////////////////////////////////////////////////////////////////////
