import punycode = require("punycode");

const result1: string = punycode.decode("x");
const result2: string = punycode.encode("x");
const result3: string = punycode.toASCII("x");
const result4: string = punycode.toUnicode("x");

const ucs2result1: number[] = punycode.ucs2.decode("x");
const ucs2result2: string = punycode.ucs2.encode([1, 2, 3]);

const version: string = punycode.version;


import punycodeDirect = require("punycode/punycode.js");
const result1Direct: string = punycode.decode("x");
const result2Direct: string = punycode.encode("x");
const result3Direct: string = punycode.toASCII("x");
const result4Direct: string = punycode.toUnicode("x");

const ucs2result1Direct: number[] = punycode.ucs2.decode("x");
const ucs2result2Direct: string = punycode.ucs2.encode([1, 2, 3]);

const versionDirect: string = punycode.version;
