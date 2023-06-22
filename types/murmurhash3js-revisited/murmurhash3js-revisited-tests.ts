import * as MurmurHash3 from 'murmurhash3js-revisited';

// "My hovercraft is full of eels."
const bytes = new Uint8Array([
    77, 121, 32, 104, 111, 118, 101, 114, 99, 114, 97, 102, 116, 32, 105, 115, 32, 102, 117, 108, 108, 32, 111, 102, 32,
    101, 101, 108, 115, 46,
]);

MurmurHash3.x86.hash32(bytes); // $ExpectType number
MurmurHash3.x86.hash32(bytes, 25); // $ExpectType number
MurmurHash3.x86.hash128(bytes); // $ExpectType string
MurmurHash3.x86.hash128(bytes, 25); // $ExpectType string
MurmurHash3.x64.hash128(bytes); // $ExpectType string
MurmurHash3.x64.hash128(bytes, 25); // $ExpectType string
