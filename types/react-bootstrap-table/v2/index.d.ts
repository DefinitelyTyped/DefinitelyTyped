/// <reference types="node" />

// documentation taken from http://allenfang.github.io/react-bootstrap-table/docs.html

import { EventEmitter } from "events";
import { ComponentClass, ReactElement } from "react";

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
    children?: React.ReactNode;
    ref?: React.LegacyRef<BootstrapTable> | undefined;

    /**
     * Set version='4' to use bootstrap@4, else bootstrap@3 is used.
     */
    version?: string | undefined;
    /**
     * Use data to specify the data that you want to display on table.
     */
    data: any[];
    /**
     * If set, data is remote (use also fetchInfo)
     */
    remote?: ((remobeObj: RemoteObjSpec) => RemoteObjSpec) | boolean | undefined; // Updated to support ^3.0.0
    /**
     * Use keyField to tell table which column is unique. This is same as isKey in <TableHeaderColumn>
     * Tips: You need choose one configuration to set key field: keyField or isKey in <TableHeaderColumn>
     */
    keyField?: string | undefined;
    /**
     * Use height to set the height of table, default is 100%.
     */
    height?: string | undefined;
    /**
     * Set the max column width (pixels)
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
     *         function trClassFormat(rowData,rowIndex){
     *             return rowIndex%2==0?"tr-odd":"tr-even";  //return a class name.
     *         }
     */
    trClassName?: string | ((rowData: any, rowIndex: number) => string) | undefined;
    /**
     * Enable row insertion by setting insertRow to true, default is false.
     * If you enable row insertion, there's a  button on the upper left side of table.
     */
    insertRow?: boolean | undefined;
    /**
     * Enable row deletion by setting deleteRow to true, default is false.
     * If you enable row deletion, there's a  button on the upper left side of table.
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
     * Enable strict search, default is false.
     * More info here: https://github.com/AllenFang/react-bootstrap-table/issues/1199
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
     * If you enable, there's a  button on the upper left side of table.
     */
    exportCSV?: boolean | undefined;
    /**
     * Set CSV filename (e.g. items.csv). Default is spreadsheet.csv
     */
    csvFileName?: (() => string | string) | undefined;
    /**
     * Enable row selection on table. selectRow accept an object which have the following properties
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
    fetchInfo?: FetchInfo | undefined;
    printable?: boolean | undefined;
    tableStyle?: any;
    containerStyle?: any;
    headerStyle?: any;
    bodyStyle?: any;
    ignoreSinglePage?: boolean | undefined;
    containerClass?: string | undefined;
    tableContainerClass?: string | undefined;
    headerContainerClass?: string | undefined;
    bodyContainerClass?: string | undefined;
    expandableRow?: ((row: any) => boolean) | undefined;
    expandComponent?: ((row: any) => any) | undefined;
}

export type SelectRowMode = "none" | "radio" | "checkbox";

export interface SelectRow {
    /**
     * For specifing the selection is single(radio) or multiple(checkbox).
     */
    mode: SelectRowMode;
    /**
     * Click the row will trigger selection on that row if enable clickToSelect, default is false.
     */
    clickToSelect?: boolean | undefined;
    /**
     * If true, click the row will trigger selection on that row and also trigger cell editing if you enabled cell edit. Default is false.
     */
    clickToSelectAndEditCell?: boolean | undefined;
    /**
     * You can assign the background color of row which be selected.
     */
    bgColor?: string | undefined;
    /**
     * You can assign the class name of row which be selected.
     */
    className?: string | undefined;
    /**
     * Give an array data to perform which rows you want to be selected when table loading.
     * The content of array should be the rowkey which you want to be selected.
     */
    selected?: string[] | number[] | undefined;
    /**
     * if true, the radio/checkbox column will be hide.
     * You can enable this attribute if you enable clickToSelect and you don't want to show the selection column.
     */
    hideSelectColumn?: boolean | undefined;
    /**
     * Default is false, if enabled, there will be a button on top of table for toggling selected rows only.
     */
    showOnlySelected?: boolean | undefined;
    /**
     * Accept a custom callback function, if a row be selected or unselected, this function will be called.
     * This callback function taking three arguments row, isSelected and event:
     *     `row`: is the row data which you wanted to select or unselect.
     *     `isSelected`: it's a boolean value means "whether or not that row will be selected?".
     *     `event`: The event target object.
     * If return value of this (function) is false, the select or deselect action will not be applied.
     */
    onSelect?: ((row: any, isSelected: boolean, event: any) => boolean) | undefined;
    /**
     * Accept a custom callback function, if click select all checkbox, this function will be called.
     * This callback function taking two arguments isSelected and currentSelectedAndDisplayData:
     *     `isSelected`: it's a boolean value means "whether or not that row will be selected?".
     *     `currentSelectedAndDisplayData`: If pagination enabled, this result is the data which in a page. In contrast, this is all data in table.
     * If return value of this function is false, the select all or deselect all action will not be applied.
     */
    onSelectAll?: ((isSelected: boolean, currentSelectedAndDisplayData: any) => boolean) | undefined;

    /**
     * Provide a list of unselectable row keys.
     */
    unselectable?: number[] | undefined;
}

