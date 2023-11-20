import { ComponentsOverrides, ComponentsProps, ComponentsVariants } from "@mui/material";

import * as React from "react";

export type Display = boolean | "true" | "false" | "excluded";
export type FilterType = "dropdown" | "checkbox" | "multiselect" | "textField" | "custom";
export type Responsive = "vertical" | "standard" | "simple";
export type SelectableRows = "multiple" | "single" | "none";
export type ChipVariant = "outlined" | "default";
export type ChipColor = "primary" | "secondary" | "default";
export type ToolbarButton = boolean | "true" | "false" | "disabled";
export type DisplayData = Array<{ data: any[]; dataIndex: number }>;

export interface MUISortOptions {
    name: string;
    direction: "asc" | "desc";
}

export interface MUIDataTableData {
    data: Array<object | number[] | string[]>;
    index: number;
}

export interface MUIDataTableCurrentData<T = any> {
    index: number;
    data: T[];
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

export interface MUIDataTableMeta<T = any> {
    currentTableData: MUIDataTableCurrentData[];
    columnData: MUIDataTableColumnState;
    columnIndex: number;
    rowData: any[];
    rowIndex: number;
    tableData: T[];
    tableState: MUIDataTableState;
}

export type MUIDataTableCustomHeadRenderer =
    & Pick<MUIDataTableColumn, "name" | "label">
    & Pick<
        MUIDataTableColumnOptions,
        | "customHeadRender"
        | "display"
        | "filter"
        | "sort"
        | "download"
        | "empty"
        | "print"
        | "searchable"
        | "viewColumns"
    >
    & {
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
    label?: string | undefined;
    name: string;
    options?: MUIDataTableColumnOptions | undefined;
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
    names?: string[] | undefined;
    /**
     * Custom rendering inside the filter dialog.
     * `filterList` must be of the same type in the main column options, that is an array of arrays, where each array corresponds to the filter list for a given column.
     *
     * [Example](https://github.com/gregnb/mui-datatables/blob/master/examples/customize-filter/index.js)
     */
    display?:
        | ((
            filterList: MUIDataTableState["filterList"],
            onChange: (val: string | string[], index: number, column: MUIDataTableColumn) => void,
            index: number,
            column: MUIDataTableColumn,
            filterData: MUIDataTableState["filterData"],
        ) => void)
        | undefined;
    /**
     * custom filter logic.
     *
     * [Example](https://github.com/gregnb/mui-datatables/blob/master/examples/customize-filter/index.js)
     */
    logic?: ((prop: string, filterValue: any[], row?: any[]) => boolean) | undefined;
    /**
     * A function to customize filter choices.
     * Use case: changing empty strings to "(empty)" in a dropdown.
     *
     * [Example](https://github.com/gregnb/mui-datatables/blob/master/examples/customize-filter/index.js)
     */
    renderValue?: ((value: string) => string) | undefined;
    /** Will force a filter option to take up the grid's full width. */
    fullWidth?: boolean | undefined;
}

export interface MUIDataTableCustomFilterListOptions {
    /**
     * Function that return a string or array of strings use as the chip label(s).
     *
     * [Example](https://github.com/gregnb/mui-datatables/blob/master/examples/customize-filter/index.js)
     */
    render?: ((value: any) => React.ReactNode) | undefined;
    /**
     * Function that returns a filterList allowing for custom filter updates
     * when removing the filter chip. FilterType must be set to 'custom'.
     *
     * [Example](https://github.com/gregnb/mui-datatables/blob/master/examples/customize-filter/index.js)
     */
    update?:
        | ((
            filterList: MUIDataTableState["filterList"],
            filterPos: number,
            index: number,
        ) => MUIDataTableState["filterList"])
        | undefined;
}

export interface MUIDataTableColumnState extends MUIDataTableColumnOptions {
    name: string;
    label?: string | undefined;
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
    customBodyRender?:
        | ((value: any, tableMeta: MUIDataTableMeta, updateValue: (value: string) => void) => string | React.ReactNode)
        | undefined;
    /**
     * Similar to and performing better than `customBodyRender`, however with the following caveats:
     * 1. The value returned from this function is not used for filtering, so the filter dialog will use the raw data from the data array.
     * 2. This method only gives you the dataIndex and rowIndex, leaving you to lookup the column value.
     *
     * [Example](https://github.com/gregnb/mui-datatables/blob/master/examples/large-data-set/index.js)
     */
    customBodyRenderLite?: ((dataIndex: number, rowIndex: number) => string | React.ReactNode) | undefined;
    /**
     * Function that returns a string or React component.
     * Used for creating a custom header to a column.
     * This method only affects the display in the table's header, other areas of the table (such as the View Columns popover), will use the column's label.
     */
    customHeadLabelRender?: ((options: CustomHeadLabelRenderOptions) => string | React.ReactNode) | undefined;
    /**
     * These options only affect the filter chips that display after filter are selected.
     * To modify the filters themselves, see filterOptions.
     */
    customFilterListOptions?: MUIDataTableCustomFilterListOptions | undefined;
    /** @deprecated use customFilterListOptions.render */
    customFilterListRender?: ((value: any) => string) | undefined;
    /** Function that returns a string or React component. Used as display for column header. */
    customHeadRender?:
        | ((
            columnMeta: MUIDataTableCustomHeadRenderer,
            handleToggleColumn: (columnIndex: number) => void,
            sortOrder: MUISortOptions,
        ) => string | React.ReactNode)
        | undefined;
    /**
     * Determines if the column can be dragged.
     * The draggableColumns.enabled option must also be true.
     * @default true
     */
    draggable?: boolean | undefined;
    /**
     * Display the column.
     * Possible values:
     * - true: Column is visible and toggleable via the View Columns Popover
     * - false: Column is not visible but can be made so in the View Columns Popover
     * - 'excluded': Column is not visible and not toggleable in the View Column Popover
     *
     * @default true
     */
    display?: Display | undefined;
    /**
     * Display column in the CSV download file.
     * @default true
     */
    download?: boolean | undefined;
    /**
     * This denote whether the column has data or not.
     * For use with intentionally empty columns.
     * @default false
     */
    empty?: boolean | undefined;
    /**
     * Display column in filter list
     * @default true
     */
    filter?: boolean | undefined;
    /**
     * Filter value list.
     *
     * [Example](https://github.com/gregnb/mui-datatables/blob/master/examples/column-filters/index.js)
     */
    filterList?: string[] | undefined;
    /**
     * These options affect the filter display and functionality from the filter dialog.
     * To modify the filter chip that display after selecting filters, see customFilterListOptions
     */
    filterOptions?: MUIDataTableFilterOptions | undefined;
    /**
     * Choice of filtering view. Takes priority over global filterType option.
     * Use 'custom' is you are supplying your own rendering via filterOptions.
     * @default dropdown
     */
    filterType?: FilterType | undefined;
    /** Display hint icon with string as tooltip on hover. */
    hint?: string | undefined;
    /**
     * Display column when printing.
     * @default true
     */
    print?: boolean | undefined;
    /**
     * Exclude/include column from search results.
     * @default true
     */
    searchable?: boolean | undefined;
    /**
     * Is called for each header cell and allows you to return custom props for the header cell based on its data.
     *
     * [Example](https://github.com/gregnb/mui-datatables/blob/master/examples/customize-styling/index.js)
     */
    setCellHeaderProps?: ((columnMeta: MUIDataTableCustomHeadRenderer) => object) | undefined;
    /**
     * Is called for each cell and allows to you return custom props for this cell based on its data.
     *
     * [Example](https://github.com/gregnb/mui-datatables/blob/master/examples/customize-styling/index.js)
     */
    setCellProps?: ((cellValue: string, rowIndex: number, columnIndex: number) => object) | undefined;
    /**
     * Enable/disable sorting on column.
     * @default true
     */
    sort?: boolean | undefined;
    /**
     * Custom sort function for the column. Takes in an order string and returns a function that compares the two column values.
     * If this method and options.customSort are both defined, this method will take precedence.
     *
     * [Example](https://github.com/gregnb/mui-datatables/blob/master/examples/column-sort/index.js)
     */
    sortCompare?:
        | ((order: MUISortOptions["direction"]) => (obj1: { data: any }, obj2: { data: any }) => number)
        | undefined;
    /**
     * Causes the first click on a column to sort by desc rather than asc.
     *
     * [Example](https://github.com/gregnb/mui-datatables/blob/master/examples/customize-columns/index.js)
     *
     * @default false
     */
    sortDescFirst?: boolean | undefined;
    /**
     * Allows for a third click on a column header to undo any sorting on the column.
     *
     * [Example](https://github.com/gregnb/mui-datatables/blob/master/examples/customize-columns/index.js)
     *
     * @default false
     */
    sortThirdClickReset?: boolean | undefined;
    /** @deprecated use `sortOrder` instead */
    sortDirection?: "asc" | "desc" | "none" | undefined;
    /**
     * Allow user to toggle column visibility through 'View Column' list.
     * @default true
     */
    viewColumns?: boolean | undefined;
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
        filterList: MUIDataTableState["filterList"],
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
    onColumnSortChange: (changedColumn: string, direction: "asc" | "desc") => void;
    /** @deprecated use `onViewColumnsChange` instead */
    onColumnViewChange?: ((changedColumn: string, action: string) => void) | undefined;
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
        filterList: MUIDataTableState["filterList"],
        type: FilterType | "chip" | "reset",
        changedColumnIndex: number,
        displayData: DisplayData,
    ) => void;
    /**
     * Callback function that is triggered when a user clicks the "X" on a filter chip.
     *
     * [Example](https://github.com/gregnb/mui-datatables/blob/master/examples/serverside-filters/index.js)
     */
    onFilterChipClose: (index: number, removedFilter: string, filterList: MUIDataTableState["filterList"]) => void;
    /**
     * Callback function that is triggered when a user presses the "confirm" button on the filter popover.
     * This occurs only if you've set `confirmFilters` option to `true`.
     *
     * [Example](https://github.com/gregnb/mui-datatables/blob/master/examples/serverside-filters/index.js)
     */
    onFilterConfirm: (filterList: MUIDataTableState["filterList"]) => void;
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
     * Always displays search bar, and hides search icon in toolbar.
     * @default false
     */
    searchAlwaysOpen: boolean;
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
    selectToolbarPlacement: "replace" | "above" | "none";
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
    /**
     * Local storage key used to store the table state.
     */
    storageKey: string;
}>;

