// Type definitions for express-session 1.17
// Project: https://github.com/expressjs/session
// Definitions by: Hiroki Horiuchi <https://github.com/horiuchi>
//                 Jacob Bogers <https://github.com/jacobbogers>
//                 Naoto Yokoyama <https://github.com/builtinnya>
//                 Ryan Cannon <https://github.com/ry7n>
//                 Tom Spencer <https://github.com/fiznool>
//                 Piotr Błażejewicz <https://github.com/peterblazejewicz>
//                 Ravi van Rooijen <https://github.com/HoldYourWaffle>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import express = require('express');
import { EventEmitter } from 'events';

declare global {
    namespace Express {
        type SessionStore = session.Store & { generate: (req: Request) => void };

        // Inject additional properties on express.Request
        interface Request {
            /**
             * This request's `Session` object.
             * Even though this property isn't marked as optional, it won't exist until you use the `express-session` middleware
             * [Declaration merging](https://www.typescriptlang.org/docs/handbook/declaration-merging.html) can be used to add your own properties.
             *
             * @see SessionData
             */
            session: session.Session & Partial<session.SessionData>;

            /**
             * This request's session ID.
             * Even though this property isn't marked as optional, it won't exist until you use the `express-session` middleware
             */
            sessionID: string;

            /**
             * The Store in use.
             * Even though this property isn't marked as optional, it won't exist until you use the `express-session` middleware
             * The function `generate` is added by express-session
             */
            sessionStore: SessionStore;
        }
    }
}

export = session;

declare function session(options?: session.SessionOptions): express.RequestHandler;

declare namespace session {
    interface SessionOptions {
        /**
         * This is the secret used to sign the session cookie. This can be either a string for a single secret, or an array of multiple secrets.
         * If an array of secrets is provided, **only the first element will be used to sign** the session ID cookie,
         *   while **all the elements will be considered when verifying the signature** in requests.
         * The secret itself should be not easily parsed by a human and would best be a random set of characters
         *
         * Best practices may include:
         * - The use of environment variables to store the secret, ensuring the secret itself does not exist in your repository.
         * - Periodic updates of the secret, while ensuring the previous secret is in the array.
         *
         * Using a secret that cannot be guessed will reduce the ability to hijack a session to only guessing the session ID (as determined by the `genid` option).
         *
         * Changing the secret value will invalidate all existing sessions.
         * In order to rotate the secret without invalidating sessions, provide an array of secrets,
         *   with the new secret as first element of the array, and including previous secrets as the later elements.
         */
        secret: string | string[];

        /**
         * Function to call to generate a new session ID. Provide a function that returns a string that will be used as a session ID.
         * The function is given the request as the first argument if you want to use some value attached to it when generating the ID.
         *
         * The default value is a function which uses the uid-safe library to generate IDs.
         * Be careful to generate unique IDs so your sessions do not conflict.
         */
        genid?(req: express.Request): string;

        /**
         * The name of the session ID cookie to set in the response (and read from in the request).
         * The default value is 'connect.sid'.
         *
         * Note if you have multiple apps running on the same hostname (this is just the name, i.e. `localhost` or `127.0.0.1`; different schemes and ports do not name a different hostname),
         *   then you need to separate the session cookies from each other.
         * The simplest method is to simply set different names per app.
         */
        name?: string | undefined;

        /**
         * The session store instance, defaults to a new `MemoryStore` instance.
         * @see MemoryStore
         */
        store?: Store | undefined;

        /**
         * Settings object for the session ID cookie.
         * @see CookieOptions
         */
        cookie?: CookieOptions | undefined;

        /**
         * Force the session identifier cookie to be set on every response. The expiration is reset to the original `maxAge`, resetting the expiration countdown.
         * The default value is `false`.
         *
         * With this enabled, the session identifier cookie will expire in `maxAge` *since the last response was sent* instead of in `maxAge` *since the session was last modified by the server*.
         * This is typically used in conjuction with short, non-session-length `maxAge` values to provide a quick timeout of the session data
         *   with reduced potential of it occurring during on going server interactions.
         *
         * Note that when this option is set to `true` but the `saveUninitialized` option is set to `false`, the cookie will not be set on a response with an uninitialized session.
         * This option only modifies the behavior when an existing session was loaded for the request.
         *
         * @see saveUninitialized
         */
        rolling?: boolean | undefined;

        /**
         * Forces the session to be saved back to the session store, even if the session was never modified during the request.
         * Depending on your store this may be necessary, but it can also create race conditions where a client makes two parallel requests to your server
         *   and changes made to the session in one request may get overwritten when the other request ends, even if it made no changes (this behavior also depends on what store you're using).
         *
         * The default value is `true`, but using the default has been deprecated, as the default will change in the future.
         * Please research into this setting and choose what is appropriate to your use-case. Typically, you'll want `false`.
         *
         * How do I know if this is necessary for my store? The best way to know is to check with your store if it implements the `touch` method.
         * If it does, then you can safely set `resave: false`.
         * If it does not implement the `touch` method and your store sets an expiration date on stored sessions, then you likely need `resave: true`.
         */
        resave?: boolean | undefined;

        /**
         * Trust the reverse proxy when setting secure cookies (via the "X-Forwarded-Proto" header).
         * The default value is undefined.
         *
         * - `true`: The `X-Forwarded-Proto` header will be used.
         * - `false`: All headers are ignored and the connection is considered secure only if there is a direct TLS/SSL connection.
         * - `undefined`: Uses the "trust proxy" setting from express
         */
        proxy?: boolean | undefined;

