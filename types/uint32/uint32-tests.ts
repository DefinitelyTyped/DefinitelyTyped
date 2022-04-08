import * as uint32 from 'uint32';

// Creating and Extracting
uint32.fromBytesBigEndian(1, 2, 3, 4); // $ExpectType number
uint32.getByteBigEndian(0x01020304, 0); // $ExpectType number
uint32.toHex(1); // $ExpectType string
uint32.toHex(1, 4); // $ExpectType string
uint32.toUint32(-1); // $ExpectType number
uint32.highPart(0x0102030405); // $ExpectType number

// Bitwise Logical Operators
uint32.and(1, 3, 5); // $ExpectType number
uint32.or(1, 3, 5); // $ExpectType number
uint32.xor(1, 3, 5); // $ExpectType number
uint32.not(1); // $ExpectType number

// Shifting and Rotating
uint32.shiftLeft(0x40000000, 1); // $ExpectType number
uint32.shiftRight(0x80000000, 1); // $ExpectType number
uint32.rotateLeft(0x80000000, 1); // $ExpectType number
uint32.rotateRight(0x00000001, 1); // $ExpectType number

// Logical Gates
uint32.choose(0x01010202, 0x00010001, 0x01000100); // $ExpectType number
uint32.majority(0x01, 0x00, 0x01); // $ExpectType number

// Arithmetic
uint32.addMod32(0x80000001, 0x80000001); // $ExpectType number
uint32.log2(0xffffffff); // $ExpectType number

const result = new Uint32Array(2);
uint32.mult(0xffffffff, 0xffffffff, result); // $ExpectType void
