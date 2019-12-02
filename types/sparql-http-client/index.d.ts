// Type definitions for sparql-http-client 1.2
// Project: https://github.com/zazuko/sparql-http-client
// Definitions by: Tomasz Pluskiewicz <https://github.com/tpluscode>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.6

import { Term } from 'rdf-js';
import { URL } from 'url';

declare namespace SparqlHttp {
  interface SparqlHttpOptions {
      endpointUrl?: string;
      updateUrl?: string;
  }

  interface SparqlClientOptions extends SparqlHttpOptions {
        fetch?: typeof fetch;
        URL?: typeof URL;
        defaultHeaders?: HeadersInit;
  }

  interface QueryRequestInit extends SparqlHttpOptions, RequestInit {}

  interface SelectBindings {
      results: { bindings: ReadonlyArray<Record<string, Term>> };
  }

  interface AskResult {
        boolean: boolean;
  }

  interface SelectResponse {
        json(): Promise<SelectBindings & AskResult>;
  }
}

declare class SparqlHttp<TResponse extends Response = Response> {
    constructor(options?: SparqlHttp.SparqlClientOptions);

    updateQuery(query: string, options?: SparqlHttp.QueryRequestInit): Promise<Response>;

    selectQuery(query: string, options?: SparqlHttp.QueryRequestInit): Promise<SparqlHttp.SelectResponse & TResponse>;

    constructQuery(query: string, options?: SparqlHttp.QueryRequestInit): Promise<TResponse>;
}

export = SparqlHttp;
