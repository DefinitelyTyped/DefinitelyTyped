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

// === SSL/TLS versions ===
// ------------------------

/** @public */
export const SSL_3_0 = 'ssl3.0';

/** @public */
export const TLS_1_0 = 'tls1.0';

/** @public */
export const TLS_1_1 = 'tls1.1';

/** @public */
export const TLS_1_2 = 'tls1.2';

/** @public */
export const TLS_1_3 = 'tls1.3';

// === OCSP statuses ===
// ---------------------

/** @public */
export const OCSP_STATUS_GOOD = 'good';

/** @public */
export const OCSP_STATUS_REVOKED = 'revoked';

/** @public */
export const OCSP_STATUS_SERVER_FAILED = 'server_failed';

/** @public */
export const OCSP_STATUS_UNKNOWN = 'unknown';

// === OCSP revocation reasons ===
// -------------------------------

/** @public */
export const OCSP_REASON_AA_COMPROMISE = 'aa_compromise';

/** @public */
export const OCSP_REASON_AFFILIATION_CHANGED = 'affiliation_changed';

/** @public */
export const OCSP_REASON_CA_COMPROMISE = 'ca_compromise';

/** @public */
export const OCSP_REASON_CERTIFICATE_HOLD = 'certificate_hold';

/** @public */
export const OCSP_REASON_CESSATION_OF_OPERATION = 'cessation_of_operation';

/** @public */
export const OCSP_REASON_KEY_COMPROMISE = 'key_compromise';

/** @public */
export const OCSP_REASON_PRIVILEGE_WITHDRAWN = 'privilege_withdrawn';

/** @public */
export const OCSP_REASON_REMOVE_FROM_CRL = 'remove_from_crl';

/** @public */
export const OCSP_REASON_SUPERSEDED = 'superseded';

/** @public */
export const OCSP_REASON_UNSPECIFIED = 'unspecified';

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

    /** Request body compression. */
    compression?: string;

    /** Request scoped cookies. */
    cookies?: { [name: string]: ParamsCookieValue };

    /** Request headers. */
    headers?: { [name: string]: string };

    /** Cookie jar to override default VU cookie jar with. */
    jar?: CookieJar;

    /** Maximum redirects to follow. */
    redirects?: number;

    /** Response type. */
    responseType?: ResponseType;

    /** Response time metric tags. */
    tags?: { [name: string]: string };

    /** Request timeout. */
    timeout?: number;
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

/**
 * Refined batch request specification.
 * Used to infer response body type.
 * @public
 */
export type RefinedBatchRequest<RT extends ResponseType | undefined> =
    | string
    | ArrayRefinedBatchRequest<RT>
    | ObjectRefinedBatchRequest<RT>;

/**
 * Array form refined batch request specification.
 * @public
 */
export type ArrayRefinedBatchRequest<RT extends ResponseType | undefined> = [
    string,
    string,
    (RequestBody | null)?,
    (RefinedParams<RT> | null)?
];

/**
 * Object form refined batch request specification.
 * @public
 */
export interface ObjectRefinedBatchRequest<RT extends ResponseType | undefined> {
    method: string;
    url: string;
    body?: RequestBody | null;
    params?: RefinedParams<RT> | null;
}

// === Batch responses ===
// -----------------------

/**
 * Set of batch responses. Array or object.
 * @public
 */
export type BatchResponses<Q> = {
    [K in keyof Q]: Q[K] extends RefinedBatchRequest<infer RT> ? RefinedResponse<RT> : never;
};

// === Response ===
// ----------------

/**
 * Response.
 * https://docs.k6.io/docs/response-k6http
 * @public
 */
export interface Response {
    /** Response body. */
    body: ResponseBody;

    /** Response cookies. */
    cookies: { [name: string]: ResponseCookie[] };

    /** Non-HTTP error message. */
    error: string;

    /** Error code. Present for 4xx 5xx responses and non-HTTP errors. */
    error_code: number;

    /** Response headers. */
    headers: { [name: string]: string };

