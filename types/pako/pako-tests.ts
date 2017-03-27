

import pako = require("pako");

var chunk1 = new Uint8Array([1,2,3,4,5,6,7,8,9])
var chunk2 = new Uint8Array([10,11,12,13,14,15,16,17,18,19]);

var deflate = new pako.Deflate({ level: 3 });

deflate.push(chunk1, false);
deflate.push(chunk2, true);  // true -> last chunk

if (deflate.err) {
	throw new Error( deflate.err.toString() );
}

console.log(deflate.result);

let str: string = pako.deflate('1234', {to: 'string'});
let arr: Uint8Array = pako.deflate('1234');

let str2: string = pako.inflate('1234', {to: 'string'});
let arr2: Uint8Array = pako.inflate('1234');

