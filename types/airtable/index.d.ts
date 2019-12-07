// Type definitions for airtable 0.5
// Project: https://github.com/airtable/airtable.js
// Definitions by: Brandon Valosek <https://github.com/bvalosek>
//                 Max Chehab <https://github.com/maxchehab>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

export class Airtable {
    constructor(options?: Airtable.AirtableOptions);
    base(appId: string): Airtable.Base;
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

export interface AirtableOptions {
    apiKey?: string;
    endpointUrl?: string;
    apiVersion?: string;
    allowUnauthorizedSsl?: boolean;
    noRetryIfRateLimited?: boolean;
    requestTimeout?: number;
}

export interface Base {
    (tableName: string): Table<{}>;
}

export interface Table<TFields extends FieldSet> {
    select(opt?: SelectOptions): Query<TFields>;
    find(id: string): Promise<Record<TFields>>;
    create(record: TFields, opts?: { typecast: boolean }): Promise<Record<TFields>>;
    create(records: TFields[], opts?: { typecast: boolean }): Promise<Records<TFields>>;
    update(...args: any[]): Promise<any>;
    replace(...args: any[]): Promise<any>;
    destroy(...args: any[]): Promise<any>;
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

export interface Query<TFields extends object> {
    all(): Promise<Records<TFields>>;
    firstPage(): Promise<Records<TFields>>;
    eachPage(pageCallback: (records: Records<TFields>, next: () => void) => void): Promise<void>;
}

export interface Record<TFields> {
    id: string;
    fields: TFields;
}

export type Records<TFields> = ReadonlyArray<Record<TFields>>;

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
