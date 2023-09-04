import { CRC32Stream, DeflateCRC32Stream } from "crc32-stream";
import { createReadStream } from "fs";

const readStream = createReadStream("test.txt");

const crc32 = new CRC32Stream(); // $ExpectType CRC32Stream
const deflated = new DeflateCRC32Stream(); // $ExpectType DeflateCRC32Stream

// CRC32 using pipe mode
crc32.on("end", () => {
    crc32.digest(); // $ExpectType Buffer
    crc32.digest("hex"); // $ExpectType string
    crc32.digest("base64"); // $ExpectType string
    crc32.digest("binary"); // $ExpectType string
    crc32.hex(); // $ExpectType string
    crc32.size(); // $ExpectType number
});
readStream.pipe(crc32);

// DeflateCRC32 using write mode
deflated.on("end", () => {
    deflated.digest(); // $ExpectType Buffer
    deflated.digest("hex"); // $ExpectType string
    deflated.digest("base64"); // $ExpectType string
    deflated.digest("binary"); // $ExpectType string
    deflated.hex(); // $ExpectType string
    deflated.size(); // $ExpectType number
    deflated.size(true); // $ExpectType number
});
deflated.write("Hello world!");
deflated.end();
