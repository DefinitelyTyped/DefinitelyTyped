/// <reference types="node" />
import secureShuffle = require('secure-shuffle');

secureShuffle([1, 2, 3]); // $ExpectType number[]
secureShuffle(Buffer.from([1, 2, 3])); // $ExpectType Buffer
secureShuffle(new Int32Array([1, 2, 3])); // $ExpectType Int32Array
