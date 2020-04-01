import { DataFactory, BaseQuad, Quad, Stream } from 'rdf-js';
import { QueryOptions, Query, QueryInit } from '.';
import { Endpoint } from './Endpoint';
import { Readable } from 'stream';

declare namespace StreamQuery {
    interface StreamQueryInit<Q extends BaseQuad = Quad> extends QueryInit {
        factory?: DataFactory<Q>;
    }

    type StreamQuery<Q extends BaseQuad = Quad> = Query<boolean, Stream<Q>, Readable, void>;
}

declare class StreamQuery<Q extends BaseQuad = Quad> implements StreamQuery.StreamQuery<Q> {
    constructor(options: StreamQuery.StreamQueryInit<Q>);
    endpoint: Endpoint;
    ask(query: string, options?: QueryOptions): Promise<boolean>;
    construct(query: string, options?: QueryOptions): Promise<Stream<Q>>;
    select(query: string, options?: QueryOptions): Promise<Readable>;
    update(query: string, options?: QueryOptions): Promise<void>;
}

export = StreamQuery;
