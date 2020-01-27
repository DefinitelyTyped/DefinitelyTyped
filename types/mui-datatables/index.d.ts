// Type definitions for mui-datatables 2.13
// Project: https://github.com/gregnb/mui-datatables
// Definitions by: Jeroen "Favna" Claassens <https://github.com/favna>
//                 Ankith Konda <https://github.com/ankithkonda>
//                 Herman "Von" Waters IV <https://github.com/hwatersiv>
//                 souppower <https://github.com/souppower>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.1

import * as React from 'react';

export type Display = 'true' | 'false' | 'excluded';
export type SortDirection = 'asc' | 'desc';
export type FilterType = 'dropdown' | 'checkbox' | 'multiselect' | 'textField' | 'custom';
export type Responsive = 'stacked' | 'scrollMaxHeight' | 'scrollFullHeight';
export type SelectableRows = 'multiple' | 'single' | 'none';

interface MUIDataTableData {
    data: Array<object | number[] | string[]>;
    index: number;
}

interface MUIDataTableStateRows {
    data: string[];
    lookup: any;
}

export interface MUIDataTableState {
    activeColumn: string | null;
    announceText: string | null;
    columns: MUIDataTableColumnState[];
    count: number;
    data: any[];
    displayData: Array<{dataIndex: number; data: any[]}>;
    expandedRows: MUIDataTableStateRows;
    filterData: any[];
    filterList: string[][];
    page: number;
    rowsPerPage: number;
    rowsPerPageOptions: number[];
    searchText: string | null;
    selectedRows: MUIDataTableStateRows;
    showResponsive: boolean;
}

export interface MUIDataTableMeta {
    columnData: MUIDataTableColumnOptions[];
    columnIndex: number;
    rowData: any[];
    rowIndex: number;
    tableData: MUIDataTableData[];
    tableState: MUIDataTableState;
}

interface MUIDataTableCustomHeadRenderer extends MUIDataTableColumn {
    index: number;
}

interface MUIDataTableTextLabelsBody {
    noMatch: string;
    toolTip: string;
}

interface MUIDataTableTextLabelsPagination {
    displayRows: string;
    next: string;
    previous: string;
    rowsPerPage: string;
}

interface MUIDataTableTextLabelsToolbar {
    downloadCsv: string;
    filterTable: string;
    print: string;
    search: string;
    viewColumns: string;
}

interface MUIDataTableTextLabelsFilter {
    all: string;
    reset: string;
    title: string;
}

interface MUIDataTableTextLabelsViewColumns {
    title: string;
    titleAria: string;
}

interface MUIDataTableTextLabelsSelectedRows {
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
    body: MUIDataTableTextLabelsBody;
    filter: MUIDataTableTextLabelsFilter;
    pagination: MUIDataTableTextLabelsPagination;
    selectedRows: MUIDataTableTextLabelsSelectedRows;
    toolbar: MUIDataTableTextLabelsToolbar;
    viewColumns: MUIDataTableTextLabelsViewColumns;
}

export interface MUIDataTableFilterOptions {
    names?: string[];
    display?: (filterList: string[], onChange: any, index: number, column: any) => void;
    logic?: (prop: string, filterValue: any[]) => boolean;
}

export interface MUIDataTableColumnState extends MUIDataTableColumnOptions {
    name: string;
    label?: string;
}

