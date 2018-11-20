import * as parse5 from "parse5";
import * as PlainTextConversionStream from "parse5-plain-text-conversion-stream";
import { createReadStream } from "fs";

const defaultAdapter = new Object() as parse5.TreeAdapter;
let converter = new PlainTextConversionStream<parse5.DefaultTreeDocument>();

converter = new PlainTextConversionStream<parse5.DefaultTreeDocument>({
    sourceCodeLocationInfo: true
});
converter = new PlainTextConversionStream<parse5.DefaultTreeDocument>({
    treeAdapter: defaultAdapter
});
converter = new PlainTextConversionStream<parse5.DefaultTreeDocument>({
    sourceCodeLocationInfo: true,
    treeAdapter: defaultAdapter
});
converter = new PlainTextConversionStream<parse5.DefaultTreeDocument>({
    sourceCodeLocationInfo: true,
    treeAdapter: defaultAdapter
});

converter.document; // $ExpectType DefaultTreeDocument

converter.on("finish", () => {});

createReadStream("file").pipe(converter);
