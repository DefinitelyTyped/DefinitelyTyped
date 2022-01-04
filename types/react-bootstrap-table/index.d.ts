// Type definitions for react-bootstrap-table 4.3
// Project: https://github.com/AllenFang/react-bootstrap-table
// Definitions by: Frank Laub <https://github.com/flaub>
//                 Aleksander Lode <https://github.com/alelode>
//                 Janeene Beeforth <https://github.com/dawnmist>
//                 Oscar Andersson <https://github.com/Ogglas>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

// documentation taken from http://allenfang.github.io/react-bootstrap-table/docs.html

import { Component, CSSProperties, LegacyRef, ReactElement, ReactNode, SyntheticEvent } from 'react';

/**
 * Table scroll position.
 */
export type ScrollPosition = 'Top' | 'Bottom';

/**
 * Row selection mode. Single selection = 'radio', multiple selection = 'checkbox'.
 */
export type SelectRowMode = 'none' | 'radio' | 'checkbox';

/**
 * Sort Order values. 'asc' = ascending, 'desc' = descending.
 */
export type SortOrder = 'asc' | 'desc';

/**
 * Type of selection for cell editing.
 */
export type CellEditClickMode = 'none' | 'click' | 'dbclick';

/**
 * Tell react-bootstrap-table how to trigger expanding by clicking on 'row' or 'column' level.
 * If the value is 'column', by default all the columns are expandable. If you want to specify some columns as
 * unexpandable, check expandable.
 * Default is 'row'.
 */
export type ExpandBy = 'row' | 'column';

/**
 * Used to specify whether a dropdown button should use 'dropup' mode or 'dropdown' mode.
 * Default is usually 'dropdown'.
 */
export type DropDirection = 'dropdown' | 'dropup';

/**
 * List of valid filter types.
 * Note: ArrayFilter can only be used as part of the FilterData passed to the BootstrapTable.handleFilterData
 * function. It is NOT valid for use when specifying a filter to the TableHeaderColumn filter properties.
 */
export type FilterType =
    | 'TextFilter'
    | 'RegexFilter'
    | 'SelectFilter'
    | 'NumberFilter'
    | 'DateFilter'
    | 'CustomFilter'
    | 'ArrayFilter';

/**
 * Filter conditions that can be used with TextFilter/SelectFilter/RegexFilter filters.
 */
export type FilterCondition = 'eq' | 'like';

/**
 * Filter comparators used for NumberFilter/DateFilter filters
 */
export type FilterComparator = '=' | '<' | '<=' | '>' | '>=' | '!=';

/**
 * Element type to use for editing a particular column's cells.
 */
export type EditCellType = 'textarea' | 'select' | 'checkbox' | 'datetime';

/**
 * Position to show the Pagination Panel. Options are above the table ('top'), below the table ('bottom'), or both
 * above and below the table ('both').
 */
export type PaginationPostion = 'top' | 'bottom' | 'both';

/**
 * Result type for validation when editing.
 */
export type EditValidatorType = 'success' | 'error';

/**
 * Used to specify the text alignment for a column.
 */
export type DataAlignType = 'left' | 'center' | 'right' | 'start' | 'end';

/**
 * Boostrap version number.
 */
export type BootstrapVersion = '3' | '4';

/**
 * CSV Field types supported.
 */
export type CSVFieldType = 'string' | 'number';

/**
 * Custom attributes for a column/cell/etc.
 * Example: { 'data-attr': 'test' }
 */
export interface CustomAttrs {
    [attrKey: string]: string | number | boolean;
}

/**
 * Size per page list definition
 */
export type SizePerPageList = number[] | Array<{ text: string, value: number }>;

/**
 * Interface spec for sepcifying functionality to handle remotely
 *
 * Consult [documentation](https://allenfang.github.io/react-bootstrap-table/docs.html#remote)
 * for more info
 */
export interface RemoteObjSpec {
    /**
     * If set, cell edits will be handled remotely
     */
    cellEdit?: boolean | undefined;
    /**
     * If set insertions will be handled remotely
     */
    insertRow?: boolean | undefined;
    /**
     * If set deletion will be handled remotely
     */
    dropRow?: boolean | undefined;
    /**
     * If set filters will be handled remotely
     */
    filter?: boolean | undefined;
    /**
     * If set search will be handled remotely
     */
    search?: boolean | undefined;
    /**
     * If set, exporting CSV will be handled remotely
     */
    exportCSV?: boolean | undefined;
    /**
     * If set sorting will be handled remotely
     */
    sort?: boolean | undefined;
    /**
     * If set pagination will be handled remotely
     */
    pagination?: boolean | undefined;
}

export interface BootstrapTableProps {
    children?: ReactNode;
    ref?: LegacyRef<BootstrapTable> | undefined;
    /**
     * Bootstrap version to use, values include '3' or '4'. Defaults to '3'.
     */
    version?: BootstrapVersion | undefined;
    /**
     * Use data to specify the data that you want to display on table.
     */
    data: object[];
    /**
     * Normally, react-bootstrap-table handles all the data sorting/filtering/pagination/etc itself internally.
     * If this is true, you need to handle all of those manually outside the table. By default it is false.
     * This is used mostly with an external/central data store, for example Redux or a database that returns
     * already filtered/sorted/paged data.
     *
     * If a function given, which means you can choose which functionality should be handled with remote or not.Currently,
     * we have following functionality you can control: sort, pagination, cellEdit, insertRow, dropRow, filter, search,
     * exportCSV.
     */
    remote?: boolean | ((remobeObj: RemoteObjSpec) => RemoteObjSpec) | undefined;
    /**
     * Use keyField to tell table which column is unique. This is same as isKey in <TableHeaderColumn>
     * Tips: react-bootstrap-table support data manipulation(CRUD) so that we need to fetch correct row by a unique column.
     *       You need choose one of configuration to set the key field: isKey or keyField in <BootstrapTable>.
     */
    keyField?: string | undefined;
    /**
     * Use height to set the height of table, default is 100%. The string needs to have a unit, e.g. 'px', '%'.
     */
    height?: string | undefined;
    /**
     * Set the maximum height of table. You need give a string with an unit(px) value like height.
     */
    maxHeight?: string | undefined;
    /**
     * Enable striped by setting striped to true. Same as Bootstrap table class .table-striped, default is false.
     */
    striped?: boolean | undefined;
    /**
     * Enable hover by setting hover to true. Same as Bootstrap table class .table-hover, default is false.
     */
    hover?: boolean | undefined;
    /**
     * Enable condensed by setting condensed to true. Same as Bootstrap table class .table-condensed, default is false.
     */
    condensed?: boolean | undefined;
    /**
     * Become a borderless table by setting bordered to false, default is true.
     */
    bordered?: boolean | undefined;
    /**
     * Enable pagination by setting pagination to true, default is false.
     */
    pagination?: boolean | undefined;
    /**
     * Assign the class name of row(tr). This attribute accept a string or function and function is a better way to do more customization.
     * If a string given, means the value will be presented as the row class.
     * If a function given, will pass rowData and rowIndex as params and should return string for presenting class. for examples:
     * @example
     *    function trClassFormat(rowData,rowIndex) {
     *      return rowIndex % 2 == 0 ? "tr-odd" : "tr-even"; // return a class name.
     *    }
     */
    trClassName?: string | ((rowData: any, rowIndex: number) => string) | undefined;
    /**
     * Enable row insertion by setting insertRow to true, default is false.
     * If you enable row insertion, there's a button on the upper left side of table.
     */
    insertRow?: boolean | undefined;
    /**
     * Enable row deletion by setting deleteRow to true, default is false.
     * If you enable row deletion, there's a button on the upper left side of table.
     */
    deleteRow?: boolean | undefined;
    /**
     * Enable column filter by setting columnFilter to true, default is false.
     * If enabled, there're input text field per column under the table, user can input your filter condition by each column.
     */
    columnFilter?: boolean | undefined;
    /**
     * Enable search by setting search to true, default is false.
     * If enabled, there is a on the upper left side of the table. The default place holder is Search
     */
    search?: boolean | undefined;
    /**
     * Set searchPlaceholder to change the placeholder in search field, default is Search.
     */
    searchPlaceholder?: string | undefined;
    /**
     * Strict search. Set this flag to apply search terms so that only rows that contain ALL terms are included in the
     * search results.
     */
    strictSearch?: boolean | undefined;
    /**
     * Enable multi search by multiColumnSearch, default is false.
     * If you want to use multi search, you must enable search at first.
     * Tips: Use space to delimited search text. EX: 3 4, which means match all 3 or 4 datas in table.
     */
    multiColumnSearch?: boolean | undefined;
    /**
     * Enable export csv function, default is false.
     * If you enable, there's a button on the upper left side of table.
     */
    exportCSV?: boolean | undefined;
    /**
     * Set CSV filename (e.g. items.csv). Default is spreadsheet.csv
     */
    csvFileName?: string | (() => string) | undefined;
    /**
     * If true, it will hide the pagination if there is only one page, default is false.
     */
    ignoreSinglePage?: boolean | undefined;
    /**
     * Specify a fix position for the vertical bar if it exist. Available is a number or Top and Bottom
     */
    scrollTop?: number | ScrollPosition | undefined;
    /**
     * Add css styles to the react-bs-table-container class.
     * For example: containerStyle={ { background: '#00ff00' } }
     */
    containerStyle?: CSSProperties | undefined;
    /**
     * Add css styles to the react-bs-table class.
     */
    tableStyle?: CSSProperties | undefined;
    /**
     * Add css styles to the react-bs-container-header class.
     */
    headerStyle?: CSSProperties | undefined;
    /**
     * Add css styles to the react-bs-container-body class.
     */
    bodyStyle?: CSSProperties | undefined;
    /**
     * Add your own class names on the react-bs-table-container class
     */
    containerClass?: string | undefined;
    /**
     * Add your own class names on the react-bs-table class
     */
    tableContainerClass?: string | undefined;
    /**
     * Add your own class names on the react-bs-container-header class
     */
    headerContainerClass?: string | undefined;
    /**
     * Add your own class names on the react-bs-container-body class
     */
    bodyContainerClass?: string | undefined;
    /**
     * react-bootstrap-table separate two table element as header and body.
     * The tableHeaderClass is for the table element in the header
     */
    tableHeaderClass?: string | undefined;
    /**
     * react-bootstrap-table separate two table element as header and body.
     * The tableBodyClass is for the table element in the body
     */
    tableBodyClass?: string | undefined;
    /**
     * Tell react-bootstrap-table which rows are able to expand. This prop accepts
     * a callback function and is suppose to be return an Array of row keys.
     * expandableRow is always used with expandComponent, both of props are enable
     * the expand row functionality on table.
     */
    expandableRow?(row: any): boolean;
    /**
     * Tell react-bootstrap-table what's content should be rendered in the expanding
     * content. This props accept a callback function and is suppose to be return JSX
     * or String.
     * expandComponent is always used with expandableRow, both of props are enable
     * the expand row functionality on table.
     */
    expandComponent?(row: any): string | ReactElement;
    /**
     * Assign some alternative options for expand row feature, expandColumnOptions
     * only have four available property currently.
     */
    expandColumnOptions?: ExpandColumnOptions | undefined;
    /**
     * Enable the multi sort on table and the number value is means max number of sorting column.
     */
    multiColumnSort?: number | undefined;
    /**
     * This prop will enable/disable the keyboard navigation cell by cell on table. This is new
     * feature from 3.0.0. Default is false. You can have a basic and simple keyboard navigation
     * feature on table by enabling keyBoardNav on BootstrapTable. For the usage of keyboard
     * navigation is you can click any cell to focus in or use ⬅ ⬆ ⬇ ➡ to natigate the cell.
     *
     * But if you want more advance features for keyboard navigation or to integrate with cell
     * editing, expand row or selection row, you may get interested to see how they work well
     * together: In the advance cases, you need to configure keyBoardNav as an object.
     */
    keyBoardNav?: boolean | KeyboardNavigation | undefined;
    /**
     * Enable row selection on table. SelectRow accept an object.
     */
    selectRow?: SelectRow | undefined;
    /**
     * Enable cell editing on table. cellEdit accept an object which have the following properties
     */
    cellEdit?: CellEdit | undefined;
    /**
     * For some options setting on this component, you can set the options attribute and give an object which contain following properties
     */
    options?: Options | undefined;
    /**
     * Used to specify the total number of rows (matching current filter/sort/size per page) in a remote data source.
     * Documented in examples, but missing from the main docs. Essential for remote data pagination calculations.
     */
    fetchInfo?: FetchInfo | undefined;
    /**
     * Automatically collapses open rows when doing a sort/filter/search action if those options have been specified.
     * Is an object with three possible fields: sort, filter, search. Each field is a flag to specify whether that
     * action type should cause expanded rows to close. All three fields default to false.
     */
    autoCollapse?: {
        sort?: boolean | undefined;
        filter?: boolean | undefined;
        search?: boolean | undefined;
    } | undefined;
    /**
     * Set a style to be used for the table rows. Example: https://github.com/AllenFang/react-bootstrap-table/blob/master/examples/js/style/tr-style-table.js
     */
    trStyle?: CSSProperties | ((rowData: any, rowIndex: number) => CSSProperties) | undefined;
    /**
     * Disable the automatic tabIndex for navigating between cells. This can be useful if you have a page with multiple
     * tables on the page, to stop the tab moving to another table. Default is false.
     */
    withoutTabIndex?: boolean | undefined;
    /**
     * Disable writing the header row when exporting to a CSV file.
     */
    excludeCSVHeader?: boolean | undefined;
    /**
     * Add a footer to the table.
     */
    footer?: boolean | undefined;
    /**
     * Data for the table footer. Format is an array of footer rows, each containing an array of column footer data.
     */
    footerData?: FooterData[][] | undefined;
    /**
     * Table footer custom class
     */
    tableFooterClass?: string | undefined;
    /**
     * Render react-s-alert notifications
     */
    renderAlert?: boolean | undefined;
}

