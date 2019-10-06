// Type definitions for sparql-http-client 1.1
// Project: https://github.com/zazuko/sparql-http-client
// Definitions by: Tomasz Pluskiewicz <https://github.com/tpluscode>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import { Term } from 'rdf-js';
import fetch, { Response, RequestInit } from 'node-fetch';
import { URL } from 'url';

export interface SparqlHttpOptions {
    endpointUrl?: string;
    updateUrl?: string;
}

export interface SparqlClientOptions extends SparqlHttpOptions {
    fetch: typeof fetch;
    URL: typeof URL;
}

export interface QueryRequestInit extends SparqlHttpOptions, RequestInit {}

export interface SelectBindings {
    results: { bindings: ReadonlyArray<Record<string, Term>> };
}

export interface AskResult {
    boolean: boolean;
}

export interface SelectResponse {
    json(): Promise<SelectBindings & AskResult>;
}

export class SparqlHttp<TResponse extends Response = Response> {
    constructor(options?: SparqlHttpOptions);
    updateQuery(query: string, options?: QueryRequestInit): Promise<Response>;
    selectQuery(query: string, options?: QueryRequestInit): Promise<SelectResponse & TResponse>;
    constructQuery(query: string, options?: QueryRequestInit): Promise<TResponse>;
}
