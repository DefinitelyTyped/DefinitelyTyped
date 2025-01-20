import seedrandom = require("seedrandom");

var rng = seedrandom("hello.");
var n: number = rng();

seedrandom("hello.", { global: true });
n = Math.random();

rng = seedrandom();
n = rng();

rng = seedrandom("added entropy.", { entropy: true });
n = rng();

var rng2 = seedrandom.xor4096("hello.");
n = rng2();

n = rng.quick();
n = rng.int32();
n = rng.double();

var saveable = seedrandom("secret-seed", { state: true });
for (var j = 0; j < 1e5; ++j) saveable();
var saved = saveable.state();
var replica = seedrandom("", { state: saved });

var emptyMathConstructor = new Math.seedrandom();
var seedMathConstructor = new Math.seedrandom("seed");
var seedCallbackMathConstructor = new Math.seedrandom("seed", undefined, 5);
var seedEmptyOptionsCallbackMathConstructor = new Math.seedrandom("seed", {}, 5);
var seedUndefinedOptionsCallbackMathConstructor = new Math.seedrandom("seed", {
    entropy: undefined,
    global: undefined,
    pass: undefined,
    state: undefined,
}, 5);
var seedAllOptionsCallbackMathConstructor = new Math.seedrandom("seed", {
    entropy: true,
    global: true,
    pass: () => {
        return rng2;
    },
    state: {},
}, 5);

n = seedrandom("secret-seed", { state: true })();
n = (new (seedrandom("secret-seed", { state: true }))())();
new new new new new new new new new new replica()()()()()()()()()();
