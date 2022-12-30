import seedrandom = require('seedrandom');
import { alea, tychei, xor128, xor4096, xorshift7, xorwow } from 'seedrandom';

const prng = seedrandom('added entropy.', { entropy: true }); // $ExpectType PRNG
prng.double(); // $ExpectType number
prng.int32(); // $ExpectType number
prng.quick(); // $ExpectType number
// @ts-expect-error seedrandom only provides internal state when explicitly requested
prng.state;
prng(); // $ExpectType number

const prngWithState = seedrandom('added entropy.', { entropy: true, state: true }); // $ExpectType StatefulPRNG
prngWithState.double(); // $ExpectType number
prngWithState.int32(); // $ExpectType number
prngWithState.quick(); // $ExpectType number
prngWithState.state(); // $ExpectType object
prngWithState(); // $ExpectType number

seedrandom('hello.', { state: {} }); // $ExpectType StatefulPRNG
seedrandom('hello.', { global: true }); // $ExpectType PRNG
seedrandom('hello.'); // $ExpectType PRNG
seedrandom(); // $ExpectType PRNG

new seedrandom.alea('hello.'); // $ExpectType PRNG
new seedrandom.tychei('hello.'); // $ExpectType PRNG
new seedrandom.xor128('hello.'); // $ExpectType PRNG
new seedrandom.xor4096('hello.'); // $ExpectType PRNG
new seedrandom.xorshift7('hello.'); // $ExpectType PRNG
new seedrandom.xorwow('hello.'); // $ExpectType PRNG
seedrandom.alea('hello.', { entropy: true }); // $ExpectType PRNG
seedrandom.tychei('hello.', { entropy: true }); // $ExpectType PRNG
seedrandom.xor128('hello.', { entropy: true }); // $ExpectType PRNG
seedrandom.xor4096('hello.', { entropy: true }); // $ExpectType PRNG
seedrandom.xorshift7('hello.', { entropy: true }); // $ExpectType PRNG
seedrandom.xorwow('hello.', { entropy: true }); // $ExpectType PRNG

new alea('hello.'); // $ExpectType PRNG
new tychei('hello.'); // $ExpectType PRNG
new xor128('hello.'); // $ExpectType PRNG
new xor4096('hello.'); // $ExpectType PRNG
new xorshift7('hello.'); // $ExpectType PRNG
new xorwow('hello.'); // $ExpectType PRNG
alea('hello.', { entropy: true }); // $ExpectType PRNG
tychei('hello.', { entropy: true }); // $ExpectType PRNG
xor128('hello.', { entropy: true }); // $ExpectType PRNG
xor4096('hello.', { entropy: true }); // $ExpectType PRNG
xorshift7('hello.', { entropy: true }); // $ExpectType PRNG
xorwow('hello.', { entropy: true }); // $ExpectType PRNG
