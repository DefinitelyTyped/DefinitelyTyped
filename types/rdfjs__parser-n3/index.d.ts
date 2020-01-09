// Type definitions for @rdfjs/parser-n3 1.1
// Project: https://github.com/rdfjs-base/parser-n3
// Definitions by: tpluscode <https://github.com/tpluscode>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { Sink, Stream, DataFactory, BaseQuad, Quad } from 'rdf-js';

interface ParserOptions<Q extends BaseQuad = Quad> {
    baseIRI?: string;
    factory?: DataFactory<Q>;
}

declare class Parser<Q extends BaseQuad = Quad> implements Sink<Q> {
    constructor(options?: ParserOptions<Q>);

    import(stream: Stream<Q>, options?: ParserOptions<Q>): Stream<Q>;
}

export = Parser;
