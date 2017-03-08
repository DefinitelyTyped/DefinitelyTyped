// Type definitions for pg-query-stream 1.0
// Project: https://github.com/brianc/node-pg-query-stream
// Definitions by: António Marques <https://github.com/asmarques>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace QueryStream {
    interface Options {
        highWaterMark?: number;
        batchSize?: number;
    }
}

declare class QueryStream {
    batchSize: number;
    text: string;
    values?: any[];
    constructor(text: string, values?: any[], options?: QueryStream.Options);
}

export = QueryStream;
