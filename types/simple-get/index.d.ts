// Type definitions for simple-get 4.0
// Project: https://github.com/feross/simple-get
// Definitions by: Konrad Perlicki <https://github.com/KonradPerlicki>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

import { ClientRequest, IncomingMessage, RequestOptions } from 'http';
import { URL } from 'url';
import * as FormData from 'form-data';
import { ReadStream } from 'fs';

interface SimpleGetOptions extends RequestOptions {
    url: string;
    /**
     * Default value: ```10```
     */
    maxRedirects?: number;
    body?: string | {
        [key: string]: unknown;
    } | FormData | ReadStream;
    form?: {
        [key: string]: unknown;
    };
    followRedirects?: boolean;
    /**
     * Serialize/deserialize request and response with JSON
     */
    json?: boolean;
}

export = simpleGet;

type Callback = (err: Error | null, res?: IncomingMessage) => void | never;

declare function simpleGet(options: string | SimpleGetOptions | URL, cb: Callback): ClientRequest | never;

declare namespace simpleGet {
    export function concat(
        options: string | SimpleGetOptions | URL,
        cb: (err: Error | null, res?: IncomingMessage, data?: Buffer | object) => void | never,
    ): ClientRequest | never;

    export function get(options: string | SimpleGetOptions | URL, cb: Callback): ClientRequest | never;

    export function head(options: string | SimpleGetOptions | URL, cb: Callback): ClientRequest | never;

    export function patch(options: string | SimpleGetOptions | URL, cb: Callback): ClientRequest | never;

    export function post(options: string | SimpleGetOptions | URL, cb: Callback): ClientRequest | never;

    export function put(options: string | SimpleGetOptions | URL, cb: Callback): ClientRequest | never;

    function _delete(options: string | SimpleGetOptions | URL, cb: Callback): ClientRequest | never;

    export { _delete as delete };
}
