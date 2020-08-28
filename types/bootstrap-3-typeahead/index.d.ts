// Type definitions for Bootstrap 3 Typeahead 4.0
// Project: https://github.com/bassjobsen/Bootstrap-3-Typeahead
// Definitions by: Anderson Friaça <https://github.com/AndersonFriaca>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/// <reference types="jquery" />

declare namespace Bootstrap3Typeahead {
    interface Options {
        /**
         * The data source to query against
         */
        source?: string[] | object[] | ((query?: string, process?: ((callback: any) => string|string[]|object[])) => void);

        /**
         * The max number of items to display in the dropdown
         */
        items?: number | 'all';

        /**
         * The minimum character length needed before triggering autocomplete suggestions
         */
        minLength?: number;

        /**
         * If hints should be shown as soon as the input gets focus
         */
        showHintOnFocus?: boolean | 'all';

        /**
         * Number of pixels the scrollable parent container scrolled down
         */
        scrollHeight?: number | (() => number);

        /**
         * The method used to determine if a query matches an item
         */
        matcher?: (item: string) => boolean;

        /**
         * Method used to sort autocomplete results
         */
        sorter?: (items: string[]) => string[];

        /**
         * The method used to return selected item
         */
        updater?: (item: string) => string;

        /**
         * Method used to highlight autocomplete results
         */
        highlighter?: (item: string) => string;

        /**
         * Method used to get textual representation of an item of the sources
         */
        displayText?: (item: string|{name: string}) => string;

        /**
         * Allows you to dictate whether or not the first suggestion is selected automatically
         */
        autoSelect?: boolean;

        /**
         * Call back function to execute after selected an item
         */
        afterSelect?: (this: Typeahead, item: string|object) => void;

        /**
         * Adds a delay between lookups
         */
        delay?: number;

        /**
         * Use this option to add the menu to another div
         */
        appendTo?: JQuery;

        /**
         * Set to true if you want the menu to be the same size than the input it is attached to
         */
        fitToElement?: boolean;

        /**
         * Adds an item to the end of the list
         */
        addItem?: object;
    }

    interface Typeahead {
        $element: JQuery;
        options: Options;
    }
}

interface JQuery {
    /**
     * Initialize or destroy Typeahead
     */
    typeahead(methodOrOptions?: 'destroy' | Bootstrap3Typeahead.Options): JQuery;

    /**
     * To get the currently active item
     */
    typeahead(method: 'getActive'): undefined|string|object;

    /**
     * To trigger the lookup function externally
     */
    typeahead(method: 'lookup', defaultValue?: string): JQuery;
}
