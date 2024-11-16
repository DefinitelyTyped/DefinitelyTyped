import { compress, decompress } from "lz4js";

let compressed = compress(new Array(128));

let decompressed = decompress(compressed);