export type MUIDataTableColumnDef = string | MUIDataTableColumn;

type RenderCustomComponent<P> = (props: P) => React.ReactNode;

export interface MUIDataTableCheckboxProps {
    checked: boolean;
    classes: {
        checked: string;
        disabled: string;
        root: string;
    };
    color: "primary" | "secondary";
    "data-description": "row-select" | "row-select-header" | "table-filter" | "table-view-col";
    "data-index": number | null;
    disabled: boolean;
    indeterminante: boolean;
    onChange: (event: React.ChangeEvent<HTMLInputElement>, checked: boolean) => void;
}

export interface MUIDataTableProps {
    columns: MUIDataTableColumnDef[];
    components?:
        | Partial<{
            Checkbox: RenderCustomComponent<MUIDataTableCheckboxProps> | React.ReactNode;
            ExpandButton: RenderCustomComponent<MUIDataTableExpandButton> | React.ReactNode;
            TableBody: RenderCustomComponent<MUIDataTableBody> | React.ReactNode;
            TableViewCol: RenderCustomComponent<MUIDataTableViewCol> | React.ReactNode;
            TableFilterList: RenderCustomComponent<MUIDataTableFilterList> | React.ReactNode;
            TableFooter: RenderCustomComponent<MUIDataTableFooter> | React.ReactNode;
            TableHead: RenderCustomComponent<MUIDataTableHead> | React.ReactNode;
            TableResize: RenderCustomComponent<MUIDataTableResize> | React.ReactNode;
            TableToolbar: RenderCustomComponent<MUIDataTableToolbar> | React.ReactNode;
            TableToolbarSelect: RenderCustomComponent<MUIDataTableToolbarSelect> | React.ReactNode;
            Tooltip: React.ReactNode;
            icons: Partial<{
                SearchIcon: React.ReactNode;
                DownloadIcon: React.ReactNode;
                PrintIcon: React.ReactNode;
                ViewColumnIcon: React.ReactNode;
                FilterIcon: React.ReactNode;
            }>;
        }>
        | undefined;
    data: Array<object | number[] | string[]>;
    options?: MUIDataTableOptions | undefined;
    title: string | React.ReactNode;
    innerRef?: React.RefObject<React.Component<MUIDataTableProps, MUIDataTableState> | null | undefined> | undefined;
}

