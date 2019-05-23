// Type definitions for sql.js 1.0
// Project: https://github.com/kripken/sql.js
// Definitions by: George Wu <https://github.com/Hozuki>,
//                 Florian Keller <https://github.com/ffflorian>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.1

/// <reference types="node" />

export type ValueType = number | string | Uint8Array;
export type ParamsObject = Record<string, ValueType>;
export type ParamsCallback = (obj: ParamsObject) => void;

export interface Config {
    locateFile(fileName?: string): string;
}

export interface QueryResults {
    columns: string[];
    values: ValueType[];
}

export class Database {
    constructor();
    constructor(data: Buffer);
    constructor(data: Uint8Array);
    constructor(data: number[]);

    run(sql: string): Database;
    run(sql: string, params: ParamsObject): Database;
    run(sql: string, params: ValueType[]): Database;

    exec(sql: string): QueryResults[];

    each(sql: string, callback: ParamsCallback, done: () => void): void;
    each(sql: string, params: ParamsObject, callback: ParamsCallback, done: () => void): void;
    each(sql: string, params: ValueType[], callback: ParamsCallback, done: () => void): void;

    prepare(sql: string): Statement;
    prepare(sql: string, params: ParamsObject): Statement;
    prepare(sql: string, params: ValueType[]): Statement;

    export(): Uint8Array;

    close(): void;

    getRowsModified(): number;

    create_function(name: string, func: Function): void;
}

export class Statement {
    bind(): boolean;
    bind(values: ParamsObject): boolean;
    bind(values: ValueType[]): boolean;

    step(): boolean;

    get(): ValueType[];
    get(params: ParamsObject): ValueType[];
    get(params: ValueType[]): ValueType[];

    getColumnNames(): string[];

    getAsObject(): ParamsObject;
    getAsObject(params: ParamsObject): ParamsObject;
    getAsObject(params: ValueType[]): ParamsObject;

    run(): void;
    run(values: ParamsObject): void;
    run(values: ValueType[]): void;

    reset(): void;

    freemem(): void;

    free(): boolean;
}

declare interface sqlJSStatic {
    Database: typeof Database;
    Statement: typeof Statement;
}

declare function initSqlJsStatic(config?: Config): Promise<sqlJSStatic>;

declare global {
    var initSqlJs: typeof initSqlJsStatic;
}

export default initSqlJsStatic;
