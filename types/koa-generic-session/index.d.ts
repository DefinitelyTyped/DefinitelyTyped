// Type definitions for koa-generic-session 1.x
// Project: https://github.com/koajs/generic-session
// Definitions by: Nick Simmons <https://github.com/nsimmons>, Ragg <https://github.com/Ragg->
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import * as Koa from 'koa';

declare namespace koaSession {
    interface Session {
        cookie: any;
        [key: string]: any;
    }

    interface SessionIdStore {
        get(): any;
        set(sid: string, session: Session): void;
        reset(): void;
    }

    interface SessionStore {
        (): SessionStore;
        get(sid: string): any;
        set(sid: string, session: Session, ttl: number): void;
        destroy(sid: string): void;
    }

    interface SessionOptions {
        key?: string | undefined;
        store?: SessionStore | undefined;
        ttl?: number | undefined;
        prefix?: string | undefined;
        cookie?: {
            path?: string | undefined;
            rewrite?: boolean | undefined;
            signed?: boolean | undefined;
            maxAge?: number | null | undefined;
            secure?: boolean | undefined;
            httpOnly?: boolean | undefined;
            sameSite?: boolean | 'lax' | 'none' | 'strict' | undefined;
            overwrite?: boolean | undefined;
        } | undefined;
        allowEmpty?: boolean | undefined;
        defer?: boolean | undefined;
        reconnectTimeout?: number | undefined;
        rolling?: boolean | undefined;
        sessionIdStore?: SessionIdStore | undefined;
        genSid?(length: number): string;
        errorHandler?(error: Error, type: string, ctx: Koa.Context): void;
        valid?(ctx: Koa.Context, session: Session): boolean;
        beforeSave?(ctx: Koa.Context, session: Session): void;
    }

    const MemoryStore: SessionStore;
}

declare module 'koa' {
    interface Context {
        session: koaSession.Session | null;
        sessionSave: boolean | null;
        regenerateSession(): Generator;
    }
}

declare function koaSession(options: koaSession.SessionOptions): Koa.Middleware;
export = koaSession;
