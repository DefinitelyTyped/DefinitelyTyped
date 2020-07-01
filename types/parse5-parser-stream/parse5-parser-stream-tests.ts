import * as parse5 from "parse5";
import * as ParserStream from "parse5-parser-stream";
import { createReadStream } from "fs";

const defaultAdapter = new Object() as parse5.TreeAdapter;
let parser = new ParserStream<parse5.DefaultTreeDocument>();

parser = new ParserStream<parse5.DefaultTreeDocument>({ sourceCodeLocationInfo: true });
parser = new ParserStream<parse5.DefaultTreeDocument>({ treeAdapter: defaultAdapter });
parser = new ParserStream<parse5.DefaultTreeDocument>({
    sourceCodeLocationInfo: true,
    treeAdapter: defaultAdapter
});
parser = new ParserStream<parse5.DefaultTreeDocument>({
    sourceCodeLocationInfo: true,
    treeAdapter: defaultAdapter
});

parser.document; // $ExpectType DefaultTreeDocument

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
