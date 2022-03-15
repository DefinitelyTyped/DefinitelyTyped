import { PureComponent, Validator, Requireable } from 'react';
import {
    Alignment,
    Index,
    ScrollParams,
    ScrollPosition,
    SectionRenderedParams,
    SizeInfo,
    SizeAndPositionInfo,
} from '../../index';

export type CollectionCellSizeAndPosition = {
    height: number;
    width: number;
    x: number;
    y: number;
};
export type CollectionCellSizeAndPositionGetter = (params: Index) => CollectionCellSizeAndPosition;

export type CollectionCellGroupRendererParams = {
    cellSizeAndPositionGetter: CollectionCellSizeAndPositionGetter;
    indices: number[];
    cellRenderer: CollectionCellRenderer;
};
export type CollectionCellGroupRenderer = (params: CollectionCellGroupRendererParams) => React.ReactNode[];
export type CollectionCellRendererParams = {
    index: number;
    isScrolling: boolean;
    key: number;
    style: React.CSSProperties;
};
export type CollectionCellRenderer = (params: CollectionCellRendererParams) => React.ReactNode;
export type CollectionProps = {
    'aria-label'?: string | undefined;
    /**
     * Outer height of Collection is set to "auto". This property should only be
     * used in conjunction with the WindowScroller HOC.
     */
    autoHeight?: boolean | undefined;
    /**
     * Number of cells in Collection.
     */
    cellCount: number;
    /**
     * Responsible for rendering a group of cells given their indices.
     * Should implement the following interface: ({
     *   cellSizeAndPositionGetter:Function,
     *   indices: Array<number>,
     *   cellRenderer: Function
     * }): Array<PropTypes.node>
     */
    cellGroupRenderer?: CollectionCellGroupRenderer | undefined;
    /**
     * Responsible for rendering a cell given an row and column index.
     * Should implement the following interface: ({ index: number, key: string, style: object }): PropTypes.element
     */
    cellRenderer: CollectionCellRenderer;
    /**
     * Callback responsible for returning size and offset/position information for a given cell (index).
     * ({ index: number }): { height: number, width: number, x: number, y: number }
     */
    cellSizeAndPositionGetter: CollectionCellSizeAndPositionGetter;
    /**
     * Optional custom CSS class name to attach to root Collection element.
     */
    className?: string | undefined;
    height: number;
    horizontalOverscanSize?: number | undefined;
    /**
     * Optional custom id to attach to root Collection element.
     */
    id?: string | undefined;
    noContentRenderer?: (() => JSX.Element) | undefined;
    /**
     * Callback invoked whenever the scroll offset changes within the inner
     * scrollable region: ({ clientHeight, clientWidth, scrollHeight, scrollLeft, scrollTop, scrollWidth }): void
     */
    onScroll?: ((params: ScrollParams) => any) | undefined;
    /**
     * Callback invoked with information about the section of the Collection
     * that was just rendered: ({ indices: Array<number> }): void
     */
    onSectionRendered?: ((params: SectionRenderedParams) => any) | undefined;
    /**
     * Horizontal offset
     */
    scrollLeft?: number | undefined;
    /**
     * Controls the alignment of scrolled-to-cells. The default ("auto") scrolls
     * the least amount possible to ensure that the specified cell is fully
     * visible. Use "start" to always align cells to the top/left of the
     * Collection and "end" to align them bottom/right. Use "center" to align
     * specified cell in the middle of container.
     */
    scrollToAlignment?: Alignment | undefined;
    scrollToCell?: number | undefined;
    /**
     * Vertical Offset
     */
    scrollTop?: number | undefined;
    /**
     * Optionally override the size of the sections a Collection's cells are split into.
     */
    sectionSize?: number | undefined;
    /**
     * Optional custom inline style to attach to root Collection element.
     */
    style?: React.CSSProperties | undefined;
    verticalOverscanSize?: number | undefined;
    /**
     * Width of Collection; this property determines the number of visible
     * (vs virtualized) columns.
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

/**
 * Renders scattered or non-linear data.
 * Unlike Grid, which renders checkerboard data, Collection can render arbitrarily positioned- even overlapping- data.
 */
export class Collection extends PureComponent<CollectionProps> {
    static propTypes: {
        'aria-label': Requireable<string>;
        cellCount: Validator<number>;
        cellGroupRenderer: Validator<CollectionCellGroupRenderer>;
        cellRenderer: Validator<CollectionCellRenderer>;
        cellSizeAndPositionGetter: Validator<CollectionCellSizeAndPositionGetter>;
        sectionSize: Requireable<number>;
    };

    static defaultProps: {
        'aria-label': 'grid';
        cellGroupRenderer: CollectionCellGroupRenderer;
    };

    forceUpdate(): void;

    /** See Collection#recomputeCellSizesAndPositions */
    recomputeCellSizesAndPositions(): void;

    /** CellLayoutManager interface */

    calculateSizeAndPositionData(): void;

    /**
     * Returns the most recently rendered set of cell indices.
     */
    getLastRenderedIndices(): number[];

    /**
     * Calculates the minimum amount of change from the current scroll position to ensure the specified cell is (fully) visible.
     */
    getScrollPositionForCell(params: {
        align: 'auto' | 'start' | 'end' | 'center';
        cellIndex: number;
        height: number;
        scrollLeft: number;
        scrollTop: number;
        width: number;
    }): ScrollPosition;

    getTotalSize(): SizeInfo;

    cellRenderers(
        params: {
            isScrolling: boolean;
        } & SizeInfo
    ): React.ReactNode[];
}

export default Collection;
