import { RecordResult } from './record-result';
import { Connection } from './connection';
import { SalesforceId } from './salesforce-id';
import { Stream } from 'stream';

export class RecordReference<T> {
    constructor(conn: Connection, type: string, id: SalesforceId);
    blob(fieldName: string): Stream;
    del(options?: Object, callback?: (err: Error, result: RecordResult) => void): Promise<RecordResult>;
    delete(options?: Object, callback?: (err: Error, result: RecordResult) => void): Promise<RecordResult>;
    destroy(options?: Object, callback?: (err: Error, result: RecordResult) => void): Promise<RecordResult>;
    retrieve(options?: Object, callback?: (err: Error, record: Record<T>) => void): Promise<Record<T>>;
    update(record: Partial<T>, options?: Object, callback?: (err: Error, result: RecordResult) => void): Promise<RecordResult>;
}

export type Record<T> = {Id: SalesforceId } & T;
