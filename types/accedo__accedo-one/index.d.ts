// Type definitions for @accedo/accedo-one 4.0
// Project: https://www.accedo.tv/one
// Definitions by: Alexander P. Cerutti <https://github.com/alexandercerutti>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Minimum TypeScript Version: 3.1

/**
 * @example
 * ~ import accedoOne from "@accedo/accedo-one"; // ESM Syntax
 * ~ import accedoOne = require("@accedo/accedo-one"); // CJS Syntax
 * ~ const accedo = accedoOne({ ... });
 * ~
 * ~ accedo.getEntries(...);
 *
 * @param config
 */

export as namespace accedoOne;
declare function accedoOne(config: AccedoConfig): AccedoClient;
export = accedoOne;
export {};

declare class AccedoClient {
    config: AccedoConfig;

    /**
     * Get all the content entries, based on the given parameters.
     * DO NOT use several of the id, alias, typeId and typeAlias
     * options at the same time - behaviour would be ungaranteed.
     *
     * @param params
     */

    getEntries(params?: AccedoEntryParams): Promise<any>;

    /**
     * Get one content entry by id, based on the given parameters.
     *
     * @param id
     * @param params
     */

    getEntryById(id: string, params?: Pick<AccedoEntryParams, 'preview' | 'at' | 'locale'>): Promise<any>;

    /**
     * Get one content entry, based on the given parameters.
     *
     * @param alias
     * @param params
     */

    getEntryByAlias<A>(alias: A, params?: Pick<AccedoEntryParams, 'preview' | 'at' | 'locale'>): Promise<A>;

    /**
     * Create a session and store it for reuse in this client instance.
     * Note you do not usually need to worry about this. Other methods
     * will call it automatically for you when it is needed.
     *
     * @returns a Promise of a string, the sessionKey
     */

    createSession(): Promise<string>;

    /**
     * Get the current log level
     *
     * @returns a promise of the log level (string)
     */

    getLogLevel(): Promise<AccedoLog.Level>;

    /**
     * NOTE: the behaviour varies when run on Node.js or on browsers.
     *
     * On Node.js, the log will be sent immediately.
     * On browsers: add the log to a queue so several logs may be sent
     * as a batch, when a predefined total size is reached or after a
     * debouncing delay. Whenever the user navigates away, the SDK will
     * also attempt to send any queued-up log.
     *
     * If the current log level is high enough, lower level logs will be ignored.
     *
     * @param level the log level
     * @param details the log information
     * @param metadata extra metadata (will go through JSON.stringify). Can be passed as any number of trailing arguments.
     */

    sendLog(level: AccedoLog.Level, details: Readonly<AccedoLog.Details>, metadata?: any): Promise<boolean>;

    /**
     * Returns the currently stored sessionKey for this client instance
     *
     * @returns string: the sessionKey, if any
     */

    getSessionKey(): string;

    /**
     * Get the current application status
     *
     * @returns A promise of the application status (string)
     */

    getApplicationStatus(): Promise<string>;

    /**
     * Lists all the assets.
     *
     * @returns A promise of a hash of assets (key: asset name, value: asset URL)
     */

    getAllAssets(): Promise<string>;

    /**
     * Send a usage START event
     *
     * @returns A promise denoting the success of the operation
     */

    sendUsageStartEvent(): Promise<boolean>;

    /**
     * Send a usage QUIT event
     *
     * @param retentionTimeInSeconds the retention time, in seconds
     * @returns A promise denoting the success of the operation
     */

    sendUsageStopEvent(retentionTimeInSeconds?: number | string): Promise<boolean>;

    /**
     * Get all the enabled plugins
     *
     * @returns A promise of the requested data
     */

    getAllEnabledPlugins(): Promise<any>;

    /**
     * Get the profile information
     *
     * @returns A promise of the requested data
     */

    getProfileInfo(): Promise<AccedoProfile>;

    /**
     * Get all the metadata
     *
     * @returns A promise of the requested data
     */

    getAllMetadata(): Promise<any>;

    /**
     * Get the metadata by a specific key
     *
     * @param key a key to get specific metadata
     * @returns a promise of the requested data
     */

    getMetadataByKey(key: string): Promise<any>;

    /**
     * Get the metadata by specific keys
     *
     * @param keys an array of keys (strings)
     * @returns a promise of the requested data
     */

    getMetadataByKeys(keys: string[]): Promise<any>;

    /**
     * Get all the application-scope data for a given user
     *
     * @param userName an Accedo One user
     * @returns A promise of the requested data
     */

    getAllApplicationScopeDataByUser(userName: string): Promise<any>;

    /**
     * Get all the application-group-scope data for a given user
     *
     * @param userName an Accedo One user
     * @returns A promise of the requested data
     */

    getAllApplicationGroupScopeDataByUser(userName: string): Promise<any>;

    /**
     * Get all the application-scope data for a given user and data key
     *
     * @param userName an Accedo One user
     * @param key a key to specify what data to obtain
     */

    getApplicationScopeDataByUserAndKey(userName: string, key: string): Promise<any>;

