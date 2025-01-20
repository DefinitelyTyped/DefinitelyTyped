import { Environment } from "@rdfjs/environment/Environment.js";
import { BaseQuad, DataFactory, DatasetCoreFactory, Quad } from "@rdfjs/types";
import { Client, Query, Store } from "./index.js";
import RawQuery from "./RawQuery.js";

interface QueryConstructor {
    new(options: { client: SimpleClientImpl }): Query;
}

interface StoreConstructor {
    new<Q extends BaseQuad = Quad>(options: { client: SimpleClientImpl }): Store<Q>;
}

export interface Options {
    factory?: Environment<DataFactory | DatasetCoreFactory>;
    fetch?: typeof fetch;
    headers?: HeadersInit;
    password?: string;
    user?: string;
    Query?: QueryConstructor;
    Store?: StoreConstructor;
    endpointUrl?: string;
    storeUrl?: string;
    updateUrl?: string;
}

interface QueryOptions {
    headers?: HeadersInit;
    /**
     * send the request to the updateUrl
     */
    update?: boolean;
}

export type SimpleClient = Client<RawQuery>;

declare class SimpleClientImpl<
    TQuery extends Query = RawQuery,
    TStore extends Store<BaseQuad> = never,
    TFactory = Environment<DataFactory | DatasetCoreFactory> | undefined,
> implements Client<TQuery, TStore> {
    query: TQuery;
    store: TStore;
    factory: TFactory;
    fetch: typeof fetch;
    headers?: Headers;
    password?: string;
    user?: string;
    endpointUrl?: string;
    storeUrl?: string;
    updateUrl?: string;

    constructor(options: Options);

    /**
     * Sends a GET request as defined in the
     * {@link https://www.w3.org/TR/2013/REC-sparql11-protocol-20130321/#query-via-get SPARQL Protocol specification}.
     */
    get(query: string, options?: QueryOptions): Promise<Response>;

    /**
     * Sends a POST directly request as defined in the
     * {@link https://www.w3.org/TR/2013/REC-sparql11-protocol-20130321/#query-via-post-direct SPARQL Protocol specification}.
     */
    postDirect(query: string, options?: QueryOptions): Promise<Response>;

    /**
     * Sends a POST URL-encoded request as defined in the
     * {@link https://www.w3.org/TR/2013/REC-sparql11-protocol-20130321/#query-via-post-urlencoded SPARQL Protocol specification}.
     */
    postUrlencoded(query: string, options?: QueryOptions): Promise<Response>;
}

export default SimpleClientImpl;
