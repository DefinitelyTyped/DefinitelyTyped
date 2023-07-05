// Type definitions for @rdfjs/serializer-rdfjs 0.1
// Project: https://github.com/rdfjs-base/serializer-rdfjs
// Definitions by: tpluscode <https://github.com/tpluscode>
//                 Benjamin Hofstetter <https://github.com/BenjaminHofstetter>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { EventEmitter } from 'events';
import { Sink, Stream, BaseQuad, Quad } from 'rdf-js';

export interface SerializerOptions {
    module?: 'commonjs' | 'ts' | undefined;
}

export default class Serializer<Q extends BaseQuad = Quad> implements Sink<Stream<Q>, EventEmitter> {
    constructor(options?: SerializerOptions);

    import(stream: Stream<Q>, options?: SerializerOptions): EventEmitter;
    transform(quads: Iterable<Q>): string;
}
