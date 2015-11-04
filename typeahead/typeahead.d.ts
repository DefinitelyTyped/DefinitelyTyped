// Type definitions for typeahead.js 0.10.4
// Project: http://twitter.github.io/typeahead.js/
// Definitions by: Ivaylo Gochkov <https://github.com/igochkov/>, Gidon Junge <https://github.com/gjunge/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../jquery/jquery.d.ts"/>

interface JQuery {

    /**
     * Destroys previously initialized typeaheads. This entails reverting
     * DOM modifications and removing event handlers.
      *
      * @constructor
     * @param methodName Method 'destroy'
      */
    typeahead(methodName: 'destroy'): JQuery;

    /**
     * Opens the dropdown menu of typeahead. Note that being open does not mean that the menu is visible.
     * The menu is only visible when it is open and has content.
      *
      * @constructor
     * @param methodName Method 'open'
      */
    typeahead(methodName: 'open'): JQuery;

    /**
     * Closes the dropdown menu of typeahead.
     *
     * @constructor
     * @param methodName Method 'close'
     */
    typeahead(methodName: 'close'): JQuery;

    /**
     * Returns the current value of the typeahead.
     * The value is the text the user has entered into the input element.
      *
      * @constructor
     * @param methodName Method 'val'
      */
    typeahead(methodName: 'val'): string;

    /**
      * Sets the value of the typeahead. This should be used in place of jQuery#val.
      *
      * @constructor
      * @param methodName Method 'val'
      * @param query The value to be set
      */
    typeahead(methodName: 'val', val: string): JQuery;

    /**
      * Accommodates the val overload.
      *
      * @constructor
      * @param methodName Method name ('val')
      */
    typeahead(methodName: string): string;


    /**
      * Accommodates multiple overloads.
      *
      * @constructor
      * @param methodName Method name
      * @param query The query to be set in case method 'val' is used.
      */
    typeahead(methodName: string, query: string): JQuery;

    /**
      * Accomodates specifying options such as hint and highlight.
      * This is in correspondence to the examples mentioned in http://twitter.github.io/typeahead.js/examples/
      *
      * @constructor
      * @param options ('hint' or 'highlight' or 'minLength' all of which are optional)
      * @param datasets Array of datasets
      */
    typeahead(options: Twitter.Typeahead.Options, datasets: Twitter.Typeahead.Dataset[]): JQuery;

    /**
      * Accomodates specifying options such as hint and highlight.
      * This is in correspondence to the examples mentioned in http://twitter.github.io/typeahead.js/examples/
      *
      * @constructor
      * @param options ('hint' or 'highlight' or 'minLength' all of which are optional)
      * @param datasets One or more datasets passed in as arguments.
      */
    typeahead(options: Twitter.Typeahead.Options, ... datasets: Twitter.Typeahead.Dataset[]): JQuery;
}

declare module Twitter.Typeahead {
    /**
      * A dataset is an object that defines a set of data that hydrates
      * suggestions. Typeaheads can be backed by multiple datasets.
      * Given a query, a typeahead instance will inspect its backing
      * datasets and display relevant suggestions to the end-user.
      */
    interface Dataset {
        /**
         * The backing data source for suggestions.
         * Expected to be a function with the signature (query, cb).
         * It is expected that the function will compute the suggestion set (i.e. an array of JavaScript objects) for query and then invoke cb with said set.
         * cb can be invoked synchronously or asynchronously.
         *
          */
        source: (query: string, cb: (result: any) => void) => void;

        /**
          * The name of the dataset.
          * This will be appended to tt-dataset- to form the class name of the containing DOM element.
          * Must only consist of underscores, dashes, letters (a-z), and numbers.
          * Defaults to a random number.
          */
        name?: string;

        /**
         * For a given suggestion object, determines the string representation of it.
         * This will be used when setting the value of the input control after a suggestion is selected. Can be either a key string or a function that transforms a suggestion object into a string.
         * Defaults to value.
         */
        displayKey?: string | ((obj: any) => string);

        /**
         * A hash of templates to be used when rendering the dataset.
         * Note a precompiled template is a function that takes a JavaScript object as its first argument and returns a HTML string.
          */
        templates?: Templates;
    }


    interface Templates {

        /**
         * Rendered when 0 suggestions are available for the given query.
         * Can be either a HTML string or a precompiled template.
         * If it's a precompiled template, the passed in context will contain query
          */
        empty?: any;

        /**
         * Rendered at the bottom of the dataset.
         * Can be either a HTML string or a precompiled template.
         * If it's a precompiled template, the passed in context will contain query and isEmpty.
          */
        footer?: any;

