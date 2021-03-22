interface CommonEndpointOptions {
    fetch?: typeof fetch;
    headers?: HeadersInit;
    password?: string;
    user?: string;
}

interface QueryEndpoint {
    endpointUrl: string;
}

interface UpdateEndpoint {
    updateUrl: string;
}

interface StoreEndpoint {
    storeUrl: string;
}

declare namespace Endpoint {
    type EndpointOptions = CommonEndpointOptions & (QueryEndpoint | UpdateEndpoint | StoreEndpoint);

    interface RequestOptions {
        headers?: HeadersInit;
        update?: boolean;
    }

    interface Endpoint {
        endpointUrl: string;
        fetch: typeof fetch;
        headers: HeadersInit;
        password?: string;
        storeUrl?: string;
        updateUrl?: string;
        user?: string;

        get(query: string, options?: RequestOptions): Promise<Response>;
        postDirect(query: string, options?: RequestOptions): Promise<Response>;
        postUrlencoded(query: string, options?: RequestOptions): Promise<Response>;
        mergeHeaders(args?: HeadersInit): Headers;
    }
}

// tslint:disable-next-line no-empty-interface
interface Endpoint extends Endpoint.Endpoint {}

// tslint:disable-next-line no-unnecessary-class
declare class Endpoint {
    constructor(options: Endpoint.EndpointOptions);
}

export = Endpoint;
