import { PureComponent } from "react";
import { Alignment, Index, Map, OverscanIndexRange } from "../../index";
import { CellMeasurerCache, CellMeasurerCacheInterface, MeasuredCellParent } from "./CellMeasurer";

export type RenderedSection = {
    columnOverscanStartIndex: number;
    columnOverscanStopIndex: number;
    columnStartIndex: number;
    columnStopIndex: number;
    rowOverscanStartIndex: number;
    rowOverscanStopIndex: number;
    rowStartIndex: number;
    rowStopIndex: number;
};

export type GridCellProps = {
    columnIndex: number;
    isScrolling: boolean;
    isVisible: boolean;
    key: string;
    parent: React.Component<GridCoreProps> & MeasuredCellParent;
    rowIndex: number;
    style: React.CSSProperties;
};
export type GridCellRenderer = (props: GridCellProps) => React.ReactNode;

export type ConfigureParams = {
    cellCount: number;
    estimatedCellSize: number;
};
export type ContainerSizeAndOffset = {
    containerSize: number;
    offset: number;
};
export type SizeAndPositionData = {
    offset: number;
    size: number;
};
export type GetVisibleCellRangeParams = {
    containerSize: number;
    offset: number;
};
export type VisibleCellRange = {
    start: number;
    stop: number;
};
export type ScrollParams = {
    clientHeight: number;
    clientWidth: number;
    scrollHeight: number;
    scrollLeft: number;
    scrollTop: number;
    scrollWidth: number;
};
export type ScrollbarPresenceParams = {
    horizontal: boolean;
    size: number;
    vertical: boolean;
};
export type SectionRenderedParams = RenderedSection;
export type SCROLL_DIRECTION_HORIZONTAL = "horizontal";
export type SCROLL_DIRECTION_VERTICAL = "vertical";
export type SCROLL_DIRECTION_BACKWARD = -1;
export type SCROLL_DIRECTION_FORWARD = 1;
export type OverscanIndicesGetterParams = {
    direction?: SCROLL_DIRECTION_HORIZONTAL | SCROLL_DIRECTION_VERTICAL | undefined;
    cellCount: number;
    overscanCellsCount: number;
    scrollDirection: SCROLL_DIRECTION_BACKWARD | SCROLL_DIRECTION_FORWARD;
    startIndex: number;
    stopIndex: number;
};

export type OverscanIndices = OverscanIndexRange;

export type OverscanIndicesGetter = (params: OverscanIndicesGetterParams) => OverscanIndices;

export type ScrollOffset = {
    scrollLeft: number;
    scrollTop: number;
};

export type CellSizeAndPositionManager = {
    areOffsetsAdjusted(): boolean;
    configure({ cellCount, estimatedCellSize }: ConfigureParams): void;
    getCellCount(): number;
    getEstimatedCellSize(): number;
    getLastMeasuredIndex(): number;
    getOffsetAdjustment({ containerSize, offset /*safe*/ }: ContainerSizeAndOffset): number;
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
        align: string;
        containerSize: number;
        currentOffset: number;
        targetIndex: number;
    }): number;
    getVisibleCellRange(params: GetVisibleCellRangeParams): VisibleCellRange;
    /**
     * Clear all cached values for cells after the specified index.
     * This method should be called for any cell that has changed its size.
     * It will not immediately perform any calculations; they'll be performed the next time getSizeAndPositionOfCell() is called.
     */
    resetCell(index: number): void;
};

export type GridCellRangeProps = {
    cellCache: Map<any>;
    cellRenderer: GridCellRenderer;
    columnSizeAndPositionManager: CellSizeAndPositionManager;
    columnStartIndex: number;
    columnStopIndex: number;
    isScrolling: boolean;
    isScrollingOptOut: boolean;
    rowSizeAndPositionManager: CellSizeAndPositionManager;
    rowStartIndex: number;
    rowStopIndex: number;
    scrollLeft: number;
    scrollTop: number;
    deferredMeasurementCache: CellMeasurerCache;
    horizontalOffsetAdjustment: number;
    parent: React.Component<GridCoreProps> & MeasuredCellParent;
    styleCache: Map<React.CSSProperties>;
    verticalOffsetAdjustment: number;
    visibleColumnIndices: VisibleCellRange;
    visibleRowIndices: VisibleCellRange;
};
export type GridCellRangeRenderer = (params: GridCellRangeProps) => React.ReactNode[];

