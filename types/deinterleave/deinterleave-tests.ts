import deinterleave = require("deinterleave");

deinterleave([1, 0]); // $ExpectType number[]
deinterleave([1, 0], 2); // $ExpectType number[]
deinterleave(["a", 1]); // $ExpectType (string | number)[]
deinterleave(["a", 1], 2); // $ExpectType (string | number)[]
