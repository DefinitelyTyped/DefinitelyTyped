/// <reference path="./random-seed.d.ts" />
import * as gen from "random-seed";

// these generators produce different numbers
let rand1 = gen.create(); // method 1
let rand2 = gen();        // method 3

// these generators will produce
// the same sequence of numbers
let seed = 'My Secret String Value';
let rand3 = gen.create(seed);
let rand4 = gen(seed);

// API
rand1.addEntropy();
rand1.random();
rand1.range(100);
rand1.intBetween(0, 10);
rand1.floatBetween(0, 1);
rand1.seed("new seed");
