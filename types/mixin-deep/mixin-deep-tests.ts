import mixinDeep = require("mixin-deep");

// Basic usage
const result = mixinDeep({ a: 1 }, { b: 2 });
result.a; // $ExpectType number

// Multiple sources
const multi = mixinDeep({ x: 1 }, { y: 2 }, { z: 3 });

// Deep merge
const deep = mixinDeep({ a: { b: 1 } }, { a: { c: 2 } });

// @ts-expect-error - target must be an object
mixinDeep("not an object", { a: 1 });
