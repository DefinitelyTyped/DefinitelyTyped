import { EventEmitter } from "events";
import { BaseQuad, Quad, Sink, Stream } from "rdf-js";

export interface SerializerOptions {
    encoding?: "string" | "object" | undefined;
}

export default class Serializer<Q extends BaseQuad = Quad> implements Sink<Stream<Q>, EventEmitter> {
    constructor(options?: SerializerOptions);

    import(stream: Stream<Q>, options?: SerializerOptions): EventEmitter;
}
