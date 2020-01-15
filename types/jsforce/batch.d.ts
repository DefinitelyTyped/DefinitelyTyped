import { Stream, Writable } from 'stream';

import { RecordResult } from './record-result';
import { Record } from './record';

export interface BatchInfo {
    id: string;
    jobId: string;
    state: string;
    stateMessage: string;
    numberRecordsProcessed: string;
    numberRecordsFailed: string;
    totalProcessingTime: string;
}

export interface BatchResultInfo {
    id: string;
    batchId?: string;
    jobId?: string;
    success?: boolean;
    errors?: string[];
}

export class Batch extends Writable {
    check(callback?: (batchInfo: BatchInfo) => void): Promise<BatchInfo>;
    execute(input?: Record[] | Stream | string, callback?: (err: Error, result: RecordResult[] | BatchResultInfo[]) => void): Batch;
    poll(interval: number, timeout: number): void;
    retrieve(callback?: (batchInfo: BatchInfo) => void): Promise<RecordResult[] | BatchResultInfo[]>;
    then(): Promise<any>;
    thenAll(callback: (data: any) => void): void;
}
