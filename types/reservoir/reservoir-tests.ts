import Reservoir = require('reservoir');

// $ExpectType ReservoirArray<number>
const x = Reservoir<number>(1);

// $ExpectType number
x.pushSome(10, 20, 30, 40);

// $ExpectType number
x[0];

// $ExpectType number
x.length;
