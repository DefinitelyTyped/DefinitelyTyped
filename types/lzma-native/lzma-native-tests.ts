import * as lzma from "lzma-native";
import * as fs from "fs";

const compressor = lzma.createCompressor();
const input = fs.createReadStream("tsconfig.json");
const output = fs.createWriteStream("tsconfig.json.xz");

input.pipe(compressor).pipe(output);

lzma.compress("Banana", undefined, result => {
    console.log(result); // <Buffer fd 37 7a 58 5a 00 00 01 69 22 de 36 02 00 21 ...>
});

lzma.compress("Bananas", 6, result => {
    lzma.decompress(result, undefined, decompressedResult => {
        console.log(decompressedResult.toString() === "Bananas");
    });
});

lzma.LZMA().compress("Bananas", 4, result => {
    lzma.LZMA().decompress(result, decompressedResult => {
        console.log("Bananas" === decompressedResult.toString());
    });
});

const comp = lzma.Compressor();

process.stdin.pipe(comp).pipe(process.stdout);
lzma.crc32("Banana"); // => 69690105
lzma.checkSize("CHECK_SHA256"); // => 16
lzma.checkSize("CHECK_CRC32"); // => 4
lzma.easyDecoderMemusage(6); // => 8454192
lzma.easyEncoderMemusage(6); // => 97620499
lzma.versionString(); // => '5.2.3'
lzma.versionNumber(); // => 50020012
lzma.isXZ("Banana"); // => false

fs.open("test/hamlet.txt.xz", "r", (err: any, fd: number) => {
    if (err) return;
    // handle error
    lzma.parseFileIndexFD(fd, (err, info) => {
        // handle error
        if (err) {
            console.log(err);
        }
        // do something with e.g. info.uncompressedSize

        fs.close(fd, (err: any) => {
            /* handle error */
            if (err) {
                console.log(err);
            }
        });
    });
});
