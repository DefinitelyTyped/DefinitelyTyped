// Type definitions for lunr.js 2.1
// Project: https://github.com/olivernn/lunr.js
// Definitions by: Sean Tan <https://github.com/seantanly>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

export as namespace lunr;
export = lunr;

/**
 * lunr - http://lunrjs.com - A bit like Solr, but much smaller and not as bright
 * Copyright (C) 2014 Oliver Nightingale
 * MIT Licensed
 * @license
 */
declare namespace lunr {
    namespace Builder {
        /**
         * A plugin is a function that is called with the index builder as its context.
         * Plugins can be used to customise or extend the behaviour of the index
         * in some way. A plugin is just a function, that encapsulated the custom
         * behaviour that should be applied when building the index.
         *
         * The plugin function will be called with the index builder as its argument, additional
         * arguments can also be passed when calling use. The function will be called
         * with the index builder as its context.
         */
        type Plugin = (this: Builder, ...args: any[]) => void;
    }

    /**
     * lunr.Builder performs indexing on a set of documents and
     * returns instances of lunr.Index ready for querying.
     *
     * All configuration of the index is done via the builder, the
     * fields to index, the document reference, the text processing
     * pipeline and document scoring parameters are all set on the
     * builder before indexing.
     */
    class Builder {
        /**
         * Internal reference to the document reference field.
         */
        _ref: string;

        /**
         * Internal reference to the document fields to index.
         */
        _fields: string[];

        /**
         * The inverted index maps terms to document fields.
         */
        invertedIndex: object;

        /**
         *  Keeps track of document term frequencies.
         */
        documentTermFrequencies: object;

        /**
         * Keeps track of the length of documents added to the index.
         */
        documentLengths: object;

        /**
         * Function for splitting strings into tokens for indexing.
         */
        tokenizer: typeof tokenizer;

        /**
         * The pipeline performs text processing on tokens before indexing.
         */
        pipeline: Pipeline;

        /**
         * A pipeline for processing search terms before querying the index.
         */
        searchPipeline: Pipeline;

        /**
         * Keeps track of the total number of documents indexed.
         */
        documentCount: number;

        /**
         * A parameter to control field length normalization, setting this to 0 disabled normalization, 1 fully normalizes field lengths, the default value is 0.75.
         */
        _b: number;

        /**
         * A parameter to control how quickly an increase in term frequency results in term frequency saturation, the default value is 1.2.
         */
        _k1: number;

        /**
         * A counter incremented for each unique term, used to identify a terms position in the vector space.
         */
        termIndex: number;

        /**
         * A list of metadata keys that have been whitelisted for entry in the index.
         */
        metadataWhitelist: string[];

        constructor()

        /**
         * Sets the document field used as the document reference. Every document must have this field.
         * The type of this field in the document should be a string, if it is not a string it will be
         * coerced into a string by calling toString.
         *
         * The default ref is 'id'.
         *
         * The ref should _not_ be changed during indexing, it should be set before any documents are
         * added to the index. Changing it during indexing can lead to inconsistent results.
         *
         * @param ref - The name of the reference field in the document.
         */
        ref(ref: string): void;

        /**
         * Adds a field to the list of document fields that will be indexed. Every document being
         * indexed should have this field. Null values for this field in indexed documents will
         * not cause errors but will limit the chance of that document being retrieved by searches.
         *
         * All fields should be added before adding documents to the index. Adding fields after
         * a document has been indexed will have no effect on already indexed documents.
         *
         * @param field - The name of a field to index in all documents.
         */
        field(field: string): void;

        /**
         * A parameter to tune the amount of field length normalisation that is applied when
         * calculating relevance scores. A value of 0 will completely disable any normalisation
         * and a value of 1 will fully normalise field lengths. The default is 0.75. Values of b
         * will be clamped to the range 0 - 1.
         *
         * @param number - The value to set for this tuning parameter.
         */
        b(number: number): void;

