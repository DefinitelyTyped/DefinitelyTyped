// Type definitions for mui-datatables 2.0
// Project: https://github.com/gregnb/mui-datatables
// Definitions by: Jeroen "Favna" Claassens <https://github.com/favna>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import * as React from 'react';

interface MUIDataTableData {
    index: number;
    data: any[];
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

interface MUIDataTableColumn {
    name: string;
    label?: string;
    options?: MUIDataTableColumnOptions;
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
    sortDirection?: 'asc' | 'desc';
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
    customToolbarSelect?: () => React.ReactNode;
    customFooter?: () => React.ReactNode;
    customSort?: (data: any[], colIndex: number, order: string) => any[];
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
    onCellClick?: (colData: any, cellMeta: { colIndex: number, rowIndex: number, dataIndex: number }) => void;
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
    data: any[];
    options?: MUIDataTableOptions;
}

declare const MUIDataTable: React.ComponentType<MUIDataTableProps>;

export default MUIDataTable;
