import * as stream from 'stream';

import { SObjectCreateOptions } from './create-options';
import { DescribeSObjectResult } from './describe-result';
import { Query } from './query';
import { Record, RecordReference } from './record';
import { RecordResult } from './record-result';
import { Connection } from './connection';
import { SalesforceId } from './salesforce-id';

export class SObject<T> {
    record(id: SalesforceId): RecordReference<T>;
    retrieve(id: SalesforceId, options?: Object, callback?: (err: Error, record: Record<T>) => void): Promise<Record<T>>;
    retrieve(ids: SalesforceId[], options?: Object, callback?: (err: Error, ret: Array<Record<T>>) => void): Promise<Array<Record<T>>>;
    update(record: Partial<T>, options?: Object, callback?: (err: Error, ret: RecordResult) => void): Promise<RecordResult>;
    update(records: Array<Partial<T>>, options?: Object, callback?: (err: Error, ret: RecordResult[]) => void): Promise<RecordResult[]>;
    upsert(records: Record<T>, extIdField: SalesforceId, options?: Object, callback?: (err: Error, ret: RecordResult) => void): Promise<RecordResult>;
    upsert(records: Array<Record<T>>, extIdField: SalesforceId, options?: Object, callback?: (err: Error, ret: RecordResult[]) => void): Promise<RecordResult[]>;
    upsertBulk(input?: Array<Record<T>> | stream.Stream | string, callback?: (err: Error, ret: RecordResult[] | BatchResultInfo[]) => void): Batch;
    describeGlobal(callback: (err: Error, res: any) => void): void;
    describe$(callback: (err: Error, ret: DescribeSObjectResult) => void): void;
    describeGlobal$(callback: (err: Error, res: any) => void): void;

    find<T>(query?: any, callback?: (err: Error, ret: T[]) => void): Query<T>;
    find<T>(query?: any, fields?: Object | string[] | string, callback?: (err: Error, ret: T[]) => void): Query<T>;
    find<T>(query?: any, fields?: Object | string[] | string, options?: Object, callback?: (err: Error, ret: T[]) => void): Query<T>;

    findOne<T>(query?: any, callback?: (err: Error, ret: T) => void): Query<T>;
    findOne<T>(query?: any, fields?: Object | string[] | string, callback?: (err: Error, ret: T) => void): Query<T>;
    findOne<T>(query?: any, fields?: Object | string[] | string, options?: Object, callback?: (err: Error, ret: T) => void): Query<T>;

    approvalLayouts(callback?: (layoutInfo: ApprovalLayoutInfo) => void): Promise<ApprovalLayoutInfo>;
    bulkload(operation: string, options?: { extIdField?: string }, input?: Array<Record<T>> | stream.Stream[] | string[], callback?: (err: Error, ret: RecordResult) => void): Batch;
    compactLayouts(callback?: CompactLayoutInfo): Promise<CompactLayoutInfo>;
    count(conditions?: Object | string, callback?: (err: Error, num: number) => void): Promise<number>;
    create(options: any | any[], callback?: (err: Error, ret: RecordResult | RecordResult[]) => void): Promise<RecordResult | RecordResult[]>;
    createBulk(input?: Array<Record<T>> | stream.Stream | string, callback?: (err: Error, ret: RecordResult) => void): Batch;
    del(ids: string | string[], callback?: (err: Error, ret: any) => void): void;
    destroy(ids: string | string[], callback?: (err: Error, ret: any) => void): void;
    delete(ids: string | string[], callback?: (err: Error, ret: any) => void): void;
    deleteBulk(input?: Array<Record<T>> | stream.Stream | string, callback?: (err: Error, ret: RecordResult) => void): Batch;
    destroyBulk(input?: Array<Record<T>> | stream.Stream | string, callback?: (err: Error, ret: RecordResult) => void): Batch;
    destroyHardBulk(input?: Array<Record<T>> | stream.Stream | string, callback?: (err: Error, ret: RecordResult) => void): Batch;
    deleted(start: Date | string, end: Date | string, callback?: (info: DeletedRecordsInfo) => void): Promise<DeletedRecordsInfo>;
    deleteHardBulk(input?: Array<Record<T>> | stream.Stream | string, callback?: (err: Error, ret: RecordResult) => void): Batch;
    describe(callback?: (err: Error, ret: DescribeSObjectResult) => void): Promise<DescribeSObjectResult>;
    insert(options: any | any[], callback?: (err: Error, ret: RecordResult | RecordResult[]) => void): Promise<RecordResult | RecordResult[]>;
    insertBulk(input?: Array<Record<T>> | stream.Stream | string, callback?: (err: Error, ret: RecordResult) => void): Batch;
    layouts(layoutName?: string, callback?: (err: Error, info: LayoutInfo) => void): Promise<LayoutInfo>;
    listview(id: string): ListView;
    listviews(callback?: (err: Error, info: ListViewsInfo) => void): Promise<ListViewsInfo>;
    quickAction(actionName: string): QuickAction;
    quickActions(callback?: (err: Error, info: any) => void): Promise<any>;
    recent(callback?: (err: Error, ret: RecordResult) => void): Promise<RecordResult>;
    select(callback?: (err: Error, ret: T[]) => void): Query<T[]>;
    // TODO:use a typed pluck to turn `fields` into a subset of T's fields so that the output is slimmed down appropriately
    select(fields?: {[P in keyof T]: boolean}  | Array<(keyof T)> | (keyof T), callback?: (err: Error, ret: Array<Partial<T>>) => void): Query<Array<Partial<T>>>;
}

export interface ApprovalLayoutInfo {
    approvalLayouts: Object[];
}

export class Batch extends stream.Writable {
}

export interface CompactLayoutInfo {
    compactLayouts: Object[];
    defaultCompactLayoutId: string;
    recordTypeCompactLayoutMappings: Object[];
}

export interface DeletedRecordsInfo {
    earliestDateAvailable: string;
    latestDateCovered: string;
    deletedRecords: {
        id: string,
        deletedDate: string,
    };
}

export interface LayoutInfo {
    layouts: Object[];
    recordTypeMappings: Object[];
}

export class ListView {
    constructor(connection: Connection, type: string, id: SalesforceId)
}

export interface BatchInfo {
    id: string;
    jobId: string;
    state: string;
    stateMessage: string;
}

export interface BatchResultInfo {
    id: string;
    batchId: string;
    jobId: string;
}

export class ListViewsInfo { }
export class QuickAction { }
