export interface Options
    extends
        OptionsGeneral,
        OptionsMenu,
        OptionsHistory,
        OptionsLocale,
        OptionsDownload,
        OptionsColumns,
        OptionsRows,
        OptionsData,
        OptionsSorting,
        OptionsFiltering,
        OptionsRowGrouping,
        OptionsPagination,
        OptionsPersistentConfiguration,
        OptionsClipboard,
        OptionsDataTree,
        OptionsCell,
        OptionsCells,
        OptionsDebug,
        OptionsHTML
{}

export interface OptionsDebug {
    invalidOptionWarning?: boolean;
    /** Enabled by default this will provide a console warning if you are trying to set an option on the table that does not exist. With the new optional modular structure this is particularly valuable as it will prompt you if you are trying to use an option for a module that has not been installed */
    debugInvalidOptions?: boolean;
    /** Enabled by default this will provide a console warning if you try and call a function on the table before it has been initialized. */
    debugInitialization?: boolean;
    /** The debugEventsExternal option will create a console log for every external event that is fired so you can gain an understanding of which events you should be binding to. */
    debugEventsExternal?: boolean;
    /** The debugEventsInternal option will create a console log for every internal event that is fired so you can gain an understanding of which events you should be subscribing to in your modules. */
    debugEventsInternal?: boolean;

    /** Disable component function warnings */
    debugInvalidComponentFuncs?: boolean;

    /** Disable deprecation warnings */
    debugDeprecation?: boolean;
}

export interface OptionsCells extends CellCallbacks {
    /** The validationFailed event is triggered when the value entered into a cell during an edit fails to pass validation. */
    validationFailed?:
        | ((cell: CellComponent, value: any, validators: Validator[] | StandardValidatorType[]) => void)
        | undefined;
}

export interface OptionsDataTree {
    /** To enable data trees in your table, set the dataTree property to true in your table constructor: */
    dataTree?: boolean | undefined;

    /** By default the toggle element will be inserted into the first column on the table. If you want the toggle element to be inserted in a different column you can pass the field name of the column to the dataTreeElementColumn setup option. */
    dataTreeElementColumn?: boolean | string | undefined;

    /** Show tree branch icon. */
    dataTreeBranchElement?: boolean | string | undefined;

    /** Tree level indent in pixels */
    dataTreeChildIndent?: number | undefined;

    /** By default Tabulator will look for child rows in the _children field of a row data object. You can change this to look in a different field using the dataTreeChildField property in your table constructor: */
    dataTreeChildField?: string | undefined;

    /**
     * The toggle button that allows users to collapse and expand the column can be customized to meet your needs. There are two options, dataTreeExpandElement and dataTreeCollapseElement, that can be set to replace the default toggle elements with your own.
     *
     * Both options can take either an html string representing the contents of the toggle element
     */
    dataTreeCollapseElement?: string | HTMLElement | boolean | undefined;

    /** The toggle button that allows users to expand the column. */
    dataTreeExpandElement?: string | HTMLElement | boolean | undefined;

    /**
     * By default all nodes on the tree will start collapsed, you can customize the initial expansion state of the tree using the dataTreeStartExpanded option.*
     * This option can take one of three possible value types, either a boolean to indicate whether all nodes should start expanded or collapsed:
     */
    dataTreeStartExpanded?: boolean | boolean[] | ((row: RowComponent, level: number) => boolean) | undefined;

    /** Propagate selection events from parent rows to children. */
    dataTreeSelectPropagate?: boolean | undefined;
    dataTreeFilter?: boolean | undefined;
    dataTreeSort?: boolean | undefined;
    /**
     * When you are using the dataTree option with your table, the column calculations will by default only use the data for the top level rows and will ignore any children.
     * To include child rows in the column calculations set the dataTreeChildColumnCalcs option to true in the table constructor.
     */
    dataTreeChildColumnCalcs?: boolean | undefined;
}

export interface OptionsClipboard {
    /**
     * You can enable clipboard functionality using the clipboard config option. It can take one of four possible values:
     *     true - enable clipboard copy and paste
     *     "copy" - enable only copy functionality
     *     "paste" - enable only paste functionality
     *     false - disable all clipboard functionality (default)
     */
    clipboard?: boolean | "copy" | "paste" | undefined;

    /** The clipboardCopyRowRange option takes a Row Range Lookup value and allows you to choose which rows are included in the clipboard output: */
    clipboardCopyRowRange?: RowRangeLookup | undefined;

    /** You can alter the finished output to the clipboard using the clipboardCopyFormatter callback. The callback function receives two arguments, the first is a string representing the type of content to be formatted (either "plain" or "html" depending on the type of data entering the clipboard). The second argument is the string that is about to be inserted into the clipboard. The function and should return a string that will be inserted into the clipboard. */
    clipboardCopyFormatter?: "table" | ((type: "plain" | "html", output: string) => string) | undefined;

    /** By default Tabulator will include the column header titles in any clipboard data, this can be turned off by passing a value of false to the clipboardCopyHeader property: */
    clipboardCopyHeader?: boolean | undefined;

    /**
     * Tabulator has one built in paste parser, that is designed to take a table formatted text string from the clipboard and turn it into row data. it breaks the data into rows on a newline character \n and breaks the rows down to columns on a tab character \t.
     * It will then attempt to work out which columns in the data correspond to columns in the table. It tries three different ways to achieve this. First it checks the values of all columns in the first row of data to see if they match the titles of columns in the table. If any of the columns don't match it then tries the same approach but with the column fields. If either of those options match, Tabulator will map those columns to the incoming data and import it into rows. If there is no match then Tabulator will assume the columns in the data are in the same order as the visible columns in the table and import them that way.
     *
     * The inbuilt parser will reject any clipboard data that does not contain at least one row and two columns, in that case the clipboardPasteError will be triggered.
     *
     * If you extend the clipboard module to add your own parser, you can set it to be used as default with the clipboardPasteParser property.
     */
    clipboardPasteParser?: string | ((clipboard: any) => any[]) | undefined;

    /**
     * Once the data has been parsed into row data, it will be passed to a paste action to be added to the table. There are three inbuilt paste actions:
     *
     * insert - Inserts data into the table using the addRows function (default)
     * update - Updates data in the table using the updateOrAddData function
     * replace - replaces all data in the table using the setData function
     */
    clipboardPasteAction?: "insert" | "update" | "replace" | undefined;

    /**
     * By default Tabulator will copy some of the tables styling along with the data to give a better visual appearance when pasted into other documents.
     *
     * If you want to only copy the un-styled data then you should set the clipboardCopyStyled option to false in the table options object:
     */
    clipboardCopyStyled?: boolean | undefined;

    /**
     * By default Tabulator includes column headers, row groups and column calculations in the clipboard output.
     *
     * You can choose to remove column headers groups, row groups or column calculations from the output data by setting the values in the clipboardCopyConfig option in the table definition:
     */
    clipboardCopyConfig?: AdditionalExportOptions | boolean | undefined;

    /** The clipboardCopied event is triggered whenever data is copied to the clipboard. */
    clipboardCopied?: (() => void) | undefined;

    /** The clipboardPasted event is triggered whenever data is successfully pasted into the table. */
    clipboardPasted?: (() => void) | undefined;

    /** The clipboardPasteError event is triggered whenever an attempt to paste data into the table has failed because it was rejected by the paste parser. */
    clipboardPasteError?: (() => void) | undefined;

    /** When copying to clipboard you may want to apply a different group header from the one usually used in the table. You can now do this using the groupHeaderClipboard table option, which takes the same inputs as the standard groupHeader property. */
    groupHeaderClipboard?:
        | ((value: any, count: number, data: any, group: GroupComponent) => string)
        | Array<(value: any, count: number, data: any) => string>
        | undefined;

    /** When the getHtml function is called you may want to apply a different group header from the one usually used in the table. You can now do this using the groupHeaderHtmlOutput table option, which takes the same inputs as the standard groupHeader property. */
    groupHeaderHtmlOutput?:
        | ((value: any, count: number, data: any, group: GroupComponent) => string)
        | Array<(value: any, count: number, data: any) => string>
        | undefined;
}

export interface OptionsPersistentConfiguration {
    /** ID tag used to identify persistent storage information. */
    persistenceID?: string | undefined;

    /**
     * Persistence information can either be stored in a cookie or in the localStorage object, you can use the persistenceMode to choose which. It can take three possible values:
     *
     *  local - (string) Store the persistence information in the localStorage object
     *  cookie - (string) Store the persistence information in a cookie
     *  true - (boolean) check if localStorage is available and store persistence information, otherwise store in cookie (Default option)
     */
    persistenceMode?: "local" | "cookie" | true | undefined;

    /** Enable persistent storage of column layout information. */
    persistentLayout?: boolean | undefined;

    /** You can ensure the data sorting is stored for the next page load by setting the persistentSort option to true. */
    persistentSort?: boolean | undefined;

    /** You can ensure the data filtering is stored for the next page load by setting the persistentFilter option to true. */
    persistentFilter?: boolean | undefined;

    /** By setting the persistence property to true the table will persist the sort, filter, group (groupBy, groupStartOpen, groupHeader), pagination (paginationSize), and column (title, width, visibility, order) configuration of the table. */
    persistence?: true | PersistenceOptions | undefined;

    /** The persistenceWriterFunc function will receive three arguments, the persistance id of the table, the type of data to be written and an object or array representing the data */
    persistenceWriterFunc?: ((id: string, type: keyof PersistenceOptions, data: any) => any) | undefined;

    /** The persistenceReaderFunc function will receive two arguments, the persistance id of the table, and the type of data to be written. This function must synchronously return the data in the format in which it was passed to the persistenceWriterFunc function. It should return a value of false if no data was present. */
    persistenceReaderFunc?: ((id: string, type: keyof PersistenceOptions) => any) | undefined;
}

export interface PersistenceOptions {
    sort?: boolean | undefined;
    filter?: boolean | undefined;
    group?: boolean | PersistenceGroupOptions | undefined;
    page?: boolean | PersistencePageOptions | undefined;
    columns?: boolean | string[] | undefined;
    headerFilter?: boolean | undefined;
}

export interface PersistenceGroupOptions {
    groupBy?: boolean | undefined;
    groupStartOpen?: boolean | undefined;
    groupHeader?: boolean | undefined;
}

export interface PersistencePageOptions {
    size?: boolean | undefined;
    page?: boolean | undefined;
}

export interface OptionsPagination {
    pagination?: boolean;
    paginationMode?: SortMode;

    /** Set the number of rows in each page. */
    paginationSize?: number | undefined;

    /**
     * Setting this option to true will cause Tabulator to create a list of page size options, that are multiples of the current page size. In the example below, the list will have the values of 5, 10, 15 and 20.
     *
     *  When using the page size selector like this, if you use the setPageSize function to set the page size to a value not in the list, the list will be regenerated using the new page size as the starting valuer
     */
    paginationSizeSelector?: true | number[] | any[] | undefined;

    /** By default the pagination controls are added to the footer of the table. If you wish the controls to be created in another element pass a DOM node or a CSS selector for that element to the paginationElement option. */
    paginationElement?: HTMLElement | string | undefined;

    /**
     * Lookup list to link expected data fields from the server to their function
     * ```typescript
     * default: {
     *   "current_page": "current_page",
     *   "last_page": "last_page",
     *   "data": "data",
     *   }
     * ```
     */
    dataReceiveParams?: Record<string, string> | undefined;

    /**
     * Lookup list to link fields expected by the server to their function
     * ```typescript
     * default: {
     *   "page": "page",
     *   "size": "size",
     *   "sorters": "sorters",
     *   "filters": "filters",
     * }
     * ```
     */
    dataSendParams?: Record<string, string> | undefined;

    /**
     * When using the addRow function on a paginated table, rows will be added relative to the current page (ie to the top or bottom of the current page), with overflowing rows being shifted onto the next page.
     *
     * If you would prefer rows to be added relative to the table (firs/last page) then you can use the paginationAddRow option. it can take one of two values:
     *
     * page - add rows relative to current page (default)
     * table - add rows relative to the table
     */
    paginationAddRow?: "table" | "page" | undefined;

    /**
     * You can choose to display a pagination counter in the bottom left of the footer that shows a summary of the current number of rows shown out of the total.
     * If you want to have a fully customized counter, then you can pass a function to the paginationCounter option
     *
     * The formatter function accepts 5 arguments:
     *
     * pageSize - Number of rows shown per page
     * currentRow - First visible row position
     * currentPage - Current page
     * totalRows - Total rows in table
     * totalPages - Total pages in table
     * The function must return the contents of the counter, either the text value of the counter, valid HTML or a DOM node
     */
    paginationCounter?:
        | "rows"
        | "pages"
        | ((
            pageSize: number,
            currentRow: number,
            currentPage: number,
            totalRows: number,
            totalPages: number,
        ) => string | HTMLElement);

    /**
     * By default the counter will be displayed in the left of the table footer. If you would like it displayed in another element pass a DOM node or a CSS selector for that element.
     */
    paginationCounterElement?: string | HTMLElement | undefined;

    /** The number of pagination page buttons shown in the footer using the paginationButtonCount option. By default this has a value of 5. */
    paginationButtonCount?: number | undefined;

    /** Specify that a specific page should be loaded when the table first load. */
    paginationInitialPage?: number | undefined;
}

export type GroupArg = string | string[] | ((data: any) => any);

export interface OptionsRowGrouping {
    /** String/function to select field to group rows by */
    groupBy?: GroupArg | undefined;

    /**
     * By default Tabulator will create groups for rows based on the values contained in the row data. if you want to explicitly define which field values groups should be created for at each level, you can use the groupValues option.
     *
     * This option takes an array of value arrays, each item in the first array should be a list of acceptable field values for groups at that level
     */
    groupValues?: GroupValuesArg | undefined;

    /** You can use the setGroupHeader function to change the header generation function for each group. This function has one argument and takes the same values as passed to the groupHeader setup option. */
    groupHeader?:
        | ((value: any, count: number, data: any, group: GroupComponent) => string)
        | Array<(value: any, count: number, data: any) => string>
        | undefined;

    /** When printing you may want to apply a different group header from the one usually used in the table. You can now do this using the groupHeaderPrint table option, which takes the same inputs as the standard groupHeader property. */
    groupHeaderPrint?:
        | ((value: any, count: number, data: any, group: GroupComponent) => string)
        | Array<(value: any, count: number, data: any) => string>
        | undefined;

    /**
     * You can set the default open state of groups using the groupStartOpen property* * This can take one of three possible values:
     *
     * true - all groups start open (default value)
     * false - all groups start closed
     * function() - a callback to decide if a group should start open or closed
     * Group Open Function
     * If you want to decide on a group by group basis which should start open or closed then you can pass a function to the groupStartOpen property. This should return true if the group should start open or false if the group should start closed.
     */
    groupStartOpen?: boolean | ((value: any, count: number, data: any, group: GroupComponent) => boolean) | undefined;

    /**
     * By default Tabulator allows users to toggle a group open or closed by clicking on the arrow icon in the left of the group header. If you would prefer a different behavior you can use the groupToggleElement option to choose a different option:* * The option can take one of three values:
     * arrow - toggle group on arrow element click
     * header - toggle group on click anywhere on the group header element
     * false - prevent clicking anywhere in the group toggling the group
     */
    groupToggleElement?: "arrow" | "header" | false | undefined;

    /** show/hide column calculations when group is closed. */
    groupClosedShowCalcs?: boolean | undefined;

    /** The dataGrouping callback is triggered whenever a data grouping event occurs, before grouping happens. */
    dataGrouping?: (() => void) | undefined;

    /** The dataGrouping callback is triggered whenever a data grouping event occurs, after grouping happens. */
    dataGrouped?: (() => void) | undefined;

    /** The groupVisibilityChanged callback is triggered whenever a group changes between hidden and visible states. */
    groupVisibilityChanged?: ((group: GroupComponent, visible: boolean) => void) | undefined;

    /** The groupClick callback is triggered when a user clicks on a group header. */
    groupClick?: GroupEventCallback | undefined;

    /** The groupDblClick callback is triggered when a user double clicks on a group header. */
    groupDblClick?: GroupEventCallback | undefined;

    /**
     * The groupContext callback is triggered when a user right clicks on a group header.
     *
     * If you want to prevent the browsers context menu being triggered in this event you will need to include the preventDefault() function in your callback.
     */
    groupContext?: GroupEventCallback | undefined;

    /** The groupTap callback is triggered when a user taps on a group header on a touch display. */
    groupTap?: GroupEventCallback | undefined;

    /** The groupDblTap callback is triggered when a user taps on a group header on a touch display twice in under 300ms. */
    groupDblTap?: GroupEventCallback | undefined;

