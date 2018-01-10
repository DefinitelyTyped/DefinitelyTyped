// Type definitions for lunr.js 0.5
// Project: https://github.com/olivernn/lunr.js
// Definitions by: Sebastian Lenz <https://github.com/sebastian-lenz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/**
 * lunr - http://lunrjs.com - A bit like Solr, but much smaller and not as bright - 0.5.4
 * Copyright (C) 2014 Oliver Nightingale
 * MIT Licensed
 * @license
 */
declare namespace lunr {
    const version: string;

    /**
     * A function for splitting a string into tokens ready to be inserted into
     * the search index. Uses `lunr.tokenizer.seperator` to split strings, change
     * the value of this property to change how strings are split into tokens.
     *
     * @param obj The string to convert into tokens
     * @see lunr.tokenizer.seperator
     */
    function tokenizer(obj: any): string[];

    type TokenizerFunction = (obj: any) => string[];

    namespace tokenizer {
        /**
         * The sperator used to split a string into tokens. Override this property to change the behaviour of
         * `lunr.tokenizer` behaviour when tokenizing strings. By default this splits on whitespace and hyphens.
         *
         * @see lunr.tokenizer
         *
         * (Note: this is misspelled in the original API, kept for compatibility sake)
         */
        const seperator: RegExp | string;

        const label: string;

        const registeredFunctions: {[label: string]: TokenizerFunction};

        /**
         * Register a tokenizer function.
         *
         * Functions that are used as tokenizers should be registered if they are to be used with a serialised index.
         *
         * Registering a function does not add it to an index, functions must still be associated with a specific index for them to be used when indexing and searching documents.
         *
         * @param fn The function to register.
         * @param label The label to register this function with
         */
        function registerFunction(fn: TokenizerFunction, label: string): void;

        /**
         * Loads a previously serialised tokenizer.
         *
         * A tokenizer function to be loaded must already be registered with lunr.tokenizer.
         * If the serialised tokenizer has not been registered then an error will be thrown.
         *
         * @param label The label of the serialised tokenizer.
         */
        function load(label: string): TokenizerFunction;
    }

    /**
     * lunr.stemmer is an english language stemmer, this is a JavaScript implementation of
     * the PorterStemmer taken from http://tartaurs.org/~martin
     *
     * @param token  The string to stem
     */
    function stemmer(token: string): string;

    /**
     * lunr.stopWordFilter is an English language stop word list filter, any words contained
     * in the list will not be passed through the filter.
     *
     * This is intended to be used in the Pipeline. If the token does not pass the filter then
     * undefined will be returned.
     *
     * @param token  The token to pass through the filter
     */
    function stopWordFilter(token: string): string;

    namespace stopWordFilter {
        const stopWords: SortedSet<string>;
    }

    /**
     * lunr.trimmer is a pipeline function for trimming non word characters from the beginning
     * and end of tokens before they enter the index.
     *
     * This implementation may not work correctly for non latin characters and should either
     * be removed or adapted for use with languages with non-latin characters.
     * @param token  The token to pass through the filter
     */
    function trimmer(token: string): string;

    /**
     * lunr.EventEmitter is an event emitter for lunr. It manages adding and removing event handlers
     * and triggering events and their handlers.
     */
    class EventEmitter {
        /**
         * Can bind a single function to many different events in one call.
         *
         * @param eventName  The name(s) of events to bind this function to.
         * @param handler    The function to call when an event is fired. Binds a handler
         *                   function to a specific event(s).
         */
        addListener(eventName: string, handler: Function): void;
        addListener(eventName: string, eventName2: string, handler: Function): void;
        addListener(eventName: string, eventName2: string, eventName3: string, handler: Function): void;
        addListener(eventName: string, eventName2: string, eventName3: string, eventName4: string, handler: Function): void;
        addListener(eventName: string, eventName2: string, eventName3: string, eventName4: string, eventName5: string, handler: Function): void;

        /**
         * Removes a handler function from a specific event.
         *
         * @param eventName  The name of the event to remove this function from.
         * @param handler    The function to remove from an event.
         */
        removeListener(eventName: string, handler: Function): void;

        /**
         * Calls all functions bound to the given event.
         *
         * Additional data can be passed to the event handler as arguments to emit after the event name.
         *
         * @param eventName The name of the event to emit.
         */
        emit(eventName: string, ...args: any[]): void;

