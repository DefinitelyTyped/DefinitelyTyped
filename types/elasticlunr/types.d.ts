import { Index } from "./indexr";
import { Configuration } from "./configuration";
import { DocumentStore } from "./document_store";
import { EventEmitter } from "./event_emitter";
import { InvertedIndex } from "./inverted_indexr";
import { Pipeline } from "./pipeline";
import { stemmer } from "./stemmer";
import { trimmer } from "./trimmer";
import { tokenizer, Tokenizer } from './tokenizer';
import { utils } from "./utils";
import { addStopWords, clearStopWords, defaultStopWords, resetStopWords, StopWordFilter } from "./stop_word_filter";


export interface Elasticlunr {
    /**
     * Convenience function for instantiating a new elasticlunr index and configuring it
     * with the default pipeline functions and the passed config function.
     *
     * When using this convenience function a new index will be created with the
     * following functions already in the pipeline:
     *
     * 1. elasticlunr.trimmer - trim non-word character
     * 2. elasticlunr.StopWordFilter - filters out any stop words before they enter the
     * index
     * 3. elasticlunr.stemmer - stems the tokens before entering the index.
     *
     *
     * Example:
     *
     *     var idx = elasticlunr(function () {
     *       this.addField('id');
     *       this.addField('title');
     *       this.addField('body');
     *
     *       //this.setRef('id'); // default ref is 'id'
     *
     *       this.pipeline.add(function () {
     *         // some custom pipeline function
     *       });
     *     });
     *
     *    idx.addDoc({
     *      id: 1,
     *      title: 'Oracle released database 12g',
     *      body: 'Yestaday, Oracle has released their latest database, named 12g, more robust. this product will increase Oracle profit.'
     *    });
     *
     *    idx.addDoc({
     *      id: 2,
     *      title: 'Oracle released annual profit report',
     *      body: 'Yestaday, Oracle has released their annual profit report of 2015, total profit is 12.5 Billion.'
     *    });
     *
     *    # simple search
     *    idx.search('oracle database');
     *
     *    # search with query-time boosting
     *    idx.search('oracle database', {fields: {title: {boost: 2}, body: {boost: 1}}});
     *
     * @param {Function} config A function that will be called with the new instance
     * of the elasticlunr.Index as both its context and first parameter. It can be used to
     * customize the instance of new elasticlunr.Index.
     * @namespace
     * @module
     * @return {elasticlunr.Index}
     *
     */
    <T = any>(config: (this: Index<T>) => void): Index<T>;
    version: string;
    Index: typeof Index;
    Configuration: typeof Configuration;
    DocumentStore: typeof DocumentStore;
    EventEmitter: typeof EventEmitter;
    InvertedIndex: typeof InvertedIndex;
    Pipeline: typeof Pipeline;
    stemmer: typeof stemmer;
    trimmer: typeof trimmer;
    utils: typeof utils;
    /**
     * A function for splitting a string into tokens.
     * Currently English is supported as default.
     * Uses `elasticlunr.tokenizer.seperator` to split strings, you could change
     * the value of this property to set how you want strings are split into tokens.
     *
     * IMPORTANT: use elasticlunr.tokenizer.seperator carefully, if you are not familiar with
     * text process, then you'd better not change it.
     *
     * @module
     * @param {String} str The string that you want to tokenize.
     * @see elasticlunr.tokenizer.seperator
     * @return {Array}
     */
    tokenizer: Tokenizer;
    /**
     * Add customized stop words
     * user could use this function to add customized stop words
     *
     * @params {Array} words customized stop words
     * @return {null}
     */
    addStopWords: typeof addStopWords;
    /**
     * Remove predefined stop words
     * if user want to use customized stop words, user could use this function to delete
     * all predefined stopwords.
     *
     * @return {null}
     */
    clearStopWords: typeof clearStopWords;
    defaultStopWords: typeof defaultStopWords;
    /**
     * Reset to default stop words
     * user could use this function to restore default stop words
     *
     * @return {null}
     */
    resetStopWords: typeof resetStopWords;
    /**
     * elasticlunr.stopWordFilter is an English language stop words filter, any words
     * contained in the stop word list will not be passed through the filter.
     *
     * This is intended to be used in the Pipeline. If the token does not pass the
     * filter then undefined will be returned.
     * Currently this StopwordFilter using dictionary to do O(1) time complexity stop word filtering.
     *
     * @module
     * @param {String} token The token to pass through the filter
     * @return {String}
     * @see elasticlunr.Pipeline
     */
    stopWordFilter: StopWordFilter;
}
