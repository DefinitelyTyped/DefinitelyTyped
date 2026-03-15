import flatten = require("arr-flatten");

// Basic usage
const result = flatten([1, [2, 3], [4, [5]]]);

// String arrays
const strings = flatten(["a", ["b", "c"]]);

// Already flat
const flat = flatten([1, 2, 3]);

// @ts-expect-error - argument must be an array
flatten("not an array");
