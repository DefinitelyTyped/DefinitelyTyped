import circleToPolygon = require("circle-to-polygon");

circleToPolygon([0, 0], 10); // $ExpectType Polygon
circleToPolygon([0, 0], 10, 10); // $ExpectType Polygon
circleToPolygon([0, 0], 1000000, { numberOfEdges: 12, earthRadius: 6371008.8 }); // $ExpectType Polygon
circleToPolygon([0, 0], 1000000, { earthRadius: 6371008.8 }); // $ExpectType Polygon
circleToPolygon([0, 0], 1000000, { bearing: 6371008.8 }); // $ExpectType Polygon
circleToPolygon([0, 0], 1000000, { bearing: 6371008.8, numberOfEdges: 6 }); // $ExpectType Polygon
