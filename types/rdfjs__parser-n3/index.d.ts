// Type definitions for @rdfjs/parser-n3 2.0
// Project: https://github.com/rdfjs-base/parser-n3
// Definitions by: tpluscode <https://github.com/tpluscode>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { Sink, Stream, DataFactory, BaseQuad, Quad } from 'rdf-js';
import { EventEmitter } from 'events';

export interface ParserOptions {
    baseIRI?: string | undefined;
    factory?: DataFactory | undefined;
}

export default class Parser<Q extends BaseQuad = Quad> implements Sink<EventEmitter, Stream<Q>> {
    constructor(options?: ParserOptions);

    import(stream: EventEmitter, options?: ParserOptions): Stream<Q>;
}
