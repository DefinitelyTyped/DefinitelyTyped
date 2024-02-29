import { Stream, Writable } from "stream";

import { Record } from "./record";
import { RecordResult } from "./record-result";
import { Parsable } from "./record-stream";

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
    batchId?: string | undefined;
    jobId?: string | undefined;
    success?: boolean | undefined;
    errors?: string[] | undefined;
}

export class Batch extends Writable {
    check(callback?: (batchInfo: BatchInfo) => void): Promise<BatchInfo>;
    execute(
        input?: Record[] | Stream | string,
        callback?: (err: Error, result: RecordResult[] | BatchResultInfo[]) => void,
    ): Batch;
    poll(interval: number, timeout: number): void;
    retrieve(callback?: (batchInfo: BatchInfo) => void): Promise<RecordResult[] | BatchResultInfo[]>;
    result(resultId: string): Parsable<any>;
    then(): Promise<any>;
    thenAll(callback: (data: any) => void): void;
}
