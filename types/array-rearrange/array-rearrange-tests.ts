import reorder = require("array-rearrange");

reorder([9, 8, 7, 6], [3, 2, 1, 0]); // $ExpectType number[]
reorder(new Uint8Array([9, 8, 7, 6]), new Uint8Array([3, 2, 1, 0])); // $ExpectType Uint8Array
reorder({ 0: 9, 1: 8, 2: 7, 3: 6, length: 4 }, { 0: 3, 1: 2, 2: 1, 3: 0, length: 4 }); // $ExpectType { 0: number; 1: number; 2: number; 3: number; length: number; }
reorder(["a", 1], [2, 1]); // $ExpectType (string | number)[]
reorder(["a", 1], [2, 1], 2); // $ExpectType (string | number)[]