    /** The groupTapHold callback is triggered when a user taps on a group header on a touch display and holds their finger down for over 1 second. */
    groupTapHold?: GroupEventCallback | undefined;
    groupUpdateOnCellEdit?: boolean | undefined;
}

export interface Filter {
    field: string;
    type: FilterType;
    value: any;
}

export interface FilterParams {
    separator?: string | undefined;
    matchAll?: boolean | undefined;
}
export type FilterFunction = (field: string, type: FilterType, value: any, filterParams?: FilterParams) => void;
export interface OptionsFiltering {
    /** Array of filters to be applied on load. */
    initialFilter?: Filter[] | undefined;

    /** array of initial values for header filters. */
    initialHeaderFilter?: Array<Pick<Filter, "field" | "value">> | undefined;

    /** The dataFiltering callback is triggered whenever a filter event occurs, before the filter happens. */
    dataFiltering?: ((filters: Filter[]) => void) | undefined;

    /** The dataFiltered callback is triggered after the table dataset is filtered. */
    dataFiltered?: ((filters: Filter[], rows: RowComponent[]) => void) | undefined;

    /** When using real time header filtering, Tabulator will wait 300 milliseconds after a keystroke before triggering the filter. You can customize this delay by using the headerFilterLiveFilterDelay table setup option. */
    headerFilterLiveFilterDelay?: number | undefined;
}

export interface OptionsSorting {
    /** Array of sorters to be applied on load. */
    initialSort?: Sorter[] | undefined;

    /** reverse the order that multiple sorters are applied to the table. */
    sortOrderReverse?: boolean | undefined;
    headerSortClickElement?: "header" | "icon";
}

export interface Sorter {
    column: string;
    dir: SortDirection;
}

export interface SorterFromTable {
    /** The column component for the sorted column. */
    column: ColumnComponent;

    /** A string of the field name for the sorted column. */
    field: string;

    /** A string of either `asc` or `desc` indicating the direction of sort. */
    dir: SortDirection;
}

export interface OptionsData {
    /** A unique index value should be present for each row of data if you want to be able to programmatically alter that data at a later point, this should be either numeric or a string. By default Tabulator will look for this value in the id field for the data. If you wish to use a different field as the index, set this using the index option parameter. */
    index?: number | string | undefined;

    /** Array to hold data that should be loaded on table creation. */
    data?: any[] | undefined;
    importFormat?: "array" | "csv" | "json" | ((fileContents: string) => unknown[]);
    /** By default Tabulator will read in the file as plain text, which is the format used by all the built in importers. If you need to read the file data in a different format then you can use the importReader option to instruct the file reader to read in the file in a different format. */
    importReader?: "binary" | "buffer" | "text" | "url" | undefined;
    autoTables?: boolean;

    /** If you wish to retrieve your data from a remote source you can set the URL for the request in the ajaxURL option. */
    ajaxURL?: string | undefined;

    /** Parameters to be passed to remote Ajax data loading request. */
    ajaxParams?: {} | undefined;

    /** The HTTP request type for Ajax requests or config object for the request. */
    ajaxConfig?: HttpMethod | AjaxConfig | undefined;

    /**
     * When using a request method other than "GET" Tabulator will send any parameters with a content type of form data. You can change the content type with the ajaxContentType option. This will ensure parameters are sent in the format you expect, with the correct headers. * * The ajaxContentType option can take one of two values:
     * "form" - send parameters as form data (default option)
     * "json" - send parameters as JSON encoded string
     * If you want to use a custom content type then you can pass a content type formatter object into the ajaxContentType option. this object must have two properties, the headers property should contain all headers that should be sent with the request and the body property should contain a function that returns the body content of the request
     */
    ajaxContentType?: "form" | "json" | AjaxContentType | undefined;

    /**
     * If you need more control over the url of the request that you can get from the ajaxURL and ajaxParams properties, the you can use the ajaxURLGenerator property to pass in a callback that will generate the URL for you.
     *
     * The callback should return a string representing the URL to be requested.
     */
    ajaxURLGenerator?: ((url: string, config: any, params: any) => string) | undefined;

    /** callback function to replace inbuilt ajax request functionality */
    ajaxRequestFunc?: ((url: string, config: any, params: any) => Promise<any>) | undefined;

    /** Send filter config to server instead of processing locally */
    ajaxFiltering?: boolean | undefined;

    /** Send sorter config to server instead of processing locally */
    ajaxSorting?: boolean | undefined;

    /**
     * If you are loading a lot of data from a remote source into your table in one go, it can sometimes take a long time for the server to return the request, which can slow down the user experience.
     *
     * To speed things up in this situation Tabulator has a progressive load mode, this uses the pagination module to make a series of requests for part of the data set, one at a time, appending it to the table as the data arrives. This mode can be enable using the ajaxProgressiveLoad option. No pagination controls will be visible on screen, it just reuses the functionality of the pagination module to sequentially load the data.
     *
     * With this mode enabled, all of the settings outlined in the Ajax Documentation are still available
     *
     * There are two different progressive loading modes, to give you a choice of how data is loaded into the table.
     */
    progressiveLoad?: "load" | "scroll" | undefined;

    /** By default tabulator will make the requests to fill the table as quickly as possible. On some servers these repeats requests from the same client may trigger rate limiting or security systems. In this case you can use the ajaxProgressiveLoadDelay option to add a delay in milliseconds between each page request. */
    progressiveLoadDelay?: number | undefined;

    /** The ajaxProgressiveLoadScrollMargin property determines how close to the bottom of the table in pixels, the scroll bar must be before the next page worth of data is loaded, by default it is set to twice the height of the table. */
    progressiveLoadScrollMargin?: number | undefined;

    /** Show loader while data is loading, can also take a function that must return a boolean. */
    ajaxLoader?: boolean | (() => boolean) | undefined;

    /** html for loader element. */
    ajaxLoaderLoading?: string | undefined;

    /** html for the loader element in the event of an error. */
    ajaxLoaderError?: string | undefined;

    /** The ajaxRequesting callback is triggered when ever an ajax request is made. */
    ajaxRequesting?: ((url: string, params: any) => boolean) | undefined;

    /** The ajaxResponse callback is triggered when a successful ajax request has been made. This callback can also be used to modify the received data before it is parsed by the table. If you use this callback it must return the data to be parsed by Tabulator, otherwise no data will be rendered. */
    ajaxResponse?: ((url: string, params: any, response: any) => any) | undefined;

    /** The ajaxError callback is triggered there is an error response to an ajax request. */
    ajaxError?: ((xhr: any, textStatus: any, errorThrown: any) => void) | undefined;
    dataLoader?: boolean;
    dataLoaderLoading?: string | HTMLElement;
    dataLoaderError?: string;
    dataLoaderErrorTimeout?: number;
    sortMode?: SortMode;
    filterMode?: SortMode;
}

export type SortMode = "remote" | "local";

export interface AjaxContentType {
    headers: JSONRecord;
    body: (url: string, config: any, params: any) => any;
}

export type HttpMethod = "GET" | "POST";

export interface AjaxConfig {
    method?: HttpMethod | undefined;
    headers?: JSONRecord | undefined;
    mode?: string | undefined;
    credentials?: string | undefined;
}

export interface OptionsRows {
    /**
     * Tabulator also allows you to define a row level formatter using the rowFormatter option. this lets you alter each row of the table based on the data it contains.
     * The function accepts one argument, the RowComponent for the row being formatted.
     */
    rowFormatter?: ((row: RowComponent) => any) | undefined;

    /** When printing you may want to apply a different formatter may want to apply a different formatter from the one usually used to format the row. */
    rowFormatterPrint?: false | ((row: RowComponent) => any) | undefined;

    /** When the getHtml function is called you may want to apply a different formatter may want to apply a different formatter from the one usually used to format the row */
    rowFormatterHtmlOutput?: false | ((row: RowComponent) => any) | undefined;

    /** When copying to the clipboard you may want to apply a different formatter may want to apply a different formatter from the one usually used to format the row. You can now do this using the rowFormatterClipboard table option, which takes the same inputs as the standard rowFormatter property. Passing a value of false into the formatter prevent the default row formatter from being run when the table is copied to the clipboard. */
    rowFormatterClipboard?: false | ((row: RowComponent) => any) | undefined;

    /** The position in the table for new rows to be added, "bottom" or "top". */
    addRowPos?: "bottom" | "top" | undefined;

    /**
     * The selectable option can take one of a several values:
     * false - selectable rows are disabled
     * true - selectable rows are enabled, and you can select as many as you want
     * integer - any integer value, this sets the maximum number of rows that can be selected (when the maximum number of selected rows is exceeded, the first selected row will be deselected to allow the next row to be selected).
     * "highlight" (default) - rows have the same hover stylings as selectable rows but do not change state when clicked. This is great for when you want to show that a row is clickable but don't want it to be selectable.
     */
    selectable?: boolean | number | "highlight" | undefined;

    /**
     * By default you can select a range of rows by holding down the shift key and click dragging over a number of rows to toggle the selected state state of all rows the cursor passes over.
     *
     * If you would prefer to select a range of row by clicking on the first row then holding down shift and clicking on the end row then you can achieve this by setting the selectableRangeMode to click
     */
    selectableRangeMode?: "click" | undefined;

    /** By default, row selection works on a rolling basis, if you set the selectable option to a numeric value then when you select past this number of rows, the first row to be selected will be deselected. If you want to disable this behavior and instead prevent selection of new rows once the limit is reached you can set the selectableRollingSelection option to false. */
    selectableRollingSelection?: boolean | undefined;

    /** By default Tabulator will maintain selected rows when the table is filtered, sorted or paginated (but NOT when the setData function is used). If you want the selected rows to be cleared whenever the table view is updated then set the selectablePersistence option to false. */
    selectablePersistence?: boolean | undefined;

    /** You many want to exclude certain rows from being selected. The selectableCheck options allows you to pass a function to check if the current row should be selectable, returning true will allow row selection, false will result in nothing happening. The function should accept a RowComponent as its first argument. */
    selectableCheck?: ((row: RowComponent) => boolean) | undefined;

    /** To allow the user to move rows up and down the table, set the movableRows parameter in the options: */
    movableRows?: boolean | undefined;

    /** Tabulator also allows you to move rows between tables. To enable this you should supply either a valid CSS selector string a DOM node for the table or the Tabulator object for the table to the movableRowsConnectedTables option. if you want to connect to multiple tables then you can pass in an array of values to this option. */
    movableRowsConnectedTables?: string | string[] | HTMLElement | HTMLElement[] | undefined;

    /**
     * The movableRowsSender option should be set on the sending table, and sets the action that should be taken after the row has been successfully dropped into the receiving table.
     * There are several inbuilt sender functions:
     *
     * - false - do nothing(default)
     * - delete - deletes the row from the table
     * You can also pass a callback to the movableRowsSender option for custom sender functionality
     */
    movableRowsSender?:
        | false
        | "delete"
        | ((fromRow: RowComponent, toRow: RowComponent, toTable: Tabulator) => any)
        | undefined;

    /**
     * The movableRowsReceiver option should be set on the receiving tables, and sets the action that should be taken when the row is dropped into the table.
     * There are several inbuilt receiver functions:
     *
     * - insert - inserts row next to the row it was dropped on, if not dropped on a row it is added to the table (default)
     * - add - adds row to the table
     * - update - updates the row it is dropped on with the sent rows data
     * - replace - replaces the row it is dropped on with the sent row
     */
    movableRowsReceiver?:
        | "insert"
        | "add"
        | "update"
        | "replace"
        | ((fromRow: RowComponent, toRow: RowComponent, fromTable: Tabulator) => any)
        | undefined;
    movableRowsConnectedElements?: string | HTMLElement | undefined;

    /** When a row is dropped on element from from the movableRowsConnectedElements option the movableRowsElementDrop callback will be triggered. You can use this callback to trigger any changes as a result of the drop */
    movableRowsElementDrop?: ((e: MouseEvent, element: HTMLElement, row: RowComponent) => any) | undefined;

    /** You can allow the user to manually resize rows by dragging the top or bottom border of a row. To enable this functionality, set the resizableRows property to true. */
    resizableRows?: boolean | undefined;

    /**
     * The default ScrollTo position can be set using the scrollToRowPosition option. It can take one of four possible values:
     *
     * top - position row with its top edge at the top of the table (default)
     * center - position row with its top edge in the center of the table
     * bottom - position row with its bottom edge at the bottom of the table
     * nearest - position row on the edge of the table it is closest to
     */
    scrollToRowPosition?: ScrollToRowPosition | undefined;

    /**
     * The default option for triggering a ScrollTo on a visible element can be set using the scrollToRowIfVisible option. It can take a boolean value:
     *
     * true - scroll to row, even if it is visible (default)
     * false - scroll to row, unless it is currently visible, then don't move
     */
    scrollToRowIfVisible?: boolean | undefined;

    /** The dataTreeRowExpanded callback is triggered when a row with child rows is expanded to reveal the children. */
    dataTreeRowExpanded?: ((row: RowComponent, level: number) => void) | undefined;

    /** The dataTreeRowCollapsed callback is triggered when a row with child rows is collapsed to hide its children. */
    dataTreeRowCollapsed?: ((row: RowComponent, level: number) => void) | undefined;

    /** The movableRowsSendingStart callback is triggered on the sending table when a row is picked up from a sending table. */
    movableRowsSendingStart?: ((toTables: any[]) => void) | undefined;

    /** The movableRowsSent callback is triggered on the sending table when a row has been successfully received by a receiving table. */
    movableRowsSent?: ((fromRow: RowComponent, toRow: RowComponent, toTable: Tabulator) => void) | undefined;

    /** The movableRowsSentFailed callback is triggered on the sending table when a row has failed to be received by the receiving table. */
    movableRowsSentFailed?: ((fromRow: RowComponent, toRow: RowComponent, toTable: Tabulator) => void) | undefined;

    /** The movableRowsSendingStop callback is triggered on the sending table after a row has been dropped and any senders and receivers have been handled. */
    movableRowsSendingStop?: ((toTables: any[]) => void) | undefined;

    /** The movableRowsReceivingStart callback is triggered on a receiving table when a connection is established with a sending table. */
    movableRowsReceivingStart?: ((fromRow: RowComponent, toTable: Tabulator) => void) | undefined;

    /** The movableRowsReceived callback is triggered on a receiving table when a row has been successfully received. */
    movableRowsReceived?: ((fromRow: RowComponent, toRow: RowComponent, fromTable: Tabulator) => void) | undefined;

    /** The movableRowsReceivedFailed callback is triggered on a receiving table when a row receiver has returned false. */
    movableRowsReceivedFailed?:
        | ((fromRow: RowComponent, toRow: RowComponent, fromTable: Tabulator) => void)
        | undefined;

    /** The movableRowsReceivingStop callback is triggered on a receiving table after a row has been dropped and any senders and receivers have been handled. */
    movableRowsReceivingStop?: ((fromTable: Tabulator) => void) | undefined;

    /** The rowClick callback is triggered when a user clicks on a row. */
    rowClick?: RowEventCallback | undefined;

    /** The rowDblClick callback is triggered when a user double clicks on a row. */
    rowDblClick?: RowEventCallback | undefined;

    /**
     * The rowContext callback is triggered when a user right clicks on a row.
     * If you want to prevent the browsers context menu being triggered in this event you will need to include the preventDefault() function in your callback.
     */
    rowContext?: RowEventCallback | undefined;

    /** The rowTap callback is triggered when a user taps on a row on a touch display. */
    rowTap?: RowEventCallback | undefined;

    /** The rowDblTap callback is triggered when a user taps on a row on a touch display twice in under 300ms. */
    rowDblTap?: RowEventCallback | undefined;

    /** The rowTapHold callback is triggered when a user taps on a row on a touch display and holds their finger down for over 1 second. */
    rowTapHold?: RowEventCallback | undefined;

    /** The rowMouseEnter callback is triggered when the mouse pointer enters a row. */
    rowMouseEnter?: RowEventCallback | undefined;

    /** The rowMouseLeave callback is triggered when the mouse pointer leaves a row. */
    rowMouseLeave?: RowEventCallback | undefined;

    /** The rowMouseOver callback is triggered when the mouse pointer enters a row or any of its child elements. */
    rowMouseOver?: RowEventCallback | undefined;

    /** The rowMouseOut callback is triggered when the mouse pointer leaves a row or any of its child elements. */
    rowMouseOut?: RowEventCallback | undefined;

    /** The rowMouseMove callback is triggered when the mouse pointer moves over a row. */
    rowMouseMove?: RowEventCallback | undefined;

    /** The rowAdded callback is triggered when a row is added to the table by the addRow and updateOrAddRow functions. */
    rowAdded?: RowChangedCallback | undefined;