export interface MUIDataTableExpandButton {
    areAllRowsExpanded: () => boolean;
    buttonClass: string;
    dataIndex?: number | undefined;
    expandableRowsHeader: boolean;
    expandedRows?: any;
    iconClass: string;
    iconIndeterminateClass: string;
    isHeaderCell: boolean;
    onExpand?: ((...args: any) => any) | undefined;
}

export interface MUIDataTablePopover {
    action?: ((...args: any) => any) | undefined;
    anchorEl?: React.ReactNode | undefined;
    anchorOrigin?: any;
    classes?: object;
    content?: React.ReactNode;
    elevation?: number | undefined;
    onClose?: ((...args: any) => any) | undefined;
    onExited?: ((...args: any) => any) | undefined;
    option?: boolean | undefined;
    ref?: any;
    refExit?: (...args: any) => any;
    transformOrigin?: any;
    trigger?: React.ReactNode;
}

export interface MUIDataTableBody {
    classes: object;
    columnOrder?: number[] | undefined;
    columns: MUIDataTableColumnDef[];
    count: number;
    data: Array<object | number[] | string[]>;
    filterList?: MUIDataTableState["filterList"] | undefined;
    onRowClick?: ((rowData: string[], rowMeta: { dataIndex: number; rowIndex: number }) => void) | undefined;
    options: MUIDataTableOptions;
    searchText?: string | undefined;
    selectRowUpdate?: ((...args: any) => any) | undefined;
    toggleExpandRow?: ((...args: any) => any) | undefined;
    expandedRows?: MUIDataTableStateRows | undefined;
    selectedRows?: MUIDataTableStateRows | undefined;
    page?: number | undefined;
    rowsPerPage?: number | undefined;
    previousSelectedRow?: number | null | undefined;
    tableId?: string | undefined;
}

