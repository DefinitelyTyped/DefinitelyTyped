import { Duplex } from 'stream';
import { DataFactory, BaseQuad, Quad, Term } from 'rdf-js';

declare namespace ResultParser {
    type ResultRow = Record<string, Term>;

    interface ResultParserInit<Q extends BaseQuad = Quad> {
        factory: DataFactory<Q>;
    }
}

declare class ResultParser<Q extends BaseQuad = Quad> extends Duplex {
    constructor(options?: ResultParser.ResultParserInit<Q>)
}

export = ResultParser;
