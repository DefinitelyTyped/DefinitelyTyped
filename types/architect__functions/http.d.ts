import { APIGatewayProxyEvent, Context, APIGatewayProxyResult } from 'aws-lambda';
import * as express from 'express';

type HttpMethods = 'GET' | 'POST' | 'PATCH' | 'PUT' | 'DELETE';

/* eslint-disable @typescript-eslint/no-explicit-any */
type SessionData = Record<string, any>;
type JsonBody = any;
type HtmlBody = string;
type RequestBody = any;
/* eslint-enable @typescript-eslint/no-explicit-any */

/**
 * An incoming Architect Request.
 * https://arc.codes/docs/en/reference/runtime/node#request
 */
export interface HttpRequest {
    httpMethod: HttpMethods;
    /**
     * The absolute path of the request
     */
    path: string;

    /**
     * The absolute path of the request, with resources substituted for actual path parts (e.g. /{foo}/bar)
     */
    resource: string;

    /**
     * Any URL params, if defined in your HTTP Function's path (e.g. foo in GET /:foo/bar)
     */
    pathParameters: Record<string, string>;

    /**
     * Any query params if present in the client request
     */
    queryStringParameters: Record<string, string>;

    /**
     * All client request headers
     */
    headers: Record<string, string>;

    /**
     * The request body in a base64-encoded buffer. You'll need to parse request.body before you can use it, but Architect provides tools to do this - see parsing request bodies.
     */
    body: RequestBody;

    /**
     * Indicates whether body is base64-encoded binary payload (will always be true if body has not null)
     */
    isBase64Encoded: boolean;

    /**
     * When the request/response is run through arc.http.async (https://arc.codes/docs/en/reference/runtime/node#arc.http.async) then it will have session added.
     */
    session?: SessionData;
}

/**
 * https://arc.codes/primitives/http#res
 */
export interface HttpResponse {
    /**
     * Sets the HTTP status code
     */
    statusCode?: number;

    /**
     * Alias for @see statusCode
     */
    status?: number;

    /**
     * All response headers
     */
    headers?: Record<string, string>;

    /**
     * Contains request body, either as a plain string (no encoding or serialization required) or, if binary, base64-encoded buffer
     * Note: The maximum body payload size is 6MB
     */
    body?: string;

    /**
     * Indicates whether body is base64-encoded binary payload
     * Required to be set to true if emitting a binary payload
     */
    isBase64Encoded?: boolean;

    /**
     * When the request/response is run through arc.http.async (https://arc.codes/docs/en/reference/runtime/node#arc.http.async) then it will have session added.
     */
    session?: SessionData;

    /**
     * When used with https://arc.codes/docs/en/reference/runtime/node#arc.http.async
     * json sets the Content-Type header to application/json
     */
    json?: JsonBody;

    /**
     * When used with https://arc.codes/docs/en/reference/runtime/node#arc.http.async
     * json sets the Content-Type header to application/json
     */
    html?: HtmlBody;
}
/**
 * Defines an HttpHandler that works with architect.
 */
export interface HttpHandler {
    (req: HttpRequest): Promise<HttpResponse | undefined>;
}

type LambdaHandler = (event: APIGatewayProxyEvent, context: Context) => Promise<APIGatewayProxyResult>;
type HttpAsync = (...fns: HttpHandler[]) => LambdaHandler;
type HttpExpress = (app: express.Application) => LambdaHandler;
type HttpSession = {
    read(req: HttpRequest): Promise<SessionData>;
    write(sess: SessionData): Promise<string>;
};
type HttpProxyOptions = {
    spa: boolean;
    alias: Record<string, string>;
};

type HttpProxy = (options: HttpProxyOptions) => HttpHandler;

export interface ArcHttp {
    /**
     * https://arc.codes/docs/en/reference/runtime/node#arc.http.async
     */
    async: HttpAsync;
    /**
     * https://arc.codes/docs/en/reference/runtime/node#arc.http.express
     */
    express: HttpExpress;
    /**
     * https://arc.codes/docs/en/reference/runtime/node#arc.http.proxy
     */
    proxy: HttpProxy;
    /**
     * https://arc.codes/docs/en/reference/runtime/node#arc.http.session
     */
    session: HttpSession;
}
