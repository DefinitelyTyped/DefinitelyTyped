import { Environment } from "@rdfjs/environment/Environment.js";
import { BaseQuad, DataFactory, DatasetCoreFactory, Quad } from "@rdfjs/types";
import { SimpleClient } from "./index.js";
import StreamQuery from "./StreamQuery.js";
import StreamStore from "./StreamStore.js";

interface BaseOptions<Q extends BaseQuad> {
    factory: Environment<DataFactory<Q> | DatasetCoreFactory>;
    fetch?: typeof fetch;
    headers?: HeadersInit;
    password?: string;
    user?: string;
}

interface OptionWithQueryEndpoint<Q extends BaseQuad> extends BaseOptions<Q> {
    endpointUrl: string;
}

interface OptionWithStoreEndpoint<Q extends BaseQuad> extends BaseOptions<Q> {
    storeUrl: string;
}

interface OptionWithUpdateEndpoint<Q extends BaseQuad> extends BaseOptions<Q> {
    updateUrl: string;
}

export type Options<Q extends BaseQuad> =
    | OptionWithQueryEndpoint<Q>
    | OptionWithStoreEndpoint<Q>
    | OptionWithUpdateEndpoint<Q>;

declare class StreamClient<Q extends BaseQuad = Quad>
    extends SimpleClient<StreamQuery, StreamStore<Q>, Environment<DataFactory<Q> | DatasetCoreFactory>>
{
    constructor(options: Options<Q>);
}

export default StreamClient;
