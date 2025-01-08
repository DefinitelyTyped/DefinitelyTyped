import * as lzma from "lzma";

lzma.compress("This is a test string", 9, (result, error) => {
    if (error) {
        console.error("Error");
    } else {
        const compressed: Uint8Array = result;
        console.log("Compressed data:", compressed);
    }
}, (percent) => {
    console.log(`${percent}% done`);
});

const compressed = lzma.compress("This is a sync compress test string");
console.log("Sync decompression result:", lzma.decompress(compressed));
lzma.decompress(compressed, (result, error) => {
    if (error) {
        console.error("Error");
    } else {
        console.log("Async decompression result:", result);
    }
}, (percent) => {
    console.log(`${percent}% done`);
});
