// Type definitions for forest-express-mongoose 6.3
// Project: http://www.forestadmin.com
// Definitions by: Steve Bunlon <https://github.com/SteveBunlon>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { RequestHandler, Response } from "express";

// Everything related to Forest constants

export const PUBLIC_ROUTES: string[];

// Everything related to record manipulation

export class AbstractRecordTool {
    constructor(model: object)
    serialize(records: object[]): StatSerialized;
}

export class RecordGetter extends AbstractRecordTool {
    get(recordId: string): Promise<object>;
}

export class RecordsGetter extends AbstractRecordTool {
    getAll(params: Params): Promise<object[]>;
    getIdsFromRequest(params: Params): Promise<string[]>;
}

export class RecordsCounter extends AbstractRecordTool {
    count(params: Params): Promise<number>;
}

export class RecordsExporter extends AbstractRecordTool {
    streamExport(response: Response, params: Params): Promise<void>;
}

export class RecordUpdater extends AbstractRecordTool {
    deserialize(body: object): Promise<object>;
    update(record: object, recordId: string): Promise<object>;
}

export class RecordCreator extends AbstractRecordTool {
    deserialize(body: object): Promise<object>;
    create(record: object): Promise<object>;
}

export class RecordRemover extends AbstractRecordTool {
    remove(recordId: string): Promise<void>;
}

export class RecordsRemover extends AbstractRecordTool {
    remove(recordIds: string[]): Promise<void>;
}

export class RecordSerializer extends AbstractRecordTool { }

// Everyting related to Forest permissions

export class PermissionMiddlewareCreator {
    constructor(collectionName: string)
    list(): RequestHandler;
    export(): RequestHandler;
    details(): RequestHandler;
    create(): RequestHandler;
    update(): RequestHandler;
    delete(): RequestHandler;
    smartAction(): RequestHandler;
}

// Everything related to Forest Charts

export interface StatSerialized {
    data: {
        type: string,
        id: string,
        attributes: {
            value: any[]
        }
    };
}

export class StatSerializer {
    constructor(stats: { value: any[] })
    perform(): StatSerialized;
}

// Everything related to Forest request params

export interface Page {
    number: string;
    size: string;
}

export interface Filter {
    field: string;
    operator: string;
    value: string;
}

export enum Aggregator {
    AND = 'and',
    OR = 'or'
}

export interface AggregatedFilters {
    aggregator: Aggregator;
    conditions: Filter[];
}

export interface Params {
    timezone: string;
    search: string;
    fields: {[key: string]: string};
    sort: string;
    filters: Filter|AggregatedFilters;
    page: Page;
    searchExtended: string;
}