export interface MUIDataTableChip {
    color?: ChipColor | undefined;
    variant?: ChipVariant | undefined;
    className?: string | undefined;
}

export interface MUIDataTableBodyCell {
    children?: any;
    classes?: object | undefined;
    className?: string | undefined;
    colIndex?: number | undefined;
    columnHeader?: any;
    dataIndex?: number | undefined;
    options?: MUIDataTableOptions | undefined;
    otherProps?: any;
    rowIndex?: number | undefined;
}

export interface MUIDataTableBodyRow {
    classes?: object | undefined;
    className?: string | undefined;
    onClick?: ((...args: any) => any) | undefined;
    options: MUIDataTableOptions;
    rowSelected?: boolean | undefined;
}

export interface MUIDataTableFilter {
    classes?: object | undefined;
    filterData: any[];
    filterList?: MUIDataTableState["filterList"] | undefined;
    onFilterReset?: ((...args: any) => any) | undefined;
    onFilterUpdate?: ((...args: any) => any) | undefined;
    options: MUIDataTableOptions;
}

export interface MUIDataTableFilterList {
    columnNames?: Array<{ name: string; filterType: FilterType }> | undefined;
    customFilterListUpdate?: any[] | undefined;
    classes?: object | undefined;
    filterList: MUIDataTableState["filterList"];
    filterListRenderers?: ((e: any) => any[]) | undefined;
    filterUpdate?: ((...args: any) => any) | undefined;
    options: MUIDataTableOptions;
    serverSideFilterList?: any;
}

export interface MUIDataTableFooter {
    changePage?: ((e: any) => any) | undefined;
    changeRowsPerPage?: ((e: any) => any) | undefined;
    options?: MUIDataTableOptions | undefined;
    page?: number | undefined;
    rowCount?: number | undefined;
    rowsPerPage?: number | undefined;
}

export interface MUIDataTableDraggableColumns {
    enabled: boolean;
    transitionTime?: number | undefined;
}

export interface MUIDataTableHead {
    activeColumn?: any;
    areAllRowsExpanded?: (() => boolean) | undefined;
    selectRowUpdate?: ((...args: any[]) => any) | undefined;
    columnOrder: number[];
    classes?: object | undefined;
    columns?: MUIDataTableColumnDef[] | undefined;
    draggableHeadCellRefs?: object | undefined;
    count?: number | undefined;
    data?: any[] | undefined;
    options?: MUIDataTableOptions | undefined;
    page?: number | undefined;
    rowsPerPage?: number | undefined;
    selectedRows?: MUIDataTableStateRows | undefined;
    expandedRows?: MUIDataTableStateRows | undefined;
    setCellRef?: ((...args: any[]) => any) | undefined;
    updateColumnOrder?: ((...args: any[]) => any) | undefined;
    toggleSort?: ((...args: any[]) => any) | undefined;
    tableRef?: (() => any) | undefined;
    toggleAllExpandableRows?: (() => any) | undefined;
    tabledId?: string | undefined;
    timers?: object | undefined;
}

