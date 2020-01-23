import mergeObjects = require("merge-objects");

mergeObjects({ a: 1, b: [2, 3] }, { b: [4, 5], c: 6 }); // $ExpectType { a: number; b: number[]; } & { b: number[]; c: number; }
