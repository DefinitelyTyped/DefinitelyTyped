// Type definitions for @rdfjs/serializer-jsonld 2.0
// Project: https://github.com/rdfjs-base/serializer-jsonld
// Definitions by: Chris Wilkinson <https://github.com/thewilkybarkid>
//                 tpluscode <https://github.com/tpluscode>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { EventEmitter } from "events";
import { BaseQuad, Quad, Sink, Stream } from "rdf-js";

export interface SerializerOptions {
    encoding?: "string" | "object" | undefined;
}

export default class Serializer<Q extends BaseQuad = Quad> implements Sink<Stream<Q>, EventEmitter> {
    constructor(options?: SerializerOptions);

    import(stream: Stream<Q>, options?: SerializerOptions): EventEmitter;
}
