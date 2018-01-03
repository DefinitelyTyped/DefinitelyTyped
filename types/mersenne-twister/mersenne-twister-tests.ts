import MersenneTwister from 'mersenne-twister';

const msWithTime = new MersenneTwister();
const msWithNumber = new MersenneTwister(1);
const msWithNumbers = new MersenneTwister([1, 2, 3]);
const msWithInitSeed = new MersenneTwister();
msWithInitSeed.init_seed(1);

const ms = msWithTime;
let result: number;

result = ms.random();
console.log(result);
result = ms.random_excl();
console.log(result);
result = ms.random_incl();
console.log(result);
result = ms.random_int();
console.log(result);
result = ms.random_int31();
console.log(result);
result = ms.random_long();
console.log(result);
