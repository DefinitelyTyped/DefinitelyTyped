// Type definitions for express session-file-store 1.0
// Project: https://github.com/valery-barysok/session-file-store
// Definitions by: Gevik Babakhani <https://github.com/blendsdk>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="express-session" />

export = FileStore;

declare namespace FileStore {
    /**
     * FileStore Options
     *
     * @interface Options
     */
    interface Options {
        /**
         * The directory where the session files will be stored. Defaults to `./sessions`
         *
         * @type {string}
         * @memberOf Options
         */
        path?: string;

        /**
         * Session time to live in seconds. Defaults to `3600`
         *
         * @type {number}
         * @memberOf Options
         */
        ttl?: number;

        /**
         * The number of retries to get session data from a session file. Defaults to `5`
         *
         * @type {number}
         * @memberOf Options
         */
        retries?: number;

        /**
         * The exponential factor to use for retry. Defaults to `1`
         *
         * @type {number}
         * @memberOf Options
         */
        factor?: number;

        /**
         * The number of milliseconds before starting the first retry. Defaults to `50`
         *
         * @type {number}
         * @memberOf Options
         */
        minTimeout?: number;

        /**
         * The maximum number of milliseconds between two retries. Defaults to `100`
         *
         * @type {number}
         * @memberOf Options
         */
        maxTimeout?: number;

        /**
         * [OUT] Contains intervalObject if reap was scheduled
         *
         * @type {*}
         * @memberOf Options
         */
        reapIntervalObject?: any;

        /**
         * Interval to clear expired sessions in seconds or -1 if do not need. Defaults to `1 hour`
         *
         * @type {number}
         * @memberOf Options
         */
        reapInterval?: number;

        /**
         * Undocumented
         *
         * @type {number}
         * @memberOf Options
         */
        reapMaxConcurrent?: number;

        /**
         * Use distinct worker process for removing stale sessions. Defaults to `false`
         *
         * @type {boolean}
         * @memberOf Options
         */
        reapAsync?: boolean;

        /**
         * Reap stale sessions synchronously if can not do it asynchronously. Default to `false`
         *
         * @type {boolean}
         * @memberOf Options
         */
        reapSyncFallback?: boolean;

        /**
         * Log messages. Defaults to `console.log`
         *
         * @type {Function}
         * @memberOf Options
         */
        logFn?(...args: any[]): void;

        /**
         * Returns fallback session object after all failed retries. No defaults
         *
         * @type {Function}
         * @memberOf Options
         */
        fallbackSessionFn?(...args: any[]): void;

        /**
         * Object-to-text text encoding. Can be null. Defaults to `'utf8'`
         *
         * @type {string}
         * @memberOf Options
         */
        encoding?: string;

        /**
         * Encoding function. Takes object, returns encoded data. Defaults to `JSON.stringify`
         *
         * @type {Function}
         * @memberOf Options
         */
        encoder?(...args: any[]): void;

        /**
         * Decoding function. Takes encoded data, returns object. Defaults to `JSON.parse`
         *
         * @type {Function}
         * @memberOf Options
         */
        decoder?(...args: any[]): void;

        /**
         * If secret string is specified then enables encryption of the session before
         * writing the file and also decryption when reading it.
         *
         * @type {string}
         * @memberOf Options
         */
        secret?: string;

        /**
         * Encryption output encoding. Defaults to `'hex'`
         *
         * @type {string}
         * @memberOf Options
         */
        encryptEncoding?: string;

        /**
         * File extension of saved files. Defaults to `'.json'`
         *
         * @type {string}
         * @memberOf Options
         */
        fileExtension?: string;

        /**
         * Undocumented
         *
         * @type {RegExp}
         * @memberOf Options
         */
        filePattern?: RegExp;

        /**
         * Encryption key retrieval function. Takes secret andsession id, returns key.
         * Defaults to `function(secret, sessionId){return secret + sessionId;}`
         *
         *
         * @memberOf Options
         */
        keyFunction?(secret: string, sessionId: string): string;
    }
}

/**
 * Session file store is a provision for storing session data in
 * the session file
 *
 * @class FileStore
 */
declare class FileStore {
    /**
     * Creates an instance of FileStore.
     * @param {FileStore.Options} options
     *
     * @memberOf FileStore
     */
    constructor(options: FileStore.Options);

    /**
     * Attempts to fetch session from a session file by the given `sessionId`
     *
     * @param {string} sessionId
     * @param {(err: any, session: Express.Session) => void} callback
     *
     * @memberOf FileStore
     */
    get(sessionId: string, callback: (err: any, session: Express.Session) => void): void;

    /**
     * Attempts to commit the given session associated with the given `sessionId` to a session file
     *
     * @param {string} sessionId
     * @param {Express.Session} session
     * @param {(err: any) => void} callback
     *
     * @memberOf FileStore
     */
    set(sessionId: string, session: Express.Session, callback: (err: any) => void): void;

    /**
     * Touch the given session object associated with the given `sessionId`
     *
     * @param {string} sessionId
     * @param {Express.Session} session
     * @param {(err: any) => void} callback
     *
     * @memberOf FileStore
     */
    touch(sessionId: string, session: Express.Session, callback: (err: any) => void): void;

    /**
     * Attempts to unlink a given session by its id
     *
     * @param {string} sessionId
     * @param {(err: any) => void} callback
     *
     * @memberOf FileStore
     */
    destroy(sessionId: string, callback: (err: any) => void): void;

    /**
     * Attempts to fetch number of the session files
     *
     * @param {(err: any, length: number) => void} callback
     *
     * @memberOf FileStore
     */
    length(callback: (err: any, length: number) => void): void;

    /**
     * Attempts to clear out all of the existing session files
     *
     * @param {(err: any) => void} callback
     *
     * @memberOf FileStore
     */
    clear(callback: (err: any) => void): void;

    /**
     *
     *
     * @param {(err: any, files: Array<string>) => void} callback
     *
     * @memberOf FileStore
     */
    list(callback: (err: any, files: string[]) => void): void;

    /**
     * Attempts to detect whether a session file is already expired or not
     *
     * @param {string} sessionId
     * @param {(errr: any, isExpired: boolean) => void} callback
     *
     * @memberOf FileStore
     */
    expired(sessionId: string, callback: (errr: any, isExpired: boolean) => void): void;
}
