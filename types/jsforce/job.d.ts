import { EventEmitter } from "events";

import { Batch, BatchInfo } from "./batch";
import { Bulk, BulkOptions } from "./bulk";

export interface JobInfo {
    id: string;
    object: string;
    operation: string;
    state: string;
}

export class Job extends EventEmitter {
    constructor(bulk: Bulk, type?: string, operation?: string, options?: BulkOptions, jobId?: string);

    abort(callback?: (err: Error, jobInfo: JobInfo) => void): Promise<any>;
    batch(batchId: string): Batch;
    check(callback?: (err: Error, jobInfo: JobInfo) => void): Promise<JobInfo>;
    close(callback?: (err: Error, jobInfo: JobInfo) => void): Promise<JobInfo>;
    createBatch(): Batch;
    info(callback?: (err: Error, jobInfo: JobInfo) => void): Promise<JobInfo>;
    list(callback?: (err: Error, jobInfo: BatchInfo) => void): Promise<BatchInfo[]>;
    open(callback?: (err: Error, jobInfo: JobInfo) => void): Promise<JobInfo>;
}
