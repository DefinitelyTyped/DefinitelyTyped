import { Validator, Requireable, PureComponent, Component } from 'react';
import { CellMeasurerCache } from './CellMeasurer';
import { Index, Alignment, ScrollEventData, IndexRange, OverscanIndexRange } from '../../index';
import { Grid } from './Grid';

export type TableCellDataGetterParams = {
    columnData?: any,
    dataKey: string,
    rowData: any
};
export type TableCellProps = {
    cellData?: any,
    columnData?: any,
    dataKey: string,
    rowData: any,
    rowIndex: number
};
export type TableHeaderProps = {
    columnData?: any,
    dataKey: string,
    disableSort?: boolean,
    label?: string,
    sortBy?: string,
    sortDirection?: SortDirectionType
};
export type TableHeaderRowProps = {
    className: string,
    columns: React.ReactNode[],
    style: React.CSSProperties,
    scrollbarWidth: number,
    height: number,
    width: number
};
export type TableRowProps = {
    className: string,
    columns: any[],
    index: number,
    isScrolling: boolean,
    onRowClick?: (params: RowMouseEventHandlerParams) => void,
    onRowDoubleClick?: (params: RowMouseEventHandlerParams) => void,
    onRowMouseOver?: (params: RowMouseEventHandlerParams) => void,
    onRowMouseOut?: (params: RowMouseEventHandlerParams) => void,
    rowData: any,
    style: any
};

export type TableCellDataGetter = (params: TableCellDataGetterParams) => any;
export type TableCellRenderer = (props: TableCellProps) => React.ReactNode;
export type TableHeaderRenderer = (props: TableHeaderProps) => React.ReactNode;
export type TableHeaderRowRenderer = (props: TableHeaderRowProps) => React.ReactNode;
export type TableRowRenderer = (props: TableRowProps) => React.ReactNode;

// https://github.com/bvaughn/react-virtualized/blob/master/docs/Column.md
export type ColumnProps = {
    cellDataGetter?: TableCellDataGetter;
    cellRenderer?: TableCellRenderer;
    className?: string;
    columnData?: any;
    dataKey: any;
    disableSort?: boolean;
    flexGrow?: number;
    flexShrink?: number;
    headerClassName?: string;
    headerRenderer?: TableHeaderRenderer;
    label?: string;
    maxWidth?: number;
    minWidth?: number;
    style?: React.CSSProperties;
    width: number;
}
export class Column extends Component<ColumnProps, {}> {
    static propTypes: {
        /** Optional aria-label value to set on the column header */
        'aria-label': Requireable<string>,

        /**
         * Callback responsible for returning a cell's data, given its :dataKey
         * ({ columnData: any, dataKey: string, rowData: any }): any
         */
        cellDataGetter: Requireable<TableCellDataGetter>,

        /**
         * Callback responsible for rendering a cell's contents.
         * ({ cellData: any, columnData: any, dataKey: string, rowData: any, rowIndex: number }): node
         */
        cellRenderer: Requireable<TableCellRenderer>,

        /** Optional CSS class to apply to cell */
        className: Requireable<string>,

        /** Optional additional data passed to this column's :cellDataGetter */
        columnData: Requireable<object>,

        /** Uniquely identifies the row-data attribute correspnding to this cell */
        dataKey: Validator<string>,

        /** If sort is enabled for the table at large, disable it for this column */
        disableSort: Requireable<boolean>,

        /** Flex grow style; defaults to 0 */
        flexGrow: Requireable<number>,

        /** Flex shrink style; defaults to 1 */
        flexShrink: Requireable<number>,

        /** Optional CSS class to apply to this column's header */
        headerClassName: Requireable<string>,

        /**
         * Optional callback responsible for rendering a column header contents.
         * ({ columnData: object, dataKey: string, disableSort: boolean, label: string, sortBy: string, sortDirection: string }): PropTypes.node
         */
        headerRenderer: Validator<TableHeaderRowRenderer>,

        /** Header label for this column */
        label: Requireable<string>,

        /** Maximum width of column; this property will only be used if :flexGrow is > 0. */
        maxWidth: Requireable<number>,

        /** Minimum width of column. */
        minWidth: Requireable<number>,

        /** Optional inline style to apply to cell */
        style: Requireable<React.CSSProperties>,

        /** Flex basis (width) for this column; This value can grow or shrink based on :flexGrow and :flexShrink properties. */
        width: Validator<number>
    };

    static defaultProps: {
        cellDataGetter: TableCellDataGetter,
        cellRenderer: TableCellRenderer,
        flexGrow: 0,
        flexShrink: 1,
        headerRenderer: TableHeaderRenderer,
        style: {}
    };
}

export type RowMouseEventHandlerParams = {
    rowData: {
        columnData: object,
        id: string,
        index: number
    },
    index: number,
    event: React.SyntheticEvent<React.MouseEvent<any>>
}

