// Type definitions for mui-datatables 3.7
// Project: https://github.com/gregnb/mui-datatables
// Definitions by: Jeroen "Favna" Claassens <https://github.com/favna>
//                 Ankith Konda <https://github.com/ankithkonda>
//                 Herman "Von" Waters IV <https://github.com/hwatersiv>
//                 souppower <https://github.com/souppower>
//                 Byron "Byrekt" Mitchell <https://github.com/byrekt>
//                 Bohdan Yavorskyi <https://github.com/BohdanYavorskyi>
//                 Patrick Erichsen <https://github.com/Patrick-Erichsen>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Minimum TypeScript Version: 3.5

import * as React from 'react';
import { ComponentNameToClassKey } from '@material-ui/core/styles/overrides';

export type Display = boolean | 'true' | 'false' | 'excluded';
export type FilterType = 'dropdown' | 'checkbox' | 'multiselect' | 'textField' | 'custom';
export type Responsive = 'vertical' | 'standard' | 'simple';
export type SelectableRows = 'multiple' | 'single' | 'none';
export type ChipVariant = 'outlined' | 'default';
export type ChipColor = 'primary' | 'secondary' | 'default';
export type ToolbarButton = boolean | 'true' | 'false' | 'disabled';
export type DisplayData = Array<{ data: any[]; dataIndex: number }>;

export interface MUISortOptions {
    name: string;
    direction: 'asc' | 'desc';
}

export interface MUIDataTableData {
    data: Array<object | number[] | string[]>;
    index: number;
}

export interface MUIDataTableCurrentData {
    rowIndex: number;
    dataIndex: number;
}

export interface MUIDataTableStateRows {
    data: string[];
    lookup: any;
}

export interface MUIDataTableState {
    activeColumn: string | null;
    announceText: string | null;
    columnOrder: number[];
    columns: MUIDataTableColumnState[];
    count: number;
    data: any[];
    displayData: DisplayData;
    expandedRows: MUIDataTableStateRows;
    filterData: string[][];
    filterList: string[][];
    page: number;
    previousSelectedRow: null | { index: number; dataIndex: number };
    rowsPerPage: number;
    rowsPerPageOptions: number[];
    searchText: string | null;
    searchProps: React.HTMLAttributes<HTMLInputElement> | null;
    selectedRows: MUIDataTableStateRows;
    showResponsive: boolean;
    sortOrder: MUISortOptions;
}

export interface MUIDataTableMeta {
    currentTableData: MUIDataTableCurrentData[];
    columnData: MUIDataTableColumnState;
    columnIndex: number;
    rowData: any[];
    rowIndex: number;
    tableData: MUIDataTableData[];
    tableState: MUIDataTableState;
}

export type MUIDataTableCustomHeadRenderer = Pick<MUIDataTableColumn, 'name' | 'label'> &
    Pick<
        MUIDataTableColumnOptions,
        | 'customHeadRender'
        | 'display'
        | 'filter'
        | 'sort'
        | 'download'
        | 'empty'
        | 'print'
        | 'searchable'
        | 'viewColumns'
    > & {
        index: number;
    };

export interface MUIDataTableTextLabelsBody {
    noMatch: string | React.ReactNode;
    toolTip: string;
    columnHeaderTooltip: (column: MUIDataTableColumn) => string;
}

export interface MUIDataTableTextLabelsPagination {
    displayRows: string;
    next: string;
    previous: string;
    rowsPerPage: string;
    jumpToPage: string;
}

export interface MUIDataTableTextLabelsToolbar {
    downloadCsv: string;
    filterTable: string;
    print: string;
    search: string;
    viewColumns: string;
}

export interface MUIDataTableTextLabelsFilter {
    all: string;
    reset: string;
    title: string;
}

export interface MUIDataTableTextLabelsViewColumns {
    title: string;
    titleAria: string;
}

export interface MUIDataTableTextLabelsSelectedRows {
    delete: string;
    deleteAria: string;
    text: string;
}

export interface MUIDataTableColumn {
    label?: string;
    name: string;
    options?: MUIDataTableColumnOptions;
}

export interface MUIDataTableTextLabels {
    body: Partial<MUIDataTableTextLabelsBody>;
    filter: Partial<MUIDataTableTextLabelsFilter>;
    pagination: Partial<MUIDataTableTextLabelsPagination>;
    selectedRows: Partial<MUIDataTableTextLabelsSelectedRows>;
    toolbar: Partial<MUIDataTableTextLabelsToolbar>;
    viewColumns: Partial<MUIDataTableTextLabelsViewColumns>;
}

export interface MUIDataTableFilterOptions {
    /**
     * Custom names for the filter fields.
     *
     * [Example](https://github.com/gregnb/mui-datatables/blob/master/examples/column-filters/index.js)
     */
    names?: string[];
    /**
     * Custom rendering inside the filter dialog.
     * `filterList` must be of the same type in the main column options, that is an array of arrays, where each array corresponds to the filter list for a given column.
     *
     * [Example](https://github.com/gregnb/mui-datatables/blob/master/examples/customize-filter/index.js)
     */
    display?: (
        filterList: MUIDataTableState['filterList'],
        onChange: (val: string | string[], index: number, column: MUIDataTableColumn) => void,
        index: number,
        column: MUIDataTableColumn,
        filterData: MUIDataTableState['filterData'],
    ) => void;
    /**
     * custom filter logic.
     *
     * [Example](https://github.com/gregnb/mui-datatables/blob/master/examples/customize-filter/index.js)
     */
    logic?: (prop: string, filterValue: any[]) => boolean;
    /**
     * A function to customize filter choices.
     * Use case: changing empty strings to "(empty)" in a dropdown.
     *
     * [Example](https://github.com/gregnb/mui-datatables/blob/master/examples/customize-filter/index.js)
     */
    renderValue?: (value: string) => string;
    /** Will force a filter option to take up the grid's full width. */
    fullWidth?: boolean;
}