export interface MUIDataTableColumnOptions {
    customBodyRender?: (value: any, tableMeta: MUIDataTableMeta, updateValue: (s: any, c: any, p: any) => any) => string | React.ReactNode;
    customHeadRender?: (columnMeta: MUIDataTableCustomHeadRenderer, updateDirection: (params: any) => any) => string | React.ReactNode;
    customFilterListRender?: (value: any) => string;
    display?: 'true' | 'false' | 'excluded';
    download?: boolean;
    empty?: boolean;
    filter?: boolean;
    filterType?: FilterType;
    filterList?: string[];
    filterOptions?: MUIDataTableFilterOptions;
    hint?: string;
    print?: boolean;
    searchable?: boolean;
    setCellHeaderProps?: (columnMeta: MUIDataTableCustomHeadRenderer) => object;
    setCellProps?: (cellValue: string, rowIndex: number, columnIndex: number) => object;
    sort?: boolean;
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

export interface MUIDataTableOptions {
    caseSensitive?: boolean;
    count?: number;
    customFilterDialogFooter?: (filterList: any[]) => React.ReactNode;
    customFooter?: (
        rowCount: number,
        page: number,
        rowsPerPage: number,
        changeRowsPerPage: () => any,
        changePage: number
    ) => React.ReactNode;
    customRowRender?: (data: any[], dataIndex: number, rowIndex: number) => React.ReactNode;
    customSearch?: (searchQuery: string, currentRow: any[], columns: any[]) => boolean;
    customSearchRender?: (
        searchText: string,
        handleSearch: any,
        hideSearch: any,
        options: any
    ) => React.Component | JSX.Element;
    customSort?: (data: any[], colIndex: number, order: string) => any[];
    customToolbar?: () => React.ReactNode;
    customToolbarSelect?: (
        selectedRows: {
            data: Array<{ index: number; dataIndex: number }>;
            lookup: { [key: number]: boolean };
        },
        displayData: Array<{ data: any[]; dataIndex: number }>,
        setSelectedRows: (rows: number[]) => void
    ) => React.ReactNode;
    disableToolbarSelect?: boolean;
    download?: boolean;
    downloadOptions?: {
        filename: string;
        separator: string;
        filterOptions?: { useDisplayedColumnsOnly: boolean; useDisplayedRowsOnly: boolean };
    };
    elevation?: number;
    expandableRows?: boolean;
    expandableRowsOnClick?: boolean;
    filter?: boolean;
    filterType?: FilterType;
    fixedHeader?: boolean;
    fixedHeaderOptions?: {
        xAxis: boolean;
        yAxis: boolean;
    };
    isRowExpandable?: (dataIndex: number, expandedRows?: MUIDataTableIsRowCheck) => boolean;
    isRowSelectable?: (dataIndex: number, selectedRows?: MUIDataTableIsRowCheck) => boolean;
    onCellClick?: (
        colData: any,
        cellMeta: { colIndex: number; rowIndex: number; dataIndex: number; event: React.MouseEvent }
    ) => void;
    onChangePage?: (currentPage: number) => void;
    onChangeRowsPerPage?: (numberOfRows: number) => void;
    onColumnSortChange?: (changedColumn: string, direction: string) => void;
    onColumnViewChange?: (changedColumn: string, action: string) => void;
    /**
     * A callback function that triggers when the user downloads the CSV file.
     * In the callback, you can control what is written to the CSV file.
     * Return false to cancel download of file.
     */
    onDownload?: (
        buildHead: (columns: any) => string,
        buildBody: (data: any) => string,
        columns: any,
        data: any,
    ) => string | boolean;
    onFilterChange?: (changedColumn: string, filterList: any[], type: FilterType | 'chip' | 'reset') => void;
    onFilterDialogOpen?: () => void;
    onFilterDialogClose?: () => void;
    onRowClick?: (rowData: string[], rowMeta: { dataIndex: number; rowIndex: number }) => void;
    onRowsDelete?: (rowsDeleted: any[]) => void;
    onRowsExpand?: (currentRowsExpanded: any[], allRowsExpanded: any[]) => void;
    onRowsSelect?: (currentRowsSelected: any[], rowsSelected: any[]) => void;
    onSearchChange?: (searchText: string) => void;
    onSearchOpen?: () => void;
    onSearchClose?: () => void;
    onTableChange?: (action: string, tableState: MUIDataTableState) => void;
    onTableInit?: (action: string, tableState: MUIDataTableState) => void;
    page?: number;
    pagination?: boolean;
    print?: boolean;
    renderExpandableRow?: (rowData: string[], rowMeta: { dataIndex: number; rowIndex: number }) => React.ReactNode;
    resizableColumns?: boolean;
    responsive?: Responsive;
    rowHover?: boolean;
    rowsPerPage?: number;
    rowsPerPageOptions?: number[];
    rowsExpanded?: any[];
    rowsSelected?: any[];
    search?: boolean;
    searchOpen?: boolean;
    searchPlaceholder?: string;
    searchText?: string;
    selectableRows?: SelectableRows;
    selectableRowsHeader?: boolean;
    selectableRowsOnClick?: boolean;
    setTableProps?: () => object;
    serverSide?: boolean;
    serverSideFilterList?: any[];
    setRowProps?: (row: any[], rowIndex: number) => object;
    sort?: boolean;
    sortFilterList?: boolean;
    textLabels?: MUIDataTableTextLabels;
    viewColumns?: boolean;
}

export type MUIDataTableColumnDef = string | MUIDataTableColumn;

export interface MUIDataTableProps {
    columns: MUIDataTableColumnDef[];
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
    selectRowUpdate?: (...args: any) => any;
    selectedRows?: object;
    toggleExpandRow?: (...args: any) => any;
}

export interface MUIDataTableBodyCell {
    children?: any;
    className?: string;
    classes?: object;
    colIndex?: number;
    columnHeader?: any;
    dataIndex?: number;
    options?: object;
    otherProps?: any;
    rowIndex?: number;
}

export interface MUIDataTableBodyRow {
    className?: string;
    classes?: object;
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
    sortDirection?: SortDirection;
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

declare const MUIDataTable: React.ComponentType<MUIDataTableProps>;

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

export default MUIDataTable;
