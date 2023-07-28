// Type definitions for @rdfjs/parser-jsonld 2.1
// Project: https://github.com/rdfjs-base/parser-jsonld
// Definitions by: Chris Wilkinson <https://github.com/thewilkybarkid>
//                 tpluscode <https://github.com/tpluscode>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { Context } from 'jsonld/jsonld-spec.js';
import { DataFactory, Sink, Stream, BaseQuad, Quad } from 'rdf-js';
import { EventEmitter } from 'events';

export interface ParserOptions {
    baseIRI?: string | undefined;
    context?: Context | undefined;
    factory?: DataFactory | undefined;
}

export default class Parser<Q extends BaseQuad = Quad> implements Sink<EventEmitter, Stream<Q>> {
    constructor(options?: ParserOptions);

    import(stream: EventEmitter, options?: ParserOptions): Stream<Q>;
}
