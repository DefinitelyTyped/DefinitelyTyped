// Type definitions for isomorphic-fetch
// Project: https://github.com/matthew-andrews/isomorphic-fetch
// Definitions by: Todd Lucas <https://github.com/toddlucas>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

type RequestType = "" | "audio" | "font" | "image" | "script" | "style" | 
    "track" | "video";
type RequestDestination = "" | "document" | "embed" | "font" | "image" | 
    "manifest" | "media" | "object" | "report" | "script" | "serviceworker" | 
    "sharedworker" | "style" | "worker" | "xslt";
type RequestMode = "navigate" | "same-origin" | "no-cors" | "cors";
type RequestCredentials = "omit" | "same-origin" | "include";
type RequestCache =
    "default" | "no-store" | "reload" | "no-cache" | "force-cache" |
    "only-if-cached";
type RequestRedirect = "follow" | "error" | "manual";

type ResponseType = "basic" | "cors" | "default" | "error" | "opaque" | 
    "opaqueredirect";

type ReferrerPolicy = "" | "no-referrer" | "no-referrer-when-downgrade" | 
    "same-origin" | "origin" | "strict-origin" | "origin-when-cross-origin" | 
    "strict-origin-when-cross-origin" | "unsafe-url";

interface IHeaders {
    append(name: string, value: string): void;
    delete(name: string): void;
    get(name: string): string;
    getAll(name: string): Array<string>;
    has(name: string): boolean;
    set(name: string, value: string): void;

    // TODO: iterable<string, string>;
    forEach(callback: (value: string, index: number, headers: IHeaders) => void, thisArg?: any): void;
    // NOTE: The following are supported by whatwg-fetch but not node-fetch.
    // entries(): IterableIterator<[string, string]>;
    // keys(): IterableIterator<string>;
    // values(): IterableIterator<string>;    
}

type HeadersInit = Headers | Array<string> | { [index: string]: string };

declare class Headers implements IHeaders {
    constructor(init?: HeadersInit);
    append(name: string, value: string): void;
    delete(name: string): void;
    get(name: string): string;
    getAll(name: string): Array<string>;
    has(name: string): boolean;
    set(name: string, value: string): void;

    forEach(callback: (value: string, index: number, headers: IHeaders) => void, thisArg?: any): void;
}

interface IBody {
    bodyUsed: boolean;
    arrayBuffer(): Promise<ArrayBuffer>;
    blob(): Promise<Blob>;
    formData(): Promise<FormData>;
    json(): Promise<any>;
    json<T>(): Promise<T>;
    text(): Promise<string>;
}

declare class Body implements IBody {
    bodyUsed: boolean;
    arrayBuffer(): Promise<ArrayBuffer>;
    blob(): Promise<Blob>;
    formData(): Promise<FormData>;
    json(): Promise<any>;
    json<T>(): Promise<T>;
    text(): Promise<string>;
}

interface IRequest extends IBody {
    method: string;
    url: string;
    headers: IHeaders;

    type: RequestType;
    destination: RequestDestination;
    referrer?: string;
    referrerPolicy?: ReferrerPolicy;    
    mode: RequestMode;
    credentials: RequestCredentials;
    cache: RequestCache;
    redirect?: RequestRedirect;
    integrity?: string;
    
    clone(): IRequest;
}

type BodyInit = Blob | ArrayBufferView | ArrayBuffer | FormData /* | URLSearchParams */ | string;

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
    window?: any; // can only be set to null
}

type RequestInfo = IRequest | string;

declare class Request extends Body implements IRequest {
    constructor(input: RequestInfo, init?: RequestInit);
    
    method: string;
    url: string;
    headers: IHeaders;

    type: RequestType
    destination: RequestDestination;
    referrer: string;
    referrerPolicy: ReferrerPolicy;    
    mode: RequestMode;
    credentials: RequestCredentials;
    cache: RequestCache;
    redirect: RequestRedirect;
    integrity: string;

    clone(): IRequest;
}

interface IResponse extends IBody {
    type: ResponseType;

    url: string;
    redirected: boolean;
    status: number;
    statusText: string;
    ok: boolean;
    headers: IHeaders;
    // size: number;
    // timeout: number;
    body: any;
    trailer: Promise<IHeaders>;

    clone(): IResponse;
}

type ResponseBodyInit = BodyInit;

interface ResponseInit {
    status?: number;
    statusText?: string;
    headers?: HeadersInit;
}

declare class Response extends Body implements IResponse {
    constructor(body?: ResponseBodyInit, init?: ResponseInit);

    static redirect(url: string, status?: number): IResponse;
    static error(): IResponse;

    type: ResponseType

    url: string;
    redirected: boolean;
    status: number;
    statusText: string;
    ok: boolean;
    headers: IHeaders;
    body: any;
    trailer: Promise<IHeaders>;

    clone(): IResponse;
}

interface Window {
    fetch(url: RequestInfo, init?: RequestInit): Promise<IResponse>;
}

declare var fetch: typeof window.fetch;

declare module "isomorphic-fetch" {
    export = fetch;
}
