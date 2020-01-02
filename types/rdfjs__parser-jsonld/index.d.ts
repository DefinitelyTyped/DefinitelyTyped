// Type definitions for @rdfjs/parser-jsonld 1.2
// Project: https://github.com/rdfjs-base/parser-jsonld
// Definitions by: Chris Wilkinson <https://github.com/thewilkybarkid>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { EventEmitter } from 'events';
import { Context } from 'jsonld/jsonld-spec';
import { DataFactory, Sink, Stream } from 'rdf-js';

declare namespace Parser {
    interface ParserOptions {
        baseIRI?: string;
        context?: Context;
        factory?: DataFactory;
    }
}

declare class Parser implements Sink {
    constructor(options?: Parser.ParserOptions);

    import(stream: Stream, options?: Parser.ParserOptions): EventEmitter;
}

export = Parser;
