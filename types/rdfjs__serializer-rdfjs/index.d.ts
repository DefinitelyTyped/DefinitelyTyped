// Type definitions for @rdfjs/serializer-rdfjs 0.0
// Project: https://github.com/rdfjs-base/serializer-rdfjs
// Definitions by: tpluscode <https://github.com/tpluscode>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { EventEmitter } from 'events';
import { Sink, Stream, BaseQuad, Quad } from 'rdf-js';

declare namespace Serializer {
    interface SerializerOptions {
        module?: 'esm' | 'ts' | string;
    }
}

declare class Serializer<Q extends BaseQuad = Quad> implements Sink<Stream<Q>, EventEmitter> {
    constructor(options?: Serializer.SerializerOptions);

    import(stream: Stream<Q>, options?: Serializer.SerializerOptions): EventEmitter;
    transform(quads: Iterable<Q>): string;
}

export = Serializer;