export interface MUIDataTableHeadCell {
    children?: any;
    classes?: object | undefined;
    hint: string;
    options: MUIDataTableOptions;
    sort: boolean;
    sortOrder?: MUISortOptions | undefined;
    toggleSort: (...args: any) => any;
}

export interface MUIDataTableHeadRow {
    classes?: object | undefined;
}
export interface MUIDataTableJumpToPage {
    count: number;
    page: number;
    rowsPerPage: number;
    textLabels: Partial<MUIDataTableTextLabels>;
}

export interface MUIDataTablePagination {
    changeRowsPerPage: (...args: any) => any;
    changePage: (...args: any) => any;
    count: number;
    options: MUIDataTableOptions;
    page: number;
    rowsPerPage: number;
}

export interface MUIDataTableResize {
    classes?: object | undefined;
    options?: MUIDataTableOptions | undefined;
    rowSelected?: boolean | undefined;
    setResizeable?: ((...args: any) => any) | undefined;
    updateDividers?: ((...args: any) => any) | undefined;
}

export interface MUIDataTableSearch {
    classes?: object | undefined;
    onHide?: ((...args: any) => any) | undefined;
    onSearch?: ((...args: any) => any) | undefined;
    options?: MUIDataTableOptions | undefined;
    searchText?: string | undefined;
}

export interface DebouncedMUIDataTableSearch extends MUIDataTableSearch {
    debounceWait: number;
}

export interface MUIDataTableSelectCell {
    checked: boolean;
    classes?: object | undefined;
    expandableOn?: boolean | undefined;
    fixedHeader: boolean;
    isHeaderCell?: boolean | undefined;
    isRowExpanded?: boolean | undefined;
    isRowSelectable?: boolean | undefined;
    onChange?: ((...args: any) => any) | undefined;
    onExpand?: ((...args: any) => any) | undefined;
    otherProps?: any;
    selectableOn?: boolean | undefined;
}

export interface MUIDataTableToolbar {
    columnOrder?: number[] | undefined;
    classes?: object | undefined;
    columns: MUIDataTableColumnDef[];
    data?: MUIDataTableData[] | undefined;
    displayData?: DisplayData | undefined;
    filterData?: any[][] | undefined;
    filterList?: MUIDataTableState["filterList"] | undefined;
    filterUpdate?: ((...args: any) => any) | undefined;
    updateFilterByType?: ((...args: any) => any) | undefined;
    options?: MUIDataTableOptions | undefined;
    resetFilters?: (() => any) | undefined;
    searchClose?: (() => any) | undefined;
    searchTextUpdate?: ((...args: any) => any) | undefined;
    setTableActions?: ((...args: any) => any) | undefined;
    tableRef?: ((...args: any) => any) | undefined;
    title?: React.ReactNode | undefined;
    toggleViewColumn?: ((a: any) => any) | undefined;
    searchText?: React.ReactNode | undefined;
}

export interface MUIDataTableToolbarSelect {
    classes?: object | undefined;
    displayData?: DisplayData | undefined;
    onRowsDelete?: ((...args: any) => any) | undefined;
    options: MUIDataTableOptions;
    rowSelected?: boolean | undefined;
    selectRowUpdate?: ((...args: any) => any) | undefined;
}

