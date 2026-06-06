import uzip = require("uzip");

uzip.parse(new ArrayBuffer(200)); // $ExpectType UZIPFiles
uzip.parse(new ArrayBuffer(200), false); // $ExpectType UZIPFiles
uzip.parse(new ArrayBuffer(200), true); // $ExpectType UZIPSizeInfo

uzip.encode({ filename: new Uint8Array(10) }); // $ExpectType ArrayBuffer
uzip.encode({ filename: new Uint8Array(10) }, true); // $ExpectType ArrayBuffer

uzip.deflateRaw(new Uint8Array(100)); // $ExpectType Uint8Array || Uint8Array<ArrayBuffer>
uzip.deflateRaw(new Uint8Array(100), { level: 0 }); // $ExpectType Uint8Array || Uint8Array<ArrayBuffer>

uzip.deflate(new Uint8Array(100)); // $ExpectType Uint8Array || Uint8Array<ArrayBuffer>
uzip.deflate(new Uint8Array(100), { level: 0 }); // $ExpectType Uint8Array || Uint8Array<ArrayBuffer>

uzip.inflateRaw(new Uint8Array(100)); // $ExpectType Uint8Array || Uint8Array<ArrayBuffer>
uzip.inflateRaw(new Uint8Array(100), new Uint8Array(100)); // $ExpectType Uint8Array || Uint8Array<ArrayBuffer>

uzip.inflate(new Uint8Array(100)); // $ExpectType Uint8Array || Uint8Array<ArrayBuffer>
uzip.inflate(new Uint8Array(100), new Uint8Array(100)); // $ExpectType Uint8Array || Uint8Array<ArrayBuffer>
