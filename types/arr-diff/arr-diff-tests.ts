import diff = require('arr-diff');

const a = ['a', 'b', 'c', 'd'];
const b = [1, 2];

diff(['a']); // $ExpectType string[]
diff(['a'], [1]); // $ExpectType string[]
diff([1], ['a']); // $ExpectType number[]