export interface MUIDataTableCustomFilterListOptions {
    /**
     * Function that return a string or array of strings use as the chip label(s).
     *
     * [Example](https://github.com/gregnb/mui-datatables/blob/master/examples/customize-filter/index.js)
     */
    render?: (value: any) => React.ReactNode;
    /**
     * Function that returns a filterList allowing for custom filter updates
     * when removing the filter chip. FilterType must be set to 'custom'.
     *
     * [Example](https://github.com/gregnb/mui-datatables/blob/master/examples/customize-filter/index.js)
     */
    update?: (
        filterList: MUIDataTableState['filterList'],
        filterPos: number,
        index: number,
    ) => MUIDataTableState['filterList'];
}

export interface MUIDataTableColumnState extends MUIDataTableColumnOptions {
    name: string;
    label?: string;
}

export interface CustomHeadLabelRenderOptions extends MUIDataTableColumnState {
    index: number;
    colPos: number;
}

export interface MUIDataTableColumnOptions {
    /**
     * Function that returns a string or React component.
     * Used to display data within all table cells of a given column.
     * The value returned from this function will be used for filtering in the filter dialog.
     * If this isn't need, you may want to consider customBodyRenderLite instead.
     *
     * [Example](https://github.com/gregnb/mui-datatables/blob/master/examples/component/index.js)
     */
    customBodyRender?: (
        value: any,
        tableMeta: MUIDataTableMeta,
        updateValue: (value: string) => void,
    ) => string | React.ReactNode;
    /**
     * Similar to and performing better than `customBodyRender`, however with the following caveats:
     * 1. The value returned from this function is not used for filtering, so the filter dialog will use the raw data from the data array.
     * 2. This method only gives you the dataIndex and rowIndex, leaving you to lookup the column value.
     *
     * [Example](https://github.com/gregnb/mui-datatables/blob/master/examples/large-data-set/index.js)
     */
    customBodyRenderLite?: (dataIndex: number, rowIndex: number) => string | React.ReactNode;
    /**
     * Function that returns a string or React component.
     * Used for creating a custom header to a column.
     * This method only affects the display in the table's header, other areas of the table (such as the View Columns popover), will use the column's label.
     */
    customHeadLabelRender?: (options: CustomHeadLabelRenderOptions) => string | React.ReactNode;
    /**
     * These options only affect the filter chips that display after filter are selected.
     * To modify the filters themselves, see filterOptions.
     */
    customFilterListOptions?: MUIDataTableCustomFilterListOptions;
    /** @deprecated use customFilterListOptions.render */
    customFilterListRender?: (value: any) => string;
    /** Function that returns a string or React component. Used as display for column header. */
    customHeadRender?: (
        columnMeta: MUIDataTableCustomHeadRenderer,
        handleToggleColumn: (columnIndex: number) => void,
        sortOrder: MUISortOptions,
    ) => string | React.ReactNode;
    /**
     * Determines if the column can be dragged.
     * The draggableColumns.enabled option must also be true.
     * @default true
     */
    draggable?: boolean;
    /**
     * Display the column.
     * Possible values:
     * - true: Column is visible and toggleable via the View Columns Popover
     * - false: Column is not visible but can be made so in the View Columns Popover
     * - 'excluded': Column is not visible and not toggleable in the View Column Popover
     *
     * @default true
     */
    display?: Display;
    /**
     * Display column in the CSV download file.
     * @default true
     */
    download?: boolean;
    /**
     * This denote whether the column has data or not.
     * For use with intentionally empty columns.
     * @default false
     */
    empty?: boolean;
    /**
     * Display column in filter list
     * @default true
     */
    filter?: boolean;
    /**
     * Filter value list.
     *
     * [Example](https://github.com/gregnb/mui-datatables/blob/master/examples/column-filters/index.js)
     */
    filterList?: string[];
    /**
     * These options affect the filter display and functionality from the filter dialog.
     * To modify the filter chip that display after selecting filters, see customFilterListOptions
     */
    filterOptions?: MUIDataTableFilterOptions;
    /**
     * Choice of filtering view. Takes priority over global filterType option.
     * Use 'custom' is you are supplying your own rendering via filterOptions.
     * @default dropdown
     */
    filterType?: FilterType;
    /** Display hint icon with string as tooltip on hover. */
    hint?: string;
    /**
     * Display column when printing.
     * @default true
     */
    print?: boolean;
    /**
     * Exclude/include column from search results.
     * @default true
     */
    searchable?: boolean;
    /**
     * Is called for each header cell and allows you to return custom props for the header cell based on its data.
     *
     * [Example](https://github.com/gregnb/mui-datatables/blob/master/examples/customize-styling/index.js)
     */
    setCellHeaderProps?: (columnMeta: MUIDataTableCustomHeadRenderer) => object;
    /**
     * Is called for each cell and allows to you return custom props for this cell based on its data.
     *
     * [Example](https://github.com/gregnb/mui-datatables/blob/master/examples/customize-styling/index.js)
     */
    setCellProps?: (cellValue: string, rowIndex: number, columnIndex: number) => object;
    /**
     * Enable/disable sorting on column.
     * @default true
     */
    sort?: boolean;
    /**
     * Custom sort function for the column. Takes in an order string and returns a function that compares the two column values.
     * If this method and options.customSort are both defined, this method will take precedence.
     *
     * [Example](https://github.com/gregnb/mui-datatables/blob/master/examples/column-sort/index.js)
     */
    sortCompare?: (order: MUISortOptions['direction']) => (obj1: { data: any }, obj2: { data: any }) => number;
    /**
     * Causes the first click on a column to sort by desc rather than asc.
     *
     * [Example](https://github.com/gregnb/mui-datatables/blob/master/examples/customize-columns/index.js)
     *
     * @default false
     */
    sortDescFirst?: boolean;
    /**
     * Allows for a third click on a column header to undo any sorting on the column.
     *
     * [Example](https://github.com/gregnb/mui-datatables/blob/master/examples/customize-columns/index.js)
     *
     * @default false
     */
    sortThirdClickReset?: boolean;
    /** @deprecated use `sortOrder` instead */
    sortDirection?: 'asc' | 'desc' | 'none';
    /**
     * Allow user to toggle column visibility through 'View Column' list.
     * @default true
     */
    viewColumns?: boolean;
}

