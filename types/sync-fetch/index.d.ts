// Type definitions for sync-fetch 0.4
// Project: https://github.com/larsgw/sync-fetch
// Definitions by: Alex Laz <https://github.com/alex-laz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import NodeFetch = require('node-fetch');

type Blob = NodeFetch.Blob;
type Headers = NodeFetch.Headers;
type HeadersInit = NodeFetch.HeadersInit;
type RequestContext = NodeFetch.RequestContext;
type RequestRedirect = NodeFetch.RequestRedirect;
type ResponseInit = NodeFetch.ResponseInit;
type ResponseType = NodeFetch.ResponseType;

type SyncRequestInfo = string | URLLike | SyncRequest;

declare class SyncRequest extends SyncBody {
    constructor(input: SyncRequestInfo, init?: SyncRequestInit);
    clone: () => SyncRequest;
    context: RequestContext;
    headers: Headers;
    method: string;
    redirect: RequestRedirect;
    referrer: string;
    url: string;
    compress: boolean;
    counter: number;
    follow: number;
    hostname: string;
    port?: number;
    protocol: string;
    size: number;
    timeout: number;
}

interface SyncRequestInit {
    body?: SyncBodyInit;
    headers?: HeadersInit;
    method?: string;
    redirect?: RequestRedirect;
    compress?: boolean;
    follow?: number;
    size?: number;
    timeout?: number;
}

declare class SyncResponse extends SyncBody {
    constructor(body?: SyncBodyInit, init?: ResponseInit);
    clone: () => SyncResponse;
    headers: Headers;
    ok: boolean;
    redirected: boolean;
    status: number;
    statusText: string;
    type: ResponseType;
    url: string;
}

declare class SyncBody {
    constructor(body?: any, opts?: { size?: number; timeout?: number });
    arrayBuffer: () => ArrayBuffer;
    blob: () => Promise<Blob>;
    body: NodeJS.ReadableStream;
    bodyUsed: boolean;
    buffer: () => Buffer;
    json: () => any;
    size: number;
    text: () => string;
    timeout: number;
}

type SyncBodyInit = string | ArrayBuffer | ArrayBufferView | URLSearchParams;

interface URLLike {
    href: string;
}

declare function syncFetch(url: SyncRequestInfo, init?: SyncRequestInit): SyncResponse;

declare namespace syncFetch {
    class FetchError extends NodeFetch.FetchError {}
    class Headers extends NodeFetch.Headers {}
    class Request extends SyncRequest {}
    class Response extends SyncResponse {}
}

export = syncFetch;
