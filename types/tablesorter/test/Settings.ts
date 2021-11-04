import * as Globalize from "globalize";
import "jquery";
import {
    ColumnFilter,
    CoreTheme,
    EmptySorting,
    MatchType,
    PagerConfiguration,
    RelativeSorting,
    SortDefinitionOrder,
    SortOrder,
    StorageType,
    StringSorting,
    TablesorterConfiguration,
    WidgetOptions
} from "tablesorter";

/**
 * Provides tests for the settings.
 */
export class TestSettings<T extends HTMLElement> {
    /**
     * Tests for the settings.
     */
    Test() {
        let settings: TablesorterConfiguration<T>;
        let widgetOptions: WidgetOptions<T> = {};

        /**
         * Settings
         * Legal settings
         */
        settings = {
            cancelSelection: true,
            cssAsc: "asc",
            cssChildRow: "childRow",
            cssDesc: "desc",
            cssHeader: "header",
            cssHeaderRow: "headerRow",
            cssIcon: "icon",
            cssIconAsc: "icon-asc",
            cssIconDesc: "icon-desc",
            cssIconDisabled: "icon-disabled",
            cssIconNone: "icon-none",
            cssIgnoreRow: "ignored",
            cssInfoBlock: "row-info",
            cssNone: "no-sort",
            cssNoSort: "no-sort-control",
            cssProcessing: "loading-circle",
            dateFormat: "dd.mm.yyyy",
            debug: true,
            delayInit: true,
            duplicateSpan: true,
            emptyTo: "top",
            headers: {
                0: {
                    dateFormat: "yyyy-mm-dd",
                    empty: "emptyMax",
                    filter: "parsed",
                    lockedOrder: "asc",
                    parser: "date",
                    resizable: true,
                    sortInitialOrder: "asc",
                    sorter: "date",
                    string: "zero"
                },
                3: {
                    parser: "ipAddress",
                    sorter: "ipAddress"
                }
            },
            headerTemplate: "{content} {icon}",
            ignoreCase: true,
            initialized(table) {
                // $ExpectType T
                table;
            },
            initWidgets: true,
            namespace: "my-awesome-tablesorter-namespace",
            numberSorter(x, y, ascending, maxValue) {
                // $ExpectType number
                x;
                // $ExpectType number
                y;
                // $ExpectType boolean
                ascending;
                // $ExpectType number
                maxValue;

                if (x === y) {
                    return 0;
                } else {
                    return x < y ? -1 : 1;
                }
            },
            onRenderHeader(index, config, table) {
                // $ExpectType number
                index;
                // $ExpectType TablesorterConfigurationStore<T>
                config;
                // $ExpectType JQuery<T>
                table;
            },
            onRenderTemplate(index, text) {
                // $ExpectType number
                index;
                // $ExpectType string
                text;
                return `Column #${index}`;
            },
            pointerClick: "click",
            pointerDown: "mousedown",
            pointerUp: "mouseup",
            resort: true,
            selectorHeaders: "> thead th",
            selectorRemove: ".remove-me",
            selectorSort: "th, td",
            serverSideSorting: true,
            showProcessing: true,
            sortAppend: [[1, 0], [2, 1]],
            sortForce: [[0, 1], [1, 1]],
            sortInitialOrder: "asc",
            sortList: [[0, 1], [1, 1]],
            sortLocaleCompare: true,
            sortMultiSortKey: "bubbles",
            sortReset: true,
            sortResetKey: "shiftKey",
            sortRestart: true,
            sortStable: true,
            stringTo: "top",
            tabIndex: true,
            tableClass: "tablesorter-table",
            textAttribute: "data-text",
            textExtraction: "basic",
            textSorter(x, y, direction, index, table) {
                // $ExpectType string
                x;
                // $ExpectType string
                y;
                // $ExpectType boolean
                direction;
                // $ExpectType number
                index;
                // $ExpectType T
                table;
                return x.localeCompare(y);
            },
            theme: "bootstrap",
            usNumberFormat: true,
            widgetClass: "pleas-load-me-the-widget-named-{name}",
            widgetOptions,
            widgets: ["zebra"],
            widthFixed: true,
            checkboxClass: "checked",
            cehckboxVisible: true,
            data: {},
            dateRange: 50,
            globalize: {
                lang: "de",
                Globalize: Globalize("de"),
                raw: "dd.mm.yyyy"
            },
            ignoreChildRow: true,
            imgAttr: "alt"
        };

        /**
         * Debugging components
         */
        settings.debug = "filter columnSelector";

        /**
         * Sorting relatively
         */
        settings.sortAppend = {
            0: [[1, "o"]],
            1: [[2, "d"]]
        };

        /**
         * Text-extraction
         * Root-level extraction
         * Basic extraction
         */
        settings.textExtraction = "basic";

        /**
         * Custom extraction
         */
        settings.textExtraction = (node, table, index) => {
            // $ExpectType Element
            node;
            // $ExpectType T
            table;
            // $ExpectType number
            index;
            return $(node).text();
        };

        /**
         * Root-level extraction
         */
        settings.textExtraction = {
            0: "basic",
            ".test"(node, table, index) {
                // $ExpectType Element
                node;
                // $ExpectType T
                table;
                // $ExpectType number
                index;
                return $(node).text();
            }
        };

        /**
         * Globalization
         * Global settings
         */
        settings.globalize = {
            lang: "de",
            Globalize: Globalize("de"),
            raw: "dd.mm.yyyy"
        };

        /**
         * Per-row settings
         */
        settings.globalize = {
            0: {
                lang: "de",
                Globalize: Globalize("de"),
                raw: "dd.mm.yyyy"
            },
            1: {
                lang: "de",
                Globalize: Globalize("de"),
                raw: "dd.mm.yyyy"
            }
        };

        /**
         * Widget settings
         * General settings
         */
        widgetOptions = {
            columns: ["pri", "sec", "ter"],
            columns_tfoot: true,
            columns_thead: true,
            filter_cellFilter: "filter-control",
            filter_childByColumn: true,
            filter_childRows: false,
            filter_childWithSibs: false,
            filter_columnAnyMatch: true,
            filter_columnFilters: true,
            filter_cssFilter: "tablesorter-filter",
            filter_defaultAttrib: "data-filter",
            filter_defaultFilter: {
                0: "{q}=",
                ".fuzzy": "~{q}"
            },
            filter_excludeFilter: {
                ".text": "range",
                2: "range, notMatch, exact"
            },
            filter_external: ".external",
            filter_filteredRow: "filtered",
            filter_filterLabel: 'Filter "{{label}}" column by...',
            filter_formatter: {},
            filter_functions: {},
            filter_hideEmpty: true,
            filter_hideFilters: true,
            filter_ignoreCase: true,
            filter_liveSearch: true,
            filter_matchType: {
                input: "exact",
                select: "match"
            },
            filter_onlyAvail: "filter-onlyAvail",
            filter_placeholder: {
                from: "From",
                to: "To",
                search: "Type a text...",
                select: "Select something"
            },
            filter_reset: $("#reset"),
            filter_resetOnEsc: true,
            filter_saveFilters: true,
            filter_searchDelay: 300,
            filter_searchFiltered: true,
            filter_selectSource: {
                ".model-number": ["1|Awesome 1.x", "2|Awesome 2.x", "3|Awesome 3.x"]
            },
            filter_selectSourceSeparator: "|",
            filter_serversideFiltering: true,
            filter_startsWith: true,
            filter_useParsedData: true,
            resizable: true,
            resizable_addLastColumn: true,
            resizable_includeFooter: true,
            resizable_targetLast: true,
            resizable_throttle: true,
            resizable_widths: ["10%", "100%", "50px"],
            saveSort: true,
            stickyHeaders: "tablesorter-sticky",
            stickyHeaders_addResizeEvent: true,
            stickyHeaders_appendTo: ".wrapper",
            stickyHeaders_attachTo: ".wrapper",
            stickyHeaders_cloneId: "-sticky",
            stickyHeaders_filteredToTop: true,
            stickyHeaders_includeCaption: true,
            stickyHeaders_offset: 10,
            stickyHeaders_xScroll: ".wrapper",
            stickyHeaders_yScroll: ".wrapper",
            stickyHeaders_zindex: 10,
            storage_fixedUrl: "/this/is/my/awesome/table/url",
            storage_group: "data-awesome-table-group",
            storage_page: "data-awesome-table-page",
            storage_storageType: "c",
            storage_tableId: "myAwesomeTable",
            zebra: ["even", "odd"]
        };

        /**
         * Filter-settings
         * Filter-cell classes
         * Global filter-cell classes
         */
        widgetOptions.filter_cellFilter = "filter-control";

        /**
         * Per-row filter-cell classes
         */
        widgetOptions.filter_cellFilter = ["hidden", "", "hidden", ""];

        /**
         * Filter-classes
         * Global filter-classes
         */
        widgetOptions.filter_cssFilter = "tablesorter-filter";

        /**
         * Per-row filter-classes
         */
        widgetOptions.filter_cssFilter = ["first-filter", "second-filter", "third-filter"];

        /**
         * Filter-formaters
         * Creating filter-controls with all available options
         */
        widgetOptions.filter_formatter = {
            "*": (cell, index) => {
                // $ExpectType JQuery<HTMLElement>
                cell;
                // $ExpectType number
                index;
                return $.tablesorter.filterFormatter.html5Number(
                    cell,
                    index,
                    {
                        addToggle: true,
                        cellText: "Age",
                        compare: ["<", ">", "="],
                        delayed: true,
                        disabled: true,
                        exactMatch: true,
                        min: 100,
                        max: 1000,
                        skipTest: true,
                        step: 10,
                        value: 110
                    });
            },
            1: (cell, index) => {
                // $ExpectType JQuery<HTMLElement>
                cell;
                // $ExpectType number
                index;
                return $.tablesorter.filterFormatter.html5Range(
                    cell,
                    index,
                    {
                        allText: "all",
                        cellText: "Medals",
                        compare: "<",
                        delayed: false,
                        exactMatch: false,
                        min: 1,
                        max: 200,
                        skipTest: true,
                        step: 1,
                        value: 1,
                        valueToHeader: false
                    });
            },
            2: (cell, index) => $.tablesorter.filterFormatter.html5Color(
                cell,
                index,
                {
                    addToggle: true,
                    disabled: true,
                    exactMatch: true,
                    skipTest: true,
                    value: "#999999",
                    valueToHeader: true
                }),
            3: (cell, index) => $.tablesorter.filterFormatter.uiSpinner(
                cell,
                index,
                {
                    addToggle: true,
                    cellText: "Level",
                    compare: "=",
                    delayed: true,
                    disabled: true,
                    exactMatch: true,
                    min: 0,
                    max: 100,
                    step: 1,
                    value: 1,
                    culture: "de"
                }),
            4: (cell, index) => $.tablesorter.filterFormatter.uiSlider(
                cell,
                index,
                {
                    allText: "all",
                    cellText: "Height",
                    compare: ["<", ">"],
                    delayed: true,
                    exactMatch: true,
                    min: 0,
                    max: 3,
                    step: 0.01,
                    value: 1.60,
                    valueToHeader: true
                }),
            5: (cell, index) => $.tablesorter.filterFormatter.uiRange(
                cell,
                index,
                {
                    delayed: true,
                    min: 0,
                    max: 1000000,
                    valueToHeader: false
                }),
            6: (cell, index) => $.tablesorter.filterFormatter.uiDateCompare(
                cell,
                index,
                {
                    cellText: "Joindate",
                    compare: ["<", ">"],
                    endOfDay: true
                }),
            7: (cell, index) => $.tablesorter.filterFormatter.uiDatepicker(
                cell,
                index,
                {
                    endOfDay: true,
                    from: new Date(),
                    to: new Date(),
                    textFrom: "From",
                    textTo: "To",
                    maxDate: new Date(1989, 1, 1)
                }),
            8: (cell, index) => $.tablesorter.filterFormatter.select2(
                cell,
                index,
                {
                    cellText: "Gender",
                    exactMatch: true,
                    value: "other",
                    data: [
                        {
                            id: "other",
                            text: "Other"
                        }
                    ]
                })
        };

        /**
         * Creating filter-controls without options
         */
        widgetOptions.filter_formatter = {
            "*": (cell, index) => $.tablesorter.filterFormatter.select2(cell, index)
        };

        /**
         * Creating custom filter-controls
         */
        widgetOptions.filter_formatter = {
            "*": () => $("input")
        };

        /**
         * Filter-functions
         */
        widgetOptions.filter_functions = {
            "*": (o, n, f, i, r, c, d) => {
                // $ExpectType string
                o;
                // $ExpectType string
                n;
                // $ExpectType string
                f;
                // $ExpectType number
                i;
                // $ExpectType JQuery<HTMLElement>
                r;
                // $ExpectType TablesorterConfigurationStore<T>
                c;
                // $ExpectType object
                d;
                return false;
            },
            1: {
                "A - D": (o, n, f, i, r, c, d) => {
                    // $ExpectType string
                    o;
                    // $ExpectType string
                    n;
                    // $ExpectType string
                    f;
                    // $ExpectType number
                    i;
                    // $ExpectType JQuery<HTMLElement>
                    r;
                    // $ExpectType TablesorterConfigurationStore<T>
                    c;
                    // $ExpectType object
                    d;
                    return /^[A-D]/.test(o);
                },
                "E - H": (e) => /^[E-H]/.test(e)
            }
        };

        /**
         * Hide-filters
         * Hiding filters statically
         */
        widgetOptions.filter_hideFilters = true;

        /**
         * Hiding filters dynamicaly
         */
        widgetOptions.filter_hideFilters = (config) => {
            // $ExpectType TablesorterConfigurationStore<T>
            config;
            const filters = $.tablesorter.getFilters(config.table);
            return filters.join("") === "";
        };

        /**
         * Live-Search
         * Setting live-features statically
         */
        widgetOptions.filter_liveSearch = true;

        /**
         * Setting live-features for a specific amount of characters
         */
        widgetOptions.filter_liveSearch = 5;

        /**
         * Setting live-features per-column
         */
        widgetOptions.filter_liveSearch = {
            0: false,
            "*": true,
            ".fullname": 5
        };

        /**
         * Reset-button
         * Setting the reset-button using a jQuery-object
         */
        widgetOptions.filter_reset = $("#reset");

        /**
         * Setting the reset-button using a jQuery-selector
         */
        widgetOptions.filter_reset = "#reset";

        /**
         * Select-source
         * Setting a global select-source
         */
        widgetOptions.filter_selectSource = (table, column, onlyAvail) => {
            // $ExpectType T
            table;
            // $ExpectType number
            column;
            // $ExpectType boolean
            onlyAvail;
            const values = $.tablesorter.filter.getOptions(table, column, onlyAvail);
            return values;
        };

        /**
         * Setting per-column select-sources
         */
        widgetOptions.filter_selectSource = {
            "*": ["1", "2", "3"],
            0: [
                {
                    text: "JavaScript",
                    value: "*.js",
                    "data-class": "ui-icon-script"
                }
            ],
            1: (table, column, onlyAvail) => {
                // $ExpectType T
                table;
                // $ExpectType number
                column;
                // $ExpectType boolean
                onlyAvail;
                return null;
            }
        };

        /**
         * Sticky-Headers settings
         * Appending the sticky header
         * Using a jQuery-object
         */
        widgetOptions.stickyHeaders_appendTo = $(".wrapper");

        /**
         * Using a jQuery-selector
         */
        widgetOptions.stickyHeaders_appendTo = ".wrapper";

        /**
         * Appending the sticky header
         * Using a jQuery - object
         */
        widgetOptions.stickyHeaders_appendTo = $(".wrapper");

        /**
         * Using a jQuery-selector
         */
        widgetOptions.stickyHeaders_appendTo = ".wrapper";

        /**
         * Setting an offset
         * Using a static number
         */
        widgetOptions.stickyHeaders_offset = 10;

        /**
         * Using a jQuery-selector
         */
        widgetOptions.stickyHeaders_offset = ".navbar-fixed-top";

        /**
         * Using a jQuery-object
         */
        widgetOptions.stickyHeaders_offset = $(".navbar-fixed-top");

        /**
         * Setting scroll-elements
         * Using a jQuery-selector
         */
        widgetOptions.stickyHeaders_xScroll = ".wrapper";
        widgetOptions.stickyHeaders_yScroll = ".wrapper";

        /**
         * Using a jQuery-object
         */
        widgetOptions.stickyHeaders_xScroll = $(".wrapper");
        widgetOptions.stickyHeaders_yScroll = $(".wrapper");

        /**
         * Pager-settings
         * Using widget-settings
         */
        widgetOptions = {
            pager_ajaxError: (config, request, settings, error) => {
                // $ExpectType TablesorterConfigurationStore<T>
                config;
                // $ExpectType jqXHR<any>
                request;
                // $ExpectType AjaxSettings<any>
                settings;
                // $ExpectType string
                error;
                return "What do you think you're doing!?";
            },
            pager_ajaxObject: {
                dataType: "json"
            },
            pager_ajaxProcessing: () => ({ total: 0 }),
            pager_ajaxUrl: "https://go.com/download/my/stuff/?p={page}",
            pager_selectors: {
                container: $(".container"),
                first: $(".first"),
                gotoPage: $(".goto"),
                last: $(".last"),
                next: $(".next"),
                pageDisplay: $(".display"),
                pageSize: $(".size"),
                prev: $(".prev")
            },
            pager_countChildRows: true,
            pager_css: {
                disabled: "disabled",
                container: "container",
                errorRow: "error"
            },
            pager_customAjaxUrl: (table, url) => {
                // $ExpectType T
                table;
                // $ExpectType string
                url;
                return url;
            },
            pager_fixedHeight: true,
            pager_initialRows: {
                total: 100,
                filtered: 100
            },
            pager_output: "{startRow} to {endRow} of {totalRows} rows",
            pager_startPage: 2,
            pager_pageReset: true,
            pager_processAjaxOnInit: true,
            pager_removeRows: true,
            pager_savePages: true,
            pager_size: "all",
            pager_storageKey: "tablesorter-pager",
            pager_updateArrows: true
        };

        /**
         * Using self-contained settings
         */
        let pagerSettings: PagerConfiguration<T> = {
            ajaxError: () => {
                return "What are you even trying to do!?";
            },
            ajaxObject: {
                dataType: "csv"
            },
            ajaxProcessing: () => ({ total: 1337 }),
            ajaxUrl: "https://go.com/download/my/stuff/?p={page}",
            container: $(".container"),
            countChildRows: true,
            cssDisabled: "disabled",
            cssErrorRow: "error",
            cssFirst: $(".first"),
            cssGoto: $(".goto"),
            cssLast: $(".last"),
            cssNext: $(".next"),
            cssPageDisplay: $(".display"),
            cssPageSize: $(".size"),
            cssPrev: $(".prev"),
            customAjaxUrl: (table, url) => {
                // $ExpectType T
                table;
                // $ExpectType string
                url;
                return url;
            },
            fixedHeight: true,
            initialRows: {
                total: 100,
                filtered: 100
            },
            output: "{startRow} to {endRow} of {totalRows} rows",
            page: 2,
            pageReset: true,
            processAjaxOnInit: true,
            removeRows: true,
            savePages: true,
            size: "all",
            storageKey: "tablesorter-pager",
            updateArrows: true
        };

        /**
         * Setting an ajax data-processor
         * Returning an object
         * With all available options
         */
        pagerSettings.ajaxProcessing =
            widgetOptions.pager_ajaxProcessing = (data, table, request) => {
                // $ExpectType any
                data;
                // $ExpectType T
                table;
                // $ExpectType jqXHR<any>
                request;
                return ({ total: 1, filteredRows: 1, headers: ["ID"], output: "", rows: [["1"]] });
            };

        /**
         * With all required options
         */
        pagerSettings.ajaxProcessing =
            widgetOptions.pager_ajaxProcessing = () => {
                return {
                    total: 1
                };
            };

        /**
         * Returning an array
         * With the total amount of rows only
         */
        pagerSettings.ajaxProcessing =
            widgetOptions.pager_ajaxProcessing = () => [1];

        /**
         * With the rows as a jQuery-object
         */
        pagerSettings.ajaxProcessing =
            widgetOptions.pager_ajaxProcessing = (data) => [1, $(data.rows), ["ID", "Medals", "Exp"]];

        /**
         * With the records in an array
         */
        pagerSettings.ajaxProcessing =
            widgetOptions.pager_ajaxProcessing = () => [1, [[1, 1000, "John Doe"]], ["ID", "Medals", "Name"]];

        /**
         * Setting elements for the pager
         * Using jQuery-selectors
         */
        const selector = ".container";
        pagerSettings = {
            container: selector,
            cssFirst: selector,
            cssGoto: selector,
            cssLast: selector,
            cssNext: selector,
            cssPageDisplay: selector,
            cssPageSize: selector,
            cssPrev: selector
        };

        widgetOptions.pager_selectors = {
            container: selector,
            first: selector,
            gotoPage: selector,
            last: selector,
            next: selector,
            pageDisplay: selector,
            pageSize: selector,
            prev: selector
        };

        /**
         * Using jQuery-objects
         */
        const object = $(selector);
        pagerSettings = {
            container: object,
            cssFirst: object,
            cssGoto: object,
            cssLast: object,
            cssNext: object,
            cssPageDisplay: object,
            cssPageSize: object,
            cssPrev: object
        };

        widgetOptions.pager_selectors = {
            container: object,
            first: object,
            gotoPage: object,
            last: object,
            next: object,
            pageDisplay: object,
            pageSize: object,
            prev: object
        };

        /**
         * Setting a page-reset
         * Using an exact number
         */
        pagerSettings.pageReset =
            widgetOptions.pager_pageReset = 3;

        /**
         * Enabling/disabling page-reset
         */
        pagerSettings.pageReset =
            widgetOptions.pager_pageReset = true;
        pagerSettings.pageReset =
            widgetOptions.pager_pageReset = false;

        /**
         * Setting the initial page-size
         * Using an exact number
         */
        pagerSettings.size =
            widgetOptions.pager_size = 20;

        /**
         * Using "all"
         */
        pagerSettings.size =
            widgetOptions.pager_size = "all";

        $<T>("#myTable").tablesorter(settings).tablesorterPager(pagerSettings);
    }
}
