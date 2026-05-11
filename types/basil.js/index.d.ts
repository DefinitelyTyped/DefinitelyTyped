/* eslint-disable @definitelytyped/no-unnecessary-generics */
declare namespace Basil {
    /**
     * Common Basil options that apply to all storage types
     * (local, session, memory, and partially to cookie).
     */
    interface BasilCommonOptions {
        /**
         * A string prefix used for keys in storages.
         * e.g. `namespace.keyDelimiter.keyName`.
         */
        namespace?: string;

        /**
         * List of storages Basil tries, in priority order:
         * 'local' | 'cookie' | 'session' | 'memory'
         */
        storages?: Array<"local" | "cookie" | "session" | "memory">;

        /**
         * Delimiter used between namespace and key. Defaults to '.'
         */
        keyDelimiter?: string;

        /**
         * If true, Basil stores raw strings (unparsed / unstringified).
         * If false, Basil JSON-encodes stored values and JSON-decodes on get().
         */
        raw?: boolean;
    }

    /**
     * Cookie-specific options.
     * These are **only** relevant if you’re using the 'cookie' storage.
     */
    interface BasilCookieOptions {
        /**
         * Number of days until the cookie expires.
         * If omitted, it becomes a session cookie (expires on browser close).
         */
        expireDays?: number;

        /**
         * The domain the cookie is valid for (e.g. 'example.com'). Must match document.domain.
         */
        domain?: string;

        /**
         * If true, sets the `Secure` flag on the cookie (requires HTTPS).
         */
        secure?: boolean;

        /**
         * Sets the `SameSite` attribute: 'lax', 'strict', or 'none'.
         */
        sameSite?: "lax" | "strict" | "none";
    }

    /**
     * Full Basil options = Common + Cookie.
     * Non-cookie storages will just ignore cookie-specific fields.
     */
    type BasilOptions = BasilCommonOptions & BasilCookieOptions;

    /**
     * A minimal interface for storages used by Basil: local, session, memory.
     * They support `check`, `set`, `get`, `remove`, etc.
     *
     * This base interface expects **common** options.
     * (Cookie usage can extend this for cookie-specific fields.)
     */
    interface BasilStorage {
        /**
         * Check if the storage is accessible/usable.
         * For local/session, tries writing a test key.
         * For memory, always true.
         * For cookie, we override it with a cookie-specific signature.
         */
        check(options?: BasilCommonOptions): boolean;

        /**
         * Store a raw string. (No JSON handling.)
         * Cookie usage might read domain/secure/sameSite from the options if extended.
         */
        set<T = unknown>(key: string, value: T, options?: BasilCommonOptions): void;

        /**
         * Retrieve a raw string, or null if not found.
         */
        get<T = unknown>(key: string): T | null;

        /**
         * Remove a value by key from this storage alone.
         */
        remove(key: string): void;

        /**
         * Reset/clear items from this storage. If `namespace` is given,
         * only items starting with `namespace + keyDelimiter` are cleared.
         */
        reset(namespace?: string): void;

        /**
         * Get an array of keys in this storage. If a namespace is provided,
         * only keys within that namespace are returned (with the namespace stripped).
         */
        keys(namespace?: string, delimiter?: string): string[];
    }

    /**
     * Extended storage that handles **cookie-specific** options in `check` and `set`.
     * By default, Basil.cookie uses these extra fields.
     */
    interface BasilCookieStorage extends Omit<BasilStorage, "check" | "set"> {
        /**
         * For cookies, we accept cookie-specific fields in addition to common fields.
         */
        check(options?: BasilOptions): boolean;

        /**
         * Setting a cookie can use domain, secure, sameSite, expireDays, etc.
         */
        set<T = unknown>(key: string, value: T, options?: BasilOptions): void;
    }

    /**
     * Basil’s main instance (returned by `Basil()` or `new Basil()`).
     * Manages reading/writing to multiple storages behind a single API.
     */
    interface BasilInstance {
        /**
         * Basil merges final options (global + user-provided) into `this.options`.
         */
        options: BasilOptions;

        /**
         * Initialize Basil with new or updated options.
         * Usually called internally, but can be re-called to override existing options.
         */
        init(options?: BasilOptions): this;

        /**
         * Update the Basil instance’s `options`.
         */
        setOptions(options?: BasilOptions): void;

        /**
         * Check if the named storage is *currently available*.
         * e.g. 'local' => localStorage, 'cookie' => cookies, etc.
         */
        check(storage: "local" | "cookie" | "session" | "memory"): boolean;

        /**
         * Returns `true` if Basil knows about the named storage.
         * (Does **not** guarantee availability in the current environment—use `check`.)
         */
        support(storage: "local" | "cookie" | "session" | "memory"): boolean;

        /**
         * Store a value by key, using the first available storage.
         * If `raw` is false, Basil JSON-encodes `value`. If `raw` is true, stores it as a string.
         * Returns `true` if *any* storage succeeded, otherwise `false`.
         */
        set<T = unknown>(
            key:
                | string
                | number
                | boolean
                | null
                | (string | number | boolean | null)[],
            value: T,
            options?: BasilOptions,
        ): boolean;

        /**
         * Retrieve a value by key from the configured storages, returning
         * the first match. If not found, returns `null`.
         * If `raw` is false, Basil attempts JSON-decoding, else returns the raw string.
         */
        get<T = unknown>(
            key:
                | string
                | number
                | boolean
                | null
                | (string | number | boolean | null)[],
            options?: BasilOptions,
        ): T | null;

        /**
         * Remove a key from all configured storages that contain it.
         */
        remove(
            key:
                | string
                | number
                | boolean
                | null
                | (string | number | boolean | null)[],
            options?: BasilOptions,
        ): void;

        /**
         * Reset (clear) keys in all configured storages.
         * If `namespace` is specified in `options`, only that namespace is cleared.
         */
        reset(options?: BasilOptions): void;

        /**
         * Return an array of keys known to Basil in all configured storages.
         * If `namespace` is in `options`, only those matching are returned.
         */
        keys(options?: BasilOptions): string[];

        /**
         * Return a map of keys => storages that contain them.
         * e.g. `{ foo: ['local'], abc: ['cookie', 'memory'] }`.
         */
        keysMap(
            options?: BasilOptions,
        ): Record<string, Array<"local" | "cookie" | "session" | "memory">>;
    }

    /**
     * The Basil constructor/function can be called as `new Basil(...)` or `Basil(...)`.
     * It also exposes the **raw** storage objects for direct usage.
     */
    interface BasilConstructor {
        /**
         * Call Basil as a constructor: `new Basil({ ... })`
         */
        new(options?: BasilOptions): BasilInstance;

        /**
         * Call Basil as a function: `Basil({ ... })`
         */
        (options?: BasilOptions): BasilInstance;

        /**
         * Direct references to each storage:
         *  - Basil.cookie: uses cookie-specific `check(...)` and `set(...)`
         *  - Basil.localStorage / Basil.sessionStorage / Basil.memory: use the generic interface
         */
        cookie: BasilCookieStorage;
        localStorage: BasilStorage;
        sessionStorage: BasilStorage;
        memory: BasilStorage;
    }
}

declare const Basil: Basil.BasilConstructor;

export as namespace Basil;

export = Basil;