export type GridCoreProps = {
    "aria-label"?: string | undefined;
    "aria-readonly"?: boolean | undefined;
    /**
     * Set the width of the inner scrollable container to 'auto'.
     * This is useful for single-column Grids to ensure that the column doesn't extend below a vertical scrollbar.
     */
    autoContainerWidth?: boolean | undefined;
    /**
     * Removes fixed height from the scrollingContainer so that the total height of rows can stretch the window.
     * Intended for use with WindowScroller
     */
    autoHeight?: boolean | undefined;
    /**
     * Removes fixed width from the scrollingContainer so that the total width of rows can stretch the window.
     * Intended for use with WindowScroller
     */
    autoWidth?: boolean | undefined;
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
    cellRangeRenderer?: GridCellRangeRenderer | undefined;
    /**
     * Optional custom CSS class name to attach to root Grid element.
     */
    className?: string | undefined;
    /** Unfiltered props for the Grid container. */
    containerProps?: object | undefined;
    /** ARIA role for the cell-container.  */
    containerRole?: string | undefined;
    /** Optional inline style applied to inner cell-container */
    containerStyle?: React.CSSProperties | undefined;
    /**
     * If CellMeasurer is used to measure this Grid's children, this should be a pointer to its CellMeasurerCache.
     * A shared CellMeasurerCache reference enables Grid and CellMeasurer to share measurement data.
     */
    deferredMeasurementCache?: CellMeasurerCacheInterface | undefined;
    /**
     * Used to estimate the total width of a Grid before all of its columns have actually been measured.
     * The estimated total width is adjusted as columns are rendered.
     */
    estimatedColumnSize?: number | undefined;
    /**
     * Used to estimate the total height of a Grid before all of its rows have actually been measured.
     * The estimated total height is adjusted as rows are rendered.
     */
    estimatedRowSize?: number | undefined;
    /**
     * Exposed for testing purposes only.
     */
    getScrollbarSize?: (() => number) | undefined;
    /**
     * Height of Grid; this property determines the number of visible (vs virtualized) rows.
     */
    height: number;
    /**
     * Optional custom id to attach to root Grid element.
     */
    id?: string | undefined;
    /**
     * Override internal is-scrolling state tracking.
     * This property is primarily intended for use with the WindowScroller component.
     */
    isScrolling?: boolean | undefined;
    /**
     * Optional renderer to be used in place of rows when either :rowCount or :columnCount is 0.
     */
    noContentRenderer?: (() => React.ReactNode) | undefined;
    /**
     * Callback invoked whenever the scroll offset changes within the inner scrollable region.
     * This callback can be used to sync scrolling between lists, tables, or grids.
     * ({ clientHeight, clientWidth, scrollHeight, scrollLeft, scrollTop, scrollWidth }): void
     */
    onScroll?: ((params: ScrollParams) => any) | undefined;
    /**
     * Called whenever a horizontal or vertical scrollbar is added or removed.
     * ({ horizontal: boolean, size: number, vertical: boolean }): void
     */
    onScrollbarPresenceChange?: ((params: ScrollbarPresenceParams) => any) | undefined;
    /**
     * Callback invoked with information about the section of the Grid that was just rendered.
     * ({ columnStartIndex, columnStopIndex, rowStartIndex, rowStopIndex }): void
     */
    onSectionRendered?: ((params: SectionRenderedParams) => any) | undefined;
    /**
     * Number of columns to render before/after the visible section of the grid.
     * These columns can help for smoother scrolling on touch devices or browsers that send scroll events infrequently.
     */
    overscanColumnCount?: number | undefined;
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
    overscanIndicesGetter?: OverscanIndicesGetter | undefined;
    /**
     * Number of rows to render above/below the visible section of the grid.
     * These rows can help for smoother scrolling on touch devices or browsers that send scroll events infrequently.
     */
    overscanRowCount?: number | undefined;
    /**
     * ARIA role for the grid element.
     */
    role?: string | undefined;
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
    scrollingResetTimeInterval?: number | undefined;
    /** Horizontal offset. */
    scrollLeft?: number | undefined;
    /**
     * Controls scroll-to-cell behavior of the Grid.
     * The default ("auto") scrolls the least amount possible to ensure that the specified cell is fully visible.
     * Use "start" to align cells to the top/left of the Grid and "end" to align bottom/right.
     */
    scrollToAlignment?: Alignment | undefined;
    /**
     * Column index to ensure visible (by forcefully scrolling if necessary)
     */
    scrollToColumn?: number | undefined;
    /** Vertical offset. */
    scrollTop?: number | undefined;
    /**
     * Row index to ensure visible (by forcefully scrolling if necessary)
     */
    scrollToRow?: number | undefined;
    /** Optional inline style */
    style?: React.CSSProperties | undefined;
    /** Tab index for focus */
    tabIndex?: number | null | undefined;
    /**
     * Width of Grid; this property determines the number of visible (vs virtualized) columns.
     */
    width: number;
    /**
     * PLEASE NOTE
     * The [key: string]: any; line is here on purpose
     * This is due to the need of force re-render of PureComponent
     * Check the following link if you want to know more
     * https://github.com/bvaughn/react-virtualized#pass-thru-props
     */
    [key: string]: any;
};

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