export type HeaderMouseEventHandlerParams = {
    dataKey: string,
    columnData: any,
    event: React.SyntheticEvent<React.MouseEvent<any>>
}

// ref: https://github.com/bvaughn/react-virtualized/blob/master/docs/Table.md
export type TableProps = {
    deferredMeasurementCache?: CellMeasurerCache;
    autoHeight?: boolean;
    children?: React.ReactChildren;
    className?: string;
    disableHeader?: boolean;
    estimatedRowSize?: number;
    gridClassName?: string;
    gridStyle?: any;
    headerClassName?: string;
    headerHeight: number;
    headerStyle?: any;
    height?: number;
    id?: string;
    noRowsRenderer?: () => void;
    onHeaderClick?: (params: HeaderMouseEventHandlerParams) => void;
    onRowClick?: (info: RowMouseEventHandlerParams) => void;
    onRowDoubleClick?: (info: RowMouseEventHandlerParams) => void;
    onRowMouseOut?: (info: RowMouseEventHandlerParams) => void;
    onRowMouseOver?: (info: RowMouseEventHandlerParams) => void;
    onRowsRendered?: (info: IndexRange & OverscanIndexRange) => void;
    overscanRowCount?: number;
    onScroll?: (info: ScrollEventData) => void;
    rowClassName?: string | ((info: Index) => string);
    rowCount: number;
    rowGetter?: (info: Index) => any;
    rowHeight: number | ((info: Index) => number);
    rowRenderer?: TableRowRenderer;
    headerRowRenderer?: TableHeaderRowRenderer;
    rowStyle?: React.CSSProperties | ((info: Index) => React.CSSProperties);
    scrollToAlignment?: string;
    scrollToIndex?: number;
    scrollTop?: number;
    sort?: (info: { sortBy: string, sortDirection: SortDirectionType }) => void;
    sortBy?: string;
    sortDirection?: SortDirectionType;
    style?: React.CSSProperties;
    tabIndex?: number;
    width?: number;
}

export const defaultTableCellDataGetter: TableCellDataGetter;
export const defaultTableCellRenderer: TableCellRenderer;
export const defaultTableHeaderRenderer: () => Array<React.ReactElement<TableHeaderProps>>;
export const defaultTableHeaderRowRenderer: TableHeaderRowRenderer;
export const defaultTableRowRenderer: TableRowRenderer;

export type SortDirectionStatic = {
    /**
     * Sort items in ascending order.
     * This means arranging from the lowest value to the highest (e.g. a-z, 0-9).
     */
    ASC: 'ASC',

    /**
     * Sort items in descending order.
     * This means arranging from the highest value to the lowest (e.g. z-a, 9-0).
     */
    DESC: 'DESC'
}

export const SortDirection: SortDirectionStatic

export type SortDirectionType = 'ASC' | 'DESC'

export const SortIndicator: React.StatelessComponent<{ sortDirection: SortDirectionType }>

/**
 * Table component with fixed headers and virtualized rows for improved performance with large data sets.
 * This component expects explicit width, height, and padding parameters.
 */
