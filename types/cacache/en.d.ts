/// <reference types="node" />

export interface CacheObject {
    /** Subresource Integrity hash for the content this entry refers to. */
    integrity: string;
    /** Key the entry was looked up under. Matches the key argument. */
    key: string;
    /** User-assigned metadata associated with the entry/content. */
    metadata?: any;
    /** Filesystem path where content is stored, joined with cache argument. */
    path: string;
    /** Timestamp the entry was first added on. */
    time: number;
}

export interface GetCacheObject {
    metadata?: any;
    integrity: string;
    data: Buffer;
    size: number;
}

export namespace get {
    interface HasContentObject {
        size: number;
        sri: {
            algorithm: string;
            digest: string;
            options: any[];
            source: string;
        };
    }

    interface Options {
        integrity?: string;
        memoize?: boolean;
        size?: number;
    }

    namespace copy {
        function byDigest(cachePath: string, hash: string, dest: string, opts?: Options): Promise<string>;
    }

    namespace stream {
        function byDigest(cachePath: string, hash: string, opts?: Options): NodeJS.ReadableStream;
    }

    function byDigest(cachePath: string, hash: string, opts?: Options): Promise<string>;
    function copy(cachePath: string, key: string, dest: string, opts?: Options): Promise<CacheObject>;

    /**
     * Looks up a Subresource Integrity hash in the cache. If content exists
     * for this `integrity`, it will return an object, with the specific single
     * integrity hash that was found in sri key, and the size of the found
     * content as size. If no content exists for this integrity, it will return
     * `false`.
     */
    function hasContent(cachePath: string, hash: string): Promise<HasContentObject | false>;
    function hasContentnc(cachePath: string, hash: string): HasContentObject | false;

    /**
     * Looks up `key` in the cache index, returning information about the entry
     * if one exists.
     */
    function info(cachePath: string, key: string): Promise<CacheObject>;

    /**
     * Returns a Readable Stream of the cached data identified by `key`.
     *
     * If there is no content identified by `key`, or if the locally-stored data
     * does not pass the validity checksum, an error will be emitted.
     *
     * `metadata` and `integrity` events will be emitted before the stream
     * closes, if you need to collect that extra data about the cached entry.
     *
     * A sub-function, `get.stream.byDigest` may be used for identical behavior,
     * except lookup will happen by integrity hash, bypassing the index
     * entirely. This version does not emit the `metadata` and `integrity`
     * events at all.
     */
    function stream(cachePath: string, key: string, opts?: Options): NodeJS.ReadableStream;
    function sync(cachePath: string, key: string, opts?: Options): CacheObject;
    function syncDigest(cachePath: string, key: string, opts?: Options): CacheObject;
}

export namespace ls {
    type Cache = Record<string, CacheObject & { size: number }>;

    /**
     * Lists info for all entries currently in the cache as a single large
     * object.
     *
     * This works just like `ls`, except `get.info` entries are returned as
     * `'data'` events on the returned stream.
     */
    function stream(cachePath: string): NodeJS.ReadableStream;
}

export namespace put {
    interface Options {
        /**
         * Default: `['sha512']`
         *
         * Hashing algorithms to use when calculating the subresource integrity
         * digest for inserted data. Can use any algorithm listed in
         * `crypto.getHashes()` or `'omakase'`/`'お任せします'` to pick a random
         * hash algorithm on each insertion. You may also use any anagram of
         * `'modnar'` to use this feature.
         *
         * Currently only supports one algorithm at a time (i.e., an array
         * length of exactly `1`). Has no effect if `opts.integrity` is present.
         */
        algorithms?: string[];

        /**
         * If present, the pre-calculated digest for the inserted content. If
         * this option if provided and does not match the post-insertion digest,
         * insertion will fail with an `EINTEGRITY` error.
         *
         * `algorithms` has no effect if this option is present.
         */
        integrity?: string;

        /** Arbitrary metadata to be attached to the inserted key. */
        metadata?: any;

        /**
         * Default: `null`
         *
         * If provided, cacache will memoize the given cache insertion in
         * memory, bypassing any filesystem checks for that key or digest in
         * future cache fetches. Nothing will be written to the in-memory cache
         * unless this option is explicitly truthy.
         *
         * If `opts.memoize` is an object or a `Map`-like (that is, an object
         * with `get` and `set` methods), it will be written to instead of the
         * global memoization cache.
         *
         * Reading from disk data can be forced by explicitly passing
         * `memoize: false` to the reader functions, but their default will be
         * to read from memory.
         */
        memoize?: null | boolean;

        /**
         * If provided, the data stream will be verified to check that enough
         * data was passed through. If there's more or less data than expected,
         * insertion will fail with an `EBADSIZE` error.
         */
        size?: number;
    }

    /**
     * Returns a Writable Stream that inserts data written to it into the cache.
     * Emits an `integrity` event with the digest of written contents when it
     * succeeds.
     */
    function stream(cachePath: string, key: string, opts?: Options): NodeJS.WritableStream;
}

export namespace rm {
    /**
     * Clears the entire cache. Mainly by blowing away the cache directory
     * itself.
     */
    function all(cachePath: string): Promise<void>;

