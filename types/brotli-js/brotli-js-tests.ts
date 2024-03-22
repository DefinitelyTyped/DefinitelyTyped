import * as brotli from "brotli-js";

let str = "test txt";

let buf = new ArrayBuffer(str.length);

let buffer = new Uint8Array(buf);

let compressData = brotli.compressArray(buffer, 6);

let decompressData = brotli.decompressArray(compressData);
