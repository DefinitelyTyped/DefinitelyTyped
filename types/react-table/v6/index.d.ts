// Type definitions for react-table 6.8
// Project: https://github.com/tannerlinsley/react-table/tree/v6
// Definitions by: Roy Xue <https://github.com/royxue>,
//                 Pavel Sakalo <https://github.com/psakalo>,
//                 Krzysztof Porębski <https://github.com/Havret>,
//                 Andy S <https://github.com/andys8>,
//                 Grzegorz Rozdzialik <https://github.com/Gelio>
//                 Cam Pepin <https://github.com/cpepin>
//                 Andrew Luca <https://github.com/iamandrewluca>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8
import * as React from 'react';

export type ReactTableFunction = (value?: any) => void;
export type AccessorFunction<D = any> = (row: D) => any;
export type Accessor<D = any> = string | string[] | AccessorFunction<D>;
export type Aggregator = (values: any, rows: any) => any;
export type TableCellRenderer = ((cellInfo: CellInfo, column: any) => React.ReactNode) | React.ReactNode;
export type FilterRender = (params: { column: Column, filter: any, onChange: ReactTableFunction, key?: string }) => React.ReactElement;
export type PivotRenderer = ((cellInfo: CellInfo) => React.ReactNode) | (() => any) | string | React.ReactNode;

export type ComponentPropsGetter0 = (finalState: any, rowInfo: undefined, column: undefined, instance?: any) => object | undefined;
export type ComponentPropsGetterR = (finalState: any, rowInfo?: RowInfo, column?: undefined, instance?: any) => object | undefined;
export type ComponentPropsGetterC = (finalState: any, rowInfo?: undefined, column?: Column, instance?: any) => object | undefined;
export type ComponentPropsGetterRC = (finalState: any, rowInfo?: RowInfo, column?: Column, instance?: any) => object | undefined;

export type DefaultFilterFunction = (filter: Filter, row: any, column: any) => boolean;
export type FilterFunction = (filter: Filter, rows: any[], column: any) => any[];
export type SubComponentFunction = (rowInfo: RowInfo) => React.ReactNode;
export type PageChangeFunction = (page: number) => void;
export type PageSizeChangeFunction = (newPageSize: number, newPage: number) => void;
export type SortedChangeFunction = (newSorted: SortingRule[], column: any, additive: boolean) => void;
export type FilteredChangeFunction = (newFiltering: Filter[], column: any, value: any) => void;
export type ExpandedChangeFunction = (column: any, event: any, isTouch: boolean) => void;
export type ResizedChangeFunction = (newResized: Resize[], event: any) => void;
export type SortFunction = (a: any, b: any, desc: any) => number;

export interface Resize {
    id: string;
    value: any;
}
export interface Filter {
    id: string;
    value: any;
    pivotId?: string;
}

export interface SortingRule {
    id: string;
    desc: boolean;
}

