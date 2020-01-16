/// <reference types="node" />

import * as seed from 'seed-random';

const trueRandomA = seed(); // $ExpectType () => number
const trueRandomB = seed(); // $ExpectType () => number

const fakeRandomA = seed('foo'); // $ExpectType () => number
const fakeRandomB = seed('foo'); // $ExpectType () => number

const fakeRandomC = seed('foo', {entropy: true}); // $ExpectType () => number
const fakeRandomD = seed('foo', {entropy: true}); // $ExpectType () => number

// override global Math.random
seed('foo', {global: true});
const numA = Math.random(); // $ExpectType number
seed('foo', {global: true});
const numB = Math.random(); // $ExpectType number

// reset to default Math.random
seed.resetGlobal();
