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
        displayKey?: string;

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
        empty?: string;

        /**
         * Rendered at the bottom of the dataset.
         * Can be either a HTML string or a precompiled template. 
         * If it's a precompiled template, the passed in context will contain query and isEmpty.
         */
        footer?: string;

        /**
         * Rendered at the top of the dataset. 
         * Can be either a HTML string or a precompiled template. 
         * If it's a precompiled template, the passed in context will contain query and isEmpty.
         */
        header?: string;

        /**
         * Used to render a single suggestion. 
         * If set, this has to be a precompiled template. 
         * The associated suggestion object will serve as the context. 
         * Defaults to the value of displayKey wrapped in a p tag i.e. <p>{{value}}</p>.
         */
        suggestion?: string;

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
