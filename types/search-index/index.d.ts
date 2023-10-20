import { AbstractLevelDOWNConstructor } from "abstract-leveldown";

interface SearchIndexOptions {
    db?: AbstractLevelDOWNConstructor;
    cacheLength?: number | undefined;
    caseSensitive?: boolean | undefined;
    name?: string | undefined;
    tokenAppend?: string | undefined;
    stopwords?: string[] | undefined;
}

interface Page {
    NUMBER: number;
    SIZE: number;
}

type Type = "NUMERIC" | "ALPHABETIC";

type Direction = "ASCENDING" | "DESCENDING";

interface AND {
    AND: Token[];
}

interface NOT {
    NOT: {
        INCLUDE: Token;
        EXCLUDE: Token;
    };
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

type Score = "TFIDF" | "SUM" | "PRODUCT" | "CONCAT";

type AlterToken = (token: Token) => Promise<Token>;

interface Weight {
    FIELD: string;
    VALUE: string;
    WEIGHT: number;
}

interface QueryOptions {
    BUCKETS?: string[];
    DOCUMENTS?: boolean;
    FACETS?: Token[];
    PAGE?: Page;
    PIPELINE?: AlterToken;
    SCORE?: Score;
    SORT?: Sort;
    WEIGHT?: Weight[];
}

interface NGram {
    lengths: number[];
    join: string;
    fields?: string[];
}

type ReplaceValues = {
    [key in string]: string[];
};

interface Replace {
    fields: string[];
    values: ReplaceValues;
}

type TokenizerArgs = [tokens: string, field: string, ops: PutOptions];
type SplitTokenizerArgs = [tokens: string[], field: string, ops: PutOptions];
type Tokenizer = (...args: TokenizerArgs) => Promise<string[]>;
type SplitTokenizerStage = (args: TokenizerArgs) => Promise<SplitTokenizerArgs>;
type TokenizerStage = (args: SplitTokenizerArgs) => Promise<SplitTokenizerArgs>;

interface PutOptions {
    caseSensitive?: boolean;
    ngrams?: NGram;
    replace?: Replace;
    skipField?: string[];
    stopwords?: string[];
    storeRawDocs?: boolean;
    storeVectors?: boolean;
    tokenizer?: Tokenizer;
    tokenSplitRegex?: RegExp;
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

interface TokenizationPipelineStages {
    SPLIT: SplitTokenizerStage;
    SKIP: TokenizerStage;
    LOWCASE: TokenizerStage;
    REPLACE: TokenizerStage;
    NGRAMS: TokenizerStage;
    STOPWORDS: TokenizerStage;
    SCORE_TERM_FREQUENCY: TokenizerStage;
}

interface SearchIndex {
    INDEX: any;
    QUERY(query: Token, options?: QueryOptions): Promise<QueryResult>;
    SEARCH(token: Token): Promise<QueryResult>;
    ALL_DOCUMENTS(limit?: number): Promise<AllDocumentsResultItem[]>;
    BUCKETS(...tokens: ReadonlyArray<Token>): Promise<FieldValueIdObject[]>;
    DELETE(...docIds: ReadonlyArray<string>): Promise<Operation[]>;
    CREATED(): Promise<number>;
    DICTIONARY(token?: Token): Promise<string[]>;
    DOCUMENTS(...docIds: ReadonlyArray<string>): Promise<any[]>;
    DISTINCT(token?: Token): Promise<FieldValue[]>;
    DOCUMENT_COUNT(): Promise<number>;
    EXPORT(): Promise<KeyValue[]>;
    FACETS(token?: Token): Promise<FieldValueIdObject[]>;
    FIELDS(): Promise<string[]>;
    FLUSH(): Promise<void>;
    IMPORT(index: ReadonlyArray<KeyValue>): Promise<void>;
    MIN(token?: Token): Promise<string>;
    MAX(token?: Token): Promise<string>;
    PUT(documents: ReadonlyArray<any>, options?: PutOptions): Promise<Operation[]>;
    PUT_RAW(documents: ReadonlyArray<any>): Promise<Operation[]>;
    TOKENIZATION_PIPELINE_STAGES: TokenizationPipelineStages;
}

declare function si(options?: SearchIndexOptions): Promise<SearchIndex>;

export = si;