    /**
     * Get all the application-group-scope data for a given user
     *
     * @param userName an Accedo One user
     * @param key a key to specify what data to obtain
     * @returns A promise of the requested data
     */

    getApplicationGroupScopeDataByUserAndKey(userName: string, key: string): Promise<any>;

    /**
     * Set the application-scope data for a given user
     *
     * @param userName an Accedo One user
     * @param data the data to store
     * @returns A promise of the requested data
     */

    setApplicationScopeUserData<D extends object>(userName: string, data: D): Promise<D>;

    /**
     * Set the application-group-scope data for a given user
     *
     * @param userName an Accedo One user
     * @param data the data to store
     * @returns A promise of the requested data
     */

    setApplicationGroupScopeUserData<D extends object>(userName: string, data: D): Promise<D>;

    /**
     * Set the application-scope data for a given user
     *
     * @param userName an Accedo One user
     * @param key a key to specify what data to obtain
     * @param data the data to store
     * @returns A promise of the requested data
     */

    setApplicationScopeUserDataByKey<D extends object>(userName: string, key: string, data: D): Promise<D>;

    /**
     * Set the application-group-scope data for a given user
     *
     * @param userName an Accedo One user
     * @param key a key to specify what data to obtain
     * @param data the data to store
     * @returns A promise of the requested data
     */

    setApplicationGroupScopeUserDataByKey<D extends object>(userName: string, key: string, data: D): Promise<D>;

    /**
     * Get all the available locales
     *
     * @returns A promise of the requested data
     */

    getAvailableLocales(): Promise<{ locales: AccedoLocale[] }>;

    /**
     * Send batched logs, each with its own level, timestamp, details and extra metadata.
     * Note that on browsers, the other method, sendLog, is more convenient as it will
     * auto-batch logs for you.
     *
     * @param logs
     * @returns A promise of the success of the operation
     */

    sendLogs(logs: ReadonlyArray<AccedoLog.Logobject>): Promise<boolean>;
}

declare namespace AccedoLog {
    enum Level {
        DEBUG = 'debug',
        INFO = 'info',
        WARN = 'warn',
        ERROR = 'error',
    }

    interface Details {
        /** The log message */
        message: string;

        /** The error code (max 5 digits) */
        errorCode?: number;

        /** The dimension 1 information */
        dim1?: string;

        /** The dimension 2 information */
        dim2?: string;

        /** The dimension 3 information */
        dim3?: string;

        /** The dimension 4 information */
        dim4?: string;
    }

    interface Logobject extends Details {
        /**
         * the log type
         */

        logType: Level;

        /**
         * The timestamp for the log, as a UTC ISO 8601 string
         * (ie. '2016-07-04T06:17:21Z'), or a POSIX millisecond
         * number
         */

        timestamp: string | number;

        /** Extra metadata (will go through JSON.stringify) */
        metadata?: any;
    }
}

interface AccedoEntryParams {
    /** when true, get the preview version */
    preview?: boolean;

    /** when given, get the version at the given time */
    at?: string | Date;

    /** an array of entry ids (strings) */
    id?: string[];

    /** an array of entry aliases (strings) */
    alias?: string[];

    /** only return entries of the given type ids (strings) */
    typeId?: string[];

    /** only return entries whose entry type has this alias */
    typeAlias?: string;

    /**
     * Limit to that many results per page (limits as per Accedo
     * One API, currently 1 to 50, default 20)
     */
    size?: number | string;

    /** Offset the result by that many pages */
    offset?: number | string;

    /**
     * if available, get the version for the given locale
     * (defaults to the default locale)
     */

    locale?: string;
}

interface AccedoProfile {
    profileId: string;
    profileName: string;
    profileDescription: string;
    profileLastModified: string;
}

interface AccedoConfig {
    /**
     * A function that should return an object with deviceId and
     * sessionKey properties, saved from previous sessions (see
     * onDeviceIdGenerated, onSessionKeyChanged)
     */

    browserInfoProvider?: () => {
        deviceId: string;
        sessionKey: string;
    };

    /** The application Key */
    appKey: string;

    /** The device identifier (if not provided, a uuid will be generated instead) */
    deviceId?: string;

    /** The sessionKey (note a new one may be created when not given or expired) */
    sessionKey?: string;

    /** the user's IP, given to Accedo One for every request this client will trigger (for geolocation). */
    ip?: string;

    /** A function to use to see this SDK's logs */
    log?: (...args: any[]) => void;

    /** Callback to obtain the new deviceId, if one gets generated */
    onDeviceIdGenerated?: (deviceId: string) => void;

    /** Callback to obtain the sessionKey, anytime a new one gets generated */
    onSessionKeyChanged?: (sessionKey: string) => void;

    /** All APIs calls will use this as the base API URL (defaults to the Accedo One API URL) */
    target?: string;
}

interface AccedoLocale {
    code: string;
    displayName: string;
    countryInfo: {
        alpha2Code: string;
        alpha3Code: string;
    };
}