    /** The rowUpdated callback is triggered when a row is updated by the updateRow, updateOrAddRow, updateData or updateOrAddData, functions. */
    rowUpdated?: RowChangedCallback | undefined;

    /** The rowDeleted callback is triggered when a row is deleted from the table by the deleteRow function. */
    rowDeleted?: RowChangedCallback | undefined;

    /** The rowMoved callback will be triggered when a row has been successfully moved. */
    rowMoved?: RowChangedCallback | undefined;

    /** The rowResized callback will be triggered when a row has been resized by the user. */
    rowResized?: RowChangedCallback | undefined;

    /** Whenever the number of selected rows changes, through selection or deselection, the rowSelectionChanged event is triggered. This passes an array of the data objects for each row in the order they were selected as the first argument, and an array of row components for each of the rows in order of selection as the second argument. */
    rowSelectionChanged?: ((data: any[], rows: RowComponent[]) => void) | undefined;

    /** The rowSelected event is triggered when a row is selected, either by the user or programmatically. */
    rowSelected?: RowChangedCallback | undefined;

    /** The rowDeselected event is triggered when a row is deselected, either by the user or programmatically. */
    rowDeselected?: RowChangedCallback | undefined;

    /** Allows you to specify the behavior when the user tabs from the last editable cell on the last row of the table. */
    tabEndNewRow?: boolean | JSONRecord | ((row: RowComponent) => any) | undefined;

    frozenRowsField?: string;

    /** Freeze rows of data */
    frozenRows?: number | string[] | ((row: RowComponent) => boolean);
}

export interface OptionsColumns {
    /** The column definitions are provided to Tabulator in the columns property of the table constructor object and should take the format of an array of objects, with each object representing the configuration of one column. */
    columns?: ColumnDefinition[] | undefined;

    /** If you set the autoColumns option to true, every time data is loaded into the table through the data option or through the setData function, Tabulator will examine the first row of the data and build columns to match that data. */
    autoColumns?: boolean | undefined;
    autoColumnsDefinitions?:
        | ((columnDefinitions?: ColumnDefinition[]) => ColumnDefinition[])
        | ColumnDefinition[]
        | Record<string, Partial<ColumnDefinition>>
        | undefined;

    /** By default Tabulator will use the fitData layout mode, which will resize the tables columns to fit the data held in each column, unless you specify a width or minWidth in the column constructor. If the width of all columns exceeds the width of the containing element, a scroll bar will appear. */
    layout?: "fitData" | "fitColumns" | "fitDataFill" | "fitDataStretch" | "fitDataTable" | undefined;

    /**
     * To keep the layout of the columns consistent, once the column widths have been set on the first data load (either from the data property in the constructor or the setData function) they will not be changed when new data is loaded.
     *
     * If you would prefer that the column widths adjust to the data each time you load it into the table you can set the layoutColumnsOnNewData property to true.
     */
    layoutColumnsOnNewData?: boolean | undefined;

    /**
     * Responsive layout will automatically hide/show columns to fit the width of the Tabulator element. This allows for clean rendering of tables on smaller mobile devices, showing important data while avoiding horizontal scroll bars. You can enable responsive layouts using the responsiveLayout option.
     *
     * There are two responsive layout modes available:
     *
     * hide - hide columns that no longer fit in the table
     * collapse - collapse columns that no longer fit on the table into a list under the row
     *
     * Hide Extra Columns
     * By default, columns will be hidden from right to left as the width of the table decreases. You can choose exactly how columns are hidden using the responsive property in the column definition object.
     *
     * When responsive layout is enabled, all columns are given a default responsive value of 1. The higher you set this value the sooner that column will be hidden as the table width decreases. If two columns have the same responsive value then they are hidden from right to left (as defined in the column definition array, ignoring user moving of the columns). If you set the value to 0 then the column will never be hidden regardless of how narrow the table gets.
     */
    responsiveLayout?: boolean | "hide" | "collapse" | undefined;

    /** Collapsed lists are displayed to the user by default, if you would prefer they start closed so the user can open them you can use the responsiveLayoutCollapseStartOpen option. */
    responsiveLayoutCollapseStartOpen?: boolean | undefined;

    /**
     * By default any formatter set on the column is applied to the value that will appear in the list. while this works for most formatters it can cause issues with the progress formatter which relies on being inside a cell.
     *
     * If you would like to disable column formatting in the collapsed list, you can use the responsiveLayoutCollapseUseFormatters option:
     */
    responsiveLayoutCollapseUseFormatters?: boolean | undefined;

    /**
     * If you set the responsiveLayout option to collapse the values from hidden columns will be displayed in a title/value list under the row.
     *
     * In this mode an object containing the title of each hidden column and its value is generated and then used to generate a list displayed in a div .tabulator-responsive-collapse under the row data.
     *
     * The inbuilt collapse formatter creates a table to neatly display the hidden columns. If you would like to format the data in your own way you can use the responsiveLayoutCollapseFormatter, it take an object of the column values as an argument and must return the HTML content of the div.
     *
     * This function should return an empty string if there is no data to display.
     */
    responsiveLayoutCollapseFormatter?: ((data: any[]) => any) | undefined;

    /** To allow the user to move columns along the table, set the movableColumns parameter in the options: */
    movableColumns?: boolean | undefined;

    /** You can use the columnHeaderVertAlign option to set how the text in your column headers should be vertically. */
    columnHeaderVertAlign?: VerticalAlign | undefined;

    /**
     * The default ScrollTo position can be set using the scrollToColumnPosition option. It can take one of three possible values:
     *
     * left - position column with its left edge at the left of the table (default)
     * center - position column with its left edge in the center of the table
     * right - position column with its right edge at the right of the table
     */
    scrollToColumnPosition?: ScrollToColumnPosition | undefined;

    /**
     * The default option for triggering a ScrollTo on a visible element can be set using the scrollToColumnIfVisible option. It can take a boolean value:
     *
     * true - scroll to column, even if it is visible (default)
     * false - scroll to column, unless it is currently visible, then don't move
     */
    scrollToColumnIfVisible?: boolean | undefined;

    /**
     * By default column calculations are shown at the top and bottom of the table, unless row grouping is enabled, in which case they are shown at the top and bottom of each group.
     *
     * The columnCalcs option lets you decided where the calculations should be displayed, it can take one of four values:
     *
     * true - show calcs at top and bottom of the table, unless grouped, then show in groups (boolean, default)
     * both - show calcs at top and bottom of the table and show in groups
     * table - show calcs at top and bottom of the table only
     * group - show calcs in groups only
     */
    columnCalcs?: boolean | "both" | "table" | "group" | undefined;

    /**
     * If you need to use the . character as part of your field name, you can change the separator to any other character using the nestedFieldSeparator option
     * Set to false to disable nested data parsing
     */
    nestedFieldSeparator?: string | boolean | undefined;

    /** multiple or single column sorting */
    columnHeaderSortMulti?: boolean | undefined;

    /** The columnMoved callback will be triggered when a column has been successfully moved. */
    columnMoved?: ((column: ColumnComponent, columns: any[]) => void) | undefined;
    columnResized?: ((column: ColumnComponent) => void) | undefined;

    /** The columnVisibilityChanged callback is triggered whenever a column changes between hidden and visible states. */
    columnVisibilityChanged?: ((column: ColumnComponent, visible: boolean) => void) | undefined;

    /** The columnTitleChanged callback is triggered whenever a user edits a column title when the editableTitle parameter has been enabled in the column definition array. */
    columnTitleChanged?: ((column: ColumnComponent) => void) | undefined;

    /** By setting the headerVisible option to false you can hide the column headers and present the table as a simple list if needed. */
    headerVisible?: boolean | undefined;

    /** The headerSort option can now be set in the table options to affect all columns as well as in column definitions. */
    headerSort?: boolean | undefined;
    headerSortElement?: string | undefined | ((column: ColumnComponent, dir: "asc" | "desc" | "none") => any);
    columnDefaults?: Partial<ColumnDefinition>;
    /** If the resizableColumnFit table definition option is set to true, then when you resize a column its neighbouring column has the opposite resize applied to keep to total width of columns the same. */
    resizableColumnFit?: boolean | undefined;
}

export interface OptionsCell {
    /** The cellClick callback is triggered when a user left clicks on a cell, it can be set on a per column basis using the option in the columns definition object. */
    cellClick?: CellEventCallback | undefined;
    cellDblClick?: CellEventCallback | undefined;
    cellContext?: CellEventCallback | undefined;
    cellTap?: CellEventCallback | undefined;
    cellDblTap?: CellEventCallback | undefined;
    cellTapHold?: CellEventCallback | undefined;
    cellMouseEnter?: CellEventCallback | undefined;
    cellMouseLeave?: CellEventCallback | undefined;
    cellMouseOver?: CellEventCallback | undefined;
    cellMouseOut?: CellEventCallback | undefined;
    cellMouseMove?: CellEventCallback | undefined;
    cellEditing?: CellEditEventCallback | undefined;
    cellEdited?: CellEditEventCallback | undefined;
    cellEditCancelled?: CellEditEventCallback | undefined;
}

export interface OptionsGeneral {
    /** Sets the height of the containing element, can be set to any valid height css value. If set to false (the default), the height of the table will resize to fit the table data. */
    height?: string | number | false | undefined;

    /** Can be set to any valid CSS value. By setting this you can allow your table to expand to fit the data, but not overflow its parent element. When there are too many rows to fit in the available space, the vertical scroll bar will be shown. This has the added benefit of improving load times on larger tables */
    maxHeight?: string | number | undefined;

    /** With a variable table height you can set the minimum height of the table either defined in the min-height CSS property for the element or set it using the minHeight option in the table constructor, this can be set to any valid CSS value. */
    minHeight?: string | number | undefined;
    renderVertical?: RenderMode;
    renderHorizontal?: RenderMode;
    rowHeight?: number;

    /** Manually set the size of the virtual DOM buffer. */
    renderVerticalBuffer?: boolean | number | undefined;

    /** placeholder element to display on empty table. */
    placeholder?: string | HTMLElement | ((this: Tabulator | TabulatorFull) => string) | undefined;
    placeholderHeaderFilter?: string | HTMLElement | ((this: Tabulator | TabulatorFull) => string) | undefined;

    /** Footer  element to display for the table. */
    footerElement?: string | HTMLElement | undefined;

    /** Keybinding configuration object. */
    keybindings?: false | KeyBinding | undefined;

    /**
     * The reactivity systems allow Tabulator to watch arrays and objects passed into the table for changes and then automatically update the table.
     *
     * This approach means you no longer need to worry about calling a number of different functions on the table to make changes, you simply update the array or object you originally passed into the table and Tabulator will take care of the rest.
     *
     * You can enable reactive data by setting the reactiveData option to true in the table constructor, and then passing your data array to the data option.
     *
     * Once the table is built any changes to the array will automatically be replicated to the table without needing to call any functions on the table itself
     */
    reactiveData?: boolean | undefined;

    // Not listed in options--------------------
    /** Tabulator will automatically attempt to redraw the data contained in the table if the containing element for the table is resized. To disable this functionality, set the autoResize property to false. */
    autoResize?: boolean | undefined;

    /** When a the tabulator constructor is called, the tableBuilding callback will triggered. */
    tableBuilding?: (() => void) | undefined;

    /** When a the tabulator constructor is called and the table has finished being rendered, the tableBuilt callback will triggered: */
    tableBuilt?: (() => void) | undefined;

    /**
     * The renderStarted callback is triggered whenever all the rows in the table are about to be rendered. This can include:
     * - Data is loaded into the table when setData is called
     * - A page is loaded through any form of pagination
     * - Rows are added to the table during progressive rendering
     * - Columns are changed by setColumns
     * - The data is filtered
     * - The data is sorted
     * - The redraw function is called
     */
    renderStarted?: (() => void) | undefined;

    /** The renderComplete callback is triggered after the table has been rendered. */
    renderComplete?: (() => void) | undefined;

    /** The htmlImporting callback is triggered when Tabulator starts importing data from an HTML table. */
    htmlImporting?: EmptyCallback | undefined;

    /** The htmlImported callback is triggered when Tabulator finishes importing data from an HTML table. */
    htmlImported?: EmptyCallback | undefined;

    /** The dataChanged callback is triggered whenever the table data is changed by the user. Triggers for this include editing any cell in the table, adding a row and deleting a row. */
    dataChanged?: ((data: any) => void) | undefined;

    /** Whenever a page has been loaded, the pageLoaded callback is called, passing the current page number as an argument. */
    pageLoaded?: ((pageno: number) => void) | undefined;

    /** The dataSorting callback is triggered whenever a sort event occurs, before sorting happens. */
    dataSorting?: ((sorters: SorterFromTable[]) => void) | undefined;

    /** The dataSorted callback is triggered after the table dataset is sorted. */
    dataSorted?: ((sorters: SorterFromTable[], rows: RowComponent[]) => void) | undefined;

    /** Setting the invalidOptionWarnings option to false will disable console warning messages for invalid properties in the table constructor and column definition object. */
    invalidOptionWarnings?: boolean | undefined;

    /** Callback is triggered when the table is vertically scrolled. */
    scrollVertical?: ((top: any) => void) | undefined;

    /** Callback is triggered when the table is horizontally scrolled. */
    scrollHorizontal?: ((left: any) => void) | undefined;

    /**
     * There are now three different validation modes available to customize the validation experience:
     *
     * blocking - if a user enters an invalid value while editing, they are blocked from leaving the cell until a valid value is entered (default)
     *
     * highlight - if a user enters an invalid value, then the edit will complete as usual and they are allowed to exit the cell but a highlight is applied to the cell using the tabulator-validation-fail class
     *
     * manual - no validation is automatically performed on edit, but it can be triggered by calling the validate function on the table or any Component Object
     */
    validationMode?: "blocking" | "highlight" | "manual" | undefined;
    textDirection?: TextDirection | undefined;
}

export type RenderMode = "virtual" | "basic" | Renderer;

export interface OptionsMenu {
    rowContextMenu?: RowContextMenuSignature | undefined;
    rowClickMenu?: RowContextMenuSignature | undefined;
    rowDblClickMenu?: RowContextMenuSignature | undefined;
    groupClickMenu?: GroupContextMenuSignature | undefined;
    groupDblClickMenu?: GroupContextMenuSignature | undefined;
    groupContextMenu?: Array<MenuObject<GroupComponent>> | undefined;
    popupContainer?: boolean | string | HTMLElement;
    groupClickPopup?: string;
    groupContextPopup?: string;
    groupDblPopup?: string;
    groupDblClickPopup?: string;
    rowClickPopup?: string;
    rowContextPopup?: string;
    rowDblClickPopup?: string;
}

export type RowContextMenuSignature =
    | Array<MenuObject<RowComponent> | MenuSeparator>
    | ((e: MouseEvent, component: RowComponent) => MenuObject<RowComponent> | false | any[]);

export type GroupContextMenuSignature =
    | Array<MenuObject<GroupComponent> | MenuSeparator>
    | ((component: GroupComponent, e: MouseEvent) => MenuObject<GroupComponent> | false | any[]);

export interface MenuObject<T extends RowComponent | CellComponent | ColumnComponent | GroupComponent> {
    label: string | HTMLElement | ((component: T) => string | HTMLElement);
    action?: ((e: any, component: T) => any) | undefined;
    disabled?: boolean | ((component: T) => boolean) | undefined;
    menu?: Array<MenuObject<T>> | undefined;
}

export interface MenuSeparator {
    separator?: boolean | undefined;
}

export type DownloadType = "csv" | "json" | "xlsx" | "pdf" | "html";

export interface DownloadOptions extends DownloadCSV, DownloadXLXS, DownloadPDF, DownloadHTML {}

export interface DownloadCSV {
    /** By default CSV files are created using a comma (,) delimiter. If you need to change this for any reason the you can pass the options object with a delimiter property to the download function which will then use this delimiter instead of the comma. */
    delimiter?: string | undefined;

    /** If you need the output CSV to include a byte order mark (BOM) to ensure that output with UTF-8 characters can be correctly interpreted across different applications, you should set the bom option to true. */
    bom?: boolean | undefined;
}

export interface DownloadHTML {
    /** By default the HTML output is a simple un-styled table. if you would like to match the current table styling you can set the style property to true. */
    style?: boolean | undefined;
}

export interface DownloadXLXS {
    /** The sheet name must be a valid Excel sheet name, and cannot include any of the following characters \, /, *, [, ], :, */
    sheetName?: string | undefined;
    documentProcessing?: ((input: any) => any) | undefined;
    compress?: boolean;
    writeOptions?: Record<string, unknown>;
    test?: {};
}

export interface DownloadPDF {
    orientation?: "portrait" | "landscape" | undefined;
    title?: string | undefined;
    rowGroupStyles?: any;
    rowCalcStyles?: any;
    jsPDF?: any;
    autoTable?: {} | ((doc: any) => any) | undefined;

