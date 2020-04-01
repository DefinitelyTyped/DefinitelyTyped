import { Endpoint } from './Endpoint';
import { QueryOptions, QueryInit, Query } from '.';

declare namespace RawQuery {
    type RawQuery = Query<Response, Response, Response, Response>;
}

declare class RawQuery {
    constructor(options: QueryInit);
    endpoint: Endpoint;
    ask(query: string, options?: QueryOptions): Promise<Response>;
    construct(query: string, options?: QueryOptions): Promise<Response>;
    select(query: string, options?: QueryOptions): Promise<Response>;
    update(query: string, options?: QueryOptions): Promise<Response>;
}

export = RawQuery;
