import bSpline = require('b-spline');
bSpline<[number, number]>(0, 1, [[0, 0], [1, 0], [1, 1]]); // $ExpectType [number, number]
