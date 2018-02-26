// Type definitions for express-mysql-session 1.2
// Project: https://github.com/chill117/express-mysql-session#readme
// Definitions by: Akim95 <https://github.com/Akim95>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export = MySQLStore;

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
        schema?: Schema;
    }
    interface Schema {
        tableName: string;
        columnNames: ColumnNames;
    }
    interface ColumnNames {
        session_id: string;
        expires: string;
        data: string;
    }
}

declare class MySQLStore {
    constructor(options: MySQLStore.Options, connection?: any, callback?: (error: any) => void);

    setDefaultOptions(): void;

    createDatabaseTable(callback?: (error: any) => void): void;

    get(sessionId: string, callback?: (error: any, session: any) => void): void;

    set(sessionId: string, data: any, callback?: (error: any) => void): void;

    touch(sessionId: string, data: any, callback?: (error: any) => void): void;

    destroy(sessionId: string, callback?: (error: any) => void): void;

    length(callback?: (error: any, count: any) => void): void;

    clear(callback?: (error: any) => void): void;

    clearExpiredSessions(callback?: (error: any) => void): void;

    setExpirationInterval(interval: number): void;

    clearExpirationInterval(): void;

    close(callback?: () => void): void;

    default(object: any, defaultValues: any, options?: any): void;

    clone(object: any): void;

    isObject(value: any): void;
}
