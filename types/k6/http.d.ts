import { bytes, JSONValue } from '.';
import { Selection } from './html';

// Generics refine response to expose body with correct type
export function del<RT extends ResponseType | undefined>(
    url: string,
    body?: RequestBody | null,
    params?: GenericParams<RT> | null
): RefinedResponse<RT>;
export function get<RT extends ResponseType | undefined>(
    url: string,
    params?: GenericParams<RT> | null
): RefinedResponse<RT>;
export function options<RT extends ResponseType | undefined>(
    url: string,
    body?: RequestBody | null,
    params?: GenericParams<RT> | null
): RefinedResponse<RT>;
export function patch<RT extends ResponseType | undefined>(
    url: string,
    body?: RequestBody | null,
    params?: GenericParams<RT> | null
): RefinedResponse<RT>;
export function post<RT extends ResponseType | undefined>(
    url: string,
    body?: RequestBody | null,
    params?: GenericParams<RT> | null
): RefinedResponse<RT>;
export function put<RT extends ResponseType | undefined>(
    url: string,
    body?: RequestBody | null,
    params?: GenericParams<RT> | null
): RefinedResponse<RT>;
export function request<RT extends ResponseType | undefined>(
    method: string,
    url: string,
    body?: RequestBody | null,
    params?: GenericParams<RT> | null
): RefinedResponse<RT>;
export function batch<Q extends BatchRequests>(requests: Q): BatchResponses<Q>;
export function file(data: string | bytes, filename?: string, contentType?: string): FileData;
export function cookieJar(): CookieJar;

// Params
export interface Params {
    auth?: AuthMethod;
    cookies?: { [name: string]: ParamsCookieValue };
    headers?: { [name: string]: string };
    jar?: CookieJar;
    redirects?: number;
    tags?: { [name: string]: string };
    timeout?: number;
    responseType?: ResponseType;
}
export interface GenericParams<RT extends ResponseType | undefined> extends Params {
    responseType?: RT;
}
export type AuthMethod = 'basic' | 'digest' | 'ntlm';
export type ResponseType = 'binary' | 'none' | 'text';
export type ParamsCookieValue = string | { value?: string; replace?: boolean };

// RequestBody
export type RequestBody = string | StructuredRequestBody;
export interface StructuredRequestBody {
    [name: string]: string | FileData;
}

// BatchRequest
export type BatchRequest = string | ArrayBatchRequest | ObjectBatchRequest;
export type ArrayBatchRequest = [ string, string, (RequestBody | null)?, (Params | null)? ];
export interface ObjectBatchRequest {
    method: string;
    url: string;
    body?: RequestBody | null;
    params?: Params | null;
}
export type BatchRequests = BatchRequest[] | { [name: string]: BatchRequest };

// GenericBatchRequest
export type GenericBatchRequest<RT extends ResponseType | undefined> = string | ArrayGenericBatchRequest<RT> | ObjectGenericBatchRequest<RT>;
export type ArrayGenericBatchRequest<RT extends ResponseType | undefined> = [ string, string, (RequestBody | null)?, (GenericParams<RT> | null)? ];
export interface ObjectGenericBatchRequest<RT extends ResponseType | undefined> {
    method: string;
    url: string;
    body?: RequestBody | null;
    params?: GenericParams<RT> | null;
}

// BatchResponses
export type BatchResponses<Q> = {
    [K in keyof Q]: Q[K] extends GenericBatchRequest<infer RT>
        ? RefinedResponse<RT>
        : never;
};

// Response
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
        looking_up: number;
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
        params?: GenericParams<RT> | null;
    }): RefinedResponse<RT>;
    html(selector?: string): Selection;
    json(selector?: string): JSONValue | undefined;
    submitForm<RT extends ResponseType | undefined>(args?: {
        formSelector?: string;
        fields?: { [name: string]: string };
        submitSelector?: string;
        params?: GenericParams<RT> | null;
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

// FileData
export abstract class FileData {
    protected __brand: never;
    data: string | bytes;
    filename?: string;
    content_type?: string;
}

// CookieJar
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
