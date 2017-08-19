import { PureComponent, Validator, Requireable } from 'react'
import { Grid, GridCoreProps, GridCellProps } from './Grid'
import { Index, IndexRange, Alignment } from '../../index'
import { CellMeasurerCache } from './CellMeasurer'

export type ListRowProps = GridCellProps & { index: number, style: React.CSSProperties };

export type ListRowRenderer = (props: ListRowProps) => React.ReactNode;
export type ListProps = GridCoreProps & {
    deferredMeasurementCache?: CellMeasurerCache;
    className?: string;
    autoHeight?: boolean;
    estimatedRowSize?: number;
    height: number;
    noRowsRenderer?: () => JSX.Element;
    onRowsRendered?: (info: { overscanStartIndex: number, overscanStopIndex: number, startIndex: number, stopIndex: number }) => void;
    onScroll?: (info: { clientHeight: number, scrollHeight: number, scrollTop: number }) => void;
    overscanRowCount?: number;
    rowHeight: number | ((info: Index) => number);
    rowRenderer: ListRowRenderer;
    rowCount: number;
    scrollToAlignment?: string;
    scrollToIndex?: number;
    scrollTop?: number;
    style?: React.CSSProperties;
    tabIndex?: number;
    width: number;
}
/**
 * It is inefficient to create and manage a large list of DOM elements within a scrolling container
 * if only a few of those elements are visible. The primary purpose of this component is to improve
 * performance by only rendering the DOM nodes that a user is able to see based on their current
 * scroll position.
 *
 * This component renders a virtualized list of elements with either fixed or dynamic heights.
 */
export class List extends PureComponent<ListProps, {}> {
    static propTypes: {
        'aria-label': Requireable<string>,

        /**
         * Removes fixed height from the scrollingContainer so that the total height
         * of rows can stretch the window. Intended for use with WindowScroller
         */
        autoHeight: Requireable<boolean>,

        /** Optional CSS class name */
        className: Requireable<string>,

        /**
         * Used to estimate the total height of a List before all of its rows have actually been measured.
         * The estimated total height is adjusted as rows are rendered.
         */
        estimatedRowSize: Validator<number>,

        /** Height constraint for list (determines how many actual rows are rendered) */
        height: Validator<number>,

        /** Optional renderer to be used in place of rows when rowCount is 0 */
        noRowsRenderer: Validator<() => JSX.Element>,

        /**
         * Callback invoked with information about the slice of rows that were just rendered.
         * ({ startIndex, stopIndex }): void
         */
        onRowsRendered: Validator<(params: IndexRange) => void>,

        /**
         * Number of rows to render above/below the visible bounds of the list.
         * These rows can help for smoother scrolling on touch devices.
         */
        overscanRowCount: Validator<number>,

        /**
         * Callback invoked whenever the scroll offset changes within the inner scrollable region.
         * This callback can be used to sync scrolling between lists, tables, or grids.
         * ({ clientHeight, scrollHeight, scrollTop }): void
         */
        onScroll: Validator<(params: { clientHeight: number, scrollHeight: number, scrollTop: number }) => void>,

        /**
         * Either a fixed row height (number) or a function that returns the height of a row given its index.
         * ({ index: number }): number
         */
        rowHeight: Validator<number | ((params: Index) => number)>,

        /** Responsible for rendering a row given an index; ({ index: number }): node */
        rowRenderer: Validator<ListRowRenderer>,

        /** Number of rows in list. */
        rowCount: Validator<number>,

        /** See Grid#scrollToAlignment */
        scrollToAlignment: Validator<Alignment>,

        /** Row index to ensure visible (by forcefully scrolling if necessary) */
        scrollToIndex: Validator<number>,

        /** Vertical offset. */
        scrollTop: Requireable<number>,

        /** Optional inline style */
        style: Validator<React.CSSProperties>,

        /** Tab index for focus */
        tabIndex: Requireable<number>,

        /** Width of list */
        width: Validator<number>
    };

    static defaultProps: {
        estimatedRowSize: 30,
        noRowsRenderer: () => null,
        onRowsRendered: () => null,
        onScroll: () => null,
        overscanRowCount: 10,
        scrollToAlignment: 'auto',
        scrollToIndex: -1,
        style: {}
    };

    constructor(props: ListProps, context: any);

    forceUpdateGrid(): void;

    /** See Grid#measureAllCells */
    measureAllRows(): void;

    /** See Grid#recomputeGridSize */
    recomputeRowHeights(index?: number): void;

    /** See Grid#scrollToCell */
    scrollToRow(index?: number): void;

    render(): JSX.Element;
}