/**
 * Footer Data for a column.
 */
export interface FooterData {
    /**
     * Title to display for the column footer
     */
    label: string;
    /**
     * Index for the column that this footer belongs to
     */
    columnIndex: number;
    /**
     * Text alignment for the data in this footer.
     */
    align?: DataAlignType | undefined;
    /**
     * Formatting function for the data in this footer. Used to be able to do things like sum the contents of this
     * column in the table so that the footer can be used for totals, etc.
     *
     * The output value from the formatter function will be used instead of the label if the formatter function is
     * defined.
     */
    formatter?(tableData: any[]): string | number | ReactElement;
}

export interface SelectRow<TRow extends object = any> {
    /**
     * Specify whether the selection column uses single(radio) or multiple(checkbox) selection modes. Required.
     */
    mode: SelectRowMode;
    /**
     * If true, clicking the row will trigger selection on that row, default is false.
     */
    clickToSelect?: boolean | undefined;
    /**
     * If true, clicking the row will trigger selection on that row and also trigger cell editing if you enabled cell edit. Default is false.
     */
    clickToSelectAndEditCell?: boolean | undefined;
    /**
     * If true, clicking the row will trigger expanding the row. Default is false.
     */
    clickToExpand?: boolean | undefined;
    /**
     * You can assign the background color of row which be selected.
     * If your requirement is much complex, you can assign a function to bgColor that
     * returns a css color string.
     */
    bgColor?: string | ((row: TRow, isSelect: boolean) => string) | undefined;
    /**
     * You can change the width of the selection column by columnWidth (include units).
     */
    columnWidth?: string | undefined;
    /**
     * You can assign the class name of selected rows. This can either be a string, or a function that takes two
     * arguments: row and isSelect.
     *   `row`: The current row data.
     *   `isSelect`: Flag indicating whether this particular row is selected.
     */
    className?: string | ((row: TRow, isSelect: boolean) => string) | undefined;
    /**
     * Give an array data to perform which rows you want to be selected when table loading.
     * The content of array should be the rowkeys for the rows that you want to be selected.
     */
    selected?: Array<number | string> | undefined;
    /**
     * Provide a list of unselectable row keys.
     */
    unselectable?: Array<number | string> | undefined;
    /**
     * If true, the radio/checkbox column will be hidden.
     * You can enable this attribute if you enable clickToSelect and you don't want to show the selection column.
     */
    hideSelectColumn?: boolean | undefined;
    /**
     * Default is false, if enabled, there will be a button on top of table for toggling selected rows only.
     */
    showOnlySelected?: boolean | undefined;
    /**
     * Accept a custom callback function, if a row be selected or unselected, this function will be called.
     * This callback function takes four arguments: row, isSelected, event, and rowIndex:
     *   `row`: is the row data which you wanted to select or unselect.
     *   `isSelected`: it's a boolean value means "whether or not that row will be selected?".
     *   `event`: The event target object.
     *   `rowIndex`: the index number for the row.
     * If the return value of this (function) is false, the select or deselect action will not be applied.
     */
    onSelect?(row: TRow, isSelected: boolean, event: any, rowIndex: number): boolean | void;
    /**
     * Accept a custom callback function, if click select all checkbox, this function will be called. This callback
     * function taking two arguments: isSelected, rows.
     * isSelectedis a boolean value which means "whether or not that row will be selected?".
     * rows is the rows which be selected or unselected.
     *
     * Tips:
     * If the return value of this function is false, the select all or deselect all action will not be applied.
     * If return value of this function is an array of rowkeys, this array will be applied as selection row when
     * select all triggers. It's useful when you have a validation to filter some rows on selecting all.
     */
    onSelectAll?(isSelected: boolean, rows: TRow[]): boolean | Array<number | string>;
    /**
     * Function that returns a component to customize the display of the selection checkbox or radio button with.
     */
    customComponent?(props: CustomSelectProps): string | ReactElement;
    /**
     * Only unselect visible rows.
     */
    onlyUnselectVisible?: boolean | undefined;
}

/**
 * react-bootstrap-table supports cell editing. When you enable this feature, react-bootstrap-table will make
 * the target cell editable by either clicking or dbclicking (depending on the properties you set).
 */
export interface CellEdit<TRow extends object = any> {
    /**
     * Spectify which condition will trigger cell editing.(click or dbclick). Required.
     */
    mode: CellEditClickMode;
    /**
     * Enabling blurToSave will trigger a saving event on the cell when the input field becomes deselected. Default is false.
     * In the default condition, you need to press ENTER to save the cell.
     */
    blurToSave?: boolean | undefined;
    /**
     * Enabling blurToEscape will result in a cell edit being cancelled when the user clicks outside the table during
     * editing.
     * Default is false.
     */
    blurToEscape?: boolean | undefined;
    /**
     * nonEditableRows tell react-bootstrap-table which rows should not be edited on all of the columns. Briefly, its a row level limitation
     * Please assign a callback function, and this function is supposed to be return an array of row keys.
     */
    nonEditableRows?(): Array<number | string>;
    /**
     * Accept a custom callback function, before cell saving, this function will be called.
     * This callback function takes four arguments: row, cellName, cellValue and done.
     *   `row`: the row data to be saved.
     *   `cellName`: the column dataField cell name that has been modified.
     *   `cellValue`: the new cell value.
     *   `done`: a callback function to use if this is an async operation, to indicate if the save data is valid.
     *   `props`: an object containing the current cell's rowIndex and colIndex values.
     * If your validation is async, for example: you want to pop a confirm dialog for user to confim in this case,
     * react-bootstrap-table pass a callback function to you. You are supposed to call this callback function with a
     * bool value to perfom if it is valid or not in addition, you should return 1 from the main function to tell
     * react-bootstrap-table that this is a async operation.
     */
    beforeSaveCell?<K extends keyof TRow>(
        row: TRow,
        cellName: K,
        cellValue: TRow[K],
        done: (isValid: boolean) => void,
        props: { rowIndex: number; colIndex: number }
    ): boolean | 1;
    /**
     * Accept a custom callback function, after cell saving, this function will be called.
     * This callback function takes three arguments: row, cellName and cellValue
     *   `row`: the row data that was saved.
     *   `cellName`: the column dataField cell name that has been modified.
     *   `cellValue`: the new cell value.
     *   `props`: an object containing the current cell's rowIndex and colIndex values.
     */
    afterSaveCell?<K extends keyof TRow>(
        row: TRow,
        cellName: K,
        cellValue: TRow[K],
        props: { rowIndex: number; colIndex: number }
    ): void;
}

/**
 * Main Options for the Bootstrap Table.
 */