        /**
         * Checks whether a handler has ever been stored against an event.
         *
         * @param eventName  The name of the event to check.
         */
        hasHandler(eventName: string): boolean;
    }

    type IPipelineFunction = (token: string, tokenIndex?: number, tokens?: string[]) => string;

    /**
     * lunr.Pipelines maintain an ordered list of functions to be applied to all tokens in documents
     * entering the search index and queries being ran against the index.
     *
     * An instance of lunr.Index created with the lunr shortcut will contain a pipeline with a stop
     * word filter and an English language stemmer. Extra functions can be added before or after either
     * of these functions or these default functions can be removed.
     *
     * When run the pipeline will call each function in turn, passing a token, the index of that token
     * in the original list of all tokens and finally a list of all the original tokens.
     *
     * The output of functions in the pipeline will be passed to the next function in the pipeline.
     * To exclude a token from entering the index the function should return undefined, the rest of
     * the pipeline will not be called with this token.
     *
     * For serialisation of pipelines to work, all functions used in an instance of a pipeline should
     * be registered with lunr.Pipeline. Registered functions can then be loaded. If trying to load a
     * serialised pipeline that uses functions that are not registered an error will be thrown.
     *
     * If not planning on serialising the pipeline then registering pipeline functions is not necessary.
     */
    class Pipeline {
        registeredFunctions: {[label: string]: Function};

        /**
         * Register a function with the pipeline.
         *
         * Functions that are used in the pipeline should be registered if the pipeline needs to be
         * serialised, or a serialised pipeline needs to be loaded.
         *
         * Registering a function does not add it to a pipeline, functions must still be added to instances
         * of the pipeline for them to be used when running a pipeline.
         *
         * @param fn     The function to check for.
         * @param label  The label to register this function with
         */
        registerFunction(fn: IPipelineFunction, label: string): void;

        /**
         * Warns if the function is not registered as a Pipeline function.
         *
         * @param fn  The function to check for.
         */
        warnIfFunctionNotRegistered(fn: IPipelineFunction): void;

        /**
         * Adds new functions to the end of the pipeline.
         *
         * Logs a warning if the function has not been registered.
         *
         * @param functions  Any number of functions to add to the pipeline.
         */
        add(...functions: IPipelineFunction[]): void;

        /**
         * Adds a single function after a function that already exists in the pipeline.
         *
         * Logs a warning if the function has not been registered.
         *
         * @param existingFn  A function that already exists in the pipeline.
         * @param newFn       The new function to add to the pipeline.
         */
        after(existingFn: IPipelineFunction, newFn: IPipelineFunction): void;

        /**
         * Adds a single function before a function that already exists in the pipeline.
         *
         * Logs a warning if the function has not been registered.
         *
         * @param existingFn  A function that already exists in the pipeline.
         * @param newFn       The new function to add to the pipeline.
         */
        before(existingFn: IPipelineFunction, newFn: IPipelineFunction): void;

        /**
         * Removes a function from the pipeline.
         *
         * @param fn  The function to remove from the pipeline.
         */
        remove(fn: IPipelineFunction): void;

        /**
         * Runs the current list of functions that make up the pipeline against
         * the passed tokens.
         *
         * @param tokens  The tokens to run through the pipeline.
         */
        run(tokens: string[]): string[];

        /**
         * Resets the pipeline by removing any existing processors.
         */
        reset(): void;

        /**
         * Returns a representation of the pipeline ready for serialisation.
         */
        toJSON(): any;

        /**
         * Loads a previously serialised pipeline.
         *
         * All functions to be loaded must already be registered with lunr.Pipeline. If any function from
         * the serialised data has not been registered then an error will be thrown.
         *
         * @param serialised  The serialised pipeline to load.
         */
        static load(serialised: any): Pipeline;
    }

    /**
     * lunr.Vectors implement vector related operations for a series of elements.
     */
    class Vector {
        list: Node;

        /**
         * Calculates the magnitude of this vector.
         */
        magnitude(): number;

        /**
         * Calculates the dot product of this vector and another vector.
         * @param otherVector  The vector to compute the dot product with.
         */
        dot(otherVector: Vector): number;

        /**
         * Calculates the cosine similarity between this vector and another vector.
         *
         * @param otherVector  The other vector to calculate the
         */
        similarity(otherVector: Vector): number;
    }

    /**
     * lunr.Vector.Node is a simple struct for each node in a lunr.Vector.
     */
    class Node {
        /**
         * The index of the node in the vector.
         */
        idx: number;

