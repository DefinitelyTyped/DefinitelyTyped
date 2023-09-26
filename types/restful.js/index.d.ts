export interface Headers {
    [key: string]: any;
}

export interface Api extends Endpoint<Api> {
    all(name: string): CollectionEndpoint;
    allUrl(name: string, url: string): CollectionEndpoint;
    one(name: string, id: any): MemberEndpoint;
    oneUrl(name: string, url: string): MemberEndpoint;
    protocol(protocol: string): Api;
    protocol(): string;
    baseUrl(protocol: string): Api;
    baseUrl(): string;
    port(port: number): Api;
    port(): number;
    prefixUrl(prefix: string): Api;
    prefixUrl(): string;
    customUrl(url: string): Api;
    customUrl(): string;
}

export interface MemberEndpoint extends Endpoint<MemberEndpoint> {
    /**
     * Target a child collection name.
     * @param name
     */
    all(name: string): CollectionEndpoint;
    allUrl(name: string, url: string): CollectionEndpoint;
    /**
     * Target a child member in a collection name.
     * @param name
     * @param id
     */
    one(name: string, id: any): MemberEndpoint;
    oneUrl(name: string, url: string): MemberEndpoint;
    /**
     * Get a member. Returns a promise with an entity.
     * @param params
     * @param headers
     */
    get<T>(params?: any, headers?: Headers): Promise<MemberResponse<T>>;
    /**
     * Update a member. Returns a promise with the response.
     * @param data
     * @param headers
     */
    put<T>(data: any, headers?: Headers): Promise<MemberResponse<T>>;
    /**
     * Delete a member. Returns a promise with the response.
     * @param data
     * @param headers
     */
    delete<T>(data?: any, headers?: Headers): Promise<MemberResponse<T>>;
    /**
     * Patch a member. Returns a promise with the response.
     * @param data
     * @param headers
     */
    patch<T>(data: any, headers?: Headers): Promise<MemberResponse<T>>;
    /**
     * Perform a HEAD request on a member. Returns a promise with the response.
     * @param headers
     */
    head<T>(headers?: any): Promise<MemberResponse<T>>;
    customUrl(url: string): MemberEndpoint;
    customUrl(): string;
}

export interface CollectionEndpoint extends Endpoint<CollectionEndpoint> {
    /**
     * Get a member in a collection. Returns a promise with an entity.
     * @param id
     */
    get<T>(id: any, params?: any, headers?: Headers): Promise<MemberResponse<T>>;
    /**
     * Get a full collection. Returns a promise with an array of entities.
     */
    getAll<T>(params?: any, headers?: Headers): Promise<CollectionResponse<T>>;
    /**
     * Create a member in a collection. Returns a promise with the response.
     */
    post<T>(data: any, headers?: Headers): Promise<MemberResponse<T>>;
    /**
     * Update a member in a collection. Returns a promise with the response.
     * @param id
     * @param data
     * @param headers
     */
    put<T>(id: any, data: any, headers?: Headers): Promise<MemberResponse<T>>;
    /**
     * Delete a member in a collection. Returns a promise with the response.
     * @param id
     * @param data
     * @param headers
     */
    delete<T>(id: any, data?: any, headers?: Headers): Promise<MemberResponse<T>>;
    /**
     * Patch a member in a collection. Returns a promise with the response.
     * @param id
     * @param data
     * @param headers
     */
    patch<T>(id: any, data: any, headers?: Headers): Promise<MemberResponse<T>>;
    /**
     * Perform a HEAD request on a member in a collection. Returns a promise with the response.
     * @param id
     * @param headers
     */
    head<T>(id: any, headers?: Headers): Promise<MemberResponse<T>>;
}

export interface Endpoint<Self> {
    /**
     * Get the url.
     */
    url(): string;
    /**
     * Add a response interceptor. You can only alter data and headers.
     */
    addResponseInterceptor(interceptor: ResponseInterceptor): Self;
    responseInterceptors(): ResponseInterceptor[];
    /**
     * Add a request interceptor.
     */
    addRequestInterceptor(interceptor: RequestInterceptor): Self;
    requestInterceptors(): RequestInterceptor[];
    /**
     * Add a full response interceptor. You can alter data and headers.
     */
    addFullResponseInterceptor(interceptor: ResponseInterceptor): Self;
    fullResponseInterceptors(): ResponseInterceptor[];
    /**
     * Add a full request interceptor. You can alter params, headers, data, method and url.
     */
    addFullRequestInterceptor(interceptor: FullRequestInterceptor): Self;
    fullRequestInterceptors(): FullRequestInterceptor[];
    /**
     * Add a header.
     * @param name
     * @param value
     */
    header(name: string, value: any): Self;
    headers(): Headers;
}

export interface MemberResponse<T> extends ResponseBase {
    (): {
        data: T;
        headers: Headers;
        status: number;
        statusText: string;
    };
    body(): ResponseBody<T>;
}

export interface CollectionResponse<T> extends ResponseBase {
    (): {
        data: T[];
        headers: Headers;
        status: number;
        statusText: string;
    };
    body(): ResponseBody<T>[];
}

export interface ResponseBase {
    status(): number;
    headers(): Headers;
    config(): any;
}

export interface ResponseBody<T> {
    /**
     * Get the JS object unserialized from the response body (which must be in JSON)
     */
    data(): T;
    (): T;
    /**
     * Query a collection child of the entity.
     * @param entity
     */
    all(entity: string): CollectionEndpoint;
    /**
     * Query a member child of the entity.
     * @param entity
     * @param id
     */
    one(entity: string, id: any): MemberEndpoint;
    /**
     * Update the member link to the entity. Returns a promise with the response.
     * @param headers
     */
    save(headers?: Headers): void;
    /**
     * Delete the member link to the entity. Returns a promise with the response.
     */
    remove(headers?: Headers): void;
    /**
     * Get the entity url.
     */
    url(): string;
    /**
     * Get the id of the entity.
     */
    id(): any;
}

export interface RequestInterceptor {
    (data: any, headers: Headers, method: string, url: string): any;
}

export interface FullRequestInterceptor {
    (params: any, headers: Headers, data: any, method: string, url: string): FullRequestInterceptorReturnValue;
}

export interface FullRequestInterceptorReturnValue {
    params?: any;
    headers?: Headers | undefined;
    data?: any;
    method?: string | undefined;
    url?: string | undefined;
}

export interface ResponseInterceptor {
    (data: any, headers: Headers, method: string, url: string): ResponseInterceptorReturnValue;
}

export interface ResponseInterceptorReturnValue {
    headers?: Headers | undefined;
    data?: any;
    method?: string | undefined;
    url?: string | undefined;
}

export default function restful(endpoint: string): Api;