export type CellEditClickMode = "none" | "click" | "dbclick";

export interface CellEdit {
    /**
     * To spectify which condition will trigger cell editing.(click or dbclick)
     */
    mode: CellEditClickMode;
    /**
     * Enable blurToSave will trigger a saving event on cell when mouse blur on the input field. Default is false.
     * In the default condition, you need to press ENTER to save the cell.
     */
    blurToSave?: boolean | undefined;
    /**
     * Accept a custom callback function, before cell saving, this function will be called.
     * This callback function taking three arguments:row, cellName and cellValue
     * It's necessary to return a bool value which whether apply this cell editing.
     */
    beforeSaveCell?: ((row: any, cellName: string, cellValue: any) => boolean) | undefined;
    /**
     * Accept a custom callback function, after cell saving, this function will be called.
     * This callback function taking three arguments:row, cellName and cellValue
     */
    afterSaveCell?: ((row: any, cellName: string, cellValue: any) => void) | undefined;
}

export type SortOrder = "asc" | "desc";

export interface Options {
    /**
     * Manage sort field by yourself
     */
    sortName?: string | undefined;
    /**
     * Manage sort order by yourself
     */
    sortOrder?: SortOrder | undefined;
    /**
     * Assign a default sort field.
     */
    defaultSortName?: string | undefined;
    /**
     * Assign a default sort ordering.
     */
    defaultSortOrder?: SortOrder | undefined;
    /**
     * False to disable sort indicator on header column, default is true.
     */
    sortIndicator?: boolean | undefined;
    /**
     * Change the displaying text on table if data is empty.
     */
    noDataText?: string | ReactElement | undefined;
    /**
     * A delay for trigger search after a keyup (millisecond)
     */
    searchDelayTime?: number | undefined;
    /**
     * A custom text on export csv button
     */
    exportCSVText?: string | undefined;
    /**
     * Default is false, if true means you want to ignore any editable configuration when row insert.
     */
    ignoreEditable?: boolean | undefined;
    /**
     * Only work on enable search. If true, there will be a button beside search input field for clear search field text.
     */
    clearSearch?: boolean | undefined;
    /**
     * Assign a callback function which will be called after table update.
     */
    afterTableComplete?: Function | undefined;
    /**
     * Assign a callback function which will be called after row delete.
     * This function taking one argument: rowKeys, which means the row key you dropped.
     */
    afterDeleteRow?: ((rowKeys: string[]) => void) | undefined;
    /**
     * Assign a callback function which will be called after row insert.
     * This function taking one argument: row, which means the whole row data you added.
     */
    afterInsertRow?: ((row: any) => void) | undefined;
    /**
     * Customize the text of previouse page button
     */
    prePage?: string | undefined;
    /**
     * Customize the text of next page button
     */
    nextPage?: string | undefined;
    /**
     * Customize the text of first page button
     */
    firstPage?: string | undefined;
    /**
     * Customize the text of last page button
     */
    lastPage?: string | undefined;
    /**
     * Accept a number, which means the page you want to show as default.
     */
    page?: number | undefined;
    /**
     * You can change the dropdown list for size per page if you enable pagination.
     */
    sizePerPageList?: number[] | undefined;
    /**
     * Means the size per page you want to locate as default.
     */
    sizePerPage?: number | undefined;
    /**
     * To define the pagination bar length, default is 5.
     */
    paginationSize?: number | undefined;
    /**
     * To define where to start counting the pages.
     */
    pageStartIndex?: number | undefined;
    /**
     * Assign a callback function which will be called after page changed.
     * This function taking two argument: page and sizePerPage.
     * `page`: Current page.
     * `sizePerPage`: The data size which in one page.
     */
    onPageChange?: ((page: number, sizePerPage: number) => void) | undefined;
    /**
     * Assign a callback function which will be called after size per page dropdown changed.
     * This function taking one argument: sizePerPage.
     * `sizePerPage`: The data size which in one page.
     */
    onSizePerPageList?: ((sizePerPage: number) => void) | undefined;
    /**
     * Assign a callback function which will be called after trigger sorting.
     * This function taking two argument: `sortName` and `sortOrde`r.
     *     `sortName`: The sort column name
     *     `sortOrder`: The sort ordering.
     */
    onSortChange?: ((sortName: string, sortOrder: SortOrder) => void) | undefined;
    /**
     * Assign a callback function which will be called after trigger searching.
     * This function taking two argument: search and result.
     * `search`: The search text which user input.
     * `result`: The results after searching.
     */
    afterSearch?: ((search: string, result: any) => void) | undefined;
    /**
     * Assign a callback function which will be called after trigger column filtering.
     * This function taking two argument: filterConds and result.
     * `filterConds`: It's an array object which contain all column filter conditions.
     * `result`: The results after filtering.
     */
    afterColumnFilter?: ((filterConds: any[], result: any) => void) | undefined;
    /**
     * Assign a callback function which will be called after a row click.
     * This function taking one argument: row which is the row data which you click on.
     */
    onRowClick?: ((row: any) => void) | undefined;
    /**
     * Assign a callback function which will be called after a row double click.
     * This function taking one argument: row which is the row data which you double click on.
     */
    onRowDoubleClick?: ((row: any) => void) | undefined;
    /**
     * Background color on expanded rows.
     */
    expandRowBgColor?: string | undefined;
    /**
     * Assign a callback function which will be called when mouse enter into the table.
     */
    onMouseEnter?: Function | undefined;
    /**
     * Assign a callback function which will be called when mouse leave from the table.
     */
    onMouseLeave?: Function | undefined;
    /**
     * Assign a callback function which will be called when mouse over a row in table.
     * This function taking one argument: row which is the row data which mouse over.
     */
    onRowMouseOver?: Function | undefined;
    /**
     * Assign a callback function which will be called when mouse leave from a row in table.
     * This function taking one argument: row which is the row data which mouse out.
     */
    onRowMouseOut?: Function | undefined;

