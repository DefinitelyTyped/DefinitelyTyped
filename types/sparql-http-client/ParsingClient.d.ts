import { BaseQuad, Quad } from 'rdf-js';
import BaseClient = require('./BaseClient');
import { EndpointOptions } from './Endpoint';
import { ClientOptions, Client } from '.';
import { ParsingQuery } from './ParsingQuery';

declare namespace ParsingClient {
    type ParsingClientOptions<Q extends BaseQuad = Quad> = EndpointOptions & Pick<ClientOptions<ParsingQuery, Q>, 'factory'>;
}

declare class ParsingClient<Q extends BaseQuad = Quad> extends BaseClient<ParsingQuery<Q>, Q> implements Client<ParsingQuery<Q>, Q> {
    constructor(options: ParsingClient.ParsingClientOptions<Q>);
}

export = ParsingClient;
