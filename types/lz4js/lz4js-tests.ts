import { compress, compressBlock, decompress, makeBuffer } from "lz4js";

// $ExpectType Uint8Array<ArrayBuffer> || Uint8Array
const compressed = compress(new Array(128));

// $ExpectType Uint8Array<ArrayBuffer> || Uint8Array
const decompressed = decompress(compressed);

// $ExpectType Uint8Array<ArrayBuffer> || Uint8Array
const blockBuf = makeBuffer(5 << 20);

// $ExpectType number
const compressedBlock = compressBlock(new Uint8Array(59), blockBuf, 0, 59, new Uint32Array(1 << 16));
