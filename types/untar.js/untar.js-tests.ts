import { untar } from "untar.js";

const buffer = new ArrayBuffer(0);
const files = untar(buffer);
files.forEach(file => {
    file.name; // $ExpectType string
    file.filename; // $ExpectType string
    file.size; // $ExpectType number
    file.fileData; // $ExpectType Uint8Array
});