    /** An optional callback documentProcessing can be set on the download config object, that is passed the jsPDF document object after the auto-table creation to allow full customization of the PDF */
    documentProcessing?: ((doc: any) => any) | undefined;
}

export interface OptionsDownload {
    /**
     * Allows you to intercept the download file data before the users is prompted to save the file.
     *
     * In order for the download to proceed the downloadReady callback is expected to return a blob of file to be downloaded.
     *
     * If you would prefer to abort the download you can return false from this callback. This could be useful for example if you want to send the created file to a server via ajax rather than allowing the user to download the file.
     */
    downloadEncoder?: ((fileContents: any, mimeType: string) => Blob | false) | undefined;

    /** The downloadComplete callback is triggered when the user has been prompted to download the file. */
    downloadComplete?: (() => void) | undefined;

    /**
     * By default Tabulator includes column headers, row groups and column calculations in the download output.
     *
     * You can choose to remove column headers groups, row groups or column calculations from the output data by setting the values in the downloadConfig option in the table definition:
     */
    downloadConfig?: AdditionalExportOptions | undefined;

    /** By default, only the active rows (rows that have passed filtering) will be included in the download the downloadRowRange option takes a Row Range Lookup value and allows you to choose which rows are included in the download output. */
    downloadRowRange?: RowRangeLookup | undefined;
}

export interface OptionsHTML {
    htmlOutputConfig?: AdditionalExportOptions | undefined;

    /**
     * By Default when a page is printed that includes a Tabulator it will be rendered on the page exactly as the table is drawn. While this ise useful in most cases, some users prefer to have more control over the print output, for example showing all rows of the table, instead of just those visible with the current position of the scroll bar.
     *
     * Tabulator provides a print styling mode that will replace the Tabulator with an HTML table for the printout giving you much more control over the look and feel of the table for the print out., to enable this mode, set the printAsHtml option to true in the table constructor.
     *
     * This will replace the table (in print outs only) with a simple HTML table with the class tabulator-print-table that you can use to style the table in any way you like.
     *
     * It also has the benefit that because it is an HTML table, if it causes a page break your browser will automatically add the column headers in at the top of the next page.
     */
    printAsHtml?: boolean | undefined;

    /**
     * The HTML table will contain column header groups, row groups, and column calculations.
     *
     * You can choose to remove any of these from the output data by setting the values in the printConfig option in the table definition
     */
    printConfig?: AdditionalExportOptions | undefined;

    /** If you want your printed table to be styled to match your Tabulator you can set the printCopyStyle to true, this will copy key layout styling to the printed table. */
    printStyled?: boolean | undefined;

    /** By default, only the rows currently visible in the Tabulator will be added to the HTML table. For custom row ranges it is also possible to pass a function into the printRowRange option that should return an array of Row Components */
    printRowRange?: RowRangeLookup | (() => RowComponent[]) | undefined;

    /** You can use the printHeader table setup option to define a header to be displayed when the table is printed. */
    printHeader?: StandardStringParam | undefined;

    /** You can use the printFooter table setup option to define a footer to be displayed when the table is printed. */
    printFooter?: StandardStringParam | undefined;

    /** The printFormatter table setup option allows you to carry out any manipulation of the print output before it is displayed to the user for printing. */
    printFormatter?: ((tableHolderElement: any, tableElement: any) => any) | undefined;

    groupHeaderDownload?:
        | ((value: any, count: number, data: any, group: GroupComponent) => string)
        | Array<(value: any, count: number, data: any) => string>
        | undefined;
}

export type StandardStringParam = string | HTMLElement | (() => string | HTMLElement);

export interface AdditionalExportOptions {
    columnHeaders?: boolean | undefined;
    columnGroups?: boolean | undefined;
    rowGroups?: boolean | undefined;
    columnCalcs?: boolean | undefined;
    dataTree?: boolean | undefined;

    /** Show only raw unformatted cell values in the clipboard output. */
    formatCells?: boolean | undefined;
}

export interface OptionsLocale {
    /** You can set the current local in one of two ways. If you want to set it when the table is created, simply include the locale option in your Tabulator constructor. You can either pass in a string matching one of the language options you have defined, or pass in the boolean true which will cause Tabulator to auto-detect the browsers language settings from the navigator.language object. */
    locale?: boolean | string | undefined;

    /**
     * You can store as many languages as you like, creating an object inside the langs object with a property of the locale code for that language. A list of locale codes can be found here.
     *
     * At present there are three parts of the table that can be localized, the column headers, the header filter placeholder text and the pagination buttons. To localize the pagination buttons, create a pagination property inside your language object and give it the properties outlined below.
     *
     * If you wish you can also localize column titles by adding a columns property to your language object. You should store a property of the field name of the column you wish to change, with a value of its title. Any fields that match this will use this title instead of the one provided by the column definition array.
     */
    langs?: any;

    /** When a localization event has occurred , the localized callback will triggered, passing the current locale code and language object: */
    localized?: ((locale: string, lang: any) => void) | undefined;
}

type HistoryAction = "cellEdit" | "rowAdd" | "rowDelete" | "rowMoved";

export interface OptionsHistory {
    /** Enable user interaction history functionality */
    history?: boolean | undefined;

    /** The historyUndo event is triggered when the undo action is triggered. */
    historyUndo?: ((action: HistoryAction, component: CellComponent | RowComponent, data: any) => void) | undefined;

    /** The historyRedo event is triggered when the redo action is triggered. */
    historyRedo?: ((action: HistoryAction, component: CellComponent | RowComponent, data: any) => void) | undefined;
}

export interface ColumnLayout {
    /** title - Required This is the title that will be displayed in the header for this column. */
    title: string;

    /** field - Required (not required in icon/button columns) this is the key for this column in the data array. */
    field?: string | undefined;

    /** visible - (boolean, default - true) determines if the column is visible. (see Column Visibility for more details */
    visible?: boolean | undefined;

    /** sets the width of this column, this can be set in pixels or as a percentage of total table width (if not set the system will determine the best) */
    width?: number | string | undefined;
}

export interface ColumnDefinition extends ColumnLayout, CellCallbacks {
    /** If you want to set the horizontal alignment on a column by column basis, */
    hozAlign?: ColumnDefinitionAlign | undefined;

    headerHozAlign?: ColumnDefinitionAlign | undefined;

    /** If you want to set the vertical alignment on a column by column basis */
    vertAlign?: VerticalAlign | undefined;

    /** sets the minimum width of this column, this should be set in pixels */
    minWidth?: number | undefined;

    /** The widthGrow property should be used on columns without a width property set. The value is used to work out what fraction of the available will be allocated to the column. The value should be set to a number greater than 0, by default any columns with no width set have a widthGrow value of 1 */
    widthGrow?: number | undefined;

    /** The widthShrink property should be used on columns with a width property set. The value is used to work out how to shrink columns with a fixed width when the table is too narrow to fit in all the columns. The value should be set to a number greater than 0, by default columns with a width set have a widthShrink value of 0, meaning they will not be shrunk if the table gets too narrow, and may cause the horizontal scrollbar to appear. */
    widthShrink?: number | undefined;

    /** set whether column can be resized by user dragging its edges */
    resizable?: true | false | "header" | "cell" | undefined;

    /** You can freeze the position of columns on the left and right of the table using the frozen property in the column definition array. This will keep the column still when the table is scrolled horizontally. */
    frozen?: boolean | undefined;

    /** an integer to determine when the column should be hidden in responsive mode. */
    responsive?: number | undefined;

    /**
     * Sets the on hover tooltip for each cell in this column * * The tooltip parameter can take three different types of value:
     * - boolean - a value of false disables the tooltip, a value of true sets the tooltip of the cell to its value
     * - string - a string that will be displayed for all cells in the matching column/table.
     * - function - a callback function that returns the string for the cell
     * Note: setting a tooltip value on a column will override the global setting.
     */
    tooltip?: string | GlobalTooltipOption | undefined;

    /** sets css classes on header and cells in this column. (value should be a string containing space separated class names) */
    cssClass?: string | undefined;

    /** sets the column as a row handle, allowing it to be used to drag movable rows. */
    rowHandle?: boolean | undefined;

    /** When the getHtml function is called, hide the column from the output. */
    hideInHtml?: boolean | undefined;

    // Data Manipulation
    /**
     * By default Tabulator will attempt to guess which sorter should be applied to a column based on the data contained in the first row. It can determine sorters for strings, numbers, alphanumeric sequences and booleans, anything else will be treated as a string.
     * To specify a sorter to be used on a column use the sorter property in the columns definition object
     *
     * You can pass an optional additional property with sorter, sorterParams that should contain an object with additional information for configuring the sorter
     */
    sorter?:
        | "string"
        | "number"
        | "alphanum"
        | "boolean"
        | "exists"
        | "date"
        | "time"
        | "datetime"
        | "array"
        | ((
            a: any,
            b: any,
            aRow: RowComponent,
            bRow: RowComponent,
            column: ColumnComponent,
            dir: SortDirection,
            sorterParams: {},
        ) => number)
        | undefined;

    /** If you want to dynamically generate the sorterParams at the time the sort is called you can pass a function into the property that should return the params object. */
    sorterParams?: ColumnDefinitionSorterParams | ColumnSorterParamLookupFunction | undefined;

    /** Set how you would like the data to be formatted. */
    formatter?: Formatter | undefined;

    /** You can pass an optional additional parameter with the formatter, formatterParams that should contain an object with additional information for configuring the formatter. */
    formatterParams?: FormatterParams | undefined;

    /** alter the row height to fit the contents of the cell instead of hiding overflow */
    variableHeight?: boolean | undefined;

    /** There are some circumstances where you may want to block edit-ability of a cell for one reason or another. To meet this need you can use the editable option. This lets you set a callback that is executed before the editor is built, if this callback returns true the editor is added, if it returns false the edit is aborted and the cell remains a non editable cell. The function is passed one parameter, the CellComponent of the cell about to be edited. You can also pass a boolean value instead of a function to this property. */
    editable?: boolean | ((cell: CellComponent) => boolean) | undefined;

    /**
     * When a user clicks on an editable column the will be able to edit the value for that cell.
     *
     * By default Tabulator will use an editor that matches the current formatter for that cell. if you wish to specify a specific editor, you can set them per column using the editor option in the column definition. Passing a value of true to this option will result in Tabulator applying the editor that best matches the columns formatter, if present.
     *
     * You can pass an optional additional parameter with the editor, editorParams that should contain an object with additional information for configuring the editor.
     */
    editor?: Editor | undefined;

    /** additional parameters you can pass to the editor. */
    editorParams?: EditorParams | undefined;

    /**
     * Validators are used to ensure that any user input into your editable cells matches your requirements.
     *
     * Validators can be applied by using the validator property in a columns definition object (see Define Columns for more details).
     */
    validator?: StandardValidatorType | StandardValidatorType[] | Validator | Validator[] | string | undefined;

    /**
     * Mutators are used to alter data as it is parsed into  For example if you wanted to convert a numeric column into a boolean based on its value, before the data is used to build the table.
     *
     * You can set mutators on a per column basis using the mutator option in the column definition object.
     *
     * You can pass an optional additional parameter with mutator, mutatorParams that should contain an object with additional information for configuring the mutator.
     */
    mutator?: CustomMutator | undefined;

    /** You can pass an optional additional parameter with mutator, mutatorParams that should contain an object with additional information for configuring the mutator. */
    mutatorParams?: CustomMutatorParams | undefined;

    /** only called when data is loaded via a command {eg. setData). */
    mutatorData?: CustomMutator | undefined;

    mutatorDataParams?: CustomMutatorParams | undefined;

    /** only called when data is changed via a user editing a cell. */
    mutatorEdit?: CustomMutator | undefined;

    mutatorEditParams?: CustomMutatorParams | undefined;

    /** only called when data is changed via a user editing a cell. */
    mutatorClipboard?: CustomMutator | undefined;

    mutatorClipboardParams?: CustomMutatorParams | undefined;

    /**
     * Accessors are used to alter data as it is extracted from the table, through commands, the clipboard, or download.
     *
     * You can set accessors on a per column basis using the accessor option in the column definition object.
     */
    accessor?: CustomAccessor | undefined;

    /** Each accessor function has its own matching params option, for example accessorDownload has accessorDownloadParams. */
    accessorParams?: CustomAccessorParams | undefined;

    /** only called when data is being converted into a downloadable file. */
    accessorDownload?: CustomAccessor | undefined;

    /** additional parameters you can pass to the accessorDownload. */
    accessorDownloadParams?: CustomAccessorParams | undefined;

    /** only called when data is being copied into the clipboard. */
    accessorClipboard?: CustomAccessor | undefined;

    /** Additional parameters you can pass to the accessorClipboard. */
    accessorClipboardParams?: CustomAccessorParams | undefined;

    /** show or hide column in downloaded data */
    download?: boolean | undefined | ((column: ColumnComponent) => boolean);

    /** set custom title for column in download. */
    titleDownload?: string | undefined;

    /** the column calculation to be displayed at the top of this column(see Column Calculations for more details) */
    topCalc?: ColumnCalc | undefined;

    /** additional parameters you can pass to the topCalc calculation function (see Column Calculations for more details) */
    topCalcParams?: ColumnCalcParams | undefined;

    /** Formatter for the topCalc calculation cell. */
    topCalcFormatter?: Formatter | undefined;

    /** additional parameters you can pass to the topCalcFormatter function. */
    topCalcFormatterParams?: FormatterParams | undefined;
    bottomCalc?: ColumnCalc | undefined;
    bottomCalcParams?: ColumnCalcParams | undefined;
    bottomCalcFormatter?: Formatter | undefined;

    /** additional parameters you can pass to the bottomCalcFormatter function. */
    bottomCalcFormatterParams?: FormatterParams | undefined;

    // Column Header
    /** By default all columns in a table are sortable by clicking on the column header, if you want to disable this behavior, set the headerSort property to false in the column definition array: */
    headerSort?: boolean | undefined;

    /** set the starting sort direction when a user first clicks on a header. */
    headerSortStartingDir?: SortDirection | undefined;

    /** allow tristate toggling of column header sort direction. */
    headerSortTristate?: boolean | undefined;

    /** Callback for when user clicks on the header for this column. */
    headerClick?: ColumnEventCallback | undefined;

    /** Callback for when user double clicks on the header for this column. */
    headerDblClick?: ColumnEventCallback | undefined;
    headerMouseDown?: ColumnEventCallback | undefined;
    headerMouseUp?: ColumnEventCallback | undefined;

    /** Callback for when user right clicks on the header for this column. */
    headerContext?: ColumnEventCallback | undefined;

    /** callback for when user taps on a header for this column, triggered in touch displays. */
    headerTap?: ColumnEventCallback | undefined;

    /** callback for when user double taps on a header for this column, triggered in touch displays when a user taps the same header twice in under 300ms */
    headerDblTap?: ColumnEventCallback | undefined;

    /** callback for when user taps and holds on a header for this column, triggered in touch displays when a user taps and holds the same header for 1 second. */
    headerTapHold?: ColumnEventCallback | undefined;

    /**
     * sets the on hover tooltip for the column header* * The tooltip headerTooltip can take three different types of value
     *
     * - boolean - a value of false disables the tooltip, a value of true sets the tooltip of the column header to its title value.
     * - string - a string that will be displayed for the tooltip.
     * - function - a callback function that returns the string for the column header*
     */
    headerTooltip?: boolean | string | ((column: ColumnComponent) => string) | undefined;

    /**
     * Change the orientation of the column header to vertical* * The headerVertical property can take one of three values:
     *
     * - false - vertical columns disabled (default value)
     * - true - vertical columns enabled
     * - "flip" - vertical columns enabled, with text direction flipped by 180 degrees*
     */
    headerVertical?: boolean | "flip" | undefined;

    /** allows the user to edit the header titles */
    editableTitle?: boolean | undefined;

    /** formatter function for header title. */
    titleFormatter?: Formatter | undefined;

    /** additional parameters you can pass to the header title formatter. */
    titleFormatterParams?: FormatterParams | undefined;

    /** filtering of columns from elements in the header. */
    headerFilter?: Editor | undefined;

    /** additional parameters you can pass to the header filter. */
    headerFilterParams?: EditorParams | undefined;

    /** placeholder text for the header filter. */
    headerFilterPlaceholder?: string | undefined;

    /** function to check when the header filter is empty */
    headerFilterEmptyCheck?: ValueBooleanCallback | undefined;

