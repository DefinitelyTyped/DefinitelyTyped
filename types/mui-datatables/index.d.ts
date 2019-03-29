// Type definitions for mui-datatables 2.0
// Project: https://github.com/gregnb/mui-datatables
// Definitions by: Jeroen "Favna" Claassens <https://github.com/favna>
//                 Ankith Konda <https://github.com/ankithkonda>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.1

import * as React from 'react';

interface MUIDataTableData {
    index: number;
    data: Array<object|number[]|string[]>;
}

interface MUIDataTableStateRows {
    data: string[];
    lookup: any;
}

interface MUIDataTableState {
    announceText: string | null;
    activeColumn: string | null;
    page: number;
    rowsPerPage: number;
    filterList: string[][];
    selectedRows: MUIDataTableStateRows;
    expandedRows: MUIDataTableStateRows;
    showResponsive: boolean;
    searchText: string | null;
    rowsPerPageOptions: number[];
}

interface MUIDataTableMeta {
    rowIndex: number;
    columnIndex: number;
    columnData: MUIDataTableColumnOptions[];
    rowData: any[];
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
    next: string;
    previous: string;
    rowsPerPage: string;
    displayRows: string;
}

interface MUIDataTableTextLabelsToolbar {
    search: string;
    downloadCsv: string;
    print: string;
    viewColumns: string;
    filterTable: string;
}

interface MUIDataTableTextLabelsFilter {
    all: string;
    title: string;
    reset: string;
}

interface MUIDataTableTextLabelsViewColumns {
    title: string;
    titleAria: string;
}

interface MUIDataTableTextLabelsSelectedRows {
    text: string;
    delete: string;
    deleteAria: string;
}

export interface MUIDataTableColumn {
    name: string;
    label?: string;
    options?: MUIDataTableColumnOptions;
}

export interface MUIDataTableTextLabels {
    body: MUIDataTableTextLabelsBody;
    pagination: MUIDataTableTextLabelsPagination;
    toolbar: MUIDataTableTextLabelsToolbar;
    filter: MUIDataTableTextLabelsFilter;
    viewColumns: MUIDataTableTextLabelsViewColumns;
    selectedRows: MUIDataTableTextLabelsSelectedRows;
}

export interface MUIDataTableColumnOptions {
    display?: 'true' | 'false' | 'excluded';
    filter?: boolean;
    filterList?: string[];
    filterOptions?: string[];
    sort?: boolean;
    searchable?: boolean;
    sortDirection?: 'asc' | 'desc';
    print?: boolean;
    download?: boolean;
    hint?: string;
    customHeadRender?: (columnMeta: MUIDataTableCustomHeadRenderer, updateDirection: (params: any) => any) => string;
    customBodyRender?: (value: any, tableMeta: MUIDataTableMeta, updateValue: (s: any, c: any, p: any) => any) => string | React.ReactNode;
    setCellProps?: (cellValue: string, rowIndex: number, columnIndex: number) => object;
}

export interface MUIDataTableOptions {
    page?: number;
    count?: number;
    serverSide?: boolean;
    rowsSelected?: any[];
    filterType?: 'dropdown' | 'checkbox' | 'multiselect' | 'textField';
    textLabels?: MUIDataTableTextLabels;
    pagination?: boolean;
    selectableRows?: boolean;
    IsRowSelectable?: (dataIndex: number) => boolean;
    resizableColumns?: boolean;
    expandableRows?: boolean;
    renderExpandableRow?: (rowData: string[], rowMeta: { dataIndex: number; rowIndex: number }) => React.ReactNode;
    customToolbar?: () => React.ReactNode;
    customFooter?: (rowCount: number, page: number, rowsPerPage: number, changeRowsPerPage: () => any, changePage: number) => React.ReactNode;
    customToolbarSelect?: (
        selectedRows: {
            data: Array<{ index: number; dataIndex: number }>;
            lookup: { [key: number]: boolean };
        },
        displayData: Array<{ data: any[]; dataIndex: number }>,
        setSelectedRows: (rows: number[]) => void
    ) => React.ReactNode;
    customSort?: (data: any[], colIndex: number, order: string) => any[];
    customSearch?: (searchQuery: string, currentRow: any[], columns: any[]) => boolean;
    elevation?: number;
    caseSensitive?: boolean;
    responsive?: 'stacked' | 'scroll';
    rowsPerPage?: number;
    rowsPerPageOptions?: number[];
    rowHover?: boolean;
    fixedHeader?: boolean;
    sortFilterList?: boolean;
    sort?: boolean;
    filter?: boolean;
    search?: boolean;
    print?: boolean;
    download?: boolean;
    downloadOptions?: { filename: string; separator: string };
    viewColumns?: boolean;
    onRowsSelect?: (currentRowsSelected: any[], rowsSelected: any[]) => void;
    onRowsDelete?: (rowsDeleted: any[]) => void;
    onRowClick?: (rowData: string[], rowMeta: { dataIndex: number; rowIndex: number }) => void;
    onCellClick?: (colData: any, cellMeta: { colIndex: number, rowIndex: number, dataIndex: number, event: React.MouseEvent }) => void;
    onChangePage?: (currentPage: number) => void;
    onChangeRowsPerPage?: (numberOfRows: number) => void;
    onSearchChange?: (searchText: string) => void;
    onFilterChange?: (changedColumn: string, filterList: any[]) => void;
    onColumnSortChange?: (changedColumn: string, direction: string) => void;
    onColumnViewChange?: (changedColumn: string, action: string) => void;
    onTableChange?: (action: string, tableState: object) => void;
    setRowProps?: (row: any[], rowIndex: number) => object;
}