    /**
     * Assign a callback function which will be called when row dropping.
     * It give you a chance to customize your confirmation for row deletion.
     * This function taking two argument: next and rowKeys:
     * `next`: If you confirm to drop row, call next() to continue the process
     * `rowKeys` is the row keys which been deleted, you can call next function to apply this deletion.
     */
    handleConfirmDeleteRow?: ((next: Function, rowKeys: any[]) => void) | undefined;
    paginationShowsTotal?: boolean | ((start: number, to: number, total: number) => string | ReactElement) | undefined;
    onSearchChange?: Function | undefined;
    onAddRow?: Function | undefined;
    onExportToCSV?: Function | undefined;

    insertText?: string | undefined;
    deleteText?: string | undefined;
    saveText?: string | undefined;
    closeText?: string | undefined;
    // Customization properties
    /**
     * Callback function to be called when a cell is modified
     *
     * https://allenfang.github.io/react-bootstrap-table/example.html#remote
     */
    onCellEdit?: ((row: any, field: string, value: any) => any) | undefined;
    /**
     * Callback function to be called when filter changing
     *
     * https://github.com/AllenFang/react-bootstrap-table/blob/master/examples/js/remote/remote-store-filtering.js#L67
     */
    onFilterChange?: ((filterObj: any) => any) | undefined;
    /**
     * Callback function which will be called when a row will be deleted
     *
     * https://github.com/AllenFang/react-bootstrap-table/blob/master/examples/js/remote/remote-store-delete-row.js#L27
     */
    onDeleteRow?: ((rows: any) => any) | undefined;
    /**
     * A callback which will be called after page changed
     *
     * https://github.com/AllenFang/react-bootstrap-table/blob/master/examples/js/remote/remote-store-paging.js#L30
     */
    onpageChange?: ((page: any, sizePerPage: number) => any) | undefined;
}

