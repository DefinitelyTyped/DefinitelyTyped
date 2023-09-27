/// <reference types="node" />

import encode = require("png-chunks-encode");
import path = require("path");
import fs = require("fs");

const newBuffer = encode([{ name: "tEXt", data: Buffer.from("test") /* this is not actually correct */ }]);

fs.writeFileSync(path.join(__dirname, "test-out.png"), newBuffer);