export interface Options<TRow extends object = any> {
    /**
     * Provide the name of the column that should be sorted by.
     * If multi-column sort is active, this is an array of columns.
     * If there should be no active sort, both sortName and sortOrder should be undefined.
     */
    sortName?: keyof TRow | Array<keyof TRow> | undefined;
    /**
     * Specify whether the sort should be ascending or descending.
     * If multi-column sort is active, this is an array of sortOrder items.
     * If there should be no active sort, both sortName and sortOrder should be undefined.
     */
    sortOrder?: SortOrder | SortOrder[] | undefined;
    /**
     * Specify the default sort column.
     * Note: when using cleanSort(), this default sort column will be restored.
     */
    defaultSortName?: keyof TRow | undefined;
    /**
     * Assign a default sort order.
     * Note: when using cleanSort(), this default sort order will be restored.
     */
    defaultSortOrder?: SortOrder | undefined;
    /**
     * Set to false to disable sort indicators on header columns, default is true.
     */
    sortIndicator?: boolean | undefined;
    /**
     * Assign a callback function which will be called after triggering sorting.
     * This function takes two argument: `sortName` and `sortOrder`.
     *   `sortName`: The sort column name, or array of column names if multi-column sort is active.
     *   `sortOrder`: The sort ordering, or array of ordering if multi-column sort is active.
     */
    onSortChange?:
        | ((sortName: keyof TRow, sortOrder: SortOrder) => void)
        | ((sortName: ReadonlyArray<keyof TRow>, sortOrder: ReadonlyArray<SortOrder>) => void) | undefined;
    /**
     * Change the text displayed on the table if data is empty.
     */
    noDataText?: string | ReactElement | undefined;
    /**
     * If true, this hides the noDataText on the table when the tableis empty. Default is false.
     */
    withoutNoDataText?: boolean | undefined;
    /**
     * A delay for trigger search after a keyup (millisecond)
     */
    searchDelayTime?: number | undefined;
    /**
     * Only work on enable search. If true, there will be a button beside the search input field
     * that will empty the field when clicked.
     */
    clearSearch?: boolean | undefined;
    /**
     * Set the default search condition.
     */
    defaultSearch?: string | undefined;
    /**
     * Assign a callback function which will be called when search text changes. This function takes
     * three argument:
     *   `searchText`: the text from the search field.
     *   `colInfos`: Array of column settings (e.g. filterFormatted, etc).
     *   `multiColumnSearch`: True if multiple column search is enabled.
     * In most cases, you only need to use searchText. This function usually used for remote searching.
     */
    onSearchChange?(searchText: string, colInfos: ReadonlyArray<ColumnDescription<TRow>>, multiColumnSearch: boolean): void;
    /**
     * Assign a callback function which will be called after triggering searching.
     * This function takes two argument: search and result.
     *   `search`: The search text from the user.
     *   `result`: The results after searching (array of rows that matched the search).
     */
    afterSearch?(search: string, result: ReadonlyArray<TRow>): void;
    /**
     * Default is false, if true means you want to ignore any editable columns when creating the insert form.
     */
    ignoreEditable?: boolean | undefined;
    /**
     * Assign a callback function that will be called after table updates.
     */
    afterTableComplete?(): void;
    /**
     * Assign a callback function which will be called after row delete.
     * This function takes two arguments:
     *   `rowKeys`: which means the row keys for the deleted rows
     *   `rows`: the array of row data that was deleted.
     */
    afterDeleteRow?(rowKeys: ReadonlyArray<number | string>, rows: ReadonlyArray<TRow>): void;
    /**
     * Assign a callback function which will be called after inserting a row.
     * This function takes one argument: row, which means the whole row data you added.
     */
    afterInsertRow?(row: TRow): void;
    /**
     * Assign a callback function which will be called after triggering column filtering.
     * This function takes two arguments: filterConds and result.
     *   `filterConds`: It's an array object which contain all column filter conditions.
     *   `result`: The results after filtering.
     *
     * This function only work when you enable columnFilter on <BootstrapTable> or define
     * a filter on <TableHeaderColumn>.
     */
    afterColumnFilter?(filterConds: ReadonlyArray<FilterData>, result: ReadonlyArray<TRow>): void;
    /**
     * Assign a callback function which will be called when a row is added. This function
     * takes three arguments:
     *   `row`: which represents the new row data
     *   `colInfos`: Array of Column Descriptions for the table.
     *   `errorCallback`: Function to call to provide an async error message if the Add fails.
     * The function should either return a string immediately, or return false and then return a string through the
     * error callback function later.
     */
    onAddRow?(row: TRow, colInfo: ReadonlyArray<ColumnDescription<TRow>>, errorCallback: (message: string) => void): string | boolean;
    /**
     * Assign a callback function which will be called when a filter condition changes.
     * This function takes one argument: filterObj which is an object which take dataField
     * as object key and the value is the filter condition.
     */
    onFilterChange?(filterObject: FilterData): void;
    /**
     * Assign a callback function which will be called when the export csv button is clicked.
     * In this function, you need to return an array of rows to be exported.
     */
    onExportToCSV?(): TRow[];
    /**
     * Assign a callback function which will be called when a row been deleted.
     * This function takes two arguments:
     *   `rowKeys`: keys for the rows to be deleted.
     *   `rows`: row data for the rows to be deleted.
     */
    onDeleteRow?(rowKeys: ReadonlyArray<number | string>, rows: ReadonlyArray<TRow>): void;
    /**
     * Assign a callback function which will be called after a row click.
     * This function takes four arguments:
     *   `row`: which is the row data that was clicked on.
     *   `columnIndex`: index of the column that was clicked on.
     *   `rowIndex`: index of the row that was clicked on.
     *   `event`: the click event.
     */
    onRowClick?(row: TRow, columnIndex: number, rowIndex: number, event: React.MouseEvent<any>): void;
    /**
     * Assign a callback function which will be called after a row double click.
     * This function takes two arguments:
     *   `row`: which is the row data that was double clicked on.
     *   `event`: the double click event.
     */
    onRowDoubleClick?(row: TRow, event: React.MouseEvent<any>): void;
    /**
     * Assign a callback function which will be called when mouse enters the table.
     */
    onMouseEnter?(): void;
    /**
     * Assign a callback function which will be called when mouse leaves the table.
     */
    onMouseLeave?(): void;
    /**
     * Assign a callback function which will be called when the mouse enters a row in table.
     * This function takes two arguments:
     *   `row`: the row data the mouse entered
     *   `e`: the mouse event data
     */
    onRowMouseOver?(row: TRow, e: React.MouseEvent<any>): void;
    /**
     * Assign a callback function which will be called when mouse leaves a row in table.
     * This function takes two arguments:
     *   `row`: the row data the mouse entered
     *   `e`: the mouse event data
     */
    onRowMouseOut?(row: TRow, e: React.MouseEvent<any>): void;
    /**
     * Assign a callback function which will be called when deleting a row.
     * It gives you a chance to customize your confirmation for row deletion.
     * This function takes two argument: next and rowKeys:
     *   `next`: If you confirm the delete, call next() to continue the process.
     *   `rowKeys` Is the row keys to be deleted, you can call the `next` function to apply this deletion.
     */
    handleConfirmDeleteRow?(next: () => void, rowKeys: ReadonlyArray<number | string>): void;
    /**
     * Customize the text of previouse page button.
     * If using the default pagination panel, this should be a string to use for the button label.
     * If creating a custom pagination panel, this is passed to the panel and can be of any type desired.
     */
    prePage?: any;
    /**
     * Customize the text of next page button.
     * If using the default pagination panel, this should be a string to use for the button label.
     * If creating a custom pagination panel, this is passed to the panel and can be of any type desired.
     */
    nextPage?: any;
    /**
     * Customize the text of first page button.
     * If using the default pagination panel, this should be a string to use for the button label.
     * If creating a custom pagination panel, this is passed to the panel and can be of any type desired.
     */
    firstPage?: any;
    /**
     * Customize the text of last page button.
     * If using the default pagination panel, this should be a string to use for the button label.
     * If creating a custom pagination panel, this is passed to the panel and can be of any type desired.
     */
    lastPage?: any;
    /**
     * Accept a number, which means the page you want to show as default.
     */
    page?: number | undefined;
    /**
     * You can change the dropdown list for size per page if you enable pagination.
     * Default is [10, 25, 30, 50].
     */
    sizePerPageList?: SizePerPageList | undefined;
    /**
     * Current chosen size per page.
     */
    sizePerPage?: number | undefined;
    /**
     * Number of page buttons to show on the pagination bar, default is 5.
     * i.e. previous 2 pages + current page + next two pages = 5.
     */
    paginationSize?: number | undefined;
    /**
     * Hide the dropdown list for size per page, default is false.
     */
    hideSizePerPage?: boolean | undefined;
    /**
     * Display a short text showing the total number of rows and current lines displayed,
     * default is false. If you want to customize this short text, you can give a function
     * and this function take three arguments:
     *  `start`: Current start index
     *  `to`: Current end index
     *  `total`: The total data volume.
     */
    paginationShowsTotal?: boolean | ((start: number, to: number, total: number) => string | ReactElement) | undefined;
    /**
     * Allows you to modify where to start counting the pages, e.g. to set the first page number to 0.
     * Default is 1.
     */
    pageStartIndex?: number | undefined;
    /**
     * Assign a callback function which will be called after page changed.
     * This function takes two argument: page and sizePerPage.
     *   `page`: New page number
     *   `sizePerPage`: The number of rows to display in one page.
     */
    onPageChange?(page: number, sizePerPage: number): void;
    /**
     * Assign a callback function which will be called after the size per page (number of rows per page)
     * has been changed.
     * This function takes one argument: sizePerPage.
     *   `sizePerPage`: The new number of rows to display in one page.
     */
    onSizePerPageList?(sizePerPage: number): void;
    /**
     * Default is false. If true, the pagination list will be hidden when there is only one page.
     */
    hidePageListOnlyOnePage?: boolean | undefined;
    /**
     * Background color on expanded rows (css color value).
     */
    expandRowBgColor?: string | undefined;
    /**
     * Expand all rows
     */
    expandAll?: boolean | undefined;
    /**
     * Tell react-bootstrap-table how to trigger expanding by clicking on 'row' or 'column' level.
     * If the value is 'column', by default all the columns are expandable. If you want to specify some columns as
     * unexpandable, check expandable.
     * Default is 'row'.
     */
    expandBy?: ExpandBy | undefined;
    /**
     * Customize the text on the insert button.
     */
    insertText?: string | undefined;
    /**
     * Customize the text on the delete button.
     */
    deleteText?: string | undefined;
    /**
     * Customize the text on the save button in the insert modal.
     */
    saveText?: string | undefined;
    /**
     * Customize the text on the close button in the insert modal.
     */
    closeText?: string | undefined;
    /**
     * Customize the text on the export csv button
     */
    exportCSVText?: string | undefined;
    /**
     * You can do something before the toastr pop or even disable the toastr!!
     * Returning false or void will not trigger the toastr.
     * If you want the toastr popup, you should return true always.
     * Inputs match the EditValidatorObject.notification field types.
     */
    beforeShowError?(type: EditValidatorType, msg: string, title: string): boolean | void;
    /**
     * Default is true. If false, during printing the toolbar is hidden.
     */
    printToolBar?: boolean | undefined;
    /**
     * ToolBar is the area on the top of table, it contain the search panel, buttons for data manipulation.
     * After v3.0.0, you can custom all the components in the ToolBar also itself too.
     * Give a toolBar in options props and toolBar only accept a function and a JSX returned value is necessary.
     */
    toolBar?(props: ToolBarProps): ReactElement;
    /**
     * Button group which contain the insert, drop, show only select and export CSV buttons, these button all
     * grouped as btn-group class in bootstrap. This is a chance that you can custom this button group.
     * Give a btnGroup in options props and btnGroup only accept a function and a JSX returned value is necessary.
     * This lets you customize just the left-hand-side of the toolbar if desired.
     */
    btnGroup?(props: ButtonGroupProps): ReactElement;
    /**
     * It's available to customize the insert button by configuring insertBtn in options props, insertBtn only
     * accept a function and a JSX returned value is necessary. This function will take one argument: onClick.
     *
     * The default `InsertButton` component is also exported as a component, so that you can use it as the base
     * for your custom component.
     */
    insertBtn?(onClick: (e: React.MouseEvent<any>) => void): ReactElement;
    /**
     * It's available to customize delete button by configuring deleteBtn in options props, deleteBtn onl<y
     * accept a function and a JSX returned value is necessary. This function will take one argument: onClick.
     *
     * The default `DeleteButton` component is also exported as a component, so that you can use it as the base
     * for your custom component.
     */
    deleteBtn?(onClick: (e: React.MouseEvent<any>) => void): ReactElement;
    /**
     * It's available to customize the export csv button by configuring exportCSVBtn in options props, exportCSVBtn only
     * accept a function and a JSX returned value is necessary. This function will take one argument: onClick.
     *
     * The default `ExportCSVButton` component is also exported as a component, so that you can use it as the base
     * for your custom component.
     */
    exportCSVBtn?(onClick: (e: React.MouseEvent<any>) => void): ReactElement;
    /**
     * It's available to custom select only toggle button by configuring showSelectedOnlyBtn in options props.
     * showSelectedOnlyBtn only accept a function and a JSX returned value is necessary.
     * This function will take two argument: onClick and showSelected.
     *
     * The default `ShowSelectedOnlyButton` component is also exported as a component, so that you can use it as
     * the base for your custom component.
     */
    showSelectedOnlyBtn?(onClick: (e: React.MouseEvent<any>) => void, showSelected: boolean): ReactElement;
    /**
     * You can custom the whole search panel(right side) by searchPanel in options props. searchPanel only accept
     * a function and a JSX returned value is necessary. This function will take one argument: props, that contains:
     *   `searchField`: the default search field component
     *   `clearBtn`: the default clear button component
     *   `defaultValue`: the default text for the search field
     *   `placeholder`: the default placeholder text for the search field
     *   `clearBtnClick`: the callback function to use when the clear search button is clicked
     *   `search`: the callback function for triggering the search, which takes the search text as an input.
     */
    searchPanel?(props: SearchPanelProps): ReactElement;
    /**
     * You can custom the search input field only by searchField in options props. searchField only accept a
     * function and a JSX returned value is necessary.
     *
     * The default `SearchField` component is also exported as a component, so that you can use it as the base for
     * your custom component.
     */
    searchField?(props: SearchFieldProps): ReactElement<Component<any> & SearchFieldInterface>;
    /**
     * You can custom the clear button for search field by giving clearSearchBtn in options props.
     * clearSearchBtn only accept a function and a JSX returned value is necessary.
     *
     * The default `ClearSearchButton` component is also exported as a component, so that you can use it as the
     * base for your own custom component.
     */
    clearSearchBtn?(onClick: (e: React.MouseEvent<any>) => void): ReactElement;
    /**
     * You can customize everything in the insert modal via options.insertModal and we give you the event
     * callback, props and some informations: onModalClose, onSave, columns, validateState, ignoreEditable
     * @see https://github.com/AllenFang/react-bootstrap-table/blob/master/examples/js/custom/insert-modal/custom-insert-modal.js
     */
    insertModal?(
        onModalClose: () => void,
        onSave: (row: TRow) => void,
        columns: ReadonlyArray<InsertModalColumnDescription<TRow>>,
        validateState: { [dataField: string]: string },
        ignoreEditable: boolean
    ): ReactElement;
    /**
     * You can customize the body of the insert modal via options.insertModalBody and we give you the following
     * arguments: columns, validateState {[fieldname]: errorMsg}, ignoreEditable
     *
     * Note: There is no exported Insert Modal Body component - if you are customising this, you need to create your
     * own body component. That component needs to implement a `getFieldValue` method that returns the new row data. It
     * will be called by react-bootstrap-table when the save button is clicked in the insert modal window.
     */
    insertModalBody?(
        columns: ReadonlyArray<InsertModalColumnDescription<TRow>>,
        validateState: { [dataField: string]: string },
        ignoreEditable: boolean
    ): React.ReactElement<React.Component<any> & ModalBodyInterface<TRow>>;
    /**
     * It's available to custom the header of insert modal by configuring options.insertModalHeader. It only accepts
     * a function and a JSX returned value is necessary. This function will take two arguments: closeModal and save.
     *   `closeModal`: callback function to trigger closing the modal window.
     *   `save`: callback function to trigger saving the new row data.
     *
     * The default `InsertModalHeader` component is also exported as a component, so that you can use it as the base
     * for your own custom component.
     */
    insertModalHeader?(closeModal: () => void, save: () => void): ReactElement;
    /**
     * It's available to custom the footer of insert modal by configuring options.insertModalFooter. It only accepts
     * a function and a JSX returned value is necessary. This function will take two arguments: closeModal and save.
     *   `closeModal`: callback function to trigger closing the modal window.
     *   `save`: callback function to trigger saving the new row data.
     *
     * The default `InsertModalFooter` component is also exported as a component, so that you can use it as the base
     * for your own custom component.
     */
    insertModalFooter?(closeModal: () => void, save: () => void): ReactElement;
    /**
     * Function to customize all of components for pagination, including the sizePerPage dropdown and the
     * pagination list.
     */
    paginationPanel?(props: PaginationPanelProps): ReactElement;
    /**
     * Function to customize the sizePerPage dropdown.
     */
    sizePerPageDropDown?(props: SizePerPageFunctionProps): ReactElement;
    /**
     * Location for the pagination panel to be displayed. Options are 'top' (above the table), 'bottom'
     * (below the table) and 'both' (above and below the table).
     */
    paginationPosition?: PaginationPostion | undefined;
    /**
     * Callback when the value in a cell has been modified. It accepts a function that takes three arguments:
     *   `row`: row that is being edited.
     *   `fieldName`: column dataField for the cell being edited.
     *   `value`: new value for the cell.
     * The function allows you to make further modifications to the cell value prior to it being saved. You need to
     * return the final cell value to use.
     */
    onCellEdit?<K extends string & keyof TRow>(row: TRow, fieldName: K, value: TRow[K]): TRow[K];
    /**
     * Custom message to show when the InsertModal save fails validation.
     * Default message is 'Form validate errors, please checking!'
     */
    insertFailIndicator?: string | undefined;
    /**
     * Function to verify that a key being generated in the Insert Modal is a valid key.
     * If the key fails validation, return a string error message.
     * If the key is ok, return void.
     */
    isValidKey?(key: number | string): string | void;
    /**
     * Ability to disable the BOM in the exported CSV file.
     * BOM = prepend BOM for UTF-8 XML and text/* types(including HTML) when saving the file.
     */
    noAutoBOM?: boolean | undefined;
    /**
     * Custom class to use for the expanded content section of an expanded row. This can either be a string, or a
     * function that returns a string and takes three arguments: row, rowIndex, isExpanding.
     *   `row`: the row expanding/collapsing.
     *   `rowIndex`: index number of the row.
     *   `isExpanding`: boolean flag specifying whether the field is expanding or collapsing.
     */
    expandBodyClass?: string | ((row: TRow, rowIndex: number, isExpanding: boolean) => string) | undefined;
    /**
     * Custom class to use for the row itself for an expanded row when it has been expanded. This can either be a
     * string, or a function that returns a string and takes two arguments: row and rowIndex.
     *   `row`: the expanded row.
     *   `rowIndex`: index number of the row.
     */
    expandParentClass?: string | ((row: TRow, rowIndex: number) => string) | undefined;
    /**
     * Customize the field separator in a CSV export file. Default is ','.
     */
    exportCSVSeparator?: string | undefined;
    /**
     * Set a function to be called when expanding or collapsing a row. This function takes three arguments:
     *   `rowKey`: dataField key for the row that is expanding or collapsing.
     *   `isExpand`: True if the row is expanding, false if it is collapsing.
     *   `event`: The click event.
     */
    onExpand?(rowKey: number | string, isExpand: boolean, event: React.MouseEvent<any>): void;
    /**
     * Specify that only one row should be able to be expanded at the same time.
     */
    onlyOneExpanding?: boolean | undefined;
    /**
     * Customize the tooltip text shown when hovering over the prePage button.
     */
    prePageTitle?: string | undefined;
    /**
     * Customize the tooltip text shown when hovering over the nextPage button.
     */
    nextPageTitle?: string | undefined;
    /**
     * Customize the tooltip text shown when hovering over the firstPage button.
     */
    firstPageTitle?: string | undefined;
    /**
     * Customize the tooltip text shown when hovering over the lastPage button.
     */
    lastPageTitle?: string | undefined;
    /**
     * Provide an array of expanded rows for the table.
     */
    expanding?: Array<number | string> | undefined;
    /**
     * Flag to indicate that the table should keep the SizePerPage dropdown open if the table rerenders without any
     * user interaction.
     */
    keepSizePerPageState?: boolean | undefined;
    /**
     * Flag to indicate that the table should always show next/previous buttons even when there is not next/previous
     * page.
     */
    alwaysShowAllBtns?: boolean | undefined;
    /**
     * Flag to indicate whether there should be buttons for First and Last page.
     */
    withFirstAndLast?: boolean | undefined;
}

