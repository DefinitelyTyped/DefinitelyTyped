import { Stream } from "stream";

import { Batch, BatchResultInfo } from "./batch";
import { Connection } from "./connection";
import { Job } from "./job";
import { Record } from "./record";
import { RecordResult } from "./record-result";

export interface BulkOptions {
    extIdField: string;
    concurrencyMode?: "Serial" | "Parallel" | undefined;
}

type BulkLoadOperation =
    | "insert"
    | "update"
    | "upsert"
    | "delete"
    | "hardDelete";

export class Bulk {
    constructor(connection: Connection);

    pollInterval: number;
    pollTimeout: number;

    createJob(type: string, operation: string, options?: BulkOptions): Job;
    job(id: string): Job;
    load(
        type: string,
        operation: BulkLoadOperation,
        options?: BulkOptions,
        input?: Record[] | Stream | string,
        callback?: (err: Error, result: RecordResult[] | BatchResultInfo[]) => void,
    ): Batch;
    query(soql: string): any;
}
