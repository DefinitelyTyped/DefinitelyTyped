import trim = require("string.prototype.trim");
import "string.prototype.trim/auto";
import trimImpl = require("string.prototype.trim/implementation");
import getPolyfill = require("string.prototype.trim/polyfill");
import shim = require("string.prototype.trim/shim");

trim("foo"); // $ExpectType string

// `getPolyfill` returns a flat implementation
getPolyfill(); // $ExpectType (this: string) => string

// `shim` installs a flat implementation in `Array` prototype and returns it
shim(); // $ExpectType (this: string) => string

//  `getPolyfill`, `implementation`, and `shim` are properties of the `flat` function.
const _getPolyfill: typeof getPolyfill = trim.getPolyfill;
const _implementation: typeof trimImpl = trim.implementation;
const _shim: typeof shim = trim.shim;
