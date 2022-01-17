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

let prng = seedrandom('added entropy.', { entropy: true }); // $ExpectType PseudorandomNumberGenerator
prng = seedrandom('hello.', { global: true }); // $ExpectType PseudorandomNumberGenerator
prng = seedrandom('hello.'); // $ExpectType PseudorandomNumberGenerator
prng = seedrandom(); // $ExpectType PseudorandomNumberGenerator

prng = seedrandom.alea('hello.'); // $ExpectType PseudorandomNumberGenerator
prng = seedrandom.tychei('hello.'); // $ExpectType PseudorandomNumberGenerator
prng = seedrandom.xor128('hello.'); // $ExpectType PseudorandomNumberGenerator
prng = seedrandom.xor4096('hello.'); // $ExpectType PseudorandomNumberGenerator
prng = seedrandom.xorshift7('hello.'); // $ExpectType PseudorandomNumberGenerator
prng = seedrandom.xorwow('hello.'); // $ExpectType PseudorandomNumberGenerator

prng = alea('hello.'); // $ExpectType PseudorandomNumberGenerator
prng = tychei('hello.'); // $ExpectType PseudorandomNumberGenerator
prng = xor128('hello.'); // $ExpectType PseudorandomNumberGenerator
prng = xor4096('hello.'); // $ExpectType PseudorandomNumberGenerator
prng = xorshift7('hello.'); // $ExpectType PseudorandomNumberGenerator
prng = xorwow('hello.'); // $ExpectType PseudorandomNumberGenerator

prng.double(); // $ExpectType number
prng.int32(); // $ExpectType number
prng.quick(); // $ExpectType number
prng.state(); // $ExpectType object
prng(); // $ExpectType number

new Alea('hello.'); // $ExpectType PseudorandomNumberGenerator
new Tychei('hello.'); // $ExpectType PseudorandomNumberGenerator
new Xor128('hello.'); // $ExpectType PseudorandomNumberGenerator
new Xor4096('hello.'); // $ExpectType PseudorandomNumberGenerator
new XorShift7('hello.'); // $ExpectType PseudorandomNumberGenerator
new XorWow('hello.'); // $ExpectType PseudorandomNumberGenerator
