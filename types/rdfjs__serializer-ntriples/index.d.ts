// Type definitions for @rdfjs/serializer-ntriples 1.0
// Project: https://github.com/rdfjs-base/serializer-ntriples
// Definitions by: tpluscode <https://github.com/tpluscode>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { EventEmitter } from 'events';
import { Sink, Stream, BaseQuad, Quad } from 'rdf-js';

declare class Serializer<Q extends BaseQuad = Quad> implements Sink<Stream<Q>, EventEmitter> {
    import(stream: Stream<Q>): EventEmitter;
}

export = Serializer;