    /**
     * Removes the index entry for `key`. Content will still be accessible if
     * requested directly by content address (`get.stream.byDigest`).
     *
     * To remove the content itself (which might still be used by other
     * entries), use `rm.content`. Or, to safely vacuum any unused content,
     * use `verify`.
     */
    function entry(cachePath: string, key: string): Promise<CacheObject>;

    /**
     * Removes the content identified by `integrity`. Any index entries
     * referring to it will not be usable again until the content is re-added
     * to the cache with an identical digest.
     */
    function content(cachePath: string, hash: string): Promise<boolean>;
}

export namespace tmp {
    type Callback = (dir: string) => void;
    interface Options {
        tmpPrefix?: string;
    }

    /**
     * Sets the `uid` and `gid` properties on all files and folders within the
     * tmp folder to match the rest of the cache.
     *
     * Use this after manually writing files into `tmp.mkdir` or `tmp.withTmp`.
     */
    function fix(cachePath: string): Promise<void>;

    /**
     * Returns a unique temporary directory inside the cache's `tmp` dir. This
     * directory will use the same safe user assignment that all the other stuff
     * use.
     *
     * Once the directory is made, it's the user's responsibility that all files
     * within are given the appropriate `gid`/`uid` ownership settings to match
     * the rest of the cache. If not, you can ask cacache to do it for you by
     * calling `tmp.fix()`, which will fix all tmp directory permissions.
     *
     * If you want automatic cleanup of this directory, use `tmp.withTmp()`
     */
    function mkdir(cachePath: string, opts?: Options): Promise<string>;

    /**
     * Creates a temporary directory with `tmp.mkdir()` and calls `cb` with it.
     * The created temporary directory will be removed when the return value of
     * `cb()` resolves -- that is, if you return a Promise from `cb()`, the tmp
     * directory will be automatically deleted once that promise completes.
     *
     * The same caveats apply when it comes to managing permissions for the tmp dir's contents.
     */
    function withTmp(cachePath: string, opts: Options, cb: Callback): void;
    function withTmp(cachePath: string, cb: Callback): void;
}

export namespace verify {
    interface Options {
        /**
         * Receives a formatted entry. Return false to remove it.
         * Note: might be called more than once on the same entry.
         */
        filter: false | string;
    }

    /**
     * Returns a Date representing the last time `cacache.verify` was run on
     * `cache`.
     */
    function lastRun(cachePath: string): Promise<Date>;
}

export function clearMemoized(): Record<string, CacheObject>;

/**
 * Returns an object with the cached data, digest, and metadata identified by
 * `key`. The `data` property of this object will be a Buffer instance that
 * presumably holds some data that means something to you. I'm sure you know
 * what to do with it! cacache just won't care.
 *
 * `integrity` is a Subresource Integrity string. That is, a string that can be
 * used to verify `data`, which looks like
 * `<hash-algorithm>-<base64-integrity-hash>`.
 *
 * If there is no content identified by key, or if the locally-stored data does
 * not pass the validity checksum, the promise will be rejected.
 *
 * A sub-function, `get.byDigest` may be used for identical behavior, except
 * lookup will happen by integrity hash, bypassing the index entirely. This
 * version of the function only returns data itself, without any wrapper.
 *
 * **Note**
 *
 * This function loads the entire cache entry into memory before returning it.
 * If you're dealing with Very Large data, consider using `get.stream` instead.
 */
export function get(cachePath: string, key: string, options?: get.Options): Promise<GetCacheObject>;

/**
 * Lists info for all entries currently in the cache as a single large object.
 * Each entry in the object will be keyed by the unique index key, with
 * corresponding `get.info` objects as the values.
 */
export function ls(cachePath: string): Promise<ls.Cache>;

/**
 * Inserts data passed to it into the cache. The returned Promise resolves with
 * a digest (generated according to `opts.algorithms`) after the cache entry has
 * been successfully written.
 */
export function put(cachePath: string, key: string, data: any, opts?: put.Options): Promise<string>;

/**
 * Removes the index entry for `key`. Content will still be accessible if
 * requested directly by content address (`get.stream.byDigest`).
 *
 * To remove the content itself (which might still be used by other
 * entries), use `rm.content`. Or, to safely vacuum any unused content,
 * use `verify`.
 */
export function rm(cachePath: string, key: string): Promise<any>;

/**
 * Configure the language/locale used for messages and errors coming from
 * cacache. The list of available locales is in the `./locales` directory in the
 * project root.
 */
export function setLocale(locale: string): any;

/**
 * Checks out and fixes up your cache:
 *
 * - Cleans up corrupted or invalid index entries
 * - Custom entry filtering options
 * - Garbage collects any content entries not referenced by the index
 * - Checks integrity for all content entries and removes invalid content
 * - Fixes cache ownership
 * - Removes the `tmp` directory in the cache and all its contents.
 *
 * When it's done, it'll return an object with various stats about the
 * verification process, including amount of storage reclaimed, number of valid
 * entries, number of entries removed, etc.
 */
export function verify(cachePath: string, opts?: verify.Options): Promise<any>;
