// Type definitions for react-bootstrap-table-next 4.0
// Project: https://github.com/react-bootstrap-table/react-bootstrap-table2#readme
// Definitions by: Wlad Meixner <https://github.com/gosticks>
//                 Valentin Slobozanin <https://github.com/ignefolio>
//                 Jakub Różbicki <https://github.com/jrozbicki>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.0

// documentation taken from https://react-bootstrap-table.github.io/react-bootstrap-table2/docs/table-props.html

import { CSSProperties, ReactElement, SyntheticEvent, Component } from 'react';

export const ROW_SELECT_SINGLE = 'radio';
export const ROW_SELECT_MULTIPLE = 'checkbox';
export const ROW_SELECT_DISABLED = 'ROW_SELECT_DISABLED';
export const CHECKBOX_STATUS_INDETERMINATE = 'indeterminate';
export const CHECKBOX_STATUS_CHECKED = 'checked';
export const CHECKBOX_STATUS_UNCHECKED = 'unchecked';
export const FILTERS_POSITION_INLINE = 'inline';
export const FILTERS_POSITION_TOP = 'top';
export const FILTERS_POSITION_BOTTOM = 'bottom';

export type RowSelectionType = typeof ROW_SELECT_SINGLE | typeof ROW_SELECT_MULTIPLE | typeof ROW_SELECT_DISABLED;
export type TableCheckboxStatus =
    | typeof CHECKBOX_STATUS_INDETERMINATE
    | typeof CHECKBOX_STATUS_CHECKED
    | typeof CHECKBOX_STATUS_UNCHECKED;
export type FilterPosition =
    | typeof FILTERS_POSITION_INLINE
    | typeof FILTERS_POSITION_TOP
    | typeof FILTERS_POSITION_BOTTOM;

/**
 * Table change event types
 */
export type TableChangeType = 'filter' | 'pagination' | 'sort' | 'cellEdit';

/**
 * Used to specify the text alignment for a column.
 */
export type CellAlignment = ('left' | 'center' | 'right' | 'start' | 'end') | string;

/**
 * Filter comparators used for table filters
 */
declare enum FilterComparator {
    LIKE = 'LIKE',
    EQ = '=',
    NE = '!=',
    GT = '>',
    GE = '>=',
    LT = '<',
    LE = '<=',
}

/**
 * Sort Order values. 'asc' = ascending, 'desc' = descending.
 */
export type SortOrder = 'asc' | 'desc';

export type ColumnSortValue<R, C = any> = (cell: C, row: R) => boolean | string | number;

export type ColumnSortFunc<T, E extends keyof T = any> = (
    a: T[E],
    b: T[E],
    order: 'asc' | 'desc',
    dataField: any,
    rowA: T,
    rowB: T,
) => number;

export type ColumnSortCaret<T extends object = any, E = any> = (
    order: 'asc' | 'desc' | undefined,
    column: ColumnDescription<T, E>,
) => JSX.Element | string | null;

export type HeaderSortingClasses<T extends object = any, E = any> =
    | string
    | ((
          column: ColumnDescription<T, E>,
          sortOrder: 'asc' | 'desc',
          isLastSorting: boolean,
          colIndex: number,
      ) => string);

export interface TableChangeState<T> {
    page: number;
    sizePerPage: number;
    sortField: string;
    sortOrder: 'asc' | 'desc';
    filters: { [key: string]: { filterVal: any; filterType: 'TEXT'; comparator: any } };
    data: T[];
    cellEdit: {
        rowId: string;
        dataField: any;
        newValue: any;
    };
}

export type HeaderFormatter<T extends object = any> = (
    column: ColumnDescription<T>,
    colIndex: number,
    components: {
        sortElement: JSX.Element;
        filterElement: JSX.Element;
    },
) => React.ReactNode;

export type ColumnFormatter<R, E = any, C = any> = (
    cell: C,
    row: R,
    rowIndex: number,
    formatExtraData?: E,
) => React.ReactNode;

export interface ValidationResult {
    async?: boolean | undefined;
    valid?: boolean | undefined;
    message?: string | undefined;
}

