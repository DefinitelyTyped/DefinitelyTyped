import * as secureRandom from 'secure-random';

const byteCount = 10;

// $ExpectType number[]
const secureRandomArray = secureRandom(byteCount, { type: 'Array' });

// $ExpectType Buffer
const secureRandomBuffer = secureRandom(byteCount, { type: 'Buffer' });

// $ExpectType Uint8Array
const secureRandomUint8Array = secureRandom(byteCount, { type: 'Uint8Array' });

// @ts-expect-error
const error = secureRandom(byteCount, { type: 'unsupported type' });

// $ExpectType number[]
const randomArray = secureRandom.randomArray(byteCount);

// $ExpectType Buffer
const randomBuffer = secureRandom.randomBuffer(byteCount);

// $ExpectType Uint8Array
const randomUint8Array = secureRandom.randomUint8Array(byteCount);
