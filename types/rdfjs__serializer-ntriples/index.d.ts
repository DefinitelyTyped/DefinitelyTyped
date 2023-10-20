import { EventEmitter } from "events";
import { BaseQuad, Quad, Sink, Stream } from "rdf-js";

export default class Serializer<Q extends BaseQuad = Quad> implements Sink<Stream<Q>, EventEmitter> {
    import(stream: Stream<Q>): EventEmitter;
}
