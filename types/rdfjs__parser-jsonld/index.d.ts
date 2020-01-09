// Type definitions for @rdfjs/parser-jsonld 1.2
// Project: https://github.com/rdfjs-base/parser-jsonld
// Definitions by: Chris Wilkinson <https://github.com/thewilkybarkid>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { Context } from 'jsonld/jsonld-spec';
import { DataFactory, Sink, Stream, BaseQuad, Quad } from 'rdf-js';

declare namespace Parser {
    interface ParserOptions<Q extends BaseQuad = Quad> {
        baseIRI?: string;
        context?: Context;
        factory?: DataFactory<Q>;
    }
}

declare class Parser<Q extends BaseQuad = Quad> implements Sink<Q> {
    constructor(options?: Parser.ParserOptions<Q>);

    import(stream: Stream<Q>, options?: Parser.ParserOptions<Q>): Stream<Q>;
}

export = Parser;
