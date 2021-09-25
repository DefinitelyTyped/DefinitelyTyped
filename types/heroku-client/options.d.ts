import type { ServerResponse } from 'http';
import type { RequestURL } from './url';

interface RequestCache {
    get(key: string, cb: (err: any, value: any) => void): void;
    set(key: string, value: any): void;
}

interface RequestLogger {
    log(msg: any): void;
}

interface RequestOptions extends Partial<RequestURL> {
    body?: any;
    cache?: {
        store: RequestCache;
        encryptor: object;
    };
    debug?: boolean;
    debugHeaders?: string;
    headers?: Record<string, string>;
    json?: boolean;
    logger?: RequestLogger;
    method?: 'GET' | 'POST' | 'PATCH' | 'DELETE';
    middleware?: (res: ServerResponse, cbk: () => void) => void;
    parseJSON?: boolean;
    partial?: boolean;
    path?: string;
    rejectUnauthorized?: boolean;
    timeout?: number;
    token?: string;
    userAgent?: string;
}

export type { RequestOptions };
