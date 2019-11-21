import polygonsIntersect = require('polygons-intersect');

const poly1 = [{x: 10, y: 10}, {x: 10, y: 30}, {x: 30, y: 30}, {x: 30, y: 10}];
const poly2 = [{x: 20, y: 20}, {x: 20, y: 40}, {x: 40, y: 40}, {x: 40, y: 20}];
polygonsIntersect(poly1, poly2);
