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

let prng = seedrandom('added entropy.', { entropy: true }); // $ExpectType PRNG
prng = seedrandom('hello.', { global: true }); // $ExpectType PRNG
prng = seedrandom('hello.'); // $ExpectType PRNG
prng = seedrandom(); // $ExpectType PRNG

prng = seedrandom.alea('hello.'); // $ExpectType PRNG
prng = seedrandom.tychei('hello.'); // $ExpectType PRNG
prng = seedrandom.xor128('hello.'); // $ExpectType PRNG
prng = seedrandom.xor4096('hello.'); // $ExpectType PRNG
prng = seedrandom.xorshift7('hello.'); // $ExpectType PRNG
prng = seedrandom.xorwow('hello.'); // $ExpectType PRNG

prng = alea('hello.'); // $ExpectType PRNG
prng = tychei('hello.'); // $ExpectType PRNG
prng = xor128('hello.'); // $ExpectType PRNG
prng = xor4096('hello.'); // $ExpectType PRNG
prng = xorshift7('hello.'); // $ExpectType PRNG
prng = xorwow('hello.'); // $ExpectType PRNG

prng.double(); // $ExpectType number
prng.int32(); // $ExpectType number
prng.quick(); // $ExpectType number
prng.state(); // $ExpectType object
prng(); // $ExpectType number

new Alea('hello.'); // $ExpectType PRNG
new Tychei('hello.'); // $ExpectType PRNG
new Xor128('hello.'); // $ExpectType PRNG
new Xor4096('hello.'); // $ExpectType PRNG
new XorShift7('hello.'); // $ExpectType PRNG
new XorWow('hello.'); // $ExpectType PRNG
