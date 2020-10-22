import bloem = require('bloem');

const base = new bloem.Bloem(1, 2, Buffer.from('1', 'hex'));
const safe = new bloem.SafeBloem(1, 2, Buffer.from('2', 'hex'));
const scaling = new bloem.ScalingBloem(1,
  {ratio: 1, initial_capacity: 2, scaling: 3}
);

// options are optional
const scaling2 = new bloem.ScalingBloem(1);

// $ExpectType number
bloem.calculateSize(1, 2);
// $ExpectType number
bloem.calculateSlices(1, 2);
