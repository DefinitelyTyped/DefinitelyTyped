import { BaseQuad, Quad, Sink, Stream } from "@rdfjs/types";
import { EventEmitter } from "events";
import { Context } from "jsonld/jsonld-spec.js";

export interface SerializerOptions {
    baseIRI?: string | undefined;
    context?: Context | undefined;
    compact?: boolean | undefined;
    encoding?: "string" | "object" | undefined;
    flatten?: boolean | undefined;
    frame?: boolean | undefined;
    skipContext?: boolean | undefined;
    prettyPrint?: boolean | undefined;
}

export default class Serializer<Q extends BaseQuad = Quad> implements Sink<Stream<Q>, EventEmitter> {
    constructor(options?: SerializerOptions);

    import(stream: Stream<Q>, options?: SerializerOptions): EventEmitter;
}
