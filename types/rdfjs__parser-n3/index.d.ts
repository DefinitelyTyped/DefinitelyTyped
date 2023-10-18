import { EventEmitter } from "events";
import { BaseQuad, DataFactory, Quad, Sink, Stream } from "rdf-js";

export interface ParserOptions {
    baseIRI?: string | undefined;
    factory?: DataFactory | undefined;
}

export default class Parser<Q extends BaseQuad = Quad> implements Sink<EventEmitter, Stream<Q>> {
    constructor(options?: ParserOptions);

    import(stream: EventEmitter, options?: ParserOptions): Stream<Q>;
}
