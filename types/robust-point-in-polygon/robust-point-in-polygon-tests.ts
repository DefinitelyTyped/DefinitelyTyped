import robustPointInPolygon = require('robust-point-in-polygon');

type Point = [number, number];

const polygon: Point[] = [ [ 1, 1 ], [ 1, 2 ], [ 2, 2 ], [ 2, 1 ] ];
const point: Point = [ 1.5, 1.5 ];

robustPointInPolygon(polygon, point);
