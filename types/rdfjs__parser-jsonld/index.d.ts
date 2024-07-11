import { BaseQuad, DataFactory, Quad, Sink, Stream } from "@rdfjs/types";
import { EventEmitter } from "events";
import { Context } from "jsonld/jsonld-spec.js";

export interface DocumentLoader {
    load(url: string): Promise<unknown>;
}

export interface ParserOptions {
    baseIRI?: string | undefined;
    context?: Context | undefined;
    factory?: DataFactory | undefined;
    documentLoader?: DocumentLoader | undefined;
}

export default class Parser<Q extends BaseQuad = Quad> implements Sink<EventEmitter, Stream<Q>> {
    constructor(options?: ParserOptions);

    import(stream: EventEmitter, options?: ParserOptions): Stream<Q>;
}
