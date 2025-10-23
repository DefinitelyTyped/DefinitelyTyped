import { EventEmitter } from "events";
import * as express from "express";

declare namespace connect {
    interface SQLiteStoreOptions {
        /**
         * Table of where sessions are stored
         * @default "sessions"
         */
        table?: string;

        /**
         * Database file name
         * @default "sessionsDB"
         */
        db?: string;

        /**
         * Directory where to save database in
         * @default "."
         */
        dir?: string;

        /**
         * Enables [WAL](https://www.sqlite.org/wal.html) mode (defaults to false)
         * @default "false"
         */
        concurrentDB?: string;
    }
    interface CookieOptions {
        /**
         * Specifies the number (in milliseconds) to use when calculating the `Expires Set-Cookie` attribute.
         * This is done by taking the current server time and adding `maxAge` milliseconds to the value to calculate an `Expires` datetime. By default, no maximum age is set.
         *
         * If both `expires` and `maxAge` are set in the options, then the last one defined in the object is what is used.
         * `maxAge` should be preferred over `expires`.
         *
         * @see expires
         */
        maxAge?: number | undefined;

        signed?: boolean | undefined;

        /**
         * Specifies the `Date` object to be the value for the `Expires Set-Cookie` attribute.
         * By default, no expiration is set, and most clients will consider this a "non-persistent cookie" and will delete it on a condition like exiting a web browser application.
         *
         * If both `expires` and `maxAge` are set in the options, then the last one defined in the object is what is used.
         *
         * @deprecated The `expires` option should not be set directly; instead only use the `maxAge` option
         * @see maxAge
         */
        expires?: Date | null | undefined;

        /**
         * Specifies the boolean value for the `HttpOnly Set-Cookie` attribute. When truthy, the `HttpOnly` attribute is set, otherwise it is not.
         * By default, the `HttpOnly` attribute is set.
         *
         * Be careful when setting this to `true`, as compliant clients will not allow client-side JavaScript to see the cookie in `document.cookie`.
         */
        httpOnly?: boolean | undefined;

        /**
         * Specifies the value for the `Path Set-Cookie` attribute.
         * By default, this is set to '/', which is the root path of the domain.
         */
        path?: string | undefined;

        /**
         * Specifies the value for the `Domain Set-Cookie` attribute.
         * By default, no domain is set, and most clients will consider the cookie to apply to only the current domain.
         */
        domain?: string | undefined;

        /**
         * Specifies the boolean value for the `Secure Set-Cookie` attribute. When truthy, the `Secure` attribute is set, otherwise it is not. By default, the `Secure` attribute is not set.
         * Be careful when setting this to true, as compliant clients will not send the cookie back to the server in the future if the browser does not have an HTTPS connection.
         *
         * Please note that `secure: true` is a **recommended option**.
         * However, it requires an https-enabled website, i.e., HTTPS is necessary for secure cookies.
         * If `secure` is set, and you access your site over HTTP, **the cookie will not be set**.
         *
         * The cookie.secure option can also be set to the special value `auto` to have this setting automatically match the determined security of the connection.
         * Be careful when using this setting if the site is available both as HTTP and HTTPS, as once the cookie is set on HTTPS, it will no longer be visible over HTTP.
         * This is useful when the Express "trust proxy" setting is properly setup to simplify development vs production configuration.
         *
         * If you have your node.js behind a proxy and are using `secure: true`, you need to set "trust proxy" in express. Please see the [README](https://github.com/expressjs/session) for details.
         *
         * Please see the [README](https://github.com/expressjs/session) for an example of using secure cookies in production, but allowing for testing in development based on NODE_ENV.
         */
        secure?: boolean | "auto" | undefined;

        encode?: ((val: string) => string) | undefined;

        /**
         * Specifies the boolean or string to be the value for the `SameSite Set-Cookie` attribute.
         * - `true` will set the `SameSite` attribute to `Strict` for strict same site enforcement.
         * - `false` will not set the `SameSite` attribute.
         * - `lax` will set the `SameSite` attribute to `Lax` for lax same site enforcement.
         * - `none` will set the `SameSite` attribute to `None` for an explicit cross-site cookie.
         * - `strict` will set the `SameSite` attribute to `Strict` for strict same site enforcement.
         *
         * More information about the different enforcement levels can be found in the specification.
         *
         * **Note:** This is an attribute that has not yet been fully standardized, and may change in the future.
         * This also means many clients may ignore this attribute until they understand it.
         */
        sameSite?: boolean | "lax" | "strict" | "none" | undefined;
    }

    abstract class Cookie implements CookieOptions {
        /** Returns the original `maxAge` (time-to-live), in milliseconds, of the session cookie. */
        originalMaxAge: number | null;

        maxAge?: number | undefined;
        signed?: boolean | undefined;
        expires?: Date | null | undefined;
        httpOnly?: boolean | undefined;
        path?: string | undefined;
        domain?: string | undefined;
        secure?: boolean | "auto" | undefined;
        sameSite?: boolean | "lax" | "strict" | "none" | undefined;
    }

    interface SessionData {
        cookie: Cookie;
    }

    abstract class Store extends EventEmitter {
        regenerate(req: express.Request, callback: (err?: any) => any): void;
        load(sid: string, callback: (err: any, session?: SessionData) => any): void;
        createSession(req: express.Request, session: SessionData): void;
        /**
         * Gets the session from the store given a session ID and passes it to `callback`.
         *
         * The `session` argument should be a `Session` object if found, otherwise `null` or `undefined` if the session was not found and there was no error.
         * A special case is made when `error.code === 'ENOENT'` to act like `callback(null, null)`.
         */
        get(sid: string, callback: (err: any, session?: SessionData | null) => void): void;
        /** Upsert a session in the store given a session ID and `SessionData` */
        set(sid: string, session: SessionData, callback?: (err?: any) => void): void;
        /** Destroys the dession with the given session ID. */
        destroy(sid: string, callback?: (err?: any) => void): void;
        /** Returns all sessions in the store */
        // https://github.com/DefinitelyTyped/DefinitelyTyped/pull/38783, https://github.com/expressjs/session/pull/700#issuecomment-540855551
        all?(callback: (err: any, obj?: SessionData[] | { [sid: string]: SessionData } | null) => void): void;
        /** Returns the amount of sessions in the store. */
        length?(callback: (err: any, length?: number) => void): void;
        /** Delete all sessions from the store. */
        clear?(callback?: (err?: any) => void): void;
        /** "Touches" a given session, resetting the idle timer. */
        touch?(sid: string, session: SessionData, callback?: () => void): void;
    }

    abstract class SQLiteStore extends Store {
        get(sid: string, callback: (err: any, session?: SessionData | null) => void): void;
        set(sid: string, session: SessionData, callback?: (err?: any) => void): void;
        destroy(sid: string, callback?: (err?: any) => void): void;
    }

    interface SQLiteStoreInitator {
        new(options?: SQLiteStoreOptions): SQLiteStore;
    }

    type ConnectParams = {
        Store: abstract new() => Store;
    } | {
        session: {
            Store: abstract new() => Store;
        };
    };

    function connect(connect: ConnectParams): SQLiteStoreInitator;
}
export = connect.connect;