export interface ColumnDescription<T extends object = any, E = any> {
    /**
     * If set the column will not use cell values
     */
    isDummyField?: boolean | undefined;
    dataField: any;
    formatter?: ColumnFormatter<T, E> | undefined;
    hidden?: boolean | undefined;
    /**
     * Column header field
     */
    text: string;
    classes?: string | ((cell: T[keyof T], row: T, rowIndex: number, colIndex: number) => string) | undefined;
    headerClasses?: string | ((column: ColumnDescription<T, E>, colIndex: number) => string) | undefined;
    style?:
        | React.CSSProperties
        | ((cell: T[keyof T], row: T, rowIndex: number, colIndex: number) => React.CSSProperties)
        | undefined;
    sort?: boolean | undefined;
    sortValue?: ColumnSortValue<T> | undefined;
    sortFunc?: ColumnSortFunc<T> | undefined;
    sortCaret?: ColumnSortCaret<T, E> | undefined;
    searchable?: boolean | undefined;
    align?: CellAlignment | undefined;
    headerStyle?: React.CSSProperties | (() => React.CSSProperties) | undefined;

    tooltipDataField?: string | undefined;
    editable?: boolean | ((cell: any, row: T, rowIndex: number, colIndex: number) => boolean) | undefined;
    editor?: { type: string; options?: Array<{ value: string; label: string }> | undefined } | undefined;
    filter?: boolean | TableColumnFilterProps | undefined;
    filterValue?: ((cell: T[keyof T], row: T) => string) | undefined;
    headerAlign?: CellAlignment | undefined;
    headerFormatter?: HeaderFormatter<T> | undefined;
    headerSortingClasses?: HeaderSortingClasses<T, E> | undefined;
    formatExtraData?:
        | ({
              tooltipFormatter?: ((row: T) => JSX.Element) | undefined;
          } & E)
        | undefined;
    width?: number | undefined;
    footer?:
        | boolean
        | number
        | string
        | ((columnData: any, column: ColumnDescription<T, E>, columnIndex: number) => string)
        | undefined;
    footerFormatter?: ((column: ColumnDescription<T, E>, columnIndex: number) => void) | undefined;
    footerClasses?: string | ((column: ColumnDescription<T, E>, columnIndex: number) => string) | undefined;
    footerStyle?: React.CSSProperties | undefined;
    footerTitle?: boolean | undefined;
    footerEvents?: { onClick: (e: any, column: ColumnDescription<T, E>, columnIndex: number) => void } | undefined;
    footerAlign?: CellAlignment | ((column: ColumnDescription<T, E>, colIndex: number) => CellAlignment) | undefined;
    validator?:
        | ((
              newValue: any,
              row: T,
              column: ColumnDescription<T, E>,
              done: (result?: ValidationResult) => any,
          ) => boolean | ValidationResult)
        | undefined;

    /**
     * CSV Column options only used with the toolkit provider
     */

    /**
     * export csv cell type can be Number or String
     */
    csvType?: object | undefined;
    /**
     * Custom csv cell formatter used when exporting csv
     */
    csvFormatter?: ColumnFormatter<T, E> | undefined;
    /**
     * csvText defaults to column.text
     */
    csvText?: string | undefined;
    /**
     * Toggle column display in CSV export
     */
    csvExport?: boolean | undefined;
}

/**
 * Generic row event handler
 */
export type RowEventHandler<T> = (e: SyntheticEvent, row: T, rowIndex: number) => void;

/**
 * Row level event handlers
 */
export type RowEventHandlerProps<T = any> = Partial<{
    onClick: RowEventHandler<T>;
    onDoubleClick: RowEventHandler<T>;
    onMouseEnter: RowEventHandler<T>;
    onMouseLeave: RowEventHandler<T>;
    onContextMenu: RowEventHandler<T>;
}>;

/**
 * Table change callback method
 */
export type TableChangeHandler<T> = (type: TableChangeType, newState: TableChangeState<T>) => void;

