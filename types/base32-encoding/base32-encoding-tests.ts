import { decode, encode, encodingLength, parse, stringify } from 'base32-encoding';

const toEncode = new Uint8Array(Buffer.from('foo'));

encodingLength(toEncode); // $ExpectType number

encode(toEncode); // $ExpectType Buffer
encode(toEncode, Buffer.alloc(encodingLength(toEncode))); // $ExpectType Buffer
encode(toEncode, new Uint8Array(encodingLength(toEncode))); // $ExpectType Uint8Array
encode(toEncode, Buffer.alloc(encodingLength(toEncode)), 0); // $ExpectType Buffer
encode(toEncode, new Uint8Array(encodingLength(toEncode)), 0); // $ExpectType Uint8Array

encode.bytes; // $ExpectType number | undefined

const toDecode = new Uint8Array(Buffer.from('3iejg7iy'));
decode(toEncode); // $ExpectType Buffer
decode(toEncode, Buffer.alloc(encodingLength(toEncode))); // $ExpectType Buffer
decode(toEncode, new Uint8Array(encodingLength(toEncode))); // $ExpectType Uint8Array
decode(toEncode, Buffer.alloc(encodingLength(toEncode)), 0); // $ExpectType Buffer
decode(toEncode, new Uint8Array(encodingLength(toEncode)), 0); // $ExpectType Uint8Array

decode.bytes; // $ExpectType number | undefined

stringify(toDecode); // $ExpectType string
stringify(toDecode, '123'); // $ExpectType string

parse('3iejg7iy'); // $ExpectType Buffer
parse('3iejg7iy', '123'); // $ExpectType Buffer