interface FetchInfo {
    dataTotalSize?: number | undefined;
}

export interface BootstrapTable extends ComponentClass<BootstrapTableProps> {
    /**
     * Call this function to insert an new row to table.
     */
    handleAddRow(row: any): void;
    /**
     * Call this function to insert an new row as first row on table.
     */
    handleAddRowAtBegin(row: any): void;
    /**
     * Call this function to drop rows in table.
     */
    handleDropRow(rowKeys: any[]): void;
    /**
     * Call this function to do column filtering on table.
     */
    handleFilterData(filter: any): void;
    /**
     * Call this function with search text for fully searching.
     */
    handleSearch(search: string): void;
    /**
     * Call this function to sort table.
     */
    handleSort(order: SortOrder, field: string): void;
    /**
     * Call this function to get the page by a rowkey
     */
    getPageByRowKey(rowKey: string): any;
    /**
     * Call this function to export table as csv.
     */
    handleExportCSV(): void;
    /**
     * Clean all the selection state on table.
     */
    cleanSelected(): void;
}
interface BootstrapTable extends ComponentClass<BootstrapTableProps> {}
declare const BootstrapTable: BootstrapTable;
export type DataAlignType = "left" | "center" | "right" | "start" | "end";

export interface TableHeaderColumnProps {
    children?: React.ReactNode;
    ref?: React.LegacyRef<TableHeaderColumn> | undefined;
    /**
     * The field of data you want to show on column.
     */
    dataField?: string | undefined;
    /**
     * Use isKey to tell table which column is unique. This is same as keyField in <BootstrapTable>
     * Tips: You need choose one configuration to set key field: isKey or keyField in <BootstrapTable>
     */
    isKey?: boolean | undefined;
    /**
     * Set the column width. ex: 150, it's means 150px
     */
    width?: string | undefined;
    /**
     * Set align in column, value is left, center, right, start and end.
     */
    dataAlign?: DataAlignType | undefined;

    /**
     * Alignment of text in the column header.
     */
    headerAlign?: DataAlignType | undefined;
    /**
     * True to enable table sorting. Default is disabled.
     */
    dataSort?: boolean | undefined;
    /**
     * Default search string.
     */
    defaultSearch?: string | undefined;
    /**
     * Allow user to render a custom sort caret. You should give a function and should return a JSX.
     * This function taking one arguments: order which present the sort order currently.
     */
    caretRender?: Function | undefined;
    /**
     * Give an Object like following to able to customize your own editing component.
     * This Object should contain these two property:
     *         getElement(REQUIRED): Accept a callback function and take two arguments: onUpdate and props.
     *         customEditorParameters: Another extra data for custom cell edit component.
     */
    customEditor?: {
        getElement: (onUpdate: any, props: any) => ReactElement;
        customEditorParameters?: object | undefined;
    } | undefined;
    /**
     * To customize the column. This callback function should return a String or a React Component.
     * In addition, this function taking two argument: cell and row.
     */
    dataFormat?: ((cell: any, row: any, formatExtraData?: any) => string | ReactElement) | undefined;
    /**
     * To to enable search or filter data on formatting. Default is false
     */
    filterFormatted?: boolean | undefined;
    /**
     * True to hide column.
     */
    hidden?: boolean | undefined;
    /**
     * True to hide from insert dialog
     */
    hiddenOnInsert?: boolean | undefined;
    /**
     * True to hide the dropdown for sizePerPage.
     */
    hideSizePerPage?: boolean | undefined;
    /**
     * False to disable search functionality on column, default is true.
     */
    searchable?: boolean | undefined;
    /**
     * Give a customize function for data sorting.
     * This function taking four arguments: a, b, order, sortField, extraData
     */
    sortFunc?: ((a: any, b: any, order: SortOrder, sortField: any, extraData: any) => number) | undefined;
    /**
     * It's a extra data for custom sort function, if defined, this data will be pass as fifth argument in sortFunc.
     */
    sortFuncExtraData?: any;
    /**
     * Add custom css class on table header column, this attribute only accept String or Function.
     * If Function, it taking four arguments: cell, row, rowIndex, columnIndex.
     * In addition, this function should return a String which is the class name you want to add on.
     */
    className?: string | ((cell: any, row: any, rowIndex: number, columnIndex: number) => string) | undefined;
    /**
     * Add custom css class on table body column, this attribute only accept String or Function.
     * If Function, it taking four arguments: cell, row, rowIndex, columnIndex.
     * In addition, this function should return a String which is the class name you want to add on.
     */
    columnClassName?: String | ((cell: any, row: any, rowIndex: number, columnIndex: number) => string) | undefined;
    /**
     * Add True to set column editable, false is non-editable. If give Object,
     * you can do more customization when editing cell. This object have following properties:
     * @example
     * {
     *     type: //edit type, avaiable value is textarea, select, checkbox
     *     validator: //give function for validation and taking only one "cell value" as argument. This function should return Bool.
     *     options:{
     *         values: //values means data in select or checkbox.If checkbox, use ':'(colon) to separate value, ex: Y:N
     *     }
     * }
     */
    editable?: boolean | Editable | undefined;
    /**
     * It only work when you enable insertRow and be assign on rowKey column.
     * If true, the row key will be generated automatically after a row insertion.
     */
    autoValue?: boolean | undefined;
    /**
     * To Enable a column filter within header column.
     * This feature support a lots of filter type and condition. Please check example
     * Following is the format for filter
     */
    filter?: Filter | undefined;

