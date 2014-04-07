// Type definitions for typeahead.js 0.9.3
// Project: http://twitter.github.io/typeahead.js/
// Definitions by: Ivaylo Gochkov <https://github.com/igochkov/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../jquery/jquery.d.ts"/>

interface JQuery {
    /**
      * Turns an input[type="text"] element into a typeahead.
      *
      * @constructor
      * @param dataset Single dataset
      */
    typeahead(dataset: Twitter.Typeahead.Dataset): JQuery;

    /**
      * Turns an input[type="text"] element into a typeahead.
      *
      * @constructor
      * @param dataset Array of datasets
      */
    typeahead(datasets: Twitter.Typeahead.Dataset[]): JQuery;

    /**
     * Destroys previously initialized typeaheads. This entails reverting 
     * DOM modifications and removing event handlers.
     *
     * @constructor
     * @param methodName Method 'destroy'
     */
    typeahead(methodName: 'destroy'): JQuery;

    /**
      * Sets the current query of the typeahead. This is always preferable to 
      * using $("input.typeahead").val(query), which will result in unexpected 
      * behavior. To clear the query, simply set it to an empty string.
      *
      * @constructor
      * @param methodName Method 'setQuery'
      * @param query The query to be set
      */
    typeahead(methodName: 'setQuery', query: string): JQuery;

    /**
      * Accommodates the destroy and setQuery overloads.
      *
      * @constructor
      * @param methodName Method name ('destroy' or 'setQuery')
      * @param query The query to be set in case method 'setQuery' is used.
      */
    typeahead(methodName: string, query: string): JQuery;
    
    /**
      * Accomodates specifying options such as hint and highlight.
      * This is in correspondence to the examples mentioned in http://twitter.github.io/typeahead.js/examples/
      *
      * @constructor
      * @param options ('hint' or 'highlight' or 'minLength' all of which are optional)
      * @param dataset Array of datasets
      */
    typeahead(options: Twitter.Typeahead.Options, dataset: Twitter.Typeahead.Dataset): JQuery;
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
          * The string used to identify the dataset. Used by typeahead.js
          * to cache intelligently.
          */
        name: string;
        /**
          * The key used to access the value of the datum in the datum object. 
          * Defaults to value.
          */
        valueKey?: string;
        /**
          * The max number of suggestions from the dataset to display 
          * for a given query. Defaults to 5.
          */
        limit?: number;
        /**
          * The template used to render suggestions. Can be a string or
          * a precompiled template. If not provided, suggestions will render
          * as their value contained in a <p> element (i.e. <p>value</p>).
          */
        template?: any;
        /**
          * The template engine used to compile/render template if it is a 
          * string. Any engine can use used as long as it adheres to the 
          * expected API. Required if template is a string.
          */
        engine?: string;
        /**
          * The header rendered before suggestions in the dropdown menu. 
          * Can be either a DOM element or HTML.
          */
        header?: any;
        /**
          * The footer rendered after suggestions in the dropdown menu. 
          * Can be either a DOM element or HTML.
          */
        footer?: any;
        /**
          * An array of datums or strings.
          */
        local?: any[];
        /**
          * Can be a URL to a JSON file containing an array of datums or, 
          * if more configurability is needed, a prefetch options object.
          */
        prefetch?: any;
        /**
          * Can be a URL to fetch suggestions from when the data provided by 
          * local and prefetch is insufficient or, if more configurability is 
          * needed, a remote options object.
          */
        remote?: any;
    }

    /**
      * Prefetched data is fetched and processed on initialization. 
      * If the browser supports localStorage, the processed data will be cached 
      * there to prevent additional network requests on subsequent page loads.
      */
    interface PrefetchOptions {
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
        filter?: (parsedResponse: any) => Datum[];
    }

    /**
      * Remote data is only used when the data provided by local and prefetch
      * is insufficient. In order to prevent an obscene number of requests 
      * being made to remote endpoint, typeahead.js rate-limits remote requests.
      */
    interface RemoteOptions {
        /**
          * A URL to make requests to when the data provided by local and 
          * prefetch is insufficient. Required.
          */
        url: string;

        /**
          * The type of data you're expecting from the server. Defaults to json.
          * @see http://api.jquery.com/jQuery.ajax/ for more info.
          */
        dataType?: string;

        /**
          * Determines whether or not the browser will cache responses. 
          * @see http://api.jquery.com/jQuery.ajax/ for more info.
          */
        cache?: boolean;

        /**
          * Sets a timeout for requests.
          * @see http://api.jquery.com/jQuery.ajax/ for more info.
          */
        timeout?: number;

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
        rateLimitFn?: string;

        /**
          * The time interval in milliseconds that will be used by rateLimitFn. 
          * Defaults to 300.
          */
        rateLimitWait?: number;

        /**
          * The max number of parallel requests typeahead.js can have pending. 
          * Defaults to 6.
          */
        maxParallelRequests?: number;

        /**
          * A pre-request callback. Can be used to set custom headers.
          * @see http://api.jquery.com/jQuery.ajax/ for more info.
          */
        beforeSend?: (jqXhr: JQueryXHR, settings: JQueryAjaxSettings) => void;

        /**
          * Transforms the response body into an array of datums.
          *
          * @param parsedResponse Response body
          */
        filter?: (parsedResponse: any) => Datum[];
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
}
