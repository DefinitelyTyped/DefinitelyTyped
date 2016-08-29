// Type definitions for isomorphic-fetch
// Project: https://github.com/matthew-andrews/isomorphic-fetch
// Definitions by: Todd Lucas <https://github.com/toddlucas>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

type RequestContext =
    "audio" | "beacon" | "cspreport" | "download" | "embed" | "eventsource" |
    "favicon" | "fetch" | "font" | "form" | "frame" | "hyperlink" | "iframe" |
    "image" | "imageset" | "import" | "internal" | "location" | "manifest" |
    "object" | "ping" | "plugin" | "prefetch" | "script" | "serviceworker" |
    "sharedworker" | "subresource" | "style" | "track" | "video" | "worker" |
    "xmlhttprequest" | "xslt";

type RequestMode = "same-origin" | "no-cors" | "cors";
type RequestCredentials = "omit" | "same-origin" | "include";
type RequestCache =
    "default" | "no-store" | "reload" | "no-cache" | "force-cache" |
    "only-if-cached";

type ResponseType = "basic" | "cors" | "default" | "error" | "opaque";

declare type HeaderInit = Headers | Array<string>;
declare type BodyInit = ArrayBuffer | ArrayBufferView | Blob | FormData | string;
declare type RequestInfo = Request | string;

interface RequestInit {
    method?: string;
    headers?: HeaderInit | { [index: string]: string };
    body?: BodyInit;
    mode?: RequestMode;
    credentials?: RequestCredentials;
    cache?: RequestCache;
}

interface IHeaders {
    get(name: string): string;
    getAll(name: string): Array<string>;
    has(name: string): boolean;
}

declare class Headers implements IHeaders {
    append(name: string, value: string): void;
    delete(name: string):void;
    get(name: string): string;
    getAll(name: string): Array<string>;
    has(name: string): boolean;
    set(name: string, value: string): void;
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
    headers: Headers;
    context: RequestContext;
    referrer: string;
    mode: RequestMode;
    credentials: RequestCredentials;
    cache: RequestCache;
}

declare class Request extends Body implements IRequest {
    constructor(input: string | Request, init?: RequestInit);
    method: string;
    url: string;
    headers: Headers;
    context: RequestContext;
    referrer: string;
    mode: RequestMode;
    credentials: RequestCredentials;
    cache: RequestCache;
}

interface IResponse extends IBody {
    url: string;
    status: number;
    statusText: string;
    ok: boolean;
    headers: IHeaders;
    type: ResponseType;
    size: number;
    timeout: number;
    redirect(url: string, status: number): IResponse;
    error(): IResponse;
    clone(): IResponse;
}

interface IFetchStatic {
    Promise: any;
    Headers: IHeaders
    Request: IRequest;
    Response: IResponse;
    (url: string | IRequest, init?: RequestInit): Promise<IResponse>;
}

declare var fetch: IFetchStatic;

declare module "isomorphic-fetch" {
    export = fetch;
}
