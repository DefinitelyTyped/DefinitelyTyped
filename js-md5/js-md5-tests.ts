import md5 = require("js-md5");

let str: string = md5.hex('The quick brown fox jumps over the lazy dog');
str = md5('The quick brown fox jumps over the lazy dog');
let arr: number[] = md5.digest('The quick brown fox jumps over the lazy dog');
arr = md5.array('The quick brown fox jumps over the lazy dog');
let buf: ArrayBuffer = md5.arrayBuffer('The quick brown fox jumps over the lazy dog');
buf = md5.buffer('The quick brown fox jumps over the lazy dog');

const hash1 = md5.create();
hash1.update('The quick brown fox jumps over the lazy dog');
str = hash1.hex();
str = hash1.toString();
arr = hash1.digest();
arr = hash1.array();
buf = hash1.arrayBuffer();
buf = hash1.buffer();

const hash2 = md5.update('The quick brown fox jumps over the lazy dog');
str = hash2.hex();
str = hash2.toString();
arr = hash2.digest();
arr = hash2.array();
buf = hash2.arrayBuffer();
buf = hash2.buffer();

str = md5([]);
str = md5(new Uint8Array([]));
str = md5(new ArrayBuffer(0));
