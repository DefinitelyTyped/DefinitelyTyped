import { Environment } from "@rdfjs/environment/Environment.js";
import { BaseQuad, DataFactory, DatasetCoreFactory, Quad } from "@rdfjs/types";
import { Client, SimpleClient } from "./index.js";
import StreamQuery from "./StreamQuery.js";
import StreamStore from "./StreamStore.js";

export interface Options<Q extends BaseQuad = BaseQuad> {
    factory?: Environment<DataFactory<Q> | DatasetCoreFactory>;
    fetch?: typeof fetch;
    headers?: HeadersInit;
    password?: string;
    user?: string;
    endpointUrl?: string;
    storeUrl?: string;
    updateUrl?: string;
}

export type StreamClient<Q extends BaseQuad = Quad> = Client<StreamQuery<Q>, StreamStore<Q>>;

declare class StreamClientImpl<Q extends BaseQuad = Quad>
    extends SimpleClient<StreamQuery, StreamStore<Q>, Environment<DataFactory<Q> | DatasetCoreFactory>>
    implements StreamClient<Q>
{
    constructor(options: Options<Q>);
}

export default StreamClientImpl;