        /**
         * Rendered at the top of the dataset.
         * Can be either a HTML string or a precompiled template.
         * If it's a precompiled template, the passed in context will contain query and isEmpty.
          */
        header?: any;
        
        /**
         * Rendered when 0 suggestions are available for the given query.
         * Can be either a HTML string or a precompiled template.
         * If it's a precompiled template, the passed in context will contain query.
          */
        notFound?: (query: string) => string;
        
        /**
         * Rendered when 0 synchronous suggestions are available but asynchronous suggestions are expected.
         * Can be either a HTML string or a precompiled template.
         * If it's a precompiled template, the passed in context will contain query.
          */
        pending?: (query: string) => string;

        /**
         * Used to render a single suggestion.
         * If set, this has to be a precompiled template.
         * The associated suggestion object will serve as the context.
         * Defaults to the value of displayKey wrapped in a p tag i.e. <p>{{value}}</p>.
          */
        suggestion?: (datum: any) => string;

    }


     /**
      * When initializing a typeahead, there are a number of options you can configure.
      */
    interface Options {
      /**
        * highlight:  If true, when suggestions are rendered,
        * pattern matches for the current query in text nodes will be wrapped in a strong element.
        * Defaults to false.
        */
      highlight?: boolean;

      /**
        * If false, the typeahead will not show a hint. Defaults to true.
        */
      hint?: boolean;

      /**
        * The minimum character length needed before suggestions start getting rendered. Defaults to 1.
        */
      minLength?: number;
    }
}

declare module Bloodhound
{
  interface BloodhoundOptions<T>
  {
    /**
    * Transforms a datum into an array of string tokens
    *
    * @constructor
    * @param datum individual units that compose the dataset
    */
    datumTokenizer?: any;
    /**
    * Transforms a query into an array of string tokens
    *
    * @constructor
    * @param query tokenizer query
    */
    queryTokenizer?: any;
    /**
    *  The max number of suggestions to return from Bloodhound#get.
    * If not reached, the data source will attempt to backfill the suggestions from remote. Defaults to 5
    */
    limit?: number;
    /**
    *  If set, this is expected to be a function with the signature (remoteMatch, localMatch) that returns true if the datums are duplicates or false otherwise.
    *  If not set, duplicate detection will not be performed.
    */
    dupDetector?: (remoteMatch: T, localMatch: T) => boolean;
    /**
    * A compare function used to sort matched datums for a given query.
    */
    sorter?: (a: T, b: T) => number;
    /**
    *An array of datums or a function that returns an array of datums.
    */
    local?: () => T[];
    /**
    * Can be a URL to a JSON file containing an array of datums or, if more configurability is needed, a prefetch options hash.
    */
    prefetch?: PrefetchOptions<T>;
    /**
    *  Can be a URL to fetch suggestions from when the data provided by local and prefetch is insufficient or, if more configurability is needed, a remote options hash.
    */
    remote?: RemoteOptions<T>;
  }

  /**
  * Prefetched data is fetched and processed on initialization.
  * If the browser supports localStorage, the processed data will be cached
  * there to prevent additional network requests on subsequent page loads.
  */
  interface PrefetchOptions<T>
  {
    /**
    * A URL to a JSON file containing an array of datums. Required.
    */
    url: string;
    /**
    * The time (in milliseconds) the prefetched data should be cached
    * in localStorage. Defaults to 86400000 (1 day).
    */
    ttl?: number;
    /**
    * A function that transforms the response body into an array of datums.
    *
    * @param parsedResponse Response body
    */
    filter?: (parsedResponse: any) => T[];
    /** The key that data will be stored in local storage under. Defaults to value of url.
    *
    */
    cacheKey?: string;
    /**
    * A string used for thumbprinting prefetched data. If this doesn't match what's stored in local storage, the data will be refetched.
    */
    thumbprint?: string;
    /**
    * The ajax settings object passed to jQuery.ajax.
    */
    ajax?: JQueryAjaxSettings;
  }

  /**
  * Remote data is only used when the data provided by local and prefetch
  * is insufficient. In order to prevent an obscene number of requests
  * being made to remote endpoint, typeahead.js rate-limits remote requests.
  */
  interface RemoteOptions<T>
  {
    /**
    * A URL to make requests to when the data provided by local and
    * prefetch is insufficient. Required.
    */
    url: string;
    /**
    * The pattern in url that will be replaced with the user's query
    * when a request is made. Defaults to %QUERY.
    */
    wildcard?: string;
    /**
    * Overrides the request URL. If set, no wildcard substitution will
    * be performed on url.
    *
    * @param url Replacement URL
    * @param uriEncodedQuery Encoded query
    * @returns A valid URL
    */
    replace?: (url: string, uriEncodedQuery: string) => string;
    /**
    * The function used for rate-limiting network requests.
    * Can be either 'debounce' or 'throttle'. Defaults to 'debounce'.
    */
    rateLimitby?: string;
    /**
    * The time interval in milliseconds that will be used by rateLimitFn.
    * Defaults to 300.
    */
    rateLimitWait?: number;

