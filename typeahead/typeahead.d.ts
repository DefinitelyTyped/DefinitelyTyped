// Type definitions for Twitter's typeahead.js 0.9.3
// Project: http://twitter.github.io/typeahead.js/
// Definitions by: Ivaylo Gochkov <https://github.com/igochkov/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../jquery/jquery.d.ts"/>

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
          * An array of {Twitter.Typeahead.Datum}.
          */
        local?: any[];
        /**
          * Can be a URL to a JSON file containing an array of datums or, 
          * if more configurability is needed, a prefetch options object 
          * {Twitter.Typeahead.PrefetchOptions}.
          */
        prefetch?: any;
        /**
          * Can be a URL to fetch suggestions from when the data provided by 
          * local and prefetch is insufficient or, if more configurability is 
          * needed, a remote options object {Twitter.Typeahead.RemoteOptions}.
          */
        remote?: any;
    }

    interface PrefetchOptions {
        url: string;
        ttl?: number;
        filter?: (parsedResponse: any) => Datum[];
    }

    interface RemoteOptions {
        url: string;
        dataType?: string;
        cache?: boolean;
        timeout?: number;
        wildcard?: string;
        replace?: (url: string, uriEncodedQuery: string) => string;
        rateLimitFn?: any; // debounce or trottle
        rateLimitWait?: number;
        maxParallelRequests?: number;
        beforeSend?: (jqXhr: JQueryXHR, settings: JQueryAjaxSettings) => void;
        filter?: (parsedResponse: any) => Datum[];
    }

    interface Datum {
        value: string;
        tokens: string[];
    }

    interface TypeaheadStatic {
        VERSION: string;
        utils: TypeaheadUtils;
    }

    interface TypeaheadUtils {
        debounce: (func: any, wait: number, immediate: boolean) => any;
        throttle: (func: any, wait: number) => any;
    }
}

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

    typeahead(methodName: string): JQuery;
    typeahead(methodName: 'destroy'): JQuery;
    typeahead(methodName: 'setQuery'): JQuery;
}

declare var typeahead: Twitter.Typeahead.TypeaheadStatic;