    /**
     * By default Tabulator will try and match the comparison type to the type of element used for the header filter.
     *
     * Standard input elements will use the "like" filter, this allows for the matches to be displayed as the user types.
     *
     * For all other element types (select boxes, check boxes, input elements of type number) an "=" filter type is used.
     *
     * If you want to specify the type of filter used you can pass it to the headerFilterFunc option in the column definition object. This will take any of the standard filters outlined above or a custom function
     */
    headerFilterFunc?:
        | FilterType
        | ((headerValue: any, rowValue: any, rowdata: any, filterparams: any) => boolean)
        | undefined;

    /** additional parameters object passed to the headerFilterFunc function. */
    headerFilterFuncParams?: any;

    /** disable live filtering of the table. */
    headerFilterLiveFilter?: boolean | undefined;

    /** Show/Hide a particular column in the HTML output. */
    htmlOutput?: boolean | undefined | ((column: ColumnComponent) => boolean);

    /** If you don't want to show a particular column in the clipboard output you can set the clipboard property in its column definition object to false. */
    clipboard?: boolean | undefined | ((column: ColumnComponent) => boolean);

    /** If you don't want to show a particular column in the print table you can set the print property in its column definition object to false. */
    print?: boolean | undefined | ((column: ColumnComponent) => boolean);

    /** A column can be a "group" of columns (Example: group header column -> Measurements, grouped column -> Length, Width, Height) */
    columns?: ColumnDefinition[] | undefined;

    /** You can add a menu to any column by passing an array of menu items to the headerMenu option in that columns definition. */
    headerMenu?: Array<MenuObject<ColumnComponent> | MenuSeparator> | undefined;

    /** The headerMenuIcon option will accept one of three types of value. You can pass in a string for the HTML contents of the button. Or you can pass the DOM node for the button. Though be careful not to pass the same node to multple columns or you may run into issues. Or you can define a function that is called when the column header is rendered that should return either an HTML string or the contents of the element. This funtion is passed the column component as its first argument. */
    headerMenuIcon?: string | HTMLElement | ((component: ColumnComponent) => HTMLElement | string);

    /** You can add a right click context menu to any column by passing an array of menu items to the headerContextMenu option in that columns definition. */
    headerContextMenu?: Array<MenuObject<ColumnComponent> | MenuSeparator> | undefined;
    headerDblClickPopup?: string;
    dblClickPopup?: string;

    /** You can add a right click context menu to any columns cells by passing an array of menu items to the contextMenu option in that columns definition. */
    contextMenu?: Array<MenuObject<CellComponent> | MenuSeparator> | undefined;
    clickMenu?: Array<MenuObject<CellComponent> | MenuSeparator> | undefined;
    headerDblClickMenu?: Array<MenuObject<CellComponent> | MenuSeparator> | undefined;
    dblClickMenu?: Array<MenuObject<CellComponent> | MenuSeparator> | undefined;

    /** Popups work in a similar way to menus, but instead of only displaying lists of menu items they allow you to fill them with any custom content you like, text, input elements, forms, anything you fancy. */
    cellPopup?:
        | string
        | ((e: MouseEvent, component: RowComponent | CellComponent | ColumnComponent, onRendered: () => any) => any);

    /** When copying to the clipboard you may want to apply a different formatter from the one usually used to format the cell, you can do this using the formatterClipboard column definition option. You can use the formatterClipboardParams to pass in any additional params to the formatter. */
    formatterClipboard?: Formatter | false | undefined;
    formatterClipboardParams?: FormatterParams | undefined;

    /** When printing you may want to apply a different formatter from the one usually used to format the cell, you can do this using the formatterPrint column definition option. You can use the formatterPrintParams to pass in any additional params to the formatter. */
    formatterPrint?: Formatter | false | undefined;

    formatterPrintParams?: FormatterParams | undefined;

    /** You can use the accessorPrint and accessorPrintParams options on a column definition to alter the value of data in a column before it is printed. */
    accessorPrint?: CustomAccessor | undefined;
    accessorPrintParams?: CustomAccessorParams | undefined;

    /** You can use the accessorHtmlOutput and accessorHtmlOutputParams options on a column definition to alter the value of data in a column before the html is generated. */
    accessorHtmlOutput?: CustomAccessor | undefined;
    accessorHtmlOutputParams?: CustomAccessorParams | undefined;

    /** When the getHtml function is called you may want to apply a different formatter from the one usually used to format the cell, you can do this using the formatterHtmlOutput column definition option. */
    formatterHtmlOutput?: Formatter | false | undefined;
    formatterHtmlOutputParams?: FormatterParams | undefined;

    /** When copying to clipboard you may want to apply a different column header title from the one usually used in the table. You can now do this using the titleClipboard column definition option, which takes the same inputs as the standard title property. */
    titleClipboard?: string | undefined;

    /** When the getHtml function is called you may want to apply a different column header title from the one usually used in the table. You can now do this using the titleHtmlOutput column definition option, which takes the same inputs as the standard title property. */
    titleHtmlOutput?: string | undefined;

    /** When printing you may want to apply a different column header title from the one usually used in the table. You can now do this using the titlePrint column definition option, which takes the same inputs as the standard title property. */
    titlePrint?: string | undefined;
    maxWidth?: number | false | undefined;
    headerWordWrap?: boolean;
}

export interface CellCallbacks {
    // Cell Events
    /** callback for when user clicks on a cell in this column. */
    cellClick?: CellEventCallback | undefined;

    /** callback for when user double clicks on a cell in this column. */
    cellDblClick?: CellEventCallback | undefined;

    /** callback for when user right clicks on a cell in this column. */
    cellContext?: CellEventCallback | undefined;

    /** callback for when user taps on a cell in this column, triggered in touch displays. */
    cellTap?: CellEventCallback | undefined;

    /** callback for when user double taps on a cell in this column, triggered in touch displays when a user taps the same cell twice in under 300ms. */
    cellDblTap?: CellEventCallback | undefined;

    /** callback for when user taps and holds on a cell in this column, triggered in touch displays when a user taps and holds the same cell for 1 second. */
    cellTapHold?: CellEventCallback | undefined;

    /** callback for when the mouse pointer enters a cell */
    cellMouseEnter?: CellEventCallback | undefined;

    /** callback for when the mouse pointer leaves a cell */
    cellMouseLeave?: CellEventCallback | undefined;

    /** callback for when the mouse pointer enters a cell or one of its child elements */
    cellMouseOver?: CellEventCallback | undefined;

    /** callback for when the mouse pointer enters a cell or one of its child elements */
    cellMouseOut?: CellEventCallback | undefined;

    /** callback for when the mouse pointer moves over a cell. */
    cellMouseMove?: CellEventCallback | undefined;

    // Cell editing
    /** callback for when a cell in this column is being edited by the user. */
    cellEditing?: CellEditEventCallback | undefined;

    /** callback for when a cell in this column has been edited by the user. */
    cellEdited?: CellEditEventCallback | undefined;

    /** callback for when an edit on a cell in this column is aborted by the user. */
    cellEditCancelled?: CellEditEventCallback | undefined;

    cellMouseDown?: CellEventCallback | undefined;
    cellMouseUp?: CellEventCallback | undefined;
}

export interface ColumnDefinitionSorterParams {
    format?: string | undefined;
    locale?: string | boolean | undefined;
    alignEmptyValues?: "top" | "bottom" | undefined;
    type?: "length" | "sum" | "max" | "min" | "avg" | undefined;
}

export type GroupValuesArg = any[][];

export type TextDirection = "auto" | "ltr" | "rtl";

export type GlobalTooltipOption = boolean | ((event: MouseEvent, cell: CellComponent, onRender: () => void) => string);

export type CustomMutator = (
    value: any,
    data: any,
    type: "data" | "edit",
    mutatorParams: any,
    cell?: CellComponent,
) => any;

export type CustomMutatorParams = {} | ((value: any, data: any, type: "data" | "edit", cell?: CellComponent) => any);

export type CustomAccessor = (
    value: any,
    data: any,
    type: "data" | "download" | "clipboard",
    AccessorParams: any,
    column?: ColumnComponent,
    row?: RowComponent,
) => any;

export type CustomAccessorParams =
    | {}
    | ((
        value: any,
        data: any,
        type: "data" | "download" | "clipboard",
        column?: ColumnComponent,
        row?: RowComponent,
    ) => any);

export type ColumnCalc =
    | "avg"
    | "max"
    | "min"
    | "sum"
    | "concat"
    | "count"
    | "unique"
    | ((values: any[], data: any[], calcParams: {}) => any);

export type ColumnCalcParams = { precision: number } | ((values: any, data: any) => any);

export type Formatter =
    | "plaintext"
    | "textarea"
    | "html"
    | "money"
    | "image"
    | "datetime"
    | "datetimediff"
    | "link"
    | "tickCross"
    | "color"
    | "star"
    | "traffic"
    | "progress"
    | "lookup"
    | "buttonTick"
    | "buttonCross"
    | "rownum"
    | "handle"
    | "rowSelection"
    | "responsiveCollapse"
    | ((cell: CellComponent, formatterParams: {}, onRendered: EmptyCallback) => string | HTMLElement);

export type FormatterParams =
    | MoneyParams
    | ImageParams
    | LinkParams
    | DateTimeParams
    | DateTimeDifferenceParams
    | TickCrossParams
    | TrafficParams
    | ProgressBarParams
    | StarRatingParams
    | RowSelectionParams
    | JSONRecord
    | ((cell: CellComponent) => {});

export type Editor =
    | true
    | "input"
    | "textarea"
    | "number"
    | "range"
    | "tickCross"
    | "star"
    | "list"
    | "date"
    | "time"
    | "datetime"
    | ((
        cell: CellComponent,
        onRendered: EmptyCallback,
        success: ValueBooleanCallback,
        cancel: ValueVoidCallback,
        editorParams: {},
    ) => HTMLElement | false);

export type EditorParams =
    | NumberParams
    | CheckboxParams
    | ListEditorParams
    | InputParams
    | TextAreaParams
    | DateParams
    | TimeParams
    | DateTimeEditorParams
    | ((cell: CellComponent) => {});

export type ScrollToRowPosition = "top" | "center" | "bottom" | "nearest";
export type PopupPosition = ColumnDefinitionAlign | "top" | "bottom";

export type ScrollToColumnPosition = "left" | "center" | "middle" | "right";

export type ColumnDefinitionAlign = "left" | "center" | "right";

export type VerticalAlign = "top" | "middle" | "bottom";

export interface MoneyParams {
    // Money
    decimal?: string | undefined;
    thousand?: string | undefined;
    symbol?: string | undefined;
    symbolAfter?: boolean | undefined;
    precision?: boolean | number | undefined;
    negativeSign?: string | true;
}

export interface ImageParams {
    // Image
    height?: string | undefined;
    width?: string | undefined;
    urlPrefix?: string | undefined;
    urlSuffix?: string | undefined;
}

export interface LinkParams {
    // Link
    labelField?: string | undefined;
    label?: string | ((cell: CellComponent) => string) | undefined;
    urlPrefix?: string | undefined;
    urlField?: string | undefined;
    url?: string | ((cell: CellComponent) => string) | undefined;
    target?: string | undefined;
    download?: boolean | undefined;
}

export interface DateTimeParams {
    // datetime
    inputFormat?: string | undefined;
    outputFormat?: string | undefined;
    invalidPlaceholder?: true | string | number | ValueStringCallback | undefined;
    timezone?: string | undefined;
}

export interface DateTimeDifferenceParams extends DateTimeParams {
    // Date Time Difference
    date?: any;
    humanize?: boolean | undefined;
    unit?: "years" | "months" | "weeks" | "days" | "hours" | "minutes" | "seconds" | undefined;
    suffix?: boolean | undefined;
}

export interface TickCrossParams {
    // Tick Cross
    allowEmpty?: boolean | undefined;
    allowTruthy?: boolean | undefined;
    tickElement?: boolean | string | undefined;
    crossElement?: boolean | string | undefined;
}

export interface TrafficParams {
    // Traffic
    min?: number | undefined;
    max?: number | undefined;
    color?: Color | undefined;
}

export interface ProgressBarParams extends TrafficParams {
    // Progress Bar
    legend?: string | true | ValueStringCallback | undefined;
    legendColor?: Color | undefined;
    legendAlign?: Align | undefined;
}

export interface StarRatingParams {
    // Star Rating
    stars?: number | undefined;
}

export interface RowSelectionParams {
    rowRange?: RowRangeLookup | undefined;
}

export interface SharedEditorParams {
    elementAttributes?: JSONRecord | undefined;

    /**
     * Built-in editors based on input elements such as the input, number, textarea and autocomplete editors have the ability to mask the users input to restrict it to match a given pattern.
     *
     * This can be set by passing a string to the the mask option in the columns editorParams
     * Each character in the string passed to the mask option defines what type of character can be entered in that position in the editor.
     *
     * - A - Only a letter is valid in this position
     * - 9 - Only a number is valid in this position
     * - `*` - Any character is valid in this position
     *
     * Any other character - The character in this position must be the same as the mask
     * For example, a mask string of "AAA-999" would require the user to enter three letters followed by a hyphen followed by three numbers
     *
     * If you want to use the characters A, 9 or * as fixed characters then it is possible to change the characters looked for in the mask by using the maskLetterChar, maskNumberChar and maskWildcardChar options in the editorParams
     */
    mask?: string | undefined;

    /** you are using fixed characters in your mask (any character other that A, 9 or *), then you can get the mask to automatically fill in these characters for you as you type by setting the maskAutoFill option in the editorParams to true. */
    maskAutoFill?: boolean | undefined;
    maskLetterChar?: string | undefined;
    maskNumberChar?: string | undefined;
    maskWildcardChar?: string | undefined;
}

export interface NumberParams extends SharedEditorParams {
    // range,number
    min?: number | undefined;
    max?: number | undefined;
    step?: number | undefined;
    verticalNavigation?: "editor" | "table" | undefined;
    /** When the editor is loaded select its text content */
    selectContents?: boolean | undefined;
}

export interface InputParams extends SharedEditorParams {
    /** Changes input type to 'search' and shows an 'X' clear button to clear the cell value easily. */
    search?: boolean | undefined;
    /** When the editor is loaded select its text content */
    selectContents?: boolean | undefined;
}

export interface TextAreaParams extends SharedEditorParams {
    verticalNavigation?: "editor" | "table" | "hybrid" | undefined;

    /** Allow submission of the value of the editor when the shift and enter keys are pressed together. */
    shiftEnterSubmit?: boolean;
    /** When the editor is loaded select its text content */
    selectContents?: boolean | undefined;
}

type VerticalNavigationOptions = "editor" | "table";

export interface CheckboxParams extends SharedEditorParams {
    // tick
    tristate?: boolean | undefined;
    indeterminateValue?: string | undefined;
}

export interface SharedSelectAutoCompleteEditorParams {
    defaultValue?: string | undefined;
    sortValuesList?: "asc" | "desc" | undefined;
}

export interface DateParams extends SharedEditorParams {
    min?: string;
    max?: string;
    format?: string;
    verticalNavigation?: VerticalNavigationOptions;
}

export interface TimeParams extends SharedEditorParams {
    format?: string;
    verticalNavigation?: VerticalNavigationOptions;
}

export interface DateTimeEditorParams extends SharedEditorParams {
    format?: string;
    verticalNavigation?: VerticalNavigationOptions;
}

export interface LabelValue {
    label: string;
    value: string | number | boolean;
}

export interface ListEditorParams extends SharedEditorParams, SharedSelectAutoCompleteEditorParams {
    values?: true | string[] | JSONRecord | string | any[] | LabelValue[];
    valuesURL?: string;
    valuesLookup?: RowRangeLookup;
    valuesLookupField?: string;
    clearable?: boolean;
    itemFormatter?: ((label: string, value: string, item: any, element: HTMLElement) => string) | undefined;
    sort?: SortDirection;
    emptyValue?: any;
    maxWidth?: boolean;
    placeholderLoading?: string;
    placeholderEmpty?: string;
    multiselect?: boolean;
    autocomplete?: boolean;
    filterFunc?: ((term: string, label: string, value: string[], item: any) => any) | undefined;
    filterRemote?: boolean;
    filterDelay?: number;
    allowEmpty?: boolean | undefined;
    listOnEmpty?: boolean;
    freetext?: boolean | undefined;
    showListOnEmpty?: boolean | undefined;
    verticalNavigation?: "editor" | "table" | "hybrid" | undefined;
}

export type ValueStringCallback = (value: any) => string;

export type ValueBooleanCallback = (value: any) => boolean;

export type ValueVoidCallback = (value: any) => void;

export type EmptyCallback = (callback: () => void) => void;

export type CellEventCallback = (e: UIEvent, cell: CellComponent) => void;

export type CellEditEventCallback = (cell: CellComponent) => void;

export type ColumnEventCallback = (e: UIEvent, column: ColumnComponent) => void;

export type RowEventCallback = (e: UIEvent, row: RowComponent) => void;

