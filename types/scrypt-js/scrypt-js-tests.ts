import scrypt = require('scrypt-js');

const testBuffer = Buffer.from('test');
const testCB = (err: Error | undefined | null, progress: number, key?: ReadonlyArray<number>) => {};

// $ExpectType void
scrypt(testBuffer, testBuffer, 1, 1, 1, 1, testCB);
