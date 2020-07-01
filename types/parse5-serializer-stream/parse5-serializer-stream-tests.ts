import { parse, TreeAdapter } from "parse5";
import * as SerializerStream from "parse5-serializer-stream";
import { createReadStream, createWriteStream } from "fs";

const document = parse("<html>");
const defaultAdapter = new Object() as TreeAdapter;
let serializer = new SerializerStream(document);

serializer = new SerializerStream(document, {
    treeAdapter: defaultAdapter
});
serializer = new SerializerStream(document, {
    treeAdapter: defaultAdapter
});

serializer.pipe(createWriteStream("file"));