        /**
         * A parameter that controls the speed at which a rise in term frequency results in term
         * frequency saturation. The default value is 1.2. Setting this to a higher value will give
         * slower saturation levels, a lower value will result in quicker saturation.
         *
         * @param number - The value to set for this tuning parameter.
         */
        k1(number: number): void;

        /**
         * Adds a document to the index.
         *
         * Before adding fields to the index the index should have been fully setup, with the document
         * ref and all fields to index already having been specified.
         *
         * The document must have a field name as specified by the ref (by default this is 'id') and
         * it should have all fields defined for indexing, though null or undefined values will not
         * cause errors.
         *
         * @param doc - The document to add to the index.
         */
        add(doc: object): void;

        /**
         * Builds the index, creating an instance of lunr.Index.
         *
         * This completes the indexing process and should only be called
         * once all documents have been added to the index.
         *
         */
        build(): Index;

        /**
         * Applies a plugin to the index builder.
         *
         * A plugin is a function that is called with the index builder as its context.
         * Plugins can be used to customise or extend the behaviour of the index
         * in some way. A plugin is just a function, that encapsulated the custom
         * behaviour that should be applied when building the index.
         *
         * The plugin function will be called with the index builder as its argument, additional
         * arguments can also be passed when calling use. The function will be called
         * with the index builder as its context.
         *
         * @param plugin The plugin to apply.
         */
        use(plugin: Builder.Plugin, ...args: any[]): void;
    }

    namespace Index {
        interface Attributes {
            /**
             * An index of term/field to document reference.
             */
            invertedIndex: object;
            /**
             * Document vectors keyed by document reference.
             */
            documentVectors: { [docRef: string]: Vector };
            /**
             * An set of all corpus tokens.
             */
            tokenSet: TokenSet;
            /**
             * The names of indexed document fields.
             */
            fields: string[];
            /**
             * The pipeline to use for search terms.
             */
            pipeline: Pipeline;
        }

        /**
         * A result contains details of a document matching a search query.
         */
        interface Result {
            /**
             * The reference of the document this result represents.
             */
            ref: string;

            /**
             * A number between 0 and 1 representing how similar this document is to the query.
             */
            score: number;

            /**
             * Contains metadata about this match including which term(s) caused the match.
             */
            matchData: MatchData;
        }

        /**
         * A query builder callback provides a query object to be used to express
         * the query to perform on the index.
         *
         * @callback lunr.Index~queryBuilder
         * @param query - The query object to build up.
         */
        type QueryBuilder = (this: Query, query: Query) => void;

        /**
         * Although lunr provides the ability to create queries using lunr.Query, it also provides a simple
         * query language which itself is parsed into an instance of lunr.Query.
         *
         * For programmatically building queries it is advised to directly use lunr.Query, the query language
         * is best used for human entered text rather than program generated text.
         *
         * At its simplest queries can just be a single term, e.g. `hello`, multiple terms are also supported
         * and will be combined with OR, e.g `hello world` will match documents that contain either 'hello'
         * or 'world', though those that contain both will rank higher in the results.
         *
         * Wildcards can be included in terms to match one or more unspecified characters, these wildcards can
         * be inserted anywhere within the term, and more than one wildcard can exist in a single term. Adding
         * wildcards will increase the number of documents that will be found but can also have a negative
         * impact on query performance, especially with wildcards at the beginning of a term.
         *
         * Terms can be restricted to specific fields, e.g. `title:hello`, only documents with the term
         * hello in the title field will match this query. Using a field not present in the index will lead
         * to an error being thrown.
         *
         * Modifiers can also be added to terms, lunr supports edit distance and boost modifiers on terms. A term
         * boost will make documents matching that term score higher, e.g. `foo^5`. Edit distance is also supported
         * to provide fuzzy matching, e.g. 'hello~2' will match documents with hello with an edit distance of 2.
         * Avoid large values for edit distance to improve query performance.
         *
         * To escape special characters the backslash character '\' can be used, this allows searches to include
         * characters that would normally be considered modifiers, e.g. `foo\~2` will search for a term "foo~2" instead
         * of attempting to apply a boost of 2 to the search term "foo".
         *
         * @example <caption>Simple single term query</caption>
         * hello
         * @example <caption>Multiple term query</caption>
         * hello world
         * @example <caption>term scoped to a field</caption>
         * title:hello
         * @example <caption>term with a boost of 10</caption>
         * hello^10
         * @example <caption>term with an edit distance of 2</caption>
         * hello~2
         */
        type QueryString = string;
    }

