// Type definitions for isomorphic-fetch 0.0
// Project: https://github.com/matthew-andrews/isomorphic-fetch
// Definitions by: Todd Lucas <https://github.com/toddlucas>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2
/// <reference types="node" />

//#region String options for Request/Response
type ReferrerPolicy = '' | 'no-referrer' | 'no-referrer-when-downgrade' | 'origin-only' | 'origin-when-cross-origin' | 'unsafe-url';
type RequestCache = 'default' | 'no-store' | 'reload' | 'no-cache' | 'force-cache';
type RequestCredentials = 'omit' | 'same-origin' | 'include';
type RequestDestination = '' | 'document' | 'sharedworker' | 'subresource' | 'unknown' | 'worker';
type RequestMode = 'navigate' | 'same-origin' | 'no-cors' | 'cors';
type RequestRedirect = 'follow' | 'error' | 'manual';
type RequestType = '' | 'audio' | 'font' | 'image' | 'script' | 'style' | 'track' | 'video';
type ResponseType = 'basic' | 'cors' | 'default' | 'error' | 'opaque' | 'opaqueredirect';
//#endregion

//#region Blob class(provided by node-fetch) typings
interface BlobPropertyBag {
    endings?: string;
    type?: string;
}
interface Blob {
    readonly size: number;
    readonly type: string;
    msClose(): void;
    msDetachStream(): any;
    slice(start?: number, end?: number, contentType?: string): Blob;
}
// TODO: check does Blob variable exist in node's global
declare var Blob: {
    prototype: Blob;
    new (blobParts?: any[], options?: BlobPropertyBag): Blob;
};
//#endregion

//#region Header class typings
type HeadersInit = Headers | string[][] | { [key: string]: string };
interface Headers {
    append(name: string, value: string): void;
    delete(name: string): void;
    forEach(callback: (header: [string, string]) => void, thisArg?: any): void;
    get(name: string): string | null;
    has(name: string): boolean;
    set(name: string, value: string): void;
}
declare var Headers: {
    prototype: Headers;
    new(init?: HeadersInit): Headers;
};
//#endregion

//#region Body interface typings which reflects diffs
interface Body {
    readonly bodyUsed: boolean;
    arrayBuffer(): Promise<ArrayBuffer>;
    buffer(): Promise<Buffer>;
    blob(): Promise<Blob>;
    json(): Promise<any>;
    text(): Promise<string>;
}
//#endregion

//#region Request class typings
interface RequestInit {
    body?: NodeJS.ReadableStream | Blob | Int8Array | Int16Array | Int32Array | Uint8Array | Uint16Array | Uint32Array | Uint8ClampedArray | Float32Array | Float64Array | DataView | ArrayBuffer | Buffer | string | null;
    cache?: RequestCache;
    credentials?: RequestCredentials;
    headers?: HeadersInit;
    integrity?: string;
    keepalive?: boolean;
    method?: string;
    mode?: RequestMode;
    redirect?: RequestRedirect;
    referrer?: string;
    referrerPolicy?: ReferrerPolicy;
    window?: any;
}
interface Request extends Body {
    readonly cache: RequestCache;
    readonly credentials: RequestCredentials;
    readonly destination: RequestDestination;
    readonly headers: Headers;
    readonly integrity: string;
    readonly keepalive: boolean;
    readonly method: string;
    readonly mode: RequestMode;
    readonly redirect: RequestRedirect;
    readonly referrer: string;
    readonly referrerPolicy: ReferrerPolicy;
    readonly type: RequestType;
    readonly url: string;
    clone(): Request;
}
declare var Request: {
    prototype: Request;
    new(input: Request | string, init?: RequestInit): Request;
};
//#endregion

//#region Response class typings
interface ResponseInit {
    headers?: HeadersInit;
    status?: number;
    statusText?: string;
}
interface Response extends Body {
    readonly body: NodeJS.ReadableStream | null;
    readonly headers: Headers;
    readonly ok: boolean;
    readonly redirected: boolean;
    readonly status: number;
    readonly statusText: string;
    readonly type: ResponseType;
    readonly url: string;
    clone(): Response;
}
declare var Response: {
    prototype: Response;
    new(body?: NodeJS.ReadableStream | Blob | Int8Array | Int16Array | Int32Array | Uint8Array | Uint16Array | Uint32Array | Uint8ClampedArray | Float32Array | Float64Array | DataView | ArrayBuffer | Buffer | string | null, init?: ResponseInit): Response;
    error(): Response;
    redirect(url: string, status?: number): Response;
};
//#endregion

/* Actual fetch function */
declare function fetch(input?: Request | string, init?: RequestInit): Promise<Response>;
