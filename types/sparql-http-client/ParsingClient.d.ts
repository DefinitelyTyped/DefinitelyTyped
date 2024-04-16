import { Environment } from "@rdfjs/environment/Environment.js";
import { DatasetCore, DatasetCoreFactory, Quad } from "@rdfjs/types";
import { Client } from "./index.js";
import ParsingQuery from "./ParsingQuery.js";
import SimpleClient from "./SimpleClient.js";

interface BaseOptions<Q extends Quad, D extends DatasetCore<Q>> {
    factory?: Environment<DatasetCoreFactory<Q, Q, D>>;
    fetch?: typeof fetch;
    headers?: HeadersInit;
    password?: string;
    user?: string;
}

interface OptionWithQueryEndpoint<Q extends Quad, D extends DatasetCore<Q>> extends BaseOptions<Q, D> {
    endpointUrl: string;
}

interface OptionWithStoreEndpoint<Q extends Quad, D extends DatasetCore<Q>> extends BaseOptions<Q, D> {
    storeUrl: string;
}

interface OptionWithUpdateEndpoint<Q extends Quad, D extends DatasetCore<Q>> extends BaseOptions<Q, D> {
    updateUrl: string;
}

export type Options<Q extends Quad = Quad, D extends DatasetCore<Q> = DatasetCore<Q>> =
    | OptionWithQueryEndpoint<Q, D>
    | OptionWithStoreEndpoint<Q, D>
    | OptionWithUpdateEndpoint<Q, D>;

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