export interface MUIDataTableIsRowCheck {
    lookup: {
        dataIndex: number;
    };
    data: [
        {
            index: number;
            dataIndex: number;
        },
    ];
}

export type MUIDataTableOptions = Partial<{
    /** Enable/disalbe case sensitivity for search */
    caseSensitive: boolean;
    /**
     * Works in conjuction with the customFilterDialogFooter options and make is so filters have to be confirmed before being apllied to the table.
     * When this option is true, the customFilterDialogFooter callback will receive an applyFilters function which, when called will apply the filter to the table.
     *
     * [Example](https://github.com/gregnb/mui-datatables/blob/master/examples/serverside-filters/index.js)
     */
    confirmFilters: boolean;
    /**
     * An array of numbers (column indices) indicating the order the columns should be displayed in.
     * Defaults to the order provided by the Columns prop.
     * This option is useful if you'd like certain columns to swap position.
     * See draggableColumns option
     */
    columnOrder: number[];
    /** User provided override for the total number of row. */
    count: number;
    /** Add a custom footer to the filter dialog. */
    customFilterDialogFooter: (
        filterList: MUIDataTableState['filterList'],
        applyNewFilters?: (...args: any[]) => any,
    ) => React.ReactNode;
    /**
     * Render a custom table footer.
     *
     * [Example](https://github.com/gregnb/mui-datatables/blob/master/examples/customize-footer/index.js)
     */
    customFooter: (
        rowCount: number,
        page: number,
        rowsPerPage: number,
        changeRowsPerPage: (page: string | number) => void,
        changePage: (newPage: number) => void,
        textLabels: Partial<MUIDataTableTextLabels>,
    ) => React.ReactNode;
    /**
     * Override default row rendering with custom function.
     *
     * [Example](https://github.com/gregnb/mui-datatables/blob/master/examples/customize-rows/index.js)
     */
    customRowRender: (data: any[], dataIndex: number, rowIndex: number) => React.ReactNode;
    /**
     * Override default search with custom function.
     *
     * [Example](https://github.com/gregnb/mui-datatables/blob/master/examples/customize-search/index.js)
     */
    customSearch: (searchQuery: string, currentRow: any[], columns: any[]) => boolean;
    /**
     * Render a custom table search.
     *
     * [Example](https://github.com/gregnb/mui-datatables/blob/master/examples/customize-search-render/CustomSearchRender.js)
     */
    customSearchRender: (
        searchText: string,
        handleSearch: (text: string) => void,
        hideSearch: () => void,
        options: any,
    ) => React.Component | JSX.Element;
    /**
     * Override default sorting with custom function.
     * If you just need to override the sorting for a particular column, see the sortCompare method in the Column options.
     *
     * [Example](https://github.com/gregnb/mui-datatables/blob/master/examples/customize-sorting/index.js)
     */
    customSort: (data: any[], colIndex: number, order: string) => any[];
    /**
     * Render a footer under the table body but above the table's standard footer.
     * This is useful for creating footers for individual columns.
     *
     * [Example](https://github.com/gregnb/mui-datatables/blob/master/examples/customize-footer/index.js)
     */
    customTableBodyFooterRender: (options: { data: any[]; selectableRows: SelectableRows; columns: any[] }) => any;
    /**
     * Render a custom Toolbar.
     *
     * [Example](https://github.com/gregnb/mui-datatables/blob/master/examples/customize-toolbar/CustomToolbar.js)
     */
    customToolbar: (data: { displayData: DisplayData }) => React.ReactNode;
    /**
     * Render a custom selected row ToolBar.
     *
     * [Example](https://github.com/gregnb/mui-datatables/blob/master/examples/customize-toolbarselect/CustomToolbarSelect.js)
     */
    customToolbarSelect: (
        selectedRows: { data: Array<{ index: number; dataIndex: number }>; lookup: { [key: number]: boolean } },
        displayData: DisplayData,
        setSelectedRows: (rows: number[]) => void,
    ) => React.ReactNode;
    /** @deprecated use `selectToolbarPlacement` instead */
    disableToolbarSelect: boolean;
    /**
     * Possible Values:
     * - true       = Button visible and clickable
     * - false      = Button not visible
     * - 'disabled' = Button is visible but not clickable
     * @default true
     */
    download: ToolbarButton;
    /**
     * An object of options to change the output of the csv file.
     * @default `{ filename: 'tableDownload.csv', separator: ',' }`
     */
    downloadOptions: Partial<{
        filename: string;
        separator: string;
        filterOptions: Partial<{ useDisplayedColumnsOnly: boolean; useDisplayedRowsOnly: boolean }>;
    }>;
    /**
     * An object of options describing how dragging columns should work.
     * The options are:
     * `enabled: boolean` - Indicates if draggable columns are enabled. Default is `false`
     * `transitionTime: number` - The time in milliseconds it takes for columns to swap positions. Default is `300`.
     *
     * To disable the dragging of a particular column, see the "draggable" option in the columns options.
     * Dragging a column to a new position updates the columnOrder array and triggers the onColumnOrderChange callback.
     */
    draggableColumns: MUIDataTableDraggableColumns;
    /**
     * Shadow depth applied to the `<Paper />` component.
     * @default 4
     */
    elevation: number;
    /**
     * If a non-empty string (ex: `"."`) is provided, it will use that value in the column's names to access nested data.
     *
     * For example, given a value of `"."` for `enableNestedDataAccess` and a column name of `"phone.cell"`, the column would use the value found in phone: `{ cell:"555-5555" }`
     *
     * Any amount of nesting will work.
     *
     * [Example](https://github.com/gregnb/mui-datatables/blob/master/examples/data-as-objects/index.js)
     */
    enableNestedDataAccess: string;
    /**
     * Enable/disable expandable rows.
     *
     * [Example](https://github.com/gregnb/mui-datatables/blob/master/examples/expandable-rows/index.js)
     * @default false
     */
    expandableRows: boolean;
    /**
     * Show/hide the expand all/collapse all row header for expandable row.
     * @default true
     */
    expandableRowsHeader: boolean;
    /**
     * Enable/disable expand trigger when row is clicked.
     * When false, only expand icon will trigger this action.
     * @default false
     */
    expandableRowsOnClick: boolean;
    /**
     * Possible Values:
     * - true       = Button visible and clickable
     * - false      = Button not visible
     * - 'disabled' = Button is visible but not clickable
     * @default true
     */
    filter: ToolbarButton;
    /**
     * For array values, default checks if all the filter values are included in the array.
     * If false, checks if at least one of the filter values is in the array.
     *
     * [Example](https://github.com/gregnb/mui-datatables/blob/bb0cf931decae7e5bec49a6b5f3343408bc4c0b5/examples/array-value-columns/index.js)
     * @default true
     */
    filterArrayFullMatch: boolean;
    /** Choice of filtering view. */
    filterType: FilterType;
    /**
     * Enable/disable a fixed header for the table
     *
     * [Example](https://github.com/gregnb/mui-datatables/blob/master/examples/fixed-header/index.js)
     * @default true
     */
    fixedHeader: boolean;
    /** @deprecated use `fixedHeader` for **X** axis and `fixedSelectColumn` for **Y** axis */
    fixedHeaderOptions: {
        /** @deprecated use `fixedHeader` */
        xAxis: boolean;
        /** @deprecated use `fixedSelectColumn` */
        yAxis: boolean;
    };
    /**
     * Enable/disable fined select column.
     *
     * [Example](https://github.com/gregnb/mui-datatables/blob/master/examples/fixed-header/index.js)
     * @default true
     */
    fixedSelectColumn: boolean;
    /**
     * Enable/disable expansion or collapse on certain expandable rows with custom function.
     * Returns `true` if not provided.
     */
    isRowExpandable: (dataIndex: number, expandedRows?: MUIDataTableIsRowCheck) => boolean;
    /** Enable/disable selection on certain rows with custom function. Returns true if not provided. */
    isRowSelectable: (dataIndex: number, selectedRows?: MUIDataTableIsRowCheck) => boolean;
    /**
     * When true, the option adds a dropdown to the table's footer that allows a user to navigate to a specific page.
     *
     * [Example](https://github.com/gregnb/mui-datatables/blob/master/examples/large-data-set/index.js)
     * @default false
     */
    jumpToPage: boolean;
    /** Callback function that triggers when a cell is clicked. */
    onCellClick: (
        colData: any,
        cellMeta: { colIndex: number; rowIndex: number; dataIndex: number; event: React.MouseEvent },
    ) => void;
    onChangePage: (currentPage: number) => void;
    /** Callback function that triggers when a page has changed. */
    onChangeRowsPerPage: (numberOfRows: number) => void;
    /** Callback function that triggers when a column has been dragged to a new location. */
    onColumnOrderChange: (newColumnOrder: number[], columnIndex: number, newPosition: number) => void;
    /** Callback function that triggers when a column has been sorted. */
    onColumnSortChange: (changedColumn: string, direction: 'asc' | 'desc') => void;
    /** @deprecated use `onViewColumnsChange` instead */
    onColumnViewChange?: (changedColumn: string, action: string) => void;
    /**
     * A callback function that triggers when the user downloads the CSV file.
     * In the callback, you can control what is written to the CSV file.
     * Return false to cancel download of file.
     *
     * [Example](https://github.com/gregnb/mui-datatables/blob/master/examples/on-download/index.js)
     */
    onDownload: (
        buildHead: (columns: any) => string,
        buildBody: (data: any) => string,
        columns: any,
        data: any,
    ) => string | boolean;
    /** Callback function that triggers when filters have changed. */
    onFilterChange: (
        changedColumn: string | MUIDataTableColumn | null,
        filterList: MUIDataTableState['filterList'],
        type: FilterType | 'chip' | 'reset',
        changedColumnIndex: number,
        displayData: DisplayData,
    ) => void;
    /**
     * Callback function that is triggered when a user clicks the "X" on a filter chip.
     *
     * [Example](https://github.com/gregnb/mui-datatables/blob/master/examples/serverside-filters/index.js)
     */
    onFilterChipClose: (index: number, removedFilter: string, filterList: MUIDataTableState['filterList']) => void;
    /**
     * Callback function that is triggered when a user presses the "confirm" button on the filter popover.
     * This occurs only if you've set `confirmFilters` option to `true`.
     *
     * [Example](https://github.com/gregnb/mui-datatables/blob/master/examples/serverside-filters/index.js)
     */
    onFilterConfirm: (filterList: MUIDataTableState['filterList']) => void;
    /** Callback function that triggers when the filter dialog closes. */
    onFilterDialogClose: () => void;
    /** Callback function that triggers when the filter dialog opens. */
    onFilterDialogOpen: () => void;
    /** Callback function that triggers when a row is clicked. */
    onRowClick: (rowData: string[], rowMeta: { dataIndex: number; rowIndex: number }) => void;
    /** Callback function that triggers when row(s) are expanded/collapsed. */
    onRowExpansionChange: (currentRowsExpanded: any[], allRowsExpanded: any[], rowsExpanded?: any[]) => void;
    /**
     * Callback function that triggers when row(s) are deleted.
     * Returning false prevents row deletion.
     */
    onRowsDelete: (
        rowsDeleted: {
            lookup: { [dataIndex: number]: boolean };
            data: Array<{ index: number; dataIndex: number }>;
        },
        newTableData: any[],
    ) => void | false;
    /** Callback function that triggers when row(s) are selected/deselected. */
    onRowSelectionChange: (currentRowsSelected: any[], allRowsSelected: any[], rowsSelected?: any[]) => void;
    /** Callback function that triggers when the search text value has changed. */
    onSearchChange: (searchText: string | null) => void;
    /** Callback function that triggers when the searchbox closes. */
    onSearchClose: () => void;
    /** Callback function that triggers when the searchbox opens.  */
    onSearchOpen: () => void;
    /** Callback function that triggers when table state has changed. */
    onTableChange: (action: string, tableState: MUIDataTableState) => void;
    /** Callback function that triggers when table state has been initialized. */
    onTableInit: (action: string, tableState: MUIDataTableState) => void;
    /** Callback function that triggers when a column view has been changed. Previously known as onColumnViewChange. */
    onViewColumnsChange: (changedColumn: string, action: string) => void;
    /** User provided page for pagination */
    page: number;
    /**
     * Enable/disable pagination.
     * @default true
     */
    pagination: boolean;
    /**
     * Possible Values:
     * - true       = Button visible and clickable
     * - false      = Button not visible
     * - 'disabled' = Button is visible but not clickable
     * @default true
     */
    print: ToolbarButton;
    /**
     * Render Expandable rows.
     *
     * [Example](https://github.com/gregnb/mui-datatables/blob/master/examples/expandable-rows/index.js)
     */
    renderExpandableRow: (rowData: string[], rowMeta: { dataIndex: number; rowIndex: number }) => React.ReactNode;
    /** Enable/disable resizable columns. */
    resizableColumns: boolean;
    /**
     * Enable/diable responsize table view.
     * Options:
     * - 'vertical': In smaller view the table cells will collapse such that the heading is to the left of th cell value.
     * - 'standarg': Table will stay in the standard mode but make small chnages to better fit the allocated space.
     * - 'simple': On very small devices the table rows will collapse into simple display.
     *
     * [Example](https://github.com/gregnb/mui-datatables/blob/master/examples/simple/index.js)
     * @default 'vertical'
     */
    responsive: Responsive;
    /**
     * Enable/disalbe hover style over row.
     * @default true
     */
    rowHover: boolean;
    /** User provided expanded rows */
    rowsExpanded: any[];
    /** Number of ros allowed per page. */
    rowsPerPage: number;
    /** Options to provide in pagination for number of rows a user can select */
    rowsPerPageOptions: number[];
    /** User provided array of number (dataIndexes) which indicated the selected row. */
    rowsSelected: any[];
    /**
     * Possible Values:
     * - true       = Button visible and clickable
     * - false      = Button not visible
     * - 'disabled' = Button is visible but not clickable
     * @default true
     */
    search: ToolbarButton;
    /**
     * Initially displays search bar.
     * @default false
     */
    searchOpen: boolean;
    /**
     * Props applied to the search text box. You can set method callbacks like onBlur, onKeyUp, etc, this way.
     *
     * [Example](https://github.com/gregnb/mui-datatables/blob/master/examples/customize-search/index.js)
     */
    searchProps: React.HTMLAttributes<HTMLInputElement>;
    /**
     * Search text placeholder.
     *
     * [Example](https://github.com/gregnb/mui-datatables/blob/master/examples/customize-search/index.js)
     */
    searchPlaceholder: string;
    /** Search text for the table. */
    searchText: string;
    /**
     * Indicates if rows can be selected.
     * @default multiple
     */
    selectableRows: SelectableRows;
    /**
     * Show/hide the select all/deselect all checkbox header for selectable rows.
     * @default true
     */
    selectableRowsHeader: boolean;
    /**
     * Hides the checkboxes that appear when selectableRows is set to "multiple" or "single".
     * Can provide a more custom UX, especially when paired with selectableRowsOnClick.
     * @default false
     */
    selectableRowsHideCheckboxes: boolean;
    /**
     * Enable/disable select toggle when row is clicked.
     * When False, only checkbox will trigger this action.
     * @default false
     */
    selectableRowsOnClick: boolean;
    /**
     * Controls the visiblity of the Select Toolbar.
     * Options:
     * - 'replace': Select toolbar replaces default toolbar.
     * - 'above': Appears above the defualt toolbar.
     * - 'none': Select Toolbar never appears
     *
     * @default replace
     */
    selectToolbarPlacement: 'replace' | 'above' | 'none';
    /**
     * Enable remote data source
     * @default fale
     */
    serverSide: boolean;
    /**
     * Is called for each filter chip and allows you to place custom props on a filter chip.
     *
     * [Example](https://github.com/gregnb/mui-datatables/blob/master/examples/customize-filter/index.js)
     */
    setFilterChipProps: (colIndex: number, colName: string, data: ReadonlyArray<any[]>) => MUIDataTableChip;
    /**
     * Is called for each row and allows you to return custom props for this row based on its data.
     *
     * [Example](https://github.com/gregnb/mui-datatables/blob/master/examples/customize-styling/index.js)
     */
    setRowProps: (row: any[], dataIndex: number, rowIndex: number) => object;
    /**
     * Is called for the table and allows you to return custom props for the table based on its data.
     *
     * [Example](https://github.com/gregnb/mui-datatables/blob/master/examples/customize-styling/index.js)
     */
    setTableProps: () => object;
    /**
     * Enable/disable sort on all columns.
     * @default true
     */
    sort: boolean;
    /**
     * Enable/disable alphanumeric sorting of filter lists.
     * @default true
     */
    sortFilterList: boolean;
    /**
     * Sets the column to sort by and its sort direction.
     * To remove/reset sorting, input in an empty object.
     * The object options are the column name and the direction.
     *
     * [Example](https://github.com/gregnb/mui-datatables/blob/master/examples/customize-columns/index.js)
     * @shape { name: string, direction: 'asc' | 'desc' }
     */
    sortOrder: MUISortOptions;
    /**
     * A string that is used internally for identifying the table.
     * This property is auto-generated. However, if you need it set to a custom value (ex: server-side rendering), you can set it here.
     * @default auto-generated string
     */
    tableId: string;
    /**
     * CSS string for the height of the table.
     * @example '500px'
     * @example '100%'
     * @example 'auto'
     * @default 'auto'
     */
    tableBodyHeight: string;
    /**
     * CSS string for the height of the table.
     * @example '500px'
     * @example '100%'
     * @example 'auto'
     */
    tableBodyMaxHeight: string;
    /** User provided labels to localize text. */
    textLabels: Partial<MUIDataTableTextLabels>;
    /**
     * Possible Values:
     * - true       = Button visible and clickable
     * - false      = Button not visible
     * - 'disabled' = Button is visible but not clickable
     * @default true
     */
    viewColumns: ToolbarButton;
}>;

