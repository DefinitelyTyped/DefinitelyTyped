// Type definitions for @rdfjs/parser-jsonld 1.2
// Project: https://github.com/rdfjs-base/parser-jsonld
// Definitions by: Chris Wilkinson <https://github.com/thewilkybarkid>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { Context } from 'jsonld/jsonld-spec';
import { DataFactory, Sink, Stream, BaseQuad, Quad } from 'rdf-js';
import { EventEmitter } from 'events';

declare namespace Parser {
    interface ParserOptions {
        baseIRI?: string;
        context?: Context;
        factory?: DataFactory;
    }
}

declare class Parser<Q extends BaseQuad = Quad> implements Sink<EventEmitter, Stream<Q>> {
    constructor(options?: Parser.ParserOptions);

    import(stream: EventEmitter, options?: Parser.ParserOptions): Stream<Q>;
}

export = Parser;
