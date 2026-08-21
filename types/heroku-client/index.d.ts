/// <reference types="node" />

import http = require("http");

interface RequestURL {
    host: string;
    port: number;
    secure: boolean;
}

interface RequestCache {
    get(key: string, cb: (err: any, value: any) => void): void;
    set(key: string, value: any): void;
}

interface RequestLogger {
    log(msg: any): void;
}

interface HerokuClientOptions extends Partial<RequestURL> {
    body?: any;
    cache?: {
        store: RequestCache;
        encryptor: object;
    };
    debug?: boolean;
    debugHeaders?: string;
    headers?: Record<string, string>;
    json?: boolean;
    logger?: RequestLogger;
    method?: "GET" | "POST" | "PATCH" | "DELETE";
    middleware?: (res: http.ServerResponse, cbk: () => void) => void;
    parseJSON?: boolean;
    partial?: boolean;
    path?: string;
    rejectUnauthorized?: boolean;
    timeout?: number;
    token?: string;
    userAgent?: string;
}

interface Request extends Omit<HerokuClientOptions, keyof RequestURL>, RequestURL {}
declare class Request {
    options: HerokuClientOptions;

    agent: http.Agent;
    aggregate?: any[];
    cachedResponse?: http.ServerResponse;
    certs: Buffer[];
    nextRange?: string;
    promise: Promise<any>;
    resolve: (val: any) => void;
    reject: (err: any) => void;
    retries?: number;

    constructor(options: http.RequestOptions);

    /**
     * Perform the actual API request.
     */
    request(): Promise<any>;

    /**
     * Handle an API response, returning the API response.
     */
    handleResponse(res: http.ServerResponse): void;

    isRetryAllowed(error: http.ServerResponse): boolean;

    handleError(error: http.ServerResponse): void;

    logRequest(req: http.ClientRequest): void;

    /**
     * Log the API response.
     */
    logResponse(res: http.ServerResponse): void;

    /**
     * If the request options include a body,
     * write the body to the request and set
     * an appropriate 'Content-length' header.
     */
    writeBody(req: http.ClientRequest): void;

    /**
     * If the request options include a timeout,
     * set the timeout and provide a callback
     * function in case the request exceeds the
     * timeout period.
     */
    setRequestTimeout(req: http.ClientRequest): void;

    /**
     * Get the request body, and parse it (or not) as appropriate.
     * - Parse JSON by default.
     * - If parseJSON is `false`, it will not parse.
     */
    parseBody(body: string | Buffer): string | object;

    /**
     * In the event of a non-successful API request,
     * fail with an appropriate error message and
     * status code.
     */
    handleFailure(res: http.ServerResponse, buffer: string | Buffer): void;

    /**
     * In the event of a successful API response,
     * respond with the response body.
     */
    handleSuccess(res: http.ServerResponse, buffer: string | Buffer): void;

    /**
     * Since this request isn't the full response (206 or
     * 304 with a cached Next-Range), perform the next
     * request for more data.
     */
    nextRequest(nextRange: string, body: Array<string | object | (string | object)>): void;

    /**
     * If given an object, sets aggregate to object,
     * otherwise concats array onto aggregate.
     */
    updateAggregate(aggregate: Array<string | object | (string | object)>): void;
}

declare class Heroku {
    options: HerokuClientOptions;

    constructor(options: HerokuClientOptions);

    request(options: HerokuClientOptions): ReturnType<Request["request"]>;

    get(path: string, options?: HerokuClientOptions): ReturnType<Request["request"]>;

    put(path: string, options?: HerokuClientOptions): ReturnType<Request["request"]>;

    post(path: string, options?: HerokuClientOptions): ReturnType<Request["request"]>;

    patch(path: string, options?: HerokuClientOptions): ReturnType<Request["request"]>;

    delete(path: string, options?: HerokuClientOptions): ReturnType<Request["request"]>;
}

export = Heroku;