/**
 * Properties for data where only a portion of the data is loaded into the table at one time (i.e. remote data).
 */
export interface FetchInfo {
    /**
     * Total number of rows that match the current table filter/search properties.
     */
    dataTotalSize: number;
}

/**
 * BootstrapTable class definition.
 */
export class BootstrapTable extends Component<BootstrapTableProps> {
    /**
     * Call this function to insert a new row to table.
     */
    handleAddRow(row: any): void;
    /**
     * Call this function to insert a new row as the first row in the table.
     */
    handleAddRowAtBegin(row: any): void;
    /**
     * Call this function to drop/delete rows from the table.
     */
    handleDropRow(rowKeys: Array<number | string>): void;
    /**
     * Call this function to do column filtering on table.
     * @example:
     *  // Filtering passing an array of values
     *  this.refs.table.handleFilterData({
     *      name: { type: 'ArrayFilter', value: ['Item name 3', 'Item name 4'] },
     *      price: { type: 'ArrayFilter', value: [2100, 2104] }
     *  });
     */
    handleFilterData(filter: FilterData): void;
    /**
     * Call this function with search text for fully searching.
     */
    handleSearch(search: string): void;
    /**
     * Call this function to sort table.
     */
    handleSort(order: SortOrder, dataField: string): void;
    /**
     * Call this function to get the page by a rowkey
     */
    getPageByRowKey(rowKey: number | string): number;
    /**
     * Call this function to export table as csv.
     */
    handleExportCSV(): void;
    /**
     * Reset the sort options to the defaults. Documented in examples but missing from main options list.
     * @see https://github.com/AllenFang/react-bootstrap-table/blob/master/examples/js/sort/clean-sorted-table.js
     */
    cleanSort(): void;
    /**
     * Deselect all rows in the table.
     */
    cleanSelected(): void;
    /**
     * Call reset to clean all the status on the table currently (sort, editing, filtering, search).
     */
    reset(): void;
}

