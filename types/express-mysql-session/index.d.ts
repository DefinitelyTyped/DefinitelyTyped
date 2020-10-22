// Type definitions for express-mysql-session 2.1
// Project: https://github.com/chill117/express-mysql-session#readme
// Definitions by: Akim95 <https://github.com/Akim95>
//                 Sebastian Krüger <https://github.com/mathe42>
//                 Ionaru <https://github.com/Ionaru>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import * as expressSession from 'express-session';

export = MySQLStore;

declare function MySQLStore(session: typeof expressSession): typeof MySQLStoreClass;

declare namespace MySQLStore {
    interface Options {
        host?: string;
        port?: number;
        user?: string;
        password?: string;
        database?: string;
        checkExpirationInterval?: number;
        expiration?: number;
        createDatabaseTable?: boolean;
        connectionLimit?: number;
        schema?: Partial<Schema>;
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

declare class MySQLStoreClass {
    constructor(options: MySQLStore.Options, connection?: any, callback?: (error: any) => void);

    setDefaultOptions(): void;

    setOptions(options: MySQLStore.Options): void;

    validateOptions(options: MySQLStore.Options): void;

    createDatabaseTable(callback?: (error: any) => void): void;

    get(sessionId: string, callback?: (error: any, session: any) => void): void;

    set(sessionId: string, data: any, callback?: (error: any) => void): void;

    touch(sessionId: string, data: any, callback?: (error: any) => void): void;

    destroy(sessionId: string, callback?: (error: any) => void): void;

    length(callback?: (error: any, count: any) => void): void;

    all(callback?: (error: any, sessions: any) => void): void;

    clear(callback?: (error: any) => void): void;

    clearExpiredSessions(callback?: (error: any) => void): void;

    query(sql: string, params: any, callback?: (error: any, rows: any, fields: any) => void): void;

    setExpirationInterval(interval: number): void;

    clearExpirationInterval(): void;

    close(callback?: () => void): void;
}