        /**
         * The data at this node in the vector.
         */
        val: number;

        /**
         * The node directly after this node in the vector.
         */
        next: Node;

        /**
         * @param idx   The index of the node in the vector.
         * @param val   The data at this node in the vector.
         * @param next  The node directly after this node in the vector.
         */
        constructor(idx: number, val: number, next: Node);
    }

    /**
     * lunr.SortedSets are used to maintain an array of unique values in a sorted order.
     */
    class SortedSet<T> {
        elements: T[];

        length: number;

        /**
         * Inserts new items into the set in the correct position to maintain the order.
         *
         * @param values  The objects to add to this set.
         */
        add(...values: T[]): void;

        /**
         * Converts this sorted set into an array.
         */
        toArray(): T[];

        /**
         * Creates a new array with the results of calling a provided function on
         * every element in this sorted set.
         *
         * Delegates to Array.prototype.map and has the same signature.
         *
         * @param fn   The function that is called on each element of the
         * @param ctx  An optional object that can be used as the context
         */
        map(fn: Function, ctx: any): T[];

        /**
         * Executes a provided function once per sorted set element.
         *
         * Delegates to Array.prototype.forEach and has the same signature.
         *
         * @param fn   The function that is called on each element of the
         * @param ctx  An optional object that can be used as the context
         */
        forEach(fn: Function, ctx: any): any;

        /**
         * Returns the index at which a given element can be found in the sorted
         * set, or -1 if it is not present.
         *
         * @param elem   The object to locate in the sorted set.
         * @param start  An optional index at which to start searching from
         * @param end    An optional index at which to stop search from within
         */
        indexOf(elem: T, start?: number, end?: number): number;

        /**
         * Returns the position within the sorted set that an element should be
         * inserted at to maintain the current order of the set.
         *
         * This function assumes that the element to search for does not already exist
         * in the sorted set.
         *
         * @param elem - The elem to find the position for in the set
         * @param start - An optional index at which to start searching from
         * @param end - An optional index at which to stop search from within
         */
        locationFor(elem: T, start?: number, end?: number): number;

        /**
         * Creates a new lunr.SortedSet that contains the elements in the
         * intersection of this set and the passed set.
         *
         * @param otherSet  The set to intersect with this set.
         */
        intersect(otherSet: SortedSet<T>): SortedSet<T>;

        /**
         * Creates a new lunr.SortedSet that contains the elements in the union of this
         * set and the passed set.
         *
         * @param otherSet  The set to union with this set.
         */
        union(otherSet: SortedSet<T>): SortedSet<T>;

        /**
         * Makes a copy of this set
         */
        clone(): SortedSet<T>;

        /**
         * Returns a representation of the sorted set ready for serialisation.
         */
        toJSON(): any;

        /**
         * Loads a previously serialised sorted set.
         *
         * @param serialisedData  The serialised set to load.
         */
        static load<T>(serialisedData: T[]): SortedSet<T>;
    }

    interface IndexField {
        /**
         * The name of the field within the document that
         */
        name: string;

        /**
         * An optional boost that can be applied to terms in this field.
         */
        boost: number;
    }

    interface IndexSearchResult {
        ref: any;

        score: number;
    }

    /**
     * lunr.Index is object that manages a search index. It contains the indexes and stores
     * all the tokens and document lookups. It also provides the main user facing API for
     * the library.
     */
    class Index {
        eventEmitter: EventEmitter;

        documentStore: Store<string>;

        tokenStore: TokenStore;

        corpusTokens: SortedSet<string>;

        pipeline: Pipeline;

        _fields: IndexField[];

        _ref: string;

        _idfCache: {[key: string]: string};

        /**
         * Bind a handler to events being emitted by the index.
         *
         * The handler can be bound to many events at the same time.
         *
         * @param eventName  The name(s) of events to bind the function to.
         * @param handler    The function to call when an event is fired. Binds a handler
         *                   function to a specific event(s).
         */
        on(eventName: string, handler: Function): void;
        on(eventName: string, eventName2: string, handler: Function): void;
        on(eventName: string, eventName2: string, eventName3: string, handler: Function): void;
        on(eventName: string, eventName2: string, eventName3: string, eventName4: string, handler: Function): void;
        on(eventName: string, eventName2: string, eventName3: string, eventName4: string, eventName5: string, handler: Function): void;

