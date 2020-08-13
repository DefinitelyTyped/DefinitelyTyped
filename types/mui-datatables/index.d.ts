// Type definitions for mui-datatables 3.1
// Project: https://github.com/gregnb/mui-datatables
// Definitions by: Jeroen "Favna" Claassens <https://github.com/favna>
//                 Ankith Konda <https://github.com/ankithkonda>
//                 Herman "Von" Waters IV <https://github.com/hwatersiv>
//                 souppower <https://github.com/souppower>
//                 Byron "Byrekt" Mitchell <https://github.com/byrekt>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.3

import * as React from 'react';

export type Display = 'true' | 'false' | 'excluded';
export type FilterType = 'dropdown' | 'checkbox' | 'multiselect' | 'textField' | 'custom';
export type Responsive = 'vertical' | 'standard' | 'simple';
export type SelectableRows = 'multiple' | 'single' | 'none';

export interface MUISortOptions {
    name: string;
    direction: 'asc' | 'desc';
}

export interface MUIDataTableData {
    data: Array<object | number[] | string[]>;
    index: number;
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
    displayData: Array<{ dataIndex: number; data: any[] }>;
    expandedRows: MUIDataTableStateRows;
    filterData: any[];
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
    columnData: MUIDataTableColumnState;
    columnIndex: number;
    rowData: any[];
    rowIndex: number;
    tableData: MUIDataTableData[];
    tableState: MUIDataTableState;
}

export interface MUIDataTableCustomHeadRenderer extends MUIDataTableColumn {
    index: number;
}

export interface MUIDataTableTextLabelsBody {
    noMatch: string;
    toolTip: string;
    columnHeaderTooltip: (column: MUIDataTableColumn) => string;
}

export interface MUIDataTableTextLabelsPagination {
    displayRows: string;
    next: string;
    previous: string;
    rowsPerPage: string;
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
     * {@link https://github.com/gregnb/mui-datatables/blob/master/examples/column-filters/index.js Example}
     */
    names?: string[];
    /**
     * Custom rendering inside the filter dialog.
     * `filterList` must be of the same type in the main column options, that is an array of arrays, where each array corresponds to the filter list for a given column.
     * {@link https://github.com/gregnb/mui-datatables/blob/master/examples/customize-filter/index.js Example}
     */
    display?: (filterList: string[], onChange: any, index: number, column: any) => void;
    /**
     * custom filter logic.
     * {@link https://github.com/gregnb/mui-datatables/blob/master/examples/customize-filter/index.js Example}
     */
    logic?: (prop: string, filterValue: any[]) => boolean;
    /**
     * A function to customize filter choices.
     * Use case: changing empty strings to "(empty)" in a dropdown.
     * {@link https://github.com/gregnb/mui-datatables/blob/master/examples/customize-filter/index.js Example}
     *
     */
    renderValue?: (value: string) => string;
    /** Will force a filter option to take up the grid's full width. */
    fullWidth?: boolean;
}

export interface MUIDataTableCustomFilterListOptions {
    render?: (value: any) => React.ReactNode;
    update?: (...args: any[]) => string[];
}

export interface MUIDataTableColumnState extends MUIDataTableColumnOptions {
    name: string;
    label?: string;
}

export interface MUIDataTableColumnOptions {
    customBodyRender?: (
        value: any,
        tableMeta: MUIDataTableMeta,
        updateValue: (value: string) => void,
    ) => string | React.ReactNode;
    /**
     * Similar to and performing better than `customBodyRender`, however with the following caveats:
     * 1. The value returned from this function is not used for filtering, so the filter dialog will use the raw data from the data array.
     * 2. This method only gives you the dataIndex and rowIndex, leaving you to lookup the column value.
     */
    customBodyRenderLite?: (dataIndex: number, rowIndex: number) => string | React.ReactNode;
    customFilterListOptions?: MUIDataTableCustomFilterListOptions;
    customFilterListRender?: (value: any) => string;
    customHeadRender?: (
        columnMeta: MUIDataTableCustomHeadRenderer,
        updateDirection: (params: any) => any,
    ) => string | React.ReactNode;
    display?: 'true' | 'false' | 'excluded';
    download?: boolean;
    empty?: boolean;
    filter?: boolean;
    filterList?: string[];
    filterOptions?: MUIDataTableFilterOptions;
    filterType?: FilterType;
    hint?: string;
    print?: boolean;
    searchable?: boolean;
    setCellHeaderProps?: (columnMeta: MUIDataTableCustomHeadRenderer) => object;
    setCellProps?: (cellValue: string, rowIndex: number, columnIndex: number) => object;
    sort?: boolean;
    /** @deprecated use `sortOrder` instead */
    sortDirection?: 'asc' | 'desc' | 'none';
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
        }
    ];
}

