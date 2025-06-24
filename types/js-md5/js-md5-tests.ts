import md5 = require("js-md5");

let str: string = md5.hex("The quick brown fox jumps over the lazy dog");
str = md5("The quick brown fox jumps over the lazy dog");
let arr: number[] = md5.digest("The quick brown fox jumps over the lazy dog");
arr = md5.array("The quick brown fox jumps over the lazy dog");
let buf: ArrayBuffer = md5.arrayBuffer("The quick brown fox jumps over the lazy dog");
md5.base64("The quick brown fox jumps over the lazy dog");

// $ExpectType Hasher
const hash1 = md5.create();
// $ExpectType Hasher
hash1.update("The quick brown fox jumps over the lazy dog");
// $ExpectType string
str = hash1.hex();
// $ExpectType string
str = hash1.toString();
// $ExpectType number[]
arr = hash1.digest();
// $ExpectType number[]
arr = hash1.array();
// $ExpectType ArrayBuffer
buf = hash1.arrayBuffer();

// $ExpectType Hasher
const hash2 = md5.update("The quick brown fox jumps over the lazy dog");
// $ExpectType string
str = hash2.hex();
// $ExpectType string
str = hash2.toString();
// $ExpectType number[]
arr = hash2.digest();
// $ExpectType number[]
arr = hash2.array();
// $ExpectType ArrayBuffer
buf = hash2.arrayBuffer();

// $ExpectType string
str = md5([]);
// $ExpectType string
str = md5(new Uint8Array([]));
// $ExpectType string
str = md5(new ArrayBuffer(0));
