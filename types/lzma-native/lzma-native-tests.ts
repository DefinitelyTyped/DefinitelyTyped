import * as lzma from "lzma-native";
import { CHECK_CRC32 } from "lzma-native";
var fs = require("fs");

var compressor = lzma.createCompressor();
var input = fs.createReadStream("tsconfig.json");
var output = fs.createWriteStream("tsconfig.json.xz");

input.pipe(compressor).pipe(output);

lzma.compress("Banana", undefined, function(result) {
    console.log(result); // <Buffer fd 37 7a 58 5a 00 00 01 69 22 de 36 02 00 21 ...>
});

lzma.compress("Bananas", 6, function(result) {
    lzma.decompress(result, undefined, function(decompressedResult) {
        console.log(decompressedResult.toString() == "Bananas");
    });
});

lzma.LZMA().compress("Bananas", 4, function(result) {
    lzma.LZMA().decompress(result, function(decompressedResult) {
        console.log("Bananas" == decompressedResult.toString());
    });
});

var compressor = lzma.Compressor();

process.stdin.pipe(compressor).pipe(process.stdout);
lzma.crc32("Banana"); // => 69690105
lzma.checkSize("CHECK_SHA256"); // => 16
lzma.checkSize("CHECK_CRC32"); // => 4
lzma.easyDecoderMemusage(6); // => 8454192
lzma.easyEncoderMemusage(6); // => 97620499
lzma.versionString(); // => '5.2.3'
lzma.versionNumber(); // => 50020012
lzma.isXZ("Banana"); // => false

fs.open("test/hamlet.txt.xz", "r", function(err: string, fd: number) {
    // handle error
    lzma.parseFileIndexFD(fd, function(err, info) {
        // handle error
        if (err) {
            console.log(err);
        }
        // do something with e.g. info.uncompressedSize

        fs.close(fd, function(err: any) {
            /* handle error */
            if (err) {
                console.log(err);
            }
        });
    });
});
