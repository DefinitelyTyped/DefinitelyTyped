import * as expressSession from "express-session";
import { Connection, Pool, PoolOptions } from "mysql2";

export = MySQLStore;

declare function MySQLStore(session: typeof expressSession): typeof MySQLStoreClass;

declare namespace MySQLStore {
    interface Options
        extends Pick<PoolOptions, "waitForConnections" | "connectionLimit" | "maxIdle" | "idleTimeout" | "queueLimit">
    {
        /**
         * Host name for database connection
         */
        host?: string | undefined;

        /**
         * Port number for database connection
         */
        port?: number | undefined;

        /**
         * Database user
         */
        user?: string | undefined;

        /**
         * Password for the above database user
         */
        password?: string | undefined;

        /**
         * Database name
         */
        database?: string | undefined;

        /**
         * Whether or not to automatically check for and clear expired sessions
         */
        clearExpired?: boolean | undefined;

        /**
         * How frequently expired sessions will be cleared; milliseconds
         */
        checkExpirationInterval?: number | undefined;

        /**
         * The maximum age of a valid session; milliseconds
         */
        expiration?: number | undefined;

        /**
         * Whether or not to create the sessions database table, if one does not already exist
         */
        createDatabaseTable?: boolean | undefined;

        /**
         * Whether or not to end the database connection when the store is closed.
         * The default value of this option depends on whether or not a connection was passed to the constructor.
         * If a connection object is passed to the constructor, the default value for this option is false.
         */
        endConnectionOnClose?: boolean | undefined;

        /**
         * Whether or not to disable touch
         */
        disableTouch?: boolean | undefined;

        charset?: string | undefined;

        schema?: Partial<Schema> | undefined;
    }
    interface Schema {
        tableName: string;
        columnNames: Partial<ColumnNames>;
    }
    interface ColumnNames {
        session_id: string;
        expires: string;
        data: string;
    }

    type MySQLStore = MySQLStoreClass;
}

declare class MySQLStoreClass extends expressSession.Store {
    constructor(options?: MySQLStore.Options, connection?: Connection | Pool);

    state: "UNINITIALIZED" | "INITIALIZING" | "INITIALIZED" | "CLOSING" | "CLOSED";

    defaultOptions: MySQLStore.Options;

    connection: Connection | Pool;

    onReadyPromises: Array<{
        resolve: () => void;
        reject: (reason?: any) => void;
    }>;

    options: MySQLStore.Options;

    private _expirationInterval?: NodeJS.Timer | null;

    onReady(): Promise<void>;

    resolveReadyPromises(): void;

    rejectReadyPromises(error: Error): void;

    prepareOptionsForMySQL2(
        options: MySQLStore.Options,
    ): Pick<
        MySQLStore.Options,
        | "host"
        | "port"
        | "user"
        | "password"
        | "database"
        | "waitForConnections"
        | "connectionLimit"
        | "maxIdle"
        | "idleTimeout"
        | "queueLimit"
    >;

    createPool(options: MySQLStore.Options): Pool;

    setOptions(options?: MySQLStore.Options): void;

    validateOptions(options: MySQLStore.Options): void;

    createDatabaseTable(): Promise<void>;

    get(sessionId: string, callback: (error: any, session: any) => void): void;
    get(sessionId: string): Promise<any>;

    set(sessionId: string, data: any, callback: (error: any) => void): void;
    set(sessionId: string, data: any): Promise<void>;

    touch(sessionId: string, data: any, callback: (error: any) => void): void;
    touch(sessionId: string, data: any): Promise<void>;

    destroy(sessionId: string, callback: (error: any) => void): void;
    destroy(sessionId: string): Promise<void>;

    length(callback: (error: any, count: number) => void): void;
    length(): Promise<number>;

    all(callback: (error: any, sessions: Record<string, any>) => void): void;
    all(): Promise<Record<string, any>>;

    clear(callback: (error: any) => void): void;
    clear(): Promise<void>;

    clearExpiredSessions(): Promise<void>;

    query(sql: string, params: any): Promise<any>;

    setExpirationInterval(interval: number): void;

    clearExpirationInterval(): void;

    close(callback: () => void): void;
    close(): Promise<void>;
}