export class Table extends PureComponent<TableProps, {}> {
    static propTypes: {
        'aria-label': Requireable<string>,

        /**
         * Removes fixed height from the scrollingContainer so that the total height
         * of rows can stretch the window. Intended for use with WindowScroller
         */
        autoHeight: Requireable<boolean>,

        /** One or more Columns describing the data displayed in this row */
        children: Validator<Column>,

        /** Optional CSS class name */
        className: Requireable<string>,

        /** Disable rendering the header at all */
        disableHeader: Requireable<boolean>,

        /**
         * Used to estimate the total height of a Table before all of its rows have actually been measured.
         * The estimated total height is adjusted as rows are rendered.
         */
        estimatedRowSize: Validator<number>,

        /** Optional custom CSS class name to attach to inner Grid element. */
        gridClassName: Requireable<string>,

        /** Optional inline style to attach to inner Grid element. */
        gridStyle: Requireable<React.CSSProperties>,

        /** Optional CSS class to apply to all column headers */
        headerClassName: Requireable<string>,

        /** Fixed height of header row */
        headerHeight: Validator<number>,

        /**
         * Responsible for rendering a table row given an array of columns:
         * Should implement the following interface: ({
         *   className: string,
         *   columns: any[],
         *   style: any
         * }): PropTypes.node
         */
        headerRowRenderer: Requireable<TableHeaderRowRenderer>,

        /** Optional custom inline style to attach to table header columns. */
        headerStyle: Requireable<React.CSSProperties>,

        /** Fixed/available height for out DOM element */
        height: Validator<number>,

        /** Optional id */
        id: Requireable<string>,

        /** Optional renderer to be used in place of table body rows when rowCount is 0 */
        noRowsRenderer: Requireable<() => JSX.Element>,

        /**
         * Optional callback when a column's header is clicked.
         * ({ columnData: any, dataKey: string }): void
         */
        onHeaderClick: Requireable<(params: HeaderMouseEventHandlerParams) => void>,

        /**
         * Callback invoked when a user clicks on a table row.
         * ({ index: number }): void
         */
        onRowClick: Requireable<(params: RowMouseEventHandlerParams) => void>,

        /**
         * Callback invoked when a user double-clicks on a table row.
         * ({ index: number }): void
         */
        onRowDoubleClick: Requireable<(params: RowMouseEventHandlerParams) => void>,

        /**
         * Callback invoked when the mouse leaves a table row.
         * ({ index: number }): void
         */
        onRowMouseOut: Requireable<(params: RowMouseEventHandlerParams) => void>,

        /**
         * Callback invoked when a user moves the mouse over a table row.
         * ({ index: number }): void
         */
        onRowMouseOver: Requireable<(params: RowMouseEventHandlerParams) => void>,

        /**
         * Callback invoked with information about the slice of rows that were just rendered.
         * ({ startIndex, stopIndex }): void
         */
        onRowsRendered: Requireable<(params: RowMouseEventHandlerParams) => void>,

        /**
         * Callback invoked whenever the scroll offset changes within the inner scrollable region.
         * This callback can be used to sync scrolling between lists, tables, or grids.
         * ({ clientHeight, scrollHeight, scrollTop }): void
         */
        onScroll: Requireable<(params: ScrollEventData) => void>,

        /**
         * Number of rows to render above/below the visible bounds of the list.
         * These rows can help for smoother scrolling on touch devices.
         */
        overscanRowCount: Validator<number>,

        /**
         * Optional CSS class to apply to all table rows (including the header row).
         * This property can be a CSS class name (string) or a function that returns a class name.
         * If a function is provided its signature should be: ({ index: number }): string
         */
        rowClassName: Requireable<string | ((params: Index) => string)>,

        /**
         * Callback responsible for returning a data row given an index.
         * ({ index: number }): any
         */
        rowGetter: Validator<(params: Index) => any>,

        /**
         * Either a fixed row height (number) or a function that returns the height of a row given its index.
         * ({ index: number }): number
         */
        rowHeight: Validator<number | ((params: Index) => number)>,

        /** Number of rows in table. */
        rowCount: Validator<number>,

        /**
         * Responsible for rendering a table row given an array of columns:
         * Should implement the following interface: ({
         *   className: string,
         *   columns: Array,
         *   index: number,
         *   isScrolling: boolean,
         *   onRowClick: ?Function,
         *   onRowDoubleClick: ?Function,
         *   onRowMouseOver: ?Function,
         *   onRowMouseOut: ?Function,
         *   rowData: any,
         *   style: any
         * }): PropTypes.node
         */
        rowRenderer: Requireable<(props: TableRowProps) => React.ReactNode>,

        /** Optional custom inline style to attach to table rows. */
        rowStyle: Validator<React.CSSProperties | ((params: Index) => React.CSSProperties)>,

        /** See Grid#scrollToAlignment */
        scrollToAlignment: Validator<Alignment>,

        /** Row index to ensure visible (by forcefully scrolling if necessary) */
        scrollToIndex: Validator<number>,

        /** Vertical offset. */
        scrollTop: Requireable<number>,

        /**
         * Sort function to be called if a sortable header is clicked.
         * ({ sortBy: string, sortDirection: SortDirection }): void
         */
        sort: Requireable<(params: { sortBy: string, sortDirection: SortDirectionType }) => void>,

        /** Table data is currently sorted by this :dataKey (if it is sorted at all) */
        sortBy: Requireable<string>,

        /** Table data is currently sorted in this direction (if it is sorted at all) */
        sortDirection: Validator<SortDirectionType>,

        /** Optional inline style */
        style: Requireable<React.CSSProperties>,

        /** Tab index for focus */
        tabIndex: Requireable<number>,

        /** Width of list */
        width: Validator<number>
    };

    static defaultProps: {
        disableHeader: false,
        estimatedRowSize: 30,
        headerHeight: 0,
        headerStyle: {},
        noRowsRenderer: () => null,
        onRowsRendered: () => null,
        onScroll: () => null,
        overscanRowCount: 10,
        rowRenderer: TableRowRenderer,
        headerRowRenderer: TableHeaderRenderer,
        rowStyle: {},
        scrollToAlignment: 'auto',
        scrollToIndex: -1,
        style: {}
    };

    Grid: Grid;

    constructor(props: TableProps);

    forceUpdateGrid(): void;

    /** See Grid#measureAllCells */
    measureAllRows(): void;

    /** See Grid#recomputeGridSize */
    recomputeRowHeights(index?: number): void;

    /** See Grid#scrollToCell */
    scrollToRow(index?: number): void

    componentDidMount(): void;

    componentDidUpdate(): void;

    render(): JSX.Element;
}
