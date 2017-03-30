// Type definitions for isomorphic-fetch 0.0
// Project: https://github.com/matthew-andrews/isomorphic-fetch
// Definitions by: Todd Lucas <https://github.com/toddlucas>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

interface ForEachCallback {
    (keyId: any, status: string): void;
}

interface Headers {
    append(name: string, value: string): void;
    delete(name: string): void;
    forEach(callback: ForEachCallback): void;
    get(name: string): string | null;
    has(name: string): boolean;
    set(name: string, value: string): void;
}

declare var Headers: {
    prototype: Headers;
    new(init?: any): Headers;
}

interface Blob {
    readonly size: number;
    readonly type: string;
    msClose(): void;
    msDetachStream(): any;
    slice(start?: number, end?: number, contentType?: string): Blob;
}

interface Body {
    readonly bodyUsed: boolean;
    arrayBuffer(): Promise<ArrayBuffer>;
    blob(): Promise<Blob>;
    json(): Promise<any>;
    text(): Promise<string>;
}

interface RequestInit {
    method?: string;
    headers?: any;
    body?: any;
    referrer?: string;
    referrerPolicy?: string;
    mode?: string;
    credentials?: string;
    cache?: string;
    redirect?: string;
    integrity?: string;
    keepalive?: boolean;
    window?: any;
}

interface Request extends Object, Body {
    readonly cache: string;
    readonly credentials: string;
    readonly destination: string;
    readonly headers: Headers;
    readonly integrity: string;
    readonly keepalive: boolean;
    readonly method: string;
    readonly mode: string;
    readonly redirect: string;
    readonly referrer: string;
    readonly referrerPolicy: string;
    readonly type: string;
    readonly url: string;
    clone(): Request;
}

declare var Request: {
    prototype: Request;
    new(input: Request | string, init?: RequestInit): Request;
}

interface ReadableStream {
    readonly locked: boolean;
    cancel(): Promise<void>;
}

interface ResponseInit {
    status?: number;
    statusText?: string;
    headers?: any;
}

interface Response extends Object, Body {
    readonly body: ReadableStream | null;
    readonly headers: Headers;
    readonly ok: boolean;
    readonly status: number;
    readonly statusText: string;
    readonly type: string;
    readonly url: string;
    clone(): Response;
}

declare var Response: {
    prototype: Response;
    new(body?: any, init?: ResponseInit): Response;
}

interface GlobalFetch {
    fetch(input: Request | string, init?: RequestInit): Promise<Response>;
}

interface Window extends GlobalFetch {
}

declare function fetch(input: Request | string, init?: RequestInit): Promise<Response>;

declare module "isomorphic-fetch" {
    namespace _fetch { }
    const _fetch: typeof fetch;
    export = _fetch;
}
