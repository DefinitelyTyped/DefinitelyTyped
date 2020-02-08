// Type definitions for @pollyjs/core 4.0
// Project: https://github.com/netflix/pollyjs/tree/master/packages/@pollyjs/core
// Definitions by: feinoujc <https://github.com/feinoujc>
//                 Borui Gu <https://github.com/BoruiGu>
//                 Offir Golan <https://github.com/offirgolan>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.4

import Adapter from '@pollyjs/adapter';
import Persister from '@pollyjs/persister';

export type MODE = 'record' | 'replay' | 'passthrough' | 'stopped';
export type ACTION = 'record' | 'replay' | 'intercept' | 'passthrough';
export type EXPIRY_STRATEGY = 'record' | 'warn' | 'error';

export const Timing: {
    fixed(ms: number): () => Promise<void>;
    relative(ratio: number): (ms: number) => Promise<void>;
};

export type MatchBy<T = string, R = T> = (input: T, req: Request) => R;
export type Headers = Record<string, string | string[]>;
export interface PollyConfig {
    mode?: MODE;

    adapters?: Array<string | typeof Adapter>;
    adapterOptions?: {
        fetch?: { context?: any };
        puppeteer?: { page?: any; requestResourceTypes?: string[] };
        xhr?: { context?: any };
        [key: string]: any;
    };

    persister?: string | typeof Persister;
    persisterOptions?: {
        keepUnusedRequests?: boolean;
        fs?: { recordingsDir?: string };
        'local-storage'?: { context?: any; key?: string };
        rest?: { host?: string; apiNamespace?: string };
        [key: string]: any;
    };

    logging?: boolean;

    recordIfMissing?: boolean;
    recordFailedRequests?: boolean;
    expiryStrategy?: EXPIRY_STRATEGY;

    expiresIn?: string | null;
    timing?: ((ms: number) => Promise<void>) | (() => Promise<void>);

    matchRequestsBy?: {
        method?: boolean | MatchBy;
        headers?: boolean | { exclude: string[] } | MatchBy<Headers>;
        body?: boolean | MatchBy<any>;
        order?: boolean;

        url?:
            | boolean
            | MatchBy
            | {
                  protocol?: boolean | MatchBy;
                  username?: boolean | MatchBy;
                  password?: boolean | MatchBy;
                  hostname?: boolean | MatchBy;
                  port?: boolean | MatchBy<number>;
                  pathname?: boolean | MatchBy;
                  query?: boolean | MatchBy<{ [key: string]: any }>;
                  hash?: boolean | MatchBy;
              };
    };
}
export interface HTTPBase {
    headers: Headers;
    body: any;

    getHeader(name: string): string | string[] | null;
    setHeader(name: string, value?: string | string[] | null): this;
    setHeaders(headers: Headers): this;
    removeHeader(name: string): this;
    removeHeaders(headers: string[]): this;
    hasHeader(name: string): boolean;
    type(contentType: string): this;
    send(body: any): this;
    json(body: any): this;
    jsonBody(): any;
}

export interface Request extends HTTPBase {
    method: string;
    url: string;
    readonly absoluteUrl: string;
    readonly protocol: string;
    readonly hostname: string;
    readonly port: string;
    readonly pathname: string;
    hash: string;
    query: { [key: string]: string | string[] };
    readonly params: { [key: string]: string };
    recordingName: string;
    responseTime?: number;
    timestamp?: string;
    didRespond: boolean;
    id?: string;
    order?: number;
    action: ACTION | null;
}
export interface Response extends HTTPBase {
    statusCode: number;
    readonly statusText: string;
    readonly ok: boolean;

    status(status: number): this;
    sendStatus(status: number): this;
    end(): Readonly<this>;
}
export interface Interceptor {
    abort(): void;
    passthrough(): void;
}
export type RequestRouteEvent = 'request';
export type RecordingRouteEvent = 'beforeReplay' | 'beforePersist';
export type ResponseRouteEvent = 'beforeResponse' | 'response';
export type ErrorRouteEvent = 'error';

