// Type definitions for node-fetch v2.1.2
// Project: https://github.com/bitinn/node-fetch
// Definitions by: Torsten Werner <https://github.com/torstenwerner>
//                 Niklas Lindgren <https://github.com/nikcorg>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

///<reference types="node" />

import { Agent } from "http";

export class Request extends Body {
    constructor(input: string | { href: string } | Request, init?: RequestInit);
    clone(): Request;
    context: RequestContext;
    headers: Headers;
    method: string;
    redirect: RequestRedirect;
    referrer: string;
    url: string;

    //node-fetch extensions to the whatwg/fetch spec
    agent?: Agent;
    compress: boolean;
    counter: number;
    follow: number;
    hostname: string;
    port?: number;
    protocol: string;
    size: number;
    timeout: number;
}

interface RequestInit {
    //whatwg/fetch standard options
    body?: BodyInit;
    headers?: HeaderInit | { [index: string]: string };
    method?: string;
    redirect?: RequestRedirect;

    //node-fetch extensions
    agent?: Agent; //=null http.Agent instance, allows custom proxy, certificate etc.
    compress?: boolean; //=true support gzip/deflate content encoding. false to disable
    follow?: number; //=20 maximum redirect count. 0 to not follow redirect
    size?: number; //=0 maximum response body size in bytes. 0 to disable
    timeout?: number; //=0 req/res timeout in ms, it resets on redirect. 0 to disable (OS limit applies)

    //node-fetch does not support mode, cache or credentials options
}

type RequestContext =
    "audio"
    | "beacon"
    | "cspreport"
    | "download"
    | "embed"
    | "eventsource"
    | "favicon"
    | "fetch"
    | "font"
    | "form"
    | "frame"
    | "hyperlink"
    | "iframe"
    | "image"
    | "imageset"
    | "import"
    | "internal"
    | "location"
    | "manifest"
    | "object"
    | "ping"
    | "plugin"
    | "prefetch"
    | "script"
    | "serviceworker"
    | "sharedworker"
    | "style"
    | "subresource"
    | "track"
    | "video"
    | "worker"
    | "xmlhttprequest"
    | "xslt";
type RequestMode = "cors" | "no-cors" | "same-origin";
type RequestRedirect = "error" | "follow" | "manual";
type RequestCredentials = "omit" | "include" | "same-origin";

type RequestCache =
    "default"
    | "force-cache"
    | "no-cache"
    | "no-store"
    | "only-if-cached"
    | "reload";

export class Headers implements Iterable<[string, string]> {
    constructor(init?: Headers | { [k: string]: string });
    forEach(callback: (value: string, name: string) => void): void;
    append(name: string, value: string): void;
    delete(name: string): void;
    get(name: string): string | null;
    getAll(name: string): Array<string>;
    has(name: string): boolean;
    raw(): { [k: string]: string };
    set(name: string, value: string): void;

    // Iterator methods
    entries(): Iterator<[string, string]>;
    keys(): Iterator<string>;
    values(): Iterator<[string]>;
    [Symbol.iterator](): Iterator<[string, string]>;
}

export class Blob {
    type: string;
    size: number;
    slice(start?: number, end?: number): Blob;
}

export class Body {
    constructor(body?: any, opts?: { size?: number; timeout?: number });
    arrayBuffer(): Promise<ArrayBuffer>;
    blob(): Promise<Buffer>;
    body: NodeJS.ReadableStream;
    bodyUsed: boolean;
    buffer(): Promise<Buffer>;
    json(): Promise<any>;
    json<T>(): Promise<T>;
    text(): Promise<string>;
    textConverted(): Promise<string>;
}

export class FetchError extends Error {
    name: "FetchError";
    constructor(message: string, type: string, systemError: string);
}

export class Response extends Body {
    constructor(body?: BodyInit, init?: ResponseInit);
    static error(): Response;
    static redirect(url: string, status: number): Response;
    clone(): Response;
    headers: Headers;
    ok: boolean;
    size: number;
    status: number;
    statusText: string;
    timeout: number;
    type: ResponseType;
    url: string;
}

type ResponseType =
    "basic"
    | "cors"
    | "default"
    | "error"
    | "opaque"
    | "opaqueredirect";

interface ResponseInit {
    headers?: HeaderInit;
    status: number;
    statusText?: string;
}

type HeaderInit = Array<string> | Headers;
type BodyInit = ArrayBuffer | ArrayBufferView | NodeJS.ReadableStream | string;
type RequestInfo = string | Request;

export default function fetch(
    url: string | Request,
    init?: RequestInit
): Promise<Response>;