export interface TableHeaderColumnProps {
    children?: ReactNode;
    ref?: LegacyRef<TableHeaderColumn> | undefined;
    /**
     * The field of data you want to show on column. This is used throughout react-bootstrap-table as the column field
     * name.
     */
    dataField?: string | undefined;
    /**
     * Use isKey to tell table which column is unique. This is same as the keyField in <BootstrapTable>
     * Tips: You need choose one configuration to set key field: isKey or the keyField in <BootstrapTable>
     */
    isKey?: boolean | undefined;
    /**
     * Set the column width, including the units. e.g. '10%' or '150px'
     */
    width?: string | undefined;
    /**
     * Set the text alignment in the column, possible values are 'left', 'center', 'right', 'start' and 'end'.
     */
    dataAlign?: DataAlignType | undefined;
    /**
     * Alignment of text in the column header.
     * Tip: If you don't set the headerAlign, it will default to the setting for dataAlign.
     */
    headerAlign?: DataAlignType | undefined;
    /**
     * True to enable table sorting on this column. Default is disabled.
     */
    dataSort?: boolean | undefined;
    /**
     * Allow user to render a custom sort caret. You should give a function and should return a JSX.
     * This function takes two arguments: order and fieldName.
     *   `direction`: the current sort order.
     *   `fieldName`: the dataField name of the field currently being sorted.
     */
    caretRender?(direction: SortOrder | null, fieldName: string): string | ReactElement;
    /**
     * To customize the column. This callback function should return a String or a React Component.
     * In addition, this function taking four argument: cell, row, formatExtraData, rowIdx.
     * The formatExtraData will be the value which you assign it on <TableHeaderColumn>
     */
    dataFormat?(cell: any, row: any, formatExtraData: any, rowIndex: number): string | ReactElement;
    /**
     * It's useful with dataFormat, you can give any data you want to be passed to the formatter.
     */
    formatExtraData?: any;
    /**
     * Allow you to add your custom attributes on TD element.
     * Example: tdAttr={ { 'data-attr': 'test' } }
     */
    tdAttr?: CustomAttrs | undefined;
    /**
     * Allow you to add your custom style object on TD element. Accepts either a CSS Properties object, or
     * a function that takes 4 arguments and returns a CSS Properties object. These arguments are:
     *   `cell`: The current cell value
     *   `row`: The current row data
     *   `rowIndex`: Index number for the current row data in the input data array.
     *   `columnIndex`: Index number for the current column that the cell is in.
     */
    tdStyle?: CSSProperties | ((cell: any, row: any, rowIndex: number, columnIndex: number) => CSSProperties) | undefined;
    /**
     * Allow you to add your custom style object on TH element.
     */
    thStyle?: CSSProperties | undefined;
    /**
     * When true, the column will filter using the value returned by the column's formatter.
     * When false (default), the column will filter using the pre-formatted value.
     */
    filterFormatted?: boolean | undefined;
    /**
     * Return the value you want to be filtered on that column.
     * It's useful if your column data is an object.
     * @example: (cell, row) => cell.fieldOne;
     * @see: https://github.com/AllenFang/react-bootstrap-table/blob/master/examples/js/manipulation/search-format-table.js
     */
    filterValue?(cell: any, row: any): any;
    /**
     * Customize the cell content when exporting to a CSV file. This function takes two argument: cell, row.
     */
    csvFormat?(cell: any, row: any): string;
    /**
     * Customize the column header text for the column when exporting to a CSV file.
     */
    csvHeader?: string | undefined;
    /**
     * It's usually used with csvFormat, and it's same as formatExtraData.
     * You can give any additional data you want to be passed to the csvFormat function.
     */
    csvFormatExtraData?: any;
    /**
     * Set to true to hide the column. Default is false. Often used to hide rowKey columns that are required to
     * identify a row but that do not need to be visible.
     */
    hidden?: boolean | undefined;
    /**
     * Used to specify whether a column will be exported to csv.
     *
     * If true, the column will be included in the export. This is usually used with hidden columns, as those are not
     * exported by default.
     *
     * If false, the column will be excluded from the csv export.
     */
    export?: boolean | undefined;
    /**
     * Usually used with Options.expandBy.
     * You can assign which columns will trigger a row expansion or not.
     * If false, clicking on a row inside this column will not cause the row to expand.
     */
    expandable?: boolean | undefined;
    /**
     * Set this to true to hide this column on insert modal. Default is false.
     *
     * This is often used together with autoValue for auto-generated columns like row keys.
     */
    hiddenOnInsert?: boolean | undefined;
    /**
     * It only work for enabling insertRow and be assign on rowKey column. If true, the value of rowkey will be
     * generated automatically after a row insertion. If a function given, you can customize the value by yourself and
     * remember to return the value for the cell from the function.
     */
    autoValue?: boolean | (() => any) | undefined;
    /**
     * False to disable search functionality on column, default is true.
     */
    searchable?: boolean | undefined;
    /**
     * Show the title on each column in the data section of the table.
     * @see https://github.com/AllenFang/react-bootstrap-table/blob/master/examples/js/column/column-title-table.js
     */
    columnTitle?: boolean | string | ((cell: any, row: any, rowIndex: number, colIndex: number) => string) | undefined;
    /**
     * Show the title on each column in the header section of the table, default is true.
     */
    headerTitle?: boolean | undefined;
    /**
     * If the children of TableHeaderColumn is a JSX or Object, we prefer to add this prop to describe this column with
     * a pure text(String). It will be used on the placeholder or tips in the filter, search field or insert field etc.
     */
    headerText?: string | undefined;
    /**
     * Give a custom callback function for data sorting.
     * This function takes five arguments: a, b, order, sortField, extraData
     * The extraData value is the data from the sortFuncExtraData.
     */
    sortFunc?(a: object, b: object, order: SortOrder, sortField: keyof object, extraData: any): number;
    /**
     * Extra data for the custom sort function. If defined, this data will be passed as fifth argument in sortFunc.
     */
    sortFuncExtraData?: any;
    /**
     * Add custom css class on table header column, this attribute only accept String or Function.
     * If Function, it takes four arguments: cell, row, rowIndex, columnIndex.
     * In addition, this function should return a String which is the class name you want to add on.
     */
    className?: string | ((cell: any, row: any, rowIndex: number, columnIndex: number) => string) | undefined;
    /**
     * Add custom css class on table body column, this attribute only accept String or Function.
     * If Function, it taking four arguments: cell, row, rowIndex, columnIndex.
     * In addition, this function should return a String which is the class name you want to add on.
     */
    columnClassName?: string | ((cell: any, row: any, rowIndex: number, columnIndex: number) => string) | undefined;
    /**
     * Add custom css class on editing cell, if assign a callback function, you are supposed to return a String for class name
     */
    editColumnClassName?: string | ((cell: any, row: any) => string) | undefined;
    /**
     * Add custom css class for invalid editing cell, if assign a callback function, you are supposed to return a String for class name
     */
    invalidEditColumnClassName?: string | ((cell: any, row: any) => string) | undefined;
    /**
     * boolean: Add True to set column editable, false is non-editable.
     * function: You have ability to control the editable level on cell instead of column level. For this
     * callback function, you are supposed to be return a bool value to decide this cell editable or not
     * This callback accepts four arguments: cell, row, rowIndex, columnIndex.
     * object: @see Editable interface.
     */
    editable?: boolean | Editable<any, any> | ((cell: any, row: any, rowIndex: number, columnIndex: number) => boolean | string | EditValidatorObject) | undefined;
    /**
     * Give an Object like following to able to customize your own editing component.
     * This Object should contain these two property:
     *   getElement(REQUIRED): Accept a callback function and take two arguments: onUpdate and props.
     *   customEditorParameters: Additional data for custom cell edit component.
     */
    customEditor?: CustomEditor<any, any> | undefined;
    /**
     * To Enable a column filter within header column.
     * This feature support a lots of filter types and conditions.
     */
    filter?: Filter | undefined;
    /**
     * This is always used together with rowSpan and colSpan, to create multi-row/multi-column headers.
     * Row is the header row on which this header column present.
     */
    row?: number | undefined;
    /**
     * Indicates how many rows this column takes.
     * Default: 1
     */
    rowSpan?: number | undefined;
    /**
     * Indicates how many columns this column takes.
     * Default: 1
     */
    colSpan?: number | undefined;
    /**
     * Specify the field type to use when exporting this column to CSV. Available types are 'number' and 'string'.
     * Defaults to 'string'.
     */
    csvFieldType?: CSVFieldType | undefined;
    /**
     * Set the column class name for the actively filtered column. Can be either a string, or a function that takes two
     * parameters: order and dataField.
     *   `order`: current sort order for the column.
     *   `dataField`: current column's dataField.
     * This allows you to specify a different className depending on whether the current dataField is being sorted 'asc'
     * or 'desc'.
     * @see https://github.com/AllenFang/react-bootstrap-table/blob/master/examples/js/sort/sort-style-table.js#L36-L37
     */
    sortHeaderColumnClassName?: string | ((order: SortOrder, dataField: string) => string) | undefined;
    /**
     * Specify custom tdAttrs to use for a cell that is being edited within this column.
     */
    editTdAttr?: CustomAttrs | undefined;
    /**
     * Custom insert editor element. This is a function to generate a custom edit element to display in the InsertModal
     * form. The function takes five arguments: column, attr, editorClass, ignoreEditable, defaultValue.
     *   `column`: column information given to the insert modal.
     *   `attr`: EditableAttrs from the TableHeader.editable object options.
     *   `editorClass`: className to apply to the editor component.
     *   `ignoreEditable`: boolean flag indicating whether editable fields should be ignored in the insert modal
     *   `defaultValue`: the default value to use for this cell.
     * The function should return either a JSX element for the field, or false to default back to the standard edit
     * element.
     */
    customInsertEditor?: {
        getElement(
            column: InsertModalColumnDescription,
            attr: EditableAttrs,
            editorClass: string,
            ignoreEditable: boolean,
            defaultValue: any
        ): ReactElement | boolean;
    } | undefined;
    /**
     * Support specifying that the column should start sorting with the 'asc' option.
     */
    defaultASC?: boolean | undefined;
}

/**
 * Editable Attributes. Poorly documented, but used when creating custom editor components.
 */
export interface EditableAttrs {
    /**
     * Placeholder text to use for the cell editor field.
     */
    placeholder?: string | undefined;
    /**
     * Function to pass a reference to the input editor field.
     */
    ref?(ref: any): any;
    /**
     * Callback for onKeyDown.
     */
    onKeyDown?(): void;
    /**
     * Callback for on cell blur.
     */
    onBlur?(): void;
}

/**
 * Editable Select option values
 */
export type EditSelectOptionValue =
    | Array<{ text: string; value: string; }>
    | string[]
    | number[];

