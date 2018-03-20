import { RandomSeed, create } from "random-seed";

// these generators produce different numbers
const rand1: RandomSeed = create(); // method 1

// these generators will produce
// the same sequence of numbers
const seed = 'My Secret String Value';
const rand2 = create(seed);

// API
rand1(50);
rand1.addEntropy();
rand1.random();
rand1.range(100);
rand1.intBetween(0, 10);
rand1.floatBetween(0, 1);
rand1.seed("new seed");

rand2(50);
rand2.addEntropy();
rand2.random();
rand2.range(100);
rand2.intBetween(0, 10);
rand2.floatBetween(0, 1);
rand2.seed("new seed");
