import { PureComponent, Validator, Requireable } from 'react'
import { CellMeasurerCache, KeyMapper } from './CellMeasurer';
import { GridCellRenderer } from './Grid';
/**
 * Specifies the number of miliseconds during which to disable pointer events while a scroll is in progress.
 * This improves performance and makes scrolling smoother.
 */
export const DEFAULT_SCROLLING_RESET_TIME_INTERVAL = 150

export type OnCellsRenderedCallback = (params: {
    startIndex: number,
    stopIndex: number
}) => void;

export type OnScrollCallback = (params: {
    clientHeight: number,
    scrollHeight: number,
    scrollTop: number
}) => void;

export type MasonryCellProps = {
    index: number,
    isScrolling: boolean,
    key: React.Key,
    parent: React.ReactType,
    style?: React.CSSProperties
}

export type CellRenderer = (props: MasonryCellProps) => React.ReactNode

export type MasonryProps = {
    autoHeight: boolean,
    cellCount: number,
    cellMeasurerCache: CellMeasurerCache,
    cellPositioner: Positioner,
    cellRenderer: CellRenderer,
    className?: string,
    height: number,
    id?: string,
    keyMapper?: KeyMapper,
    onCellsRendered?: OnCellsRenderedCallback,
    onScroll?: OnScrollCallback,
    overscanByPixels?: number,
    role?: string,
    scrollingResetTimeInterval?: number,
    scrollTop?: number,
    style?: React.CSSProperties,
    tabIndex?: number,
    width: number
}

export type MasonryState = {
    isScrolling: boolean,
    scrollTop: number
}

/**
 * This component efficiently displays arbitrarily positioned cells using windowing techniques.
 * Cell position is determined by an injected `cellPositioner` property.
 * Windowing is vertical; this component does not support horizontal scrolling.
 *
 * Rendering occurs in two phases:
 * 1) First pass uses estimated cell sizes (provided by the cache) to determine how many cells to measure in a batch.
 *    Batch size is chosen using a fast, naive layout algorithm that stacks images in order until the viewport has been filled.
 *    After measurement is complete (componentDidMount or componentDidUpdate) this component evaluates positioned cells
 *    in order to determine if another measurement pass is required (eg if actual cell sizes were less than estimated sizes).
 *    All measurements are permanently cached (keyed by `keyMapper`) for performance purposes.
 * 2) Second pass uses the external `cellPositioner` to layout cells.
 *    At this time the positioner has access to cached size measurements for all cells.
 *    The positions it returns are cached by Masonry for fast access later.
 *    Phase one is repeated if the user scrolls beyond the current layout's bounds.
 *    If the layout is invalidated due to eg a resize, cached positions can be cleared using `recomputeCellPositions()`.
 *
 * Animation constraints:
 *   Simple animations are supported (eg translate/slide into place on initial reveal).
 *   More complex animations are not (eg flying from one position to another on resize).
 *
 * Layout constraints:
 *   This component supports multi-column layout.
 *   The height of each item may vary.
 *   The width of each item must not exceed the width of the column it is "in".
 *   The left position of all items within a column must align.
 *   (Items may not span multiple columns.)
 */
export class Masonry extends PureComponent<MasonryProps, MasonryState> {
    static defaultProps: {
        autoHeight: false,
        keyMapper: identity,
        onCellsRendered: noop,
        onScroll: noop,
        overscanByPixels: 20,
        role: 'grid',
        scrollingResetTimeInterval: typeof DEFAULT_SCROLLING_RESET_TIME_INTERVAL,
        style: emptyObject,
        tabIndex: 0
    }

    constructor(props: MasonryProps, context: any);

    clearCellPositions(): void;

    // HACK This method signature was intended for Grid
    invalidateCellSizeAfterRender(params: { rowIndex: number }): void

    recomputeCellPositions(): void;

    componentDidMount(): void;

    componentDidUpdate(prevProps: MasonryProps, prevState: MasonryState): void;

    componentWillUnmount(): void;

    componentWillReceiveProps(nextProps: MasonryProps): void;

    render(): JSX.Element;
}

export type emptyObject = {}

export type identity = <T>(value: T) => T;

export type noop = () => void;

export type Position = {
    left: number,
    top: number
};

export type createCellPositionerParams = {
    cellMeasurerCache: CellMeasurerCache,
    columnCount: number,
    columnWidth: number,
    spacer?: number
};

export type resetParams = {
    columnCount: number,
    columnWidth: number,
    spacer?: number
};

export type Positioner = ((index: number) => Position) & { reset: (params: resetParams) => void };

export const createCellPositioner: (params: createCellPositionerParams) => Positioner;
