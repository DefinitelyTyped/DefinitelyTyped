import { bytes } from '.';

export function batch(requests: ReadonlyArray<Request>): { [key: string]: Response };
export function batch(requests: ReadonlyArray<Request>): Response[];

export function del(url: string, body?: string | object, params?: RequestParams): Response;

export function get(url: string, params?: RequestParams): Response;

export function options(url: string, body?: string | object, params?: RequestParams): Response;

export function patch(url: string, body?: string | object, params?: RequestParams): Response;

export function post(url: string, body?: string | object, params?: RequestParams): Response;

export function put(url: string, body?: string | object, params?: RequestParams): Response;

export function request(method: string, url: string, body?: string | object, params?: RequestParams): Response;

export interface RequestParams {
    auth?: string;
    cookies?: object;
    headers?: object;
    jar?: object;
    redirects?: number;
    tags?: object;
    timeout?: number;
}

export type Request = string | RequestObj;

export interface RequestObj {
    url: string;
    method?: string;
    body?: string | object;
    params?: RequestParams;
}

export interface Response {
    body: string;
    cookies: object;
    error: string;
    headers: { [key: string]: string };
    ocsp: {
        produced_at: number,
        this_update: number,
        next_update: number,
        revocation_reason: string,
        revoked_at: number,
        status: string
    };
    proto: string;
    remote_ip: string;
    remote_port: number;
    request: {
        body: string,
        cookies: object,
        headers: object,
        method: string,
        url: string
    };
    status: number;
    timings: {
        blocked: number,
        looking_up: number,
        connecting: number,
        tls_handshaking: number,
        sending: number,
        waiting: number,
        receiving: number,
        duration: number
    };
    tls_cipher_suite: string;
    tls_version: string;
    url: string;
    clickLink: (params?: {
        selector?: string,
        params?: RequestParams
    }) => Response;
    html: (selector?: string) => any;
    json: () => any;
    submitForm: (params?: {
        formSelector?: string,
        fields?: object,
        submitSelector?: string,
        params?: RequestParams
    }) =>  Response;
}

export function file(data: string | bytes, filename?: string, contentType?: string): FileData;

export interface FileData {
    data: string | bytes;
    filename?: string;
    content_type?: string;
}
