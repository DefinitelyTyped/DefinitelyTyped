import { bytes, JSON } from '.';
import { Selection } from './html';

export function batch(requests: ReadonlyArray<Request>): { [key: string]: LegacyResponse };
export function batch(requests: ReadonlyArray<Request>): LegacyResponse[];
export function del(url: string, body?: string | object, params?: LegacyParams): LegacyResponse;
export function get<RT extends ResponseType>(url: string, params?: GenericParams<RT>): RefinedResponse<RT>;
export function options(url: string, body?: string | object, params?: LegacyParams): LegacyResponse;
export function patch(url: string, body?: string | object, params?: LegacyParams): LegacyResponse;
export function post(url: string, body?: string | object, params?: LegacyParams): LegacyResponse;
export function put(url: string, body?: string | object, params?: LegacyParams): LegacyResponse;
export function request(method: string, url: string, body?: string | object, params?: LegacyParams): LegacyResponse;
export function file(data: string | bytes, filename?: string, contentType?: string): FileData;
export function cookieJar(): CookieJar;

// Params
export class Params {
    auth?: AuthMethod;
    cookies?: { [name: string]: ParamsCookieValue };
    headers?: { [name: string]: string };
    jar?: CookieJar;
    redirects?: number;
    tags?: { [name: string]: string };
    timeout?: number;
    responseType?: ResponseType;
}
export class GenericParams<RT extends ResponseType> extends Params {
    responseType?: RT;
}
export type AuthMethod = 'basic' | 'digest' | 'ntlm';
export type ResponseType = 'binary' | 'none' | 'text';
export type ParamsCookieValue = string | { value?: string; replace?: boolean };

// Response
export class Response {
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
           clickLink<RT extends ResponseType>(args?: {
               selector?: string;
               params?: GenericParams<RT>;
           }): RefinedResponse<RT>;
           html(selector?: string): Selection;
           json(selector?: string): JSON | undefined;
           submitForm<RT extends ResponseType>(args?: {
               formSelector?: string;
               fields?: { [name: string]: string };
               submitSelector?: string;
               params?: GenericParams<RT>;
           }): RefinedResponse<RT>;
       }
export class RefinedResponse<RT extends ResponseType> extends Response {
    body: RefinedResponseBody<RT>;
}
export type ResponseBody = string | bytes | null;
export type RefinedResponseBody<RT extends ResponseType> = RT extends ResponseType
    ? string | null // Default body type is conditional on program options
    : RT extends 'binary'
    ? bytes
    : RT extends 'none'
    ? null
    : RT extends 'text'
    ? string
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

export type Request = string | RequestObj;
export interface RequestObj {
    url: string;
    method?: string;
    body?: string | object;
    params?: LegacyParams;
}

// Legacy
export interface LegacyParams {
    auth?: string;
    cookies?: object;
    headers?: object;
    jar?: CookieJar;
    redirects?: number;
    tags?: object;
    timeout?: number;
    responseType?: string;
}
export interface LegacyResponse {
    body: string;
    cookies: object;
    error: string;
    headers: { [key: string]: string };
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
        cookies: object;
        headers: object;
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
    clickLink: (params?: { selector?: string; params?: LegacyParams }) => LegacyResponse;
    html: (selector?: string) => any;
    json: () => any;
    submitForm: (params?: {
        formSelector?: string;
        fields?: object;
        submitSelector?: string;
        params?: LegacyParams;
    }) => LegacyResponse;
}

export interface FileData {
    data: string | bytes;
    filename?: string;
    content_type?: string;
}

// CookieJar
export class CookieJar {
    private __brand;
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
