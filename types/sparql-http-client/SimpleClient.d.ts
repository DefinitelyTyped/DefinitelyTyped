import { BaseQuad, Quad } from 'rdf-js';
import BaseClient = require('./BaseClient');
import RawQuery = require('./RawQuery');
import { Client, ClientOptions } from '.';
import { EndpointOptions } from './Endpoint';

declare namespace SimpleClient {
    type SimpleClientOptions<Q extends BaseQuad = Quad> = EndpointOptions & Pick<ClientOptions<RawQuery, Q>, 'factory'>;

    type SimpleClient<Q extends BaseQuad = Quad> = Client<RawQuery, Q>;
}

declare class SimpleClient<Q extends BaseQuad = Quad> extends BaseClient<RawQuery> implements SimpleClient.SimpleClient<Q> {
    constructor(options: SimpleClient.SimpleClientOptions<Q>)
}

export = SimpleClient;