/**
 * All possible pagination options handled by the pagination plugin
 *
 * Consult [documentation](https://react-bootstrap-table.github.io/react-bootstrap-table2/docs/pagination-props.html)
 */
export type PaginationOptions = Partial<{
    custom: boolean;
    /**
     * Specify the current page. It's necessary when remote is enabled
     */
    page: number;
    /**
     * Specify the size per page. It's necessary when remote is enabled
     */
    sizePerPage: number;
    /**
     * Total data size. It's necessary when remote is enabled
     */
    totalSize: number;
    /**
     * first page will be 0, default is 1
     */
    pageStartIndex: number;
    /**
     * the pagination bar size, default is 5
     */
    paginationSize: number;
    /**
     * display pagination information
     */
    showTotal: boolean;
    /**
     * A numeric array is also available: [5, 10]. the purpose of above example is custom the text
     */
    sizePerPageList: number[] | Array<{ text: string; value: number }>;
    /**
     * hide the going to first and last page button
     */
    withFirstAndLast: boolean;
    /**
     * always show the next and previous page button
     */
    alwaysShowAllBtns: boolean;
    /**
     * the text of first page button
     */
    firstPageText: string | JSX.Element;
    /**
     * the text of previous page button
     */
    prePageText: string | JSX.Element;
    /**
     * the text of next page button
     */
    nextPageText: string | JSX.Element;
    /**
     * the text of last page button
     */
    lastPageText: string | JSX.Element;
    /**
     * the title of next page button
     */
    nextPageTitle: string;
    /**
     * the title of previous page button
     */
    prePageTitle: string;
    /**
     * the title of first page button
     */
    firstPageTitle: string;
    /**
     * the title of last page button
     */
    lastPageTitle: string;
    /**
     * hide the size per page dropdown
     */
    hideSizePerPage: boolean;
    /**
     * hide pagination bar when only one page, default is false
     */
    hidePageListOnlyOnePage: boolean;
    /**
     * custom page button inside the pagination list
     */
    pageButtonRenderer: (options: PageButtonRendererOptions) => JSX.Element;
    /**
     * callback function when page was changing
     */
    onPageChange: (page: number, sizePerPage: number) => void;
    /**
     * callback function when page size was changing
     */
    onSizePerPageChange: (page: number, sizePerPage: number) => void;
    /**
     * custom pagination list component
     */
    pageListRenderer: (options: PageListRendererOptions) => JSX.Element;
    /**
     * custom size per page
     */
    sizePerPageRenderer: (options: SizePerPageRendererOptions) => JSX.Element;
    /**
     * custom size per page dropdown component
     */
    sizePerPageOptionRenderer: (options: SizePerPageOptionRendererOptions) => JSX.Element;
    /**
     * custom the pagination total
     */
    paginationTotalRenderer: (from: number, to: number, size: number) => JSX.Element;
}>;

export interface SizePerPageOptionRendererOptions {
    /**
     * text of the option
     */
    text: string;
    /**
     * size of per page option
     */
    page: number;
    /**
     * call it when you need to change size per page
     */
    onSizePerPageChange: (page: number, sizePerPage: number) => void;
}

export interface PageListRendererOptions {
    /**
     * current page
     */
    pages: Array<{ active: boolean; disabled: boolean; page: number; title: string }>;
    /**
     * call it when you need to change page
     */
    onPageChange: (page: number, sizePerPage: number) => void;
}

export interface PageButtonRendererOptions {
    /**
     * page number
     */
    page: number | string;
    /**
     * is this page the current page or not
     */
    active: boolean;
    /**
     *  is this page disabled or not
     */
    disabled: boolean;
    /**
     * page title
     */
    title: string;
    /**
     * call it when you need to change page
     */
    onPageChange: (page: number, sizePerPage: number) => void;
}

export interface SizePerPageRendererOptions {
    /**
     * dropdown options
     */
    options: Array<{ text: string; page: number }>;
    /**
     * current size per page
     */
    currSizePerPage: string;
    /**
     * call it when you need to change size per page
     */
    onSizePerPageChange: (page: number) => void;
}

