/// <reference types="node" />

import extract = require("png-chunks-extract");
import path = require("path");
import fs = require("fs");

// Load example image
const sourceBuffer = fs.readFileSync(path.join(__dirname, "test.png"));
const chunks = extract(sourceBuffer);

// Print chunks
for (const chunk of chunks) {
    console.log(chunk.name, chunk.data.length);
}