    /** Online Certificate Status Protocol response. */
    ocsp: {
        /** When response signed by responder in millisecond Unix time. */
        produced_at: number;

        /** When indicated status was known correct in millisecond Unix time. */
        this_update: number;

        /** When response will be refreshed with the CA in millisecond Unix time. */
        next_update: number;

        /** Certificate revocation reason. One of `OCSP_REASON_*` constants. */
        revocation_reason: string;

        /** When certificate was revoked in millisecond Unix time. */
        revoked_at: number;

        /** Certificate status. One of `OCSP_STATUS_*` constants. */
        status: string;
    };

    /** Protocol used to perform the transfer. */
    proto: Protocol;

    /** Server IP address. */
    remote_ip: string;

    /** Remote port connected to. */
    remote_port: number;

    /** Inciting request details. */
    request: {
        /** Request body. */
        body: string;

        /** Request cookies. */
        cookies: { [name: string]: RequestCookie[] };

        /** Request headers. */
        headers: { [name: string]: string[] };

        /** Request method. */
        method: string;

        /** Request URL. */
        url: string;
    };

    /** HTTP status code. */
    status: number;

    /** Performance timing information. */
    timings: {
        /** Milliseconds spent blocked before initiating request. */
        blocked: number;

        /** Milliseconds spent setting up TCP connection to host. */
        connecting: number;

        /** Milliseconds spent handshaking TLS session with host. */
        tls_handshaking: number;

        /** Milliseconds spent sending request. */
        sending: number;

        /** Milliseconds spent waiting for server response (TTFB). */
        waiting: number;

        /** Milliseconds spent receiving response data. */
        receiving: number;

        /** Total time in milliseconds. `sending+waiting+receiving` */
        duration: number;
    };

    /** TLS cipher suite used. */
    tls_cipher_suite: CipherSuite;

    /** TLS/SSL version used. One of `TLS_*` `SSL_*` constants. */
    tls_version: string;

    /** Fetched URL. May differ from request URL due to redirects. */
    url: string;

    /**
     * Click link on page.
     * https://docs.k6.io/docs/responseclicklink-params
     * @param selector - Selector expression locating link to click.
     * @param params - Parameters for link click request.
     * @returns Link click response.
     */
    clickLink<RT extends ResponseType | undefined>(args?: {
        selector?: string;
        params?: RefinedParams<RT> | null;
    }): RefinedResponse<RT>;

    /**
     * Parse body as HTML. Optionally filter by selector.
     * https://docs.k6.io/docs/response-k6http
     * @param selector - Selector expression.
     * @returns Document node or selected elements.
     */
    html(selector?: string): Selection;

    /**
     * Parse body as JSON. Optionally filter by selector.
     * https://docs.k6.io/docs/response-k6http
     * @param selector - GJSON expression.
     * @returns Parse result if successful, `undefined` if unsuccessful.
     */
    json(selector?: string): JSONValue | undefined;

    /**
     * Submit form on page.
     * https://docs.k6.io/docs/responsesubmitform-params
     * @param formSelector - Selector expression locating form to submit.
     * @param fields - Form field values.
     * @param submitSelector - Selector expression locating submit button.
     * @param params - Parameters for form submission request.
     * @returns Form submission response.
     */
    submitForm<RT extends ResponseType | undefined>(args?: {
        formSelector?: string;
        fields?: { [name: string]: string };
        submitSelector?: string;
        params?: RefinedParams<RT> | null;
    }): RefinedResponse<RT>;
}

/**
 * HTTP protocol.
 * @public
 */
export type Protocol = 'HTTP/1.0' | 'HTTP/1.1' | 'HTTP/2.0';

/**
 * TLS cipher suite.
 * @public
 */