    /**
     * An index contains the built index of all documents and provides a query interface
     * to the index.
     *
     * Usually instances of lunr.Index will not be created using this constructor, instead
     * lunr.Builder should be used to construct new indexes, or lunr.Index.load should be
     * used to load previously built and serialized indexes.
     */
    class Index {
        /**
         * @param attrs The attributes of the built search index.
         */
        constructor(attrs: Index.Attributes)

        /**
         * Performs a search against the index using lunr query syntax.
         *
         * Results will be returned sorted by their score, the most relevant results
         * will be returned first.
         *
         * For more programmatic querying use lunr.Index#query.
         *
         * @param queryString - A string containing a lunr query.
         * @throws {lunr.QueryParseError} If the passed query string cannot be parsed.
         */
        search(queryString: Index.QueryString): Index.Result[];

        /**
         * Performs a query against the index using the yielded lunr.Query object.
         *
         * If performing programmatic queries against the index, this method is preferred
         * over lunr.Index#search so as to avoid the additional query parsing overhead.
         *
         * A query object is yielded to the supplied function which should be used to
         * express the query to be run against the index.
         *
         * Note that although this function takes a callback parameter it is _not_ an
         * asynchronous operation, the callback is just yielded a query object to be
         * customized.
         *
         * @param fn - A function that is used to build the query.
         */
        query(fn: Index.QueryBuilder): Index.Result[];

        /**
         * Prepares the index for JSON serialization.
         *
         * The schema for this JSON blob will be described in a
         * separate JSON schema file.
         *
         */
        toJSON(): object;

        /**
         * Loads a previously serialized lunr.Index
         *
         * @param serializedIndex - A previously serialized lunr.Index
         */
        static load(serializedIndex: object): Index;
    }

    /**
     * Contains and collects metadata about a matching document.
     * A single instance of lunr.MatchData is returned as part of every
     * lunr.IndexResult.
     */
    class MatchData {
        /**
         * A cloned collection of metadata associated with this document.
         */
        metadata: object;

        /**
         * @param term - The term this match data is associated with
         * @param field - The field in which the term was found
         * @param metadata - The metadata recorded about this term in this field
         */
        constructor(term: string, field: string, metadata: object)

        /**
         * An instance of lunr.MatchData will be created for every term that matches a
         * document. However only one instance is required in a lunr.Index~Result. This
         * method combines metadata from another instance of lunr.MatchData with this
         * objects metadata.
         *
         * @param otherMatchData - Another instance of match data to merge with this one.
         * @see {@link lunr.Index~Result}
         */
        combine(otherMatchData: MatchData): void;
    }

    /**
     * A pipeline function maps lunr.Token to lunr.Token. A lunr.Token contains the token
     * string as well as all known metadata. A pipeline function can mutate the token string
     * or mutate (or add) metadata for a given token.
     *
     * A pipeline function can indicate that the passed token should be discarded by returning
     * null. This token will not be passed to any downstream pipeline functions and will not be
     * added to the index.
     *
     * Multiple tokens can be returned by returning an array of tokens. Each token will be passed
     * to any downstream pipeline functions and all will returned tokens will be added to the index.
     *
     * Any number of pipeline functions may be chained together using a lunr.Pipeline.
     *
     * @param token - A token from the document being processed.
     * @param i - The index of this token in the complete list of tokens for this document/field.
     * @param tokens - All tokens for this document/field.
     */
    type PipelineFunction = (
        token: Token,
        i: number,
        tokens: Token[]
    ) => null | Token | Token[];

