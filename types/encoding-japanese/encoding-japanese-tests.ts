
import * as Encoding from 'encoding-japanese';

// Convert character encoding to Shift_JIS from UTF-8.
var utf8Array_1 = new Uint8Array([1, 2, 3]);
var utf8Array_2 = [1, 2, 3];
var utf8Array_3 = new Buffer([1, 2, 3]);
var sjisArray = Encoding.convert(utf8Array_1, 'SJIS', 'UTF8');
var sjisArray = Encoding.convert(utf8Array_2, 'UTF16', 'UTF8');
var sjisArray = Encoding.convert(utf8Array_3, 'EUCJP', 'UTF8');

// Convert character encoding by automatic detection (AUTO detect).
var utf8Array = utf8Array_1;
var sjisArray1 = Encoding.convert(utf8Array, 'SJIS');
// or  
var sjisArray2 = Encoding.convert(utf8Array, 'SJIS', 'AUTO');

// Detect the character encoding.
// The return value be one of the "Available Encodings" below.
var detected = Encoding.detect(utf8Array);
if (detected === 'UTF8') {
  console.log('Encoding is UTF-8');
}

var sjisArray3 = Encoding.convert(utf8Array, {
  to: 'SJIS', // to_encoding
  from: 'UTF8' // from_encoding
});

var utf8String = 'ã\u0081\u0093ã\u0082\u0093ã\u0081«ã\u0081¡ã\u0081¯';
var unicodeString = Encoding.convert(utf8String, {
  to: 'UNICODE',
  from: 'UTF8',
  type: 'string' // Specify 'string' type. (Return as string)
});
console.log(unicodeString); // こんにちは

var utf16Array = Encoding.convert(utf8Array, {
  to: 'UTF16', // to_encoding
  from: 'UTF8', // from_encoding
  bom: true // With BOM
});

var utf16leArray = Encoding.convert(utf8Array, {
  to: 'UTF16', // to_encoding
  from: 'UTF8', // from_encoding
  bom: 'LE' // With BOM (little-endian)
});

var utf16beArray = Encoding.convert(utf8Array, {
  to: 'UTF16BE',
  from: 'UTF8'
});

// Detect character encoding by automatic. (AUTO detect).
var detected2 = Encoding.detect(utf8Array);
if (detected2 === 'UTF8') {
  console.log('Encoding is UTF-8');
}

// Detect character encoding by specific encoding name.
var isSJIS = Encoding.detect(sjisArray, 'SJIS');
if (isSJIS) {
  console.log('Encoding is SJIS');
}

var sjisArray4 = [
  130, 177, 130, 241, 130, 201, 130, 191, 130, 205, 129,
  65, 130, 217, 130, 176, 129, 153, 130, 210, 130, 230
];

var encoded = Encoding.urlEncode(sjisArray4);
console.log(encoded);
// output:
// '%82%B1%82%F1%82%C9%82%BF%82%CD%81A%82%D9%82%B0%81%99%82%D2%82%E6'

var decoded = Encoding.urlDecode(encoded);
console.log(decoded);
// output: [
//   130, 177, 130, 241, 130, 201, 130, 191, 130, 205, 129,
//    65, 130, 217, 130, 176, 129, 153, 130, 210, 130, 230
// ]

var sjisArray5 = [
  130, 177, 130, 241, 130, 201, 130, 191, 130, 205
];
var encoded2 = Encoding.base64Encode(sjisArray5);
console.log(encoded2); // 'grGC8YLJgr+CzQ=='

var decoded2 = Encoding.base64Decode(encoded2);
console.log(decoded2);
// [130, 177, 130, 241, 130, 201, 130, 191, 130, 205]


