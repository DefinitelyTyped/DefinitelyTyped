import { EventEmitter } from 'events';

import { Bulk, BulkOptions } from './bulk';
import { Batch, BatchInfo } from './batch';

export interface JobInfo {
    id: string;
    object: string;
    operation: string;
    state: string;
}

export class Job extends EventEmitter {
    constructor(bulk: Bulk, type?: string, operation?: string, options?: BulkOptions, jobId?: string);

    abort(callback?: (jobInfo: JobInfo) => void): Promise<any>;
    batch(batchId: string): Batch;
    check(callback?: (jobInfo: JobInfo) => void): Promise<JobInfo>;
    close(callback?: (jobInfo: JobInfo) => void): Promise<JobInfo>;
    createBatch(): Batch;
    info(callback?: (jobInfo: JobInfo) => void): Promise<JobInfo>;
    list(callback?: (jobInfo: BatchInfo) => void): Promise<BatchInfo>;
    open(callback?: (jobInfo: JobInfo) => void): Promise<JobInfo>;
}
