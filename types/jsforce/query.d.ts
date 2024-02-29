// http://jsforce.github.io/jsforce/doc/Query.html
import { Readable } from "stream";
import { RecordResult } from "./record-result";

export interface ExecuteOptions {
    autoFetch?: boolean | undefined;
    maxFetch?: number | undefined;
    headers?: object | undefined;
    scanAll?: boolean | undefined;
}

export interface QueryResult<T> {
    done: boolean;
    nextRecordsUrl?: string | undefined;
    totalSize: number;
    records: T[];
}

// Unfortunately because TypeScript wants you to believe JS has classical inheritance,
// you can't say that Query "extends Readable" because `filter` and `map` disagree with Readable's own.
// That can only be fixed by a breaking change in Query's filter and map methods. Your call.
export class Query<T> extends Readable implements Promise<T> {
    end(): Query<T>;

    // @ts-ignore conflicts with built-in Readable.filter
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
    destroy(error?: Error): this;

    explain(callback?: (err: Error, info: ExplainInfo) => void): Promise<ExplainInfo>;

    // @ts-ignore conflicts with built-in Readable.map
    map(callback: (currentValue: Object) => void): Promise<any>;

    scanAll(value: boolean): Query<T>;

    select(fields: Object | string[] | string): Query<T>;

    thenCall(callback?: (err: Error, records: T) => void): Query<T>;

    toSOQL(callback: (err: Error, soql: string) => void): Promise<string>;

    update(
        mapping: any,
        type: string,
        callback?: (err: Error, records: RecordResult[]) => void,
    ): Promise<RecordResult[]>;
    update(mapping: any, callback?: (err: Error, records: RecordResult[]) => void): Promise<RecordResult[]>;

    where(conditions: Object | string): Query<T>;

    finally(): Promise<T>;

    [Symbol.toStringTag]: "Promise";

    catch<TResult>(onrejected?: (reason: any) => PromiseLike<TResult> | TResult): Promise<T | TResult>;

    then<TResult1, TResult2>(
        onfulfilled?: (value: T) => PromiseLike<TResult1> | TResult1,
        onrejected?: (reason: any) => PromiseLike<TResult2> | TResult2,
    ): Promise<TResult1 | TResult2>;
}

export class ExplainInfo {}
