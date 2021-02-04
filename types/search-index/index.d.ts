// Type definitions for search-index 2.1
// Project: https://github.com/fergiemcdowall/search-index
// Definitions by: Travis Harrison <https://github.com/TravisYeah>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

export interface SearchIndexOptions {
    db?: string;
    cacheLength?: number;
    caseSensitive?: boolean;
    name?: string;
    tokenAppend?: string;
    stopwords?: string[];
}

export interface Page {
    NUMBER: number;
    SIZE: number;
}

export type Type = 'NUMERIC' | 'ALPHABETIC';

export type Direction = 'ASCENDING' | 'DESCENDING';

export interface AND {
    AND: Token[];
}

export interface NOT {
    INCLUDE: Token;
    EXCLUDE: Token;
}

export interface OR {
    OR: Token[];
}

export interface SEARCH {
    SEARCH: Token[];
}

export type QueryVerb = AND | NOT | OR | SEARCH;

export type Field = string | string[];

export interface RangeValueObject {
    GTE: string | number;
    LTE: string | number;
}

export interface FieldValueObject {
    FIELD: Field;
    VALUE: string | RangeValueObject;
}

export interface FieldOnlyObject {
    FIELD: Field;
}

export type Token = Field | FieldValueObject | FieldOnlyObject | QueryVerb;

export interface Sort {
    TYPE: Type;
    DIRECTION: Direction;
    FIELD: string;
}

export type Score = 'TFIDF' | 'SUM' | 'PRODUCT' | 'CONCAT';

export interface QueryOptions {
    BUCKETS?: string[];
    DOCUMENTS?: boolean;
    FACETS?: any[];
    PAGE?: Page;
    SCORE?: Score;
    SORT?: Sort;
}

export interface PutOptions {
    storeVectors: boolean;
    doNotIndexField: string[];
    storeRawDocs: boolean;
}

export interface Document {
    _id: number;
    _doc: any;
}

export interface QueryResultItemNoDoc {
    _id: string;
    _match: string[];
}

export interface QueryResultItem {
    _id: string;
    _match: string[];
    _doc: any[];
}

export interface QueryResult {
    RESULT: QueryResultItem[] | QueryResultItemNoDoc[];
    RESULT_LENGTH: number;
}

export interface AllDocumentsResultItem {
    _id: number;
    _doc: any;
}

export interface FieldValueIdObject extends FieldValueObject {
    _id: string[];
}

export interface Operation {
    _id: string;
    operation: string;
    status: string;
}

export interface FieldValue {
    FIELD: string;
    VALUE: string;
}

export interface KeyValue {
    key: string;
    value: any;
}

export interface SearchIndex {
    INDEX: any;
    QUERY(query?: Token, options?: QueryOptions): Promise<QueryResult>;
    ALL_DOCUMENTS(limit?: number): Promise<AllDocumentsResultItem[]>;
    BUCKETS(tokens?: Token): Promise<FieldValueIdObject[]>;
    DELETE(docIds: ReadonlyArray<string>): Promise<Operation[]>;
    CREATED(): Promise<number>;
    DICTIONARY(token?: Token): Promise<string[]>;
    DOCUMENTS(docIds?: ReadonlyArray<string>): Promise<any[]>;
    DISTINCT(token?: Token): Promise<FieldValue[]>;
    DOCUMENT_COUNT(): Promise<number>;
    EXPORT(): Promise<KeyValue[]>;
    FACETS(token?: Token): Promise<FieldValueIdObject[]>;
    FIELDS(): Promise<string[]>;
    IMPORT(index: ReadonlyArray<KeyValue>): Promise<void>;
    MIN(token?: Token): Promise<string>;
    MAX(token?: Token): Promise<string>;
    PUT(documents: ReadonlyArray<any>, options?: PutOptions): Promise<Operation[]>;
    PUT_RAW(documents: ReadonlyArray<any>): Promise<Operation[]>;
}

export default function si(options?: SearchIndexOptions): Promise<SearchIndex>;