export type MUIDataTableOptions = Partial<{
    caseSensitive: boolean;
    confirmFilters: boolean;
    count: number;
    customFilterDialogFooter: (filterList: any[], applyNewFilters?: (...args: any[]) => any) => React.ReactNode;
    customFooter: (
        rowCount: number,
        page: number,
        rowsPerPage: number,
        changeRowsPerPage: (page: string | number) => void,
        changePage: (newPage: number) => void,
    ) => React.ReactNode;
    customRowRender: (data: any[], dataIndex: number, rowIndex: number) => React.ReactNode;
    customSearch: (searchQuery: string, currentRow: any[], columns: any[]) => boolean;
    customSearchRender: (
        searchText: string,
        handleSearch: any,
        hideSearch: any,
        options: any,
    ) => React.Component | JSX.Element;
    customSort: (data: any[], colIndex: number, order: string) => any[];
    customTableBodyFooterRender: (options: { data: any[]; selectableRows: SelectableRows; columns: any[] }) => any;
    customToolbar: () => React.ReactNode;
    customToolbarSelect: (
        selectedRows: { data: Array<{ index: number; dataIndex: number }>; lookup: { [key: number]: boolean } },
        displayData: Array<{ data: any[]; dataIndex: number }>,
        setSelectedRows: (rows: number[]) => void,
    ) => React.ReactNode;
    /** @deprecated use `selectToolbarPlacement` instead */
    disableToolbarSelect: boolean;
    download: boolean;
    downloadOptions: Partial<{
        filename: string;
        separator: string;
        filterOptions: Partial<{ useDisplayedColumnsOnly: boolean; useDisplayedRowsOnly: boolean }>;
    }>;
    elevation: number;
    enableNestedDataAccess: string;
    expandableRows: boolean;
    expandableRowsHeader: boolean;
    expandableRowsOnClick: boolean;
    filter: boolean;
    filterType: FilterType;
    fixedHeader: boolean;
    /** @deprecated use `fixedHeader` for **X** axis and `fixedSelectColumn` for **Y** axis */
    fixedHeaderOptions: {
        /** @deprecated use `fixedHeader` */
        xAxis: boolean;
        /** @deprecated use `fixedSelectColumn` */
        yAxis: boolean;
    };
    fixedSelectColumn: boolean;
    isRowExpandable: (dataIndex: number, expandedRows?: MUIDataTableIsRowCheck) => boolean;
    isRowSelectable: (dataIndex: number, selectedRows?: MUIDataTableIsRowCheck) => boolean;
    onCellClick: (
        colData: any,
        cellMeta: { colIndex: number; rowIndex: number; dataIndex: number; event: React.MouseEvent },
    ) => void;
    onChangePage: (currentPage: number) => void;
    onChangeRowsPerPage: (numberOfRows: number) => void;
    onColumnSortChange: (changedColumn: string, direction: 'asc' | 'desc') => void;
    /** @deprecated use `onViewColumnsChange` instead */
    onColumnViewChange?: (changedColumn: string, action: string) => void;
    /**
     * A callback function that triggers when the user downloads the CSV file.
     * In the callback, you can control what is written to the CSV file.
     * Return false to cancel download of file.
     */
    onDownload: (
        buildHead: (columns: any) => string,
        buildBody: (data: any) => string,
        columns: any,
        data: any,
    ) => string | boolean;
    onFilterChange: (changedColumn: string, filterList: any[], type: FilterType | 'chip' | 'reset') => void;
    /**
     * Callback function that is triggered when a user clicks the "X" on a filter chip.
     * {@link https://github.com/gregnb/mui-datatables/blob/master/examples/serverside-filters/index.js Example}
     */
    onFilterChipClose: (index: number, removedFilter: string, filterList: any[]) => void;
    /**
     * Callback function that is triggered when a user presses the "confirm" button on the filter popover.
     * This occurs only if you've set `confirmFilters` option to `true`.
     * {@link https://github.com/gregnb/mui-datatables/blob/master/examples/serverside-filters/index.js Example}
     */
    onFilterConfirm: (filterList: any[]) => void;
    onFilterDialogClose: () => void;
    onFilterDialogOpen: () => void;
    onRowClick: (rowData: string[], rowMeta: { dataIndex: number; rowIndex: number }) => void;
    onRowExpansionChange: (currentRowsExpanded: any[], allRowsExpanded: any[], rowsExpanded?: any[]) => void;
    onRowsDelete: (rowsDeleted: {
        lookup: { [dataIndex: number]: boolean };
        data: Array<{ index: number; dataIndex: number }>;
    }) => void;
    onRowSelectionChange: (currentRowsSelected: any[], allRowsSelected: any[], rowsSelected?: any[]) => void;
    onSearchChange: (searchText: string) => void;
    onSearchClose: () => void;
    onSearchOpen: () => void;
    onTableChange: (action: string, tableState: MUIDataTableState) => void;
    onTableInit: (action: string, tableState: MUIDataTableState) => void;
    onViewColumnsChange: (changedColumn: string, action: string) => void;
    page: number;
    pagination: boolean;
    print: boolean;
    renderExpandableRow: (rowData: string[], rowMeta: { dataIndex: number; rowIndex: number }) => React.ReactNode;
    resizableColumns: boolean;
    responsive: Responsive;
    rowHover: boolean;
    rowsExpanded: any[];
    rowsPerPage: number;
    rowsPerPageOptions: number[];
    rowsSelected: any[];
    search: boolean;
    searchOpen: boolean;
    searchProps: React.HTMLAttributes<HTMLInputElement>;
    searchPlaceholder: string;
    searchText: string;
    selectableRows: SelectableRows;
    selectableRowsHeader: boolean;
    selectableRowsHideCheckboxes: boolean;
    selectableRowsOnClick: boolean;
    selectToolbarPlacement: 'replace' | 'above' | 'none';
    serverSide: boolean;
    setRowProps: (row: any[], rowIndex: number) => object;
    setTableProps: () => object;
    sort: boolean;
    sortFilterList: boolean;
    sortOrder: MUISortOptions;
    tableBodyHeight: string;
    tableBodyMaxHeight: string;
    textLabels: Partial<MUIDataTableTextLabels>;
    viewColumns: boolean;
}>;