    /**
     * lunr.Pipelines maintain an ordered list of functions to be applied to all
     * tokens in documents entering the search index and queries being ran against
     * the index.
     *
     * An instance of lunr.Index created with the lunr shortcut will contain a
     * pipeline with a stop word filter and an English language stemmer. Extra
     * functions can be added before or after either of these functions or these
     * default functions can be removed.
     *
     * When run the pipeline will call each function in turn, passing a token, the
     * index of that token in the original list of all tokens and finally a list of
     * all the original tokens.
     *
     * The output of functions in the pipeline will be passed to the next function
     * in the pipeline. To exclude a token from entering the index the function
     * should return undefined, the rest of the pipeline will not be called with
     * this token.
     *
     * For serialisation of pipelines to work, all functions used in an instance of
     * a pipeline should be registered with lunr.Pipeline. Registered functions can
     * then be loaded. If trying to load a serialised pipeline that uses functions
     * that are not registered an error will be thrown.
     *
     * If not planning on serialising the pipeline then registering pipeline functions
     * is not necessary.
     */
    class Pipeline {
        constructor()

        /**
         * Register a function with the pipeline.
         *
         * Functions that are used in the pipeline should be registered if the pipeline
         * needs to be serialised, or a serialised pipeline needs to be loaded.
         *
         * Registering a function does not add it to a pipeline, functions must still be
         * added to instances of the pipeline for them to be used when running a pipeline.
         *
         * @param fn - The function to check for.
         * @param label - The label to register this function with
         */
        static registerFunction(fn: PipelineFunction, label: string): void;

        /**
         * Loads a previously serialised pipeline.
         *
         * All functions to be loaded must already be registered with lunr.Pipeline.
         * If any function from the serialised data has not been registered then an
         * error will be thrown.
         *
         * @param serialised - The serialised pipeline to load.
         */
        static load(serialised: object): Pipeline;

        /**
         * Adds new functions to the end of the pipeline.
         *
         * Logs a warning if the function has not been registered.
         *
         * @param functions - Any number of functions to add to the pipeline.
         */
        add(...functions: PipelineFunction[]): void;

        /**
         * Adds a single function after a function that already exists in the
         * pipeline.
         *
         * Logs a warning if the function has not been registered.
         *
         * @param existingFn - A function that already exists in the pipeline.
         * @param newFn - The new function to add to the pipeline.
         */
        after(existingFn: PipelineFunction, newFn: PipelineFunction): void;

        /**
         * Adds a single function before a function that already exists in the
         * pipeline.
         *
         * Logs a warning if the function has not been registered.
         *
         * @param existingFn - A function that already exists in the pipeline.
         * @param newFn - The new function to add to the pipeline.
         */
        before(existingFn: PipelineFunction, newFn: PipelineFunction): void;

        /**
         * Removes a function from the pipeline.
         *
         * @param fn The function to remove from the pipeline.
         */
        remove(fn: PipelineFunction): void;

        /**
         * Runs the current list of functions that make up the pipeline against the
         * passed tokens.
         *
         * @param tokens The tokens to run through the pipeline.
         */
        run(tokens: Token[]): Token[];

        /**
         * Convenience method for passing a string through a pipeline and getting
         * strings out. This method takes care of wrapping the passed string in a
         * token and mapping the resulting tokens back to strings.
         *
         * @param str - The string to pass through the pipeline.
         */
        runString(str: string): string[];

        /**
         * Resets the pipeline by removing any existing processors.
         *
         */
        reset(): void;

        /**
         * Returns a representation of the pipeline ready for serialisation.
         *
         * Logs a warning if the function has not been registered.
         *
         */
        toJSON(): PipelineFunction[];
    }

    namespace Query {
        enum wildcard {
            NONE = 0,
            LEADING = 1 << 0,
            TRAILING = 1 << 1
        }

        /**
         * A single clause in a {@link lunr.Query} contains a term and details on how to
         * match that term against a {@link lunr.Index}.
         */
        interface Clause {
            term: string;
            /** The fields in an index this clause should be matched against. */
            fields: string[];
            /** Any boost that should be applied when matching this clause. */
            boost: number;
            /** Whether the term should have fuzzy matching applied, and how fuzzy the match should be. */
            editDistance: number;
            /** Whether the term should be passed through the search pipeline. */
            usePipeline: boolean;
            /** Whether the term should have wildcards appended or prepended. */
            wildcard: number;
        }
    }