/**
 * Editable Checkbox option values. This should be a string with the true/false value separated by a colon.
 * e.g. "Yes:No"
 */
export type EditCheckboxOptionValue = string;

/**
 * Object to use to customize the properties for an editable column.
 */
export interface Editable<TRow extends object, K extends keyof TRow> {
    /**
     * Edit field type, avaiable value is 'textarea', 'select', 'checkbox' and 'datetime'
     */
    type?: EditCellType | undefined;
    /**
     * Class name to use for the editor component.
     */
    className?: string | undefined;
    /**
     * Number of columns to display for a text area component.
     */
    cols?: number | undefined;
    /**
     * Number of rows to display for a text area component.
     */
    rows?: number | undefined;
    /**
     * Used to specify a field that can be modified in the insert modal when adding a new row, but cannot be edited
     * inside the table after the row has been inserted.
     */
    readOnly?: boolean | undefined;
    /**
     * CSS Style to use for the editor component.
     */
    style?: CSSProperties | undefined;
    /**
     * Validation function for the column. It takes the new "cell value" as argument. This function should return
     * a boolean true/false for isValid, or an EditValidatorObject (so that an error message can be provided).
     */
    validator?(cell: TRow[K], row: TRow): boolean | string | EditValidatorObject;
    /**
     * Data in a select or checkbox. If a checkbox, use a string with a ':'(colon) to separate the two values, ex: Y:N
     * The callback function can be used to customize the select options based on other field values within the row.
     * If the array is an array of objects, the fields 'text' can be used for the display text and 'value' to specify
     * the option's value.
     */
    options?: {
        values:
        | EditSelectOptionValue
        | EditCheckboxOptionValue
        | ((row: TRow) => EditCheckboxOptionValue | EditSelectOptionValue);
    } | undefined;
    /**
     * Default value to show in the edit field in the Insert Modal for this column.
     */
    defaultValue?: TRow[K] | undefined;
    /**
     * @deprecated Use placeholder inside the attrs field instead.
     * Text to display as placeholder text in the editor component.
     */
    placeholder?: string | undefined;
    /**
     * Additional attributes for the editor component.
     */
    attrs?: EditableAttrs | undefined;
}

/**
 * Text filter type.
 */
export interface TextFilter {
    /**
     * Filter type must be 'TextFilter'.
     */
    type: 'TextFilter';
    /**
     * Delay time in milliseconds after the last key press prior to applying the filter. Defaults to 500ms.
     */
    delay?: number | undefined;
    /**
     * Placeholder text to show in the filter.
     */
    placeholder?: string | undefined;
    /**
     * Condition. Can be 'eq' (exactly equal) or 'like' (contains the given string). Defaults to 'like'.
     */
    condition?: FilterCondition | undefined;
    /**
     * Default value for the text filter. Defaults to ''
     */
    defaultValue?: string | undefined;
    /**
     * CSS Style to use for the select filter.
     */
    style?: CSSProperties | undefined;
}

export interface SelectFilterOptionsType {
    [value: string]: string | number | boolean;
    [value: number]: string | number | boolean;
}

/**
 * Select filter type
 */
export interface SelectFilter {
    /**
     * Filter type must be 'SelectFilter'
     */
    type: 'SelectFilter';
    /**
     * Placeholder text to show in the filter.
     */
    selectText?: string | undefined;
    /**
     * Options for the filter select.
     */
    options: SelectFilterOptionsType;
    /**
     * Condition. Can be 'eq' (exactly equal) or 'like' (contains the given string). Defaults to 'like'.
     */
    condition?: FilterCondition | undefined;
    /**
     * Default value for the select filter.
     */
    defaultValue?: string | number | boolean | undefined;
    /**
     * CSS Style to use for the select filter.
     */
    style?: CSSProperties | undefined;
    /**
     * Disable the empty option in the dropdown filter.
     */
    withoutEmptyOption?: boolean | undefined;
}

/**
 * Regex filter type
 */
export interface RegexFilter {
    /**
     * Filter type must be 'RegexFilter'
     */
    type: 'RegexFilter';
    /**
     * Delay time in milliseconds after the last key press prior to applying the filter. Defaults to 500ms.
     */
    delay?: number | undefined;
    /**
     * Placeholder text to show in the filter.
     */
    placeholder?: string | undefined;
    /**
     * Default value
     */
    defaultValue?: string | undefined;
    /**
     * CSS Style to use for the select filter.
     */
    style?: CSSProperties | undefined;
}

/**
 * Number filter type
 */
export interface NumberFilter {
    /**
     * Filter type must be 'NumberFilter'
     */
    type: 'NumberFilter';
    /**
     * Delay time in milliseconds after the last key press prior to applying the filter. Defaults to 500ms.
     */
    delay?: number | undefined;
    /**
     * Placeholder text to show in the filter.
     */
    placeholder?: string | undefined;
    /**
     * Number filter comparators
     */
    numberComparators?: FilterComparator[] | undefined;
    /**
     * Default value for the filter.
     */
    defaultValue?: {
        /**
         * Number value.
         */
        number: number;
        /**
         * Comparator value.
         */
        comparator: FilterComparator;
    } | undefined;
    /**
     * If this is a select number field, disable the empty option in the dropdown.
     */
    withoutEmptyOption?: boolean | undefined;
    /**
     * Specify that the comparator field MUST have a comparator selected.
     */
    withoutEmptyComparatorOption?: boolean | undefined;
    /**
     * Specify that the value field MUST have a number value specified.
     */
    withoutEmptyNumberOption?: boolean | undefined;
    /**
     * List of number options that can be selected, if the number field is a select dropdown instead of a text edit.
     */
    options?: number[] | undefined;
    /**
     * CSS Style to use for the select filter.
     */
    style?: {
        number: CSSProperties;
        comparator: CSSProperties;
    } | undefined;
}

/**
 * Date filter type
 */
export interface DateFilter {
    /**
     * Filter type must be 'DateFilter'
     */
    type: 'DateFilter';
    /**
     * Delay time in milliseconds after the last key press prior to applying the filter. Defaults to 500ms.
     */
    delay?: number | undefined;
    /**
     * Date filter comparators
     */
    dateComparators?: FilterComparator[] | undefined;
    /**
     * Default value for the filter.
     */
    defaultValue?: {
        /**
         * Date value. String values will be automatically converted to dates.
         */
        date: Date | string;
        /**
         * Comparator value.
         */
        comparator: FilterComparator;
    } | undefined;
    /**
     * CSS Style to use for the select filter.
     */
    style?: {
        date: CSSProperties;
        comparator: CSSProperties;
    } | undefined;
}

/**
 * Custom Filter Parameters
 */
export interface CustomFilterParameters<Params extends object = any> {
    callback(cell: any, params: Params): boolean;
    callbackParameters: Params;
}

/**
 * Custom filter element type.
 */
export class CustomFilterElement extends Component<any> {
    cleanFiltered: () => void;
}

/**
 * Custom filter type.
 */
export interface CustomFilter<FParams extends object = any, FElement extends CustomFilterElement = any> {
    /**
     * Type must be 'CustomFilter'
     */
    type: 'CustomFilter';
    /**
     * Function to generate the filter component
     */
    getElement(
        filterHandler: (value?: CustomFilterParameters<FParams>, type?: 'CustomFilter') => void,
        customFilterParameters: CustomFilterParameters<FParams>
    ): ReactElement<FElement>;
    /**
     * Custom filter parameters to be passed to the generator function
     */
    customFilterParameters: CustomFilterParameters<FParams>;
}

/**
 * Collection of filter types.
 */
export type Filter = TextFilter | SelectFilter | RegexFilter | NumberFilter | DateFilter | CustomFilter;

/**
 * The "value" type for a number filter
 */
export interface NumberFilterValue {
    number: number | string;
    comparator: FilterComparator;
}

/**
 * The "value" type for a date filter.
 */
export interface DateFilterValue {
    date: Date | string;
    comparator: FilterComparator;
}

/**
 * Text Filter's data object.
 */
export interface TextFilterData {
    type: 'TextFilter';
    value: string;
}

/**
 * Select Filter's data object.
 */
export interface SelectFilterData {
    type: 'SelectFilter';
    value: string;
}

/**
 * Regex Filter's data object.
 */
export interface RegexFilterData {
    type: 'RegexFilter';
    value: string;
}

/**
 * Number Filter's data object.
 */
export interface NumberFilterData {
    type: 'NumberFilter';
    value: NumberFilterValue;
}

/**
 * Date Filter's data object.
 */
export interface DateFilterData {
    type: 'DateFilter';
    value: DateFilterValue;
}

/**
 * Data object returned for an array filter.
 */
export interface ArrayFilterData {
    type: 'ArrayFilter';
    value: string[] | number[];
}

/**
 * Valid types for the "value" field inside a filter's data object.
 */
export type FilterValueData = string | number | string[] | number[] | DateFilterValue | NumberFilterValue;

/**
 * Combined types of filter data objects.
 */
export type FilterValue =
    | TextFilterData
    | SelectFilterData
    | RegexFilterData
    | NumberFilterData
    | DateFilterData
    | ArrayFilterData;

/**
 * Filter object that can be passed to BootstrapTableFilter.handleFilterData function.
 */
export interface FilterData<CustomFilterValue extends object = any> {
    [dataField: string]: FilterValue | CustomFilterValue;
}

/**
 * TableHeaderColumn class definition.
 */
export class TableHeaderColumn extends Component<TableHeaderColumnProps> {
    /**
     * Function to reset the filter on this column to the default values.
     */
    cleanFiltered(): void;
    /**
     * Apply a filter value.
     */
    applyFilter(value: FilterValueData): void;
}

/**
 * Customize the options for Keyboard Navigation.
 */
export interface KeyboardNavigation {
    /**
     * Return a style object which will be applied on the navigating cell.
     */
    customStyle?(cell: any, row: any): CSSProperties;
    /**
     * Set to false to disable click to navigate, usually user wants to click to select row instead of navigation.
     */
    clickToNav?: boolean | undefined;
    /**
     * Return a style object which will be applied on the both of navigating and editing cell.
     */
    customStyleOnEditCell?(cell: any, row: any): CSSProperties;
    /**
     * When set to true, pressing ENTER will begin to edit the cell if cellEdit is also enabled.
     */
    enterToEdit?: boolean | undefined;
    /**
     * When set to true, pressing ENTER will expand or collapse the current row.
     */
    enterToExpand?: boolean | undefined;
    /**
     * When set to true, pressing ENTER will select or unselect the current row.
     */
    enterToSelect?: boolean | undefined;
}

/**
 * Input properties for the expandColumnComponent function when customising the expand indicator.
 */
export interface ExpandColumnComponentProps {
    /**
     * True if the current row is able to be expanded.
     */
    isExpandableRow: boolean;
    /**
     * True if the current row is currently expanded.
     */
    isExpanded: boolean;
}

/**
 * Input properties for the expandedColumnHeaderComponent function.
 */