export type MUIDataTableColumnDef = string | MUIDataTableColumn;

type RenderCustomComponent<P> = (props: P) => React.ReactNode;

export interface MUIDataTableProps {
    columns: MUIDataTableColumnDef[];
    components?: Partial<{
        ExpandButton: RenderCustomComponent<MUIDataTableExpandButton> | React.ReactNode;
        TableBody: RenderCustomComponent<MUIDataTableBody> | React.ReactNode;
        TableFooter: RenderCustomComponent<MUIDataTableFooter> | React.ReactNode;
        TableHead: RenderCustomComponent<MUIDataTableHead> | React.ReactNode;
        TableResize: RenderCustomComponent<MUIDataTableResize> | React.ReactNode;
        TableToolbar: RenderCustomComponent<MUIDataTableToolbar> | React.ReactNode;
        TableToolbarSelect: RenderCustomComponent<MUIDataTableToolbarSelect> | React.ReactNode;
        TableFilterList: RenderCustomComponent<MUIDataTableFilterList> | React.ReactNode;
        Tooltip: React.ReactNode;
    }>;
    data: Array<object | number[] | string[]>;
    options?: MUIDataTableOptions;
    title: string | React.ReactNode;
    innerRef?: React.RefObject<React.Component<MUIDataTableProps, MUIDataTableState> | null | undefined>;
}

