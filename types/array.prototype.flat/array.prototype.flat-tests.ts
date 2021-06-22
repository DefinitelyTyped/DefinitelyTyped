import flat = require('array.prototype.flat');
import 'array.prototype.flat/auto';
import flatImpl = require('array.prototype.flat/implementation');
import getPolyfill = require('array.prototype.flat/polyfill');
import shim = require('array.prototype.flat/shim');

// Infers nesting-level of the output array from
// the depth argument up to a depth of 4.
flat(['foo'], 0); // $ExpectType string[]
flat([['foo']], 1); // $ExpectType string[]
flat([['foo']], 0); // $ExpectType string[][]
flat([[['foo']]], 2); // $ExpectType string[]
flat([[['foo']]], 1); // $ExpectType string[][]
flat([[['foo']]], 0); // $ExpectType string[][][]
flat([[[['foo']]]], 3); // $ExpectType string[]
flat([[[['foo']]]], 2); // $ExpectType string[][]
flat([[[['foo']]]], 1); // $ExpectType string[][][]
flat([[[['foo']]]], 0); // $ExpectType string[][][][]
flat([[[[['foo']]]]], 4); // $ExpectType string[]
flat([[[[['foo']]]]], 3); // $ExpectType string[][]
flat([[[[['foo']]]]], 2); // $ExpectType string[][][]
flat([[[[['foo']]]]], 1); // $ExpectType string[][][][]
flat([[[[['foo']]]]], 0); // $ExpectType string[][][][][]

flatImpl(['foo'], 0); // $ExpectType string[]
flatImpl([['foo']], 1); // $ExpectType string[]
flatImpl([['foo']], 0); // $ExpectType string[][]
flatImpl([[['foo']]], 2); // $ExpectType string[]
flatImpl([[['foo']]], 1); // $ExpectType string[][]
flatImpl([[['foo']]], 0); // $ExpectType string[][][]
flatImpl([[[['foo']]]], 3); // $ExpectType string[]
flatImpl([[[['foo']]]], 2); // $ExpectType string[][]
flatImpl([[[['foo']]]], 1); // $ExpectType string[][][]
flatImpl([[[['foo']]]], 0); // $ExpectType string[][][][]
flatImpl([[[[['foo']]]]], 4); // $ExpectType string[]
flatImpl([[[[['foo']]]]], 3); // $ExpectType string[][]
flatImpl([[[[['foo']]]]], 2); // $ExpectType string[][][]
flatImpl([[[[['foo']]]]], 1); // $ExpectType string[][][][]
flatImpl([[[[['foo']]]]], 0); // $ExpectType string[][][][][]

['foo'].flat(0); // $ExpectType string[]
[['foo']].flat(1); // $ExpectType string[]
[['foo']].flat(0); // $ExpectType string[][]
[[['foo']]].flat(2); // $ExpectType string[]
[[['foo']]].flat(1); // $ExpectType string[][]
[[['foo']]].flat(0); // $ExpectType string[][][]
[[[['foo']]]].flat(3); // $ExpectType string[]
[[[['foo']]]].flat(2); // $ExpectType string[][]
[[[['foo']]]].flat(1); // $ExpectType string[][][]
[[[['foo']]]].flat(0); // $ExpectType string[][][][]
[[[[['foo']]]]].flat(4); // $ExpectType string[]
[[[[['foo']]]]].flat(3); // $ExpectType string[][]
[[[[['foo']]]]].flat(2); // $ExpectType string[][][]
[[[[['foo']]]]].flat(1); // $ExpectType string[][][][]
[[[[['foo']]]]].flat(0); // $ExpectType string[][][][][]

// Supports `ReadonlyArray` up to a depth of 4.
const readOnly: ReadonlyArray<ReadonlyArray<ReadonlyArray<ReadonlyArray<ReadonlyArray<string>>>>> = [[[[['foo']]]]];
flat(readOnly, 4); // $ExpectType string[]

// Supports `Array` up to a depth of 7.
const mutable: string[][][][][][][][] = [[[[[[[['string']]]]]]]];
flat(mutable, 7); // $ExpectType string[]
mutable.flat(7); // $ExpectType string[]

// `getPolyfill` returns a flat implementation
getPolyfill()([['foo']], 1); // $ExpectType string[]

// `shim` installs a flat implementation in `Array` prototype and returns it
shim()([['foo']], 1); // $ExpectType string[]

//  `getPolyfill`, `implementation`, and `shim` are properties of the `flat` function.
const _getPolyfill: typeof getPolyfill = flat.getPolyfill;
const _implementation: typeof flatImpl = flat.implementation;
const _shim: typeof shim = flat.shim;
