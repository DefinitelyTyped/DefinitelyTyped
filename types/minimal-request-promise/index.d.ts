/// <reference types="node" />

import * as http from "http";

interface MinimalRequestPromiseResponse {
    headers: http.IncomingHttpHeaders[];
    body: string;
    statusCode: number;
    statusMessage: string;
}

declare function minimalRequestPromise(
    callOptions: http.RequestOptions,
    PromiseImplementation?: PromiseConstructor,
): Promise<MinimalRequestPromiseResponse>;
declare namespace minimalRequestPromise {
    export function get(
        url: string,
        additionalOptions?: http.RequestOptions,
        PromiseImplementation?: PromiseConstructor,
    ): Promise<MinimalRequestPromiseResponse>;
    export function post(
        url: string,
        additionalOptions: http.RequestOptions,
        PromiseImplementation?: PromiseConstructor,
    ): Promise<MinimalRequestPromiseResponse>;
    export function put(
        url: string,
        additionalOptions: http.RequestOptions,
        PromiseImplementation?: PromiseConstructor,
    ): Promise<MinimalRequestPromiseResponse>;
    function del(
        url: string,
        additionalOptions?: http.RequestOptions,
        PromiseImplementation?: PromiseConstructor,
    ): Promise<MinimalRequestPromiseResponse>;
    export { del as delete };
}

export = minimalRequestPromise;
