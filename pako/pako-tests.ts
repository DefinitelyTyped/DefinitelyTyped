/// <reference path="pako.d.ts" />

import pako = require("pako");

var test = { my: 'super', puper: [456, 567], awesome: 'pako' };

var binaryString = pako.deflate(JSON.stringify(test), { to: 'string' });

//
// Here you can do base64 encode, make xhr requests and so on.
//

var restored = JSON.parse(pako.inflate(binaryString, { to: 'string' }));

var pako = require('pako')
  , chunk1 = Uint8Array([1,2,3,4,5,6,7,8,9])
  , chunk2 = Uint8Array([10,11,12,13,14,15,16,17,18,19]);

var deflate = new pako.Deflate({ level: 3});

deflate.push(chunk1, false);
deflate.push(chunk2, true);  // true -> last chunk

if (deflate.err) { throw new Error(deflate.err); }

console.log(deflate.result);