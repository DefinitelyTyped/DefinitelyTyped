import index = require("object.assign");
import "object.assign/auto";
import implementation = require("object.assign/implementation");
import getPolyfill = require("object.assign/polyfill");
import shim = require("object.assign/shim");

// `getPolyfill` returns an implementation
getPolyfill() === Object.assign; // $ExpectType boolean

//  `getPolyfill`, `implementation`, and `shim` are properties of the index function.
const _getPolyfill: typeof getPolyfill = index.getPolyfill;
const _implementation: typeof implementation = index.implementation;
const _shim: typeof shim = index.shim;
