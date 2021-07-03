// Type definitions for search-index 2.1
// Project: https://github.com/fergiemcdowall/search-index
// Definitions by: Travis Harrison <https://github.com/TravisYeah>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

interface SearchIndexOptions {
    db?: string;
    cacheLength?: number;
    caseSensitive?: boolean;
    name?: string;
    tokenAppend?: string;
    stopwords?: string[];
}

interface Page {
    NUMBER: number;
    SIZE: number;
}

type Type = 'NUMERIC' | 'ALPHABETIC';

type Direction = 'ASCENDING' | 'DESCENDING';

interface AND {
    AND: Token[];
}

interface NOT {
    INCLUDE: Token;
    EXCLUDE: Token;
}

interface OR {
    OR: Token[];
}

interface SEARCH {
    SEARCH: Token[];
}

type QueryVerb = AND | NOT | OR | SEARCH;

type Field = string | string[];

interface RangeValueObject {
    GTE: string | number;
    LTE: string | number;
}

interface FieldValueObject {
    FIELD: Field;
    VALUE: string | RangeValueObject;
}

interface FieldOnlyObject {
    FIELD: Field;
}

type Token = Field | FieldValueObject | FieldOnlyObject | QueryVerb;

interface Sort {
    TYPE: Type;
    DIRECTION: Direction;
    FIELD: string;
}

type Score = 'TFIDF' | 'SUM' | 'PRODUCT' | 'CONCAT';

interface QueryOptions {
    BUCKETS?: string[];
    DOCUMENTS?: boolean;
    FACETS?: any[];
    PAGE?: Page;
    SCORE?: Score;
    SORT?: Sort;
}

interface PutOptions {
    storeVectors: boolean;
    doNotIndexField: string[];
    storeRawDocs: boolean;
}

interface Document {
    _id: number;
    _doc: any;
}

interface QueryResultItemNoDoc {
    _id: string;
    _match: string[];
}

interface QueryResultItem {
    _id: string;
    _match: string[];
    _doc: any[];
}

interface QueryResult {
    RESULT: QueryResultItem[] | QueryResultItemNoDoc[];
    RESULT_LENGTH: number;
}

interface AllDocumentsResultItem {
    _id: number;
    _doc: any;
}

interface FieldValueIdObject extends FieldValueObject {
    _id: string[];
}

interface Operation {
    _id: string;
    operation: string;
    status: string;
}

interface FieldValue {
    FIELD: string;
    VALUE: string;
}

interface KeyValue {
    key: string;
    value: any;
}

interface SearchIndex {
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

declare function si(options?: SearchIndexOptions): Promise<SearchIndex>;

export = si;
