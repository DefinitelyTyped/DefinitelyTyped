import { SalesforceId } from './salesforce-id';
import { RecordResult } from './record-result';

export interface ExecuteOptions {
    autoFetch?: boolean;
    maxFetch?: number;
    scanAll?: number;
}

export class Query<T> {
    filter(filter: Object): Query<T>;
    hint(hint: Object): Query<T>;
    limit(value: number): Query<T>;
    maxFetch(value: number): Query<T>;
    offset(value: number): Query<T>;
    skip(value: number): Query<T>;
    sort(keyOrList: string | Object[] | Object, direction?: "ASC" | "DESC" | number): Query<T>;
    run(options?: ExecuteOptions, callback?: (err: Error, records: T[]) => void): Query<T>;
    execute(options?: ExecuteOptions, callback?: (err: Error, records: T[]) => void): Query<T>;
    exec(options?: ExecuteOptions, callback?: (err: Error, records: T[]) => void): Query<T>;
    del(callback?: (err: Error, ret: RecordResult) => void): any;
    delete(callback?: (err: Error, ret: RecordResult) => void): any;
    destroy(callback?: (err: Error, ret: RecordResult) => void): Promise<RecordResult[]>;
    explain(callback?: (err: Error, info: ExplainInfo) => void): Promise<ExplainInfo>;
    scanAll(value: boolean): Query<T>;
    select(fields: Object | string[] | string): Query<T>;
    then(onSuccess?: Function, onRejected?: Function): Promise<any>;
    thenCall(callback?: (err: Error, records: T) => void): Query<T>;
    toSOQL(callback: (err: Error, soql: string) => void): Promise<string>;
    update(mapping: any, type: string, callback: (err: Error, records: RecordResult[]) => void): Promise<RecordResult[]>;
    where(conditions: Object | string): Query<T>;
}

export class ExplainInfo { }
