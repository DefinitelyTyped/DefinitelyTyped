// Type definitions for sql.js
// Project: https://github.com/kripken/sql.js
// Definitions by: George Wu <https://github.com/Hozuki/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../node/node.d.ts" />

declare module "sql.js" {

    class Database {
        constructor(data: Buffer);
        constructor(data: Uint8Array);
        constructor(data: number[]);

        run(sql: string): Database;
        run(sql: string, params: { [key: string]: number | string | Uint8Array }): Database;
        run(sql: string, params: (number | string | Uint8Array)[]): Database;

        exec(sql: string): QueryResults[];

        each(sql: string, callback: (obj: { [columnName: string]: number | string | Uint8Array }) => void, done: () => void): void;
        each(sql: string, params: { [key: string]: number | string | Uint8Array }, callback: (obj: { [columnName: string]: number | string | Uint8Array }) => void, done: () => void): void;
        each(sql: string, params: (number | string | Uint8Array)[], callback: (obj: { [columnName: string]: number | string | Uint8Array }) => void, done: () => void): void;

        prepare(sql: string): Statement;
        prepare(sql: string, params: { [key: string]: number | string | Uint8Array }): Statement;
        prepare(sql: string, params: (number | string | Uint8Array)[]): Statement;

        export(): Uint8Array;

        close(): void;
    }

    class Statement {
        bind(): boolean;
        bind(values: { [key: string]: number | string | Uint8Array }): boolean;
        bind(values: (number | string | Uint8Array)[]): boolean;

        step(): boolean;

        get(): (number | string | Uint8Array)[];
        get(params: { [key: string]: number | string | Uint8Array }): (number | string | Uint8Array)[];
        get(params: (number | string | Uint8Array)[]): (number | string | Uint8Array)[];

        getColumnNames(): string[];

        getAsObject(): { [columnName: string]: number | string | Uint8Array };
        getAsObject(params: { [key: string]: number | string | Uint8Array }): { [columnName: string]: number | string | Uint8Array };
        getAsObject(params: (number | string | Uint8Array)[]): { [columnName: string]: number | string | Uint8Array };

        run(): void;
        run(values: { [key: string]: number | string | Uint8Array }): void;
        run(values: (number | string | Uint8Array)[]): void;

        reset(): void;

        freemem(): void;

        free(): boolean;
    }

    interface QueryResults {
        columns: string[];
        values: (number | string | Uint8Array)[][];
    }

}
