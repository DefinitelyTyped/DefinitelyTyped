// Type definitions for pg-cursor 2.5
// Project: https://github.com/brianc/node-postgres#readme
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
/// <reference types="node" />

import * as pg from "pg";

export interface CursorQueryConfig {
    /**
     * By default rows come out as a Record<string,any>.
     * Pass the string 'array' here to receive each row as an array of values.
     */
    rowMode?: "array";

    /**
     * Custom type parsers for just this query result.
     */
    types?: pg.CustomTypesConfig;
}

export type ResultCallback<RowType> = (err: Error | undefined, rows: RowType[], result: pg.QueryResult) => void;

export default class Cursor<Row = any> {
    constructor(query: string, values?: any[], config?: CursorQueryConfig);

    submit: (connection: pg.Connection) => void;

    read: (maxRows: number, callback: ResultCallback<Row>) => void;
    close: (callback: (err: Error) => void) => void;
}