export type ScrollDirection = "horizontal" | "vertical";

export type GridState = {
    isScrolling: boolean;
    scrollDirectionHorizontal: ScrollDirection;
    scrollDirectionVertical: ScrollDirection;
    scrollLeft: number;
    scrollTop: number;
};

/**
 * Specifies the number of miliseconds during which to disable pointer events while a scroll is in progress.
 * This improves performance and makes scrolling smoother.
 */
export const DEFAULT_SCROLLING_RESET_TIME_INTERVAL = 150;

/**
 * Renders tabular data with virtualization along the vertical and horizontal axes.
 * Row heights and column widths must be known ahead of time and specified as properties.
 */
export class Grid extends PureComponent<GridProps, GridState> {
    static defaultProps: {
        "aria-label": "grid";
        "aria-readonly": true;
        autoContainerWidth: false;
        autoHeight: false;
        autoWidth: false;
        cellRangeRenderer: GridCellRangeRenderer;
        containerRole: "rowgroup";
        containerStyle: {};
        estimatedColumnSize: 100;
        estimatedRowSize: 30;
        getScrollbarSize: () => number;
        noContentRenderer: () => React.ReactNode;
        onScroll: () => void;
        onScrollbarPresenceChange: () => void;
        onSectionRendered: () => void;
        overscanColumnCount: 0;
        overscanIndicesGetter: OverscanIndicesGetter;
        overscanRowCount: 10;
        role: "grid";
        scrollingResetTimeInterval: typeof DEFAULT_SCROLLING_RESET_TIME_INTERVAL;
        scrollToAlignment: "auto";
        scrollToColumn: -1;
        scrollToRow: -1;
        style: {};
        tabIndex: 0;
    };

    /**
     * Gets offsets for a given cell and alignment.
     */
    getOffsetForCell(
        params?: { alignment?: Alignment | undefined; columnIndex?: number | undefined; rowIndex?: number | undefined },
    ): ScrollOffset;

    /**
     * This method handles a scroll event originating from an external scroll control.
     * It's an advanced method and should probably not be used unless you're implementing a custom scroll-bar solution.
     */
    handleScrollEvent(params: Partial<ScrollOffset>): void;

    /**
     * Invalidate Grid size and recompute visible cells.
     * This is a deferred wrapper for recomputeGridSize().
     * It sets a flag to be evaluated on cDM/cDU to avoid unnecessary renders.
     * This method is intended for advanced use-cases like CellMeasurer.
     */
    // @TODO (bvaughn) Add automated test coverage for this.
    invalidateCellSizeAfterRender(params: { columnIndex: number; rowIndex: number }): void;

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
    recomputeGridSize(params?: { columnIndex?: number | undefined; rowIndex?: number | undefined }): void;

    /**
     * Ensure column and row are visible.
     */
    scrollToCell(params: { columnIndex: number; rowIndex: number }): void;

    /**
     * Scroll to the specified offset(s).
     * Useful for animating position changes.
     */
    scrollToPosition(params?: { scrollLeft: number; scrollTop: number }): void;
}

export default Grid;

export const defaultCellRangeRenderer: GridCellRangeRenderer;

export const accessibilityOverscanIndicesGetter: OverscanIndicesGetter;

export const defaultOverscanIndicesGetter: OverscanIndicesGetter;