export type MUIDataTableColumnDef = string | MUIDataTableColumn;

export interface MuiDatatablesTableState {
    page: number;
    rowsPerPage: number;
    filterList: any[];
}

export interface MUIDataTableProps {
    title: string;
    columns: MUIDataTableColumnDef[];
    data: Array<object|number[]|string[]>;
    options?: MUIDataTableOptions;
}

export interface MUIDataTablePopover {
    action?: (...args: any) => any;
    elevation?: number;
    option?: boolean;
    onClose?: (...args: any) => any;
    onExited?: (...args: any) => any;
    anchorEl?: React.ReactNode;
    ref?: any;
    anchorOrigin?: any;
    transformOrigin?: any;
}

export interface MUIDataTableBody {
    data: Array<object|number[]|string[]>;
    count: number;
    columns: MUIDataTableColumnDef[];
    options: object;
    filterList?: string[][];
    onRowClick?: (rowData: string[], rowMeta: { dataIndex: number; rowIndex: number }) => void;
    selectedRows?: object;
    selectRowUpdate?: (...args: any) => any;
    searchText?: string;
    toggleExpandRow?: (...args: any) => any;
    classes: object;
}

export interface MUIDataTableBodyCell {
    classes?: object;
    colIndex?: number;
    columnHeader?: any;
    options?: object;
    dataIndex?: number;
    rowIndex?: number;
    className?: string;
    children?: any;
    otherProps?: any;
}

export interface MUIDataTableBodyRow {
    options: object;
    onClick?: (...args: any) => any;
    rowSelected?: boolean;
    classes?: object;
    className?: string;
}

export interface MUIDataTableFilter {
    filterData: any[];
    filterList?: string[][];
    options: object;
    onFilterUpdate?: (...args: any) => any;
    onFilterRest?: (...args: any) => any;
    classes?: object;
}

export interface MUIDataTableFilterList {
    filterList: string[][];
    onFilterUpdate?: (...args: any) => any;
    classes?: object;
}

export interface MUIDataTableFooter {
    options?: object;
    rowCount?: number;
    page?: number;
    rowsPerPage?: number;
    changeRowsPerPage?: (...args: any) => any;
    changePage?: any;
}

export interface MUIDataTableHead {
    classes?: object;
    columns?: MUIDataTableColumnDef[];
    count?: number;
    options?: object;
    data?: any[];
    page?: any;
    setCellRef?: any;
    selectedRows?: any;
}

export interface MUIDataTableHeadCell {
    classes?: object;
    options: object;
    sortDirection?: 'asc' | 'desc';
    toggleSort: (...args: any) => any;
    sort: boolean;
    hint: string;
    children?: any;
}

export interface MUIDataTableHeadRow {
    classes?: object;
}

export interface MUIDataTablePagination {
    count: number;
    options: object;
    page: number;
    rowsPerPage: number;
    changeRowsPerPage: (...args: any) => any;
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
    options?: object;
    onHide?: (...args: any) => any;
    onSearch?: (...args: any) => any;
}

export interface MUIDataTableSelectCell {
    checked: boolean;
    fixedHeader: boolean;
    isHeaderCell?: boolean;
    expandableOn?: boolean;
    selectableOn?: boolean;
    isRowExpanded?: boolean;
    isRowSelectable?: boolean;
    onChange?: (...args: any) => any;
    onExpand?: (...args: any) => any;
    classes?: object;
    otherProps?: any;
}

export interface MUIDataTableToolbar {
    data?: any[];
    classes?: object;
    columns: MUIDataTableColumnDef[];
    options?: object;
    setTableActions?: (...args: any) => any;
    searchTextUpdate?: (...args: any) => any;
    filterData?: any;
    filterList?: string[][];
    filterUpdate?: any;
    resetFilters?: any;
    toggleViewColumn?: any;
    title?: any;
    tableRef?: (...args: any) => any;
}

export interface MUIDataTableToolbarSelect {
    options: object;
    rowSelected?: boolean;
    displayData?: any;
    onRowsDelete?: (...args: any) => any;
    selectRowUpdate?: (...args: any) => any;
    classes?: object;
}

export interface MUIDataTableViewCol {
    columns: any[];
    object: object;
    onColumnUpdate: (...args: any) => any;
    classes?: object;
}

declare const MUIDataTable: React.ComponentType<MUIDataTableProps>;

export const Popover: React.Component<MUIDataTablePopover>;
export const TableBodyCell: React.Component<MUIDataTableBodyCell>;
export const TableBody: React.Component<MUIDataTableBody>;
export const TableBodyRow: React.Component<MUIDataTableBodyRow>;
export const TableFilter: React.Component<MUIDataTableFilter>;
export const TableFilterList: React.Component<MUIDataTableFilterList>;
export const TableFooter: React.Component<MUIDataTableFooter>;
export const TableHeadCell: React.Component<MUIDataTableHeadCell>;
export const TableHead: React.Component<MUIDataTableHead>;
export const TableHeadRow: React.Component<MUIDataTableHeadRow>;
export const TablePagination: React.Component<MUIDataTablePagination>;
export const TableResize: React.Component<MUIDataTableResize>;
export const TableSearch: React.Component<MUIDataTableSearch>;
export const TableSelectCell: React.Component<MUIDataTableSelectCell>;
export const TableToolbar: React.Component<MUIDataTableToolbar>;
export const TableToolbarSelect: React.Component<MUIDataTableToolbarSelect>;
export const TableViewCol: React.Component<MUIDataTableViewCol>;

export default MUIDataTable;
