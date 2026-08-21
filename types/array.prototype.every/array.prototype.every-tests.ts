import every = require("array.prototype.every");
import "array.prototype.every/auto";
import implementation = require("array.prototype.every/implementation");
import getPolyfill = require("array.prototype.every/polyfill");
import shim = require("array.prototype.every/shim");

const predicate = (x: any, i: number) => i > 1;

every([1, 2], predicate); // $ExpectType boolean

// `getPolyfill` returns an implementation
getPolyfill() === Array.prototype.every; // $ExpectType boolean

["foo"].every(predicate); // $ExpectType boolean

// `shim` installs an implementation in `Array` prototype and returns it
shim() === Array.prototype.every; // $ExpectType boolean

(function(...args: unknown[]): void {
    // $ExpectType boolean
    every(arguments, function() {
        return true;
    });
})(1, 2, "3");

//  `getPolyfill`, `implementation`, and `shim` are properties of the `every` function.
const _getPolyfill: typeof getPolyfill = every.getPolyfill;
const _implementation: typeof implementation = every.implementation;
const _shim: typeof shim = every.shim;
