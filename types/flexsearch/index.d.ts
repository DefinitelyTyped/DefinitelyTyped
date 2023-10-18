/************************************/
/* Utils                            */
/************************************/
export type Id = number | string;
export type Limit = number;
export type ExportHandler<T> = (id: string | number, value: T) => void;
export type AsyncCallback<T = undefined> = T extends undefined ? () => void : (result: T) => void;
export type UnknownFunction = (...x: unknown[]) => unknown;

export type StoreOption = boolean | string | string[];
export type EnrichStoreOption = true | string | string[];

/************************************/
/* Common Options                   */
/************************************/

/**
 * **Document:**
 * * Presets: https://github.com/nextapps-de/flexsearch#presets
 */
export type Preset = "memory" | "performance" | "match" | "score" | "default";

/**
 * **Document:**
 * * Tokenizer: https://github.com/nextapps-de/flexsearch#tokenizer-prefix-search
 * * Add custom tokenizer: https://github.com/nextapps-de/flexsearch#add-custom-tokenizer
 */
export type Tokenizer =
    | "strict"
    | "forward"
    | "reverse"
    | "full"
    | ((x: string) => string[]);

/**
 * **Document:**
 * * Encoders: https://github.com/nextapps-de/flexsearch#encoders
 */
export type Encoders =
    | false
    | "default"
    | "simple"
    | "balance"
    | "advanced"
    | "extra"
    | ((x: string) => string[]);

/**
 * **Document:**
 * * Contextual search: https://github.com/nextapps-de/flexsearch#contextual
 */
export interface ContextOptions {
    resolution: number;
    depth: false | number;
    bidirectional: boolean;
}

/**
 * **Document:**
 * * Search options: https://github.com/nextapps-de/flexsearch#search-options
 */
export interface SearchOptions {
    query?: string;
    limit?: number;
    offset?: number;
    suggest?: boolean;
}

/**
 * **Document:**
 * * The document descriptor: https://github.com/nextapps-de/flexsearch#the-document-descriptor
 */
export interface Descriptor<T, Store extends StoreOption = false> {
    id: string | number;
    field: string[] | Array<IndexOptions<T, Store>>;
}

/**
 * **Document:**
 * * Context Options: https://github.com/nextapps-de/flexsearch#context-options
 */
export interface ContextOptions {
    resolution: number;
    depth: false | number;
    bidirectional: boolean;
}

/**
 * **Document:**
 * * Charset options: https://github.com/nextapps-de/flexsearch#charset-options
 */
export interface CharsetOptions {
    split: false | string | RegExp;
    rtl: boolean;
    encode: (x: string) => string[];
}

export interface Stemmer {
    [key: string]: string;
}

export interface Matcher {
    [key: string]: string;
}

export type FilterFunction = (x: string) => boolean;
export type FilterArray = string[];

/**
 * **Document:**
 * * Language Options: https://github.com/nextapps-de/flexsearch#language-options
 * * Language: https://github.com/nextapps-de/flexsearch#languages
 */
export interface LanguageOptions {
    stemmer: false | string | Stemmer | UnknownFunction;
    filter: false | string | FilterArray | FilterFunction;
    matcher: false | string | Matcher | UnknownFunction;
}

/**
 * These options will determine how the documents be indexed.
 *
 * **Generic type parameters:**
 *
 * @template T The type of the document.
 * @template Store If store is enabled.
 *
 * **Document:**
 * * Index options: https://github.com/nextapps-de/flexsearch#index-options
 * * Language: https://github.com/nextapps-de/flexsearch#languages
 */
export interface IndexOptions<T, Store extends StoreOption = false> {
    preset?: Preset;
    tokenize?: Tokenizer;
    cache?: boolean | number;
    resolution?: number;
    context?: boolean | IndexOptions<T, Store> | ContextOptions;
    optimize?: boolean;
    boost?: (words: string[], term: string, index: number) => number;

    // Language-specific Options and Encoding
    charset?: CharsetOptions | string;
    language?: LanguageOptions | string;
    encode?: Encoders;
    stemmer?: LanguageOptions["stemmer"];
    filter?: LanguageOptions["filter"];
    matcher?: LanguageOptions["matcher"];
}

/************************************/
/* Index Search                     */
/************************************/

export type IndexSearchResult = Id[];

/**
 * **Document:**
 * * Basic usage and variants: https://github.com/nextapps-de/flexsearch#basic-usage-and-variants
 * * API overview: https://github.com/nextapps-de/flexsearch#api-overview
 * * Usage: https://github.com/nextapps-de/flexsearch#usage
 */