export type RowChangedCallback = (row: RowComponent) => void;

export type GroupEventCallback = (e: UIEvent, group: GroupComponent) => void;

export type SortDirection = "asc" | "desc";

export type FilterType = "=" | "!=" | "like" | "<" | ">" | "<=" | ">=" | "in" | "regex" | "starts" | "ends";

export type Color = string | any[] | ValueStringCallback;

export type Align = "center" | "left" | "right" | "justify";

export type JSONRecord = Record<string, string | number | boolean>;

export type StandardValidatorType = "required" | "unique" | "integer" | "float" | "numeric" | "string";

export interface Validator {
    type: StandardValidatorType | ((cell: CellComponent, value: any, parameters?: any) => boolean);
    parameters?: any;
}

export type ColumnSorterParamLookupFunction = (column: ColumnComponent, dir: SortDirection) => {};

export type ColumnLookup = ColumnComponent | ColumnDefinition | HTMLElement | string;

export type RowLookup = RowComponent | HTMLElement | string | number | number[] | string[];

export type RowRangeLookup = "visible" | "active" | "selected" | "all";

export interface KeyBinding {
    navPrev?: string | boolean | undefined;
    navNext?: string | boolean | undefined;
    navLeft?: string | boolean | undefined;
    navRight?: string | boolean | undefined;
    navUp?: string | boolean | undefined;
    navDown?: string | boolean | undefined;
    undo?: string | boolean | undefined;
    redo?: string | boolean | undefined;
    scrollPageUp?: string | boolean | undefined;
    scrollPageDown?: string | boolean | undefined;
    scrollToStart?: string | boolean | undefined;
    scrollToEnd?: string | boolean | undefined;
    copyToClipboard?: string | boolean | undefined;
}

// Components-------------------------------------------------------------------
export interface CalculationComponent {
    /** The getData function returns the data object for the row. */
    getData: () => any;

    /** The getElement function returns the DOM node for the row. */
    getElement: () => HTMLElement;

    /** The getTable function returns the Tabulator object for the table containing the row. */
    getTable: () => Tabulator;

    /** The getCells function returns an array of CellComponent objects, one for each cell in the row. */
    getCells: () => CellComponent[];

    /** The getCell function returns the CellComponent for the specified column from this row. */
    getCell: (column: ColumnComponent | HTMLElement | string) => CellComponent;
}

export interface RowComponent extends CalculationComponent {
    /** The getNextRow function returns the Row Component for the next visible row in the table, if there is no next row it will return a value of false. */
    getNextRow: () => RowComponent | false;

    /** The getNextRow function returns the Row Component for the previous visible row in the table, if there is no next row it will return a value of false. */
    getPrevRow: () => RowComponent | false;

    /** The getIndex function returns the index value for the row. (this is the value from the defined index column, NOT the row's position in the table). */
    getIndex: () => any;

    /**
     * Use the getPosition function to retrieve the numerical position of a row in the table. By default this will return the position of the row in all data, including data currently filtered out of the table.
     *
     * If you want to get the position of the row in the currently filtered/sorted data, you can pass a value of true to the optional first argument of the function.
     */
    getPosition: (filteredPosition?: boolean) => number | false;

    /** When using grouped rows, you can retrieve the group component for the current row using the getGroup function. */
    getGroup: () => GroupComponent;

    /**
     * The delete function deletes the row, removing its data from the table
     *
     * The delete method returns a promise, this can be used to run any other commands that have to be run after the row has been deleted. By running them in the promise you ensure they are only run after the row has been deleted.
     */
    delete: () => Promise<void>;

    /** The scrollTo function will scroll the table to the row if it passes the current filters. */
    scrollTo: (position?: "top" | "center" | "bottom" | "nearest", scrollIfVisible?: boolean) => Promise<void>;

    /** The pageTo function will load the page for the row if it passes the current filters. */
    pageTo: () => Promise<void>;

    /**
     * You can move a row next to another row using the move function.
     *
     * The first argument should be the target row that you want to move to, and can be any of the standard row component look up options.
     *
     * The second argument determines whether the row is moved to above or below the target row. A value of false will cause to the row to be placed below the target row, a value of true will result in the row being placed above the target
     */
    move: (lookup: RowComponent | HTMLElement | number, belowTarget?: boolean) => void;

    /** You can update the data in the row using the update function. You should pass an object to the function containing any fields you wish to update. This object will not replace the row data, only the fields included in the object will be updated. */
    update: (data: {}) => Promise<void>;

    /** The select function will select the current row. */
    select: () => void;

    /** The deselect function will deselect the current row. */
    deselect: () => void;

    /** The deselect function will toggle the current row. */
    toggleSelect: () => void;

    /** The isSelected function will return a boolean representing the current selected state of the row. */
    isSelected: () => boolean;

    /** If you are making manual adjustments to elements contained within the row, it may sometimes be necessary to recalculate the height of all the cells in the row to make sure they remain aligned. Call the normalizeHeight function to do this. */
    normalizeHeight: () => void;

    /** If you want to re-format a row once it has been rendered to re-trigger the cell formatters and the rowFormatter callback, Call the reformat function. */
    reformat: () => void;

    /** You can freeze a row at the top of the table by calling the freeze function. This will insert the row above the scrolling portion of the table in the table header. */
    freeze: () => void;

    /** A frozen row can be unfrozen using the unfreeze function. This will remove the row from the table header and re-insert it back in the table. */
    unfreeze: () => void;

    /** When the tree structure is enabled the treeExpand function will expand current row and show its children. */
    treeExpand: () => void;

    /** When the tree structure is enabled the treeCollapse function will collapse current row and hide its children. */
    treeCollapse: () => void;

    /** When the tree structure is enabled the treeToggle function will toggle the collapsed state of the current row. */
    treeToggle: () => void;

    /** When the tree structure is enabled the getTreeParent function will return the Row Component for the parent of this row. If no parent exists, a value of false will be returned. */
    getTreeParent: () => RowComponent | false;

    /** When the tree structure is enabled the getTreeChildren function will return an array of Row Components for this rows children. */
    getTreeChildren: () => RowComponent[];

    /**
     * Add child rows to a data tree row
     *
     * The first argument should be a row data object. If you do not pass data for a column, it will be left empty. To create a blank row (ie for a user to fill in), pass an empty object to the function.
     *
     * The second argument is optional and determines whether the row is added to the top or bottom of the array of child rows. A value of true will add the row to the top of the array, a value of false will add the row to the bottom of the array. If the parameter is not set the row will be placed according to the addRowPos global option.
     *
     * If you want to add the row next to an existing row you can pass an optional third argument to the function that will position the new row next to the specified row (above or below based on the value of the second argument). This argument will take any of the standard row component look up options. This must be a row that has the same parent as the row you want to add
     */
    addTreeChild: (rowData: {}, position?: boolean, existingRow?: RowComponent) => void;

    /** Returns a value indicating if the current row is expanded. */
    isTreeExpanded: () => boolean;

    /**
     * You can validate the whole table in one go by calling the validate method on the table instance.
     *
     * This will return a value of true if every cell passes validation, if any cells fail, then it will return an array of Cell Components representing each cell in that row that has failed validation.
     */
    validate: () => true | CellComponent[];

    /** The isFrozen function on a Row Component will return a boolean representing the current frozen state of the row. */
    isFrozen: () => boolean;
}

export interface GroupComponent {
    /** The getElement function returns the DOM node for the group header. */
    getElement: () => HTMLElement;

    /** The getTable function returns the Tabulator object for the table containing the group */
    getTable: () => Tabulator;

    /** The getKey function returns the unique key that is shared between all rows in this group. */
    getKey: () => any;

    /** Returns the string of the field that all rows in this group have been grouped by. (if a function is used to group the rows rather than a field, this function will return false) */
    getField: () => string;

    /** The getRows function returns an array of RowComponent objects, one for each row in the group */
    getRows: () => RowComponent[];

    /** The getSubGroups function returns an array of GroupComponent objects, one for each sub group of this group. */
    getSubGroups: () => GroupComponent[];

    /** The getParentGroup function returns the GroupComponent for the parent group of this group. if no parent exists, this function will return false. */
    getParentGroup: () => GroupComponent | false;

    /** The isVisible function returns a boolean to show if the group is visible, a value of true means it is visible. */
    isVisible: () => boolean;

    /** The show function shows the group if it is hidden. */
    show: () => void;

    /** The hide function hides the group if it is visible. */
    hide: () => void;

    /** The toggle function toggles the visibility of the group, switching between hidden and visible. */
    toggle: () => void;
    popup: (contents: string, position: PopupPosition) => void;

    /** The scrollTo function will scroll the table to the group header if it passes the current filters. */
    scrollTo: (position?: "top" | "center" | "bottom" | "nearest", scrollIfVisible?: boolean) => Promise<void>;
}

export interface ColumnComponent {
    /** The getElement function returns the DOM node for the colum. */
    getElement: () => HTMLElement;

    /** The getTable function returns the Tabulator object for the table containing the column. */
    getTable: () => Tabulator;

    /** The getDefinition function returns the column definition object for the column. */
    getDefinition: () => ColumnDefinition;

    /** The getField function returns the field name for the column. */
    getField: () => string;

    /** The getCells function returns an array of CellComponent objects, one for each cell in the column. */
    getCells: () => CellComponent[];

    /** The getNextColumn function returns the Column Component for the next visible column in the table, if there is no next column it will return a value of false. */
    getNextColumn: () => ColumnComponent | false;

    /** The getPrevColumn function returns the Column Component for the previous visible column in the table, if there is no previous column it will return a value of false. */
    getPrevColumn: () => ColumnComponent | false;

    /** You can move a column component next to another column using the move function. */
    move: (toColumn: ColumnLookup, after: boolean) => void;

    /** The isVisible function returns a boolean to show if the column is visible, a value of true means it is visible. */
    isVisible: () => boolean;

    /** The show function shows the column if it is hidden. */
    show: () => void;

    /** The hide function hides the column if it is visible. */
    hide: () => void;

    /** The toggle function toggles the visibility of the column, switching between hidden and visible. */
    toggle: () => void;

    /** The delete function deletes the column, removing it from the table. */
    delete: () => Promise<void>;

    /** The scrollTo function will scroll the table to the column if it is visible. */
    scrollTo: (position?: "left" | "middle" | "right", scrollIfVisible?: boolean) => Promise<void>;

    /** The getSubColumns function returns an array of ColumnComponent objects, one for each sub column of this column. */
    getSubColumns: () => ColumnComponent[];

    /** The getParentColumn function returns the ColumnComponent for the parent column of this column. if no parent exists, this function will return false. */
    getParentColumn: () => ColumnComponent | false;

    /** The headerFilterFocus function will place focus on the header filter element for this column if it exists. */
    headerFilterFocus: () => void;

    /** The setHeaderFilterValue function set the value of the columns header filter element to the value provided in the first argument. */
    setHeaderFilterValue: (value: any) => void;

    /** The reloadHeaderFilter function rebuilds the header filter element, updating any params passed into the editor used to generate the filter. */
    reloadHeaderFilter: () => void;

    /** Get the current header filter value of a column. */
    getHeaderFilterValue: () => any;

    /** Update the definition of a column. It is worth noting that using this function actually replaces the old column with a totally new column component, therefore any references to the previous column component will no longer work after this function has been run. The function will return a promise that will resolve when the column has been updated, passing in the updated column component as an argument. */
    updateDefinition: (definition: ColumnDefinition) => Promise<ColumnComponent>;

    /** Returns the width of the column in pixels */
    getWidth: () => number;

    /** You can set the width of a column using the setWidth function, passing the width of the column in pixes as an integer as the first argument.Passing a value of true to the function will resize the column to fit its contents */
    setWidth: (width: number | true) => void;

    /**
     * You can validate a column
     *
     * This will return a value of true if every cell passes validation, if any cells fail, then it will return an array of Cell Components representing each cell in that column that has failed validation.
     */
    validate: () => true | CellComponent[];
    popup: (contents: string, position: PopupPosition) => void;
}

export interface CellComponent {
    /** The getValue function returns the current value for the cell. */
    getValue: () => any;

    /** The getOldValue function returns the previous value of the cell. Very useful in the event of cell update callbacks. */
    getOldValue: () => any;

    /** The restoreOldValue reverts the value of the cell back to its previous value, without triggering any of the cell edit callbacks. */
    restoreOldValue: () => any;

    getInitialValue: () => any;

    restoreInitialValue: () => any;

    /** The getElement function returns the DOM node for the cell. */
    getElement: () => HTMLElement;

    /** The getTable function returns the Tabulator object for the table containing the cell. */
    getTable: () => Tabulator;

    /** The getRow function returns the RowComponent for the row that contains the cell. */
    getRow: () => RowComponent;

    /** The getColumn function returns the ColumnComponent for the column that contains the cell. */
    getColumn: () => ColumnComponent;

    /** The getData function returns the data for the row that contains the cell. */
    getData: (transformType?: "data" | "download" | "clipboard") => {};

    /** The getField function returns the field name for the column that contains the cell. */
    getField: () => string;

    /** The getType function can be used to determine if the cell is being used as a cell or a header element. */
    getType: () => "cell" | "header";

    /** You can change the value of the cell using the setValue function. The first parameter should be the new value for the cell, the second optional parameter will apply the column mutators to the value when set to true (default = true). */
    setValue: (value: any, mutate?: boolean) => void;

    /** If you are making manual adjustments to elements contained withing the cell, or the cell itself, it may sometimes be necessary to recalculate the height of all the cells in the row to make sure they remain aligned. Call the checkHeight function to check if the height of the cell has changed and normalize the row if it has. */
    checkHeight: () => void;

    /** You and programmatically cause a cell to open its editor element using the edit function. */
    edit: (ignoreEditable?: boolean) => void;

    /** You and programmatically cancel a cell edit that is currently in progress by calling the cancelEdit function. */
    cancelEdit: () => void;

    /** When a cell is being edited it is possible to move the editor focus from the current cell to one if its neighbors. There are a number of functions that can be called on the nav function to move the focus in different directions. */

    /** prev - next editable cell on the left, if none available move to the right most editable cell on the row above. */
    navigatePrev: () => boolean;

    /** next - next editable cell on the right, if none available move to left most editable cell on the row below */
    navigateNext: () => boolean;

    /** left - next editable cell on the left, return false if none available on row */
    navigateLeft: () => boolean;

    /** right - next editable cell on the right, return false if none available on row */
    navigateRight: () => boolean;

    /** up - move to the same cell in the row above. */
    navigateUp: () => void;

    /** down - move to the same cell in the row below */
    navigateDown: () => void;

    /** You can call the isEdited function on any Cell Component to see if it has been edited. it will return true if it has been edited or false if it has not. */
    isEdited: () => boolean;

    /** The clearEdited can be called on a Cell Component to clear the edited flag used by the isEdited function and mark the cell as unedited. */
    clearEdited: () => void;

    /** The isValid can be called on a Cell Component to check if a cell has previously passed a validation check without revalidating it. Returns true if the cell passes validation, or an array of failed validators if it fails validation. */
    isValid: () => boolean | Validator[];

    /** The clearValidation can be called on a Cell Component to clear the invalid flag used by the isValid function and mark the cell as valid. */
    clearValidation: () => void;

    /** You can validate a cell by calling the validate method on any Cell Component. Returns true if the cell passes validation, or an array of failed validators if it fails validation. */
    validate: () => boolean | Validator[];
    popup: (contents: string, position: PopupPosition) => void;
}

