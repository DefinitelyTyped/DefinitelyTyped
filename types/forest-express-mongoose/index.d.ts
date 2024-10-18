import { Application, NextFunction, Request, RequestHandler, Response } from "express";
import * as mongoose from "mongoose";

// Everything related to Forest initialization

export interface LianaOptions {
    objectMapping: mongoose.Mongoose;
    envSecret: string;
    authSecret: string;
    connections: {
        [connectionName: string]: mongoose.Connection;
    };
    includedModels?: string[] | undefined;
    excludedModels?: string[] | undefined;
    configDir?: string | undefined;
}

export function init(options: LianaOptions): Promise<Application>;

// Everything related to Forest Authentication

export function ensureAuthenticated(request: Request, response: Response, next: NextFunction): void;

// Everything related to Forest constants

export const PUBLIC_ROUTES: string[];

// Everything related to record manipulation

export class AbstractRecordTool {
    constructor(model: object);
    serialize(records: object[]): Promise<StatSerialized>;
}

export class RecordGetter extends AbstractRecordTool {
    get(recordId: string): Promise<object>;
}

export class RecordsGetter extends AbstractRecordTool {
    getAll(params: Params): Promise<object[]>;
    getIdsFromRequest(request: Request): Promise<string[]>;
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

export class RecordSerializer extends AbstractRecordTool {}

// Everyting related to Forest permissions

export class PermissionMiddlewareCreator {
    constructor(collectionName: string);
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
        type: string;
        id: string;
        attributes: {
            value: any[];
        };
    };
}

export class StatSerializer {
    constructor(stats: { value: any[] });
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
    AND = "and",
    OR = "or",
}

export interface AggregatedFilters {
    aggregator: Aggregator;
    conditions: Filter[];
}

export interface Params {
    timezone: string;
    search: string;
    fields: { [key: string]: string };
    sort: string;
    filters: Filter | AggregatedFilters;
    page: Page;
    searchExtended: string;
}

// Everything related to Forest collection configuration

export interface SmartFieldValueGetter {
    (record: any): any;
}

export interface SmartFieldValueSetter {
    (record: any, attributeValue: any): object;
}

export interface SmartFieldSearcher {
    (query: any, search: string): object;
}

export interface SmartActionValuesInjector {
    (record: any): object;
}

export interface SegmentAggregationCreator {
    (record: any): object;
}

export interface SmartFieldOptions {
    field: string;
    description?: string | undefined;
    type: string | string[];
    isReadOnly?: boolean | undefined;
    reference?: string | undefined;
    enums?: string[] | undefined;
    defaultValue?: any;
    get?: SmartFieldValueGetter | undefined;
    set?: SmartFieldValueSetter | undefined;
    search?: SmartFieldSearcher | undefined;
}

export interface SmartActionOptions {
    name: string;
    type?: string | undefined;
    fields?:
        | Array<{
            field: string;
            type: string | string[];
            reference?: string | undefined;
            enums?: string[] | undefined;
            description?: string | undefined;
            isRequired?: boolean | undefined;
        }>
        | undefined;
    download?: boolean | undefined;
    endpoint?: string | undefined;
    httpMethod?: string | undefined;
    values?: SmartActionValuesInjector | undefined;
}

export interface SmartSegmentOptions {
    name: string;
    where: SegmentAggregationCreator;
}

export interface CollectionOptions {
    fields?: SmartFieldOptions[] | undefined;
    actions?: SmartActionOptions[] | undefined;
    segments?: SmartSegmentOptions[] | undefined;
}

export function collection(name: string, options: CollectionOptions): void;
