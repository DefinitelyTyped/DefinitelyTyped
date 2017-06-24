import { Validator, Requireable, PureComponent, Component } from 'react';
import { CellMeasurerCache } from './CellMeasurer';
import { Index, Alignment, ScrollEventData, IndexRange, OverscanIndexRange } from '../../index';
import { Grid, GridCoreProps } from './Grid';

export type TableCellDataGetterParams = {
    columnData?: any,
    dataKey: string,
    rowData: any
};
export type TableCellProps = {
    cellData?: any,
    columnData?: any,
    columnIndex: number,
    dataKey: string,
    isScrolling: boolean,
    parent?: any,
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
    /** Optional aria-label value to set on the column header */
    'aria-label'?: string,
    /**
     * Callback responsible for returning a cell's data, given its :dataKey
     * ({ columnData: any, dataKey: string, rowData: any }): any
     */
    cellDataGetter?: TableCellDataGetter;
    /**
     * Callback responsible for rendering a cell's contents.
     * ({ cellData: any, columnData: any, dataKey: string, rowData: any, rowIndex: number }): node
     */
    cellRenderer?: TableCellRenderer;
    /** Optional CSS class to apply to cell */
    className?: string;
    /** Optional additional data passed to this column's :cellDataGetter */
    columnData?: any;
    /** Uniquely identifies the row-data attribute correspnding to this cell */
    dataKey: any;
    /** If sort is enabled for the table at large, disable it for this column */
    disableSort?: boolean;
    /** Flex grow style; defaults to 0 */
    flexGrow?: number;
    /** Flex shrink style; defaults to 1 */
    flexShrink?: number;
    /** Optional CSS class to apply to this column's header */
    headerClassName?: string;
    /**
     * Optional callback responsible for rendering a column header contents.
     * ({ columnData: object, dataKey: string, disableSort: boolean, label: string, sortBy: string, sortDirection: string }): PropTypes.node
     */
    headerRenderer?: TableHeaderRenderer;
    /** Header label for this column */
    label?: string;
    /** Maximum width of column; this property will only be used if :flexGrow is > 0. */
    maxWidth?: number;
    /** Minimum width of column. */
    minWidth?: number;
    /** Optional inline style to apply to cell */
    style?: React.CSSProperties;
    /** Flex basis (width) for this column; This value can grow or shrink based on :flexGrow and :flexShrink properties. */
    width: number;
}
export class Column extends Component<ColumnProps> {
    static propTypes: {
        'aria-label': Requireable<string>,
        cellDataGetter: Requireable<TableCellDataGetter>,
        cellRenderer: Requireable<TableCellRenderer>,
        className: Requireable<string>,
        columnData: Requireable<object>,
        dataKey: Validator<string>,
        disableSort: Requireable<boolean>,
        flexGrow: Requireable<number>,
        flexShrink: Requireable<number>,
        headerClassName: Requireable<string>,
        headerRenderer: Validator<TableHeaderRowRenderer>,
        label: Requireable<string>,
        maxWidth: Requireable<number>,
        minWidth: Requireable<number>,
        style: Requireable<React.CSSProperties>,
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
export type TableProps = GridCoreProps & {
    'aria-label'?: string,
    deferredMeasurementCache?: CellMeasurerCache;
    /**
     * Removes fixed height from the scrollingContainer so that the total height
     * of rows can stretch the window. Intended for use with WindowScroller
     */
    autoHeight?: boolean;
    /** One or more Columns describing the data displayed in this row */
    children?: React.ReactElement<ColumnProps>[] | React.ReactElement<ColumnProps>;
    /** Optional CSS class name */
    className?: string;
    /** Disable rendering the header at all */
    disableHeader?: boolean;
    /**
     * Used to estimate the total height of a Table before all of its rows have actually been measured.
     * The estimated total height is adjusted as rows are rendered.
     */
    estimatedRowSize?: number;
    /** Optional custom CSS class name to attach to inner Grid element. */
    gridClassName?: string;
    /** Optional inline style to attach to inner Grid element. */
    gridStyle?: any;
    /** Optional CSS class to apply to all column headers */
    headerClassName?: string;
    /** Fixed height of header row */
    headerHeight: number;
    /**
     * Responsible for rendering a table row given an array of columns:
     * Should implement the following interface: ({
     *   className: string,
     *   columns: any[],
     *   style: any
     * }): PropTypes.node
     */
    headerRowRenderer?: TableHeaderRowRenderer;
    /** Optional custom inline style to attach to table header columns. */
    headerStyle?: any;
    /** Fixed/available height for out DOM element */
    height?: number;
    /** Optional id */
    id?: string;
    /** Optional renderer to be used in place of table body rows when rowCount is 0 */
    noRowsRenderer?: () => void;
    /**
     * Optional callback when a column's header is clicked.
     * ({ columnData: any, dataKey: string }): void
     */
    onHeaderClick?: (params: HeaderMouseEventHandlerParams) => void;
    /**
     * Callback invoked when a user clicks on a table row.
     * ({ index: number }): void
     */
    onRowClick?: (info: RowMouseEventHandlerParams) => void;
    /**
     * Callback invoked when a user double-clicks on a table row.
     * ({ index: number }): void
     */
    onRowDoubleClick?: (info: RowMouseEventHandlerParams) => void;
    /**
     * Callback invoked when the mouse leaves a table row.
     * ({ index: number }): void
     */
    onRowMouseOut?: (info: RowMouseEventHandlerParams) => void;
    /**
     * Callback invoked when a user moves the mouse over a table row.
     * ({ index: number }): void
     */
    onRowMouseOver?: (info: RowMouseEventHandlerParams) => void;
    /**
     * Callback invoked with information about the slice of rows that were just rendered.
     * ({ startIndex, stopIndex }): void
     */
    onRowsRendered?: (info: IndexRange & OverscanIndexRange) => void;
    /**
     * Callback invoked whenever the scroll offset changes within the inner scrollable region.
     * This callback can be used to sync scrolling between lists, tables, or grids.
     * ({ clientHeight, scrollHeight, scrollTop }): void
     */
    onScroll?: (info: ScrollEventData) => void;
    /**
     * Number of rows to render above/below the visible bounds of the list.
     * These rows can help for smoother scrolling on touch devices.
     */
    overscanRowCount?: number;
    /**
     * Optional CSS class to apply to all table rows (including the header row).
     * This property can be a CSS class name (string) or a function that returns a class name.
     * If a function is provided its signature should be: ({ index: number }): string
     */
    rowClassName?: string | ((info: Index) => string);
    /**
     * Callback responsible for returning a data row given an index.
     * ({ index: number }): any
     */
    rowGetter?: (info: Index) => any;
    /**
     * Either a fixed row height (number) or a function that returns the height of a row given its index.
     * ({ index: number }): number
     */
    rowHeight: number | ((info: Index) => number);
    /** Number of rows in table. */
    rowCount: number;
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
    rowRenderer?: TableRowRenderer;
    /** Optional custom inline style to attach to table rows. */
    rowStyle?: React.CSSProperties | ((info: Index) => React.CSSProperties);
    /** See Grid#scrollToAlignment */
    scrollToAlignment?: string;
    /** Row index to ensure visible (by forcefully scrolling if necessary) */
    scrollToIndex?: number;
    /** Vertical offset. */
    scrollTop?: number;
    /**
     * Sort function to be called if a sortable header is clicked.
     * ({ sortBy: string, sortDirection: SortDirection }): void
     */
    sort?: (info: { sortBy: string, sortDirection: SortDirectionType }) => void;
    /** Table data is currently sorted by this :dataKey (if it is sorted at all) */
    sortBy?: string;
    /** Table data is currently sorted in this direction (if it is sorted at all) */
    sortDirection?: SortDirectionType;
    /** Optional inline style */
    style?: React.CSSProperties;
    /** Tab index for focus */
    tabIndex?: number;
    /** Width of list */
    width?: number;
}

export const defaultTableCellDataGetter: TableCellDataGetter;
export const defaultTableCellRenderer: TableCellRenderer;
export const defaultTableHeaderRenderer: () => React.ReactElement<TableHeaderProps>[];
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
export class Table extends PureComponent<TableProps> {
    static propTypes: {
        'aria-label': Requireable<string>,
        autoHeight: Requireable<boolean>,
        children: Validator<Column>,
        className: Requireable<string>,
        disableHeader: Requireable<boolean>,
        estimatedRowSize: Validator<number>,
        gridClassName: Requireable<string>,
        gridStyle: Requireable<React.CSSProperties>,
        headerClassName: Requireable<string>,
        headerHeight: Validator<number>,
        headerRowRenderer: Requireable<TableHeaderRowRenderer>,
        headerStyle: Requireable<React.CSSProperties>,
        height: Validator<number>,
        id: Requireable<string>,
        noRowsRenderer: Requireable<() => JSX.Element>,
        onHeaderClick: Requireable<(params: HeaderMouseEventHandlerParams) => void>,
        onRowClick: Requireable<(params: RowMouseEventHandlerParams) => void>,
        onRowDoubleClick: Requireable<(params: RowMouseEventHandlerParams) => void>,
        onRowMouseOut: Requireable<(params: RowMouseEventHandlerParams) => void>,
        onRowMouseOver: Requireable<(params: RowMouseEventHandlerParams) => void>,
        onRowsRendered: Requireable<(params: RowMouseEventHandlerParams) => void>,
        onScroll: Requireable<(params: ScrollEventData) => void>,
        overscanRowCount: Validator<number>,
        rowClassName: Requireable<string | ((params: Index) => string)>,
        rowGetter: Validator<(params: Index) => any>,
        rowHeight: Validator<number | ((params: Index) => number)>,
        rowCount: Validator<number>,
        rowRenderer: Requireable<(props: TableRowProps) => React.ReactNode>,
        rowStyle: Validator<React.CSSProperties | ((params: Index) => React.CSSProperties)>,
        scrollToAlignment: Validator<Alignment>,
        scrollToIndex: Validator<number>,
        scrollTop: Requireable<number>,
        sort: Requireable<(params: { sortBy: string, sortDirection: SortDirectionType }) => void>,
        sortBy: Requireable<string>,
        sortDirection: Validator<SortDirectionType>,
        style: Requireable<React.CSSProperties>,
        tabIndex: Requireable<number>,
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

    /** See Grid#getOffsetForCell */
    getOffsetForRow(params: {
        alignment?: Alignment,
        index?: number
    }): number;

    /** See Grid#scrollToPosition */
    scrollToPosition(scrollTop?: number): void;

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