export interface TableProps<D = any, ResolvedData = D> extends
    TextProps,
    ComponentDecoratorProps,
    ControlledStateCallbackProps,
    PivotingProps,
    ControlledStateOverrideProps,
    ComponentProps {
    /** Default: [] */
    data: D[];

    resolveData?: (data: D[]) => ResolvedData[];

    /** Default: false */
    loading: boolean;

    /** Default: true */
    showPagination: boolean;

    /** Default: false */
    showPaginationTop: boolean;

    /** Default: true  */
    showPaginationBottom: boolean;

    /** Default: false */
    manual: boolean;

    /** Default: true */
    multiSort: boolean;

    /** Default: true */
    showPageSizeOptions: boolean;

    /** Default: [5, 10, 20, 25, 50, 100] */
    pageSizeOptions: number[];

    /** Default: 20 */
    defaultPageSize: number;

    /**
     * Default: undefined
     * Otherwise take value from 'pageSize' if defined
     * @TODO: add minRows to react-table defaultProps even if undefined
     */
    minRows: number | undefined;

    /** Default: true */
    showPageJump: boolean;

    /** Default: true */
    sortable: boolean;

    /** Default: true */
    collapseOnSortingChange: boolean;

    /** Default: true */
    collapseOnPageChange: boolean;

    /** Default: true */
    collapseOnDataChange: boolean;

    /** Default: false */
    freezeWhenExpanded: boolean;

    /** Default: [] */
    defaultSorting: SortingRule[];

    /** Default: false */
    showFilters: boolean;

    /** Default: [] */
    defaultFiltering: Filter[];

    /** Default: ... */
    defaultFilterMethod: DefaultFilterFunction;

    /** Default: ... */
    defaultSortMethod: SortFunction;

    /** Default: true */
    resizable: boolean;

    /** Default: false */
    filterable: boolean;

    /** Default: [] */
    defaultResizing: Resize[];

    /** Default: false */
    defaultSortDesc: boolean;

    /** Default: [] */
    defaultSorted: SortingRule[];

    /** Default: [] */
    defaultFiltered: Filter[];

    /** Default: [] */
    defaultResized: Resize[];

    /** Default: {} */
    defaultExpanded: {};

    /** On change. */
    onChange: ReactTableFunction;

    /**
     * Default: string
     * Adding a -striped className to ReactTable will slightly color odd numbered rows for legibility
     * Adding a -highlight className to ReactTable will highlight any row as you hover over it
     */
    className: string;

    /** Default: {} */
    style: object;

    /** Global Column Defaults */
    column: Partial<GlobalColumn>;

    /** Array of all Available Columns */
    columns?: Array<Column<ResolvedData>>;

    /** Expander defaults. */
    expanderDefaults: Partial<ExpanderDefaults>;

    /** Privot defaults. */
    pivotDefaults: Partial<PivotDefaults>;

    /** The content rendered inside of a padding row */
    PadRowComponent: () => React.ReactNode;

    /** Server-side callbacks */
    onFetchData: (state: any, instance: any) => void;

    /** Control callback for functional rendering */
    children: (
        state: FinalState<ResolvedData>,
        makeTable: () => React.ReactElement,
        instance: Instance<ResolvedData>
    ) => React.ReactNode;
}

export interface ControlledStateOverrideProps {
    /** Default: undefined */
    page: number | undefined;

    /** Default: undefined */
    pageSize: number | undefined;

    /** Default: undefined */
    pages: number | undefined;

    /** Default: undefined */
    sorting: number;

    /** Default: [] */
    sorted: SortingRule[];

    /** Default: [] */
    filtered: Filter[];

    /** Default: [] */
    resized: Resize[];

    /** Default: {} */
    expanded: {};

    /** Sub component */
    SubComponent: SubComponentFunction;
}

export interface PivotingProps {
    /** Default: undefined */
    pivotBy: string[];

    /** Default: 200 */
    pivotColumnWidth: number;

    /** Default: _pivotVal */
    pivotValKey: string;

    /** Default: _pivotID */
    pivotIDKey: string;

    /** Default: _subRows */
    subRowsKey: string;

    /** Default: _aggregated */
    aggregatedKey: string;

    /** Default: _nestingLevel */
    nestingLevelKey: string;

    /** Default: _original */
    originalKey: string;

    /** Default: _index */
    indexKey: string;

    /** Default: _groupedByPivot */
    groupedByPivotKey: string;

    /**
     * Default: {} - Pivoting State Overrides (see Fully Controlled Component section)
     * @example { 4: true }
     * @example { 5: { 9: true }, 10: true }
     */
    expandedRows: ExpandedRows;

    /** Default: ??? - Pivoting State Callbacks */
    onExpandRow: ReactTableFunction;
}

export interface ExpandedRows {
    [idx: number]: boolean | ExpandedRows;
}

export interface DerivedDataObject {
    _index: number;
    _nestingLevel: number;
    _subRows: any;
    _original: any;
    [p: string]: any;
}

export interface ControlledStateCallbackProps {
    /** Called when the page index is changed by the user */
    onPageChange: PageChangeFunction;

    /**
     * Called when the pageSize is changed by the user. The resolve page is also sent
     *  to maintain approximate position in the data
     */
    onPageSizeChange: PageSizeChangeFunction;

    /**
     * Called when a sortable column header is clicked with the column itself and if
     * the shiftkey was held. If the column is a pivoted column, `column` will be an array of columns
     */
    onSortedChange: SortedChangeFunction;

    /**
     * Called when a user enters a value into a filter input field or the value passed
     * to the onFiltersChange handler by the Filter option.
     */
    onFilteredChange: FilteredChangeFunction;

