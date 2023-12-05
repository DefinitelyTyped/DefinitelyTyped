import matchAll = require("string.prototype.matchall");

const str = "aabc";
const nonRegexStr = "ab";
const globalRegex = /[ac]/g;

matchAll(str, nonRegexStr); // $ExpectType IterableIterator<RegExpExecArray>
matchAll(str, new RegExp(nonRegexStr, "g")); // $ExpectType IterableIterator<RegExpExecArray>
matchAll(str, globalRegex); // $ExpectType IterableIterator<RegExpExecArray>
matchAll.shim(); // $ExpectType void
str.matchAll(globalRegex); // $ExpectType IterableIterator<RegExpExecArray>
str.matchAll(new RegExp(nonRegexStr, "g")); // $ExpectType IterableIterator<RegExpExecArray>
