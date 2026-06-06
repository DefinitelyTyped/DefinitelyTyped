import { BaseQuad, DataFactory, Quad, Term } from "@rdfjs/types";
import { Transform } from "stream";

export type ResultRow = Record<string, Term>;

declare class ResultParser<Q extends BaseQuad = Quad> extends Transform {
    constructor(options?: {
        factory: DataFactory<Q>;
    });
}

export default ResultParser;
