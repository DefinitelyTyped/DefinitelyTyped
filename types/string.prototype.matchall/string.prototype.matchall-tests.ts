import matchAll = require('string.prototype.matchall');

const str = 'aabc';
const nonRegexStr = 'ab';
const globalRegex = /[ac]/g;

matchAll(str, nonRegexStr); // $ExpectType IterableIterator<RegExpMatchArray>
matchAll(str, new RegExp(nonRegexStr, 'g')); // $ExpectType IterableIterator<RegExpMatchArray>
matchAll(str, globalRegex); // $ExpectType IterableIterator<RegExpMatchArray>
matchAll.shim(); // $ExpectType void
str.matchAll(globalRegex); // $ExpectType IterableIterator<RegExpMatchArray>
str.matchAll(new RegExp(nonRegexStr, 'g')); // $ExpectType IterableIterator<RegExpMatchArray>
