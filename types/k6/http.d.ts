/*
 * HTTP client.
 * https://docs.k6.io/docs/k6http
 */

import { bytes, JSONValue } from '.';
import { Selection } from './html';

// === Main ===
// ------------

/**
 * Make DELETE request.
 * https://docs.k6.io/docs/del-url-body-params
 * @param url - Request URL.
 * @param body - Discouraged. Request body. Object form encoded.
 * @param params - Request parameters.
 * @returns Resulting response.
 * @public
 */
export function del<RT extends ResponseType | undefined>(
    url: string,
    body?: RequestBody | null,
    params?: RefinedParams<RT> | null
): RefinedResponse<RT>;

/**
 * Make GET request.
 * https://docs.k6.io/docs/get-url-body-params
 * @param url - Request URL.
 * @param params - Request parameters.
 * @returns Resulting response.
 * @public
 */
export function get<RT extends ResponseType | undefined>(
    url: string,
    params?: RefinedParams<RT> | null
): RefinedResponse<RT>;

/**
 * Make OPTIONS request.
 * https://docs.k6.io/docs/options-url-body-params
 * @param url - Request URL.
 * @param body - Request body. Object form encoded.
 * @param params - Request parameters.
 * @returns Resulting response.
 * @public
 */
export function options<RT extends ResponseType | undefined>(
    url: string,
    body?: RequestBody | null,
    params?: RefinedParams<RT> | null
): RefinedResponse<RT>;

/**
 * Make PATCH request.
 * https://docs.k6.io/docs/patch-url-body-params
 * @param url - Request URL.
 * @param body - Request body. Object form encoded.
 * @param params - Request parameters.
 * @returns Resulting response.
 * @public
 */
export function patch<RT extends ResponseType | undefined>(
    url: string,
    body?: RequestBody | null,
    params?: RefinedParams<RT> | null
): RefinedResponse<RT>;

/**
 * Make POST request.
 * https://docs.k6.io/docs/post-url-body-params
 * @param url - Request URL.
 * @param body - Request body. Object form encoded.
 * @param params - Request parameters.
 * @returns Resulting response.
 * @public
 */
export function post<RT extends ResponseType | undefined>(
    url: string,
    body?: RequestBody | null,
    params?: RefinedParams<RT> | null
): RefinedResponse<RT>;

/**
 * Make PUT request.
 * https://docs.k6.io/docs/put-url-body-params
 * @param url - Request URL.
 * @param body - Request body. Object form encoded.
 * @param params - Request parameters.
 * @returns Resulting response.
 * @public
 */
export function put<RT extends ResponseType | undefined>(
    url: string,
    body?: RequestBody | null,
    params?: RefinedParams<RT> | null
): RefinedResponse<RT>;

/**
 * Make request.
 * https://docs.k6.io/docs/request-method-url-body-params
 * @param method - HTTP method.
 * @param url - Request URL.
 * @param body - Request body. Object form encoded.
 * @param params - Request parameters.
 * @returns Resulting response.
 * @public
 */
export function request<RT extends ResponseType | undefined>(
    method: string,
    url: string,
    body?: RequestBody | null,
    params?: RefinedParams<RT> | null
): RefinedResponse<RT>;

/**
 * Batch multiple HTTP requests together,
 * to issue them in parallel over multiple TCP connections.
 * https://docs.k6.io/docs/batch-requests
 * @param requests - Request specifications.
 * @returns Resulting responses.
 * @public
 */
export function batch<Q extends BatchRequests>(requests: Q): BatchResponses<Q>;

/**
 * Create a file object used for building multipart requests (file uploads).
 * https://docs.k6.io/docs/file-data-filename-contenttype
 * @param data - File data.
 * @param filename - Filename. Included in MIME message.
 * @param contentType - Content type. Included in MIME message.
 * @returns File data object.
 * @public
 */
export function file(data: string | bytes, filename?: string, contentType?: string): FileData;

/**
 * Get active cookie jar.
 * https://docs.k6.io/docs/cookiejar
 * @returns Active cookie jar.
 * @public
 */
export function cookieJar(): CookieJar;

// === Params ===
// --------------

/**
 * Request parameters.
 * https://docs.k6.io/docs/params-k6http
 * @public
 */
export interface Params {
    /** Authentication method. */
    auth?: AuthMethod;

    /** Request scoped cookies. */
    cookies?: { [name: string]: ParamsCookieValue };

    /** Request headers. */
    headers?: { [name: string]: string };

    /** Cookie jar to override default VU cookie jar with. */
    jar?: CookieJar;

    /** Maximum redirects to follow. */
    redirects?: number;

    /** Response time metric tags. */
    tags?: { [name: string]: string };

    /** Request timeout. */
    timeout?: number;

    /** Response type. */
    responseType?: ResponseType;
}

/**
 * Request parameters with refined response type.
 * Used to infer response body type.
 * @public
 */
export interface RefinedParams<RT extends ResponseType | undefined> extends Params {
    responseType?: RT;
}

