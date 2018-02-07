// http://jsforce.github.io/jsforce/doc/Query.html
import { Readable } from 'stream';

import { SalesforceId } from './salesforce-id';
import { RecordResult } from './record-result';

export interface ExecuteOptions {
    autoFetch?: boolean;
    maxFetch?: number;
    scanAll?: number;
}

export interface QueryResult<T> {
    done: boolean;
    nextRecordsUrl?: string;
    totalSize: number;
    records: T[];
}

export class Query<T> extends Readable implements Promise<T> {
    end(): Query<T>;
    filter(filter: Object): Query<T>;
    include(include: string): Query<T>;
    hint(hint: Object): Query<T>;
    limit(value: number): Query<T>;
    maxFetch(value: number): Query<T>;
    offset(value: number): Query<T>;
    skip(value: number): Query<T>;
    sort(keyOrList: string | Object[] | Object, direction?: "ASC" | "DESC" | number): Query<T>;
    run(options?: ExecuteOptions, callback?: (err: Error, records: T[]) => void): Query<T>;
    execute(options?: ExecuteOptions, callback?: (err: Error, records: T[]) => void): Query<T>;
    exec(options?: ExecuteOptions, callback?: (err: Error, records: T[]) => void): Query<T>;
    del(type?: string, callback?: (err: Error, ret: RecordResult) => void): any;
    del(callback?: (err: Error, ret: RecordResult) => void): any;
    delete(type?: string, callback?: (err: Error, ret: RecordResult) => void): any;
    delete(callback?: (err: Error, ret: RecordResult) => void): any;
    destroy(type?: string, callback?: (err: Error, ret: RecordResult) => void): Promise<RecordResult[]>;
    destroy(callback?: (err: Error, ret: RecordResult) => void): Promise<RecordResult[]>;
    destroy(error?: Error): void;
    explain(callback?: (err: Error, info: ExplainInfo) => void): Promise<ExplainInfo>;
    map(callback: (currentValue: Object) => void): Promise<any>;
    scanAll(value: boolean): Query<T>;
    select(fields: Object | string[] | string): Query<T>;
    thenCall(callback?: (err: Error, records: T) => void): Query<T>;
    toSOQL(callback: (err: Error, soql: string) => void): Promise<string>;
    update(mapping: any, type: string, callback: (err: Error, records: RecordResult[]) => void): Promise<RecordResult[]>;
    where(conditions: Object | string): Query<T>;

    // Implementing promise methods
    then<T, never>(onfulfilled?: any): Promise<T | never>;
    catch<never>(onrejected?: any): Promise<T>;
    [Symbol.toStringTag]: "Promise";
}

export class ExplainInfo { }
