

import seedrandom = require("seedrandom");

var rng = seedrandom("hello.");
var n = rng();

seedrandom("hello.", {global: true});
n = Math.random();

rng = seedrandom();
n = rng();

rng = seedrandom('added entropy.', { entropy: true });
n = rng();

var rng2 = seedrandom.xor4096('hello.');
n = rng2();

n = rng.quick();
n = rng.int32();
n = rng.double();

var saveable = seedrandom("secret-seed", {state: true});
for (var j = 0; j < 1e5; ++j) saveable();
var saved = saveable.state();
var replica = seedrandom("", {state: saved});
