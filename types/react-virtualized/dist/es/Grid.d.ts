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
export type SCROLL_DIRECTION_HORIZONTAL = 'horizontal';
export type SCROLL_DIRECTION_VERTICAL = 'vertical';
export type OverscanIndicesGetterParams = {
    direction?: SCROLL_DIRECTION_HORIZONTAL | SCROLL_DIRECTION_VERTICAL;
    cellCount: number;
    overscanCellsCount: number;
    scrollDirection: SCROLL_DIRECTION_HORIZONTAL | SCROLL_DIRECTION_VERTICAL;
    startIndex: number;
    stopIndex: number;
};
export type OverscanIndices = {
    overscanStartIndex: number,
    overscanStopIndex: number
};
export type OverscanIndicesGetter = (params: OverscanIndicesGetterParams) => OverscanIndices;

export type ScrollOffset = {
    scrollLeft: number,
    scrollTop: number
}

export type CellSizeAndPositionManager = {
    areOffsetsAdjusted(): boolean;
    configure({ cellCount, estimatedCellSize }: ConfigureParams): void;
    getCellCount(): number;
    getEstimatedCellSize(): number;
    getLastMeasuredIndex(): number;
    getOffsetAdjustment({ containerSize, offset/*safe*/ }: ContainerSizeAndOffset): number;
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

export type GridCoreProps = {
    'aria-label'?: string;
    /**
     * Set the width of the inner scrollable container to 'auto'.
     * This is useful for single-column Grids to ensure that the column doesn't extend below a vertical scrollbar.
     */
    autoContainerWidth?: boolean;
    /**
     * Removes fixed height from the scrollingContainer so that the total height of rows can stretch the window.
     * Intended for use with WindowScroller
     */
    autoHeight?: boolean;
    /**
     * Removes fixed width from the scrollingContainer so that the total width of rows can stretch the window.
     * Intended for use with WindowScroller
     */
    autoWidth?: boolean;
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
    cellRangeRenderer?: GridCellRangeRenderer;
    /**
     * Optional custom CSS class name to attach to root Grid element.
     */
    className?: string;
    /** Optional inline style applied to inner cell-container */
    containerStyle?: React.CSSProperties;
    /**
     * If CellMeasurer is used to measure this Grid's children, this should be a pointer to its CellMeasurerCache.
     * A shared CellMeasurerCache reference enables Grid and CellMeasurer to share measurement data.
     */
    deferredMeasurementCache?: CellMeasurerCache;
    /**
     * Used to estimate the total width of a Grid before all of its columns have actually been measured.
     * The estimated total width is adjusted as columns are rendered.
     */
    estimatedColumnSize?: number;
    /**
     * Used to estimate the total height of a Grid before all of its rows have actually been measured.
     * The estimated total height is adjusted as rows are rendered.
     */
    estimatedRowSize?: number;
    /**
     * Exposed for testing purposes only.
     */
    getScrollbarSize?: () => number;
    /**
     * Height of Grid; this property determines the number of visible (vs virtualized) rows.
     */
    height: number;
    /**
     * Optional custom id to attach to root Grid element.
     */
    id?: string;
    /**
     * Override internal is-scrolling state tracking.
     * This property is primarily intended for use with the WindowScroller component.
     */
    isScrolling?: boolean,
    /**
     * Optional renderer to be used in place of rows when either :rowCount or :columnCount is 0.
     */
    noContentRenderer?: () => React.ReactNode;
    /**
     * Callback invoked whenever the scroll offset changes within the inner scrollable region.
     * This callback can be used to sync scrolling between lists, tables, or grids.
     * ({ clientHeight, clientWidth, scrollHeight, scrollLeft, scrollTop, scrollWidth }): void
     */
    onScroll?: (params: ScrollParams) => any;
    /**
     * Callback invoked with information about the section of the Grid that was just rendered.
     * ({ columnStartIndex, columnStopIndex, rowStartIndex, rowStopIndex }): void
     */
    onSectionRendered?: (params: SectionRenderedParams) => any;
    /**
     * Number of columns to render before/after the visible section of the grid.
     * These columns can help for smoother scrolling on touch devices or browsers that send scroll events infrequently.
     */
    overscanColumnCount?: number;
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
    overscanIndicesGetter?: OverscanIndicesGetter;
    /**
     * Number of rows to render above/below the visible section of the grid.
     * These rows can help for smoother scrolling on touch devices or browsers that send scroll events infrequently.
     */
    overscanRowCount?: number;
    /**
     * ARIA role for the grid element.
     */
    role?: string;
    /**
     * Either a fixed row height (number) or a function that returns the height of a row given its index.
     * Should implement the following interface: ({ index: number }): number
     */
    rowHeight: number | ((params: Index) => number);
    /**
     * Number of rows in grid.
     */
    rowCount: number;
    /** Wait this amount of time after the last scroll event before resetting Grid `pointer-events`. */
    scrollingResetTimeInterval?: number;
    /** Horizontal offset. */
    scrollLeft?: number;
    /**
     * Controls scroll-to-cell behavior of the Grid.
     * The default ("auto") scrolls the least amount possible to ensure that the specified cell is fully visible.
     * Use "start" to align cells to the top/left of the Grid and "end" to align bottom/right.
     */
    scrollToAlignment?: Alignment;
    /**
     * Column index to ensure visible (by forcefully scrolling if necessary)
     */
    scrollToColumn?: number;
    /** Vertical offset. */
    scrollTop?: number;
    /**
     * Row index to ensure visible (by forcefully scrolling if necessary)
     */
    scrollToRow?: number;
    /** Optional inline style */
    style?: React.CSSProperties;
    /** Tab index for focus */
    tabIndex?: number;
    /**
     * Width of Grid; this property determines the number of visible (vs virtualized) columns.
     */
    width: number;
}

export type GridProps = GridCoreProps & {
    /**
     * Responsible for rendering a cell given an row and column index.
     * Should implement the following interface: ({ columnIndex: number, rowIndex: number }): PropTypes.node
     */
    cellRenderer: GridCellRenderer;
    /**
     * Number of columns in grid.
     */
    columnCount: number;
    /**
     * Either a fixed column width (number) or a function that returns the width of a column given its index.
     * Should implement the following interface: (index: number): number
     */
    columnWidth: number | ((params: Index) => number);
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
        autoContainerWidth: Requireable<boolean>,
        autoHeight: Requireable<boolean>,
        cellRenderer: Validator<(props: GridCellProps) => React.ReactNode>,
        cellRangeRenderer: Validator<(params: GridCellRangeProps) => React.ReactNode[]>,
        className: Requireable<string>,
        columnCount: Validator<number>,
        columnWidth: Validator<number | ((index: number) => number)>,
        containerStyle: Requireable<React.CSSProperties>,
        deferredMeasurementCache: Requireable<CellMeasurerCache>,
        estimatedColumnSize: Validator<number>,
        estimatedRowSize: Validator<number>,
        getScrollbarSize: Validator<() => number>,
        height: Validator<number>,
        id: Requireable<string>,
        isScrolling: Requireable<boolean>,
        noContentRenderer: Requireable<() => JSX.Element>,
        onScroll: Validator<(params: ScrollParams) => void>,
        onSectionRendered: Validator<(params: SectionRenderedParams) => void>,
        overscanColumnCount: Validator<number>,
        overscanIndicesGetter: Validator<OverscanIndicesGetter>,
        overscanRowCount: Validator<number>,
        role: Requireable<string>,
        rowHeight: Validator<number | ((params: Index) => number)>,
        rowCount: Validator<number>,
        scrollingResetTimeInterval: Requireable<number>,
        scrollLeft: Requireable<number>,
        scrollToAlignment: Validator<Alignment>,
        scrollToColumn: Validator<number>,
        scrollTop: Requireable<number>,
        scrollToRow: Validator<number>,
        style: Requireable<React.CSSProperties>,
        tabIndex: Requireable<number>,
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
     * Gets offsets for a given cell and alignment.
     */
    getOffsetForCell(params?: {
        alignment?: Alignment,
        columnIndex?: number,
        rowIndex?: number
    }): ScrollOffset

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

    /**
     * Scroll to the specified offset(s).
     * Useful for animating position changes.
     */
    scrollToPosition(params?: {
        scrollLeft: number,
        scrollTop: number
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

export const accessibilityOverscanIndicesGetter: OverscanIndicesGetter

export const defaultOverscanIndicesGetter: OverscanIndicesGetter;
