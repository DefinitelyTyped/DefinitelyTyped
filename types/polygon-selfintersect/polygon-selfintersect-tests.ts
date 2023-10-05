import polygonSelfIntersect = require("polygon-selfintersect");

const poly = [[1, 1], [2, 1], [2, 2], [1, 2], [1, 1]];
polygonSelfIntersect.findSelfIntersections(poly); // $ExpectType boolean
polygonSelfIntersect.findSelfIntersections(poly, true); // $ExpectType boolean
polygonSelfIntersect.getSelfIntersectLines(); // $ExpectType number[][]
