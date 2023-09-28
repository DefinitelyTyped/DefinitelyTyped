import { parse } from "parse5";
import defaultAdapter = require("parse5/lib/tree-adapters/default");
import { createReadStream, createWriteStream } from "fs";
import * as SerializerStream from "parse5-serializer-stream";

const document = parse("<html>");
let serializer = new SerializerStream(document);

serializer = new SerializerStream(document, {
    treeAdapter: defaultAdapter,
});
serializer = new SerializerStream(document, {
    treeAdapter: defaultAdapter,
});

serializer.pipe(createWriteStream("file"));
