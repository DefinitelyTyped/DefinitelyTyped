import { decode, encode } from "bmp-js";
import { readFileSync, writeFileSync } from "fs";

const bmpBuffer = readFileSync('grayscale.bmp');
const decoded = decode(bmpBuffer);
const { width, height, data } = decoded;
console.log("got bmp with %s x %s (%s bytes)", width, height, data.byteLength);
writeFileSync("testoutput.bmp", encode(decoded).data);
