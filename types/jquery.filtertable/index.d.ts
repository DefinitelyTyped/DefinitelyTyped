/// <reference types="jquery" />

declare namespace FilterTable {
    interface FilterTableOptions {
        /**
         * Makes the filter input field autofocused (not recommended for accessibility reasons)
         * Default: 'false'
         */
        autofocus?: boolean | undefined;
        /**
         * Callback function after a filter is performed.
         * Default: 'null'
         * @param term filter term (string)
         * @param table table being filtered (JQuery object)
         * @returns {void}
         */
        callback?: ((term: string, table: JQuery) => void) | undefined;
        /**
         * Class applied to the main filter input container
         * Default: 'filter-table'
         */
        containerClass?: string | undefined;
        /**
         * Tag name of the main filter input container
         * Default: 'p'
         */
        containerTag?: string | undefined;
        /**
         * Controls whether the table's tfoot(s) will be hidden when the table is filtered
         * Default: 'false'
         */
        hideTFootOnFilter?: boolean | undefined;
        /**
         * Class applied to cells containing the filter term
         * Default: 'alt'
         */
        highlightClass?: string | undefined;
        /**
         * Ignore these columns (0-indexed) when filtering
         * Default: '[]'
         */
        ignoreColumns?: number[] | undefined;
        /**
         * Use this selector to find the filter input instead of creating a new one (only works if selector returns a single element)
         * Default: 'null'
         */
        inputSelector?: string | undefined;
        /**
         * Name attribute of the filter input field
         * Default: 'filter-table'
         */
        inputName?: string | undefined;
        /**
         * Tag name of the filter input itself
         * Default: 'search'
         */
        inputType?: string | undefined;
        /**
         * Text to precede the filter input
         * Default: 'Filter:'
         */
        label?: string | undefined;
        /**
         * Filter only when at least this number of characters are in the filter input field
         * Default: '1'
         */
        minChars?: number | undefined;
        /**
         * Only show the filter on tables with this number of rows or more
         * Default: '8'
         */
        minRows?: number | undefined;
        /**
         * HTML5 placeholder text for the filter input
         * Default: 'search this table'
         */
        placeholder?: string | undefined;
        /**
         * Trap the return key in the filter input field to prevent form submission
         * Default: 'true'
         */
        preventReturnKey?: boolean | undefined;
        /**
         * List of clickable phrases to quick fill the search
         * Default: '[]'
         */
        quickList?: string[] | undefined;
        /**
         * Class of each quick list item
         * Default: 'quick'
         */
        quickListClass?: string | undefined;
        /**
         * Label for the clear filtering quick list item (or none if blank)
         * Default: ''
         */
        quickListClear?: string | undefined;
        /**
         * Tag name surrounding quick list items (e.g., ul)
         * Default: ''
         */
        quickListGroupTag?: string | undefined;
        /**
         * Tag name of each quick list item (e.g., a or li)
         * Default: 'a'
         */
        quickListTag?: string | undefined; // "a" | "li"
        /**
         * Class applied to visible rows
         * Default: 'visible'
         */
        visibleClass?: string | undefined;
    }

    interface FilterTableStatic {
        /**
         * init with default options
         * @returns {JQuery}
         */
        (): JQuery;

        /**
         * init with custom options
         * @param options
         * @returns {JQuery}
         */
        (options: FilterTableOptions): JQuery;
    }
}

interface JQuery {
    /**
     * if this code appears after your tables; otherwise, include it in your document.ready() code.
     * $('table').filterTable()
     */
    filterTable: FilterTable.FilterTableStatic;
}