    /**
     * A lunr.Query provides a programmatic way of defining queries to be performed
     * against a {@link lunr.Index}.
     *
     * Prefer constructing a lunr.Query using the {@link lunr.Index#query} method
     * so the query object is pre-initialized with the right index fields.
     */
    class Query {
        /**
         * An array of query clauses.
         */
        clauses: Query.Clause[];

        /**
         * An array of all available fields in a lunr.Index.
         */
        allFields: string[];

        /**
         * @param allFields An array of all available fields in a lunr.Index.
         */
        constructor(allFields: string[])

        /**
         * Adds a {@link lunr.Query~Clause} to this query.
         *
         * Unless the clause contains the fields to be matched all fields will be matched. In addition
         * a default boost of 1 is applied to the clause.
         *
         * @param clause - The clause to add to this query.
         * @see lunr.Query~Clause
         */
        clause(clause: Query.Clause): Query;

        /**
         * Adds a term to the current query, under the covers this will create a {@link lunr.Query~Clause}
         * to the list of clauses that make up this query.
         *
         * @param term - The term to add to the query.
         * @param [options] - Any additional properties to add to the query clause.
         * @see lunr.Query#clause
         * @see lunr.Query~Clause
         * @example <caption>adding a single term to a query</caption>
         * query.term("foo")
         * @example <caption>adding a single term to a query and specifying search fields, term boost and automatic trailing wildcard</caption>
         * query.term("foo", {
         *   fields: ["title"],
         *   boost: 10,
         *   wildcard: lunr.Query.wildcard.TRAILING
         * })
         */
        term(term: string, options: object): Query;
    }

    class QueryParseError extends Error {
        name: "QueryParseError";
        message: string;
        start: number;
        end: number;

        constructor(message: string, start: string, end: string)
    }

    /**
     * lunr.stemmer is an english language stemmer, this is a JavaScript
     * implementation of the PorterStemmer taken from http://tartarus.org/~martin
     *
     * Implements {lunr.PipelineFunction}
     *
     * @param token - The string to stem
     * @see {@link lunr.Pipeline}
     */
    function stemmer(token: Token): Token;

    /**
     * lunr.generateStopWordFilter builds a stopWordFilter function from the provided
     * list of stop words.
     *
     * The built in lunr.stopWordFilter is built using this generator and can be used
     * to generate custom stopWordFilters for applications or non English languages.
     *
     * @param stopWords - The list of stop words
     * @see lunr.Pipeline
     * @see lunr.stopWordFilter
     */
    function generateStopWordFilter(stopWords: string[]): PipelineFunction;

    /**
     * lunr.stopWordFilter is an English language stop word list filter, any words
     * contained in the list will not be passed through the filter.
     *
     * This is intended to be used in the Pipeline. If the token does not pass the
     * filter then undefined will be returned.
     *
     * Implements {lunr.PipelineFunction}
     *
     * @param token - A token to check for being a stop word.
     * @see {@link lunr.Pipeline}
     */
    function stopWordFilter(token: Token): Token;

    namespace Token {
        /**
         * A token update function is used when updating or optionally
         * when cloning a token.
         *
         * @callback lunr.Token~updateFunction
         * @param str - The string representation of the token.
         * @param metadata - All metadata associated with this token.
         */
        type UpdateFunction = (str: string, metadata: object) => void;
    }

    /**
     * A token wraps a string representation of a token
     * as it is passed through the text processing pipeline.
     */
    class Token {
        /**
         * @param [str=''] - The string token being wrapped.
         * @param [metadata={}] - Metadata associated with this token.
         */
        constructor(str: string, metadata: object)

        /**
         * Returns the token string that is being wrapped by this object.
         *
         */
        toString(): string;

