import { BaseQuad, Quad } from 'rdf-js';
import { Client, ClientOptions, Query, Store } from '.';

declare class BaseClient<TQuery extends Query, Q extends BaseQuad = Quad, TStore extends Store<Q> = never> implements Client<TQuery, Q, TStore> {
    constructor(options: ClientOptions<TQuery, Q, TStore>);
    query: TQuery;
    store: TStore;
}

export = BaseClient;
