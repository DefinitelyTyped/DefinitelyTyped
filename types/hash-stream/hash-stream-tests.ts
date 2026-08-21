import getHash = require("hash-stream");
import { createReadStream } from "fs";

getHash("image.png", "sha256", (err, hash) => {
    err; // $ExpectType Error | null
    hash; // $ExpectType Buffer || Buffer<ArrayBufferLike>
    const str = hash.toString("hex");
});
getHash("image.png", "sha256"); // $ExpectType Promise<Buffer> || Promise<Buffer<ArrayBufferLike>>

getHash(createReadStream("image.png"), "sha256", (err, hash) => {
    err; // $ExpectType any
    hash; // $ExpectType Buffer || Buffer<ArrayBufferLike>
});
getHash(createReadStream("image.png"), "sha256"); // $ExpectType Promise<Buffer> || Promise<Buffer<ArrayBufferLike>>
