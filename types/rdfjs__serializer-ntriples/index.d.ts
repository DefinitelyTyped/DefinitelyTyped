import { BaseQuad, Quad, Sink, Stream } from "@rdfjs/types";
import { EventEmitter } from "events";

export default class Serializer<Q extends BaseQuad = Quad> implements Sink<Stream<Q>, EventEmitter> {
    import(stream: Stream<Q>): EventEmitter;
}
