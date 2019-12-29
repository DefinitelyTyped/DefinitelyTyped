// Type definitions for @rdfjs/parser-n3 1.1
// Project: https://github.com/rdfjs-base/parser-n3
// Definitions by: tpluscode <https://github.com/tpluscode>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { EventEmitter } from 'events';
import { Sink, Stream, DataFactory } from 'rdf-js';

interface ParserOptions {
    baseIRI?: string;
    factory?: DataFactory;
}

declare class Parser implements Sink {
    constructor(options?: ParserOptions);

    import(stream: Stream, options?: ParserOptions): EventEmitter;
}

export = Parser;