    onSort?: Function | undefined;

    /**
     * Header for column in generated CSV file
     */
    csvHeader?: string | undefined;
    csvFormat?: Function | undefined;
    columnTitle?: boolean | undefined;
    sort?: SortOrder | undefined;
    formatExtraData?: any;

    /**
     * Row in the header on which this header column present.
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
     * Return the value you want to be filtered on that column.
     * It's useful if your column data is an object.
     */
    filterValue?: Function | undefined;

    /**
     * Allow you to add your custom attributes on TD element.
     */
    tdAttr?: object | undefined;

    /**
     * Allow you to add your custom style object on TD element.
     */
    tdStyle?: object | undefined;

    /**
     * Allow you to add your custom style object on TH element.
     */
    thStyle?: object | undefined;
}
export interface Editable {
    type?: string | undefined; // edit type, avaiable value is textarea, select, checkbox
    /**
     * Function for validation and taking only one "cell value" as argument. This function should return Bool.
     */
    validator?: ((cell: any) => boolean) | undefined;
    /**
     * @example
     * {
     *      values: //values means data in select or checkbox. If checkbox, use ':'(colon) to separate value, ex: Y:N
     * }
     */
    options?: any;

    /**
     * Configuration for the textarea editable type
     */
    cols?: number | undefined;
    rows?: number | undefined;
}
export type SetFilterCallback = (targetValue: any) => boolean;
export interface ApplyFilterParameter {
    callback: SetFilterCallback;
}

export type FilterType = "TextFilter" | "RegexFilter" | "SelectFilter" | "NumberFilter" | "DateFilter" | "CustomFilter";
export interface Filter {
    /**
     * "TextFilter"||"SelectFilter"||"NumberFilter"||"DateFilter"||"RegexFilter"||"YOUR_CUSTOM_FILTER"
     */
    type?: FilterType | undefined;
    /**
     * Default value on filter. If type is NumberFilter or DateFilter, this value will like { number||date: xxx, comparator: '>' }
     */
    defaultValue?: any;
    /**
     * Assign a millisecond for delay when trigger filtering, default is 500.
     */
    delay?: number | undefined;
    /**
     * Only work on TextFilter. Assign the placeholder text on text and regex filter
     */
    placeholder?: string | RegExp | undefined;
    /**
     * Only work on NumberFilter. Accept an array which conatin the filter condition, like: ['<','>','=']
     */
    numberComparators?: string[] | undefined;

    /**
     * Options for the filter.
     */
    options?: any;

    /**
     * Comparison condition for the NumberFilter
     */
    condition?: string | undefined;

    /**
     * Get element which represent filter.
     */
    getElement?:
        | ((filterHandler: (parameters?: ApplyFilterParameter) => void, filterParameters: any) => JSX.Element)
        | undefined;

    /**
     * Parameters for custom filter
     */
    customFilterParameters?: any;
}

export interface TableHeaderColumn extends ComponentClass<TableHeaderColumnProps> {}
declare const TableHeaderColumn: TableHeaderColumn;

declare class TableDataSet extends EventEmitter {
    constructor(data: any);
    setData(data: any): void;
    clear(): void;
    getData(): any;
}
