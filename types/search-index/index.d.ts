// Type definitions for search-index 0.15
// Project: https://github.com/fergiemcdowall/search-index
// Definitions by: Gordon Burgett <https://github.com/gburgett>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

/**
 * The type of the globally exposed function assigned to `window.SearchIndex`
 * when `search-index.min.js` is included on the page.
 *
 * In your typescript files somewhere before you instantiate the search index:
 * ```typescript
 *   // assigned to window object by search-index.min.js
 * declare const SearchIndex: SearchIndexConstructor
 * ```
 *
 * Or if you require the module directly:
 * ```typescript
 * const ctor = require('search-index') as SearchIndexConstructor
 * ```
 */
export type SearchIndexConstructor = (givenOptions: Options, moduleReady: (err: any, searchIndex: Index) => void) => void;

/**
 * Options and settings for creating the index
 * https://github.com/fergiemcdowall/search-index/blob/master/docs/API.md#options-and-settings-1
 */
export interface Options {
    /**
     * Specifies how many documents to process, before merging them into the index. When the end of the stream is reached all remaning documents will be merged, even if batchsize is not reached.
     */
    batchsize?: number;

    /** A LevelUp instance */
    indexes?: any;

    /** The path where the LevelUp database is stored */
    indexPath?: string;

    /** Contains field specific overrides to global settings */
    fieldOptions?: any;

    /** A bunyan log level. */
    logLevel?: string;

    /** Specifies how to split strings into phrases. See https://www.npmjs.com/package/term-vector for examples */
    nGramLength?: number | number[] | { gte: number, lte: number };

    /** Specifies how to split strings into phrases. See https://www.npmjs.com/package/term-vector for examples */
    keySeparator?: string;

    /** The 'stopwords' to be ignored when indexing.  Default: `require('stopword').en` */
    stopwords?: string[];
}

export interface Index {
    /**
     * Returns a readable stream of all fields that can be searched in.
     * https://github.com/fergiemcdowall/search-index/blob/master/docs/API.md#availablefields
     */
    availableFields(): NodeJS.ReadableStream;

    /**
     * Return a readable stream of user defined aggregations, can be used to generate categories by price, age, etc.
     * https://github.com/fergiemcdowall/search-index/blob/master/docs/API.md#buckets
     */
    buckets(q?: Query): NodeJS.ReadableStream;

    /**
     * Collate documents under all possible values of the given field name, and return a readable stream
     *
     * @param options query plus category
     *
     * https://github.com/fergiemcdowall/search-index/blob/master/docs/API.md#categorize
     */
    categorize(options: Query & { category: Category }): NodeJS.ReadableStream;

    /**
     * Returns the total amount of docs in the index
     */
    countDocs(callback: (err: any, count: number) => void): void;

    /**
     * Gets a document from the corpus
     *
     * @param docIDs an array of document IDs
     */
    get(docIDs: any[]): NodeJS.ReadableStream;

    /**
     * Use match to create autosuggest and autocomplete functionality.
     * [See also here](https://github.com/fergiemcdowall/search-index/blob/master/docs/autosuggest.md)
     */
    match(options: MatchOptions): NodeJS.ReadableStream;

    /**
     * Searches in the index. [See also here](https://github.com/fergiemcdowall/search-index/blob/master/docs/search.md)
     *
     * (shhhh! search index will also accept "lazy" queries): `q = 'reagan'`
     * @param q the query object
     */
    search(q: string | Query): NodeJS.ReadableStream;

    /**
     * Returns a count of the documents for the given query including those hidden by pagination
     * @param q the query object
     */
    totalHits(q: string | Query, callback: (err: any, count: number) => void): void;

    /**
     * Returns a writeable stream that can be used to index documents into the search index.
     * Note that this stream cannot be used concurrently. If documents are being sent on top of one another then it is safer to use concurrentAdd, however add is faster and uses less resources.
     */
    add(batchOptions?: IndexingOptions): NodeJS.WritableStream;

    concurrentAdd(batchOptions: IndexingOptions, batch: any[], done: (err?: any) => void): void;

    /**
     * Prepares a "standard document" (an object where keys become field names,
     * and values become corresponding field values) for indexing. Customised pipeline
     * stages can be inserted before and after processing if required.
     */
    defaultPipeline(batchOptions?: IndexingOptions): NodeJS.WritableStream;

    /**
     * Deletes one or more documents from the corpus
     */
    del(docIDs: string[], callback: (err: any) => void): void;

