import { Quad, BaseQuad } from 'rdf-js';
import { QueryOptions, Query, QueryInit } from '.';
import { Endpoint } from './Endpoint';
import { ResultRow } from './ResultParser';

declare namespace ParsingQuery {
    type ParsingQuery<Q extends BaseQuad = Quad> = Query<boolean, Q[], ResultRow[], void>;
}

declare class ParsingQuery<Q extends BaseQuad = Quad> implements ParsingQuery.ParsingQuery<Q> {
    constructor(options: QueryInit);
    endpoint: Endpoint;
    ask(query: string, options?: QueryOptions): Promise<boolean>;
    construct(query: string, options?: QueryOptions): Promise<Q[]>;
    select(query: string, options?: QueryOptions): Promise<ResultRow[]>;
    update(query: string, options?: QueryOptions): Promise<void>;
}

export = ParsingQuery;
