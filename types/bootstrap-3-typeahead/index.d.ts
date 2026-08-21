/// <reference types="jquery" />

declare namespace Bootstrap3Typeahead {
    interface Options {
        /**
         * The data source to query against
         */
        source?:
            | string[]
            | object[]
            | ((query?: string, process?: (callback: any) => string | string[] | object[]) => void)
            | undefined;

        /**
         * The max number of items to display in the dropdown
         */
        items?: number | "all" | undefined;

        /**
         * The minimum character length needed before triggering autocomplete suggestions
         */
        minLength?: number | undefined;

        /**
         * If hints should be shown as soon as the input gets focus
         */
        showHintOnFocus?: boolean | "all" | undefined;

        /**
         * Number of pixels the scrollable parent container scrolled down
         */
        scrollHeight?: number | (() => number) | undefined;

        /**
         * The method used to determine if a query matches an item
         */
        matcher?: ((item: string) => boolean) | undefined;

        /**
         * Method used to sort autocomplete results
         */
        sorter?: ((items: string[]) => string[]) | undefined;

        /**
         * The method used to return selected item
         */
        updater?: ((item: string) => string) | undefined;

        /**
         * Method used to highlight autocomplete results
         */
        highlighter?: ((item: string) => string) | undefined;

        /**
         * Method used to get textual representation of an item of the sources
         */
        displayText?: ((item: string | { name: string }) => string) | undefined;

        /**
         * Allows you to dictate whether or not the first suggestion is selected automatically
         */
        autoSelect?: boolean | undefined;

        /**
         * Call back function to execute after selected an item
         */
        afterSelect?: ((this: Typeahead, item: string | object) => void) | undefined;

        /**
         * Adds a delay between lookups
         */
        delay?: number | undefined;

        /**
         * Use this option to add the menu to another div
         */
        appendTo?: JQuery | undefined;

        /**
         * Set to true if you want the menu to be the same size than the input it is attached to
         */
        fitToElement?: boolean | undefined;

        /**
         * Adds an item to the end of the list
         */
        addItem?: object | undefined;
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
    typeahead(methodOrOptions?: "destroy" | Bootstrap3Typeahead.Options): JQuery;

    /**
     * To get the currently active item
     */
    typeahead(method: "getActive"): undefined | string | object;

    /**
     * To trigger the lookup function externally
     */
    typeahead(method: "lookup", defaultValue?: string): JQuery;
}
