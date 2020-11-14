import { PureComponent, Validator, Requireable } from 'react';
import { Grid, GridCoreProps, GridCellProps, OverscanIndicesGetter } from './Grid';
import { Index, IndexRange, OverscanIndexRange, Alignment } from '../../index';
import { CellMeasurerCache, CellPosition } from './CellMeasurer';
import { OnScrollParams } from './ScrollSync';

export type ListRowProps = Pick<GridCellProps, Exclude<keyof GridCellProps, 'rowIndex'>> & {
    index: GridCellProps['rowIndex'];
};

export type ListRowRenderer = (props: ListRowProps) => React.ReactNode;

export type RenderedRows = OverscanIndexRange & IndexRange;

export type ListProps = GridCoreProps & {
    deferredMeasurementCache?: CellMeasurerCache;
    /**
     * Removes fixed height from the scrollingContainer so that the total height
     * of rows can stretch the window. Intended for use with WindowScroller
     */
    autoHeight?: boolean;
    /** Optional CSS class name */
    className?: string;
    /**
     * Used to estimate the total height of a List before all of its rows have actually been measured.
     * The estimated total height is adjusted as rows are rendered.
     */
    estimatedRowSize?: number;
    /** Height constraint for list (determines how many actual rows are rendered) */
    height: number;
    /** Optional renderer to be used in place of rows when rowCount is 0 */
    noRowsRenderer?: () => JSX.Element;
    /**
     * Callback invoked with information about the slice of rows that were just rendered.
     * ({ startIndex, stopIndex }): void
     */
    onRowsRendered?: (info: RenderedRows) => void;
    /**
     * Number of rows to render above/below the visible bounds of the list.
     * These rows can help for smoother scrolling on touch devices.
     */
    overscanRowCount?: number;
    /**
     * Callback invoked whenever the scroll offset changes within the inner scrollable region.
     * This callback can be used to sync scrolling between lists, tables, or grids.
     * ({ clientHeight, scrollHeight, scrollTop }): void
     */
    onScroll?: (params: OnScrollParams) => void;
    /** See Grid#overscanIndicesGetter */
    overscanIndicesGetter?: OverscanIndicesGetter;
    /**
     * Either a fixed row height (number) or a function that returns the height of a row given its index.
     * ({ index: number }): number
     */
    rowHeight: number | ((info: Index) => number);
    /** Responsible for rendering a row given an index; ({ index: number }): node */
    rowRenderer: ListRowRenderer;
    /** Number of rows in list. */
    rowCount: number;
    /** See Grid#scrollToAlignment */
    scrollToAlignment?: string;
    /** Row index to ensure visible (by forcefully scrolling if necessary) */
    scrollToIndex?: number;
    /** Vertical offset. */
    scrollTop?: number;
    /** Optional inline style */
    style?: React.CSSProperties;
    /** Tab index for focus */
    tabIndex?: number | null;
    /** Width of list */
    width: number;
};
/**
 * It is inefficient to create and manage a large list of DOM elements within a scrolling container
 * if only a few of those elements are visible. The primary purpose of this component is to improve
 * performance by only rendering the DOM nodes that a user is able to see based on their current
 * scroll position.
 *
 * This component renders a virtualized list of elements with either fixed or dynamic heights.
 */
export class List extends PureComponent<ListProps> {
    static defaultProps: {
        autoHeight: false;
        estimatedRowSize: 30;
        onScroll: () => void;
        noRowsRenderer: () => null;
        onRowsRendered: () => void;
        overscanIndicesGetter: OverscanIndicesGetter;
        overscanRowCount: 10;
        scrollToAlignment: 'auto';
        scrollToIndex: -1;
        style: {};
    };

    Grid?: Grid;

    forceUpdateGrid(): void;

    /** See Grid#getOffsetForCell */
    getOffsetForRow(params: { alignment?: Alignment; index?: number }): number;

    /** CellMeasurer compatibility */
    invalidateCellSizeAfterRender({ columnIndex, rowIndex }: CellPosition): void;

    /** See Grid#measureAllCells */
    measureAllRows(): void;

    /** CellMeasurer compatibility */
    recomputeGridSize(params?: Partial<CellPosition>): void;

    /** See Grid#recomputeGridSize */
    recomputeRowHeights(index?: number): void;

    /** See Grid#scrollToPosition */
    scrollToPosition(scrollTop?: number): void;

    /** See Grid#scrollToCell */
    scrollToRow(index?: number): void;
}
