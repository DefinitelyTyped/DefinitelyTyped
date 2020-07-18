/*
 * This file is necessary to declare global functions that might also be included by `--lib dom`.
 * Due to a TypeScript bug, these cannot be placed inside a `declare global` block in index.d.ts.
 * https://github.com/Microsoft/TypeScript/issues/16430
 */

//
// Timer Functions
//
declare function clearInterval(handle: number): void;
declare function clearTimeout(handle: number): void;
declare function setInterval(handler: (...args: any[]) => void, timeout: number): number;
declare function setInterval(handler: any, timeout?: any, ...args: any[]): number;
declare function setTimeout(handler: (...args: any[]) => void, timeout: number): number;
declare function setTimeout(handler: any, timeout?: any, ...args: any[]): number;
declare function clearImmediate(handle: number): void;
declare function setImmediate(handler: (...args: any[]) => void): number;

declare function cancelAnimationFrame(handle: number): void;
declare function requestAnimationFrame(callback: (time: number) => void): number;

declare function fetchBundle(bundleId: number, callback: (error?: Error | null) => void): void;

//
// Fetch API
//

declare interface GlobalFetch {
    fetch(input: RequestInfo, init?: RequestInit): Promise<Response>;
}

declare function fetch(input: RequestInfo, init?: RequestInit): Promise<Response>;

declare interface WindowOrWorkerGlobalScope {
    fetch(input: RequestInfo, init?: RequestInit): Promise<Response>;
}

interface Blob {}

declare class FormData {
    append(name: string, value: any): void;
}

declare interface Body {
    readonly bodyUsed: boolean;
    arrayBuffer(): Promise<ArrayBuffer>;
    blob(): Promise<Blob>;
    json(): Promise<any>;
    text(): Promise<string>;
    formData(): Promise<FormData>;
}

declare interface Headers {
    append(name: string, value: string): void;
    delete(name: string): void;
    forEach(callback: Function, thisArg?: any): void;
    get(name: string): string | null;
    has(name: string): boolean;
    set(name: string, value: string): void;
}

declare var Headers: {
    prototype: Headers;
    new (init?: HeadersInit_): Headers;
};

type BodyInit_ =
    | Blob
    | Int8Array
    | Int16Array
    | Int32Array
    | Uint8Array
    | Uint16Array
    | Uint32Array
    | Uint8ClampedArray
    | Float32Array
    | Float64Array
    | DataView
    | ArrayBuffer
    | FormData
    | string
    | null;

declare interface RequestInit {
    body?: BodyInit_;
    credentials?: RequestCredentials_;
    headers?: HeadersInit_;
    integrity?: string;
    keepalive?: boolean;
    method?: string;
    mode?: RequestMode_;
    referrer?: string;
    window?: any;
    signal?: AbortSignal;
}

declare interface Request extends Object, Body {
    readonly credentials: RequestCredentials_;
    readonly headers: Headers;
    readonly method: string;
    readonly mode: RequestMode_;
    readonly referrer: string;
    readonly url: string;
    clone(): Request;
}

declare var Request: {
    prototype: Request;
    new (input: Request | string, init?: RequestInit): Request;
};

declare type RequestInfo = Request | string;

declare interface ResponseInit {
    headers?: HeadersInit_;
    status?: number;
    statusText?: string;
}

declare interface Response extends Object, Body {
    readonly headers: Headers;
    readonly ok: boolean;
    readonly status: number;
    readonly statusText: string;
    readonly type: ResponseType_;
    readonly url: string;
    readonly redirected: boolean;
    clone(): Response;
}

declare var Response: {
    prototype: Response;
    new (body?: BodyInit_, init?: ResponseInit): Response;
    error: () => Response;
    redirect: (url: string, status?: number) => Response;
};

type HeadersInit_ = Headers | string[][] | { [key: string]: string };
type RequestCredentials_ = 'omit' | 'same-origin' | 'include';
type RequestMode_ = 'navigate' | 'same-origin' | 'no-cors' | 'cors';
type ResponseType_ = 'basic' | 'cors' | 'default' | 'error' | 'opaque' | 'opaqueredirect';

