// Type definitions for sqlite3-promise 1.0
// Project: https://github.com/Aminadav/node-sqlite3-promise
// Definitions by: Jonathan Bredin <https://github.com/jonathanlb>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.1

import * as sqlite3 from 'sqlite3';
export * from 'sqlite3';

declare module 'sqlite3' {
    interface Database {
        allAsync(sql: string): Promise<any[]>;
        closeAsync(): Promise<void>;
        eachAsync(sql: string, cb?: (this: Statement, err: Error | null, row: any) => void): Promise<number>;
        eachAsync(sql: string, params: any, cb?: (this: Statement, err: Error | null, row: any) => void): Promise<number>;
        execAsync(sql: string): Promise<Statement>;
        getAsync(sql: string): Promise<any>;
        runAsync(sql: string): Promise<void>;
    }
}
