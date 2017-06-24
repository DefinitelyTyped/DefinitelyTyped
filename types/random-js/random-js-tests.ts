// Examples taken from the documentation at https://github.com/ckknight/random-js
// create a Mersenne Twister-19937 that is auto-seeded based on time and other random values
import Engine = Random.Engine;

var engine: Engine = Random.engines.mt19937().autoSeed();
// create a distribution that will consistently produce integers within inclusive range [0, 99].
var distribution: Function = Random.integer(0, 99);
// generate a number that is guaranteed to be within [0, 99] without any particular bias.
function generateNaturalLessThan100(): number {
    return distribution(engine);
}

// using essentially Math.random()
var engine2: Engine = Random.engines.nativeMath;
// lower-case Hex string distribution
var distribution2: Function = Random.hex(false);
// generate a 40-character hex string
function generateSHA1(): string {
    return distribution(40);
}

var r: Random = new Random(Random.engines.mt19937().seedWithArray([0x12345678, 0x90abcdef]));
var value = r.integer(0, 99);

r = new Random(); // same as new Random(Random.engines.nativeMath)