        /**
         * Removes a handler from an event being emitted by the index.
         *
         * @param eventName  The name of events to remove the function from.
         * @param handler    The serialised set to load.
         */
        off(eventName: string, handler: Function): void;

        /**
         * Adds a field to the list of fields that will be searchable within documents in the index.
         *
         * An optional boost param can be passed to affect how much tokens in this field rank in
         * search results, by default the boost value is 1.
         *
         * Fields should be added before any documents are added to the index, fields that are added
         * after documents are added to the index will only apply to new documents added to the index.
         *
         * @param fieldName  The name of the field within the document that
         * @param options    An optional boost that can be applied to terms in this field.
         */
        field(fieldName: string, options?: {boost?: number}): Index;

        /**
         * Sets the property used to uniquely identify documents added to the index, by default this
         * property is 'id'.
         *
         * This should only be changed before adding documents to the index, changing the ref property
         * without resetting the index can lead to unexpected results.
         *
         * @refName  The property to use to uniquely identify the
         */
        ref(refName: string): Index;

        /**
         * Add a document to the index.
         *
         * This is the way new documents enter the index, this function will run the fields from the
         * document through the index's pipeline and then add it to the index, it will then show up
         * in search results.
         *
         * An 'add' event is emitted with the document that has been added and the index the document
         * has been added to. This event can be silenced by passing false as the second argument to add.
         *
         * @param doc        The document to add to the index.
         * @param emitEvent  Whether or not to emit events, default true.
         */
        add(doc: any, emitEvent?: boolean): void;

        /**
         * Removes a document from the index.
         *
         * To make sure documents no longer show up in search results they can be removed from the
         * index using this method.
         *
         * The document passed only needs to have the same ref property value as the document that was
         * added to the index, they could be completely different objects.
         *
         * A 'remove' event is emitted with the document that has been removed and the index the
         * document has been removed from. This event can be silenced by passing false as the second
         * argument to remove.
         *
         * @param doc        The document to remove from the index.
         * @param emitEvent  Whether to emit remove events, defaults to true
         */
        remove(doc: any, emitEvent?: boolean): void;

        /**
         * Updates a document in the index.
         *
         * When a document contained within the index gets updated, fields changed, added or removed,
         * to make sure it correctly matched against search queries, it should be updated in the index.
         *
         * This method is just a wrapper around [[remove]] and [[add]].
         *
         * An 'update' event is emitted with the document that has been updated and the index.
         * This event can be silenced by passing false as the second argument to update. Only an
         * update event will be fired, the 'add' and 'remove' events of the underlying calls are
         * silenced.
         *
         * @param doc        The document to update in the index.
         * @param emitEvent  Whether to emit update events, defaults to true
         */
        update(doc: any, emitEvent?: boolean): void;

        /**
         * Calculates the inverse document frequency for a token within the index.
         *
         * @param token  The token to calculate the idf of.
         */
        idf(token: string): string;

        /**
         * Searches the index using the passed query.
         *
         * Queries should be a string, multiple words are allowed and will lead to an AND based
         * query, e.g. idx.search('foo bar') will run a search for documents containing both
         * 'foo' and 'bar'.
         *
         * All query tokens are passed through the same pipeline that document tokens are passed
         * through, so any language processing involved will be run on every query term.
         *
         * Each query term is expanded, so that the term 'he' might be expanded to 'hello'
         * and 'help' if those terms were already included in the index.
         *
         * Matching documents are returned as an array of objects, each object contains the
         * matching document ref, as set for this index, and the similarity score for this
         * document against the query.
         *
         * @param query  The query to search the index with.
         */
        search(query: string): IndexSearchResult[];

        /**
         * Generates a vector containing all the tokens in the document matching the
         * passed documentRef.
         *
         * The vector contains the tf-idf score for each token contained in the document with
         * the passed documentRef. The vector will contain an element for every token in the
         * indexes corpus, if the document does not contain that token the element will be 0.
         *
         * @param documentRef  The ref to find the document with.
         */
        documentVector(documentRef: string): Vector;

        /**
         * Returns a representation of the index ready for serialisation.
         */
        toJSON(): any;

