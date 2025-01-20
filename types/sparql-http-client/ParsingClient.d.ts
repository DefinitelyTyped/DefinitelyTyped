import { Environment } from "@rdfjs/environment/Environment.js";
import { DatasetCore, DatasetCoreFactory, Quad } from "@rdfjs/types";
import { Client } from "./index.js";
import ParsingQuery from "./ParsingQuery.js";
import SimpleClient from "./SimpleClient.js";

export interface Options<Q extends Quad = Quad, D extends DatasetCore<Q> = DatasetCore<Q>> {
    factory?: Environment<DatasetCoreFactory<Q, Q, D>>;
    fetch?: typeof fetch;
    headers?: HeadersInit;
    password?: string;
    user?: string;
    endpointUrl?: string;
    storeUrl?: string;
    updateUrl?: string;
}

export type ParsingClient<D extends DatasetCore = DatasetCore> = Client<ParsingQuery<D>>;

declare class ParsingClientImpl<Q extends Quad = Quad, D extends DatasetCore<Q> = DatasetCore<Q>>
    extends SimpleClient<ParsingQuery<D>>
    implements ParsingClient<D>
{
    constructor(
        options: Options<Q, D>,
    );
}

export default ParsingClientImpl;
