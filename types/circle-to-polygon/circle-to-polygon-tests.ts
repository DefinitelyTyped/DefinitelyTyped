import circleToPolygon = require("circle-to-polygon");

circleToPolygon([0, 0], 10); // $ExpectType Polygon
circleToPolygon([0, 0], 10, 10); // $ExpectType Polygon
