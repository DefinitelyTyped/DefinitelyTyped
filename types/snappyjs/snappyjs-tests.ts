import { compress, decompress } from "snappyjs";

const buffer1 = new ArrayBuffer(100);
const buffer2 = new Uint8Array(100);

// @ts-expect-error Missing arg
compress();
// @ts-expect-error Invalid arg
compress([]);
compress(buffer1); // $ExpectType ArrayBuffer
compress(buffer2); // $ExpectType Uint8Array

// @ts-expect-error Missing arg
decompress();
// @ts-expect-error Invalid arg
decompress([]);
decompress(buffer1); // $ExpectType ArrayBuffer
decompress(buffer2); // $ExpectType Uint8Array
decompress(buffer1, 100); // $ExpectType ArrayBuffer
decompress(buffer2, 100); // $ExpectType Uint8Array
