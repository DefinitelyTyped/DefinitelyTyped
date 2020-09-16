import * as XXH from 'xxhashjs';

// Test data
const seed = 0xABCD;
const stringData = 'abcd';
const arrayBufferData = new ArrayBuffer(4);
const bufferData = Buffer.from([1, 2, 3, 4]);

// Test XXH.h32 methods, initialising with string data
const value32_1 = XXH.h32(stringData, seed);
value32_1.toString();
value32_1.toString(16);
value32_1.toNumber();

const value32_2 = XXH.h32(seed).update(stringData).digest();
value32_2.toString();
value32_2.toString(16);
value32_2.toNumber();

// Test XXH.h64 methods, initialising with string data
const value64_1 = XXH.h64(stringData, seed);
value64_1.toString();
value64_1.toString(16);
value64_1.toNumber();

const value64_2 = XXH.h64(seed).update(stringData).digest();
value64_2.toString();
value64_2.toString(16);
value64_2.toNumber();

// Initialise with ArrayBuffer
XXH.h32(arrayBufferData, seed);
XXH.h64(arrayBufferData, seed);

// Initialise with Buffer
XXH.h32(bufferData, seed);
XXH.h64(bufferData, seed);
