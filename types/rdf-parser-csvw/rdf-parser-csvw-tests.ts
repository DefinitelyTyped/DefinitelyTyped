import Parser = require("rdf-parser-csvw");
import { DataFactory, DatasetCore } from "@rdfjs/types";
import { Readable, Transform } from "stream";

let input: Readable = <any> {};
let metadata: DatasetCore = <any> {};

const minimalOptions = {
    metadata,
    baseIRI: "http://example.org/",
};

const fullOptions = {
    metadata,
    baseIRI: "http://example.org/",
    factory: <DataFactory> {},
    timezone: "UTC",
    relaxColumnCount: true,
    skipLinesWithError: true,
};

let parser = new Parser({
    metadata,
    baseIRI: "http://example.org/",
});

parser = new Parser(fullOptions);

let output: Transform = parser.import(input);
output = parser.import(input, minimalOptions);
output = parser.import(input, fullOptions);
output = Parser.import(input, minimalOptions);
output = Parser.import(input, fullOptions);
