// Type definitions for airtable 0.8
// Project: https://github.com/airtable/airtable.js
// Definitions by: Brandon Valosek <https://github.com/bvalosek>
//                 Max Chehab <https://github.com/maxchehab>
//                 Sam Garson <https://github.com/samtgarson>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.7

export type baseCreateFunctor = (tableName: string) => Table;

export default class Airtable {
    constructor(options?: AirtableOptions);
    base(appId: string): baseCreateFunctor;
    static base(appId: string): baseCreateFunctor;
    static configure(options: AirtableOptions): void;
}

export class Error {
    constructor(error: Error | string, message: string, statusCode: number | string);
    toString(): string;
}

export interface FieldSet {
    [key: string]:
        | undefined
        | string
        | number
        | boolean
        | Collaborator
        | ReadonlyArray<Collaborator>
        | ReadonlyArray<string>
        | ReadonlyArray<Attachment>;
}

export interface NewFieldData<TFields> {
    fields: Partial<TFields>;
}

export interface ExistingFieldData<TFields> extends NewFieldData<TFields> {
    id: string;
}

export interface AirtableOptions {
    apiKey?: string;
    endpointUrl?: string;
    apiVersion?: string;
    allowUnauthorizedSsl?: boolean;
    noRetryIfRateLimited?: boolean;
    requestTimeout?: number;
}

export class Base {
    constructor(airtable: Airtable, baseId: string);
    table(tableName: string): Table;
    getId(): string;
}

export class Table<TFields extends FieldSet = FieldSet> {
    constructor(base: Base, tableId: string, tableName: string);
    select(opt?: SelectOptions): Query<TFields>;
    find(id: string): Promise<Record<TFields>>;
    create(record: NewFieldData<TFields>, opts?: { typecast: boolean }): Promise<Record<TFields>>;
    create(records: Array<NewFieldData<TFields>>, opts?: { typecast: boolean }): Promise<Records<TFields>>;
    update(recordData: Array<ExistingFieldData<TFields>>, opts?: object): Promise<Records<TFields>>;
    update(recordId: string, recordData: NewFieldData<TFields>, opts?: object): Promise<Record<TFields>>;
    replace(recordData: Array<ExistingFieldData<TFields>>, opts?: object): Promise<Records<TFields>>;
    replace(recordId: string, recordData: NewFieldData<TFields>, opts?: object): Promise<Record<TFields>>;
    destroy(recordId: string): Promise<Record<TFields>>;
    destroy(recordIds: string[]): Promise<Records<TFields>>;
}

export interface SortParameter {
    field: string;
    direction?: 'asc' | 'desc';
}

export interface SelectOptions {
    fields?: string[];
    filterByFormula?: string;
    maxRecords?: number;
    pageSize?: number;
    sort?: SortParameter[];
    view?: string;
    cellFormat?: 'json' | 'string';
    timeZone?: string;
    userLocale?: string;
}

export interface Query<TFields extends FieldSet> {
    all(): Promise<Records<TFields>>;
    firstPage(): Promise<Records<TFields>>;
    eachPage(pageCallback: (records: Records<TFields>, fetchNextPage: () => void) => void): Promise<void>;
}

export class Record<TFields extends FieldSet> {
    constructor(table: Table<TFields>, recordId: string, recordJson: TFields);
    id: string;
    fields: TFields;
    get<K extends keyof TFields>(columnName: K): TFields[K];
    set<K extends keyof TFields>(columnName: K, columnValue: TFields[K]): void;
    save(): Promise<this>;
    patchUpdate(cellValuesByName: Partial<TFields>): Promise<this>;
    putUpdate(cellValuesByName: Partial<TFields>): Promise<this>;
}

export type Records<TFields extends FieldSet> = ReadonlyArray<Record<TFields>>;

export interface Attachment {
    id: string;
    url: string;
    filename: string;
    size: number;
    type: string;
    thumbnails?: {
        small: Thumbnail;
        large: Thumbnail;
        full: Thumbnail;
    };
}

export interface Thumbnail {
    url: string;
    width: number;
    height: number;
}

export interface Collaborator {
    id: string;
    email: string;
    name: string;
}