export type MUIDataTableColumnDef = string | MUIDataTableColumn;

export interface MUIDataTableProps {
    columns: MUIDataTableColumnDef[];
    components?: Partial<{
        TableBody: React.ReactNode;
        TableFooter: React.ReactNode;
        TableHead: React.ReactNode;
        TableResize: React.ReactNode;
        TableToolbar: React.ReactNode;
        TableToolbarSelect: React.ReactNode;
        TableFilterList: React.ReactNode;
        Tooltip: React.ReactNode;
    }>;
    data: Array<object | number[] | string[]>;
    options?: MUIDataTableOptions;
    title: string | React.ReactNode;
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
    columns: MUIDataTableColumnDef[];
    count: number;
    data: Array<object | number[] | string[]>;
    filterList?: string[][];
    onRowClick?: (rowData: string[], rowMeta: { dataIndex: number; rowIndex: number }) => void;
    options: object;
    searchText?: string;
    selectedRows?: object;
    selectRowUpdate?: (...args: any) => any;
    toggleExpandRow?: (...args: any) => any;
}

export interface MUIDataTableBodyCell {
    children?: any;
    classes?: object;
    className?: string;
    colIndex?: number;
    columnHeader?: any;
    dataIndex?: number;
    options?: object;
    otherProps?: any;
    rowIndex?: number;
}