export class Index {
    constructor(x?: Preset | IndexOptions<string>);
    add(id: Id, item: string): this;
    append(id: Id, item: string): this;
    update(id: Id, item: string): this;
    remove(target: Id): this;
    search(query: string, options?: Limit | SearchOptions): IndexSearchResult;
    search(
        query: string,
        limit: number,
        options: SearchOptions,
    ): IndexSearchResult;
    search(options: SearchOptions): IndexSearchResult;

    // https://github.com/nextapps-de/flexsearch#check-existence-of-already-indexed-ids
    contain(id: Id): boolean;

    export(handler: ExportHandler<string>): Promise<void>;
    import(id: Id, item: string): Promise<void>;

    // Async Methods
    addAsync(id: Id, item: string, callback?: AsyncCallback<this>): Promise<this>;
    appendAsync(id: Id, item: string, callback?: AsyncCallback<this>): Promise<this>;
    updateAsync(id: Id, item: string, callback?: AsyncCallback<this>): Promise<this>;
    removeAsync(target: Id, callback?: AsyncCallback<this>): Promise<this>;
    searchAsync(
        query: string,
        options?: Limit | SearchOptions,
        callback?: AsyncCallback<IndexSearchResult>,
    ): Promise<IndexSearchResult>;
    searchAsync(
        query: string,
        limit: number,
        options?: Limit | SearchOptions,
    ): IndexSearchResult;
    searchAsync(options: SearchOptions): Promise<IndexSearchResult>;
}

/**
 * **Document:**
 * * Basic usage and variants: https://github.com/nextapps-de/flexsearch#basic-usage-and-variants
 * * API overview: https://github.com/nextapps-de/flexsearch#api-overview
 * * Worker index: https://github.com/nextapps-de/flexsearch#worker-index
 */
export class Worker {
    constructor(x?: Preset | IndexOptions<string>);

    add(id: Id, item: string, callback?: AsyncCallback<Worker>): Promise<this>;
    append(id: Id, item: string, callback?: AsyncCallback<this>): Promise<this>;
    update(id: Id, item: string, callback?: AsyncCallback<this>): Promise<this>;
    remove(target: Id, callback?: AsyncCallback<this>): Promise<this>;
    search(
        query: string,
        options?: Limit | SearchOptions,
        callback?: AsyncCallback<IndexSearchResult>,
    ): Promise<IndexSearchResult>;
    search(
        query: string,
        limit: number,
        options?: Limit | SearchOptions,
    ): IndexSearchResult;
    search(options: SearchOptions): Promise<IndexSearchResult>;

    // Async Methods
    addAsync(id: Id, item: string, callback?: AsyncCallback<this>): Promise<this>;
    appendAsync(id: Id, item: string, callback?: AsyncCallback<this>): Promise<this>;
    updateAsync(id: Id, item: string, callback?: AsyncCallback<this>): Promise<this>;
    removeAsync(target: Id, callback?: AsyncCallback<this>): Promise<this>;
    searchAsync(
        query: string,
        options?: Limit | SearchOptions,
        callback?: AsyncCallback<IndexSearchResult>,
    ): Promise<IndexSearchResult>;
    searchAsync(
        query: string,
        limit: number,
        options?: Limit | SearchOptions,
    ): IndexSearchResult;
    searchAsync(options: SearchOptions): Promise<IndexSearchResult>;
}

/************************************/
/* Document Search                  */
/************************************/

/*
 * **Document:**
 * * Document options: https://github.com/nextapps-de/flexsearch#document-options
 */
export interface DocumentOptions<T, Store extends StoreOption = false> {
    id: string;
    tag?: false | string;
    index: string | string[] | Array<IndexOptions<T, Store> & { field: string }>;
    store?: Store;
}

/*
 * **Document:**
 * * Index options: https://github.com/nextapps-de/flexsearch#index-options
 */
export interface IndexOptionsForDocumentSearch<
    T,
    Store extends StoreOption = false,
> extends IndexOptions<T, Store> {
    // Additional Options for Document Indexes
    worker?: boolean;
    document?: DocumentOptions<T, Store> | Descriptor<T, Store>;
}

export interface SimpleDocumentSearchResultSetUnit {
    field: string;
    result: Id[];
}

export interface EnrichedDocumentSearchResultSetUnitResultUnit<T> {
    id: Id[];
    doc: T;
}

