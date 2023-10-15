// Type definitions for @rdfjs/serializer-jsonld-ext 2.0
// Project: https://github.com/rdfjs-base/serializer-jsonld-ext
// Definitions by: Chris Wilkinson <https://github.com/thewilkybarkid>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { EventEmitter } from "events";
import { Context } from "jsonld/jsonld-spec";
import { BaseQuad, Quad, Sink, Stream } from "rdf-js";

declare namespace Serializer {
    interface SerializerOptions {
        context?: Context | undefined;
        compact?: boolean | undefined;
        encoding?: "string" | "object" | undefined;
        flatten?: boolean | undefined;
        frame?: boolean | undefined;
        skipContext?: boolean | undefined;
        skipGraphProperty?: boolean | undefined;
    }
}

declare class Serializer<Q extends BaseQuad = Quad> implements Sink<Stream<Q>, EventEmitter> {
    constructor(options?: Serializer.SerializerOptions);

    import(stream: Stream<Q>, options?: Serializer.SerializerOptions): EventEmitter;
}

export = Serializer;
