import { compress, decompress } from "lzma";

const compressedValue = compress("Hello World!", 1); // $ExpressType Uint8Array
decompress(compressedValue); // $ExpressType string | Uint8Array

// $ExpressType void
compress("Hello World!", 1, (result, error) => {
    if (result) {
        // $ExpressType void
        decompress(result, (result2, error) => { }, (progress) => { });
    }
}, (progress) => { });