        /**
         * Applies the given function to the wrapped string token.
         *
         * @example
         * token.update(function (str, metadata) {
         *   return str.toUpperCase()
         * })
         *
         * @param fn - A function to apply to the token string.
         */
        update(fn: Token.UpdateFunction): Token;

        /**
         * Creates a clone of this token. Optionally a function can be
         * applied to the cloned token.
         *
         * @param fn - An optional function to apply to the cloned token.
         */
        clone(fn?: Token.UpdateFunction): Token;
    }

    /**
     * A token set is used to store the unique list of all tokens
     * within an index. Token sets are also used to represent an
     * incoming query to the index, this query token set and index
     * token set are then intersected to find which tokens to look
     * up in the inverted index.
     *
     * A token set can hold multiple tokens, as in the case of the
     * index token set, or it can hold a single token as in the
     * case of a simple query token set.
     *
     * Additionally token sets are used to perform wildcard matching.
     * Leading, contained and trailing wildcards are supported, and
     * from this edit distance matching can also be provided.
     *
     * Token sets are implemented as a minimal finite state automata,
     * where both common prefixes and suffixes are shared between tokens.
     * This helps to reduce the space used for storing the token set.
     */
    class TokenSet {
        constructor()

        /**
         * Creates a TokenSet instance from the given sorted array of words.
         *
         * @param arr - A sorted array of strings to create the set from.
         * @throws Will throw an error if the input array is not sorted.
         */
        fromArray(arr: string[]): TokenSet;

        /**
         * Creates a token set representing a single string with a specified
         * edit distance.
         *
         * Insertions, deletions, substitutions and transpositions are each
         * treated as an edit distance of 1.
         *
         * Increasing the allowed edit distance will have a dramatic impact
         * on the performance of both creating and intersecting these TokenSets.
         * It is advised to keep the edit distance less than 3.
         *
         * @param str - The string to create the token set from.
         * @param editDistance - The allowed edit distance to match.
         */
        fromFuzzyString(str: string, editDistance: number): Vector;

        /**
         * Creates a TokenSet from a string.
         *
         * The string may contain one or more wildcard characters (*)
         * that will allow wildcard matching when intersecting with
         * another TokenSet.
         *
         * @param str - The string to create a TokenSet from.
         */
        fromString(str: string): TokenSet;

        /**
         * Converts this TokenSet into an array of strings
         * contained within the TokenSet.
         *
         */
        toArray(): string[];

        /**
         * Generates a string representation of a TokenSet.
         *
         * This is intended to allow TokenSets to be used as keys
         * in objects, largely to aid the construction and minimisation
         * of a TokenSet. As such it is not designed to be a human
         * friendly representation of the TokenSet.
         *
         */
        toString(): string;

        /**
         * Returns a new TokenSet that is the intersection of
         * this TokenSet and the passed TokenSet.
         *
         * This intersection will take into account any wildcards
         * contained within the TokenSet.
         *
         * @param b - An other TokenSet to intersect with.
         */
        intersect(b: TokenSet): TokenSet;
    }

    namespace tokenizer {
        /**
         * The separator used to split a string into tokens. Override this property to change the behaviour of
         * `lunr.tokenizer` behaviour when tokenizing strings. By default this splits on whitespace and hyphens.
         *
         * @see lunr.tokenizer
         */
        let separator: RegExp;
    }

    /**
     * A function for splitting a string into tokens ready to be inserted into
     * the search index. Uses `lunr.tokenizer.separator` to split strings, change
     * the value of this property to change how strings are split into tokens.
     *
     * This tokenizer will convert its parameter to a string by calling `toString` and
     * then will split this string on the character in `lunr.tokenizer.separator`.
     * Arrays will have their elements converted to strings and wrapped in a lunr.Token.
     *
     * @param obj - The object to convert into tokens
     */
    function tokenizer(obj?: null | string | object | object[]): Token[];

