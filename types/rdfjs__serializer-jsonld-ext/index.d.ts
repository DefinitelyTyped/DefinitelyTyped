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
