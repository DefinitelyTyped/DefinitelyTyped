import { JSX, PureComponent } from "react";
import { Alignment, IndexRange, OverscanIndexRange } from "../../index";
import { CellPosition } from "./CellMeasurer";
import { Grid, GridCellProps, GridCoreProps, OverscanIndicesGetter } from "./Grid";

export type ListRowProps = Pick<GridCellProps, Exclude<keyof GridCellProps, "rowIndex">> & {
    index: GridCellProps["rowIndex"];
};

export type ListRowRenderer = (props: ListRowProps) => React.ReactNode;

export type RenderedRows = OverscanIndexRange & IndexRange;

export type ListProps = GridCoreProps & {
    /** Optional renderer to be used in place of rows when rowCount is 0 */
    noRowsRenderer?: (() => JSX.Element) | undefined;
    /**
     * Callback invoked with information about the slice of rows that were just rendered.
     * ({ startIndex, stopIndex }): void
     */
    onRowsRendered?: ((info: RenderedRows) => void) | undefined;
    /** Responsible for rendering a row given an index; ({ index: number }): node */
    rowRenderer: ListRowRenderer;
    /** Row index to ensure visible (by forcefully scrolling if necessary) */
    scrollToIndex?: number | undefined;
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
        scrollToAlignment: "auto";
        scrollToIndex: -1;
        style: {};
    };

    Grid?: Grid | undefined;

    forceUpdateGrid(): void;

    /** See Grid#getOffsetForCell */
    getOffsetForRow(params: { alignment?: Alignment | undefined; index?: number | undefined }): number;

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

export default List;
