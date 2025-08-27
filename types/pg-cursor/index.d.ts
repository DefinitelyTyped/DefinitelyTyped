/// <reference types="node" />

import EventEmitter = require("events");
import { Connection, CustomTypesConfig, QueryResult } from "pg";

declare namespace Cursor {
    interface CursorQueryConfig {
        /**
         * By default rows come out as a Record<string,any>.
         * Pass the string 'array' here to receive each row as an array of values.
         */
        rowMode?: "array";
        /**
         * Custom type parsers for just this query result.
         */
        types?: CustomTypesConfig;
    }
    type ResultCallback<RowType> = (err: Error | undefined, rows: RowType[], result: QueryResult) => void;
}

declare class Cursor<Row = any> extends EventEmitter {
    constructor(query: string, values?: any[], config?: Cursor.CursorQueryConfig);
    submit: (connection: Connection) => void;
    read(maxRows: number): Promise<Row[]>;
    read(maxRows: number, callback: Cursor.ResultCallback<Row>): undefined;
    read(maxRows: number, callback?: Cursor.ResultCallback<Row>): Promise<Row[]> | undefined;
    close(): Promise<void>;
    close(callback: (err: Error) => void): undefined;
    close(callback?: (err: Error) => void): Promise<void> | undefined;

    /**
     * @deprecated Cursor.end is deprecated. Call end on the client itself to end a connection to the database.
     */
    end(callback: () => void): void;
}

export = Cursor;
