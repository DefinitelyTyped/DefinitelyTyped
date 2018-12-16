/// <reference types="node" />

import * as assert from 'assert';
import * as seed from 'seed-random';

const trueRandomA = seed();
const trueRandomB = seed();
assert(trueRandomA() !== trueRandomB());

const fakeRandomA = seed('foo');
const fakeRandomB = seed('foo');
assert(fakeRandomA() === fakeRandomB());

const fakeRandomC = seed('foo', {entropy: true});
const fakeRandomD = seed('foo', {entropy: true});
assert(fakeRandomC() !== fakeRandomD());

// override global Math.random
seed('foo', {global: true});
const numA = Math.random();
seed('foo', {global: true});
const numB = Math.random();
assert(numA === numB);

// reset to default Math.random
seed.resetGlobal();
