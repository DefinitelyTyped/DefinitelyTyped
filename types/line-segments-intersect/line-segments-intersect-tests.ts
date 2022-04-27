import intersects = require("line-segments-intersect");

// check line segments intersect

// segments intersect
intersects([[0, 0], [10, 10]], [[10, 0], [0, 10]]); // $ExpectType boolean

// segments do not intersect
intersects([[0, 0], [10, 10]], [[30, 0], [0, 30]]); // $ExpectType boolean

// segment end touches another
intersects([[0, 0], [10, 10]], [[20, 0], [0, 20]]); // $ExpectType boolean

// segments are parallel
intersects([[0, 0], [10, 10]], [[10, 0], [20, 10]]); // $ExpectType boolean

// segments overlaps
intersects([[0, 0], [10, 10]], [[5, 5], [20, 20]]); // $ExpectType boolean

// segments are coincident but do not overlap
intersects([[0, 0], [10, 10]], [[20, 20], [30, 30]]); // $ExpectType boolean

// intersection lies only on one segment
intersects([[-50, 0], [0, -50]], [[0, 0], [5, 0]]); // $ExpectType boolean
