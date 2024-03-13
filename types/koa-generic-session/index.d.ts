import * as Cookies from "cookies";
import * as Koa from "koa";

declare namespace koaSession {
    interface Session {
        cookie: Cookies.SetOption;
    }

    interface SessionIdStore<Ctx = Koa.Context> {
        get(this: Ctx): string | undefined;
        set(this: Ctx, sid: string, session: Session): void;
        reset(this: Ctx): void;
    }

    interface SessionStore {
        get(sid: string): Session | undefined | Promise<Session | undefined>;
        set(sid: string, session: Session, ttl?: number): void | Promise<void>;
        destroy(sid: string): void | Promise<void>;
    }

    interface SessionOptions {
        key?: string | undefined;
        store?: SessionStore | undefined;
        ttl?: number | undefined;
        prefix?: string | undefined;
        cookie?: Cookies.SetOption | undefined;
        allowEmpty?: boolean | undefined;
        defer?: boolean | undefined;
        reconnectTimeout?: number | undefined;
        rolling?: boolean | undefined;
        sessionIdStore?: SessionIdStore | undefined;
        genSid?(this: Koa.Context, length: number): string | Promise<string>;
        errorHandler?(error: Error, type: string, ctx: Koa.Context): void;
        valid?(ctx: Koa.Context, session: Session): boolean;
        beforeSave?(ctx: Koa.Context, session: Session): void;
    }

    class MemoryStore implements SessionStore {
        get(sid: string): Session | undefined;
        set(sid: string, session: Session): void;
        destroy(sid: string): void;
    }
}

declare module "koa" {
    interface Context {
        sessionId: string;
        session: koaSession.Session | null;
        sessionSave: boolean | null;
        regenerateSession(): Promise<void>;
    }
}

declare function koaSession(options: koaSession.SessionOptions): Koa.Middleware;
export = koaSession;
