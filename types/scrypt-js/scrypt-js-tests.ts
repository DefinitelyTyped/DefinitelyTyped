const testBuffer = Buffer.from('test');
const testArray = [74, 65, 73, 74];
const testUint8Array = Uint8Array.from(testArray);
const testCB = (err: Error | undefined | null, progress: number, key?: ReadonlyArray<number>) => {};

scrypt(testBuffer, testBuffer, 1, 1, 1, 1, testCB); // $ExpectType void
scrypt(testArray, testArray, 1, 1, 1, 1, testCB); // $ExpectType void
scrypt(testUint8Array, testUint8Array, 1, 1, 1, 1, testCB); // $ExpectType void
