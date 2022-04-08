import * as parse5 from "parse5";
import defaultAdapter = require("parse5/lib/tree-adapters/default");
import * as PlainTextConversionStream from "parse5-plain-text-conversion-stream";
import { createReadStream } from "fs";

let converter = new PlainTextConversionStream<parse5.Document>();

converter = new PlainTextConversionStream<parse5.Document>({
    sourceCodeLocationInfo: true
});
converter = new PlainTextConversionStream<parse5.Document>({
    treeAdapter: defaultAdapter
});
converter = new PlainTextConversionStream<parse5.Document>({
    sourceCodeLocationInfo: true,
    treeAdapter: defaultAdapter
});
converter = new PlainTextConversionStream<parse5.Document>({
    sourceCodeLocationInfo: true,
    treeAdapter: defaultAdapter
});

converter.document; // $ExpectType Document

converter.on("finish", () => {});

createReadStream("file").pipe(converter);
