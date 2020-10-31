// Type definitions for mui-datatables 3.4
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

export type Display = 'true' | 'false' | 'excluded';
export type FilterType = 'dropdown' | 'checkbox' | 'multiselect' | 'textField' | 'custom';
export type Responsive = 'vertical' | 'standard' | 'simple';
export type SelectableRows = 'multiple' | 'single' | 'none';
export type ChipVariant = 'outlined' | 'default';
export type ChipColor = 'primary' | 'secondary' | 'default';
export type ToolbarButton = boolean | 'true' | 'false' | 'disabled';

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
    displayData: Array<{ dataIndex: number; data: any[] }>;
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

export interface MUIDataTableCustomHeadRenderer extends MUIDataTableColumn {
    index: number;
}

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
    display?: (
        filterList: MUIDataTableState['filterList'],
        onChange: (val: string | string[], index: number, column: MUIDataTableColumn) => void,
        index: number,
        column: MUIDataTableColumn,
        filterData: MUIDataTableState['filterData'],
    ) => void;
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
        value: string,
        tableMeta: MUIDataTableMeta,
        updateValue: (value: string) => void,
    ) => string | React.ReactNode;
    /**
     * Similar to and performing better than `customBodyRender`, however with the following caveats:
     * 1. The value returned from this function is not used for filtering, so the filter dialog will use the raw data from the data array.
     * 2. This method only gives you the dataIndex and rowIndex, leaving you to lookup the column value.
     */
    customBodyRenderLite?: (dataIndex: number, rowIndex: number) => string | React.ReactNode;
    customHeadLabelRender?: (dataIndex: number, rowIndex: number) => string | React.ReactNode;
    customFilterListOptions?: MUIDataTableCustomFilterListOptions;
    customFilterListRender?: (value: any) => string;
    customHeadRender?: (
        columnMeta: MUIDataTableCustomHeadRenderer,
        updateDirection: (params: any) => any,
    ) => string | React.ReactNode;
    draggable?: boolean;
    display?: boolean | string;
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
        },
    ];
}

export type MUIDataTableOptions = Partial<{
    caseSensitive: boolean;
    confirmFilters: boolean;
    count: number;
    customFilterDialogFooter: (
        filterList: MUIDataTableState['filterList'],
        applyNewFilters?: (...args: any[]) => any,
    ) => React.ReactNode;
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
    draggableColumns: MUIDataTableDraggableColumns;
    download: ToolbarButton;
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
    filter: ToolbarButton;
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
    onFilterChange: (
        changedColumn: string | MUIDataTableColumn | null,
        filterList: MUIDataTableState['filterList'],
        type: FilterType | 'chip' | 'reset',
    ) => void;
    /**
     * Callback function that is triggered when a user clicks the "X" on a filter chip.
     * {@link https://github.com/gregnb/mui-datatables/blob/master/examples/serverside-filters/index.js Example}
     */
    onFilterChipClose: (index: number, removedFilter: string, filterList: MUIDataTableState['filterList']) => void;
    /**
     * Callback function that is triggered when a user presses the "confirm" button on the filter popover.
     * This occurs only if you've set `confirmFilters` option to `true`.
     * {@link https://github.com/gregnb/mui-datatables/blob/master/examples/serverside-filters/index.js Example}
     */
    onFilterConfirm: (filterList: MUIDataTableState['filterList']) => void;
    onFilterDialogClose: () => void;
    onFilterDialogOpen: () => void;
    onRowClick: (rowData: string[], rowMeta: { dataIndex: number; rowIndex: number }) => void;
    onRowExpansionChange: (currentRowsExpanded: any[], allRowsExpanded: any[], rowsExpanded?: any[]) => void;
    onRowsDelete: (rowsDeleted: {
        lookup: { [dataIndex: number]: boolean };
        data: Array<{ index: number; dataIndex: number }>;
    }) => void;
    onRowSelectionChange: (currentRowsSelected: any[], allRowsSelected: any[], rowsSelected?: any[]) => void;
    onSearchChange: (searchText: string | null) => void;
    onSearchClose: () => void;
    onSearchOpen: () => void;
    onTableChange: (action: string, tableState: MUIDataTableState) => void;
    onTableInit: (action: string, tableState: MUIDataTableState) => void;
    onViewColumnsChange: (changedColumn: string, action: string) => void;
    page: number;
    pagination: boolean;
    print: ToolbarButton;
    renderExpandableRow: (rowData: string[], rowMeta: { dataIndex: number; rowIndex: number }) => React.ReactNode;
    resizableColumns: boolean;
    responsive: Responsive;
    rowHover: boolean;
    rowsExpanded: any[];
    rowsPerPage: number;
    rowsPerPageOptions: number[];
    rowsSelected: any[];
    search: ToolbarButton;
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
    setFilterChipProps: (colIndex: number, colName: string, data: ReadonlyArray<any[]>) => MUIDataTableChip;
    setRowProps: (row: any[], rowIndex: number) => object;
    setTableProps: () => object;
    sort: boolean;
    sortFilterList: boolean;
    sortOrder: MUISortOptions;
    tableBodyHeight: string;
    tableBodyMaxHeight: string;
    textLabels: Partial<MUIDataTableTextLabels>;
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
    onFilterRest?: (...args: any) => any;
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
    displayData?: Array<{ data: any[]; dataIndex: number }>;
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
    displayData?: any;
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
 * {@link https://github.com/gregnb/mui-datatables/blob/master/examples/large-data-set/index.js Example}
 * @param debounceWait The amount of time to wait for each action - defaults to 200
 */
export function debounceSearchRender(debounceWait?: number): MUIDataTableOptions['customSearchRender'];

export default MUIDataTable;
