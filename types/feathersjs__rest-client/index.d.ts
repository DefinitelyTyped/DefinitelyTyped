// Type definitions for @feathersjs/rest-client 1.3
// Project: https://feathersjs.com
// Definitions by: Jan Lohage <https://github.com/j2L4e>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

// todo: get rid of all the anys

export default function feathersRestClient(base?: string): Transport;

export interface HandlerResult extends Function {
    /**
     * initialize service
     */
    (): void;

    /**
     * Transport Service
     */
    Service: any;

    /**
     * default Service
     */
    service: any;
}

export type Handler = (connection: any, options?: any) => () => HandlerResult;

export interface Transport {
    jquery: Handler;
    superagent: Handler;
    request: Handler;
    fetch: Handler;
    axios: Handler;
    angular: Handler;
    angularHttpClient: Handler;
}