export interface EventCallBackMethods {
    validationFailed: (cell: CellComponent, value: any, validators: Validator[]) => void;
    scrollHorizontal: (left: number, leftDir: boolean) => void;
    scrollVertical: (top: number, topDir: boolean) => void;
    rowAdded: (row: RowComponent) => void;
    rowDeleted: (row: RowComponent) => void;
    rowMoving: (row: RowComponent) => void;
    rowMoved: (row: RowComponent) => void;
    rowMoveCancelled: (row: RowComponent) => void;
    rowUpdated: (row: RowComponent) => void;
    rowSelectionChanged: (
        data: any[],
        rows: RowComponent[],
        selectedRows: RowComponent[],
        deselectedRows: RowComponent[],
    ) => void;
    rowSelected: (row: RowComponent) => void;
    rowDeselected: (row: RowComponent) => void;
    rowResized: (row: RowComponent) => void;
    rowClick: (event: UIEvent, row: RowComponent) => void;
    rowDblClick: (event: UIEvent, row: RowComponent) => void;
    rowContext: (event: UIEvent, row: RowComponent) => void;
    rowTap: (event: UIEvent, row: RowComponent) => void;
    rowDblTap: (event: UIEvent, row: RowComponent) => void;
    rowTapHold: (event: UIEvent, row: RowComponent) => void;
    rowMouseEnter: (event: UIEvent, row: RowComponent) => void;
    rowMouseLeave: (event: UIEvent, row: RowComponent) => void;
    rowMouseOver: (event: UIEvent, row: RowComponent) => void;
    rowMouseDown: (event: UIEvent, row: RowComponent) => void;
    rowMouseUp: (event: UIEvent, row: RowComponent) => void;
    rowMouseOut: (event: UIEvent, row: RowComponent) => void;
    rowMouseMove: (event: UIEvent, row: RowComponent) => void;
    htmlImporting: () => void;
    htmlImported: () => void;
    ajaxError: () => void;
    clipboardCopied: (clipboard: string) => void;
    clipboardPasted: (clipboard: string, rowData: any[], rows: RowComponent[]) => void;
    clipboardPasteError: (clipboard: string) => void;
    downloadComplete: () => void;
    dataTreeRowExpanded: (row: RowComponent, level: number) => void;
    dataTreeRowCollapsed: (row: RowComponent, level: number) => void;
    pageLoaded: (pageNo: number) => void;
    pageSizeChanged: (pageSize: number) => void;
    headerClick: (event: UIEvent, column: ColumnComponent) => void;
    headerDblClick: (event: UIEvent, column: ColumnComponent) => void;
    headerContext: (event: UIEvent, column: ColumnComponent) => void;
    headerTap: (event: UIEvent, column: ColumnComponent) => void;
    headerDblTap: (event: UIEvent, column: ColumnComponent) => void;
    headerTapHold: (event: UIEvent, column: ColumnComponent) => void;
    headerMouseUp: (event: UIEvent, column: ColumnComponent) => void;
    headerMouseDown: (event: UIEvent, column: ColumnComponent) => void;
    groupClick: (event: UIEvent, group: GroupComponent) => void;
    groupDblClick: (event: UIEvent, group: GroupComponent) => void;
    groupContext: (event: UIEvent, group: GroupComponent) => void;
    groupTap: (event: UIEvent, group: GroupComponent) => void;
    groupDblTap: (event: UIEvent, group: GroupComponent) => void;
    groupTapHold: (event: UIEvent, group: GroupComponent) => void;
    groupMouseDown: (event: UIEvent, group: GroupComponent) => void;
    groupMouseUp: (event: UIEvent, group: GroupComponent) => void;

    tableBuilding: () => void;
    tableBuilt: () => void;
    tableDestroyed: () => void;
    dataChanged: (data: any[]) => void;
    dataLoading: (data: any[]) => void;
    dataLoaded: (data: any[]) => void;
    dataLoadError: (error: Error) => void;
    dataProcessing: (data: any[]) => void;
    dataProcessed: (data: any[]) => void;
    dataFiltering: (filters: Filter[]) => void;
    dataFiltered: (filters: Filter[], rows: RowComponent[]) => void;
    dataSorting: (sorters: SorterFromTable[]) => void;
    dataSorted: (sorters: SorterFromTable[], rows: RowComponent[]) => void;
    movableRowsSendingStart: (toTables: Tabulator[]) => void;
    movableRowsSent: (fromRow: RowComponent, toRow: RowComponent, toTable: Tabulator) => void;
    movableRowsSentFailed: (fromRow: RowComponent, toRow: RowComponent, toTable: Tabulator) => void;
    movableRowsSendingStop: (toTables: Tabulator[]) => void;
    movableRowsReceivingStart: (fromRow: RowComponent, fromTable: Tabulator) => void;
    movableRowsReceived: (fromRow: RowComponent, toRow: RowComponent, fromTable: Tabulator) => void;
    movableRowsReceivedFailed: (fromRow: RowComponent, toRow: RowComponent, fromTable: Tabulator) => void;
    movableRowsReceivingStop: (fromTable: Tabulator) => void;
    movableRowsElementDrop: (event: UIEvent, element: Element, row: RowComponent) => void;
    dataGrouping: () => void;
    dataGrouped: (groups: GroupComponent[]) => void;
    groupVisibilityChanged: (group: GroupComponent, visible: boolean) => void;
    localized: (locale: string, lang: any) => void;
    renderStarted: () => void;
    renderComplete: () => void;
    columnMoved: (column: ColumnComponent, columns: ColumnComponent[]) => void;
    columnResized: (column: ColumnComponent) => void;
    columnTitleChanged: (column: ColumnComponent) => void;
    columnVisibilityChanged: (column: ColumnComponent, visible: boolean) => void;
    historyUndo: (action: HistoryAction, component: any, data: any[]) => void;
    historyRedo: (action: HistoryAction, component: any, data: any[]) => void;
    cellEditing: (cell: CellComponent) => void;
    cellEdited: (cell: CellComponent) => void;
    cellEditCancelled: (cell: CellComponent) => void;
    cellClick: (event: UIEvent, cell: CellComponent) => void;
    cellDblClick: (event: UIEvent, cell: CellComponent) => void;
    cellContext: (event: UIEvent, cell: CellComponent) => void;
    cellMouseDown: (event: UIEvent, cell: CellComponent) => void;
    cellMouseUp: (event: UIEvent, cell: CellComponent) => void;
    cellTap: (event: UIEvent, cell: CellComponent) => void;
    cellDblTap: (event: UIEvent, cell: CellComponent) => void;
    cellTapHold: (event: UIEvent, cell: CellComponent) => void;
    cellMouseEnter: (event: UIEvent, cell: CellComponent) => void;
    cellMouseLeave: (event: UIEvent, cell: CellComponent) => void;
    cellMouseOver: (event: UIEvent, cell: CellComponent) => void;
    cellMouseOut: (event: UIEvent, cell: CellComponent) => void;
    cellMouseMove: (event: UIEvent, cell: CellComponent) => void;
    popupOpen: (cell: CellComponent) => void;
    popupClosed: (cell: CellComponent) => void;
    menuClosed: (cell: CellComponent) => void;
    menuOpened: (cell: CellComponent) => void;
    TooltipClosed: (cell: CellComponent) => void;
    TooltipOpened: (cell: CellComponent) => void;
}

declare class Tabulator {
    static defaultOptions: Options;

    /**
     * A lot of the modules come with a range of default settings to make setting up your table easier, for example the sorters, formatters and editors that ship with Tabulator as standard.
     *
     * If you are using a lot of custom settings over and over again (for example a custom sorter). you can end up re-declaring it several time for different tables. To make your life easier Tabulator allows you to extend the default setup of each module to make your custom options as easily accessible as the defaults.
     *
     * Using the extendModule function on the global Tabulator variable allows you to globally add these options to all tables.
     *
     * The function takes three arguments, the name of the module, the name of the property you want to extend, and an object containing the elements you want to add in your module. In the example below we extend the format module to add two new default formatters:
     */
    static extendModule: (name: string, property: string, values: {}) => void;

    /** Lookup table objects for any existing table using the element they were created on. */
    static findTable: (query: string) => Tabulator[];
    static registerModule: (module: Module) => void;
    static bindModules: ([]) => void;
    constructor(selector: string | HTMLElement, options?: Options);
    columnManager: any;
    rowManager: any;
    footerManager: any;
    browser: string;
    browserSlow: boolean;
    modules: any;
    options: Options;
    element: HTMLElement;

    /**
     * You have a choice of four file types to choose from:
     * - csv - Comma separated value file
     * - json - JSON formatted text file
     * - xlsx - Excel File (Requires the SheetJS Library)
     * - pdf - PDF File (Requires the jsPDF Library and jsPDF-AutoTable Plugin)
     * To trigger a download, call the download function, passing the file type (from the above list) as the first argument, and an optional second argument of the file name for the download (if this is left out it will be "ext"). The optional third argument is an object containing any setup options for the formatter, such as the delimiter choice for CSV's).
     *
     * The PDF downloader requires that the jsPDF Library and jsPDF-AutoTable Plugin be included on your site, this can be included with the following script tags.
     *
     * If you want to create a custom file type from the table data then you can pass a function to the type argument, instead of a string value. At the end of this function you must call the setFileContents function, passing the formatted data and the mime type.
     */
    download: (
        downloadType:
            | DownloadType
            | ((columns: ColumnDefinition[], data: any, options: any, setFileContents: any) => any),
        fileName: string,
        params?: DownloadOptions,
        filter?: RowRangeLookup,
    ) => void;

    /** If you want to open the generated file in a new browser tab rather than downloading it straight away, you can use the downloadToTab function. This is particularly useful with the PDF downloader, as it allows you to preview the resulting PDF in a new browser ta */
    downloadToTab: (downloadType: DownloadType, fileName: string, params?: DownloadOptions) => void;

    /** Load data from a local file */
    import: (data: any, fileName: string) => any;

    /**
     * The copyToClipboard function allows you to copy the current table data to the clipboard.
     *
     * It takes one optional argument, a Row Range Lookup option, that will determine which rows are included in the clipboard output.It can take any following strings as input:
     *
     * - visible - Rows currently visible in the table viewport
     * - active - Rows currently in the table (rows that pass current filters etc)
     * - selected - Rows currently selected by the selection module (this includes not currently active rows)
     * - all - All rows in the table regardless of filters
     *
     * If you leave this argument undefined, Tabulator will use the value of the clipboardCopyRowRange property, which has a default value of active
     */
    copyToClipboard: (rowRangeLookup?: RowRangeLookup) => void;

    /** With history enabled you can use the undo function to automatically undo a user action, the more times you call the function, the further up the history log you go. */
    undo: () => boolean;

    /** You can use the getHistoryUndoSize function to get a count of the number of history undo actions available. */
    getHistoryUndoSize: () => number | false;

    /** With history enabled you can use the redo function to automatically redo user action that has been undone, the more times you call the function, the further up the history log you go. once a user interacts with the table then can no longer redo any further actions until an undo is performed. */
    redo: () => boolean;

    /** You can use the getHistoryRedoSize function to get a count of the number of history redo actions available. */
    getHistoryRedoSize: () => number | false;

    /** You can get a list of all edited cells in the table using the getEditedCells function. this will return an array of Cell Components for each cell that has been edited. */
    getEditedCells: () => CellComponent[];

    /** Clear the edited flag on all cells in the table or some of them. */
    clearCellEdited: (clear?: CellComponent | CellComponent[]) => void;

    /** Display alert message on the table */
    alert: (message: string) => void;

    /** clear the alert message from the table */
    clearAlert: () => void;

    /** Destructor. */
    destroy: () => void;

    setData: (data: any, params?: any, config?: any) => Promise<void>;

    /** You can remove all data from the table using clearData */
    clearData: () => void;

    /** You can retrieve the data stored in the table using the getData function. */
    getData: (activeOnly?: RowRangeLookup) => any[];
    getDataCount: (activeOnly?: RowRangeLookup) => number;

    /** The searchRows function allows you to retrieve an array of row components that match any filters you pass in. it accepts the same arguments as the setFilter function. */
    searchRows: (field: string, type: FilterType, value: any) => RowComponent[];

    /** The searchData function allows you to retrieve an array of table row data that match any filters you pass in. it accepts the same arguments as the setFilter function. */
    searchData: (field: string, type: FilterType, value: any) => any[];

    /** Returns a table built of all active rows in the table (matching filters and sorts) */
    getHtml: (rowRangeLookup?: RowRangeLookup, style?: boolean, config?: AdditionalExportOptions) => any;

    /** You can use the print function to trigger a full page printing of the contents of the table without any other elements from the page. */
    print: (rowRangeLookup?: RowRangeLookup, style?: boolean, config?: AdditionalExportOptions) => any;

    /**
     * You can retrieve the current AJAX URL of the table with the getAjaxUrl function.
     *
     * This will return a HTML encoded string of the table data.
     *
     * By default getHtml will return a table containing all the data held in the  If you only want to access the currently filtered/sorted elements, you can pass a value of true to the first argument of the function.
     */
    getAjaxUrl: () => string;

    /**
     * The replaceData function lets you silently replace all data in the table without updating scroll position, sort or filtering, and without triggering the ajax loading popup. This is great if you have a table you want to periodically update with new/updated information without alerting the user to a change.
     *
     * It takes the same arguments as the setData function, and behaves in the same way when loading data (ie, it can make ajax requests, parse JSON etc)
     */
    replaceData: (data?: Array<{}> | string, params?: any, config?: any) => Promise<void>;

    /**
     * If you want to update an existing set of data in the table, without completely replacing the data as the setData method would do, you can use the updateData method.
     *
     * This function takes an array of row objects and will update each row based on its index value. (the index defaults to the "id" parameter, this can be set using the index option in the tabulator constructor). Options without an index will be ignored, as will items with an index that is not already in the table data. The addRow function should be used to add new data to the table.
     */
    updateData: (data: Array<{}>) => Promise<void>;

    /** The addData method returns a promise, this can be used to run any other commands that have to be run after the data has been loaded into the table. By running them in the promise you ensure they are only run after the table has loaded the data. */
    addData: (data?: Array<{}>, addToTop?: boolean, positionTarget?: RowLookup) => Promise<RowComponent[]>;

    /** If the data you are passing to the table contains a mix of existing rows to be updated and new rows to be added then you can call the updateOrAddData function. This will check each row object provided and update the existing row if available, or else create a new row with the data. */
    updateOrAddData: (data: Array<{}>) => Promise<RowComponent[]>;

    /** To receive the DOM Node of a specific row, you can retrieve the RowComponent with the getRow function, then use the getElement function on the component. The first argument is the row you are looking for, it will take any of the standard row component look up options. */
    getRow: (row: RowLookup) => RowComponent;

    /**
     * You can retrieve the Row Component of a row at a given position in the table using getRowFromPosition function. By default this will return the row based in its position in all table data, including data currently filtered out of the table.
     *
     * If you want to get a row based on its position in the currently filtered/sorted data, you can pass a value of true to the optional second argument of the function.
     */
    getRowFromPosition: (position: number, activeOnly?: boolean) => RowComponent;

    /** You can delete any row in the table using the deleteRow function. */
    deleteRow: (index: RowLookup | RowLookup[]) => void;

    /**
     * You can add a row to the table using the addRow function.
     *
     * The first argument should be a row data object. If you do not pass data for a column, it will be left empty. To create a blank row (ie for a user to fill in), pass an empty object to the function.
     *
     * The second argument is optional and determines whether the row is added to the top or bottom of the table. A value of true will add the row to the top of the table, a value of false will add the row to the bottom of the table. If the parameter is not set the row will be placed according to the addRowPos global option.
     */
    addRow: (data?: {}, addToTop?: boolean, positionTarget?: RowLookup) => Promise<RowComponent>;

    /** If you don't know whether a row already exists you can use the updateOrAddRow function. This will check if a row with a matching index exists, if it does it will update it, if not it will add a new row with that data. This takes the same arguments as the updateRow function. */
    updateOrAddRow: (row: RowLookup, data: {}) => Promise<RowComponent>;

    /**
     * You can update any row in the table using the updateRow function.
     *
     * The first argument is the row you want to update, it will take any of the standard row component look up options.
     *
     * The second argument should be the updated data object for the row. As with the updateData function, this will not replace the existing row data object, it will only update any of the provided parameters.
     *
     * Once complete, this function will trigger the rowUpdated and dataChanged events.
     *
     * This function will return true if the update was successful or false if the requested row could not be found. If the new data matches the existing row data, no update will be performed.
     */
    updateRow: (row: RowLookup, data: {}) => boolean;

    /**
     * If you want to trigger an animated scroll to a row then you can use the scrollToRow function.
     *
     * The first argument should be any of the standard row component look up options for the row you want to scroll to.
     *
     * The second argument is optional, and is used to set the position of the row, it should be a string with a value of either top, center, bottom or nearest, if omitted it will be set to the value of the scrollToRowPosition option which has a default value of top.
     *
     * The third argument is optional, and is a boolean used to set if the table should scroll if the row is already visible, true to scroll, false to not, if omitted it will be set to the value of the scrollToRowIfVisible option, which defaults to true
     */
    scrollToRow: (row: RowLookup, position?: ScrollToRowPosition, ifVisible?: boolean) => Promise<void>;

    /**
     * If you want to programmatically move a row to a new position you can use the moveRow function.
     *
     * The first argument should be the row you want to move, and can be any of the standard row component look up options.
     *
     * The second argument should be the target row that you want to move to, and can be any of the standard row component look up options.
     *
     * The third argument determines whether the row is moved to above or below the target row. A value of false will cause to the row to be placed below the target row, a value of true will result in the row being placed above the target
     */
    moveRow: (fromRow: RowLookup, toRow: RowLookup, placeAboveTarget?: boolean) => void;

    /** You can retrieve all the row components in the table using the getRows function.* By default getRows will return an array containing all the Row Component's held in the  If you only want to access the currently filtered/sorted elements, you can pass a value of true to the first argument of the function. */
    getRows: (activeOnly?: RowRangeLookup) => RowComponent[];

