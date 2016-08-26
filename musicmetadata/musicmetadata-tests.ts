/// <reference path="../node/node.d.ts" />
/// <reference path="./musicmetadata.d.ts" />

import * as fs from "fs";
import * as mm from "musicmetadata";

mm(fs.createReadStream("hype-train.mp3"), (err: Error, metadata: MM.Metadata) => {
    if (err) throw err;
    console.log(`Parsed song ${metadata.title}`);
});
