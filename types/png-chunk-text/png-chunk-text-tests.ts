/// <reference types="node" />

import extract = require("png-chunks-extract");
import encode = require("png-chunks-encode");
import text = require("png-chunk-text");
import path = require("path");
import fs = require("fs");

// Load example image
const sourceBuffer = fs.readFileSync(path.join(__dirname, "test.png"));
const chunks = extract(sourceBuffer);

// Print a text chunk if there is one
const textChunk = chunks.find(c => c.name === "tEXt");
if (textChunk) {
    const textData = text.decode(textChunk.data);
    console.log(textData);
}

// Add new chunks before the IEND chunk
chunks.splice(-1, 0, text.encode("hello", "world"));
chunks.splice(-1, 0, text.encode("lorem", "ipsum"));

// Save the new image
const newBuffer = encode(chunks);
fs.writeFileSync(path.join(__dirname, "test-out.png"), newBuffer);
