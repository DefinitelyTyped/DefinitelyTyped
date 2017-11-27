/*!
 * elasticlunr.Index
 * Copyright (C) @YEAR Oliver Nightingale
 * Copyright (C) @YEAR Wei Song
 */
import { Pipeline } from './pipeline';
import { DocumentStore } from './document_store';

export declare class Index<T = any> {
    private _fields;
    private _ref;
    private _idfCache;
    pipeline: Pipeline;
    documentStore: DocumentStore<T>;
    index: any;
    eventEmitter: any;
    /**
     * elasticlunr.Index is object that manages a search index.  It contains the indexes
     * and stores all the tokens and document lookups.  It also provides the main
     * user facing API for the library.
     *
     * @constructor
     */
    constructor();
    /**
     * Bind a handler to events being emitted by the index.
     *
     * The handler can be bound to many events at the same time.
     *
     * @param {String} [eventName] The name(s) of events to bind the function to.
     * @param {Function} fn The serialised set to load.
     * @memberOf Index
     */
    on(...args: (string | Function)[]): any;
    /**
     * Removes a handler from an event being emitted by the index.
     *
     * @param {String} eventName The name of events to remove the function from.
     * @param {Function} fn The serialised set to load.
     * @memberOf Index
     */
    off(name: string, fn: Function): any;
    /**
     * Loads a previously serialised index.
     *
     * Issues a warning if the index being imported was serialised
     * by a different version of elasticlunr.
     *
     * @param {Object} serialisedData The serialised set to load.
     * @return {Index}
     * @memberOf Index
     */
    static load(serialisedData: any): Index;
    /**
     * Adds a field to the list of fields that will be searchable within documents in the index.
     *
     * Remember that inner index is build based on field, which means each field has one inverted index.
     *
     * Fields should be added before any documents are added to the index, fields
     * that are added after documents are added to the index will only apply to new
     * documents added to the index.
     *
     * @param {String} fieldName The name of the field within the document that should be indexed
     * @return {Index}
     * @memberOf Index
     */
    addField(fieldName: string): this;
    /**
     * Sets the property used to uniquely identify documents added to the index,
     * by default this property is 'id'.
     *
     * This should only be changed before adding documents to the index, changing
     * the ref property without resetting the index can lead to unexpected results.
     *
     * @param {String} refName The property to use to uniquely identify the
     * documents in the index.
     * @param {Boolean} emitEvent Whether to emit add events, defaults to true
     * @return {elasticlunr.Index}
     * @memberOf Index
     */
    setRef(refName: string): this;
    /**
     *
     * Set if the JSON format original documents are save into elasticlunr.DocumentStore
     *
   * Defaultly save all the original JSON documents.
   *
   * @param {Boolean} save Whether to save the original JSON documents.
   * @return {elasticlunr.Index}
   * @memberOf Index
   */
    saveDocument(save: any): this;
    /**
     * Add a JSON format document to the index.
     *
     * This is the way new documents enter the index, this function will run the
     * fields from the document through the index's pipeline and then add it to
     * the index, it will then show up in search results.
     *
     * An 'add' event is emitted with the document that has been added and the index
     * the document has been added to. This event can be silenced by passing false
     * as the second argument to add.
     *
     * @param {Object} doc The JSON format document to add to the index.
     * @param {Boolean} emitEvent Whether or not to emit events, default true.
     * @memberOf Index
     */
    addDoc(doc: T, emitEvent?: boolean): void;
    /**
     * Removes a document from the index by doc ref.
     *
     * To make sure documents no longer show up in search results they can be
     * removed from the index using this method.
     *
     * A 'remove' event is emitted with the document that has been removed and the index
     * the document has been removed from. This event can be silenced by passing false
     * as the second argument to remove.
     *
     * If user setting DocumentStore not storing the documents, then remove doc by docRef is not allowed.
     *
     * @param {String|Integer} docRef The document ref to remove from the index.
     * @param {Boolean} emitEvent Whether to emit remove events, defaults to true
     * @memberOf Index
     */
    removeDocByRef(docRef: any, emitEvent?: boolean): void;
    /**
     * Removes a document from the index.
     * This remove operation could work even the original doc is not store in the DocumentStore.
     *
     * To make sure documents no longer show up in search results they can be
     * removed from the index using this method.
     *
     * A 'remove' event is emitted with the document that has been removed and the index
     * the document has been removed from. This event can be silenced by passing false
     * as the second argument to remove.
     *
     *
     * @param {Object} doc The document ref to remove from the index.
     * @param {Boolean} emitEvent Whether to emit remove events, defaults to true
     * @memberOf Index
     */
    removeDoc(doc: T, emitEvent?: boolean): void;
    /**
     * Updates a document in the index.
     *
     * When a document contained within the index gets updated, fields changed,
     * added or removed, to make sure it correctly matched against search queries,
     * it should be updated in the index.
     *
     * This method is just a wrapper around `remove` and `add`
     *
     * An 'update' event is emitted with the document that has been updated and the index.
     * This event can be silenced by passing false as the second argument to update. Only
     * an update event will be fired, the 'add' and 'remove' events of the underlying calls
     * are silenced.
     *
     * @param {Object} doc The document to update in the index.
     * @param {Boolean} emitEvent Whether to emit update events, defaults to true
     * @see Index.prototype.remove
     * @see Index.prototype.add
     * @memberOf Index
     */
    updateDoc(doc: T, emitEvent?: boolean): void;
    /**
     * Calculates the inverse document frequency for a token within the index of a field.
     *
     * @param {String} token The token to calculate the idf of.
     * @param {String} field The field to compute idf.
     * @see Index.prototype.idf
     * @private
     * @memberOf Index
     */
    idf(term: any, field: any): any;
    /**
     * get fields of current index instance
     *
     * @return {Array}
     */
    getFields(): string[];
    /**
     * Searches the index using the passed query.
     * Queries should be a string, multiple words are allowed.
     *
     * If config is null, will search all fields defaultly, and lead to OR based query.
     * If config is specified, will search specified with query time boosting.
     *
     * All query tokens are passed through the same pipeline that document tokens
     * are passed through, so any language processing involved will be run on every
     * query term.
     *
     * Each query term is expanded, so that the term 'he' might be expanded to
     * 'hello' and 'help' if those terms were already included in the index.
     *
     * Matching documents are returned as an array of objects, each object contains
     * the matching document ref, as set for this index, and the similarity score
     * for this document against the query.
     *
     * @param {String} query The query to search the index with.
     * @param {JSON} userConfig The user query config, JSON format.
     * @return {Object}
     * @see Index.prototype.idf
     * @see Index.prototype.documentVector
     * @memberOf Index
     */
    search(query?: string | {
        [index: string]: string;
    }, userConfig?: any): any[];
    /**
     * search queryTokens in specified field.
     *
     * @param {Array} queryTokens The query tokens to query in this field.
     * @param {String} field Field to query in.
     * @param {elasticlunr.Configuration} config The user query config, JSON format.
     * @return {Object}
     */
    fieldSearch(queryTokens: string[], fieldName: string, config: any): {[index:string]:number};
    /**
     * Merge the scores from one set of tokens into an accumulated score table.
     * Exact operation depends on the op parameter. If op is 'AND', then only the
     * intersection of the two score lists is retained. Otherwise, the union of
     * the two score lists is returned. For internal use only.
     *
     * @param {Object} bool accumulated scores. Should be null on first call.
     * @param {String} scores new scores to merge into accumScores.
     * @param {Object} op merge operation (should be 'AND' or 'OR').
     *
     */
    mergeScores(accumScores: any, scores: any, op: any): any;
    /**
     * Record the occuring query token of retrieved doc specified by doc field.
     * Only for inner user.
     *
     * @param {Object} docTokens a data structure stores which token appears in the retrieved doc.
     * @param {String} token query token
     * @param {Object} docs the retrieved documents of the query token
     *
     */
    fieldSearchStats(docTokens: any, token: any, docs: any): void;
    /**
     * coord norm the score of a doc.
     * if a doc contain more query tokens, then the score will larger than the doc
     * contains less query tokens.
     *
     * only for inner use.
     *
     * @param {Object} results first results
     * @param {Object} docs field search results of a token
     * @param {Integer} n query token number
     * @return {Object}
     */
    coordNorm(scores: {[field: string]: number}, docTokens: {[field: string]: {length: number}}, n: number): {[field: string]: number};
    /**
     * Returns a representation of the index ready for serialisation.
     *
     * @return {Object}
     * @memberOf Index
     */
    toJSON(): {
        version: string;
        fields: string[];
        ref: string;
        documentStore: DocumentStore<T>;
        index: {};
        pipeline: string[];
    };
    /**
     * Applies a plugin to the current index.
     *
     * A plugin is a function that is called with the index as its context.
     * Plugins can be used to customise or extend the behaviour the index
     * in some way. A plugin is just a function, that encapsulated the custom
     * behaviour that should be applied to the index.
     *
     * The plugin function will be called with the index as its argument, additional
     * arguments can also be passed when calling use. The function will be called
     * with the index as its context.
     *
     * Example:
     *
     *     var myPlugin = function (idx, arg1, arg2) {
     *       // `this` is the index to be extended
     *       // apply any extensions etc here.
     *     }
     *
     *     var idx = elasticlunr(function () {
     *       this.use(myPlugin, 'arg1', 'arg2')
     *     })
     *
     * @param {Function} plugin The plugin to apply.
     * @memberOf Index
     */
    use(plugin: Function): void;
}