export interface ExpandedColumnHeaderProps {
    anyExpand: boolean;
}

/**
 * Customize the options for expand row feature.
 */
export interface ExpandColumnOptions {
    /**
     * Will enable an indicator column at first column if true. Default is false.
     */
    expandColumnVisible?: boolean | undefined;
    /**
     * a callback function to customize the appearance of the indicator column.
     */
    expandColumnComponent?(props: ExpandColumnComponentProps): string | ReactElement;
    /**
     * set the width of indicator column.
     */
    columnWidth?: number | string | undefined;
    /**
     * If both an indicator column and a selection column are displaying, this specifies whether the indicator column
     * should be shown first. Default is true, false will move the expand indicator column after selection column.
     */
    expandColumnBeforeSelectColumn?: boolean | undefined;
    /**
     * a callback function to customise the header column
     */
    expandedColumnHeaderComponent?(props: ExpandedColumnHeaderProps): string | ReactElement;
}

/**
 * Properties provided in the callback to create a custom component for the selection column radio/checkboxes
 */
export interface CustomSelectProps {
    /**
     * What type of selection should be used? Values are 'radio' (single) or 'checkbox' (multiple).
     */
    type: SelectRowMode;
    /**
     * True if the current row being drawn is selected.
     */
    checked: boolean;
    /**
     * True if the current row being drawn is not permitted to be selected.
     */
    disabled: boolean;
    /**
     * Callback that should be used when someone selects the current row.
     *   `event`: the current event target
     *   `rowIndex`: the index of the current row being toggled.
     */
    onChange(event: any, rowIndex: string | number): void;
    /**
     * Index for the row currently being rendered.
     * If the rowIndex is 'Header', it means this rendering is for header selection column.
     */
    rowIndex: number | string;
    /**
     * The indeterminate flag is used to indicate that there are some rows selected, but it is neither all rows nor
     * no rows. As far as the select all checkbox is concerned, it is neither true nor false.
     */
    indeterminate: boolean;
}

/**
 * Details of the column settings, provided to the Options.onSearchChange callback function.
 * The values for these settings come from the <TableHeader> properties for a column.
 *
 * Note: the list of options is poorly documented. This list comes from double-checking the
 * react-bootstrap-table source code to check what properties actually get passed to the
 * onSearchChange callback function.
 */
export interface ColumnDescription<TRow extends object = any> {
    /**
     * Name of the column.
     * Comes from TableHeader.dataField property.
     */
    name: keyof TRow;
    /**
     * Column text alignment setting
     * Comes from TableHeader.dataAlign property.
     */
    align: DataAlignType;
    /**
     * Column sorting setting. If true, the column can be used to sort the data.
     * Comes from TableHeader.dataSort property.
     */
    sort: boolean;
    /**
     * Column data format function.
     * Comes from TableHeader.dataFormat property.
     */
    format(cell: any, row: TRow, formatExtraData: any, rowIndex: number): string | ReactElement;
    /**
     * The formatExtraData setting for the column.
     * Comes from TableHeader.formatExtraData property.
     */
    formatExtraData: any;
    /**
     * Whether data should be filtered based on the formatted value, or the raw data value.
     * Comes from TableHeader.filterFormatted property.
     */
    filterFormatted: boolean;
    /**
     * Filter function for the column.
     * Comes from TableHeader.filterValue property.
     */
    filterValue(cell: any, row: TRow): any;
    /**
     * Setting for whether the data in this column can be edited.
     * Comes from TableHeader.editable property.
     */
    editable: boolean | Editable<TRow, any> | ((cell: any, row: TRow, rowIndex: number, columnIndex: number) => boolean | string | EditValidatorObject);
    /**
     * Custom editor settings to use when editing the data in this column.
     * Comes from TableHeader.customEditor property.
     */
    customEditor: CustomEditor<TRow, any>;
    /**
     * Flag to indicate whether this column should be visible or not.
     * Comes from TableHeader.hidden property.
     */
    hidden: boolean;
    /**
     * Flag to indicate whether this column should be hidden on the insert modal.
     * Comes from TableHeader.hiddenOnInsert property.
     */
    hiddenOnInsert: boolean;
    /**
     * Flag to indicate whether the data in this column should be included in a search.
     * Comes from TableHeader.searchable property.
     */
    searchable: boolean;
    /**
     * Custom className setting for this column.
     * Comes from TableHeader.columnClassName property.
     */
    className: string | ((cell: any, row: TRow, rowIndex: number, columnIndex: number) => string);
    /**
     * Custom className setting for this column when a cell in the column is being edited.
     * Comes from TableHeader.editColumnClassName property.
     */
    editClassName: string | ((cell: any, row: TRow) => string);
    /**
     * Custom className setting for this column when a cell in the column contains invalid data.
     * Comes from TableHeader.invalidEditColumnClassName property.
     */
    invalidEditColumnClassName: string | ((cell: any, row: TRow) => string);
    /**
     * Custom title to display for this column.
     * Comes from TableHeader.columnTitle property.
     */
    columnTitle: boolean;
    /**
     * Width setting for this column.
     * Comes from TableHeader.width property.
     */
    width: string;
    /**
     * Custom header value/component/children to use for this column.
     * Comes from TableHeader.headerText || TableHeader.children properties.
     */
    text: string | number | boolean | ReactElement;
    /**
     * Custom sort function to use for this column.
     * Comes from TableHeader.sortFunc property.
     */
    sortFunc(a: TRow, b: TRow, order: SortOrder, sortField: keyof TRow, extraData: any): number;
    /**
     * Extra data to be provided to the search function for this column.
     * Comes from TableHeader.sortFuncExtraData property.
     */
    sortFuncExtraData: any;
    /**
     * Flag to indicate whether this column should be included in a CSV export.
     * Comes from TableHeader.export property.
     */
    export: boolean;
    /**
     * Flag to indicate whether this column is expandable.
     * Comes from TableHeader.expandable property.
     */
    expandable: boolean;
    /**
     * Custom attributes (e.g. {'data-attr': 'test'}) to be applied to cells in this column.
     * Comes from TableHeader.tdAttr property.
     */
    attrs: CustomAttrs;
    /**
     * Custom attributes (e.g. {'data-attr': 'test'}) to use for cells that are being edited in this column.
     * Comes from TableHeader.editTdAttr property.
     */
    editAttrs: CustomAttrs;
    /**
     * CSS style properties to use for cells in this column.
     * Comes from TableHeader.tdStyle property.
     */
    style: CSSProperties;
}

/**
 * Props provided to the Options.toolBar callback function for creating a custom toolbar.
 */
export interface ToolBarProps {
    /**
     * Rendered components to use in the toolbar.
     */
    components: ButtonGroupProps & {
        /**
         * Search panel component.
         */
        searchPanel: ReactElement;
        /**
         * Button group components.
         */
        btnGroup: ReactElement; // button groups JSX
        /**
         * The individual search field.
         */
        searchField: ReactElement; // search field JSX
        /**
         * The button to clear the search field.
         */
        clearBtn: ReactElement; // clear search field JSX
    };
    /**
     * Event callbacks to use with a custom toolbar.
     */
    event: {
        /**
         * Callback to activate the insert row modal window.
         */
        openInsertModal(): void;
        /**
         * Callback to close the insert row modal window.
         */
        closeInsertModal(): void;
        /**
         * Callback to delete selected row(s) from the table.
         */
        dropRow(): void;
        /**
         * Callback to toggle between showing all rows and showing only selected rows.
         */
        showOnlyToogle(): void;
        /**
         * Callback to export the table to a CSV file.
         */
        exportCSV(): void;
        /**
         * Callback to apply a search.
         */
        search(): void;
    };
}

/**
 * Left-hand side Button elements (used when customizing the toolbar).
 */
export interface ButtonGroupProps {
    /**
     * Export to CSV button.
     */
    exportCSVBtn: ReactElement;
    /**
     * Insert button (to add a row).
     */
    insertBtn: ReactElement;
    /**
     * Delete button.
     */
    deleteBtn: ReactElement;
    /**
     * Toggle button to switch between showing all rows and showing selected rows only.
     */
    showSelectedOnlyBtn: ReactElement;
}

/**
 * Properties that are given to the Options.searchPanel callback function.
 */
export interface SearchPanelProps {
    /**
     * Default search field component.
     */
    searchField: ReactElement;
    /**
     * Default clear search field button component.
     */
    clearBtn: ReactElement;
    /**
     * The default search text.
     */
    defaultValue: string;
    /**
     * The placeholder text for the search field.
     */
    placeholder: string;
    /**
     * A callback to trigger the clear search field event.
     */
    clearBtnClick(): void;
    /**
     * A callback to trigger a search, takes the search text as an input.
     */
    search(searchText: string): void;
}

/**
 * Properties passed as props to the Options.paginationPanel function when generating a custom pagination panel.
 */
export interface PaginationPanelProps {
    /**
     * Current page number
     */
    currPage: number;
    /**
     * Current number of rows to show per page
     */
    sizePerPage: number;
    /**
     * Choices for size per page dropdown component
     */
    sizePerPageList: SizePerPageList;
    /**
     * Index number for the first page of data.
     * Comes from Options.pageStartIndex.
     */
    pageStartIndex: number;
    /**
     * Callback function to use to change page.
     */
    changePage(pageNum: number): void;
    /**
     * Callback function to trigger the toggle on sizePerPage dropdown button
     */
    toggleDropDown(): void;
    /**
     * Callback function to use to set a new size per page.
     */
    changeSizePerPage(sizePerPage: number): void;
    /**
     * The basic components for the pagination panel, provided here so that you have the option to use some of them
     * if you don't want to customize all of them.
     */
    components: {
        /**
         * Text/element to display when displaying the total number of rows.
         */
        totalText: string | ReactElement;
        /**
         * Default sizePerPageDropdown component.
         */
        sizePerPageDropDown: SizePerPageDropDown;
        /**
         * The default list of page change buttons.
         */
        pageList: HTMLUListElement;
    };
}

/**
 * Properties given to the Options.sizePerPageDropDown function used to generate a custom sizePerPage component to
 * render in the pagination panel.
 */
export interface SizePerPageFunctionProps {
    /**
     * Flag to indicate that the sizePerPage dropdown should currently be 'open'.
     */
    open: boolean;
    /**
     * Flag indicating that the sizePerPage dropdown should be hidden.
     */
    hideSizePerPage: boolean;
    /**
     * Current size per page as a string value.
     */
    currSizePerPage: string;
    /**
     * Array of the size per page options to display in the dropdown.
     */
    sizePerPageList: SizePerPageList;
    /**
     * On-click toggle function callback to open/close the size per page dropdown list.
     */
    toggleDropDown(): void;
    /**
     * Callback function to use to change the current size per page.
     */
    changeSizePerPage(newSizePerPage: number): void;
}

/**
 * Custom Editor Props passed to the getElement function in the TableHeader.customEditor object.
 */