export interface MUIDataTableViewCol {
    classes?: object | undefined;
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
export function debounceSearchRender(debounceWait?: number): MUIDataTableOptions["customSearchRender"];

export default MUIDataTable;

declare module "@mui/material/styles/components" {
    interface Components {
        MUIDataTable?: {
            defaultProps?: ComponentsProps["MUIDataTable"];
            styleOverrides?: ComponentsOverrides["MUIDataTable"];
            variants?: ComponentsVariants["MUIDataTable"];
        };
        MUIDataTableBody?: {
            defaultProps?: ComponentsProps["MUIDataTableBody"];
            styleOverrides?: ComponentsOverrides["MUIDataTableBody"];
            variants?: ComponentsVariants["MUIDataTableBody"];
        };
        MUIDataTableBodyCell?: {
            defaultProps?: ComponentsProps["MUIDataTableBodyCell"];
            styleOverrides?: ComponentsOverrides["MUIDataTableBodyCell"];
            variants?: ComponentsVariants["MUIDataTableBodyCell"];
        };
        MUIDataTableBodyRow?: {
            defaultProps?: ComponentsProps["MUIDataTableBodyRow"];
            styleOverrides?: ComponentsOverrides["MUIDataTableBodyRow"];
            variants?: ComponentsVariants["MUIDataTableBodyRow"];
        };
        MUIDataTableFilter?: {
            defaultProps?: ComponentsProps["MUIDataTableFilter"];
            styleOverrides?: ComponentsOverrides["MUIDataTableFilter"];
            variants?: ComponentsVariants["MUIDataTableFilter"];
        };
        MUIDataTableFilterList?: {
            defaultProps?: ComponentsProps["MUIDataTableFilterList"];
            styleOverrides?: ComponentsOverrides["MUIDataTableFilterList"];
            variants?: ComponentsVariants["MUIDataTableFilterList"];
        };
        MUIDataTableFooter?: {
            defaultProps?: ComponentsProps["MUIDataTableFooter"];
            styleOverrides?: ComponentsOverrides["MUIDataTableFooter"];
            variants?: ComponentsVariants["MUIDataTableFooter"];
        };
        MUIDataTableHead?: {
            defaultProps?: ComponentsProps["MUIDataTableHead"];
            styleOverrides?: ComponentsOverrides["MUIDataTableHead"];
            variants?: ComponentsVariants["MUIDataTableHead"];
        };
        MUIDataTableHeadCell?: {
            defaultProps?: ComponentsProps["MUIDataTableHeadCell"];
            styleOverrides?: ComponentsOverrides["MUIDataTableHeadCell"];
            variants?: ComponentsVariants["MUIDataTableHeadCell"];
        };
        MUIDataTableHeadRow?: {
            defaultProps?: ComponentsProps["MUIDataTableHeadRow"];
            styleOverrides?: ComponentsOverrides["MUIDataTableHeadRow"];
            variants?: ComponentsVariants["MUIDataTableHeadRow"];
        };
        MUIDataTableJumpToPage?: {
            defaultProps?: ComponentsProps["MUIDataTableJumpToPage"];
            styleOverrides?: ComponentsOverrides["MUIDataTableJumpToPage"];
            variants?: ComponentsVariants["MUIDataTableJumpToPage"];
        };
        MUIDataTablePagination?: {
            defaultProps?: ComponentsProps["MUIDataTablePagination"];
            styleOverrides?: ComponentsOverrides["MUIDataTablePagination"];
            variants?: ComponentsVariants["MUIDataTablePagination"];
        };
        MUIDataTableResize?: {
            defaultProps?: ComponentsProps["MUIDataTableResize"];
            styleOverrides?: ComponentsOverrides["MUIDataTableResize"];
            variants?: ComponentsVariants["MUIDataTableResize"];
        };
        MUIDataTableSearch?: {
            defaultProps?: ComponentsProps["MUIDataTableSearch"];
            styleOverrides?: ComponentsOverrides["MUIDataTableSearch"];
            variants?: ComponentsVariants["MUIDataTableSearch"];
        };
        MUIDataTableSelectCell?: {
            defaultProps?: ComponentsProps["MUIDataTableSelectCell"];
            styleOverrides?: ComponentsOverrides["MUIDataTableSelectCell"];
            variants?: ComponentsVariants["MUIDataTableSelectCell"];
        };
        MUIDataTableToolbar?: {
            defaultProps?: ComponentsProps["MUIDataTableToolbar"];
            styleOverrides?: ComponentsOverrides["MUIDataTableToolbar"];
            variants?: ComponentsVariants["MUIDataTableToolbar"];
        };
        MUIDataTableToolbarSelect?: {
            defaultProps?: ComponentsProps["MUIDataTableToolbarSelect"];
            styleOverrides?: ComponentsOverrides["MUIDataTableToolbarSelect"];
            variants?: ComponentsVariants["MUIDataTableToolbarSelect"];
        };
        MUIDataTableViewCol?: {
            defaultProps?: ComponentsProps["MUIDataTableViewCol"];
            styleOverrides?: ComponentsOverrides["MUIDataTableViewCol"];
            variants?: ComponentsVariants["MUIDataTableViewCol"];
        };
    }
}

declare module "@mui/material/styles/props" {
    interface ComponentsPropsList {
        MUIDataTable: MUIDataTableProps;
        MUIDataTableBody: MUIDataTableBody;
        MUIDataTableBodyCell: MUIDataTableBodyCell;
        MUIDataTableBodyRow: MUIDataTableBodyRow;
        MUIDataTableFilter: MUIDataTableFilter;
        MUIDataTableFilterList: MUIDataTableFilterList;
        MUIDataTableFooter: MUIDataTableFooter;
        MUIDataTableHead: MUIDataTableHead;
        MUIDataTableHeadCell: MUIDataTableHeadCell;
        MUIDataTableHeadRow: MUIDataTableHeadRow;
        MUIDataTableJumpToPage: MUIDataTableJumpToPage;
        MUIDataTablePagination: MUIDataTablePagination;
        MUIDataTableResize: MUIDataTableResize;
        MUIDataTableSearch: MUIDataTableSearch;
        MUIDataTableSelectCell: MUIDataTableSelectCell;
        MUIDataTableToolbar: MUIDataTableToolbar;
        MUIDataTableToolbarSelect: MUIDataTableToolbarSelect;
        MUIDataTableViewCol: MUIDataTableViewCol;
    }
}

declare module "@mui/material/styles/overrides" {
    interface ComponentNameToClassKey {
        MUIDataTable: "root" | "caption" | "liveAnnounce" | "paper" | "responsiveScroll" | "tableRoot";

