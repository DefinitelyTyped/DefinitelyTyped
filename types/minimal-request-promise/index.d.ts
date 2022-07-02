// Type definitions for minimal-request-promise 1.5
// Project: https://github.com/gojko/minimal-request-promise
// Definitions by: Slobodan Stojanovic <https://github.com/stojanovic>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

/// <reference types="node" />

import * as http from 'http';

interface MinimalRequestPromiseResponse {
    headers: http.IncomingHttpHeaders[];
    body: string;
    statusCode: number;
    statusMessage: string;
}

declare function minimalRequestPromise(callOptions: http.RequestOptions, PromiseImplementation?: PromiseConstructor): Promise<MinimalRequestPromiseResponse>;
declare namespace minimalRequestPromise {
    export function get(url: string, additionalOptions?: http.RequestOptions, PromiseImplementation?: PromiseConstructor): Promise<MinimalRequestPromiseResponse>;
    export function post(url: string, additionalOptions: http.RequestOptions, PromiseImplementation?: PromiseConstructor): Promise<MinimalRequestPromiseResponse>;
    export function put(url: string, additionalOptions: http.RequestOptions, PromiseImplementation?: PromiseConstructor): Promise<MinimalRequestPromiseResponse>;
    function del(url: string, additionalOptions?: http.RequestOptions, PromiseImplementation?: PromiseConstructor): Promise<MinimalRequestPromiseResponse>;
    export { del as delete };
}

export = minimalRequestPromise;