export interface EnrichedDocumentSearchResultSetUnit<T> {
    field: string;
    result: Array<EnrichedDocumentSearchResultSetUnitResultUnit<T>>;
}

/**
 *  # Document Search Result
 *
 *  To make your result return the full document:
 *  * set `store` to `true` while creating the document;
 *  * set `enrich` to `true` while searching.
 *
 *  If neither of these conditions is met, then the returned result will be a `ISimpleDocumentSearchResult`.
 */
export type DocumentSearchResult<
    T,
    Store extends StoreOption = false,
    Enrich extends boolean = false,
> = [Store, Enrich] extends [EnrichStoreOption, true] ? Array<EnrichedDocumentSearchResultSetUnit<T>>
    : SimpleDocumentSearchResultSetUnit[];

/**
 * **Document:**
 * * Document search options: https://github.com/nextapps-de/flexsearch#document-search-options
 */
export interface DocumentSearchOptions<T extends boolean> extends SearchOptions {
    index?: string | string[] | SearchOptions[];
    tag?: string | string[];
    enrich?: T;
    bool?: "and" | "or";
}

/**
 * **Document:**
 * * Basic usage and variants: https://github.com/nextapps-de/flexsearch#basic-usage-and-variants
 * * API overview: https://github.com/nextapps-de/flexsearch#api-overview
 * * Document store: https://github.com/nextapps-de/flexsearch#document-store
 */
export class Document<T, Store extends StoreOption = false> {
    constructor(
        options: IndexOptionsForDocumentSearch<T, Store>,
        typeHack?: T,
    );
    add(document: T): this;
    add(id: Id, document: T): this;
    append(document: T): this;
    append(id: Id, document: T): this;
    update(document: T): this;
    update(id: Id, document: T): this;
    remove(target: Id | T): this;
    search(query: string, limit?: number): SimpleDocumentSearchResultSetUnit[];

    // https://github.com/nextapps-de/flexsearch#field-search
    search(
        query: string,
        options: string[] | Partial<DocumentSearchOptions<boolean>>,
    ): SimpleDocumentSearchResultSetUnit[];

    search<Enrich extends boolean = false>(
        query: string,
        limit?: number,
        options?: Partial<DocumentSearchOptions<Enrich>>,
    ): DocumentSearchResult<T, Store, Enrich>;
    search(
        options: Partial<DocumentSearchOptions<boolean>>,
    ): SimpleDocumentSearchResultSetUnit[];
    export(handler: ExportHandler<T>): Promise<void>;
    import(id: Id, document: T): Promise<void>;

    // Async Methods
    addAsync(id: Id, document: T, callback?: AsyncCallback): Promise<this>;
    appendAsync(id: Id, document: T, callback?: AsyncCallback): Promise<this>;
    updateAsync(id: Id, document: T, callback?: AsyncCallback): Promise<this>;
    removeAsync(target: Id | T, callback?: AsyncCallback): Promise<this>;
    searchAsync<Enrich extends boolean = false>(
        query: string,
        options: string[] | Partial<DocumentSearchOptions<Enrich>>,
    ): Promise<DocumentSearchResult<T, Store, Enrich>>;
    searchAsync(
        query: string,
        limit?: number,
    ): Promise<SimpleDocumentSearchResultSetUnit[]>;
    searchAsync(
        query: string,
        limit: number,
        callback: AsyncCallback<SimpleDocumentSearchResultSetUnit[]>,
    ): Promise<this>;
    searchAsync<Enrich extends boolean = false>(
        query: string,
        options: Partial<DocumentSearchOptions<Enrich>>,
        callback: AsyncCallback<DocumentSearchResult<T, Store, Enrich>>,
    ): Promise<this>;
    searchAsync<Enrich extends boolean = false>(
        options: Partial<DocumentSearchOptions<Enrich>>,
    ): Promise<DocumentSearchResult<T, Store, Enrich>>;
    searchAsync<Enrich extends boolean = false>(
        options: Partial<DocumentSearchOptions<Enrich>>,
        callback: AsyncCallback<DocumentSearchResult<T, Store, Enrich>>,
    ): Promise<this>;
}

/************************************/
/* Miscellaneous                    */
/************************************/
export function create(options: IndexOptions<string>): Index;
export function registerCharset(name: string, charset: CharsetOptions): void;
export function registerLanguage(
    name: string,
    language: LanguageOptions,
): void;
