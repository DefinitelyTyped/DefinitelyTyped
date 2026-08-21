import wawoff2 = require("wawoff2");

let result: Promise<Uint8Array> = wawoff2.compress(Buffer.from([3, 5, 9001]));
result = wawoff2.compress(new Uint8Array([0, 3, 5]));
result = wawoff2.decompress(Buffer.from([9001, 39, 1373]));
result = wawoff2.decompress(new Uint8Array([0, 3, 5]));