export interface MUIDataTableExpandButton {
    areAllRowsExpanded: () => boolean;
    buttonClass: string;
    dataIndex?: number;
    expandableRowsHeader: boolean;
    expandedRows?: any;
    iconClass: string;
    iconIndeterminateClass: string;
    isHeaderCell: boolean;
    onExpand?: (...args: any) => any;
}

export interface MUIDataTablePopover {
    action?: (...args: any) => any;
    anchorEl?: React.ReactNode;
    anchorOrigin?: any;
    elevation?: number;
    onClose?: (...args: any) => any;
    onExited?: (...args: any) => any;
    option?: boolean;
    ref?: any;
    transformOrigin?: any;
}

export interface MUIDataTableBody {
    classes: object;
    columnOrder?: number[];
    columns: MUIDataTableColumnDef[];
    count: number;
    data: Array<object | number[] | string[]>;
    filterList?: MUIDataTableState['filterList'];
    onRowClick?: (rowData: string[], rowMeta: { dataIndex: number; rowIndex: number }) => void;
    options: MUIDataTableOptions;
    searchText?: string;
    selectRowUpdate?: (...args: any) => any;
    toggleExpandRow?: (...args: any) => any;
    expandedRows?: MUIDataTableStateRows;
    selectedRows?: MUIDataTableStateRows;
    page?: number;
    rowsPerPage?: number;
    previousSelectedRow?: number | null;
    tableId?: string;
}

