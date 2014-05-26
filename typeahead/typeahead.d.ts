// Type definitions for typeahead.js 0.10.2
// Project: http://twitter.github.io/typeahead.js/
// Definitions by: Ivaylo Gochkov <https://github.com/igochkov/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../jquery/jquery.d.ts"/>

interface JQuery {
    /**
      * Turns any input[type="text"] element into a typeahead. options is an options hash that's used to configure the typeahead to your liking. 
      * Refer to https://github.com/twitter/typeahead.js/blob/master/doc/jquery_typeahead.md#options for more info regarding the available configs. 
      * Subsequent arguments (*datasets), are individual option hashes for datasets. 
      * For more details regarding datasets, refer to https://github.com/twitter/typeahead.js/blob/master/doc/jquery_typeahead.md#datasets.
      *
      * @constructor
      * @param options ('hint' or 'highlight' or 'minLength' all of which are optional)
      * @param Array of Dataset
      */
    typeahead(options: Twitter.Typeahead.Options, dataset: Twitter.Typeahead.Dataset[]): JQuery;

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
      * Returns the current value of the typeahead. The value is the text the user has entered into the input element.
      *
      * @constructor
      * @param methodName Method 'val'
      */
    typeahead(methodName: 'val'): any;

    /**
      * Sets the value of the typeahead. This should be used in place of jQuery#val.
      *
      * @constructor
      * @param methodName Method 'val'
      */
    typeahead(methodName: 'val', myVal: any): JQuery;

    /**
      * Accommodates the destroy, open, close and val overloads.
      *
      * @constructor
      * @param methodName Method name ('destroy' or 'open', or 'close' or 'val')
      * @param query The query to be set in case method 'setQuery' is used.
      */
    typeahead(methodName: string, query: string): JQuery;

    /**
      * Returns a reference to the typeahead plugin and reverts jQuery.fn.typeahead to its previous value. 
      * Can be used to avoid naming collisions.
      *
      */
    noConflict(): JQuery
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
         * The backing data source for suggestions. Uses the query to compute suggestions and then invoke the callback with the computer set. 
         * A Bloodhound suggestion engine can be used here, to learn how, see https://github.com/twitter/typeahead.js/blob/master/doc/jquery_typeahead.md#bloodhound-integration.

         * @constructor
         * @param query Function that computes the suggestion set (i.e. an array of JavaScript objects) 
         * @param callback Invoke after set is computed. Can be invoked synchronously or asynchronously. 
         */
        source(query: string, callback: () => any[]): void;

        /**
          * The name of the dataset. This will be appended to tt-dataset- to form the class name of the containing DOM element. 
          * Must only consist of underscores, dashes, letters (a-z), and numbers. Defaults to a random number.
          */
        name?: string;
        /**
          * The key used to access the value of the datum in the datum object. 
          * Defaults to value.
          */
        displayKey?: string;
        /**
          * The templates used to render suggestions. Can be a string or
          * a precompiled template. If not provided, suggestions will render
          * as their value contained in a <p> element (i.e. <p>value</p>).
          */
        template?: Template;
    }

    interface BloodhoundOptions<T> {
        /**
          * Transforms a datum into an array of string tokens
          *
          * @constructor
          * @param datum individual units that compose the dataset
          */
        datumTokenizer(datum: T): string[];
        
        /**
          * Transforms a query into an array of string tokens
          *
          * @constructor
          * @param query tokenizer query
          */
        queryTokenizer(query: any): string[];
        
        /**
          *  The max number of suggestions to return from Bloodhound#get. If not reached, the data source will attempt to backfill the suggestions from remote.
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
        sorter?: (a: T, b: T) => T[];

        /**
          * local data
          */ 
        local?: () => T[];

        /**
          * Called to prefect data
          */
        prefetch?: PrefetchOptions<T>;

        /**
          * Can be a URL to fetch suggestions from when the data provided by local and prefetch is insufficient
          */
        remote?: RemoteOptions<T>;
    }

    /**
      * Prefetched data is fetched and processed on initialization. 
      * If the browser supports localStorage, the processed data will be cached 
      * there to prevent additional network requests on subsequent page loads.
      */
    interface PrefetchOptions<T> {
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
    interface RemoteOptions<T> {
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
        filter?: (parsedResponse: T[]) => T[];

        /**
          * The ajax settings object passed to jQuery.ajax.
          */
        ajax?: JQueryAjaxSettings;
    }

    /**
      * The individual units that compose datasets are called datums. 
      * The canonical form of a datum is an object with a value property and 
      * a tokens property. 
      * 
      * For ease of use, datums can also be represented as a string. 
      * Strings found in place of datum objects are implicitly converted 
      * to a datum object.
      * 
      * When datums are rendered as suggestions, the datum object is the 
      * context passed to the template engine. This means if you include any 
      * arbitrary properties in datum objects, those properties will be 
      * available to the template used to render suggestions.
      */
    interface Datum {
        /** 
          * The string that represents the underlying value of the datum 
          */
        value: string;

        /**
          * A collection of single-word strings that aid typeahead.js in 
          * matching datums with a given query.
          */
        tokens: string[];
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

    /**
      * Custom templates give you full control over how suggestions get rendered making it easy to customize the look and feel of your typeahead.
      * See http://twitter.github.io/typeahead.js/examples/ for more details
      */
    interface Template {
        /**
          * Rendered when 0 suggestions are available for the given query. Can be either a HTML string or a precompiled template. 
          * If it's a precompiled template, the passed in context will contain query.
          */
        empty?: any;

        /**
          * Rendered at the bottom of the dataset. Can be either a HTML string or a precompiled template. 
          * If it's a precompiled template, the passed in context will contain query and isEmpty.
          */
        footer?: any;

        /**
          * Rendered at the top of the dataset. Can be either a HTML string or a precompiled template. 
          * If it's a precompiled template, the passed in context will contain query and isEmpty.
          */
        header?: any;

        /**
          * Used to render a single suggestion. If set, this has to be a precompiled template. 
          * The associated suggestion object will serve as the context. Defaults to the value of displayKey wrapped in a p tag i.e. <p>{{value}}</p>.
          */
        suggestion?: any;
    }
}

declare class Bloodhound<T> {
    constructor(options: Twitter.Typeahead.BloodhoundOptions<T>)

    /**
      * wraps the suggestion engine in an adapter that is compatible with the typeahead jQuery plugin
      */
    public ttAdapter(): (query: string, callback: () => T[]) => void;

    /**
      * Kicks off the initialization of the suggestion engine. This includes processing the data provided through local and fetching/processing the data provided through prefetch. 
      * Until initialized, all other methods will behave as no-ops. 
      * Returns a jQuery promise which is resolved when engine has been initialized.
      */
    public initialize(reinitialize?: boolean): JQueryPromise<any>;
}