    /**
    * Transforms the response body into an array of datums.
    *
    * @param parsedResponse Response body
    */
    filter?: (parsedResponse: any) => T[];
    /**
    * The ajax settings object passed to jQuery.ajax.
    */
    ajax?: JQueryAjaxSettings;
    
    /**
     * A function that provides a hook to allow you to prepare the settings object passed to transport
     * when a request is about to be made. The function signature should be prepare(query, settings),
     * where query is the query #search was called with and settings is the default settings object 
     * created internally by the Bloodhound instance. The prepare function should return a settings object.
     * [Note: Added in 0.11.1]
     * 
     * @param query The query #search was called with.
     * @param settings The default settings object created internally by Bloodhound.
     * @returns A JqueryAjaxSettings object.
     */
    prepare?: (query: string, settings: JQueryAjaxSettings) => JQueryAjaxSettings;
  }

  /**
  * The most common tokenization methods.
  */
  interface Tokenizers
  {
    /**
    * Split a given string on whitespace characters.
    */
    whitespace(query: string): string[];
    /**
    * Split a given string on non-word characters.
    */
    nonword(query: string): string[];

   /**
   * Instances of the most common tokenization methods.
   */
    obj: ObjTokenizer;
  }

  interface ObjTokenizer
  {
    /**
    * Split a given string on whitespace characters.
    */
    whitespace(query: string): string[];
    /**
    * Split a given string on non-word characters.
    */
    nonword(query: string): string[];
  }
}

declare class Bloodhound<T> {
  constructor(options: Bloodhound.BloodhoundOptions<T>);
  /**
  * wraps the suggestion engine in an adapter that is compatible with the typeahead jQuery plugin
  */
  public ttAdapter(): any;
  /**
  * Kicks off the initialization of the suggestion engine. This includes processing the data provided through local and fetching/processing the data provided through prefetch.
  * Until initialized, all other methods will behave as no-ops.
  * Returns a jQuery promise which is resolved when engine has been initialized.
  *
  * After the initial call of initialize, how subsequent invocations of the method behave depends on the reinitialize argument.
  * If reinitialize is falsy, the method will not execute the initialization logic and will just return the same jQuery promise returned by the initial invocation.
  * If reinitialize is truthy, the method will behave as if it were being called for the first time.
  *
  * var promise1 = engine.initialize();
  * var promise2 = engine.initialize();
  * var promise3 = engine.initialize(true);
  *
  * promise1 === promise2;
  * promise3 !== promise1 && promise3 !== promise2;
  */
  public initialize(reinitialize?: boolean): JQueryPromise<any>;
  /**
  * Takes one argument, datums, which is expected to be an array of datums.
  * The passed in datums will get added to the search index that powers the suggestion engine.
  */
  public add(datums: T[]): void;
  /**
  * Removes all suggestions from the search index.
  */
  public clear(): void;
  /**
  * If you're using prefetch, data gets cached in local storage in an effort to cut down on unnecessary network requests.
  * clearPrefetchCache offers a way to programmatically clear said cache.
  */
  public clearPrefetchCache(): void;
  /**
  * If you're using remote, Bloodhound will cache the 10 most recent responses in an effort to provide a better user experience.
  * clearRemoteCache offers a way to programmatically clear said cache.
  */
  public clearRemoteCache(): void;
  /**
  * Returns a reference to the Bloodhound constructor and reverts window.Bloodhound to its previous value. Can be used to avoid naming collisions.
  */
  public noConflict(): any;

  /**
  * Computes a set of suggestions for query. cb will be invoked with an array of datums that represent said set.
  * cb will always be invoked once synchronously with suggestions that were available on the client.
  * If those suggestions are insufficient (# of suggestions is less than limit) and remote was configured, cb may also be invoked asynchronously with the suggestions available on the client mixed with suggestions from the remote source.
  */
  public get(query: string, cb: (datums: T[]) => void): void;

  /**
  * The Bloodhound suggestion engine is token-based, so how datums and queries are tokenized plays a vital role in the quality of search results.
  * Specify how you want datums and queries tokenized.
  */
  public static tokenizers: Bloodhound.Tokenizers;
}

declare module "bloodhound" {
  export = Bloodhound;
}