export interface MUIDataTableChip {
    color?: ChipColor;
    variant?: ChipVariant;
    className?: string;
}

export interface MUIDataTableBodyCell {
    children?: any;
    classes?: object;
    className?: string;
    colIndex?: number;
    columnHeader?: any;
    dataIndex?: number;
    options?: MUIDataTableOptions;
    otherProps?: any;
    rowIndex?: number;
}

export interface MUIDataTableBodyRow {
    classes?: object;
    className?: string;
    onClick?: (...args: any) => any;
    options: MUIDataTableOptions;
    rowSelected?: boolean;
}

export interface MUIDataTableFilter {
    classes?: object;
    filterData: any[];
    filterList?: MUIDataTableState['filterList'];
    onFilterReset?: (...args: any) => any;
    onFilterUpdate?: (...args: any) => any;
    options: MUIDataTableOptions;
}

export interface MUIDataTableFilterList {
    columnNames?: Array<{ name: string; filterType: FilterType }>;
    customFilterListUpdate?: any[];
    classes?: object;
    filterList: MUIDataTableState['filterList'];
    filterListRenderers?: (e: any) => any[];
    filterUpdate?: (...args: any) => any;
    options: MUIDataTableOptions;
    serverSideFilterList?: any;
}

export interface MUIDataTableFooter {
    changePage?: (e: any) => any;
    changeRowsPerPage?: (e: any) => any;
    options?: MUIDataTableOptions;
    page?: number;
    rowCount?: number;
    rowsPerPage?: number;
}

