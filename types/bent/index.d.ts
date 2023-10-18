/// <reference types="node" />
/// <reference lib="dom" />

import { PassThrough, Stream } from "stream";

type HttpMethod = "GET" | "POST" | "DELETE" | "PUT" | "PATCH" | "HEAD" | "OPTIONS" | "CONNECT" | "TRACE";
type StatusCode = number;
type BaseUrl = string;
interface Headers {
    [key: string]: any;
}

// Type first
declare function bent(type: "string", ...args: bent.Options[]): bent.RequestFunction<string>;
declare function bent(type: "buffer", ...args: bent.Options[]): bent.RequestFunction<Buffer | ArrayBuffer>;
// eslint-disable-next-line @definitelytyped/no-unnecessary-generics
declare function bent<T extends bent.Json = any>(type: "json", ...args: bent.Options[]): bent.RequestFunction<T>;

// Method or url first
declare function bent(baseUrl: string, type: "string", ...args: bent.Options[]): bent.RequestFunction<string>;
declare function bent(
    baseUrl: string,
    type: "buffer",
    ...args: bent.Options[]
): bent.RequestFunction<Buffer | ArrayBuffer>;
declare function bent<T extends bent.Json = any>(
    baseUrl: string,
    type: "json",
    ...args: bent.Options[]
): // eslint-disable-next-line @definitelytyped/no-unnecessary-generics
bent.RequestFunction<T>;
declare function bent(baseUrl: string, ...args: bent.Options[]): bent.RequestFunction<bent.ValidResponse>;

// eslint-disable-next-line @definitelytyped/no-unnecessary-generics
declare function bent<T extends bent.ValidResponse>(...args: bent.Options[]): bent.RequestFunction<T>;

// If we get some sort of custom nominal types, or regex literals, we might be able to simplify to something similar to
// declare function bent(...args: bent.Options[]): bent.RequestFunction<bent.BentResponse>;
// declare function bent(...args: (bent.Options | 'string')[]): bent.RequestFunction<string>;
// declare function bent(...args: (bent.Options | 'buffer')[]): bent.RequestFunction<Buffer | ArrayBuffer>;
// declare function bent<T extends bent.Json = any>(...args: (bent.Options | 'json')[]): bent.RequestFunction<T>;

declare namespace bent {
    type RequestFunction<T extends ValidResponse> = (url: string, body?: RequestBody, headers?: Headers) => Promise<T>;
    type Options = HttpMethod | StatusCode | Headers | BaseUrl;
    type RequestBody = string | Stream | Buffer | ArrayBuffer | Json;
    type NodeResponse = PassThrough & {
        statusCode: number;
        statusMessage: string;
        headers: Headers;
        arrayBuffer(): Promise<Buffer>;
        text(): Promise<string>;
        json(): Promise<Json>;
    };
    type FetchResponse = Response & { statusCode: number };
    type BentResponse = NodeResponse | FetchResponse;

    type Json = { [key: string]: any; [key: number]: any } | any[];
    type ValidResponse = BentResponse | string | Buffer | ArrayBuffer | Json;

    class StatusError extends Error {
        statusCode: number;
        arrayBuffer(): Promise<ArrayBuffer | Buffer>;
        text(): Promise<string>;
        json(): Promise<Json>;
        responseBody: Promise<ArrayBuffer | Buffer>;
        headers: { [key: string]: any };
    }
}

export = bent;