export interface SelectRowProps<T> {
    mode: RowSelectionType;
    clickToSelect?: boolean | undefined;
    clickToExpand?: boolean | undefined;
    clickToEdit?: boolean | undefined;
    hideSelectAll?: boolean | undefined;
    selected?: Array<number | string> | undefined;
    onSelect?: ((row: T, isSelected: boolean, rowIndex: number, e: SyntheticEvent) => void | boolean) | undefined;
    /**
     * This callback function will be called when select/unselect all and it only work when you configure selectRow.mode as checkbox.
     */
    onSelectAll?: ((isSelect: boolean, rows: T[], e: React.SyntheticEvent) => void | number[]) | undefined;
    style?: ((row: T, rowIndex: number) => CSSProperties | undefined) | CSSProperties | undefined;
    classes?: ((row: T, rowIndex: number) => string | undefined) | string | undefined;
    nonSelectable?: number[] | undefined;
    nonSelectableStyle?: ((row: T, rowIndex: number) => CSSProperties | undefined) | CSSProperties | undefined;
    nonSelectableClasses?: ((row: T, rowIndex: number) => string | undefined) | string | undefined;
    bgColor?: ((row: T, rowIndex: number) => string) | string | undefined;
    hideSelectColumn?: boolean | undefined;
    selectionRenderer?:
        | ((options: {
              checked: boolean;
              disabled: boolean;
              mode: string;
              rowIndex: number;
              rowKey: string;
          }) => JSX.Element)
        | undefined;
    selectionHeaderRenderer?:
        | ((options: { mode: string; checked: boolean; indeterminate: boolean }) => JSX.Element)
        | undefined;
    headerColumnStyle?: ((status: TableCheckboxStatus) => CSSProperties | undefined) | CSSProperties | undefined;
    selectColumnStyle?:
        | ((props: {
              checked: boolean;
              disabled: boolean;
              rowIndex: number;
              rowKey: string;
          }) => CSSProperties | undefined)
        | CSSProperties
        | undefined;
    selectColumnPosition?: 'left' | 'right' | undefined;
}

export interface BootstrapTableRef<T extends object = any> {
    table: {
        props: {
            data: T[];
        };
    };
    selectionContext?:
        | {
              selected?: any[] | undefined;
          }
        | undefined;
    rowExpandContext?:
        | {
              state: {
                  expanded?: any[] | undefined;
              };
          }
        | undefined;
    paginationContext?:
        | {
              currPage: number;
              currSizePerPage: number;
          }
        | undefined;
    sortContext?:
        | {
              state: {
                  sortColumn: ColumnDescription<T>;
                  sortOrder: SortOrder;
              };
          }
        | undefined;
    filterContext?:
        | {
              currFilters: any;
          }
        | undefined;
    cellEditContext?:
        | {
              startEditing: (rowIndex: number, columnIndex: number) => void;
          }
        | undefined;
}

