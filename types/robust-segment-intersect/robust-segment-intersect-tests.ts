import crosses = require('robust-segment-intersect');

const a0 = [-1, 0] as const;
const a1 = [1, 0] as const;
const b0 = [0, -1] as const;
const b1 = [0, 1] as const;

// $ExpectType boolean
crosses(a0, a1, b0, b1);
