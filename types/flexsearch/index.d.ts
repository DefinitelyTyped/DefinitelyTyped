// Type definitions for flexsearch 0.7
// Project: https://github.com/nextapps-de/flexsearch/
// Definitions by: LOSSES Don <https://github.com/Losses>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/************************************/
/* Utils                            */
/************************************/
export type Id = number | string;
export type ExportHandler<T> = (id: string | number, value: T) => void;
export type AsyncCallback = () => void;
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
type Preset = "memory" | "performance" | "match" | "score" | "default";

/**
 * **Document:**
 * * Tokenizer: https://github.com/nextapps-de/flexsearch#tokenizer-prefix-search
 * * Add custom tokenizer: https://github.com/nextapps-de/flexsearch#add-custom-tokenizer
 */
type Tokenizer =
   | "strict"
   | "forward"
   | "reverse"
   | "full"
   | ((x: string) => string[]);

/**
 * **Document:**
 * * Encoders: https://github.com/nextapps-de/flexsearch#encoders
 */
type Encoders =
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
export interface IContextOptions {
   resolution: number;
   depth: false | number;
   bidirectional: boolean;
}

/**
 * **Document:**
 * * Search options: https://github.com/nextapps-de/flexsearch#search-options
 */
export interface ISearchOptions {
   limit?: number;
   offset?: number;
   suggest?: boolean;
}

/**
 * **Document:**
 * * The document descriptor: https://github.com/nextapps-de/flexsearch#the-document-descriptor
 */
export interface IDescriptor<T, Store extends StoreOption = false> {
   id: string | number;
   field: string[] | IIndexOptions<T, Store>[];
}

/**
 * **Document:**
 * * Context Options: https://github.com/nextapps-de/flexsearch#context-options
 */
export interface IContextOptions {
   resolution: number;
   depth: false | number;
   bidirectional: boolean;
}

/**
 * **Document:**
 * * Charset options: https://github.com/nextapps-de/flexsearch#charset-options
 */
export interface ICharsetOptions {
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
export interface ILanguageOptions {
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
export interface IIndexOptions<T, Store extends StoreOption = false> {
   preset?: Preset;
   tokenize?: Tokenizer;
   cache?: boolean | number;
   resolution?: number;
   context?: boolean | IIndexOptions<T, Store> | IContextOptions;
   optimize?: boolean;
   boost?: (words: string[], term: string, index: number) => number;

   // Language-specific Options and Encoding
   charset?: ICharsetOptions | string;
   language?: ILanguageOptions | string;
   encode?: Encoders;
   stemmer?: ILanguageOptions['stemmer'];
   filter?: ILanguageOptions['filter'];
   matcher?: ILanguageOptions['matcher'];
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
   constructor();
   constructor(preset: string);
   constructor(options: IIndexOptions<string, false>);
   add(id: Id, item: string): Index;
   append(id: Id, item: string): void;
   update(id: Id, item: string): void;
   remove(target: Id): void;
   search(query: string): IndexSearchResult;
   search(query: string, limit: number): IndexSearchResult;
   search(query: string, options: ISearchOptions): IndexSearchResult;
   search(
      query: string,
      limit: number,
      options: ISearchOptions
   ): IndexSearchResult;
   search(options: ISearchOptions): IndexSearchResult;

   // https://github.com/nextapps-de/flexsearch#check-existence-of-already-indexed-ids
   contain(id: Id): boolean;

   export(handler: ExportHandler<string>): Promise<void>;
   import(id: Id, item: string): Promise<void>;

