import { Validator, Requireable, PureComponent } from 'react'
import { List } from './List';
import { Table } from './Table';
import { CellMeasurerCache } from './CellMeasurer';
import { Index, Map, Alignment } from '../../index';

export type GridCellProps = {
    columnIndex: number;
    isScrolling: boolean;
    isVisible: boolean;
    key: string;
    parent: Grid | List | Table;
    rowIndex: number;
    style: React.CSSProperties;
};
export type GridCellRenderer = (props: GridCellProps) => React.ReactNode;

export type ConfigureParams = {
    cellCount: number,
    estimatedCellSize: number
};
export type ContainerSizeAndOffset = {
    containerSize: number,
    offset: number
};
export type SizeAndPositionData = {
    offset: number,
    size: number
};
export type GetVisibleCellRangeParams = {
    containerSize: number,
    offset: number
};
export type VisibleCellRange = {
    start: number;
    stop: number;
};
export type ScrollParams = {
    clientHeight: number,
    clientWidth: number,
    scrollHeight: number,
    scrollLeft: number,
    scrollTop: number,
    scrollWidth: number
};
export type SectionRenderedParams = {
    columnStartIndex: number,
    columnStopIndex: number,
    rowStartIndex: number,
    rowStopIndex: number
};
export type OverscanIndicesGetterParams = {
    cellCount: number,
    overscanCellsCount: number,
    scrollDirection: number,
    startIndex: number,
    stopIndex: number
};
export type OverscanIndices = {
    overscanStartIndex: number,
    overscanStopIndex: number
};

export type CellSizeAndPositionManager = {
    areOffsetsAdjusted(): boolean;
    configure({
            cellCount,
        estimatedCellSize
        }: ConfigureParams): void;
    getCellCount(): number;
    getEstimatedCellSize(): number;
    getLastMeasuredIndex(): number;
    getOffsetAdjustment({
            containerSize,
        offset // safe
    }: ContainerSizeAndOffset): number;
    /**
   * This method returns the size and position for the cell at the specified index.
   * It just-in-time calculates (or used cached values) for cells leading up to the index.
   */
    getSizeAndPositionOfCell(index: number): SizeAndPositionData;
    getSizeAndPositionOfLastMeasuredCell(): SizeAndPositionData;
    /**
   * Total size of all cells being measured.
   * This value will be completedly estimated initially.
   * As cells as measured the estimate will be updated.
   */
    getTotalSize(): number;
    /**
     * Determines a new offset that ensures a certain cell is visible, given the current offset.
     * If the cell is already visible then the current offset will be returned.
     * If the current offset is too great or small, it will be adjusted just enough to ensure the specified index is visible.
     *
     * @param align Desired alignment within container; one of "auto" (default), "start", or "end"
     * @param containerSize Size (width or height) of the container viewport
     * @param currentOffset Container's current (x or y) offset
     * @param totalSize Total size (width or height) of all cells
     * @return Offset to use to ensure the specified cell is visible
     */
    getUpdatedOffsetForIndex(params: {
        align: string,
        containerSize: number,
        currentOffset: number,
        targetIndex: number
    }): number;
    getVisibleCellRange(params: GetVisibleCellRangeParams): VisibleCellRange;
    /**
     * Clear all cached values for cells after the specified index.
     * This method should be called for any cell that has changed its size.
     * It will not immediately perform any calculations; they'll be performed the next time getSizeAndPositionOfCell() is called.
     */
    resetCell(index: number): void
}

export type GridCellRangeProps = {
    cellCache: Map<any>,
    cellRenderer: GridCellRenderer,
    columnSizeAndPositionManager: CellSizeAndPositionManager,
    columnStartIndex: number,
    columnStopIndex: number,
    isScrolling: boolean,
    rowSizeAndPositionManager: CellSizeAndPositionManager,
    rowStartIndex: number,
    rowStopIndex: number,
    scrollLeft: number,
    scrollTop: number
}
export type GridCellRangeRenderer = (params: GridCellRangeProps) => React.ReactNode[];
// TODO  add proper typing
export type GridProps = {
    'aria-label'?: string;
    autoContainerWidth?: boolean;
    autoHeight?: boolean;
    cellRenderer: GridCellRenderer;
    cellRangeRenderer?: GridCellRangeRenderer;
    className?: string;
    columnCount: number;
    columnWidth: number | ((params: Index) => number);
    containerStyle?: React.CSSProperties;
    deferredMeasurementCache?: CellMeasurerCache;
    estimatedColumnSize?: number;
    estimatedRowSize?: number;
    getScrollbarSize?: () => number;
    height: number;
    id?: string;
    noContentRenderer?: () => React.ReactNode;
    onScroll?: (params: ScrollParams) => any;
    onSectionRendered?: (params: SectionRenderedParams) => any;
    overscanColumnCount?: number;
    overscanIndicesGetter?: (params: OverscanIndicesGetterParams) => OverscanIndices;
    overscanRowCount?: number;
    rowHeight: number | ((params: Index) => number);
    rowCount: number;
    scrollingResetTimeInterval?: number;
    scrollLeft?: number;
    scrollToAlignment?: Alignment;
    scrollToColumn?: number;
    scrollTop?: number;
    scrollToRow?: number;
    style?: React.CSSProperties;
    tabIndex?: number;
    width: number;
};

