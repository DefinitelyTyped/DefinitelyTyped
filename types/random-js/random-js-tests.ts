import Engine = Random.Engine;
import MersenneTwisterEngine = Random.MT19937;

class CustomType {}
const customTypeArray = [new CustomType(), new CustomType(), new CustomType()];

// APIs taken from the documentation at https://github.com/ckknight/random-js

// Basic engine types (https://github.com/ckknight/random-js#engines)
let engine: Engine = Random.engines.nativeMath;
engine = Random.engines.browserCrypto;

// All engines can be used to generate numbers
let generated: number = engine();

// Mersenne Twister API (https://github.com/ckknight/random-js#mersenne-twister-api)
let mersenneTwister: MersenneTwisterEngine = Random.engines.mt19937();
generated = mersenneTwister();

mersenneTwister = mersenneTwister.seed(0x9a0b1d43);
mersenneTwister = mersenneTwister.seedWithArray([0x12345678, 0x90abcdef]);
mersenneTwister = mersenneTwister.autoSeed();
mersenneTwister = mersenneTwister.discard(10);
const useCount: number = mersenneTwister.getUseCount();

// Static "Distributions" API (https://github.com/ckknight/random-js#distributions)
let numeric: number = Random.integer(0, 99)(engine);
numeric = Random.real(0, 10)(engine);
numeric = Random.real(0, 10, true)(engine);

let bool: boolean = Random.bool()(engine);
bool = Random.bool(20)(engine);
bool = Random.bool(1, 2)(engine);

let chosen: CustomType = Random.pick(engine, customTypeArray);
chosen = Random.pick(engine, customTypeArray, 0);
chosen = Random.pick(engine, customTypeArray, 0, 2);
chosen = Random.picker(customTypeArray);
chosen = Random.picker(customTypeArray, 0);
chosen = Random.picker(customTypeArray, 0, 2);

let shuffled: CustomType[] = Random.shuffle(engine, customTypeArray);
let sampled: CustomType[] = Random.sample(engine, customTypeArray, 2);

numeric = Random.die(5)(engine);
let dieValues: number[] = Random.dice(5, 2)(engine);

let uuid: string = Random.uuid4(engine);

let str: string = Random.string()(engine);
str = Random.string()(engine);
str = Random.string()(engine, 10);
str = Random.string('abc')(engine);
str = Random.string('abc')(engine, 2);

let hex: string = Random.hex()(engine);
hex = Random.hex()(engine, 5);
hex = Random.hex(false)(engine);
hex = Random.hex(false)(engine, 5);
hex = Random.hex(true)(engine);
hex = Random.hex(true)(engine, 5);

let date: Date = Random.date(new Date(), new Date())(engine);

// "Alternate" API (https://github.com/ckknight/random-js#alternate-api)

let random: Random = new Random(engine);
random = new Random();
random = Random();

numeric = random.integer(0, 99);
numeric = random.real(0, 10);
numeric = random.real(0, 10, true);

bool = random.bool();
bool = random.bool(50);
bool = random.bool(1, 2);

chosen = random.pick(customTypeArray);
chosen = random.pick(customTypeArray, 0);
chosen = random.pick(customTypeArray, 0, 2);

shuffled = random.shuffle(customTypeArray);
sampled = random.sample(customTypeArray, 2);

numeric = random.die(5);
dieValues = random.dice(5, 2);

uuid = random.uuid4(engine);
uuid = random.uuid4();

str = random.string();
str = random.string(10);
str = random.string(10, 'abc');

hex = random.hex();
hex = random.hex(5);
hex = random.hex(5, false);
hex = random.hex(undefined, false);
hex = random.hex(5, true);
hex = random.hex(undefined, true);

date = random.date(new Date(), new Date());

// Examples taken from the documentation at https://github.com/ckknight/random-js
// create a Mersenne Twister-19937 that is auto-seeded based on time and other random values

engine = Random.engines.mt19937().autoSeed();
// create a distribution that will consistently produce integers within inclusive range [0, 99].
const distribution: ((engine: Engine) => number) = Random.integer(0, 99);
// generate a number that is guaranteed to be within [0, 99] without any particular bias.
function generateNaturalLessThan100(): number {
    return distribution(engine);
}

// NOTE: The documentation for this example is incorrect in the library documentation
// using essentially Math.random()
const engine2: Engine = Random.engines.nativeMath;
// lower-case Hex string distribution
const distribution2: ((engine: Engine, length: number) => string) = Random.hex(false);
// generate a 40-character hex string
function generateSHA1(): string {
    return distribution2(engine2, 40);
}

let r: Random = new Random(Random.engines.mt19937().seedWithArray([0x12345678, 0x90abcdef]));
const value = r.integer(0, 99);

r = new Random(); // same as new Random(Random.engines.nativeMath)
