import { Environment } from "@rdfjs/environment/Environment.js";
import { DatasetCore, DatasetCoreFactory, Quad } from "@rdfjs/types";
import { SimpleClient } from "./index.js";
import ParsingQuery from "./ParsingQuery.js";

interface Options<Q extends Quad, D extends DatasetCore<Q>> {
    factory: Environment<DatasetCoreFactory<Q, Q, D>>;
    fetch?: typeof fetch;
    headers?: HeadersInit;
    password?: string;
    user?: string;
}

interface OptionWithQueryEndpoint<Q extends Quad, D extends DatasetCore<Q>> extends Options<Q, D> {
    endpointUrl: string;
}

interface OptionWithStoreEndpoint<Q extends Quad, D extends DatasetCore<Q>> extends Options<Q, D> {
    storeUrl: string;
}

interface OptionWithUpdateEndpoint<Q extends Quad, D extends DatasetCore<Q>> extends Options<Q, D> {
    updateUrl: string;
}

declare class ParsingClient<Q extends Quad = Quad, D extends DatasetCore<Q> = DatasetCore<Q>>
    extends SimpleClient<ParsingQuery<D>>
{
    constructor(
        options: OptionWithQueryEndpoint<Q, D> | OptionWithStoreEndpoint<Q, D> | OptionWithUpdateEndpoint<Q, D>,
    );
}

export default ParsingClient;
