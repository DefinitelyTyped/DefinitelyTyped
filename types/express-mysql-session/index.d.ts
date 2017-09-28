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
    /**
     * @param  {MySQLStore.Options} options
     * @param  {any} connection?
     * @param  {(error:any)=>void} callback?
     */
    constructor(options: MySQLStore.Options, connection?: any, callback?: (error: any) => void);

    /**
     * @returns void
     */
    setDefaultOptions(): void;

    /**
     * @param  {(error:any)=>void} callback?
     * @returns void
     */
    createDatabaseTable(callback?: (error: any) => void): void;

    /**
     * @param  {string} sessionId
     * @param  {(error:any,session:any)=>void} callback?
     * @returns void
     */
    get(sessionId: string, callback?: (error: any, session: any) => void): void;

    /**
     * @param  {string} sessionId
     * @param  {any} data
     * @param  {(error:any)=>void} callback?
     * @returns void
     */
    set(sessionId: string, data: any, callback?: (error: any) => void): void;

    /**
     * @param  {string} sessionId
     * @param  {any} data
     * @param  {(error:any)=>void} callback?
     * @returns void
     */
    touch(sessionId: string, data: any, callback?: (error: any) => void): void;

    /**
     * @param  {string} sessionId
     * @param  {(error:any)=>void} callback?
     * @returns void
     */
    destroy(sessionId: string, callback?: (error: any) => void): void;

    /**
     * @param  {(error:any,count:any)=>void} callback?
     * @returns void
     */
    length(callback?: (error: any, count: any) => void): void;

    /**
     * @param  {(error:any)=>void} callback?
     * @returns void
     */
    clear(callback?: (error: any) => void): void;

    /**
     * @param  {(error:any)=>void} callback?
     * @returns void
     */
    clearExpiredSessions(callback?: (error: any) => void): void;

    /**
     * @param  {number} interval
     * @returns void
     */
    setExpirationInterval(interval: number): void;

    /**
     * @returns void
     */
    clearExpirationInterval(): void;

    /**
     * @param  {()=>void} callback?
     * @returns void
     */
    close(callback?: () => void): void;

    /**
     * @param  {any} object
     * @param  {any} defaultValues
     * @param  {any} options?
     * @returns void
     */
    default(object: any, defaultValues: any, options?: any): void;

    /**
     * @param  {any} object
     * @returns void
     */
    clone(object: any): void;

    /**
     * @param  {any} value
     * @returns void
     */
    isObject(value: any): void;
}
