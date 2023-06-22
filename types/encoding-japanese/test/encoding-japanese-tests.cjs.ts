/// <reference types="node" />
import Encoding = require('encoding-japanese');

// Convert character encoding to Shift_JIS from UTF-8.
const utf8Array_1 = new Uint8Array([1, 2, 3]);
const utf8Array_2 = [1, 2, 3];
const utf8Array_3 = Buffer.from([1, 2, 3]);
const utf8Array_4 = new Uint16Array([1, 2, 3]);
const utf8Array_5 = new Uint32Array([1, 2, 3]);
const utf8Array_6 = new Int16Array([1, 2, 3]);
const utf8Array_7 = new Int32Array([1, 2, 3]);
const utf8Array_8 = new Int8Array([1, 2, 3]);
const utf8Array_9: ReadonlyArray<number> = [1, 2, 3];
Encoding.convert(utf8Array_1, 'SJIS', 'UTF8'); // $ExpectType number[]
Encoding.convert(utf8Array_2, 'UTF16', 'UTF8'); // $ExpectType number[]
Encoding.convert(utf8Array_3, 'UTF16LE', 'UTF8'); // $ExpectType number[]
Encoding.convert(utf8Array_4, 'UTF16BE', 'UTF8'); // $ExpectType number[]
Encoding.convert(utf8Array_5, 'BINARY', 'UTF8'); // $ExpectType number[]
Encoding.convert(utf8Array_6, 'UTF32', 'UTF8'); // $ExpectType number[]
Encoding.convert(utf8Array_7, 'AUTO', 'UTF8'); // $ExpectType number[]
Encoding.convert(utf8Array_8, 'ASCII', 'UTF8'); // $ExpectType number[]
Encoding.convert(utf8Array_9, 'JIS', 'UTF8'); // $ExpectType number[]
Encoding.convert('string value', 'UTF16', 'UTF8'); // $ExpectType string

// Convert character encoding by automatic detection (AUTO detect).
const utf8Array = utf8Array_1;
const sjisArray1 = Encoding.convert(utf8Array, 'SJIS'); // $ExpectType number[]
// or
const sjisArray2 = Encoding.convert(utf8Array, 'SJIS', 'AUTO'); // $ExpectType number[]

// Detect the character encoding.
// The return value be one of the "Available Encodings" below.
const detected = Encoding.detect(utf8Array); // $ExpectType EncodingDetection
if (detected === 'UTF8') {
    // Encoding is UTF-8'
}

const sjisArray3 = Encoding.convert(utf8Array, {
    to: 'SJIS', // to_encoding
    from: 'UTF8', // from_encoding
});
sjisArray3; // $ExpectType number[]

const sjisArray4 = Encoding.convert('🐙', {
    to: 'SJIS', // to_encoding
    from: 'UTF8', // from_encoding
    type: 'string',
    fallback: 'html-entity',
});
sjisArray4; // $ExpectType string
// fallback: '&#128025;'

const utf8String = 'ã\u0081\u0093ã\u0082\u0093ã\u0081«ã\u0081¡ã\u0081¯';
const unicodeString = Encoding.convert(utf8String, {
    to: 'UNICODE',
    from: 'UTF8',
    type: 'string', // Specify 'string' type. (Return as string)
});
unicodeString; // $ExpectType string

const unicodeString2 = Encoding.convert(utf8String, {
    to: 'UNICODE',
    from: 'UTF8', // Unspecified type. Inferred from 1st argument
});
unicodeString2; // $ExpectType string

const utf16Array = Encoding.convert(utf8Array, {
    to: 'UTF16', // to_encoding
    from: 'UTF8', // from_encoding
    bom: true, // With BOM
});
utf16Array; // $ExpectType number[]

const utf16leArray = Encoding.convert(utf8Array, {
    to: 'UTF16', // to_encoding
    from: 'UTF8', // from_encoding
    bom: 'LE', // With BOM (little-endian)
});
utf16leArray; // $ExpectType number[]

const utf16beArray = Encoding.convert(utf8Array, {
    to: 'UTF16BE',
    from: 'UTF8',
});
utf16beArray; // $ExpectType number[]

const utf16Array2 = Encoding.convert(utf8Array, {
    to: 'UTF16', // to_encoding
    from: 'UTF8', // from_encoding
    type: 'array',
    bom: true, // With BOM
});
utf16Array2; // $ExpectType number[]

const utf16Array3 = Encoding.convert(utf8Array, {
    to: 'UTF16', // to_encoding
    from: 'UTF8', // from_encoding
    type: 'arraybuffer',
    bom: true, // With BOM
});
utf16Array3; // $ExpectType ArrayBuffer

const utf16Array4 = Encoding.convert(utf8Array, {
    to: 'UTF16', // to_encoding
    from: 'UTF8', // from_encoding
    type: 'string',
    bom: true, // With BOM
});
utf16Array4; // $ExpectType string

// Detect character encoding by automatic. (AUTO detect).
const detected2 = Encoding.detect(utf8Array); // $ExpectType EncodingDetection
if (detected2 === 'UTF8') {
    // Encoding is UTF-8'
}

// Detect character encoding by specific encoding name.
const isSJIS = Encoding.detect(sjisArray1, 'SJIS'); // $ExpectType EncodingDetection
if (isSJIS) {
    // Encoding is SJIS'
}

const sjisArray5 = [
    130, 177, 130, 241, 130, 201, 130, 191, 130, 205, 129, 65, 130, 217, 130, 176, 129, 153, 130, 210, 130, 230,
];

const encoded = Encoding.urlEncode(sjisArray5); // $ExpectType string
// encoded: '%82%B1%82%F1%82%C9%82%BF%82%CD%81A%82%D9%82%B0%81%99%82%D2%82%E6'

const decoded = Encoding.urlDecode(encoded); // $ExpectType number[]
// decoded: [
//   130, 177, 130, 241, 130, 201, 130, 191, 130, 205, 129,
//    65, 130, 217, 130, 176, 129, 153, 130, 210, 130, 230
// ]

const sjisArray6 = [130, 177, 130, 241, 130, 201, 130, 191, 130, 205];
const encoded2 = Encoding.base64Encode(sjisArray6); // $ExpectType string
// encoded2: 'grGC8YLJgr+CzQ=='

const decoded2 = Encoding.base64Decode(encoded2); // $ExpectType number[]
// decoded2: [130, 177, 130, 241, 130, 201, 130, 191, 130, 205]

Encoding.version; // $ExpectType string
Encoding.orders; // $ExpectType string[]

Encoding.toZenkakuCase([1, 2, 3]); // $ExpectType number[]
Encoding.toZenkakuCase('abcdef'); // $ExpectType string
Encoding.toHankakuCase([1, 2, 3]); // $ExpectType number[]
Encoding.toHankakuCase('ＡＢＣＤＥＦ'); // $ExpectType string
Encoding.toZenkanaCase([1, 2, 3]); // $ExpectType number[]
Encoding.toZenkanaCase('ｱｲｳｴｵ'); // $ExpectType string
Encoding.toHankanaCase([1, 2, 3]); // $ExpectType number[]
Encoding.toHankanaCase('アイウエオ'); // $ExpectType string
Encoding.toZenkakuSpace([1, 2, 3]); // $ExpectType number[]
Encoding.toZenkakuSpace('     '); // $ExpectType string
Encoding.toHankakuSpace([1, 2, 3]); // $ExpectType number[]
Encoding.toHankakuSpace('\u{3000}'); // $ExpectType string