    /** Called when an expander is clicked. Use this to manage `expanded` */
    onExpandedChange: ExpandedChangeFunction;

    /** Called when a user clicks on a resizing component (the right edge of a column header) */
    onResizedChange: ResizedChangeFunction;
}

export interface ComponentDecoratorProps {
    getProps: ComponentPropsGetterRC | ComponentPropsGetterC | ComponentPropsGetter0;
    getTableProps: ComponentPropsGetter0;
    getTheadGroupProps: ComponentPropsGetter0;
    getTheadGroupTrProps: ComponentPropsGetter0;
    getTheadGroupThProps: ComponentPropsGetterC;
    getTheadProps: ComponentPropsGetter0;
    getTheadTrProps: ComponentPropsGetter0;
    getTheadThProps: ComponentPropsGetterC;
    getTheadFilterProps: ComponentPropsGetter0;
    getTheadFilterTrProps: ComponentPropsGetter0;
    getTheadFilterThProps: ComponentPropsGetterC;
    getTbodyProps: ComponentPropsGetter0;
    getTrGroupProps: ComponentPropsGetterR | ComponentPropsGetter0;
    getTrProps: ComponentPropsGetterR | ComponentPropsGetter0;
    getTdProps: ComponentPropsGetterRC | ComponentPropsGetterR;
    getTfootProps: ComponentPropsGetter0;
    getTfootTrProps: ComponentPropsGetter0;
    getTfootTdProps: ComponentPropsGetterC;
    getPaginationProps: ComponentPropsGetter0;
    getLoadingProps: ComponentPropsGetter0;
    getNoDataProps: ComponentPropsGetter0;
    getResizerProps: ComponentPropsGetter0;
}

export interface ComponentProps {
    TableComponent: React.ReactType;
    TheadComponent: React.ReactType;
    TbodyComponent: React.ReactType;
    TrGroupComponent: React.ReactType;
    TrComponent: React.ReactType;
    ThComponent: React.ReactType;
    TdComponent: React.ReactType;
    TfootComponent: React.ReactType;
    ExpanderComponent: React.ReactType;
    AggregatedComponent: React.ReactType;
    PivotValueComponent: React.ReactType;
    PivotComponent: React.ReactType;
    FilterComponent: React.ReactType;
    PaginationComponent: React.ReactType;
    PreviousComponent: React.ReactType;
    NextComponent: React.ReactType;
    LoadingComponent: React.ReactType;
    NoDataComponent: React.ReactType;
    ResizerComponent: React.ReactType;
}

export interface TextProps {
    /** Default: 'Previous' */
    previousText: React.ReactNode;

    /** Default: 'Next' */
    nextText: React.ReactNode;

    /** Default: 'Loading...' */
    loadingText: React.ReactNode;

    /** Default: 'No rows found' */
    noDataText: React.ReactNode | React.ComponentType;

    /** Default: 'Page' */
    pageText: React.ReactNode;

    /** Default: 'of' */
    ofText: React.ReactNode;

    /** Default: 'rows' */
    rowsText: string;
}

export interface GlobalColumn extends
    Column.Basics,
    Column.CellProps,
    Column.FilterProps,
    Column.FooterProps,
    Column.HeaderProps {
}

export namespace Column {
    /** Basic column props */
    interface Basics {
        /** Default: undefined, use table default */
        sortable: boolean | undefined;

        /** Default: true */
        show: boolean;

        /** Default: 100 */
        minWidth: number;

        /** Default: undefined, use table default */
        resizable: boolean | undefined;

        /** Default: undefined, use table default */
        filterable: boolean | undefined;

        /** Default: ... */
        sortMethod: SortFunction | undefined;

        /** Default: false */
        defaultSortDesc: boolean | undefined;

        /** Used to render aggregated cells. Defaults to a comma separated list of values. */
        Aggregated: TableCellRenderer;

        /** Used to render a pivoted cell  */
        Pivot: PivotRenderer;

        /**  Used to render the value inside of a Pivot cell */
        PivotValue: TableCellRenderer;

        /** Used to render the expander in both Pivot and Expander cells */
        Expander: TableCellRenderer;
    }