    /**
     * lunr.trimmer is a pipeline function for trimming non word
     * characters from the beginning and end of tokens before they
     * enter the index.
     *
     * This implementation may not work correctly for non latin
     * characters and should either be removed or adapted for use
     * with languages with non-latin characters.
     *
     * Implements {lunr.PipelineFunction}
     *
     * @param token The token to pass through the filter
     * @see lunr.Pipeline
     */
    function trimmer(token: Token): Token;

    /**
     * A namespace containing utils for the rest of the lunr library
     */
    namespace utils {
        /**
         * Print a warning message to the console.
         *
         * @param message The message to be printed.
         */
        function warn(message: string): void;

        /**
         * Convert an object to a string.
         *
         * In the case of `null` and `undefined` the function returns
         * the empty string, in all other cases the result of calling
         * `toString` on the passed object is returned.
         *
         * @param obj The object to convert to a string.
         * @return string representation of the passed object.
         */
        function asString(obj: any): string;
    }

    /**
     * A vector is used to construct the vector space of documents and queries. These
     * vectors support operations to determine the similarity between two documents or
     * a document and a query.
     *
     * Normally no parameters are required for initializing a vector, but in the case of
     * loading a previously dumped vector the raw elements can be provided to the constructor.
     *
     * For performance reasons vectors are implemented with a flat array, where an elements
     * index is immediately followed by its value. E.g. [index, value, index, value]. This
     * allows the underlying array to be as sparse as possible and still offer decent
     * performance when being used for vector calculations.
     */
    class Vector {
        /**
         * @param [elements] - The flat list of element index and element value pairs.
         */
        constructor(elements: number[])

        /**
         * Calculates the position within the vector to insert a given index.
         *
         * This is used internally by insert and upsert. If there are duplicate indexes then
         * the position is returned as if the value for that index were to be updated, but it
         * is the callers responsibility to check whether there is a duplicate at that index
         *
         * @param insertIdx - The index at which the element should be inserted.
         */
        positionForIndex(index: number): number;

        /**
         * Inserts an element at an index within the vector.
         *
         * Does not allow duplicates, will throw an error if there is already an entry
         * for this index.
         *
         * @param insertIdx - The index at which the element should be inserted.
         * @param val - The value to be inserted into the vector.
         */
        insert(insertIdx: number, val: number): void;

        /**
         * Inserts or updates an existing index within the vector.
         *
         * @param insertIdx - The index at which the element should be inserted.
         * @param val - The value to be inserted into the vector.
         * @param fn - A function that is called for updates, the existing value and the
         * requested value are passed as arguments
         */
        upsert(
            insertIdx: number,
            val: number,
            fn: (existingVal: number, val: number) => number
        ): void;

        /**
         * Calculates the magnitude of this vector.
         *
         */
        magnitude(): number;

        /**
         * Calculates the dot product of this vector and another vector.
         *
         * @param otherVector - The vector to compute the dot product with.
         */
        dot(otherVector: Vector): number;

        /**
         * Calculates the cosine similarity between this vector and another
         * vector.
         *
         * @param otherVector - The other vector to calculate the
         * similarity with.
         */
        similarity(otherVector: Vector): number;

        /**
         * Converts the vector to an array of the elements within the vector.
         *
         */
        toArray(): number[];

        /**
         * A JSON serializable representation of the vector.
         *
         */
        toJSON(): number[];
    }

    const version: string;
    type ConfigFunction = (this: Builder, builder: Builder) => void;
}

/**
 * Convenience function for instantiating a new lunr index and configuring it with the default
 * pipeline functions and the passed config function.
 *
 * When using this convenience function a new index will be created with the following functions
 * already in the pipeline:
 *
 *  * lunr.StopWordFilter - filters out any stop words before they enter the index
 *
 *  * lunr.stemmer - stems the tokens before entering the index.
 *
 * Example:
 *
 * ```javascript
 *   var idx = lunr(function () {
 *     this.field('title', 10);
 *     this.field('tags', 100);
 *     this.field('body');
 *
 *     this.ref('cid');
 *
 *     this.pipeline.add(function () {
 *         // some custom pipeline function
 *     });
 *   });
 * ```
 */
declare function lunr(config: lunr.ConfigFunction): lunr.Index;