/**
 * Request authentication method.
 * @public
 */
export type AuthMethod = 'basic' | 'digest' | 'ntlm';

/**
 * Response type.
 * @public
 */
export type ResponseType = 'binary' | 'none' | 'text';

/**
 * Cookie value in request parameters.
 * https://docs.k6.io/docs/params-k6http
 * @public
 */
export type ParamsCookieValue = string | { value?: string; replace?: boolean };

// === Request body ===
// --------------------

/**
 * Request body.
 * @public
 */
export type RequestBody = string | StructuredRequestBody;

/**
 * Structured request body. May include file uploads.
 * @public
 */
export interface StructuredRequestBody {
    [name: string]: string | FileData;
}

// === Batch request ===
// ---------------------

/**
 * Batch request specification.
 * https://docs.k6.io/docs/batch-requests
 * @public
 */
export type BatchRequest = string | ArrayBatchRequest | ObjectBatchRequest;

/**
 * Array form batch request specification.
 * @public
 */
export type ArrayBatchRequest = [ string, string, (RequestBody | null)?, (Params | null)? ];

/**
 * Object form batch request specification.
 * @public
 */
export interface ObjectBatchRequest {
    /** Request method. */
    method: string;

    /** Request URL. */
    url: string;

    /** Request body. */
    body?: RequestBody | null;

    /** Requset parameters. */
    params?: Params | null;
}

/**
 * Set of batch request specifications.
 * @public
 */
export type BatchRequests = BatchRequest[] | { [name: string]: BatchRequest };

// === Refined batch request ===
// -----------------------------

export type RefinedBatchRequest<RT extends ResponseType | undefined> =
    | string
    | ArrayRefinedBatchRequest<RT>
    | ObjectRefinedBatchRequest<RT>;
export type ArrayRefinedBatchRequest<RT extends ResponseType | undefined> = [
    string,
    string,
    (RequestBody | null)?,
    (RefinedParams<RT> | null)?
];
export interface ObjectRefinedBatchRequest<RT extends ResponseType | undefined> {
    method: string;
    url: string;
    body?: RequestBody | null;
    params?: RefinedParams<RT> | null;
}

// === Batch responses ===
// -----------------------

export type BatchResponses<Q> = {
    [K in keyof Q]: Q[K] extends RefinedBatchRequest<infer RT> ? RefinedResponse<RT> : never;
};

// === Response ===
// ----------------

export interface Response {
    body: ResponseBody;
    cookies: { [name: string]: ResponseCookie[] };
    error: string;
    error_code: number;
    headers: { [name: string]: string };
    ocsp: {
        produced_at: number;
        this_update: number;
        next_update: number;
        revocation_reason: string;
        revoked_at: number;
        status: string;
    };
    proto: string;
    remote_ip: string;
    remote_port: number;
    request: {
        body: string;
        cookies: { [name: string]: RequestCookie[] };
        headers: { [name: string]: string[] };
        method: string;
        url: string;
    };
    status: number;
    timings: {
        blocked: number;
        connecting: number;
        tls_handshaking: number;
        sending: number;
        waiting: number;
        receiving: number;
        duration: number;
    };
    tls_cipher_suite: string;
    tls_version: string;
    url: string;
    clickLink<RT extends ResponseType | undefined>(args?: {
        selector?: string;
        params?: RefinedParams<RT> | null;
    }): RefinedResponse<RT>;
    html(selector?: string): Selection;
    json(selector?: string): JSONValue | undefined;
    submitForm<RT extends ResponseType | undefined>(args?: {
        formSelector?: string;
        fields?: { [name: string]: string };
        submitSelector?: string;
        params?: RefinedParams<RT> | null;
    }): RefinedResponse<RT>;
}
export interface RefinedResponse<RT extends ResponseType | undefined> extends Response {
    body: RefinedResponseBody<RT>;
}
export type ResponseBody = string | bytes | null;
export type RefinedResponseBody<RT extends ResponseType | undefined> = RT extends 'binary'
    ? bytes
    : RT extends 'none'
    ? null
    : RT extends 'text'
    ? string
    : RT extends undefined
    ? string | null // Default body type conditional on program options
    : never;
export interface RequestCookie {
    name: string;
    value: string;
    replace: boolean;
}
export interface ResponseCookie {
    name: string;
    value: string;
    domain: string;
    path: string;
    httpOnly: boolean;
    secure: boolean;
    maxAge: number;
    expires: number;
}

// === File data ===
// -----------------

export abstract class FileData {
    protected __brand: never;
    data: string | bytes;
    filename?: string;
    content_type?: string;
}

// === Cookie jar ===
// ------------------

export abstract class CookieJar {
    protected __brand: never;
    cookiesForURL(url: string): CookieJarCookies;
    set(name: string, value: string, options?: CookieOptions | null): void;
}
export interface CookieJarCookies {
    [name: string]: string[];
}
export interface CookieOptions {
    domain?: string;
    path?: string;
    expires?: string;
    max_age?: number;
    secure?: boolean;
    http_only?: boolean;
}
