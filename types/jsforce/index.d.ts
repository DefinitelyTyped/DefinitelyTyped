// Type definitions for archiver 1.8
// Project: https://github.com/jsforce/jsforce
// Definitions by: Dolan Miu <https://github.com/dolanmiu>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import * as fs from 'fs';
import * as stream from 'stream';
import * as express from 'express';
import * as glob from 'glob';

declare namespace jsforce {
    type ConnectionEvent = "refresh";
    class Connection {
        constructor(params: ConnectionOptions)

        sobject(resource: string): SObject;
        on(eventName: ConnectionEvent, callback: Function): void;
    }

    class SObject {
        record(options: any, callback?: (err: Error, ret: any) => void): void;
        update(options: SObjectCreateOptions, callback?: (err: Error, ret: any) => void): void;
        retrieve(ids: string | string[], callback?: (err: Error, ret: any) => void): void;
        retrieve(ids: string | string[], options?: Object, callback?: (err: Error, ret: any) => void): void;
        // upsert(options: SObjectOptions): void;
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
        createBulk(input?: Record[] | stream.Stream | String, callback?: (err: Error, ret: RecordResult) => void): Batch;
        del(ids: string | string[], callback?: (err: Error, ret: any) => void): void;
        destroy(ids: string | string[], callback?: (err: Error, ret: any) => void): void;
        delete(ids: string | string[], callback?: (err: Error, ret: any) => void): void;
        deleteBulk(input?: Record[] | stream.Stream | String, callback?: (err: Error, ret: RecordResult) => void): Batch;
        destroyBulk(input?: Record[] | stream.Stream | String, callback?: (err: Error, ret: RecordResult) => void): Batch;
        destroyHardBulk(input?: Record[] | stream.Stream | String, callback?: (err: Error, ret: RecordResult) => void): Batch;
        deleted(start: Date | string, end: Date | string, callback?: (info: DeletedRecordsInfo) => void): Promise<DeletedRecordsInfo>;
        deleteHardBulk(input?: Record[] | stream.Stream | String, callback?: (err: Error, ret: RecordResult) => void): Batch;
        describe(callback?: (err: Error, ret: DescribeSObjectResult) => void): Promise<DescribeSObjectResult>;
        insert(options: any | any[], callback?: (err: Error, ret: RecordResult | RecordResult[]) => void): Promise<RecordResult | RecordResult[]>;
        insertBulk(input?: Record[] | stream.Stream | String, callback?: (err: Error, ret: RecordResult) => void): Batch;
        layouts(layoutName?: string, callback?: (err: Error, info: LayoutInfo) => void): Promise<LayoutInfo>;
        listview(id: string): ListView;
        listviews(callback?: (err: Error, info: ListViewsInfo) => void): Promise<ListViewsInfo>;
        quickAction(actionName: string): QuickAction;
        quickActions(callback?: (err: Error, info: any) => void): Promise<any>;
        recent(callback?: (err: Error, ret: RecordResult) => void): Promise<RecordResult>;
        select<T>(field?: Object | string[] | string, callback?: (err: Error, ret: T[]) => void): Query<T[]>;
    }

    interface ConnectionOptions {
        instanceUrl?: string;
        accessToken?: string;
        refreshToken?: string;
        oauth2?: {
            clientId: string,
            clientSecret: string,
            redirectUri?: string,
        };
        sessionId?: string;
        serverUrl?: string;
        redirectUri?: string;
    }

    interface SObjectOptions {
        Id?: SalesforceId;
        Name?: string;
        ExtId__c?: string;
    }

    class SalesforceId extends String {
    }

    interface SObjectCreateOptions extends SObjectOptions {
        IsDeleted?: boolean,
        MasterRecordId?: SalesforceId,
        Name?: string,
        Type?: string,
        ParentId?: SalesforceId,
        BillingStreet?: string,
        BillingCity?: string,
        BillingState?: string,
        BillingPostalCode?: string,
        BillingCountry?: string,
        BillingLatitude?: number,
        BillingLongitude?: number,
        ShippingStreet?: string,
        ShippingCity?: string,
        ShippingState?: string,
        ShippingPostalCode?: string,
        ShippingCountry?: string,
        ShippingLatitude?: number,
        ShippingLongitude?: number,
        Phone?: string,
        Website?: string,
        Industry?: string,
        NumberOfEmployees?: number,
        Description?: string,
        OwnerId?: SalesforceId,
        CreatedDate?: Date,
        CreatedById?: SalesforceId,
        LastModifiedDate?: Date,
        LastModifiedById?: SalesforceId,
        SystemModstamp?: Date,
        LastActivityDate?: Date,
        LastViewedDate?: Date,
        LastReferencedDate?: Date,
        Jigsaw?: string;
        JigsawCompanyId?: string;
        AccountSource?: string;
        SicDesc?: string;
    }

    interface DescribeSObjectResult {
        label: string;
        fields: string[];
    }

    enum Date {
        YESTERDAY
    }

    class Query<T> {
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

    interface ExecuteOptions {
        autoFetch?: boolean;
        maxFetch?: number;
        scanAll?: number;
    }

    interface RecordResult { id: SalesforceId, success: boolean, anys: Object[] }

    interface ExplainInfo { }
    interface ApprovalLayoutInfo { }
    interface Record { }
    interface Batch { }
    interface CompactLayoutInfo { }
    interface DeletedRecordsInfo { }
    interface LayoutInfo { }
    interface ListView { }
    interface ListViewsInfo { }
    interface QuickAction { }
}

export = jsforce;
