import * as stream from 'stream';

import { SObjectCreateOptions } from './create-options';
import { DescribeSObjectResult } from './describe-result';
import { Query } from './query';
import { RecordResult } from './record-result';
import { Connection } from './connection';
import { SalesforceId } from './salesforce-id';

export class SObject {
    record(options: any, callback?: (err: Error, ret: any) => void): void;
    update(options: SObjectCreateOptions, callback?: (err: Error, ret: any) => void): void;
    retrieve(ids: string | string[], callback?: (err: Error, ret: any) => void): void;
    retrieve(ids: string | string[], options?: Object, callback?: (err: Error, ret: any) => void): void;
    upsert(records: Record | Record[], extIdField: SalesforceId, options?: Object, callback?: (err: Error, ret: RecordResult) => void): Promise<RecordResult | RecordResult[]>;
    upsertBulk(input?: Record[] | stream.Stream | string, callback?: (err: Error, ret: RecordResult) => void): Batch;
    describeGlobal(callback: (err: Error, res: any) => void): void;
    describe$(callback: (err: Error, ret: DescribeSObjectResult) => void): void;
    describeGlobal$(callback: (err: Error, res: any) => void): void;

    find<T>(query?: any, callback?: (err: Error, ret: T[]) => void): Query<T>;
    find<T>(query?: any, fields?: Object | string[] | string, callback?: (err: Error, ret: T[]) => void): Query<T>;
    find<T>(query?: any, fields?: Object | string[] | string, options?: Object, callback?: (err: Error, ret: T[]) => void): Query<T>;

    findOne<T>(query?: any, callback?: (err: Error, ret: T) => void): void;
    findOne<T>(query?: any, fields?: Object | string[] | string, callback?: (err: Error, ret: T) => void): void;
    findOne<T>(query?: any, fields?: Object | string[] | string, options?: Object, callback?: (err: Error, ret: T) => void): void;

    approvalLayouts(callback?: (layoutInfo: ApprovalLayoutInfo) => void): Promise<ApprovalLayoutInfo>;
    bulkload(operation: string, options?: { extIdField?: string }, input?: Record[] | stream.Stream[] | string[], callback?: (err: Error, ret: RecordResult) => void): Batch;
    compactLayouts(callback?: CompactLayoutInfo): Promise<CompactLayoutInfo>;
    count(conditions?: Object | string, callback?: (err: Error, num: number) => void): Promise<number>;
    create(options: any | any[], callback?: (err: Error, ret: RecordResult | RecordResult[]) => void): Promise<RecordResult | RecordResult[]>;
    createBulk(input?: Record[] | stream.Stream | string, callback?: (err: Error, ret: RecordResult) => void): Batch;
    del(ids: string | string[], callback?: (err: Error, ret: any) => void): void;
    destroy(ids: string | string[], callback?: (err: Error, ret: any) => void): void;
    delete(ids: string | string[], callback?: (err: Error, ret: any) => void): void;
    deleteBulk(input?: Record[] | stream.Stream | string, callback?: (err: Error, ret: RecordResult) => void): Batch;
    destroyBulk(input?: Record[] | stream.Stream | string, callback?: (err: Error, ret: RecordResult) => void): Batch;
    destroyHardBulk(input?: Record[] | stream.Stream | string, callback?: (err: Error, ret: RecordResult) => void): Batch;
    deleted(start: Date | string, end: Date | string, callback?: (info: DeletedRecordsInfo) => void): Promise<DeletedRecordsInfo>;
    deleteHardBulk(input?: Record[] | stream.Stream | string, callback?: (err: Error, ret: RecordResult) => void): Batch;
    describe(callback?: (err: Error, ret: DescribeSObjectResult) => void): Promise<DescribeSObjectResult>;
    insert(options: any | any[], callback?: (err: Error, ret: RecordResult | RecordResult[]) => void): Promise<RecordResult | RecordResult[]>;
    insertBulk(input?: Record[] | stream.Stream | string, callback?: (err: Error, ret: RecordResult) => void): Batch;
    layouts(layoutName?: string, callback?: (err: Error, info: LayoutInfo) => void): Promise<LayoutInfo>;
    listview(id: string): ListView;
    listviews(callback?: (err: Error, info: ListViewsInfo) => void): Promise<ListViewsInfo>;
    quickAction(actionName: string): QuickAction;
    quickActions(callback?: (err: Error, info: any) => void): Promise<any>;
    recent(callback?: (err: Error, ret: RecordResult) => void): Promise<RecordResult>;
    select<T>(field?: Object | string[] | string, callback?: (err: Error, ret: T[]) => void): Query<T[]>;
}

export interface ApprovalLayoutInfo {
    approvalLayouts: Object[];
}

export class Record extends Object {
    constructor(connection: Connection, type: SObject, id: SalesforceId)
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
    constructor(connection: Connection, type: SObject, id: SalesforceId)
}

export class ListViewsInfo { }
export class QuickAction { }
