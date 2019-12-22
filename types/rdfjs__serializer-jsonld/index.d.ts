// Type definitions for @rdfjs/serializer-jsonld 1.2
// Project: https://github.com/rdfjs-base/serializer-jsonld
// Definitions by: Chris Wilkinson <https://github.com/thewilkybarkid>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { EventEmitter } from 'events';
import { Sink, Stream } from 'rdf-js';

declare namespace Serializer {
    interface SerializerOptions {
        encoding?: 'string' | 'object';
    }
}

declare class Serializer implements Sink {
    constructor(options?: Serializer.SerializerOptions);

    import(stream: Stream, options?: Serializer.SerializerOptions): EventEmitter;
}

export = Serializer;
