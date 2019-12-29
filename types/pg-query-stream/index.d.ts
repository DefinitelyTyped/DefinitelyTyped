// Type definitions for pg-query-stream 1.0
// Project: https://github.com/brianc/node-pg-query-stream
// Definitions by: António Marques <https://github.com/asmarques>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/// <reference types="node" />

import stream = require("stream");
import pg = require("pg");

declare namespace QueryStream {
    interface Options {
        highWaterMark?: number;
        batchSize?: number;
    }
}

declare class QueryStream extends stream.Readable implements pg.Submittable {
    batchSize: number;
    text: string;
    values?: any[];
    constructor(text: string, values?: any[], options?: QueryStream.Options);
    submit(connection: pg.Connection): void;
}

export = QueryStream;
