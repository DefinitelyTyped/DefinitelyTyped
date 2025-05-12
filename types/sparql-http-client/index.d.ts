import { BaseQuad, NamedNode, Quad_Graph, Stream } from "@rdfjs/types";
import ParsingClient from "./ParsingClient.js";
import ParsingQuery from "./ParsingQuery.js";
import RawQuery from "./RawQuery.js";
import ResultParser from "./ResultParser.js";
import SimpleClient from "./SimpleClient.js";
import StreamClient from "./StreamClient.js";
import StreamQuery from "./StreamQuery.js";
import StreamStore from "./StreamStore.js";

export {
    ParsingClient,
    ParsingQuery,
    RawQuery,
    ResultParser,
    SimpleClient,
    StreamClient,
    StreamClient as default,
    StreamQuery,
    StreamStore,
};

export interface QueryOptions {
    headers?: HeadersInit;
    operation?: "get" | "postUrlencoded" | "postDirect";
}

export interface Query<RAsk = unknown, RConstruct = unknown, RSelect = unknown, RUpdate = unknown> {
    ask(query: string, options?: QueryOptions): RAsk;
    construct(query: string, options?: QueryOptions): RConstruct;
    select(query: string, options?: QueryOptions): RSelect;
    update(query: string, options?: QueryOptions): RUpdate;
}

export interface Store<Q extends BaseQuad> {
    get(graph: NamedNode): Stream<Q>;
    post(stream: Stream, options?: { graph?: Quad_Graph }): Promise<void>;
    put(stream: Stream, options?: { graph?: Quad_Graph }): Promise<void>;
}

export interface Client<TQuery extends Query = any, TStore extends Store<any> = any> {
    query: TQuery;
    store: TStore;
    headers?: Headers;
    password?: string;
    user?: string;
    endpointUrl?: string;
    storeUrl?: string;
    updateUrl?: string;
}
