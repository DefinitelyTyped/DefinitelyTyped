import { compress, uncompress } from "snappyjs";

const buffer1 = new ArrayBuffer(100);
const buffer2 = new Uint8Array(100);

// @ts-expect-error Missing arg
compress();
// @ts-expect-error Invalid arg
compress([]);
compress(buffer1); // $ExpectType ArrayBuffer
compress(buffer2); // $ExpectType Uint8Array || Uint8Array<ArrayBuffer>

// @ts-expect-error Missing arg
uncompress();
// @ts-expect-error Invalid arg
uncompress([]);
uncompress(buffer1); // $ExpectType ArrayBuffer
uncompress(buffer2); // $ExpectType Uint8Array || Uint8Array<ArrayBuffer>
uncompress(buffer1, 100); // $ExpectType ArrayBuffer
uncompress(buffer2, 100); // $ExpectType Uint8Array || Uint8Array<ArrayBuffer>
