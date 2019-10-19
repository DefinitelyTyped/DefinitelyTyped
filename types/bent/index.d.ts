// Type definitions for bent 7.0
// Project: https://github.com/mikeal/bent#readme
// Definitions by: Ovyerus <https://github.com/me>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.7

/// <reference types="node" />

import { PassThrough, Stream } from 'stream';

type HttpMethod = 'GET' | 'POST' | 'DELETE' | 'PUT' | 'PATCH' | 'HEAD' | 'OPTIONS' | 'CONNECT' | 'TRACE';
type StatusCode = number;
type BaseUrl = string;
interface Headers { [x: string]: any; }

type Json = {[x: string]: any} | any[];
type ValidResponse = bent.BentResponse | string | Buffer | ArrayBuffer | Json;

declare function bent(...args: bent.Options[]): bent.RequestFunction;

// Can't use these until we get some sort of pattern checking for strings, ala https://github.com/microsoft/TypeScript/issues/6579
// Otherwise, `string` from BaseUrl just eats up the extra string literals here, meaning it ends up defaulting to the first type.
// declare function bent(...args: bent.Options[]): bent.RequestFunction<bent.BentResponse>;
// declare function bent(...args: (bent.Options | 'string')[]): bent.RequestFunction<string>;
// declare function bent(...args: (bent.Options | 'buffer')[]): bent.RequestFunction<Buffer | ArrayBuffer>;
// declare function bent(...args: (bent.Options | 'json')[]): bent.RequestFunction<Json>;

declare namespace bent {
    type RequestFunction = (url: string, body?: RequestBody) => Promise<ValidResponse>;
    type Options = HttpMethod | StatusCode | Headers | BaseUrl;
    type RequestBody = string | Stream | Buffer | ArrayBuffer | Json;
    type NodeResponse = PassThrough & {
        statusCode: number;
        statusMessage: string;
        headers: Headers
    };
    type FetchResponse = Response & {statusCode: number};
    type BentResponse = NodeResponse | FetchResponse;
}

export = bent;
