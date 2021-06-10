import MersenneTwister = require('mersennetwister');

const withNoSeed = new MersenneTwister();
const withSeed = new MersenneTwister(1234);
const withArray = new MersenneTwister([1, 2, 3, 4]);

withSeed.seed(4321);
withArray.seedArray([5, 6, 7, 8]);

const ms = withSeed;
let result: number;

result = ms.int();
result = ms.int31();
result = ms.rnd();
result = ms.random();
result = ms.rndHiRes();
result = ms.real();
result = ms.realx();