//
// XMLHttpRequest
//

declare interface ProgressEvent extends Event {
    readonly lengthComputable: boolean;
    readonly loaded: number;
    readonly total: number;
}

interface XMLHttpRequestEventMap extends XMLHttpRequestEventTargetEventMap {
    readystatechange: Event;
}

interface XMLHttpRequest extends EventTarget, XMLHttpRequestEventTarget {
    //  msCaching: string;
    onreadystatechange: ((this: XMLHttpRequest, ev: Event) => any) | null;
    readonly readyState: number;
    readonly response: any;
    readonly responseText: string;
    responseType: XMLHttpRequestResponseType;
    readonly responseURL: string;
    readonly responseXML: Document | null;
    readonly status: number;
    readonly statusText: string;
    timeout: number;
    readonly upload: XMLHttpRequestUpload;
    withCredentials: boolean;
    abort(): void;
    getAllResponseHeaders(): string;
    getResponseHeader(header: string): string | null;
    //  msCachingEnabled(): boolean;
    open(method: string, url: string, async?: boolean, user?: string | null, password?: string | null): void;
    overrideMimeType(mime: string): void;
    send(data?: any): void;
    setRequestHeader(header: string, value: string): void;
    readonly DONE: number;
    readonly HEADERS_RECEIVED: number;
    readonly LOADING: number;
    readonly OPENED: number;
    readonly UNSENT: number;
    addEventListener<K extends keyof XMLHttpRequestEventMap>(
        type: K,
        listener: (this: XMLHttpRequest, ev: XMLHttpRequestEventMap[K]) => any,
    ): void;
    //  addEventListener(type: string, listener: EventListenerOrEventListenerObject): void;
    removeEventListener<K extends keyof XMLHttpRequestEventMap>(
        type: K,
        listener: (this: XMLHttpRequest, ev: XMLHttpRequestEventMap[K]) => any,
    ): void;
    //  removeEventListener(type: string, listener: EventListenerOrEventListenerObject): void;
}

declare var XMLHttpRequest: {
    prototype: XMLHttpRequest;
    new (): XMLHttpRequest;
    readonly DONE: number;
    readonly HEADERS_RECEIVED: number;
    readonly LOADING: number;
    readonly OPENED: number;
    readonly UNSENT: number;
};

interface XMLHttpRequestEventTargetEventMap {
    abort: ProgressEvent;
    error: ProgressEvent;
    load: ProgressEvent;
    loadend: ProgressEvent;
    loadstart: ProgressEvent;
    progress: ProgressEvent;
    timeout: ProgressEvent;
}

interface XMLHttpRequestEventTarget {
    onabort: ((this: XMLHttpRequest, ev: ProgressEvent) => any) | null;
    onerror: ((this: XMLHttpRequest, ev: ProgressEvent) => any) | null;
    onload: ((this: XMLHttpRequest, ev: ProgressEvent) => any) | null;
    onloadend: ((this: XMLHttpRequest, ev: ProgressEvent) => any) | null;
    onloadstart: ((this: XMLHttpRequest, ev: ProgressEvent) => any) | null;
    onprogress: ((this: XMLHttpRequest, ev: ProgressEvent) => any) | null;
    ontimeout: ((this: XMLHttpRequest, ev: ProgressEvent) => any) | null;
    addEventListener<K extends keyof XMLHttpRequestEventTargetEventMap>(
        type: K,
        listener: (this: XMLHttpRequestEventTarget, ev: XMLHttpRequestEventTargetEventMap[K]) => any,
    ): void;
    //  addEventListener(type: string, listener: EventListenerOrEventListenerObject): void;
    removeEventListener<K extends keyof XMLHttpRequestEventTargetEventMap>(
        type: K,
        listener: (this: XMLHttpRequestEventTarget, ev: XMLHttpRequestEventTargetEventMap[K]) => any,
    ): void;
    //  removeEventListener(type: string, listener: EventListenerOrEventListenerObject): void;
}