export type ScrollDirection = 'horizontal' | 'vertical';

export type GridState = {
    isScrolling: boolean,
    scrollDirectionHorizontal: ScrollDirection,
    scrollDirectionVertical: ScrollDirection,
    scrollLeft: number,
    scrollTop: number
};

/**
 * Specifies the number of miliseconds during which to disable pointer events while a scroll is in progress.
 * This improves performance and makes scrolling smoother.
 */
export const DEFAULT_SCROLLING_RESET_TIME_INTERVAL = 150

/**
 * Renders tabular data with virtualization along the vertical and horizontal axes.
 * Row heights and column widths must be known ahead of time and specified as properties.
 */
export class Grid extends PureComponent<GridProps, GridState> {
    static propTypes: {
        'aria-label': Requireable<string>,

        /**
         * Set the width of the inner scrollable container to 'auto'.
         * This is useful for single-column Grids to ensure that the column doesn't extend below a vertical scrollbar.
         */
        autoContainerWidth: Requireable<boolean>,

        /**
         * Removes fixed height from the scrollingContainer so that the total height
         * of rows can stretch the window. Intended for use with WindowScroller
         */
        autoHeight: Requireable<boolean>,

        /**
         * Responsible for rendering a cell given an row and column index.
         * Should implement the following interface: ({ columnIndex: number, rowIndex: number }): PropTypes.node
         */
        cellRenderer: Validator< (props: GridCellProps) => React.ReactNode>,

        /**
         * Responsible for rendering a group of cells given their index ranges.
         * Should implement the following interface: ({
         *   cellCache: Map,
         *   cellRenderer: Function,
         *   columnSizeAndPositionManager: CellSizeAndPositionManager,
         *   columnStartIndex: number,
         *   columnStopIndex: number,
         *   isScrolling: boolean,
         *   rowSizeAndPositionManager: CellSizeAndPositionManager,
         *   rowStartIndex: number,
         *   rowStopIndex: number,
         *   scrollLeft: number,
         *   scrollTop: number
         * }): Array<PropTypes.node>
         */
        cellRangeRenderer: Validator<(params: GridCellRangeProps) => React.ReactNode[]>,

        /**
         * Optional custom CSS class name to attach to root Grid element.
         */
        className: Requireable<string>,

        /**
         * Number of columns in grid.
         */
        columnCount: Validator<number>,

        /**
         * Either a fixed column width (number) or a function that returns the width of a column given its index.
         * Should implement the following interface: (index: number): number
         */
        columnWidth: Validator<number | ((index: number) => number)>,

        /** Optional inline style applied to inner cell-container */
        containerStyle: Requireable<React.CSSProperties>,

        /**
         * If CellMeasurer is used to measure this Grid's children, this should be a pointer to its CellMeasurerCache.
         * A shared CellMeasurerCache reference enables Grid and CellMeasurer to share measurement data.
         */
        deferredMeasurementCache: Requireable<CellMeasurerCache>,

        /**
         * Used to estimate the total width of a Grid before all of its columns have actually been measured.
         * The estimated total width is adjusted as columns are rendered.
         */
        estimatedColumnSize: Validator<number>,

        /**
         * Used to estimate the total height of a Grid before all of its rows have actually been measured.
         * The estimated total height is adjusted as rows are rendered.
         */
        estimatedRowSize: Validator<number>,

        /**
         * Exposed for testing purposes only.
         */
        getScrollbarSize: Validator<() => number>,

        /**
         * Height of Grid; this property determines the number of visible (vs virtualized) rows.
         */
        height: Validator<number>,

        /**
         * Optional custom id to attach to root Grid element.
         */
        id: Requireable<string>,

        /**
         * Optional renderer to be used in place of rows when either :rowCount or :columnCount is 0.
         */
        noContentRenderer: Requireable<() => JSX.Element>,

        /**
         * Callback invoked whenever the scroll offset changes within the inner scrollable region.
         * This callback can be used to sync scrolling between lists, tables, or grids.
         * ({ clientHeight, clientWidth, scrollHeight, scrollLeft, scrollTop, scrollWidth }): void
         */
        onScroll: Validator<(params: ScrollParams) => void>,

        /**
         * Callback invoked with information about the section of the Grid that was just rendered.
         * ({ columnStartIndex, columnStopIndex, rowStartIndex, rowStopIndex }): void
         */
        onSectionRendered: Validator<(params: SectionRenderedParams) => void>,

        /**
         * Number of columns to render before/after the visible section of the grid.
         * These columns can help for smoother scrolling on touch devices or browsers that send scroll events infrequently.
         */
        overscanColumnCount: Validator<number>,

        /**
         * Calculates the number of cells to overscan before and after a specified range.
         * This function ensures that overscanning doesn't exceed the available cells.
         * Should implement the following interface: ({
         *   cellCount: number,
         *   overscanCellsCount: number,
         *   scrollDirection: number,
         *   startIndex: number,
         *   stopIndex: number
         * }): {overscanStartIndex: number, overscanStopIndex: number}
         */
        overscanIndicesGetter: Validator<(params: OverscanIndicesGetterParams) => OverscanIndices>,

        /**
         * Number of rows to render above/below the visible section of the grid.
         * These rows can help for smoother scrolling on touch devices or browsers that send scroll events infrequently.
         */
        overscanRowCount: Validator<number>,

        /**
         * ARIA role for the grid element.
         */
        role: Requireable<string>,

        /**
         * Either a fixed row height (number) or a function that returns the height of a row given its index.
         * Should implement the following interface: ({ index: number }): number
         */
        rowHeight: Validator<number | ((params: Index) => number)>,

        /**
         * Number of rows in grid.
         */
        rowCount: Validator<number>,

        /** Wait this amount of time after the last scroll event before resetting Grid `pointer-events`. */
        scrollingResetTimeInterval: Requireable<number>,

        /** Horizontal offset. */
        scrollLeft: Requireable<number>,

        /**
         * Controls scroll-to-cell behavior of the Grid.
         * The default ("auto") scrolls the least amount possible to ensure that the specified cell is fully visible.
         * Use "start" to align cells to the top/left of the Grid and "end" to align bottom/right.
         */
        scrollToAlignment: Validator<Alignment>,

        /**
         * Column index to ensure visible (by forcefully scrolling if necessary)
         */
        scrollToColumn: Validator<number>,

        /** Vertical offset. */
        scrollTop: Requireable<number>,

        /**
         * Row index to ensure visible (by forcefully scrolling if necessary)
         */
        scrollToRow: Validator<number>,

        /** Optional inline style */
        style: Requireable<React.CSSProperties>,

        /** Tab index for focus */
        tabIndex: Requireable<number>,

        /**
         * Width of Grid; this property determines the number of visible (vs virtualized) columns.
         */
        width: Validator<number>
    };

