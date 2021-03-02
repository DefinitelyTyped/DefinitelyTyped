import pm = require('picomatch');

// main function
const isMatch = pm('*.!(*a)');

// $ExpectType boolean
isMatch('abcd');

const testResult = pm.test('foo/bar', /^(?:([^/]*?)\/([^/]*?))$/);
// $ExpectType boolean
testResult.isMatch;
// $ExpectType string
testResult.output;

// $ExpectType boolean
pm.matchBase('foo/bar.js', '*.js');
