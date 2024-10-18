import objectIs = require("object-is");
import x = require("object-is/auto");

objectIs(NaN, NaN); // $ExpectType boolean
Object.is(NaN, NaN); // $ExpectType boolean

objectIs(-0, 0); // $ExpectType boolean
Object.is(-0, 0); // $ExpectType boolean
