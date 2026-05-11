import { DataFactory, DatasetCore } from "@rdfjs/types";
import { Readable, Transform } from "stream";

interface ParserOptions {
    metadata: DatasetCore;
    baseIRI?: string;
    factory?: DataFactory;
    timezone?: string;
    sheet?: number;
}

declare class Parser {
    constructor(options: ParserOptions);
    import(input: Readable, options?: ParserOptions): Transform;
    static import(input: Readable, options: ParserOptions): Transform;
}

export = Parser;
