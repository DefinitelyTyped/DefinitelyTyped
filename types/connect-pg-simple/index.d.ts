import { RequestHandler } from "express";
import { SessionData, SessionOptions, Store } from "express-session";
import { Pool, PoolConfig } from "pg";

declare function connectPgSimple(session: (options?: SessionOptions) => RequestHandler): typeof connectPgSimple.PGStore;

declare namespace connectPgSimple {
    class PGStore extends Store {
        constructor(options?: PGStoreOptions);
        close(): void;
        pruneSessions(callback?: (err: Error) => void): void;

        get(sid: string, callback: (err: any, session?: SessionData | null) => void): void;
        set(sid: string, session: SessionData, callback?: (err?: any) => void): void;
        destroy(sid: string, callback?: (err?: any) => void): void;

        touch(sid: string, session: SessionData, callback?: () => void): void;
    }
    interface PGStoreOptions {
        pool?: Pool | undefined;
        pgPromise?: object | undefined; // not typed to avoid dependency to "pg-promise" module (which includes its own types)
        conString?: string | undefined;
        conObject?: PoolConfig | undefined;
        ttl?: number | undefined;
        disableTouch?: boolean | undefined;
        createTableIfMissing?: boolean | undefined;
        schemaName?: string | undefined;
        tableName?: string | undefined;
        pruneSessionInterval?: false | number | undefined;
        errorLog?: ((...args: any[]) => void) | undefined;
    }
}

export = connectPgSimple;