export interface MUIDataTableBodyRow {
    classes?: object;
    className?: string;
    onClick?: (...args: any) => any;
    options: object;
    rowSelected?: boolean;
}

export interface MUIDataTableFilter {
    classes?: object;
    filterData: any[];
    filterList?: string[][];
    onFilterRest?: (...args: any) => any;
    onFilterUpdate?: (...args: any) => any;
    options: object;
}

export interface MUIDataTableFilterList {
    classes?: object;
    filterList: string[][];
    onFilterUpdate?: (...args: any) => any;
}

export interface MUIDataTableFooter {
    changePage?: any;
    changeRowsPerPage?: (...args: any) => any;
    options?: object;
    page?: number;
    rowCount?: number;
    rowsPerPage?: number;
}

export interface MUIDataTableHead {
    classes?: object;
    columns?: MUIDataTableColumnDef[];
    count?: number;
    data?: any[];
    options?: object;
    page?: any;
    selectedRows?: any;
    setCellRef?: any;
}

export interface MUIDataTableHeadCell {
    children?: any;
    classes?: object;
    hint: string;
    options: object;
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
    options: object;
    page: number;
    rowsPerPage: number;
}

export interface MUIDataTableResize {
    classes?: object;
    options?: object;
    rowSelected?: boolean;
    setResizeable?: (...args: any) => any;
    updateDividers?: (...args: any) => any;
}

export interface MUIDataTableSearch {
    classes?: object;
    onHide?: (...args: any) => any;
    onSearch?: (...args: any) => any;
    options?: object;
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
    classes?: object;
    columns: MUIDataTableColumnDef[];
    data?: any[];
    filterData?: any;
    filterList?: string[][];
    filterUpdate?: any;
    options?: object;
    resetFilters?: any;
    searchTextUpdate?: (...args: any) => any;
    setTableActions?: (...args: any) => any;
    tableRef?: (...args: any) => any;
    title?: any;
    toggleViewColumn?: any;
}

export interface MUIDataTableToolbarSelect {
    classes?: object;
    displayData?: any;
    onRowsDelete?: (...args: any) => any;
    options: object;
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

export const Popover: React.Component<MUIDataTablePopover>;
export const TableBody: React.Component<MUIDataTableBody>;
export const TableBodyCell: React.Component<MUIDataTableBodyCell>;
export const TableBodyRow: React.Component<MUIDataTableBodyRow>;
export const TableFilter: React.Component<MUIDataTableFilter>;
export const TableFilterList: React.Component<MUIDataTableFilterList>;
export const TableFooter: React.Component<MUIDataTableFooter>;
export const TableHead: React.Component<MUIDataTableHead>;
export const TableHeadCell: React.Component<MUIDataTableHeadCell>;
export const TableHeadRow: React.Component<MUIDataTableHeadRow>;
export const TablePagination: React.Component<MUIDataTablePagination>;
export const TableResize: React.Component<MUIDataTableResize>;
export const TableSearch: React.Component<MUIDataTableSearch>;
export const TableSelectCell: React.Component<MUIDataTableSelectCell>;
export const TableToolbar: React.Component<MUIDataTableToolbar>;
export const TableToolbarSelect: React.Component<MUIDataTableToolbarSelect>;
export const TableViewCol: React.Component<MUIDataTableViewCol>;
export const DebounceTableSearch: React.Component<DebouncedMUIDataTableSearch>;

// Plugins
/**
 * Function that returns a function for the customSearchRender method. This plug-in allows you to create a debounced search which can be useful for server-side tables and tables with large data sets.
 * {@link https://github.com/gregnb/mui-datatables/blob/master/examples/large-data-set/index.js Example}
 * @param debounceWait The amount of time to wait for each action - defaults to 200
 */
export function debounceSearchRender(debounceWait?: number): MUIDataTableOptions['customSearchRender'];

export default MUIDataTable;