    /** Configuration of a columns cell section */
    interface CellProps {
        /**
         * Default: undefined
         * A function that returns a primitive, or JSX / React Component
         *
         * @example 'Cell Value'
         * @example ({data, column}) => <div>Cell Value</div>,
         */
        Cell: TableCellRenderer;

        /**
         * Set the classname of the `td` element of the column
         * @default string
         */
        className: string;

        /**
         * Set the style of the `td` element of the column
         * @default {}
         */
        style: object;

        /**
         * @default () => ({})
         */
        getProps: ReactTableFunction;
    }

    /** Configuration of a columns header section */
    interface HeaderProps {
        /**
         * Default: undefined
         * A function that returns a primitive, or JSX / React Component
         *
         * @example 'Header Name'
         * @example ({data, column}) => <div>Header Name</div>,
         */
        Header: TableCellRenderer;

        /**
         * Set the classname of the `th` element of the column
         * @default string
         */
        headerClassName: string;

        /**
         * Default: {}
         * Set the style of the `th` element of the column
         */
        headerStyle: object;

        /**
         * Default: (state, rowInfo, column, instance) => ({})
         * A function that returns props to decorate the `th` element of the column
         */
        getHeaderProps: ReactTableFunction;
    }

    /** Configuration of a columns footer section */
    interface FooterProps {
        /**
         * Default: undefined
         * A function that returns a primitive, or JSX / React Component
         *
         * @example 'Footer Name'
         * @example ({data, column}) => <div>Footer Name</div>,
         */
        Footer: TableCellRenderer;

        /**
         * Default: string
         * Set the classname of the `td` element of the column's footer
         */
        footerClassName: string;

        /**
         * Default: {}
         * Set the style of the `td` element of the column's footer
         */
        footerStyle: object;

        /**
         * Default: (state, rowInfo, column, instance) => ({})
         * A function that returns props to decorate the `th` element of the column
         */
        getFooterProps: ReactTableFunction;
    }

    /** Filtering related column props */
    interface FilterProps {
        /** Default: false */
        filterAll: boolean;

        /**
         * A function returning a boolean that specifies the filtering logic for the column
         * 'filter' == an object specifying which filter is being applied. Format: {id: [the filter column's id], value: [the value the user typed in the filter field],
         * pivotId: [if filtering on a pivot column, the pivotId will be set to the pivot column's id and the `id` field will be set to the top level pivoting column]}
         * 'row' || 'rows' == the row (or rows, if filterAll is set to true) of data supplied to the table
         * 'column' == the column that the filter is on
         */
        filterMethod: FilterFunction | DefaultFilterFunction;

        /** Default: ... */
        Filter: FilterRender;
    }
}

export interface ExpanderDefaults {
    /** Default: false */
    sortable: boolean;

    /** Default: false */
    resizable: boolean;

    /** Default: false */
    filterable: boolean;

    /** Default: 35 */
    width: number;
}

export interface PivotDefaults {
    /** Will be overriden in methods.js to display ExpanderComponent */
    render: TableCellRenderer;
}

export interface Column<D = any> extends
    Partial<Column.Basics>,
    Partial<Column.CellProps>,
    Partial<Column.FilterProps>,
    Partial<Column.FooterProps>,
    Partial<Column.HeaderProps> {
    /**
     * Property name as string or Accessor
     * @example: 'myProperty'
     * @example ["a.b", "c"]
     * @example ["a", "b", "c"]
     * @example {"a": {"b": {"c": $}}}
     * @example (row) => row.propertyName
     */
    accessor?: Accessor<D>;

    /**
     * Conditional - A unique ID is required if the accessor is not a string or if you would like to override the column name used in server-side calls
     * @example 'myProperty'
     */
    id?: string;

    /**
     * No description
     * @example (values, rows) => _.round(_.mean(values))
     * @example (values, rows) => _.sum(values)
     */
    aggregate?: Aggregator;

    /**
     * Default: undefined - A hardcoded width for the column. This overrides both min and max width options
     */
    width?: number;

    /**
     * Default: undefined - A maximum width for this column.
     * @default undefined
     */
    maxWidth?: number;

    /**
     * Turns this column into a special column for specifying expander and pivot column options.
     * If this option is true and there is NOT a pivot column, the `expanderDefaults` options will be applied on top of the column options.
     * If this option is true and there IS a pivot column, the `pivotDefaults` options will be applied on top of the column options.
     * Adding a column with the `expander` option set will allow you to rearrange expander and pivot column orderings in the table.
     * It will also let you specify rendering of the header (and header group if this special column is placed in the `columns` option of another column) and the rendering of the expander itself.
     */
    expander?: boolean;

    /** Header Groups only */
    columns?: Array<Column<D>>;

    /**
     * Turns this column into a special column for specifying pivot position in your column definitions.
     * The `pivotDefaults` options will be applied on top of this column's options.
     * It will also let you specify rendering of the header (and header group if this special column is placed in the `columns` option of another column)
     */
    pivot?: boolean;
}