export interface BootstrapTableProps<T extends object = any, K = number> {
    /**
     * Tells react-bootstrap-table2 which column is unique.
     */
    keyField: string;
    /**
     *  Provides data for your table. It accepts a single Array object.
     */
    data: any[];
    columns: ColumnDescription[];
    bootstrap4?: boolean | undefined;
    remote?:
        | boolean
        | Partial<{ pagination: boolean; filter: boolean; sort: boolean; cellEdit: boolean; search: boolean }>
        | undefined;
    noDataIndication?: (() => JSX.Element | string) | JSX.Element | string | undefined;
    striped?: boolean | undefined;
    bordered?: boolean | undefined;
    hover?: boolean | undefined;
    tabIndexCell?: boolean | undefined;
    id?: string | undefined;
    classes?: string | undefined;
    headerClasses?: string | undefined;
    bodyClasses?: string | undefined;
    wrapperClasses?: string | undefined;
    headerWrapperClasses?: string | undefined;
    condensed?: boolean | undefined;
    /**
     * Same as HTML caption tag, you can set it as String or a React JSX.
     */
    caption?: JSX.Element | string | undefined;
    pagination?: { options?: PaginationOptions | undefined } | undefined;
    filter?: unknown | undefined;
    cellEdit?: any;
    selectRow?: SelectRowProps<T> | undefined;
    expandRow?: ExpandRowProps<T, K> | undefined;
    parentClassName?: string | ((isExpand: boolean, row: T, rowIndex: number) => string) | undefined;
    rowStyle?: ((row: T, rowIndex: number) => CSSProperties) | CSSProperties | undefined;
    rowEvents?: RowEventHandlerProps | undefined;
    rowClasses?: ((row: T, rowIndex: number) => string) | string | undefined;
    filtersClasses?: string | undefined;
    filterPosition?: FilterPosition | undefined;
    footerClasses?: string | undefined;
    defaultSorted?: [{ dataField: any; order: SortOrder }] | undefined;
    sort?:
        | {
              dataField?: any;
              order: SortOrder;
              sortFunc?: any;
              sortCaret?: any;
          }
        | undefined;
    defaultSortDirection?: SortOrder | undefined;
    overlay?: any;
    onTableChange?: TableChangeHandler<T> | undefined;
    onSort?: any;
    onFilter?: any;
    onExternalFilter?: any;
    /**
     * This callback function will be called only when data size change by search/filter etc.
     */
    onDataSizeChange?: ((props: { dataSize: number }) => void) | undefined;
    search?: SearchProps<T> | boolean | undefined;
}

declare class BootstrapTable<T extends object = any, K = number> extends Component<BootstrapTableProps<T, K>> {}
export default BootstrapTable;

/**
 * Search props
 *
 * Consult [documentation](https://react-bootstrap-table.github.io/react-bootstrap-table2/docs/search-props.html)
 */
export interface SearchProps<T> {
    placeholder?: string | undefined;
    searchText?: string | undefined;
    defaultSearch?: string | undefined;
    /* custom search method, return true if matched and false if not */
    onColumnMatch?: ((searchProps: { searchText: string; value: any; column: any; row: T }) => boolean) | undefined;
    onClear?: () => void;
    onSearch?: (searchText: string) => void;
}

export interface ExpandColumnRendererProps {
    expanded: boolean;
    rowKey: string;
    expandable: boolean;
}

export interface ExpandHeaderColumnRenderer {
    isAnyExpands: boolean;
}

export interface ExpandRowProps<T, K = number> {
    renderer: (row: T, rowIndex: number) => JSX.Element;
    expanded?: K[] | undefined;
    onExpand?: ((row: T, isExpand: boolean, rowIndex: number, e: SyntheticEvent) => void) | undefined;
    onExpandAll?: ((isExpandAll: boolean, results: T[], e: SyntheticEvent) => void) | undefined;
    nonExpandable?: K[] | undefined;
    showExpandColumn?: boolean | undefined;
    onlyOneExpanding?: boolean | undefined;
    expandByColumnOnly?: boolean | undefined;
    expandColumnRenderer?: ((props: ExpandColumnRendererProps) => JSX.Element) | undefined;
    expandHeaderColumnRenderer?: ((props: ExpandHeaderColumnRenderer) => JSX.Element) | undefined;
    expandColumnPosition?: 'left' | 'right' | undefined;
    className?: string | ((isExpand: boolean, row: T, rowIndex: number) => string) | undefined;
}

export type TableColumnFilterProps<FV = any, T extends object = any> = Partial<{
    id: string;
    /**
     *  custom the input placeholder
     */
    placeholder: string;
    /**
     *  custom classname on input
     */
    className: string;
    /**
     *  default filtering value
     */
    defaultValue: any;

    /**
     *  your custom styles on input
     */
    style: React.CSSProperties;
    /**
     *  how long will trigger filtering after user typing, default is 500 ms
     */
    delay: number;
    /*
     * export filter function to allow users to access filter method externally.
     */
    getFilter: (filter: (value: FV) => void | T[]) => void;

    /**
     * Register a listener which will be called when column filter being triggered. If you return an array value, react-bootstrap-table2 will adopt this value as the final filtered result.
     */
    onFilter: (filterValue: FV) => void | T[];
}>;