interface XMLHttpRequestUpload extends EventTarget, XMLHttpRequestEventTarget {
    addEventListener<K extends keyof XMLHttpRequestEventTargetEventMap>(
        type: K,
        listener: (this: XMLHttpRequestUpload, ev: XMLHttpRequestEventTargetEventMap[K]) => any,
    ): void;
    //  addEventListener(type: string, listener: EventListenerOrEventListenerObject): void;
    removeEventListener<K extends keyof XMLHttpRequestEventTargetEventMap>(
        type: K,
        listener: (this: XMLHttpRequestUpload, ev: XMLHttpRequestEventTargetEventMap[K]) => any,
    ): void;
    //  removeEventListener(type: string, listener: EventListenerOrEventListenerObject): void;
}

declare var XMLHttpRequestUpload: {
    prototype: XMLHttpRequestUpload;
    new (): XMLHttpRequestUpload;
};

declare type XMLHttpRequestResponseType = '' | 'arraybuffer' | 'blob' | 'document' | 'json' | 'text';

/**
 * Based on definition from lib.dom but using class syntax.
 * The properties are mutable to support users that use a `URL` polyfill, but the implementation
 * built into React Native (as of 0.63) does not implement all the properties.
 */
declare class URL {
    static createObjectURL(blob: Blob): URL;
    static revokeObjectURL(url: string): void;

    constructor(url: string, base?: string);

    href: string;
    readonly origin: string;
    protocol: string;
    username: string;
    password: string;
    host: string;
    hostname: string;
    port: string;
    pathname: string;
    search: string;
    readonly searchParams: URLSearchParams;
    hash: string;

    toJSON(): string;
}

/**
 * Based on definitions of lib.dom and lib.dom.iterable
 */
declare class URLSearchParams {
    constructor(init?: string[][] | Record<string, string> | string | URLSearchParams);

    append(name: string, value: string): void;
    delete(name: string): void;
    get(name: string): string | null;
    getAll(name: string): string[];
    has(name: string): boolean;
    set(name: string, value: string): void;
    sort(): void;
    forEach(callbackfn: (value: string, key: string, parent: URLSearchParams) => void, thisArg?: any): void;
    [Symbol.iterator](): IterableIterator<[string, string]>;

    entries(): IterableIterator<[string, string]>;
    keys(): IterableIterator<string>;
    values(): IterableIterator<string>;
}

interface WebSocketMessageEvent extends Event {
    data?: any;
}
interface WebSocketErrorEvent extends Event {
    message: string;
}
interface WebSocketCloseEvent extends Event {
    code?: number;
    reason?: string;
    message?: string;
}

interface WebSocket extends EventTarget {
    readonly readyState: number;
    send(data: string | ArrayBuffer | ArrayBufferView | Blob): void;
    close(code?: number, reason?: string): void;
    onopen: (() => void) | null;
    onmessage: ((event: WebSocketMessageEvent) => void) | null;
    onerror: ((event: WebSocketErrorEvent) => void) | null;
    onclose: ((event: WebSocketCloseEvent) => void) | null;
}

declare var WebSocket: {
    prototype: WebSocket;
    new (
        uri: string,
        protocols?: string | string[] | null,
        options?: {
            headers: { [headerName: string]: string };
            [optionName: string]: any;
        } | null,
    ): WebSocket;
    readonly CLOSED: number;
    readonly CLOSING: number;
    readonly CONNECTING: number;
    readonly OPEN: number;
};

//
// Abort Controller
//

interface AbortEvent extends Event {
    type: 'abort';
}

declare class AbortSignal {
    /**
     * AbortSignal cannot be constructed directly.
     */
    constructor();
    /**
     * Returns `true` if this `AbortSignal`'s `AbortController` has signaled to abort, and `false` otherwise.
     */
    readonly aborted: boolean;

    onabort: (event: AbortEvent) => void;
}

declare class AbortController {
    /**
     * Initialize this controller.
     */
    constructor();
    /**
     * Returns the `AbortSignal` object associated with this object.
     */
    readonly signal: AbortSignal;
    /**
     * Abort and signal to any observers that the associated activity is to be aborted.
     */
    abort(): void;
}
