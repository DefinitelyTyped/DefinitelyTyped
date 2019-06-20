// Type definitions for sqlanywhere 1.0
// Project: https://github.com/sqlanywhere/node-sqlanywhere
// Definitions by: Peter Keuter <https://github.com/pkeuter>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
export function createConnection(): SybaseConnection;

export interface SybaseConnection {
    connect(
        params: ConnectionParameters,
        cb: (err: Error | undefined) => void
    ): void;
    close(cb: (err?: Error) => void): void;
    disconnect(cb: (err?: Error) => void): void;
    connected(): boolean;
    exec(query: string, cb: (err: Error | undefined, result: any) => void): void;
    exec(
        query: string,
        placeholders: any[],
        cb: (err: Error | undefined, result: any) => void
    ): void;
    prepare(
        query: string,
        cb: (err: Error | undefined, stmt: Statement) => void
    ): void;
    prepare(query: string): Statement;
    commit(cb: (err: Error | undefined) => void): void;
    rollback(cb: (err: Error | undefined) => void): void;
}

export interface ConnectionParameters {
    Server: string;
    UserId: string;
    DatabaseFile?: string;
    AutoStart?: string;
    Password: string;
    Host?: string;
}

export interface Statement {
    exec(args: any[], cb: (err: Error | undefined, rows: any[]) => void): void;
    exec(args: any[]): any[];
    getMoreResults(): any[];
    drop(cb: (err: Error | undefined) => void): void;
}