export interface CustomEditorProps<TRow extends object, K extends keyof TRow> extends EditableAttrs {
    /**
     * The row data for the cell being edited.
     */
    row: TRow;
    /**
     * Default value for the editor cell.
     */
    defaultValue: TRow[K];
    /**
     * Contents of the customEditorParameters object.
     */
    [parameterName: string]: any;
}

/**
 * Object to provide a custom editor component to use for a table column.
 * @see: https://github.com/AllenFang/react-bootstrap-table/blob/master/examples/js/cell-edit/custom-cell-edit-table.js
 */
export interface CustomEditor<TRow extends object, K extends keyof TRow> {
    /**
     * Required. Function to use to create the custom cell editor. Takes two parameters:
     *   `onUpdate`: callback function to call to update the value inside the cell.
     *   `props`:
     */
    getElement(onUpdate: (updatedCell: TRow[K]) => void, props: CustomEditorProps<TRow, K>): ReactElement;
    /**
     * Additional parameters to pass to the getElement function inside the props argument.
     */
    customEditorParameters?: object | undefined;
}

/**
 * Validation object that can be returned from cell editing validation.
 */
export interface EditValidatorObject {
    /**
     * Boolean flag indicating whether the cell value is valid.
     */
    isValid: boolean;
    /**
     * Notification object providing details on the validation result.
     */
    notification: {
        /**
         * One of 'success' or 'error'
         */
        type: EditValidatorType;
        /**
         * A text message explaining the validation result.
         */
        msg: string;
        /**
         * A text title explaining the validation result.
         */
        title: string;
    };
}

/**
 * Properties that can be passed to the InsertButton, DeleteButton, ExportCSVButton and ClearSearchButton
 * components.
 */
export interface ButtonProps {
    /**
     * Label for the button
     */
    btnText?: string | undefined;
    /**
     * Bootstrap css style class for the button, e.g. 'btn-warning'
     */
    btnContextual?: string | undefined;
    /**
     * Custom class for the button
     */
    className?: string | undefined;
    /**
     * Glyphicon glyph string for the button, e.g. 'glyphicon-edit'
     */
    btnGlyphicon?: string | undefined;
    /**
     * Function to be called to activate the normal onClick functionality for this button.
     */
    onClick?(e: React.MouseEvent<any>): void;
}

/**
 * Properties that can be passed to the ShowSelectedOnlyButton component.
 */
export interface ShowSelectedButtonProps {
    /**
     * Label for when clicking the button will toggle the table back into "show all rows" mode.
     */
    showAllText?: string | undefined;
    /**
     * Label for when clicking the button will toggle the table into "show only selected rows" mode.
     */
    showOnlySelectText?: string | undefined;
    /**
     * Bootstrap css style class for the button, e.g. 'btn-warning'
     */
    btnContextual?: string | undefined;
    /**
     * Custom class for the button
     */
    className?: string | undefined;
    /**
     * Glyphicon glyph string for the button, e.g. 'glyphicon-edit'
     */
    btnGlyphicon?: string | undefined;
    /**
     * Function to be called to activate the normal onClick functionality for this button.
     */
    onClick?(e: React.MouseEvent<any>): void;
}

/**
 * Properties that can be passed to the SearchField component.
 */
export interface SearchFieldProps {
    /**
     * Custom css class name
     */
    className?: string | undefined;
    /**
     * Default value for the search field
     */
    defaultValue?: string | undefined;
    /**
     * Placeholder text for the search field
     */
    placeholder?: string | undefined;
    /**
     * callback funciton to call when a key is released
     */
    onKeyUp?(e: React.KeyboardEvent<any>): void;
}

/**
 * Interface that must be implemented for a custom search field component.
 */
export interface SearchFieldInterface {
    /**
     * getValue should return the current search text.
     */
    getValue(): string;
    /**
     * setValue should update the current search text to the given value.
     */
    setValue(search: string): void;
}

/**
 * Modal Column data passed to Options.insertModal and Options.insertModalBody.
 */
export interface InsertModalColumnDescription<TRow extends object = any> {
    /**
     * Flag to indicate that this is the key field for the column. It is only present if there is more than
     * one column in the table.
     * Comes from TableHeader.isKey field.
     */
    isKey?: boolean | undefined;
    /**
     * Header text/element for the column.
     * Comes from TableHeader.headerText or TableHeader.children.
     */
    name: string | ReactElement;
    /**
     * Field name for the column data.
     * Comes from TableHeader.dataField.
     */
    field: keyof TRow; // children.props.dataField,
    /**
     * Flag to indicate whether this column is editable.
     * Comes from TableHeader.editable.
     */
    editable: boolean | Editable<TRow, keyof TRow> | ((cell: TRow[keyof TRow], row: TRow, rowIndex: number, columnIndex: number) => boolean | string | EditValidatorObject);
    /**
     * Custom element to use for the Insert field element.
     * Comes from TableHeader.customInsertEditor.
     */
    customInsertEditor(
        column: InsertModalColumnDescription<TRow>,
        attr: EditableAttrs,
        editorClass: string,
        ignoreEditable: boolean,
        defaultValue: TRow[keyof TRow]
    ): ReactElement | boolean;
    /**
     * Flag to indicate whether this column should be hidden on the Insert Modal page.
     * Comes from TableHeader.hiddenOnInsert.
     */
    hiddenOnInsert: boolean; // children.props.hiddenOnInsert,
    /**
     * Flag to indicate whether the table should check that a key does not already exist.
     * Comes from TableHeader.keyValidator.
     */
    keyValidator: boolean; // children.props.keyValidator
    /**
     * Flag to indicate that the field should be auto-generated rather than edited. It is only present if there is more
     * than one column in the table.
     * Comes from TableHeader.autoValue.
     */
    autoValue?: boolean | undefined;
    /**
     * Format function for the field. It is only present if there is more than one column in the table. Value is either
     * 'false', meaning that there is no format function present, or a wrapper function that returns the formatted string
     * content for the field using the TableHeader.dataFormat function to generate that string.
     *
     * Based on from TableHeader.dataFormat, but is applied as a wrapper function around that function.
     */
    format?: boolean | ((cell: TRow[keyof TRow]) => string) | undefined;
}

/**
 * Properties that can be passed to the InsertModalHeader component.
 */
export interface InsertModalHeaderProps {
    /**
     * Header class name.
     */
    className?: string | undefined;
    /**
     * Title to display in the header.
     */
    title?: string | undefined;
    /**
     * Callback function to call prior to closing the Insert Modal window.
     */
    beforeClose?(e: SyntheticEvent<any>): void;
    /**
     * Callback function to call to close the Insert Modal window.
     */
    onModalClose?(closeModal: () => void): void;
    /**
     * Set to true to hide the close button. Default is false.
     */
    hideClose?: boolean | undefined;
    /**
     * Bootstrap version.
     */
    version?: BootstrapVersion | undefined;
}

/**
 * Properties that can be passed to the InsertModalFooter component.
 */
export interface InsertModalFooterProps {
    /**
     * Header class name.
     */
    className?: string | undefined;
    /**
     * Text to display on the Save button
     */
    saveBtnText?: string | undefined;
    /**
     * Text to display on the Close button
     */
    closeBtnText?: string | undefined;
    /**
     * Bootstrap css class name for the close button, example: 'btn-warning'
     */
    closeBtnContextual?: string | undefined;
    /**
     * Bootstrap css class name for the save button, example: 'btn-success'
     */
    saveBtnContextual?: string | undefined;
    /**
     * Custom class name for the close button.
     */
    closeBtnClass?: string | undefined;
    /**
     * Custom class name for the save button.
     */
    saveBtnClass?: string | undefined;
    /**
     * Callback function to call prior to closing the Insert Modal window.
     */
    beforeClose?(e: SyntheticEvent<any>): void;
    /**
     * Callback function to call to close the Insert Modal window.
     */
    onModalClose?(closeModal: () => void): void;
    /**
     * Callback function to be called prior to saving the new row.
     */
    beforeSave?(e: SyntheticEvent<any>): void;
    /**
     * Callback function to be called to save the new row.
     */
    onSave?(save: () => void): void;
}

/**
 * Interface that must be implemented by a custom insert modal body component.
 */
export interface ModalBodyInterface<TRow extends object = any> {
    /**
     * The required getFieldValue method that must be implemented on a customized insert modal body that returns the
     * new row data when the save button is clicked in the modal window.
     */
    getFieldValue(): TRow;
}

/**
 * Properties that can be given to the SizePerPageDropDown component.
 */
export interface SizePerPageDropDownProps {
    /**
     * Custom class name to use for the component.
     */
    className?: string | undefined;
    /**
     * Bootstrap css style class for the button, e.g. 'btn-warning'
     */
    btnContextual?: string | undefined;
    /**
     * Whether the button menu should 'dropup' or 'dropdown'.
     */
    variation?: DropDirection | undefined;
    /**
     * Callback function that should be triggered when the user clicks on the dropdown button.
     */
    onClick?(toggleDropDown: () => void): void;
    /**
     * Current size per page
     */
    currSizePerPage?: string | undefined;
    /**
     * Size Per Page options list
     */
    options?: number[] | Array<{ text: string, value: number }> | undefined;
    /**
     * Flag to indicate that the dropdown is open
     */
    open?: boolean | undefined;
    /**
     * Flag to indicate that the dropdown is currently hidden
     */
    hidden?: boolean | undefined;
}

/**
 * Default InsertButton component. Can be used to create custom toolbars, etc.
 */
export class InsertButton extends Component<ButtonProps> {}

/**
 * Default DeleteButton component. Can be used to create custom toolbars, etc.
 */
export class DeleteButton extends Component<ButtonProps> {}

/**
 * Default ExportCSVButton component. Can be used to create custom toolbars, etc.
 */
export class ExportCSVButton extends Component<ButtonProps> {}

/**
 * Default ShowSelectedOnlyButton component for toggling between showing all rows or only
 * selected rows. Can be used to create custom toolbars, etc.
 */
export class ShowSelectedOnlyButton extends Component<ShowSelectedButtonProps> {}

/**
 * Default SearchField component. Can be used to create custom toolbars, etc.
 */
export class SearchField extends Component<SearchFieldProps> implements SearchFieldInterface {
    getValue(): string;
    setValue(search: string): void;
}

/**
 * Default ClearSearchButton component. Can be used to create custom toolbars, etc.
 */
export class ClearSearchButton extends Component<ButtonProps> {}

/**
 * Default header component used for the Insert modal. Can be used to customize the
 * insert row modal form.
 */
export class InsertModalHeader extends Component<InsertModalHeaderProps> {}

/**
 * Default footer component used for the Insert modal. Can be used to customize the
 * insert row modal form.
 */
export class InsertModalFooter extends Component<InsertModalFooterProps> {}

/**
 * Default size per page component used in the pagination row. Can be used to customize
 * the size per page dropdown.
 */
export class SizePerPageDropDown extends Component<SizePerPageDropDownProps> {}