export interface MUIDataTableDraggableColumns {
    enabled: boolean;
    transitionTime?: number;
}

export interface MUIDataTableHead {
    activeColumn?: any;
    areAllRowsExpanded?: () => boolean;
    selectRowUpdate?: (...args: any[]) => any;
    columnOrder: number[];
    classes?: object;
    columns?: MUIDataTableColumnDef[];
    draggableHeadCellRefs?: object;
    count?: number;
    data?: any[];
    options?: MUIDataTableOptions;
    page?: number;
    rowsPerPage?: number;
    selectedRows?: MUIDataTableStateRows;
    expandedRows?: MUIDataTableStateRows;
    setCellRef?: (...args: any[]) => any;
    updateColumnOrder?: (...args: any[]) => any;
    toggleSort?: (...args: any[]) => any;
    tableRef?: () => any;
    toggleAllExpandableRows?: () => any;
    tabledId?: string;
    timers?: object;
}

export interface MUIDataTableHeadCell {
    children?: any;
    classes?: object;
    hint: string;
    options: MUIDataTableOptions;
    sort: boolean;
    sortOrder?: MUISortOptions;
    toggleSort: (...args: any) => any;
}

export interface MUIDataTableHeadRow {
    classes?: object;
}

export interface MUIDataTablePagination {
    changeRowsPerPage: (...args: any) => any;
    count: number;
    options: MUIDataTableOptions;
    page: number;
    rowsPerPage: number;
}

export interface MUIDataTableResize {
    classes?: object;
    options?: MUIDataTableOptions;
    rowSelected?: boolean;
    setResizeable?: (...args: any) => any;
    updateDividers?: (...args: any) => any;
}

export interface MUIDataTableSearch {
    classes?: object;
    onHide?: (...args: any) => any;
    onSearch?: (...args: any) => any;
    options?: MUIDataTableOptions;
    searchText?: string;
}

export interface DebouncedMUIDataTableSearch extends MUIDataTableSearch {
    debounceWait: number;
}

export interface MUIDataTableSelectCell {
    checked: boolean;
    classes?: object;
    expandableOn?: boolean;
    fixedHeader: boolean;
    isHeaderCell?: boolean;
    isRowExpanded?: boolean;
    isRowSelectable?: boolean;
    onChange?: (...args: any) => any;
    onExpand?: (...args: any) => any;
    otherProps?: any;
    selectableOn?: boolean;
}

export interface MUIDataTableToolbar {
    columnOrder?: number[];
    classes?: object;
    columns: MUIDataTableColumnDef[];
    data?: MUIDataTableData[];
    displayData?: DisplayData;
    filterData?: any[][];
    filterList?: MUIDataTableState['filterList'];
    filterUpdate?: (...args: any) => any;
    updateFilterByType?: (...args: any) => any;
    options?: MUIDataTableOptions;
    resetFilters?: () => any;
    searchClose?: () => any;
    searchTextUpdate?: (...args: any) => any;
    setTableActions?: (...args: any) => any;
    tableRef?: (...args: any) => any;
    title?: React.ReactNode;
    toggleViewColumn?: (a: any) => any;
    searchText?: React.ReactNode;
}

export interface MUIDataTableToolbarSelect {
    classes?: object;
    displayData?: DisplayData;
    onRowsDelete?: (...args: any) => any;
    options: MUIDataTableOptions;
    rowSelected?: boolean;
    selectRowUpdate?: (...args: any) => any;
}

export interface MUIDataTableViewCol {
    classes?: object;
    columns: any[];
    object: object;
    onColumnUpdate: (...args: any) => any;
}

export const MUIDataTable: React.ComponentType<MUIDataTableProps>;

