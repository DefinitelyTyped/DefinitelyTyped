interface CommonEndpointOptions {
    fetch?: typeof fetch | undefined;
    headers?: HeadersInit | undefined;
    password?: string | undefined;
    user?: string | undefined;
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
        headers?: HeadersInit | undefined;
        update?: boolean | undefined;
    }

    interface Endpoint {
        endpointUrl: string;
        fetch: typeof fetch;
        headers: HeadersInit;
        password?: string | undefined;
        storeUrl?: string | undefined;
        updateUrl?: string | undefined;
        user?: string | undefined;

        get(query: string, options?: RequestOptions): Promise<Response>;
        postDirect(query: string, options?: RequestOptions): Promise<Response>;
        postUrlencoded(query: string, options?: RequestOptions): Promise<Response>;
        mergeHeaders(args?: HeadersInit): Headers;
    }
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface Endpoint extends Endpoint.Endpoint {}

// tslint:disable-next-line no-unnecessary-class
declare class Endpoint {
    constructor(options: Endpoint.EndpointOptions);
}

export = Endpoint;