    static defaultProps: {
        'aria-label': 'grid',
        cellRangeRenderer: GridCellRangeRenderer,
        estimatedColumnSize: 100,
        estimatedRowSize: 30,
        getScrollbarSize: () => number,
        noContentRenderer: () => null,
        onScroll: () => null,
        onSectionRendered: () => null,
        overscanColumnCount: 0,
        overscanIndicesGetter: OverscanIndicesGetterParams,
        overscanRowCount: 10,
        role: 'grid',
        scrollingResetTimeInterval: typeof DEFAULT_SCROLLING_RESET_TIME_INTERVAL,
        scrollToAlignment: 'auto',
        scrollToColumn: -1,
        scrollToRow: -1,
        style: {},
        tabIndex: 0
    };

    constructor(props: GridProps, context: any);

    /**
     * Invalidate Grid size and recompute visible cells.
     * This is a deferred wrapper for recomputeGridSize().
     * It sets a flag to be evaluated on cDM/cDU to avoid unnecessary renders.
     * This method is intended for advanced use-cases like CellMeasurer.
     */
    // @TODO (bvaughn) Add automated test coverage for this.
    invalidateCellSizeAfterRender(params: {
        columnIndex: number,
        rowIndex: number
    }): void

    /**
     * Pre-measure all columns and rows in a Grid.
     * Typically cells are only measured as needed and estimated sizes are used for cells that have not yet been measured.
     * This method ensures that the next call to getTotalSize() returns an exact size (as opposed to just an estimated one).
     */
    measureAllCells(): void;

    /**
     * Forced recompute of row heights and column widths.
     * This function should be called if dynamic column or row sizes have changed but nothing else has.
     * Since Grid only receives :columnCount and :rowCount it has no way of detecting when the underlying data changes.
     */
    recomputeGridSize(params?: {
        columnIndex?: number,
        rowIndex?: number
    }): void;

    /**
     * Ensure column and row are visible.
     */
    scrollToCell(params: {
        columnIndex: number,
        rowIndex: number
    }): void;

    componentDidMount(): void;

    /**
     * @private
     * This method updates scrollLeft/scrollTop in state for the following conditions:
     * 1) New scroll-to-cell props have been set
     */
    componentDidUpdate(prevProps: GridProps, prevState: GridState): void;

    componentWillMount(): void;

    componentWillUnmount(): void;

    /**
     * @private
     * This method updates scrollLeft/scrollTop in state for the following conditions:
     * 1) Empty content (0 rows or columns)
     * 2) New scroll props overriding the current state
     * 3) Cells-count or cells-size has changed, making previous scroll offsets invalid
     */
    componentWillReceiveProps(nextProps: GridProps): void;

    componentWillUpdate(nextProps: GridProps, nextState: GridState): void;

    render(): JSX.Element;
}

export const defaultCellRangeRenderer: GridCellRangeRenderer;