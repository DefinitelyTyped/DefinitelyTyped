// Type definitions for express session-file-store 1.0
// Project: https://github.com/valery-barysok/session-file-store
// Definitions by: Gevik Babakhani <https://github.com/blendsdk>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

/// <reference types="express-session" />

export = FileStore;

declare namespace FileStore {
    /**
     * FileStore Options
     */
    interface Options {
        /**
         * The directory where the session files will be stored. Defaults to `./sessions`
         */
        path?: string;

        /**
         * Session time to live in seconds. Defaults to `3600`
         */
        ttl?: number;

        /**
         * The number of retries to get session data from a session file. Defaults to `5`
         */
        retries?: number;

        /**
         * The exponential factor to use for retry. Defaults to `1`
         */
        factor?: number;

        /**
         * The number of milliseconds before starting the first retry. Defaults to `50`
         */
        minTimeout?: number;

        /**
         * The maximum number of milliseconds between two retries. Defaults to `100`
         */
        maxTimeout?: number;

        /**
         * [OUT] Contains intervalObject if reap was scheduled
         */
        reapIntervalObject?: any;

        /**
         * Interval to clear expired sessions in seconds or -1 if do not need. Defaults to `1 hour`
         */
        reapInterval?: number;

        /**
         * Undocumented
         */
        reapMaxConcurrent?: number;

        /**
         * Use distinct worker process for removing stale sessions. Defaults to `false`
         */
        reapAsync?: boolean;

        /**
         * Reap stale sessions synchronously if can not do it asynchronously. Default to `false`
         */
        reapSyncFallback?: boolean;

        /**
         * Log messages. Defaults to `console.log`
         */
        logFn?(...args: any[]): void;

        /**
         * Returns fallback session object after all failed retries. No defaults
         */
        fallbackSessionFn?(...args: any[]): void;

        /**
         * Object-to-text text encoding. Can be null. Defaults to `'utf8'`
         */
        encoding?: string;

        /**
         * Encoding function. Takes object, returns encoded data. Defaults to `JSON.stringify`
         */
        encoder?(...args: any[]): void;

        /**
         * Decoding function. Takes encoded data, returns object. Defaults to `JSON.parse`
         */
        decoder?(...args: any[]): void;

        /**
         * If secret string is specified then enables encryption of the session before
         * writing the file and also decryption when reading it.
         */
        secret?: string;

        /**
         * Encryption output encoding. Defaults to `'hex'`
         */
        encryptEncoding?: string;

        /**
         * File extension of saved files. Defaults to `'.json'`
         */
        fileExtension?: string;

        /**
         * Undocumented
         */
        filePattern?: RegExp;

        /**
         * Encryption key retrieval function. Takes secret andsession id, returns key.
         * Defaults to `function(secret, sessionId){return secret + sessionId;}`
         */
        keyFunction?(secret: string, sessionId: string): string;
    }
}

/**
 * Session file store is a provision for storing session data in
 * the session file
 */
declare class FileStore {
    /**
     * Creates an instance of FileStore.
     */
    constructor(options: FileStore.Options);

    /**
     * Attempts to fetch session from a session file by the given `sessionId`
     */
    get(sessionId: string, callback: (err: any, session: Express.Session) => void): void;

    /**
     * Attempts to commit the given session associated with the given `sessionId` to a session file
     */
    set(sessionId: string, session: Express.Session, callback: (err: any) => void): void;

    /**
     * Touch the given session object associated with the given `sessionId`
     */
    touch(sessionId: string, session: Express.Session, callback: (err: any) => void): void;

    /**
     * Attempts to unlink a given session by its id
     */
    destroy(sessionId: string, callback: (err: any) => void): void;

    /**
     * Attempts to fetch number of the session files
     */
    length(callback: (err: any, length: number) => void): void;

    /**
     * Attempts to clear out all of the existing session files
     */
    clear(callback: (err: any) => void): void;

    list(callback: (err: any, files: string[]) => void): void;

    /**
     * Attempts to detect whether a session file is already expired or not
     */
    expired(sessionId: string, callback: (errr: any, isExpired: boolean) => void): void;
}
