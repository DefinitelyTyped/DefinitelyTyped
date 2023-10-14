// Type definitions for @rdfjs/serializer-ntriples 2.0
// Project: https://github.com/rdfjs-base/serializer-ntriples
// Definitions by: tpluscode <https://github.com/tpluscode>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { EventEmitter } from "events";
import { BaseQuad, Quad, Sink, Stream } from "rdf-js";

export default class Serializer<Q extends BaseQuad = Quad> implements Sink<Stream<Q>, EventEmitter> {
    import(stream: Stream<Q>): EventEmitter;
}
