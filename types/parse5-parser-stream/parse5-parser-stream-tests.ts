import * as parse5 from "parse5";
import defaultAdapter = require("parse5/lib/tree-adapters/default");
import * as ParserStream from "parse5-parser-stream";
import { createReadStream } from "fs";

let parser = new ParserStream<parse5.Document>();

parser = new ParserStream<parse5.Document>({ sourceCodeLocationInfo: true });
parser = new ParserStream<parse5.Document>({ treeAdapter: defaultAdapter });
parser = new ParserStream<parse5.Document>({
    sourceCodeLocationInfo: true,
    treeAdapter: defaultAdapter
});
parser = new ParserStream<parse5.Document>({
    sourceCodeLocationInfo: true,
    treeAdapter: defaultAdapter
});

parser.document; // $ExpectType Document

parser
    .on(
        "script",
        (
            element: parse5.Element,
            documentWrite: (html: string) => void,
            resume: () => {}
        ) => {}
    )
    .on("finish", () => {});

createReadStream("file").pipe(parser);
