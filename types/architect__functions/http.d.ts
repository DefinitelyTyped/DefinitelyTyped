import { APIGatewayProxyEvent, Context, APIGatewayProxyResult } from 'aws-lambda';
import * as express from 'express';

export type HttpMethods = 'GET' | 'POST' | 'PATCH' | 'PUT' | 'DELETE';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type SessionData = Record<string, any>;
export type JsonBody = any;
export type HtmlBody = string;
export type RequestBody = any;

export interface ObjectLiteral {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    [key: string]: any;
}

/**
 * An incoming Architect Request - an extension of the AWS Lambda version 2 request format
 *  - https://arc.codes/docs/en/reference/runtime/node#request (current docs, less detailed)
 *  - https://v6.arc.codes/primitives/http#req (older Arc docs site, more detailed)
 *  - https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-develop-integrations-lambda.html

 */
export interface HttpRequest {
    /**
     * The request body in a base64-encoded buffer. You'll need to parse request.body before you can use it, but Architect provides tools to do this - see parsing request bodies.
     */
    body: RequestBody;

    // Array containing all cookies, if present in client request
    cookies?: string[];

    /**
     * All client request headers
     */
    headers: Record<string, string>;

    httpMethod: HttpMethods;

    /**
     * Indicates whether body is base64-encoded binary payload (will always be true if body has not null)
     */
    isBase64Encoded: boolean;

    /**
     * The absolute path of the request
     */
    path: string;

    /**
     * Any URL params, if defined in your HTTP Function's path (e.g. foo in GET /:foo/bar)
     */
    pathParameters: Record<string, string>;

    // The absolute path of the request
    rawPath: string;

    // String containing query string params of request, if any:
    // Eg: '?someParam=someValue', or '' (if no query params)
    rawQueryString: string;

    /**
     * The absolute path of the request, with resources substituted for actual path parts (e.g. /{foo}/bar)
     */
    resource: string;

    // Request metadata, including http object containing method and path (should you not want to parse the routeKey)
    requestContext: ObjectLiteral;

    // String combining of HTTP method (GET, POST, PATCH, PUT, or DELETE) and path
    // Eg: 'GET /shop/{product}' or '$default' for the default handler.
    routeKey: string;

    /**
     * Any query params if present in the client request
     */
    queryStringParameters: Record<string, string>;

    /**
     * When the request/response is run through arc.http.async (https://arc.codes/docs/en/reference/runtime/node#arc.http.async) then it will have session added.
     */
    session?: SessionData;

    // Stage variables are name-value pairs associated with a specific API deployment stage and act like environment variables for use in your API setup and mapping templates.
    // See https://aws.amazon.com/about-aws/whats-new/2015/11/amazon-api-gateway-supports-stage-variables/
    // and example at https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-develop-integrations-lambda.html
    stageVariables: ObjectLiteral;

    // Payload version (e.g. '2.0')
    version: string;
}

/**
 * https://arc.codes/primitives/http#res (current docs, less detailed)
 * https://v6.arc.codes/primitives/http#res (older Arc docs site, more detailed)
 * https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-develop-integrations-lambda.html
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

export type LambdaHandler = (event: APIGatewayProxyEvent, context: Context) => Promise<APIGatewayProxyResult>;
export type HttpAsync = (...fns: HttpHandler[]) => LambdaHandler;
export type HttpExpress = (app: express.Application) => LambdaHandler;
export interface HttpSession {
    read(req: HttpRequest): Promise<SessionData>;
    write(sess: SessionData): Promise<string>;
}
export interface HttpProxyOptions {
    spa: boolean;
    alias: Record<string, string>;
}

export type HttpProxy = (options: HttpProxyOptions) => HttpHandler;

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
