import flatMap = require("array.prototype.flatmap");
import "array.prototype.flatmap/auto";
import flatMapImpl = require("array.prototype.flatmap/implementation");
import getPolyfill = require("array.prototype.flatmap/polyfill");
import shim = require("array.prototype.flatmap/shim");

// infers type of the output array from the return type of the callback
flatMap(["foo"], word => word.split("")); // $ExpectType string[]
flatMapImpl(["foo"], word => word.split("")); // $ExpectType string[]
["foo"].flatMap(word => word.split("")); // $ExpectType string[]

// infers the type of the value argument to the callback
flatMap([1, 2], word => word.split("")); // $ExpectError
flatMapImpl([1, 2], word => word.split("")); // $ExpectError
[1, 2].flatMap(word => word.split("")); // $ExpectError

// the callback must return an array
flatMap([1, 2], word => word); // $ExpectError
flatMapImpl([1, 2], word => word); // $ExpectError
[1, 2].flatMap(word => word); // $ExpectError

// the callback accepts an index argument
flatMap(["foo"], (_, index) => [index]); // $ExpectType number[]
flatMapImpl(["foo"], (_, index) => [index]); // $ExpectType number[]
["foo"].flatMap((_, index) => [index]); // $ExpectType number[]

// the callback accepts an argument that refers to the original array
flatMap(["foo"], (_, __, input) => input); // $ExpectType string[]
flatMapImpl(["foo"], (_, __, input) => input); // $ExpectType string[]
["foo"].flatMap((_, __, input) => input); // $ExpectType string[]

// the third argument is used as the calling context for the callback
flatMap(["foo"], function() { return this.foo; }, { foo: [1, 2] }); // $ExpectType number[]
flatMapImpl(["foo"], function() { return this.foo; }, { foo: [1, 2] }); // $ExpectType number[]
["foo"].flatMap(function() { return this.foo; }, { foo: [1, 2] }); // $ExpectType number[]

// assumes that value of `this` in callback is `undefined` by default (this is
// accurate in strict mode)
flatMap([1], function() { return [this]; }); // $ExpectType undefined[]
flatMapImpl([1], function() { return [this]; }); // $ExpectType undefined[]
[1].flatMap(function() { return [this]; }); // $ExpectType undefined[]

// `getPolyfill` returns a flatMap implementation
getPolyfill()(["foo"], word => word.split("")); // $ExpectType string[]

// `shim` installs a flatMap implementation in `Array` prototype and returns it
shim()(["foo"], word => word.split("")); // $ExpectType string[]

// `ReadonlyArray` is supported
(["foo"] as ReadonlyArray<string>).flatMap(word => word.split("")); // $ExpectType string[]

// Readonly result from callback is supported
flatMap([[1], [2]], a => a as ReadonlyArray<number>); // $ExpectType number[]
flatMap([[1], [2]] as ReadonlyArray<ReadonlyArray<number>>, a => a); // $ExpectType number[]
([[1], [2]]).flatMap(a => a as ReadonlyArray<number>); // $ExpectType number[]
([[1], [2]] as ReadonlyArray<ReadonlyArray<number>>).flatMap(a => a); // $ExpectType number[]
