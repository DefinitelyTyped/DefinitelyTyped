// Type definitions for airtable 0.5
// Project: https://github.com/airtable/airtable.js
// Definitions by: Brandon Valosek <https://github.com/bvalosek>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

export default class Airtable {
    base(appId: string): Base;
}

export interface Base {
    (tableName: string): Table<{}>;
}

export interface FieldSet {
    [ key: string ]: undefined | string | ReadonlyArray<Attachment>;
}

export interface Table<TFields extends FieldSet> {
    select(opt?: SelectOptions): Query<TFields>;
}

export interface SelectOptions {
    view?: string;
}

export interface Query<TFields extends object> {
    all(): Promise<Response<TFields>>;
    firstPage(): Promise<Response<TFields>>;
}

export type Response<TFields> = ReadonlyArray<Row<TFields>>;

export interface Row<TFields> {
    id: string;
    fields: TFields;
}

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
