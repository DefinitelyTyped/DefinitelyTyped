import { Stream } from 'stream';

import { Connection } from './connection';
import { RecordResult } from './record-result';
import { Record } from './record';
import { Job } from './job';
import { Batch, BatchResultInfo } from './batch';

export interface BulkOptions {
    extIdField: string;
    concurrencyMode?: 'Serial' | 'Parallel';
}

type BulkLoadOperation =
    | 'insert'
    | 'update'
    | 'upsert'
    | 'delete'
    | 'hardDelete';

export class Bulk {
    constructor(connection: Connection);

    pollInterval: number;
    pollTimeout: number;

    createJob(type: string, operation: string, options?: BulkOptions): Job;
    job(id: string): Job;
    load(type: string, operation: BulkLoadOperation, options?: BulkOptions, input?: Record[] | Stream | string, callback?: (err: Error, result: RecordResult[] | BatchResultInfo[]) => void): Batch;
    query(soql: string): any;
}