export interface ListenerEvent {
    readonly type: string;
    stopPropagation: () => void;
}
export type ErrorEventListener = (req: Request, error: any, event: ListenerEvent) => void | Promise<void>;
export type RequestEventListener = (req: Request, event: ListenerEvent) => void | Promise<void>;
export type RecordingEventListener = (req: Request, recording: any, event: ListenerEvent) => void | Promise<void>;
export type ResponseEventListener = (req: Request, res: Response, event: ListenerEvent) => void | Promise<void>;
export type InterceptHandler = (req: Request, res: Response, interceptor: Interceptor) => void | Promise<void>;
export class RouteHandler {
    on(event: RequestRouteEvent, listener: RequestEventListener): RouteHandler;
    on(event: RecordingRouteEvent, listener: RecordingEventListener): RouteHandler;
    on(event: ResponseRouteEvent, listener: ResponseEventListener): RouteHandler;
    on(event: ErrorRouteEvent, listener: ErrorEventListener): RouteHandler;
    off(event: RequestRouteEvent, listener?: RequestEventListener): RouteHandler;
    off(event: RecordingRouteEvent, listener?: RecordingEventListener): RouteHandler;
    off(event: ResponseRouteEvent, listener?: ResponseEventListener): RouteHandler;
    off(event: ErrorRouteEvent, listener?: ErrorEventListener): RouteHandler;
    once(event: RequestRouteEvent, listener: RequestEventListener): RouteHandler;
    once(event: RecordingRouteEvent, listener: RecordingEventListener): RouteHandler;
    once(event: ResponseRouteEvent, listener: ResponseEventListener): RouteHandler;
    once(event: ErrorRouteEvent, listener: ErrorEventListener): RouteHandler;
    filter: (callback: (req: Request) => boolean) => RouteHandler;
    passthrough(value?: boolean): RouteHandler;
    intercept(fn: InterceptHandler): RouteHandler;
    recordingName(recordingName?: string): RouteHandler;
    configure(config: PollyConfig): RouteHandler;
    times(n?: number): RouteHandler;
}
export class PollyServer {
    timeout: (ms: number) => Promise<void>;
    get: (routes?: string | string[]) => RouteHandler;
    put: (routes?: string | string[]) => RouteHandler;
    post: (routes?: string | string[]) => RouteHandler;
    delete: (routes?: string | string[]) => RouteHandler;
    patch: (routes?: string | string[]) => RouteHandler;
    head: (routes?: string | string[]) => RouteHandler;
    options: (routes?: string | string[]) => RouteHandler;
    merge: (routes?: string | string[]) => RouteHandler;
    any: (routes?: string | string[]) => RouteHandler;
    host(host: string, callback: () => void): void;
    namespace(path: string, callback: () => void): void;
}
export type PollyEvent = 'create' | 'stop' | 'register';
export type PollyEventListener = (poll: Polly) => void;
export class Polly {
    static register(Factory: typeof Adapter | typeof Persister): void;
    static unregister(Factory: typeof Adapter | typeof Persister): void;
    static on(event: PollyEvent, listener: PollyEventListener): void;
    static off(event: PollyEvent, listener: PollyEventListener): void;
    static once(event: PollyEvent, listener: PollyEventListener): void;

    constructor(recordingName: string, options?: PollyConfig);

    static VERSION: string;
    recordingName: string;
    recordingId: string;
    mode: MODE;
    server: PollyServer;
    persister: Persister | null;
    adapters: Map<string, Adapter>;
    config: PollyConfig;

    pause(): void;
    play(): void;
    replay(): void;
    record(): void;
    passthrough(): void;
    stop(): Promise<void>;
    flush(): Promise<void>;
    configure(config: PollyConfig): void;
    connectTo(name: string | typeof Adapter): void;
    disconnectFrom(name: string | typeof Adapter): void;
    disconnect(): void;
}

export const setupMocha: {
    (config?: PollyConfig, context?: any): void;
    beforeEach: (config?: PollyConfig, context?: any) => void;
    afterEach: (context?: any) => void;
};

export const setupQunit: {
    (hooks: any, config?: PollyConfig): void;
    beforeEach: (hooks: any, config?: PollyConfig) => void;
    afterEach: (hooks: any) => void;
};
