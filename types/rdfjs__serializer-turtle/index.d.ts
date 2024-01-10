import {EventEmitter} from 'events';
import {BaseQuad, Quad, Sink, Stream} from "@rdfjs/types";
import PrefixMap from '@rdfjs/prefix-map/PrefixMap.js';

export interface SerializerOptions {
    baseIRI?: string | undefined;
    output?: string[] | undefined;
    prefixes?: PrefixMap | undefined;
}

export default class Serializer<Q extends BaseQuad = Quad> implements Sink<Stream<Q>, EventEmitter> {
    constructor(options?: SerializerOptions);

    import(stream: Stream<Q>, options?: SerializerOptions): EventEmitter;

    transform(quads: Iterable<Q>): string
}
