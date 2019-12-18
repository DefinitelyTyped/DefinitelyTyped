import "jquery";

/**
 * Provides tests for the variables.
 */
export class TestVariables<T extends HTMLElement> {
    /**
     * Tests for the variables.
     */
    Test() {
        const $: JQueryStatic<T> = {} as any;
        const table = $<T>()[0];
        const config = table.config;
        const widgetOptions = config.widgetOptions;
        const pager = config.pager;

        /**
         * Table-variables
         */
        // $ExpectType boolean
        table.hasInitialized;

        /**
         * Tablesorter-variables
         */
        // $ExpectType TablesorterConfiguration<T>
        $.tablesorter.defaults;
        // $ExpectType () => any
        $.tablesorter.instanceMethods[""];
        // $ExpectType Locale
        $.tablesorter.language;
        // $ExpectType Parser<T>[]
        $.tablesorter.parsers;
        // $ExpectType ThemeCollection
        $.tablesorter.themes;
        // $ExpectType Theme
        $.tablesorter.themes[""];
        // $ExpectType Widget<T>[]
        $.tablesorter.widgets;

        /**
         * config-store variables
         */
        // $ExpectType JQuery<HTMLElement>[]
        config.$headerIndexed;
        // $ExpectType JQuery<HTMLElement>
        config.$headers;
        // $ExpectType JQuery<T>
        config.$table;
        // $ExpectType JQuery<HTMLElement>
        config.$tbodies;
        // $ExpectType TablesorterCache
        config.cache;
        // $ExpectType number
        config.columns;
        // $ExpectType string[]
        config.headerContent;
        // $ExpectType HTMLElement[]
        config.headerList;
        // $ExpectType Parser<T>[]
        config.parsers;
        // $ExpectType TableSorting[]
        config.sortVars;
        // $ExpectType T
        config.table;
        // $ExpectType number
        config.totalRows;
        // $ExpectType JQuery<HTMLElement>
        config.$filters;
        // $ExpectType number
        config.filteredRows;

        /**
         * Widget-config store
         */
        // $ExpectType JQuery<HTMLElement>
        widgetOptions.$sticky;
        // $ExpectType JQuery<HTMLElement>
        widgetOptions.filter_$anyMatch;
        // $ExpectType JQuery<HTMLElement>
        widgetOptions.filter_$externalFilters;
        // $ExpectType boolean
        widgetOptions.filter_initialized;

        /**
         * Pager-config store
         */
        // $ExpectType JQuery<HTMLElement>
        pager.$container;
        // $ExpectType JQuery<HTMLElement>
        pager.$goto;
        // $ExpectType JQuery<HTMLElement>
        pager.$size;
        // $ExpectType number[]
        pager.cachedIndex;
        // $ExpectType number
        pager.endRow;
        // $ExpectType number
        pager.filteredPages;
        // $ExpectType number
        pager.filteredRows;
        // $ExpectType number
        pager.page;
        // $ExpectType number
        pager.size;
        // $ExpectType number
        pager.startRow;
        // $ExpectType number
        pager.totalPages;
        // $ExpectType number
        pager.totalRows;
    }
}