   // Async Methods
   addAsync(id: Id, item: string, callback?: AsyncCallback): Promise<void>;
   appendAsync(id: Id, item: string, callback?: AsyncCallback): Promise<void>;
   updateAsync(id: Id, item: string, callback?: AsyncCallback): Promise<void>;
   removeAsync(target: Id, callback?: AsyncCallback): Promise<void>;
   searchAsync(query: string): Promise<IndexSearchResult>;
   searchAsync(query: string, limit: number): Promise<IndexSearchResult>;
   searchAsync(
      query: string,
      options: ISearchOptions
   ): Promise<IndexSearchResult>;
   searchAsync(
      query: string,
      limit: number,
      options: ISearchOptions
   ): IndexSearchResult;
   searchAsync(options: ISearchOptions): Promise<IndexSearchResult>;
}

/**
 * **Document:**
 * * Basic usage and variants: https://github.com/nextapps-de/flexsearch#basic-usage-and-variants
 * * API overview: https://github.com/nextapps-de/flexsearch#api-overview
 * * Worker index: https://github.com/nextapps-de/flexsearch#worker-index
 */
export class WorkerIndex extends Index { }

/************************************/
/* Document Search                  */
/************************************/

/*
* **Document:**
* * Document options: https://github.com/nextapps-de/flexsearch#document-options
*/
export interface IDocumentOptions<T, Store extends StoreOption = false> {
   id: string;
   tag?: false | string;
   index: string | string[] | (IIndexOptions<T, Store> & { field: string })[];
   store?: Store;
}

/*
* **Document:**
* * Index options: https://github.com/nextapps-de/flexsearch#index-options
*/
export interface IIndexOptionsForDocumentSearch<
   T,
   Store extends StoreOption = false
   > extends IIndexOptions<T, Store> {
   // Additional Options for Document Indexes
   worker?: boolean;
   document?: IDocumentOptions<T, Store> | IDescriptor<T, Store>;
}

export interface ISimpleDocumentSearchResultSetUnit {
   field: string;
   result: Id[];
}

export interface IEnrichedDocumentSearchResultSetUnitResultUnit<T> {
   id: Id[];
   doc: T;
}

export interface IEnrichedDocumentSearchResultSetUnit<T> {
   field: string;
   result: IEnrichedDocumentSearchResultSetUnitResultUnit<T>[];
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
   Enrich extends boolean = false
   > = [Store, Enrich] extends [EnrichStoreOption, true]
   ? IEnrichedDocumentSearchResultSetUnit<T>[]
   : ISimpleDocumentSearchResultSetUnit[];

/**
 * **Document:**
 * * Document search options: https://github.com/nextapps-de/flexsearch#document-search-options
 */
export interface IDocumentSearchOptions<T extends boolean>
   extends ISearchOptions {
   index?: string | string[] | ISearchOptions[];
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
      options: IIndexOptionsForDocumentSearch<T, Store>,
      typeHack?: T
   );
   add(id: Id, document: T): Document<T, Store>;
   append(id: Id, document: T): void;
   update(id: Id, document: T): void;
   remove(target: Id | T): void;
   search(query: string, limit?: number): ISimpleDocumentSearchResultSetUnit[];

   // https://github.com/nextapps-de/flexsearch#field-search
   search(query: string, fields: string[]): ISimpleDocumentSearchResultSetUnit[];

   search<Enrich extends boolean = false>(
      query: string,
      limit?: number,
      options?: Partial<IDocumentSearchOptions<Enrich>>
   ): DocumentSearchResult<T, Store, Enrich>;
   search<Enrich extends boolean = false>(
      query: string,
      options: Partial<IDocumentSearchOptions<Enrich>>
   ): void;
   search<Enrich extends boolean = false>(
      options: Partial<IDocumentSearchOptions<Enrich>>
   ): void;
   export(handler: ExportHandler<T>): Promise<void>;
   import(id: Id, document: T): Promise<void>;

   // Async Methods
   addAsync(id: Id, document: T, callback?: AsyncCallback): Promise<void>;
   appendAsync(id: Id, document: T, callback?: AsyncCallback): Promise<void>;
   updateAsync(id: Id, document: T, callback?: AsyncCallback): Promise<void>;
   removeAsync(target: Id | T, callback?: AsyncCallback): Promise<void>;
   searchAsync(
      query: string,
      limit?: number,
      callback?: AsyncCallback
   ): Promise<ISimpleDocumentSearchResultSetUnit[]>;
   searchAsync<Enrich extends boolean = false>(
      query: string,
      options?: Partial<IDocumentSearchOptions<Enrich>>,
      callback?: AsyncCallback
   ): Promise<DocumentSearchResult<T, Store, Enrich>>;
   searchAsync<Enrich extends boolean = false>(
      options: Partial<IDocumentSearchOptions<Enrich>>,
      callback?: AsyncCallback
   ): Promise<DocumentSearchResult<T, Store, Enrich>>;
}

/************************************/
/* Miscellaneous                    */
/************************************/
export function create(options: IIndexOptions<string, false>): Index;
export function registerCharset(name: string, charset: ICharsetOptions): void;
export function registerLanguage(
   name: string,
   language: ILanguageOptions
): void;