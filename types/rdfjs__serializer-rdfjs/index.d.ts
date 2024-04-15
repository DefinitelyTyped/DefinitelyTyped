import { BaseQuad, Quad, Sink, Stream } from "@rdfjs/types";
import { EventEmitter } from "events";

export interface SerializerOptions {
    module?: "commonjs" | "ts" | undefined;
}

export default class Serializer<Q extends BaseQuad = Quad> implements Sink<Stream<Q>, EventEmitter> {
    constructor(options?: SerializerOptions);

    import(stream: Stream<Q>, options?: SerializerOptions): EventEmitter;
    transform(quads: Iterable<Q>): string;
}