export const ExpandButton: React.ComponentType<MUIDataTableExpandButton>;
export const Popover: React.ComponentType<MUIDataTablePopover>;
export const TableBody: React.ComponentType<MUIDataTableBody>;
export const TableBodyCell: React.ComponentType<MUIDataTableBodyCell>;
export const TableBodyRow: React.ComponentType<MUIDataTableBodyRow>;
export const TableFilter: React.ComponentType<MUIDataTableFilter>;
export const TableFilterList: React.ComponentType<MUIDataTableFilterList>;
export const TableFooter: React.ComponentType<MUIDataTableFooter>;
export const TableHead: React.ComponentType<MUIDataTableHead>;
export const TableHeadCell: React.ComponentType<MUIDataTableHeadCell>;
export const TableHeadRow: React.ComponentType<MUIDataTableHeadRow>;
export const TablePagination: React.ComponentType<MUIDataTablePagination>;
export const TableResize: React.ComponentType<MUIDataTableResize>;
export const TableSearch: React.ComponentType<MUIDataTableSearch>;
export const TableSelectCell: React.ComponentType<MUIDataTableSelectCell>;
export const TableToolbar: React.ComponentType<MUIDataTableToolbar>;
export const TableToolbarSelect: React.ComponentType<MUIDataTableToolbarSelect>;
export const TableViewCol: React.ComponentType<MUIDataTableViewCol>;
export const DebounceTableSearch: React.ComponentType<DebouncedMUIDataTableSearch>;

// Plugins
/**
 * Function that returns a function for the customSearchRender method. This plug-in allows you to create a debounced search which can be useful for server-side tables and tables with large data sets.
 *
 * [Example](https://github.com/gregnb/mui-datatables/blob/master/examples/large-data-set/index.js)
 * @param debounceWait The amount of time to wait for each action - defaults to 200
 */
export function debounceSearchRender(debounceWait?: number): MUIDataTableOptions['customSearchRender'];

export default MUIDataTable;

declare module '@material-ui/core/styles/overrides' {
    interface ComponentNameToClassKey {
        MUIDataTable:
            | 'root'
            | 'caption'
            | 'liveAnnounce'
            | 'paper'
            | 'responsiveScroll'
            | 'tableRoot'
            ;

        MUIDataTableBody:
            | 'root'
            | 'emptyTitle'
            | 'lastSimpleCell'
            | 'lastStackedCell'
            ;

        MUIDataTableBodyCell:
            | 'root'
            | 'cellHide'
            | 'cellStackedSmall'
            | 'responsiveStackedSmall'
            | 'responsiveStackedSmallParent'
            | 'simpleCell'
            | 'simpleHeader'
            | 'stackedCommon'
            | 'stackedCommonAlways'
            | 'stackedHeader'
            | 'stackedParent'
            | 'stackedParentAlways'
            ;

        MUIDataTableBodyRow:
            | 'root'
            | 'hoverCursor'
            | 'responsiveSimple'
            | 'responsiveStacked'
            ;

        MUIDataTableFilter:
            | 'root'
            | 'checkbox'
            | 'checkboxFormControl'
            | 'checkboxFormControlLabel'
            | 'checkboxFormGroup'
            | 'checkboxIcon'
            | 'checkboxListTitle'
            | 'checked'
            | 'filtersSelected'
            | 'gridListTile'
            | 'header'
            | 'noMargin'
            | 'reset'
            | 'resetLink'
            | 'title'
            ;

        MUIDataTableFilterList: 'root' | 'chip';

        MUIDataTableFooter: 'root';

        MUIDataTableHead:
            | 'main'
            | 'responsiveSimple'
            | 'responsiveStacked'
            | 'responsiveStackedAlways'
            ;

        MUIDataTableHeadCell:
            | 'root'
            | 'contentWrapper'
            | 'data'
            | 'dragCursor'
            | 'fixedHeader'
            | 'hintIconAlone'
            | 'hintIconWithSortIcon'
            | 'mypopper'
            | 'sortAction'
            | 'sortActive'
            | 'sortLabelRoot'
            | 'toolButton'
            | 'tooltip'
            ;

        MUIDataTableHeadRow: 'root';

        MUIDataTableJumpToPage:
            | 'root'
            | 'caption'
            | 'input'
            | 'select'
            | 'selectIcon'
            | 'selectRoot'
            ;

        MUIDataTablePagination:
            | 'root'
            | '@media screen and (max-width: 400px)'
            | 'navContainer'
            | 'selectRoot'
            | 'tableCellContainer'
            | 'toolbar'
            ;

        MUIDataTableResize: 'root' | 'resizer';

        MUIDataTableSearch:
            | 'clearIcon'
            | 'main'
            | 'searchIcon'
            | 'searchText'
            ;

        MUIDataTableSelectCell:
            | 'root'
            | 'checkboxRoot'
            | 'checked'
            | 'disabled'
            | 'expandDisabled'
            | 'expanded'
            | 'fixedHeader'
            | 'fixedLeft'
            | 'headerCell'
            | 'hide'
            | 'icon'
            ;

        MUIDataTableToolbar:
            | 'root'
            | '@media screen and (max-width: 480px)'
            | "[theme.breakpoints.down('sm')]"
            | "[theme.breakpoints.down('xs')]"
            | 'actions'
            | 'filterCloseIcon'
            | 'filterPaper'
            | 'fullWidthActions'
            | 'fullWidthLeft'
            | 'fullWidthRoot'
            | 'fullWidthTitleText'
            | 'icon'
            | 'iconActive'
            | 'left'
            | 'searchIcon'
            | 'titleRoot'
            | 'titleText'
            ;

        MUIDataTableToolbarSelect:
            | 'root'
            | 'deleteIcon'
            | 'iconButton'
            | 'title'
            ;

        MUIDataTableViewCol:
            | 'root'
            | 'checkbox'
            | 'checkboxRoot'
            | 'checked'
            | 'formControl'
            | 'formGroup'
            | 'label'
            | 'title'
            ;
    }
}
