import session = require("express-session");
import Memcached = require("memcached");

export = ConnectMemcachedSession;

declare function ConnectMemcachedSession(expressSession: typeof session): typeof ConnectMemcachedSession.MemcachedStore;

declare namespace ConnectMemcachedSession {
    class MemcachedStore extends session.Store {
        constructor(options?: MemcachedSessionOptions, callback?: (error: Error) => void);

        client: Memcached;

        /** Attempt to fetch session by the given `sid`. */
        get(sid: string, callback: (err: any, session: session.SessionData | null) => void): void;

        /** Commit the given `session` object associated with the given `sid`. */
        set(sid: string, session: session.SessionData, callback?: (err?: any) => void): void;

        /** Destroy the session associated with the given `sid`. */
        destroy(sid: string, callback?: (err?: any) => void): void;

        /** Fetch number of sessions. */
        length(callback: (err: any, length: number) => void): void;

        /** Clear all sessions. */
        clear(callback?: (err?: any) => void): void;

        /** Refresh the time-to-live for the session with the given `sid`. */
        touch(sid: string, session: session.SessionData, callback?: (err?: any) => void): void;
    }

    interface MemcachedSessionOptions extends Memcached.options {
        /** Memcached servers locations, can be string, array, hash. */
        hosts?: Memcached.Location;
        /**
         * An optional prefix for each memcache key, in case you
         * are sharing your memcached servers with something generating its own keys.
         */
        prefix?: string;
        /** An optional parameter used for setting the default TTL (in seconds) */
        ttl?: number;
        /** An optional secret can be used to encrypt/decrypt session contents. */
        secret?: string;
        /**
         * An optional algorithm parameter may be used, but must be valid based on
         * returned `crypto.getCiphers()`. The current default is `aes-256-ctr`
         */
        algorithm?: string;
    }
}
