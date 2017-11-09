import * as crc from "crc";
import * as fs from "fs";

// tests move from the readme of the module

crc.crc32('hello').toString(16);
// "3610a686"

crc.crc32(fs.readFileSync('README.md', 'utf8')).toString(16);
// "127ad531"
crc.crc32(fs.readFileSync('README.md')).toString(16);
// "127ad531"

let value = crc.crc32('one');
value = crc.crc32('two', value);
value = crc.crc32('three', value);
value.toString(16);
