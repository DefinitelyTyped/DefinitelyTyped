// Type definitions for sqlite3 2.2
// Project: https://github.com/mapbox/node-sqlite3
// Definitions by: Nick Malaguti <https://github.com/nmalaguti/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />


import events = require("events");

export declare var OPEN_READONLY: number;
export declare var OPEN_READWRITE: number;
export declare var OPEN_CREATE: number;

export declare var cached: {
    Database(filename: string, callback?: (err: Error) => void): Database;
    Database(filename: string, mode?: number, callback?: (err: Error) => void): Database;
};

export interface RunResult {
    lastID: number;
    changes: number;
}

export declare class Statement {
    bind(callback?: (err: Error) => void): Statement;
    bind(...params: any[]): Statement;

    reset(callback?: (err: Error) => void): Statement;

    finalize(callback?: (err: Error) => void): Statement;

    run(callback?: (err: Error) => void): Statement;
    run(params: any, callback?: (err: Error) => void): Statement;
    run(...params: any[]): Statement;

    get(callback?: (err: Error, row: any) => void): Statement;
    get(params: any, callback?: (err: Error, row: any) => void): Statement;
    get(...params: any[]): Statement;

    all(callback?: (err: Error, rows: any[]) => void): Statement;
    all(params: any, callback?: (err: Error, rows: any[]) => void): Statement;
    all(...params: any[]): Statement;

    each(callback?: (err: Error, row: any) => void, complete?: (err: Error, count: number) => void): Statement;
    each(params: any, callback?: (err: Error, row: any) => void, complete?: (err: Error, count: number) => void): Statement;
    each(...params: any[]): Statement;
}

export declare class Database extends events.EventEmitter {
    constructor(filename: string, callback?: (err: Error) => void);
    constructor(filename: string, mode?: number, callback?: (err: Error) => void);

    close(callback?: (err: Error) => void): void;

    run(sql: string, callback?: (err: Error) => void): Database;
    run(sql: string, params: any, callback?: (err: Error) => void): Database;
    run(sql: string, ...params: any[]): Database;

    get(sql: string, callback?: (err: Error, row: any) => void): Database;
    get(sql: string, params: any, callback?: (err: Error, row: any) => void): Database;
    get(sql: string, ...params: any[]): Database;

    all(sql: string, callback?: (err: Error, rows: any[]) => void): Database;
    all(sql: string, params: any, callback?: (err: Error, rows: any[]) => void): Database;
    all(sql: string, ...params: any[]): Database;

    each(sql: string, callback?: (err: Error, row: any) => void, complete?: (err: Error, count: number) => void): Database;
    each(sql: string, params: any, callback?: (err: Error, row: any) => void, complete?: (err: Error, count: number) => void): Database;
    each(sql: string, ...params: any[]): Database;

    exec(sql: string, callback?: (err: Error) => void): Database;

    prepare(sql: string, callback?: (err: Error) => void): Statement;
    prepare(sql: string, params: any, callback?: (err: Error) => void): Statement;
    prepare(sql: string, ...params: any[]): Statement;

    serialize(callback?: () => void): void;
    parallelize(callback?: () => void): void;

    on(event: "trace", listener: (sql: string) => void): this;
    on(event: "profile", listener: (sql: string, time: number) => void): this;
    on(event: "error", listener: (err: Error) => void): this;
    on(event: "open" | "close", listener: () => void): this;
    on(event: string, listener: (...args: any[]) => void): this;
}

declare function verbose(): void;
