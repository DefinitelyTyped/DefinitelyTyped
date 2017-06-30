///////////////////////////////////////////
// Tests data initialisation
///////////////////////////////////////////

var point1: GeoJSON.Feature<GeoJSON.Point> = {
  "type": "Feature",
  "properties": {},
  "geometry": {
    "type": "Point",
    "coordinates": [-75.343, 39.984]
  }
};

var point2: GeoJSON.Feature<GeoJSON.Point> = {
  "type": "Feature",
  "properties": {},
  "geometry": {
    "type": "Point",
    "coordinates": [-75.534, 39.123]
    }
};

var line: GeoJSON.Feature<GeoJSON.LineString> = {
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

var polygons: GeoJSON.FeatureCollection<GeoJSON.Polygon> = {
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

var polygon1: GeoJSON.Feature<GeoJSON.Polygon> = {
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

var polygon2: GeoJSON.Feature<GeoJSON.Polygon> = {
  "type": "Feature",
  "properties": {
    "fill": "#00f"
  },
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

var features: GeoJSON.FeatureCollection<GeoJSON.Point> = {
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

var triangle: GeoJSON.Feature<GeoJSON.Polygon> = {
  "type": "Feature",
  "properties": {
    "a": 11,
    "b": 122,
    "c": 44
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [[
      [-75.1221, 39.57],
      [-75.58, 39.18],
      [-75.97, 39.86],
      [-75.1221, 39.57]
    ]]
  }
};

var aggregations = [
  {
    aggregation: 'sum',
    inField: 'population',
    outField: 'pop_sum'
  },
  {
    aggregation: 'average',
    inField: 'population',
    outField: 'pop_avg'
  },
  {
    aggregation: 'median',
    inField: 'population',
    outField: 'pop_median'
  },
  {
    aggregation: 'min',
    inField: 'population',
    outField: 'pop_min'
  },
  {
    aggregation: 'max',
    inField: 'population',
    outField: 'pop_max'
  },
  {
    aggregation: 'deviation',
    inField: 'population',
    outField: 'pop_deviation'
  },
  {
    aggregation: 'variance',
    inField: 'population',
    outField: 'pop_variance'
  },
  {
    aggregation: 'count',
    inField: '',
    outField: 'point_count'
  }
];

///////////////////////////////////////////
// Tests Aggregation
///////////////////////////////////////////

// -- Test aggregate --
var aggregated = turf.aggregate(polygons, points, aggregations);

// -- Test average --
var averaged = turf.average(polygons, points, 'population', 'pop_avg');

// -- Test count --
var counted = turf.count(polygons, points, 'pt_count');

// -- Test deviation --
var deviated = turf.deviation(polygons, points, 'population', 'pop_deviation');

// -- Test max --
var aggregated = turf.max(polygons, points, 'population', 'max');

// -- Test median --
var medians = turf.median(polygons, points, 'population', 'median');

// -- Test min --
var minimums = turf.min(polygons, points, 'population', 'min');

// -- Test sum --
var summed = turf.sum(polygons, points, 'population', 'sum');

// -- Test variance --
var varianced = turf.variance(polygons, points, 'population', 'variance');

///////////////////////////////////////////
// Tests Measurement
///////////////////////////////////////////

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
var centroidPt = turf.centroid(polygon1);

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
var pointOnPolygon = turf.pointOnSurface(polygon1);

// -- Test size --
var resized = turf.size(bbox, 2);

// -- Test square --
var squared = turf.square(bbox);

///////////////////////////////////////////
// Tests Transformation
///////////////////////////////////////////

// -- Test bezier --
var curved = turf.bezier(line);

// -- Test buffer --
var buffered = turf.buffer(point1, 500, units);

// -- Test concave --
var hull = turf.concave(features, 1, 'miles');

// -- Test convex --
var hull = turf.convex(features);

// -- Test difference --
var differenced = turf.difference(polygon1, polygon2);

// -- Test intersect --
var intersection = turf.intersect(polygon1, polygon2);

// -- Test merge --
var merged = turf.merge(polygons);

// -- Test simplify --
var tolerance = 0.01;
var simplified = turf.simplify(polygon1, tolerance, false);

// -- Test union --
var union = turf.union(polygon1, polygon2);

///////////////////////////////////////////
// Tests Misc
///////////////////////////////////////////

// -- Test combine --
var combined = turf.combine(features);

// -- Test explode --
var points = turf.explode(polygon1);

// -- Test flip --
var flipedPoint = turf.flip(point1);

// -- Test kinks --
var kinks = turf.kinks(polygon1);

// -- Test lineSlice --
var sliced = turf.lineSlice(point1, point2, line);

// -- Test pointOnLine --
var snapped = turf.pointOnLine(line, point1);

///////////////////////////////////////////
// Tests Helper
///////////////////////////////////////////

// -- Test featurecollection --
var fc = turf.featurecollection([point1, point2]);

// -- Test linestring --
var linestring1 = turf.linestring([
	[-21.964416, 64.148203],
	[-21.956176, 64.141316],
	[-21.93901, 64.135924],
	[-21.927337, 64.136673]
]);
var linestring2 = turf.linestring([
	[-21.929054, 64.127985],
	[-21.912918, 64.134726],
	[-21.916007, 64.141016],
	[-21.930084, 64.14446]
], {name: 'line 1', distance: 145});

// -- Test point --
var pt1 = turf.point([-75.343, 39.984]);
var pt2 = turf.point([-75.343, 39.984], {name: 'point 1', distance: 145});

// -- Test polygon --
var polygon = turf.polygon([[
 [-2.275543, 53.464547],
 [-2.275543, 53.489271],
 [-2.215118, 53.489271],
 [-2.215118, 53.464547],
 [-2.275543, 53.464547]
]], { name: 'poly1', population: 400});

///////////////////////////////////////////
// Tests Data
///////////////////////////////////////////

// -- Test filter --
var key = "species";
var value = "oak";
var filtered = turf.filter(features, key, value);

// -- Test random --
var randomPoints = turf.random('points', 100, {
  bbox: [-70, 40, -60, 60]
});

var randomPoints = turf.random('points', 100, {
  bbox: [-70, 40, -60, 60],
  num_vertices: 2,
  max_radial_length: 10
});

// -- Test remove --
var filtered = turf.remove(points, 'marker-color', '#00f');

// -- Test sample --
var randomPoints = turf.random('points', 1000);
var sample = turf.sample(points, 10);

///////////////////////////////////////////
// Tests Interpolation
///////////////////////////////////////////

// -- Test hexGrid --
var cellWidth = 50;
var hexgrid = turf.hexGrid(bbox, cellWidth, units);

// -- Test isolines --
var breaks = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var isolined = turf.isolines(points, 'z', 15, breaks);

// -- Test planepoint --
var zValue = turf.planepoint(point1, triangle);

// -- Test pointGrid --
var extent = [-70.823364, -33.553984, -70.473175, -33.302986];
var cellWidth = 3;
var grid = turf.pointGrid(extent, cellWidth, units);

// -- Test squareGrid --
var squareGrid = turf.squareGrid(extent, cellWidth, units);

// -- Test tin --
var tin = turf.tin(points, 'z');

// -- Test triangleGrid --
var triangleGrid = turf.triangleGrid(extent, cellWidth, units);

///////////////////////////////////////////
// Tests Joins
///////////////////////////////////////////

// -- Test inside --
var isInside1 = turf.inside(point1, polygon);

// -- Test tag --
var tagged = turf.tag(points, triangleGrid, 'fill', 'marker-color');

// -- Test within --
var ptsWithin = turf.within(points, polygons);

///////////////////////////////////////////
// Tests Classification
///////////////////////////////////////////

// -- Test jenks --
var breaks = turf.jenks(points, 'population', 3);

// -- Test nearest --
var nearest = turf.nearest(point1, points);

// -- Test quantile --
var breaks = turf.quantile(points, 'population', [25, 50, 75, 99]);

// -- Test reclass --
var translations = [
  [0, 200, "small"],
  [200, 400, "medium"],
  [400, 600, "large"]
];
var reclassed = turf.reclass(points, 'population', 'size', translations);