        /**
         * Forces a session that is "uninitialized" to be saved to the store. A session is uninitialized when it is new but not modified.
         * Choosing `false` is useful for implementing login sessions, reducing server storage usage, or complying with laws that require permission before setting a cookie.
         * Choosing `false` will also help with race conditions where a client makes multiple parallel requests without a session.
         *
         * The default value is `true`, but using the default has been deprecated, as the default will change in the future.
         * Please research into this setting and choose what is appropriate to your use-case.
         *
         * **If you are using `express-session` in conjunction with PassportJS:**
         * Passport will add an empty Passport object to the session for use after a user is authenticated, which will be treated as a modification to the session, causing it to be saved.
         * This has been fixed in PassportJS 0.3.0.
         */
        saveUninitialized?: boolean | undefined;

        /**
         * Control the result of unsetting req.session (through delete, setting to null, etc.).
         * - `destroy`: The session will be destroyed (deleted) when the response ends.
         * - `keep`: The session in the store will be kept, but modifications made during the request are ignored and not saved.
         * @default 'keep'
         */
        unset?: 'destroy' | 'keep' | undefined;
    }

    class Session {
        private constructor(request: Express.Request, data: SessionData);

        /**
         * Each session has a unique ID associated with it.
         * This property is an alias of `req.sessionID` and cannot be modified.
         * It has been added to make the session ID accessible from the session object.
         */
        id: string;

        /**
         * Each session has a unique cookie object accompany it.
         * This allows you to alter the session cookie per visitor.
         * For example we can set `req.session.cookie.expires` to `false` to enable the cookie to remain for only the duration of the user-agent.
         */
        cookie: Cookie;

        /** To regenerate the session simply invoke the method. Once complete, a new SID and `Session` instance will be initialized at `req.session` and the `callback` will be invoked. */
        regenerate(callback: (err: any) => void): this;

        /** Destroys the session and will unset the `req.session` property. Once complete, the `callback` will be invoked. */
        destroy(callback: (err: any) => void): this;

        /** Reloads the session data from the store and re-populates the `req.session` object. Once complete, the `callback` will be invoked. */
        reload(callback: (err: any) => void): this;

        /**
         * Resets the cookie's `maxAge` to `originalMaxAge`
         * @see Cookie
         */
        resetMaxAge(): this;

        /**
         * Save the session back to the store, replacing the contents on the store with the contents in memory
         *   (though a store may do something else - consult the store's documentation for exact behavior).
         *
         * This method is automatically called at the end of the HTTP response if the session data has been altered
         *   (though this behavior can be altered with various options in the middleware constructor).
         * Because of this, typically this method does not need to be called.
         * There are some cases where it is useful to call this method, for example: redirects, long-lived requests or in WebSockets.
         */
        save(callback?: (err: any) => void): this;

        /** Updates the `maxAge` property. Typically this is not necessary to call, as the session middleware does this for you. */
        touch(): this;
    }

    /**
     * This interface allows you to declare additional properties on your session object using [declaration merging](https://www.typescriptlang.org/docs/handbook/declaration-merging.html).
     *
     * @example
     * declare module 'express-session' {
     *     interface SessionData {
     *         views: number;
     *     }
     * }
     *
     */
    interface SessionData {
        cookie: Cookie;
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
        secure?: boolean | 'auto' | undefined;

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
        sameSite?: boolean | 'lax' | 'strict' | 'none' | undefined;
    }

    class Cookie implements CookieOptions {
        /** Returns the original `maxAge` (time-to-live), in milliseconds, of the session cookie. */
        originalMaxAge: number | null;

        maxAge?: number | undefined;
        signed?: boolean | undefined;
        expires?: Date | null | undefined;
        httpOnly?: boolean | undefined;
        path?: string | undefined;
        domain?: string | undefined;
        secure?: boolean | 'auto' | undefined;
        sameSite?: boolean | 'lax' | 'strict' | 'none' | undefined;
    }

    abstract class Store extends EventEmitter {
        regenerate(req: express.Request, callback: (err?: any) => any): void;
        load(sid: string, callback: (err: any, session?: SessionData) => any): void;
        createSession(req: express.Request, session: SessionData): Session & SessionData;

        /**
         * Gets the session from the store given a session ID and passes it to `callback`.
         *
         * The `session` argument should be a `Session` object if found, otherwise `null` or `undefined` if the session was not found and there was no error.
         * A special case is made when `error.code === 'ENOENT'` to act like `callback(null, null)`.
         */
        abstract get(sid: string, callback: (err: any, session?: SessionData | null) => void): void;

        /** Upsert a session in the store given a session ID and `SessionData` */
        abstract set(sid: string, session: SessionData, callback?: (err?: any) => void): void;

        /** Destroys the dession with the given session ID. */
        abstract destroy(sid: string, callback?: (err?: any) => void): void;

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

    /**
     * **Warning:** the default server-side session storage, `MemoryStore`, is purposely not designed for a production environment.
     * It will leak memory under most conditions, does not scale past a single process, and is only meant for debugging and developing.
     */
    class MemoryStore extends Store {
        get(sid: string, callback: (err: any, session?: SessionData | null) => void): void;
        set(sid: string, session: SessionData, callback?: (err?: any) => void): void;
        destroy(sid: string, callback?: (err?: any) => void): void;

        all(callback: (err: any, obj?: { [sid: string]: SessionData } | null) => void): void;
        length(callback: (err: any, length?: number) => void): void;
        clear(callback?: (err?: any) => void): void;
        touch(sid: string, session: SessionData, callback?: () => void): void;
    }
}
