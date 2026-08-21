import BigSparseArray = require("big-sparse-array");

const b = new BigSparseArray<string>();

// $ExpectType undefined | string
b.get(123);

// $ExpectType string
b.set(456, "foo");
