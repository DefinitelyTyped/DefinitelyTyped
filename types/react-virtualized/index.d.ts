// Type definitions for react-virtualized 9.2.1
// Project: https://github.com/bvaughn/react-virtualized
// Definitions by: Kalle Ott <https://github.com/kaoDev>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.1

import * as React from "react";

export interface ArrowKeyStepperProps {
    children?: React.StatelessComponent<{
        onSectionRendered: Function,
        scrollToColumn: number,
        scrollToRow: number
    }>;
    className?: string;
    columnCount: number;
    rowCount: number;
}
export class ArrowKeyStepper extends React.PureComponent<ArrowKeyStepperProps, {}> { }

export interface AutoSizerProps {
    disableHeight?: boolean;
    disableWidth?: boolean;
    onResize?: (info: { height: number, width: number }) => any;
}
export class AutoSizer extends React.PureComponent<AutoSizerProps, {}> { }

export interface CellMeasurerProps {
    cache?: CellMeasurerCache;
    children?: React.StatelessComponent<{
        getColumnWidth: () => number,
        getRowHeight: () => number,
        resetMeasurements: () => any,
        resetMeasurementsForColumn: (index: number) => any,
        resetMeasurementsForRow: (index: number) => any,
    }>;
    columnIndex: number;
    parent?: React.ReactType;
    rowIndex: number;
    style?: React.CSSProperties;
}
export class CellMeasurer extends React.PureComponent<CellMeasurerProps, {}> { }

export type KeyMapper = (
    rowIndex: number,
    columnIndex: number
) => any;
export type Map<T> = { [key: string]: T };
export type Cache = Map<number>;
export type IndexParam = {
    index: number
};

export type CellMeasurerCacheParams = {
    defaultHeight?: number,
    defaultWidth?: number,
    fixedHeight?: boolean,
    fixedWidth?: boolean,
    minHeight?: number,
    minWidth?: number,
    keyMapper?: KeyMapper
}
export class CellMeasurerCache {
    constructor(params: CellMeasurerCacheParams);
    clear(
        rowIndex: number,
        columnIndex: number
    ): void;
    clearAll(): void;
    columnWidth: (params: IndexParam) => number | undefined;
    hasFixedHeight(): boolean;
    hasFixedWidth(): boolean;
    getHeight(
        rowIndex: number,
        columnIndex: number
    ): number | undefined;
    getWidth(
        rowIndex: number,
        columnIndex: number
    ): number | undefined;
    has(
        rowIndex: number,
        columnIndex: number
    ): boolean;
    rowHeight: (params: IndexParam) => number | undefined;
    set(
        rowIndex: number,
        columnIndex: number,
        width: number,
        height: number
    ): void;
}

export type CollectionCellSizeAndPosition = { height: number, width: number, x: number, y: number };
export type CollectionCellSizeAndPositionGetter = (params: IndexParam) => CollectionCellSizeAndPosition;

export type CollectionCellGroupRendererParams = {
    cellSizeAndPositionGetter: CollectionCellSizeAndPositionGetter,
    indices: number[],
    cellRenderer: CollectionCellRenderer
}
export type CollectionCellGroupRenderer = (params: CollectionCellGroupRendererParams) => React.ReactNode[];
export type CollectionCellRendererParams = {
    index: number,
    key: string,
    style?: React.CSSProperties
}
export type CollectionCellRenderer = (params: CollectionCellRendererParams) => React.ReactNode;
export type CollectionProps = {
    'aria-label'?: string;
    cellCount: number;
    cellGroupRenderer?: CollectionCellGroupRenderer,
    cellRenderer: CollectionCellRenderer,
    cellSizeAndPositionGetter: CollectionCellSizeAndPositionGetter,
    sectionSize?: number;
};
export class Collection extends React.PureComponent<CollectionProps, {}> { }

export interface ColumnSizerProps {
    children?: React.StatelessComponent<{ adjustedWidth: number, getColumnWidth: () => number, registerChild: any }>;
    columnMaxWidth?: number;
    columnMinWidth?: number;
    columnCount?: number;
    width: number;
}
export class ColumnSizer extends React.PureComponent<ColumnSizerProps, {}> { }

export type CellDataGetterParams = {
    columnData?: any,
    dataKey: string,
    rowData: any
};
export type CellRendererParams = {
    cellData?: any,
    columnData?: any,
    dataKey: string,
    rowData: any,
    rowIndex: number
};
export type HeaderRendererParams = {
    columnData?: any,
    dataKey: string,
    disableSort?: boolean,
    label?: string,
    sortBy?: string,
    sortDirection?: SortDirectionType
};
export type HeaderRowRendererParams = {
    className: string,
    columns: React.ReactNode[],
    style: React.CSSProperties,
    scrollbarWidth: number,
    height: number,
    width: number
};
export type RowRendererParams = {
    className: string,
    columns: Array<any>,
    index: number,
    isScrolling: boolean,
    onRowClick?: Function,
    onRowDoubleClick?: Function,
    onRowMouseOver?: Function,
    onRowMouseOut?: Function,
    rowData: any,
    style: any
};