export interface ColumnRenderProps<D = any> {
    /** Sorted data. */
    data: D[];

    /** The column. */
    column: Column<D>;
}

export interface RowRenderProps extends Partial<RowInfo> {
    /** Whenever the current row is expanded */
    isExpanded?: boolean;

    /** The current cell value */
    value?: any;
}

export interface RowInfo {
    /** Materialized row of data */
    row: any;

    /** The post-accessed values from the original row */
    rowValues: any;

    /** The index of the row */
    index: number;

    /** The index of the row relative to the current page */
    viewIndex: number;

    /** The size of the page */
    pageSize: number;

    /** The index of page */
    page: number;

    /** The nesting depth (zero-indexed) */
    level: number;

    /** The nesting path of the row */
    nestingPath: number[];

    /** A boolean stating if the row is an aggregation row */
    aggregated: boolean;

    /** A boolean stating if the row is grouped by Pivot */
    groupedByPivot: boolean;

    /** An array of any expandable sub-rows contained in this row */
    subRows: any[];

    /** Original object passed to row */
    original: any;
}

export interface CellInfo extends RowInfo, Pick<ControlledStateOverrideProps, "resized"> {
    /* true if this row is expanded */
    isExpanded: boolean;

    /* the cell's column */
    column: Column;

    /* materialized value of the cell */
    value: any;

    /* true if the column is pivoted */
    pivoted: boolean;

    /* true if this column is an expander */
    expander: boolean;

    /* true if the column is visible */
    show: boolean;

    /* resolved width of the cell */
    width: number;

    /* resolved maxWidth of the cell */
    maxWidth: number;

    /* resolved tdProps from `getTdProps` for this cell */
    tdProps: any;

    /* resolved column props from 'getProps' for this cell's column */
    columnProps: any;

    /* resolved array of classes for the cell */
    classes: string[];

    /* resolved styles for this cell */
    styles: object;
}

export interface FinalState<D = any> extends TableProps<D> {
    frozen: boolean;
    startRow: number;
    endRow: number;
    padRows: number;
    hasColumnFooter: boolean;
    hasHeaderGroups: boolean;
    canPrevious: boolean;
    canNext: boolean;
    rowMinWidth: number;

    allVisibleColumns: Array<Column<D>>;
    allDecoratedColumns: Array<Column<D>>;
    pageRows: DerivedDataObject[];
    resolvedData: DerivedDataObject[];
    sortedData: DerivedDataObject[];
    headerGroups: any[];
}

export const ReactTableDefaults: TableProps;
export default class ReactTable<D> extends React.Component<Partial<TableProps<D>>> { }

export interface Instance<D = any> extends ReactTable<D> {
    context: any;
    props: Partial<TableProps<D>>;
    refs: any;
    state: FinalState<D>;
    filterColumn(...props: any[]): any;
    filterData(...props: any[]): any;
    fireFetchData(...props: any[]): any;
    getDataModel(...props: any[]): any;
    getMinRows(...props: any[]): any;
    getPropOrState(...props: any[]): any;
    getResolvedState(...props: any[]): any;
    getSortedData(...props: any[]): any;
    getStateOrProp(...props: any[]): any;
    onPageChange: PageChangeFunction;
    onPageSizeChange: PageSizeChangeFunction;
    resizeColumnEnd(...props: any[]): any;
    resizeColumnMoving(...props: any[]): any;
    resizeColumnStart(...props: any[]): any;
    sortColumn(...props: any[]): any;
    sortData(...props: any[]): any;
}
