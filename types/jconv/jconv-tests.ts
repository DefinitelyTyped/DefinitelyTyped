import jconv = require("jconv");

import * as fs from "fs";

function decodeEncode() {
    // Get a Buffer from something and decode it
    const buffer = fs.readFileSync("shift_jis.txt");
    const decoded = jconv.decode(buffer, "SJIS");

    // Encode the string again and save it
    const encoded = jconv.encode(decoded, "EUCJP");
    fs.writeFileSync("eucjp.txt", encoded);
}

function convert() {
    // Use convert to go from Shift_JIS straight to EUCJP
    const input = fs.readFileSync("shift_jis.txt");
    const output = jconv.convert(input, "SJIS", "EUCJP");
    fs.writeFileSync("eucjp.txt", output);
}

decodeEncode();
convert();