export type TableCellDataGetter = (params: CellDataGetterParams) => any;
export type TableCellRenderer = (params: CellRendererParams) => React.ReactNode;
export type TableHeaderRenderer = (params: HeaderRendererParams) => React.ReactNode;
export type TableHeaderRowRenderer = (params: HeaderRowRendererParams) => React.ReactNode;
export type TableRowRenderer = (params: RowRendererParams) => React.ReactNode;

// https://github.com/bvaughn/react-virtualized/blob/master/docs/Column.md
export interface ColumnProps {
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
export class Column extends React.Component<ColumnProps, {}> { }

export type RowClickHandlerParams = {
    rowData: {
        columnData: Object,
        id: string,
        index: number
    }
}

// ref: https://github.com/bvaughn/react-virtualized/blob/master/docs/Table.md
export interface TableProps {
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
    noRowsRender?: () => void;
    onHeaderClick?: (dataKey: string, columnData: any) => void;
    onRowClick?: (info: RowClickHandlerParams) => void;
    onRowDoubleClick?: (info: RowClickHandlerParams) => void;
    onRowMouseOut?: (info: RowClickHandlerParams) => void;
    onRowMouseOver?: (info: RowClickHandlerParams) => void;
    onRowsRendered?: (info: RowClickHandlerParams) => void;
    overscanRowCount?: number;
    onScroll?: (info: { clientHeight: number, scrollHeight: number, scrollTop: number }) => void;
    rowClassName?: string | ((info: IndexParam) => string);
    rowCount: number;
    rowGetter?: (info: IndexParam) => any;
    rowHeight: number | ((info: IndexParam) => number);
    rowRenderer?: TableRowRenderer;
    headerRowRenderer?: TableHeaderRowRenderer;
    rowStyle?: React.CSSProperties | ((info: IndexParam) => React.CSSProperties);
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
export class Table extends React.PureComponent<TableProps, {}> {
    forceUpdateGrid(): void;
    /** See Grid#measureAllCells */
    measureAllRows(): void;
    /** See Grid#recomputeGridSize */
    recomputeRowHeights(index?: number): void;
    /** See Grid#scrollToCell */
    scrollToRow(index?: number): void;
    Grid: Grid;
}

export const defaultTableCellDataGetter: TableCellDataGetter;
export const defaultTableCellRenderer: TableCellRenderer;
export const defaultTableHeaderRenderer: () => React.ReactElement<HeaderRendererParams>[];
export const defaultTableHeaderRowRenderer: TableHeaderRowRenderer;
export const defaultTableRowRenderer: TableRowRenderer;

interface ISortDirection {
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

export const SortDirection: ISortDirection

export type SortDirectionType = 'ASC' | 'DESC'

export const SortIndicator: React.StatelessComponent<{ sortDirection: SortDirectionType }>


export type DefaultCellRangeRendererParams = {
    cellCache: Object,
    cellRenderer: Function,
    columnSizeAndPositionManager: Object,
    columnStartIndex: number,
    columnStopIndex: number,
    horizontalOffsetAdjustment: number,
    isScrolling: boolean,
    rowSizeAndPositionManager: Object,
    rowStartIndex: number,
    rowStopIndex: number,
    scrollLeft: number,
    scrollTop: number,
    styleCache: Object,
    verticalOffsetAdjustment: number,
    visibleColumnIndices: Object,
    visibleRowIndices: Object
};
export function defaultCellRangeRenderer(params: DefaultCellRangeRendererParams): React.ReactElement<DefaultCellRangeRendererParams>;


export type GridCellRendererParams = {
    columnIndex: number;
    isScrolling: boolean;
    isVisible: boolean;
    key: string;
    parent: Grid | List | Table;
    rowIndex: number;
    style: React.CSSProperties;
};
export type GridCellRenderer = (params: GridCellRendererParams) => React.ReactNode;

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
}

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

export type GridCellRangeRendererParams = {
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
export type GridCellRangeRenderer = (params: GridCellRangeRendererParams) => React.ReactNode[];
// TODO  add proper typing
export type GridProps = {
    'aria-label'?: string;
    autoContainerWidth?: boolean;
    autoHeight?: boolean;
    cellRenderer: GridCellRenderer;
    cellRangeRenderer?: GridCellRangeRenderer;
    className?: string;
    columnCount: number;
    columnWidth: number | ((params: IndexParam) => number);
    containerStyle?: React.CSSProperties;
    deferredMeasurementCache?: CellMeasurerCache;
    estimatedColumnSize?: number;
    estimatedRowSize?: number;
    getScrollbarSize?: () => number;
    height: number;
    id?: string;
    noContentRenderer?: () => React.ReactNode;
    onScroll?: (params: { clientHeight: number, clientWidth: number, scrollHeight: number, scrollLeft: number, scrollTop: number, scrollWidth: number }) => any;
    onSectionRendered?: (params: { columnStartIndex: number, columnStopIndex: number, rowStartIndex: number, rowStopIndex: number }) => any;
    overscanColumnCount?: number;
    overscanIndicesGetter?: (params: {
        cellCount: number,
        overscanCellsCount: number,
        scrollDirection: number,
        startIndex: number,
        stopIndex: number
    }) => { overscanStartIndex: number, overscanStopIndex: number };
    overscanRowCount?: number;
    rowHeight: number | ((params: IndexParam) => number);
    rowCount: number;
    scrollingResetTimeInterval?: number;
    scrollLeft?: number;
    scrollToAlignment?: 'auto' | 'end' | 'start' | 'center';
    scrollToColumn?: number;
    scrollTop?: number;
    scrollToRow?: number;
    style?: React.CSSProperties;
    tabIndex?: number;
    width: number;
};
export class Grid extends React.PureComponent<GridProps, {}> {
    /**
     * Invalidate Grid size and recompute visible cells.
     * This is a deferred wrapper for recomputeGridSize().
     * It sets a flag to be evaluated on cDM/cDU to avoid unnecessary renders.
     * This method is intended for advanced use-cases like CellMeasurer.
     */
    invalidateCellSizeAfterRender(params: {
        columnIndex: number,
        rowIndex: number
    }): void;
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
}

export type InfiniteLoaderProps = {
    children?: React.StatelessComponent<{
        onRowsRendered: (params: { startIndex: number, stopIndex: number }) => void,
        registerChild: (registeredChild: any) => void
    }>;
    isRowLoaded: (params: IndexParam) => boolean;
    loadMoreRows: (params: { startIndex: number, stopIndex: number }) => Promise<any>;
    minimumBatchSize?: number;
    rowCount?: number;
    threshold?: number;
};
export class InfiniteLoader extends React.PureComponent<InfiniteLoaderProps, {}> { }
export type ListRowRenderer = (params: GridCellRendererParams & { index: number, style: React.CSSProperties }) => React.ReactNode;
export interface ListProps {
    className?: string;
    autoHeight?: boolean;
    estimatedRowSize?: number;
    height: number;
    noRowsRenderer?: Function;
    onRowsRendered?: (info: { overscanStartIndex: number, overscanStopIndex: number, startIndex: number, stopIndex: number }) => void;
    onScroll?: (info: { clientHeight: number, scrollHeight: number, scrollTop: number }) => void;
    overscanRowCount?: number;
    rowHeight: number | ((info: IndexParam) => number);
    rowRenderer: ListRowRenderer;
    rowCount: number;
    scrollToAlignment?: string;
    scrollToIndex?: number;
    scrollTop?: number;
    style?: React.CSSProperties;
    tabIndex?: number;
    width: number;
}
export class List extends React.PureComponent<ListProps, {}> { }

export interface MultiGridProps {
    fixedColumnCount: number;
    fixedRowCount: number;
    style: React.CSSProperties;
    styleBottomLeftGrid: React.CSSProperties;
    styleBottomRightGrid: React.CSSProperties;
    styleTopLeftGrid: React.CSSProperties;
    styleTopRightGrid: React.CSSProperties;
}
export class MultiGrid extends React.PureComponent<MultiGridProps, {}> { }

export type ScrollSyncProps = {
    children?: React.StatelessComponent<{
        clientHeight: number,
        clientWidth: number,
        onScroll: (params: { clientHeight: number, clientWidth: number, scrollHeight: number, scrollLeft: number, scrollTop: number, scrollWidth: number }) => void,
        scrollHeight: number,
        scrollLeft: number,
        scrollTop: number,
        scrollWidth: number
    }>;
};
export class ScrollSync extends React.PureComponent<ScrollSyncProps, {}> { }
export type WindowScrollerRenderCallBackParams = {
    height: number,
    isScrolling: boolean,
    scrollTop: number
};

export type WindowScrollerProps = {
    children?: React.StatelessComponent<WindowScrollerRenderCallBackParams>;
    onResize?: (prams: { height: number }) => void;
    onScroll?: (params: { scrollTop: number }) => void;
    scrollElement?: HTMLElement;
}
export class WindowScroller extends React.PureComponent<WindowScrollerProps, {}> { }
