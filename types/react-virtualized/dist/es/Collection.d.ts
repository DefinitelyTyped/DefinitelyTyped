import { PureComponent, Validator, Requireable } from 'react'
import {
    Index,
    ScrollPosition,
    SizeInfo,
    SizeAndPositionInfo
} from '../../index';

export type CollectionCellSizeAndPosition = { height: number, width: number, x: number, y: number };
export type CollectionCellSizeAndPositionGetter = (params: Index) => CollectionCellSizeAndPosition;

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
    className?: string;
    height: number;
    width: number;
    horizontalOverscanSize?: number;
    noContentRenderer?: () => JSX.Element;
    scrollToCell?: number;
    verticalOverscanSize?: number;
};

/**
 * Renders scattered or non-linear data.
 * Unlike Grid, which renders checkerboard data, Collection can render arbitrarily positioned- even overlapping- data.
 */
export class Collection extends PureComponent<CollectionProps, {}> {
    static propTypes: {
        'aria-label': Requireable<string>,

        /**
         * Number of cells in Collection.
         */
        cellCount: Validator<number>,

        /**
         * Responsible for rendering a group of cells given their indices.
         * Should implement the following interface: ({
         *   cellSizeAndPositionGetter:Function,
         *   indices: Array<number>,
         *   cellRenderer: Function
         * }): Array<PropTypes.node>
         */
        cellGroupRenderer: Validator<CollectionCellGroupRenderer>,

        /**
         * Responsible for rendering a cell given an row and column index.
         * Should implement the following interface: ({ index: number, key: string, style: object }): PropTypes.element
         */
        cellRenderer: Validator<CollectionCellRenderer>,

        /**
         * Callback responsible for returning size and offset/position information for a given cell (index).
         * ({ index: number }): { height: number, width: number, x: number, y: number }
         */
        cellSizeAndPositionGetter: Validator<CollectionCellSizeAndPositionGetter>,

        /**
         * Optionally override the size of the sections a Collection's cells are split into.
         */
        sectionSize: Requireable<number>
    };

    static defaultProps: {
        'aria-label': 'grid',
        cellGroupRenderer: CollectionCellGroupRenderer
    };

    constructor(props: CollectionProps, context: any);

    forceUpdate(): void;

    /** See Collection#recomputeCellSizesAndPositions */
    recomputeCellSizesAndPositions(): void;

    /** React lifecycle methods */

    render(): JSX.Element;

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
        align: 'auto' | 'start' | 'end' | 'center',
        cellIndex: number,
        height: number,
        scrollLeft: number,
        scrollTop: number,
        width: number
    }): ScrollPosition;

    getTotalSize(): SizeInfo;

    cellRenderers(params: {
        isScrolling: boolean,
    } & SizeInfo): React.ReactNode[];
}
