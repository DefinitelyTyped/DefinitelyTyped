// Type definitions for scoped-http-client 0.11
// Project: https://github.com/technoweenie/node-scoped-http-client
// Definitions by: Matt Perry <https://github.com/mattvperry>
//                 Ryan Adolf <https://github.com/rianadon>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node"/>

import { Agent, RequestOptions, IncomingMessage, ClientRequest } from "http";

export type ScopeCallback = (scoped: ScopedClient) => void;
export type RequestCallback = (err: any, request: ClientRequest) => void;
export type ResponseCallback = (cb?: (err: any, response: IncomingMessage, body: string) => void) => ScopedClient;

export interface Options extends RequestOptions {
    encoding?: string;
    httpAgent?: Agent|boolean;
    httpsAgent?: Agent|boolean;
    query?: any;
    pathname?: string;
    slashes?: any;
    hash?: string;
}

export class ScopedClient {
    constructor(url: string, options: Options);
    fullPath(p: string): string;
    scope(options: Options, callback?: ScopeCallback): ScopedClient;
    // tslint:disable-next-line unified-signatures
    scope(url: string, callback?: ScopeCallback): ScopedClient;
    scope(url: string, options: Options, callback?: ScopeCallback): ScopedClient;
    join(suffix: string): string;
    path(p: string): ScopedClient;
    query(key: any, value?: any): ScopedClient;
    host(h: string): ScopedClient;
    port(p: string|number): ScopedClient;
    protocol(p: string): ScopedClient;
    encoding(e?: string): ScopedClient;
    timeout(time: any): ScopedClient;
    auth(user?: string, pass?: string): ScopedClient;
    header(name: string, value: string): ScopedClient;
    headers(h: any): ScopedClient;

    request(method: string, callback?: RequestCallback): ResponseCallback;
    request(method: string, reqBody: string, callback?: RequestCallback): ResponseCallback;

    get(callback?: RequestCallback): ResponseCallback;
    get(reqBody: string, callback?: RequestCallback): ResponseCallback;

    post(callback?: RequestCallback): ResponseCallback;
    post(reqBody: string, callback?: RequestCallback): ResponseCallback;

    patch(callback?: RequestCallback): ResponseCallback;
    patch(reqBody: string, callback?: RequestCallback): ResponseCallback;

    put(callback?: RequestCallback): ResponseCallback;
    put(reqBody: string, callback?: RequestCallback): ResponseCallback;

    delete(callback?: RequestCallback): ResponseCallback;
    delete(reqBody: string, callback?: RequestCallback): ResponseCallback;

    del(callback?: RequestCallback): ResponseCallback;
    del(reqBody: string, callback?: RequestCallback): ResponseCallback;

    head(callback?: RequestCallback): ResponseCallback;
    head(reqBody: string, callback?: RequestCallback): ResponseCallback;
}

export function create(options: Options): ScopedClient;
export function create(url?: string, options?: Options): ScopedClient;