        /**
         * Applies a plugin to the current index.
         *
         * A plugin is a function that is called with the index as its context. Plugins can be
         * used to customise or extend the behaviour the index in some way. A plugin is just a
         * function, that encapsulated the custom behaviour that should be applied to the index.
         *
         * The plugin function will be called with the index as its argument, additional arguments
         * can also be passed when calling use. The function will be called with the index as
         * its context.
         *
         * Example:
         *
         * ```javascript
         * var myPlugin = function(idx, arg1, arg2) {
         *     // `this` is the index to be extended
         *     // apply any extensions etc here.
         * };
         *
         * var idx = lunr(function() {
         *     this.use(myPlugin, 'arg1', 'arg2');
         * });
         * ```
         *
         * @param plugin  The plugin to apply.
         */
        use(plugin: Function, ...args: any[]): void;

        /**
         * Loads a previously serialised index.
         *
         * Issues a warning if the index being imported was serialised by a different version
         * of lunr.
         *
         * @param serialisedData  The serialised set to load.
         */
        static load(serialisedData: any): Index;
    }

    /**
     * lunr.Store is a simple key-value store used for storing sets of tokens for documents
     * stored in index.
     */
    class Store<T> {
        store: {[id: string]: SortedSet<T>};

        length: number;

        /**
         * Stores the given tokens in the store against the given id.
         *
         * @param id      The key used to store the tokens against.
         * @param tokens  The tokens to store against the key.
         */
        set(id: string, tokens: SortedSet<T>): void;

        /**
         * Retrieves the tokens from the store for a given key.
         *
         * @param id  The key to lookup and retrieve from the store.
         */
        get(id: string): SortedSet<T>;

        /**
         * Checks whether the store contains a key.
         *
         * @param id  The id to look up in the store.
         */
        has(id: string): boolean;

        /**
         * Removes the value for a key in the store.
         *
         * @param id  The id to remove from the store.
         */
        remove(id: string): void;

        /**
         * Returns a representation of the store ready for serialisation.
         */
        toJSON(): any;

        /**
         * Loads a previously serialised store.
         *
         * @param serialisedData  The serialised store to load.
         */
        static load(serialisedData: any): Store<any>;
    }

    interface TokenDocument {
        ref: number;

        tf: number;
    }

    /**
     * lunr.TokenStore is used for efficient storing and lookup of the reverse index of token
     * to document ref.
     */
    class TokenStore {
        root: {[token: string]: TokenStore};

        docs: {[ref: string]: TokenDocument};

        length: number;

        /**
         * Adds a new token doc pair to the store.
         *
         * By default this function starts at the root of the current store, however it can
         * start at any node of any token store if required.
         *
         * @param token  The token to store the doc under
         * @param doc    The doc to store against the token
         * @param root   An optional node at which to start looking for the
         */
        add(token: string, doc: TokenDocument, root?: TokenStore): void;

        /**
         * Checks whether this key is contained within this lunr.TokenStore.
         *
         * @param token  The token to check for
         */
        has(token: string): boolean;

        /**
         * Retrieve a node from the token store for a given token.
         *
         * @param token  The token to get the node for.
         */
        getNode(token: string): TokenStore;

        /**
         * Retrieve the documents for a node for the given token.
         *
         * By default this function starts at the root of the current store, however it can
         * start at any node of any token store if required.
         *
         * @param token  The token to get the documents for.
         * @param root   An optional node at which to start.
         */
        get(token: string, root: TokenStore): {[ref: string]: TokenDocument};

        count(token: string, root: TokenStore): number;

        /**
         * Remove the document identified by ref from the token in the store.
         *
         * @param token  The token to get the documents for.
         * @param ref    The ref of the document to remove from this token.
         */
        remove(token: string, ref: string): void;

        /**
         * Find all the possible suffixes of the passed token using tokens currently in
         * the store.
         *
         * @param token  The token to expand.
         */
        expand(token: string, memo?: string[]): string[];

        /**
         * Returns a representation of the token store ready for serialisation.
         */
        toJSON(): any;

        /**
         * Loads a previously serialised token store.
         *
         * @param serialisedData  The serialised token store to load.
         */
        static load(serialisedData: any): TokenStore;
    }

    /**
     * A namespace containing utils for the rest of the lunr library
     */
    namespace utils {
        /**
         * Print a warning message to the console.
         *
         * @param message The message to be printed.
         */
        function warn(message: any): void;

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
 * var idx = lunr(function () {
 *     this.field('title', 10);
 *     this.field('tags', 100);
 *     this.field('body');
 *
 *     this.ref('cid');
 *
 *     this.pipeline.add(function () {
 *         // some custom pipeline function
 *     });
 * });
 * ```
 */
declare function lunr(config: Function): lunr.Index;

export = lunr;
export as namespace lunr;
