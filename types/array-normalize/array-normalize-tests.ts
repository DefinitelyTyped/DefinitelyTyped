import normalize = require("array-normalize");
import normalizeMod from "array-normalize/index.mjs";

normalize([0, 50, 100]); // $ExpectType number[]
normalize({ 0: 0, 1: 50, 2: 100, length: 3 }); // $ExpectType number[]
normalize([0, 0, 0.1, 0.2, 1, 2], 2); // $ExpectType number[]
normalize([0, 0.25, 1, 0.25], 2, [0, 0.5, 1, 0.5]); // $ExpectType number[]
normalize([0, 0.25, 1, 0.25], 2, [0, 0.5, 1, 0.5] as const); // $ExpectType number[]

normalizeMod([0, 50, 100]); // $ExpectType number[]
normalizeMod({ 0: 0, 1: 50, 2: 100, length: 3 }); // $ExpectType number[]
normalizeMod([0, 0, 0.1, 0.2, 1, 2], 2); // $ExpectType number[]
normalizeMod([0, 0.25, 1, 0.25], 2, [0, 0.5, 1, 0.5]); // $ExpectType number[]
normalizeMod([0, 0.25, 1, 0.25], 2, [0, 0.5, 1, 0.5] as const); // $ExpectType number[]
