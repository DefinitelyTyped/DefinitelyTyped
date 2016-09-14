// Type definitions for Fetch API
// Project: https://github.com/github/fetch
// Definitions by: Ryan Graham <https://github.com/ryan-codingintrigue>, Kagami Sascha Rosylight <https://github.com/saschanaz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="whatwg-streams" />

interface Window {
    fetch(url: RequestInfo, init?: RequestInit): Promise<Response>;
}
declare var fetch: typeof window.fetch;

declare type HeadersInit = Headers | string[][] | { [key: string]: string };
declare class Headers {
    constructor(init?: HeadersInit);

    append(name: string, value: string): void;
    delete(name: string): void;
    get(name: string): string; // | null; (TS 2.0 strict null check)
    has(name: string): boolean;
    set(name: string, value: string): void;

    // WebIDL pair iterator: iterable<ByteString, ByteString>
    entries(): IterableIterator<[string, string]>;
    forEach(callback: (value: string, index: number, headers: Headers) => void, thisArg?: any): void;
    keys(): IterableIterator<string>;
    values(): IterableIterator<string>;
    [Symbol.iterator](): IterableIterator<[string, string]>;
}

declare type BodyInit = Blob | ArrayBufferView | ArrayBuffer | FormData /* | URLSearchParams */ | string;
interface Body {
    bodyUsed: boolean;
    arrayBuffer(): Promise<ArrayBuffer>;
    blob(): Promise<Blob>;
    formData(): Promise<FormData>;
    json(): Promise<any>;
    text(): Promise<string>;
}

declare type RequestInfo = Request | string;
interface Request extends Body {
    method: string;
    url: string;
    headers: Headers;

    type: RequestType
    destination: RequestDestination;
    referrer: string;
    referrerPolicy: ReferrerPolicy;
    mode: RequestMode;
    credentials: RequestCredentials;
    cache: RequestCache;
    redirect: RequestRedirect;
    integrity: string;

    clone(): Request;
}
interface RequestInit {
    method?: string;
    headers?: HeadersInit;
    body?: BodyInit;
    referrer?: string;
    referrerPolicy?: ReferrerPolicy;
    mode?: RequestMode;
    credentials?: RequestCredentials;
    cache?: RequestCache;
    redirect?: RequestRedirect;
    integrity?: string;
    window?: any;
}
interface RequestConstructor {
    new (input: RequestInfo, init?: RequestInit): Request;
}
declare var Request: RequestConstructor;

type RequestType = "" | "audio" | "font" | "image" | "script" | "style" | "track" | "video";
type RequestDestination = "" | "document" | "embed" | "font" | "image" | "manifest" | "media" | "object" | "report" | "script" | "serviceworker" | "sharedworker" | "style" | "worker" | "xslt";
type RequestMode = "navigate" | "same-origin" | "no-cors" | "cors";
type RequestCredentials = "omit" | "same-origin" | "include";
type RequestCache = "default" | "no-store" | "reload" | "no-cache" | "force-cache" | "only-if-cached";
type RequestRedirect = "follow" | "error" | "manual";
type ReferrerPolicy = "" | "no-referrer" | "no-referrer-when-downgrade" | "same-origin" | "origin" | "strict-origin" | "origin-when-cross-origin" | "strict-origin-when-cross-origin" | "unsafe-url";

interface Response extends Body {
    type: ResponseType;
    url: string;
    redirected: boolean;
    status: number;
    ok: boolean;
    statusText: string;
    headers: Headers;
    body: ReadableStream; // | null;
    trailer: Promise<Headers>;

    clone(): Response;
}
interface ResponseInit {
    status?: number;
    statusText?: string;
    headers?: HeadersInit;
}
interface ResponseConstructor {
    new (body?: BodyInit, init?: ResponseInit): Response;

    error(): Response;
    redirect(url: string, status?: number): Response;
}
declare var Response: ResponseConstructor;

type ResponseType = "basic" | "cors" | "default" | "error" | "opaque" | "opaqueredirect";
