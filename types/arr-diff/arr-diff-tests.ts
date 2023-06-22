import diff = require('arr-diff');

const a = ['a', 'b', 'c', 'd'];
const b = [1, 2];

diff(['a']); // $ExpectType string[]
diff(['a'], [1]); // $ExpectType string[]
diff([1], ['a']); // $ExpectType number[]

const readonlyArr0: readonly string[] = [];
const readonlyArr1: readonly string[] = [];
diff(readonlyArr0, readonlyArr1); // $ExpectType string[]
