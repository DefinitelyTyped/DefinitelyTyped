import seedrandom = require('seedrandom');
import {
    alea,
    Alea,
    tychei,
    Tychei,
    xor128,
    Xor128,
    xor4096,
    Xor4096,
    xorshift7,
    XorShift7,
    xorwow,
    XorWow,
} from 'seedrandom';

let prng = seedrandom('added entropy.', { entropy: true }); // $ExpectType prng
prng = seedrandom('hello.', { global: true }); // $ExpectType prng
prng = seedrandom('hello.'); // $ExpectType prng
prng = seedrandom(); // $ExpectType prng

prng = seedrandom.alea('hello.'); // $ExpectType prng
prng = seedrandom.tychei('hello.'); // $ExpectType prng
prng = seedrandom.xor128('hello.'); // $ExpectType prng
prng = seedrandom.xor4096('hello.'); // $ExpectType prng
prng = seedrandom.xorshift7('hello.'); // $ExpectType prng
prng = seedrandom.xorwow('hello.'); // $ExpectType prng

prng = alea('hello.'); // $ExpectType prng
prng = tychei('hello.'); // $ExpectType prng
prng = xor128('hello.'); // $ExpectType prng
prng = xor4096('hello.'); // $ExpectType prng
prng = xorshift7('hello.'); // $ExpectType prng
prng = xorwow('hello.'); // $ExpectType prng

prng.double(); // $ExpectType number
prng.int32(); // $ExpectType number
prng.quick(); // $ExpectType number
prng.state(); // $ExpectType object
prng(); // $ExpectType number

new Alea('hello.'); // $ExpectType prng
new Tychei('hello.'); // $ExpectType prng
new Xor128('hello.'); // $ExpectType prng
new Xor4096('hello.'); // $ExpectType prng
new XorShift7('hello.'); // $ExpectType prng
new XorWow('hello.'); // $ExpectType prng
