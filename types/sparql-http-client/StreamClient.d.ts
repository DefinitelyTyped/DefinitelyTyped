import { BaseQuad, Quad, DataFactory, Stream } from 'rdf-js';
import BaseClient = require('./BaseClient');
import StreamQuery = require('./StreamQuery');
import StreamStore = require('./StreamStore');
import { Endpoint, EndpointOptions } from './Endpoint';
import { Readable } from 'stream';

interface Constructor<T, Q extends BaseQuad = Quad> {
    new (options: { endpoint: Endpoint; factory: DataFactory<Q>; }): T;
}

declare namespace StreamClient {
    interface QueryOptions {
        headers?: HeadersInit;
        operation?: 'get' | 'postUrlencoded' | 'postDirect';
    }

    interface QueryInit {
        endpoint: Endpoint;
    }

    interface SelectQuery<TSelect> {
        select(query: string, options?: QueryOptions): Promise<TSelect>;
    }

    interface ConstructQuery<TConstruct> {
        construct(query: string, options?: QueryOptions): Promise<TConstruct>;
    }

    interface AskQuery<TAsk> {
        ask(query: string, options?: QueryOptions): Promise<TAsk>;
    }

    interface UpdateQuery<TUpdate> {
        update(query: string, options?: QueryOptions): Promise<TUpdate>;
    }

    interface Query<TAsk = any, TConstruct = any, TSelect = any, TUpdate = any> extends AskQuery<TAsk>, SelectQuery<TSelect>, ConstructQuery<TConstruct>, UpdateQuery<TUpdate> {
        endpoint: Endpoint;
    }

    interface Store<Q extends BaseQuad = Quad> {
        endpoint: Endpoint;
        get(graph: Quad['graph']): Promise<Stream<Q> & Readable>;
        post(stream: Stream): Promise<void>;
        put(stream: Stream): Promise<void>;
    }

    interface ClientOptions<TQuery extends Query, Q extends BaseQuad = Quad, TStore extends Store<Q> = never> {
        endpoint: Endpoint;
        factory?: DataFactory<Q>;
        Query?: Constructor<TQuery, Q>;
        Store?: Constructor<TStore, Q>;
    }

    type StreamClientOptions<Q extends BaseQuad = Quad> = EndpointOptions & Pick<ClientOptions<StreamQuery, Q, StreamStore<Q>>, 'factory'>;

    type StreamClient<Q extends BaseQuad = Quad> = Client<StreamQuery<Q>, Q, StreamStore<Q>>;

    interface Client<TQuery extends Query, Q extends BaseQuad = Quad, TStore extends Store<Q> = never> {
        query: TQuery;
        store: TStore;
    }
}

declare class StreamClient<Q extends BaseQuad = Quad> extends BaseClient<StreamQuery<Q>, Q, StreamStore<Q>> implements StreamClient.StreamClient<Q> {
    constructor(options: StreamClient.StreamClientOptions<Q>)
}

export = StreamClient;