    /**
     * Use the getRowPosition function to retrieve the numerical position of a row in the table. By default this will return the position of the row in all data, including data currently filtered out of the table.
     *
     * The first argument is the row you are looking for, it will take any of the standard row component look up options. If you want to get the position of the row in the currently filtered/sorted data, you can pass a value of true to the optional second argument of the function.
     *
     * Note: If the row is not found, a value of false will be returned, row positions start at 0
     */
    getRowPosition: (row: RowLookup, activeOnly?: boolean) => number | false;

    /** To replace the current column definitions for a table use the setColumns function. This function takes a column definition array as its only argument. */
    setColumns: (definitions: ColumnDefinition[]) => void;

    /**
     * To get an array of Column Components for the current table setup, call the getColumns function. This will only return actual data columns not column groups.
     * To get a structured array of Column Components that includes column groups, pass a value of true as an argument.
     */
    getColumns: (includeColumnGroups?: boolean) => ColumnComponent[];

    /** Using the getColumn function you can retrieve the Column Component. */
    getColumn: (column: ColumnLookup) => ColumnComponent;

    /** To get the current column definition array (including any changes made through user actions, such as resizing or re-ordering columns), call the getColumnDefinitions function. this will return the current columns definition array. */
    getColumnDefinitions: () => ColumnDefinition[];

    /** If you want to handle column layout persistence manually, for example storing it in a database to use elsewhere, you can use the getColumnLayout function to retrieve a layout object for the current table. */
    getColumnLayout: () => ColumnLayout[];

    /** If you have previously used the getColumnLayout function to retrieve a tables layout, you can use the setColumnLayout function to apply it to a table. */
    setColumnLayout: (layout: ColumnLayout[]) => void;

    /** You can show a hidden column at any point using the showColumn function. */
    showColumn: (column?: ColumnLookup) => void;

    /** You can hide a visible column at any point using the hideColumn function. */
    hideColumn: (column?: ColumnLookup) => void;

    /** You can toggle the visibility of a column at any point using the toggleColumn function. */
    toggleColumn: (column?: ColumnLookup) => void;

    /**
     * If you wish to add a single column to the table, you can do this using the addColumn function.
     * This function takes three arguments:
     *
     * - Columns Definition - The column definition object for the column you want to add.
     * - Before (optional) - Determines how to position the new column. A value of true will insert the column to the left of existing columns, a value of false will insert it to the right. If a Position argument is supplied then this will determine whether the new colum is inserted before or after this column.
     * - Position (optional) - The field to insert the new column next to, this can be any of the standard column component look up options.
     */
    addColumn: (
        definition: ColumnDefinition,
        insertRightOfTarget?: boolean,
        positionTarget?: ColumnLookup,
    ) => Promise<void>;

    /** To permanently remove a column from the table deleteColumn function. This function takes any of the standard column component look up options as its first parameter. */
    deleteColumn: (column: ColumnLookup) => Promise<void>;

    /** Programmatically move a column to a new position. */
    moveColumn: (fromColumn: ColumnLookup, toColumn: ColumnLookup, after: boolean) => void;

    /**
     * If you want to trigger an animated scroll to a column then you can use the scrollToColumn function. The first argument should be any of the standard column component look up options for the column you want to scroll to.
     *
     * The second argument is optional, and is used to set the position of the column, it should be a string with a value of either left, middle or right, if omitted it will be set to the value of the scrollToColumnPosition option which has a default value of left.
     * The third argument is optional, and is a boolean used to set if the table should scroll if the column is already visible, true to scroll, false to not, if omitted it will be set to the value of the scrollToColumnIfVisible option, which defaults to true
     */
    scrollToColumn: (column: ColumnLookup, position?: ScrollToColumnPosition, ifVisible?: boolean) => Promise<void>;
    updateColumnDefinition: (column: ColumnLookup, definition: ColumnDefinition) => Promise<void>;

    /** You can also set the language at any point after the table has loaded using the setLocale function, which takes the same range of values as the locale setup option mentioned above. */
    setLocale: (locale: string | boolean) => void;

    /** It is possible to retrieve the locale code currently being used by Tabulator using the getLocale function: */
    getLocale: () => string;

    /** You can then access these at any point using the getLang function, which will return the language object for the currently active locale. */
    getLang: (locale?: string) => any;

    /**
     * If the size of the element containing the Tabulator changes (and you are not able to use the in built auto-resize functionality) or you create a table before its containing element is visible, it will necessary to redraw the table to make sure the rows and columns render correctly.
     *
     * This can be done by calling the redraw method. For example, to trigger a redraw whenever the viewport width is changed.
     *
     * The redraw function also has an optional boolean argument that when set to true triggers a full rerender of the table including all data on all rows.
     */
    redraw: (force?: boolean) => void;

    /** Prevent actions from triggering an update of the Virtual DOM: */
    blockRedraw: () => void;

    /** This will restore automatic table redrawing and trigger an appropriate redraw if one was needed as a result of any actions that happened while the redraw was blocked. */
    restoreRedraw: () => void;

    /** If you want to manually change the height of the table at any time, you can use the setHeight function, which will also redraw the virtual DOM if necessary. */
    setHeight: (height: number | string) => void;

    /** You can trigger sorting using the setSort function. */
    setSort: (sortList: string | Sorter[], dir?: SortDirection) => void;

    /** Retrieves the details of the currently sorted column. */
    getSorters: () => SorterFromTable[];

    /** To remove all sorting from the table, call the clearSort function. */
    clearSort: () => void;

    /**
     * To set a filter you need to call the setFilter method, passing the field you wish to filter, the comparison type and the value to filter for.
     *
     * This function will replace any exiting filters on the table with the specified filter
     *
     * If you want to perform a more complicated filter then you can pass a callback function to the setFilter method, you can also pass an optional second argument, an object with parameters to be passed to the filter function.
     */
    setFilter: (
        p1: string | Filter[] | any[] | ((data: any, filterParams: any) => boolean),
        p2?: FilterType | {},
        value?: any,
        filterParams?: FilterParams,
    ) => void;

    /** If you want to add another filter to the existing filters then you can call the addFilter function: */
    addFilter: FilterFunction;

    /** You can retrieve an array of the current programmatic filters using the getFilters function, this will not include any of the header filters: */
    getFilters: (includeHeaderFilters: boolean) => Filter[];

    /** You can programmatically set the header filter value of a column by calling the setHeaderFilterValue function, This function takes any of the standard column component look up options as its first parameter, with the value for the header filter as the second option. */
    setHeaderFilterValue: (column: ColumnLookup, value: string) => void;

    /** You can programmatically set the focus on a header filter element by calling the setHeaderFilterFocus function, This function takes any of the standard column component look up options as its first parameter. */
    setHeaderFilterFocus: (column: ColumnLookup) => void;

    /** If you just want to retrieve the current header filters, you can use the getHeaderFilters function: */
    getHeaderFilters: () => Filter[];

    /** You get the current header filter value of a column. */
    getHeaderFilterValue: (column: ColumnLookup) => string;

    /** If you want to remove one filter from the current list of filters you can use the removeFilter function: */
    removeFilter: FilterFunction;

    /** To remove all filters from the table, use the clearFilter function. */
    clearFilter: (includeHeaderFilters: boolean) => void;

    /** To remove just the header filters, leaving the programmatic filters in place, use the clearHeaderFilter function. */
    clearHeaderFilter: () => void;

    /**
     * To programmatically select a row you can use the selectRow function.
     *
     * To select a specific row you can pass the any of the standard row component look up options into the first argument of the function. If you leave the argument blank you will select all rows (if you have set the selectable option to a numeric value, it will be ignored when selecting all rows). If lookup value is true you will selected all current filtered rows.
     */
    selectRow: (lookup?: RowLookup[] | RowRangeLookup | true) => void;
    deselectRow: (row?: RowLookup) => void;
    toggleSelectRow: (row?: RowLookup) => void;

    /**
     * To get the RowComponent's for the selected rows at any time you can use the getSelectedRows function.
     *
     * This will return an array of RowComponent's for the selected rows in the order in which they were selected.
     */
    getSelectedRows: () => RowComponent[];

    /**
     * To get the data objects for the selected rows you can use the getSelectedData function.
     * This will return an array of the selected rows data objects in the order in which they were selected
     */
    getSelectedData: () => any[];

    /** set the maximum page. */
    setMaxPage: (max: number) => void;

    /**
     * When pagination is enabled the table footer will contain a number of pagination controls for navigating through the data.
     *
     * In addition to these controls it is possible to change page using the setPage function
     * The setPage function takes one parameter, which should be an integer representing the page you wish to see. There are also four strings that you can pass into the parameter for special functions.
     *
     * - "first" - show the first page
     * - "prev" - show the previous page
     * - "next" - show the next page
     * - "last" - show the last page
     * The setPage method returns a promise, this can be used to run any other commands that have to be run after the data has been loaded into the table. By running them in the promise you ensure they are only run after the table has loaded the data.
     */
    setPage: (page: number | "first" | "prev" | "next" | "last") => Promise<void>;

    /**
     * You can load the page for a specific row using the setPageToRow function and passing in any of the standard row component look up options for the row you want to scroll to.
     * The setPageToRow method returns a promise, this can be used to run any other commands that have to be run after the data has been loaded into the table. By running them in the promise you ensure they are only run after the table has loaded the data.
     */
    setPageToRow: (row: RowLookup) => Promise<void>;

    /** You can change the page size at any point by using the setPageSize function. (this setting will be ignored if using remote pagination with the page size set by the server) */
    setPageSize: (size: number) => void;

    /** To retrieve the number of rows allowed per page you can call the getPageSize function: */
    getPageSize: () => number;

    /** You can change to show the previous page using the previousPage function. */
    previousPage: () => Promise<void>;

    /** You can change to show the next page using the previousPage function. */
    nextPage: () => Promise<void>;

    /** To retrieve the current page use the getPage function. this will return the number of the current page. If pagination is disabled this will return false. */
    getPage: () => number | false;

    /** To retrieve the maximum available page use the getPageMax function. this will return the number of the maximum available page. If pagination is disabled this will return false. */
    getPageMax: () => number | false;

    /** You can use the setGroupBy function to change the fields that rows are grouped by. This function has one argument and takes the same values as passed to the groupBy setup option. */
    setGroupBy: (groups: GroupArg) => void;

    /**
     * You can use the setGroupStartOpen function to change the default open state of groups. This function has one argument and takes the same values as passed to the groupStartOpen setup option.
     * Note: If you use the setGroupStartOpen or setGroupHeader before you have set any groups on the table, the table will not update until the setGroupBy function is called.
     */
    setGroupStartOpen: (
        values: boolean | ((value: any, count: number, data: any, group: GroupComponent) => boolean),
    ) => void;

    /** You can use the setGroupHeader function to change the header generation function for each group. This function has one argument and takes the same values as passed to the groupHeader setup option. */
    setGroupHeader: (
        values:
            | ((value: any, count: number, data: any, group: GroupComponent) => string)
            | Array<(value: any, count: number, data: any) => string>,
    ) => void;

    /** You can use the getGroups function to retrieve an array of all the first level Group Components in the table. */
    getGroups: () => GroupComponent[];

    /** get grouped table data in the same format as getData() */
    getGroupedData: (activeOnly?: boolean) => any;

    /** You can retrieve the results of the column calculations at any point using the getCalcResults function.* For a table without grouped rows, this will return an object with top and bottom properties, that contain a row data object for all the columns in the table for the top calculations and bottom calculations respectively. */
    getCalcResults: () => any;

    /** Manually trigger recalculation of column calculations */
    recalc: () => void;

    /**
     * Use the navigatePrev function to shift focus to the next editable cell on the left, if none available move to the right most editable cell on the row above.
     *
     * Note: These actions will only work when a cell is editable and has focus.
     *
     * Note: Navigation commands will only focus on editable cells, that is cells with an editor and if present an editable function that returns true.
     */
    navigatePrev: () => void;

    /**
     * Use the navigateNext function to shift focus to the next editable cell on the right, if none available move to left most editable cell on the row below.*
     * Note: These actions will only work when a cell is editable and has focus.
     *
     * Note: Navigation commands will only focus on editable cells, that is cells with an editor and if present an editable function that returns true.
     */
    navigateNext: () => void;

    /**
     * Use the navigateLeft function to shift focus to next editable cell on the left, return false if none available on row.*
     * Note: These actions will only work when a cell is editable and has focus.
     *
     * Note: Navigation commands will only focus on editable cells, that is cells with an editor and if present an editable function that returns true.
     */
    navigateLeft: () => void;

    /**
     * Use the navigateRight function to shift focus to next editable cell on the right, return false if none available on row.*
     * Note: These actions will only work when a cell is editable and has focus.
     *
     * Note: Navigation commands will only focus on editable cells, that is cells with an editor and if present an editable function that returns true.
     */
    navigateRight: () => void;

    /**
     * Use the navigateUp function to shift focus to the same cell in the row above.
     *
     * Note: These actions will only work when a cell is editable and has focus.
     *
     * Note: Navigation commands will only focus on editable cells, that is cells with an editor and if present an editable function that returns true.
     */
    navigateUp: () => void;

    /**
     * Use the navigateDown function to shift focus to the same cell in the row below.
     *
     * Note: These actions will only work when a cell is editable and has focus.
     *
     * Note: Navigation commands will only focus on editable cells, that is cells with an editor and if present an editable function that returns true.
     */
    navigateDown: () => void;

    /** The getInvalidCells method returns an array of Cell Components for all cells flagged as invalid after a user edit. */
    getInvalidCells: () => CellComponent[];

    /** clear the invalid state on all cells in the table. */
    clearCellValidation: (clearType?: CellComponent | CellComponent[]) => void;

    /**
     * You can validate the whole table in one go by calling the validate method on the table instance.
     *
     * This will return a value of true if every cell passes validation, if any cells fail, then it will return an array of Cell Components representing each cell that has failed validation.
     */
    validate: () => true | CellComponent[];
    setGroupValues: (data: GroupValuesArg) => void;

    /** You can now trigger a refresh of the current filters using the refreshFilter function. This function will cause the current filters to be run again and applied to the table data. */
    refreshFilter: () => void;

    /** The clearHistory function can be used to clear out the current table interaction history. */
    clearHistory: () => void;
    on: <K extends keyof EventCallBackMethods>(event: K, callback?: EventCallBackMethods[K]) => void;
    off: <K extends keyof EventCallBackMethods>(event: K, callback?: EventCallBackMethods[K]) => void;
}

declare class Module {
    static moduleName: string;
    constructor(table: Tabulator);
}
declare class AccessorModule {}
declare class AjaxModule {}
declare class ClipboardModule {}
declare class ColumnCalcsModule {}
declare class DataTreeModule {}
declare class DownloadModule {}
declare class EditModule {}
declare class ExportModule {}
declare class FilterModule {}
declare class FormatModule {}
declare class FrozenColumnsModule {}
declare class FrozenRowsModule {}
declare class GroupRowsModule {}
declare class HistoryModule {}
declare class HtmlTableImportModule {}
declare class InteractionModule {}
declare class KeybindingsModule {}
declare class MenuModule {}
declare class MoveColumnsModule {}
declare class MoveRowsModule {}
declare class MutatorModule {}
declare class PageModule {}
declare class PersistenceModule {}
declare class PopupModule {}
declare class PrintModule {}
declare class PseudoRow {}
declare class ReactiveDataModule {}
declare class Renderer {}
declare class ResizeColumnsModule {}
declare class ResizeRowsModule {}
declare class ResizeTableModule {}
declare class ResponsiveLayoutModule {}
declare class SelectRowModule {}
declare class SortModule {}
declare class TabulatorFull extends Tabulator {}
declare class TooltipModule {}
declare class ValidateModule {}

export {
    AccessorModule,
    AjaxModule,
    ClipboardModule,
    ColumnCalcsModule,
    DataTreeModule,
    DownloadModule,
    EditModule,
    ExportModule,
    FilterModule,
    FormatModule,
    FrozenColumnsModule,
    FrozenRowsModule,
    GroupRowsModule,
    HistoryModule,
    HtmlTableImportModule,
    InteractionModule,
    KeybindingsModule,
    MenuModule,
    Module,
    MoveColumnsModule,
    MoveRowsModule,
    MutatorModule,
    PageModule,
    PersistenceModule,
    PopupModule,
    PrintModule,
    PseudoRow,
    ReactiveDataModule,
    Renderer,
    ResizeColumnsModule,
    ResizeRowsModule,
    ResizeTableModule,
    ResponsiveLayoutModule,
    SelectRowModule,
    SortModule,
    Tabulator,
    TabulatorFull,
    TooltipModule,
    ValidateModule,
};
