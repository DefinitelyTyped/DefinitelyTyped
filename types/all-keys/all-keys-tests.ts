import allKeys = require('all-keys');

allKeys(Symbol.prototype); // $ExpectType Set<string>
allKeys(Symbol.prototype, { includeObjectPrototype: false }); // $ExpectType Set<string>
allKeys(Symbol.prototype, { includeSymbols: false }); // $ExpectType Set<string>