export type CipherSuite =
    | 'TLS_RSA_WITH_RC4_128_SHA'
    | 'TLS_RSA_WITH_3DES_EDE_CBC_SHA'
    | 'TLS_RSA_WITH_AES_128_CBC_SHA'
    | 'TLS_RSA_WITH_AES_128_CBC_SHA256'
    | 'TLS_RSA_WITH_AES_256_CBC_SHA'
    | 'TLS_RSA_WITH_AES_128_GCM_SHA256'
    | 'TLS_RSA_WITH_AES_256_GCM_SHA384'
    | 'TLS_ECDHE_RSA_WITH_RC4_128_SHA'
    | 'TLS_ECDHE_RSA_WITH_3DES_EDE_CBC_SHA'
    | 'TLS_ECDHE_RSA_WITH_AES_128_CBC_SHA'
    | 'TLS_ECDHE_RSA_WITH_AES_128_CBC_SHA256'
    | 'TLS_ECDHE_RSA_WITH_AES_256_CBC_SHA'
    | 'TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256'
    | 'TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384'
    | 'TLS_ECDHE_RSA_WITH_CHACHA20_POLY1305'
    | 'TLS_ECDHE_ECDSA_WITH_RC4_128_SHA'
    | 'TLS_ECDHE_ECDSA_WITH_AES_128_CBC_SHA'
    | 'TLS_ECDHE_ECDSA_WITH_AES_128_CBC_SHA256'
    | 'TLS_ECDHE_ECDSA_WITH_AES_256_CBC_SHA'
    | 'TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256'
    | 'TLS_ECDHE_ECDSA_WITH_AES_256_GCM_SHA384'
    | 'TLS_ECDHE_ECDSA_WITH_CHACHA20_POLY1305'
    | 'TLS_AES_128_GCM_SHA256'
    | 'TLS_AES_256_GCM_SHA384'
    | 'TLS_CHACHA20_POLY1305_SHA256';

/**
 * Refined response.
 * Exposes body with best possible type.
 * @public
 */
export interface RefinedResponse<RT extends ResponseType | undefined> extends Response {
    body: RefinedResponseBody<RT>;
}

/**
 * Response body.
 * @public
 */
export type ResponseBody = string | bytes | null;

/**
 * Refined response body.
 * Best possible type given `responseType` from request parameters.
 * @typeParam RT - `Params.responseType` value.
 * @privateRemarks Default type is a union due to depending on program options.
 * @public
 */
export type RefinedResponseBody<RT extends ResponseType | undefined> = RT extends 'binary'
    ? bytes
    : RT extends 'none'
    ? null
    : RT extends 'text'
    ? string
    : RT extends undefined
    ? string | null
    : never;

/**
 * Request cookie description in response.
 * @public
 */
export interface RequestCookie {
    /** Name. */
    name: string;

    /** Value. */
    value: string;

    /** Whether configured to override VU cookie jar. */
    replace: boolean;
}

/**
 * Response cookie.
 * @public
 */
export interface ResponseCookie {
    /** Name. */
    name: string;

    /** Value. */
    value: string;

    /** Domain allowed to receive. */
    domain: string;

    /** Scope path. */
    path: string;

    /** HTTP only. */
    httpOnly: boolean;

    /** Secure. */
    secure: boolean;

    /** Seconds until expiration. */
    maxAge: number;

    /** Expiry time in millisecond Unix time. */
    expires: number;
}

// === File data ===
// -----------------

/**
 * File data for constructing a multipart request with file uploads.
 * https://docs.k6.io/docs/filedata-k6http
 * @public
 */
export abstract class FileData {
    protected __brand: never;

    /** File data. */
    data: string | bytes;

    /** Filename to include in MIME message. */
    filename?: string;

    /** Content type to include in MIME message. */
    content_type?: string;
}

// === Cookie jar ===
// ------------------

/**
 * Object for storing cookies.
 * https://docs.k6.io/docs/cookiejar-k6http
 * @public
 */
export abstract class CookieJar {
    protected __brand: never;

    /**
     * Get cookies set for a particular URL.
     * https://docs.k6.io/docs/cookiejarcookiesforurlurl
     * @param url - URL for which to get cookies.
     * @returns Cookies for URL.
     */
    cookiesForURL(url: string): CookieJarCookies;

    /**
     * Set cookie.
     * https://docs.k6.io/docs/cookiejarsetname-value-options
     * @param name - Cookie name.
     * @param value - Cookie value.
     * @param options - Optional settings.
     */
    set(name: string, value: string, options?: CookieOptions | null): void;
}

/**
 * Cookies retrieved from cookie jar.
 * @public
 */
export interface CookieJarCookies {
    [name: string]: string[];
}

/**
 * Optional settings when adding a cookie to a cookie jar.
 * @public
 */
export interface CookieOptions {
    /** Domain allowed to receive. */
    domain?: string;

    /** Scope path. */
    path?: string;

    /** Expiry time in RFC1123 format. */
    expires?: string;

    /** Seconds until expiration. */
    max_age?: number;

    /** Secure. */
    secure?: boolean;

    /** HTTP only. */
    http_only?: boolean;
}