    concurrentDel(docIds: string[], done: (err?: any) => void): void;

    deleteStream(options?: Options): NodeJS.WritableStream;

    /**
     * Empties the index. Deletes everything.
     */
    flush(callback: (err?: any) => void): void;

    /**
     * Use dbReadStream() to create a stream of the underlying key-value store. This can be used to pipe indexes around. You can for example replicate indexes to file, or to other (empty) indexes
     * @param options gzip If set to true, the readstream will be compressed into the gzip format
     */
    dbReadStream(options?: { gzip: boolean }): NodeJS.ReadableStream;

    /**
     * Use dbWriteStream() to read in an index created by DBReadStream().
     * @param options merge If set to true, the writestream will merge this index with the existing one, if set to false the existing index must be empty
     */
    dbWriteStream(options?: { merge: boolean }): NodeJS.WritableStream;

    /**
     * Closes the index and the underlying levelup db.
     */
    close(callback: (err?: any) => void): void;
}

export interface Query {
    /** Optionally sort results by a given field instead of relevancy score */
    sort?: {
        /** The name of the document field to sort on */
        field: string
        /** The directon to sort, default `'asc'` */
        direction?: 'desc' | 'asc'
    };
    /** Handle paging by setting `offset` and `pageSize`.  Default `0` */
    offset?: number;
    /** Handle paging by setting `offset` and `pageSize`.  Default `20` */
    pageSize?: number;

    /** An array of search conditions.  Each array element is an OR condition. */
    query: QueryObject | QueryObject[];
}

/**
 * An object that describes a search query.
 * See https://github.com/fergiemcdowall/search-index/blob/master/docs/search.md
 */
export interface QueryObject {
    /** AND together the given search terms for each field.  Use '*' to search the whole document. */
    AND?: { [field: string]: Array<string | Filter> };
    /** require the given fields to NOT be present */
    NOT?: { [field: string]: Array<string | Filter> };

    /** A positive or negative number summed into the final hit score */
    BOOST?: number;
}

export interface Filter {
    /**
     * The lower boundary of the filter.
     * Values not greater than or equal to this are not included in the results.
     */
    gte: number | string;
    /**
     * The upper boundary of the filter.
     * Values not less than or equal to this are not included in the results.
     */
    lte: number | string;
}

/**
 * Argument to Categorize
 * https://github.com/fergiemcdowall/search-index/blob/master/docs/API.md#categorize
 */
export interface Category {
    /** Name of the field to categorize on */
    field: string;
    /** if true- return a set of IDs. If false or not set, return a count */
    set?: boolean;
}

export interface MatchOptions {
    /** default:'' return all words that begin with this string */
    beginsWith?: string;
    /** default:'*' perform matches on data found in this field */
    field?: string;
    /** default:3 only preform matches once beginsWith is longer than this number */
    threshold?: number;
    /** default:10 maximum amount of matches to return */
    limit?: number;
    /** default:'simple' the type of matcher to use */
    type?: 'simple' | 'ID' | 'count';

    /** default:'frequency' the sorting applied to the returned document stream */
    sort?: 'frequency' | 'alphabetical';
}

export interface IndexingOptions {
    /** default:true : can searches be carried out on this specific field */
    fieldedSearch?: boolean;
    /** default:1 : length of word sequences to be indexed. Use this to capture phrases of more than one word. */
    nGramLength?: number;
    /** default:true : preserve the case of the text */
    preserveCase?: boolean;
    /** default:true : is this field searchable? */
    searchable?: boolean;
    /** A regex in the String.split() format that will be used to tokenize this field */
    separator?: RegExp;
    /** default:false : can this field be sorted on? If true field is not searchable */
    sortable?: boolean;
    /** default: `require('stopword').en` An array of stop words to be ignored when indexing. */
    stopwords?: string[];
    /** specifies which fields to store in index. You may want to index fields that are not shown in results, for example when dealing with synonyms */
    storeable?: string[];
    /** default:0 this number will be added to the score for the field allowing some fields to count more or less than others. */
    weight?: number;
}

export interface SearchResult {
    /** The 'id' field of the document */
    id: string;
    /** The "relevance score" of the document to the search.  Use this to order results by relevance. */
    score: number;
    /** The criteria by which the document was scored. */
    scoringCriteria: any;

    /** The document given to search-index to be indexed */
    document: any;
}
