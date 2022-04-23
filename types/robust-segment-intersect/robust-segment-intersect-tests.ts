import crosses = require('robust-segment-intersect');
const a0 = [-1, 0]
const a1 = [ 1, 0]
const b0 = [ 0,-1]
const b1 = [ 0, 1]

// $ExpectType boolean
crosses(a0, a1, b0, b1);
