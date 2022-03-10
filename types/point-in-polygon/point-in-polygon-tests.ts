import inside = require("point-in-polygon");

const polygonNested = [ [ 1, 1 ], [ 1, 2 ], [ 2, 2 ], [ 2, 1 ] ];
const inPolygonNested: boolean = inside([ 1.5, 1.5 ], polygonNested);
inside([1.5, 1.5], polygonNested, 3, 4); // $ExpectType boolean

const polygonFlat = [ 1, 1,  1, 2,  2, 2,  2, 1 ];
const inPolygonFlat: boolean = inside([ 1.5, 1.5 ], polygonFlat);
inside([1.5, 1.5], polygonFlat, 3, 4); // $ExpectType boolean