        MUIDataTableBody: "root" | "emptyTitle" | "lastSimpleCell" | "lastStackedCell";

        MUIDataTableBodyCell:
            | "root"
            | "cellHide"
            | "cellStackedSmall"
            | "responsiveStackedSmall"
            | "responsiveStackedSmallParent"
            | "simpleCell"
            | "simpleHeader"
            | "stackedCommon"
            | "stackedCommonAlways"
            | "stackedHeader"
            | "stackedParent"
            | "stackedParentAlways";

        MUIDataTableBodyRow: "root" | "hoverCursor" | "responsiveSimple" | "responsiveStacked";

        MUIDataTableFilter:
            | "root"
            | "checkbox"
            | "checkboxFormControl"
            | "checkboxFormControlLabel"
            | "checkboxFormGroup"
            | "checkboxIcon"
            | "checkboxListTitle"
            | "checked"
            | "filtersSelected"
            | "gridListTile"
            | "header"
            | "noMargin"
            | "reset"
            | "resetLink"
            | "title";

        MUIDataTableFilterList: "root" | "chip";

        MUIDataTableFooter: "root";

        MUIDataTableHead: "main" | "responsiveSimple" | "responsiveStacked" | "responsiveStackedAlways";

        MUIDataTableHeadCell:
            | "root"
            | "contentWrapper"
            | "data"
            | "dragCursor"
            | "fixedHeader"
            | "hintIconAlone"
            | "hintIconWithSortIcon"
            | "mypopper"
            | "sortAction"
            | "sortActive"
            | "sortLabelRoot"
            | "toolButton"
            | "tooltip";

        MUIDataTableHeadRow: "root";

        MUIDataTableJumpToPage: "root" | "caption" | "input" | "select" | "selectIcon" | "selectRoot";

        MUIDataTablePagination:
            | "root"
            | "@media screen and (max-width: 400px)"
            | "navContainer"
            | "selectRoot"
            | "tableCellContainer"
            | "toolbar";

        MUIDataTableResize: "root" | "resizer";

        MUIDataTableSearch: "clearIcon" | "main" | "searchIcon" | "searchText";

        MUIDataTableSelectCell:
            | "root"
            | "checkboxRoot"
            | "checked"
            | "disabled"
            | "expandDisabled"
            | "expanded"
            | "fixedHeader"
            | "fixedLeft"
            | "headerCell"
            | "hide"
            | "icon";

        MUIDataTableToolbar:
            | "root"
            | "@media screen and (max-width: 480px)"
            | "[theme.breakpoints.down('sm')]"
            | "[theme.breakpoints.down('xs')]"
            | "actions"
            | "filterCloseIcon"
            | "filterPaper"
            | "fullWidthActions"
            | "fullWidthLeft"
            | "fullWidthRoot"
            | "fullWidthTitleText"
            | "icon"
            | "iconActive"
            | "left"
            | "searchIcon"
            | "titleRoot"
            | "titleText";

        MUIDataTableToolbarSelect: "root" | "deleteIcon" | "iconButton" | "title";

        MUIDataTableViewCol:
            | "root"
            | "checkbox"
            | "checkboxRoot"
            | "checked"
            | "formControl"
            | "formGroup"
            | "label"
            | "title";
    }
}
