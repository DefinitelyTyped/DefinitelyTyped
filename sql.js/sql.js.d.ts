
// Type definitions for sql.js (Sep. 6 2015 snapshot)
// Project: https://github.com/kripken/sql.js
// Definitions by: George Wu <https://github.com/Hozuki/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

declare module "sql.js" {

    type SQLValue = number | string | Uint8Array;
    type KeyValueObject = { [key: string]: SQLValue };
    type SQLValueObject = { [columnName: string]: SQLValue };
    type DataRow = SQLValue[];

    class Database {
        constructor(data: Buffer);
        constructor(data: Uint8Array);
        constructor(data: number[]);

        run(sql: string): Database;
        run(sql: string, params: KeyValueObject): Database;
        run(sql: string, params: SQLValue[]): Database;

        exec(sql: string): QueryResults[];

        each(sql: string, callback: (obj: SQLValueObject) => void, done: () => void): void;
        each(sql: string, params: KeyValueObject, callback: (obj: SQLValueObject) => void, done: () => void): void;
        each(sql: string, params: SQLValue[], callback: (obj: SQLValueObject) => void, done: () => void): void;

        prepare(sql: string): Statement;
        prepare(sql: string, params: KeyValueObject): Statement;
        prepare(sql: string, params: SQLValue[]): Statement;

        export(): Uint8Array;

        close(): void;
    }

    class Statement {
        bind(): boolean;
        bind(values: KeyValueObject): boolean;
        bind(values: SQLValue[]): boolean;

        step(): boolean;

        get(): DataRow;
        get(params: KeyValueObject): DataRow;
        get(params: SQLValue[]): DataRow;

        getColumnNames(): string[];

        getAsObject(): SQLValueObject;
        getAsObject(params: KeyValueObject): SQLValueObject;
        getAsObject(params: SQLValue[]): SQLValueObject;

        run(): void;
        run(values: KeyValueObject): void;
        run(values: SQLValue[]): void;

        reset(): void;

        freemem(): void;

        free(): boolean;
    }

    interface QueryResults {
        columns: string[];
        values: DataRow[];
    }

}
