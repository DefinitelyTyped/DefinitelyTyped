import { PureComponent } from 'react';

export type CellMeasurerCacheInterface = {
    hasFixedWidth(): boolean;
    hasFixedHeight(): boolean;
    has(rowIndex: number, columnIndex: number): boolean;
    set(rowIndex: number, columnIndex: number, width: number, height: number): void;
    getHeight(rowIndex: number, columnIndex?: number): number;
    getWidth(rowIndex: number, columnIndex?: number): number;
};

export type KeyMapper = (rowIndex: number, columnIndex: number) => any;

export type CellMeasurerCacheParams = {
    defaultHeight?: number;
    defaultWidth?: number;
    fixedHeight?: boolean;
    fixedWidth?: boolean;
    minHeight?: number;
    minWidth?: number;
    keyMapper?: KeyMapper;
};
export class CellMeasurerCache implements CellMeasurerCacheInterface {
    constructor(params?: CellMeasurerCacheParams);
    clear(rowIndex: number, columnIndex: number): void;
    clearAll(): void;
    columnWidth: (params: { index: number }) => number;
    readonly defaultHeight: number;
    readonly defaultWidth: number;
    hasFixedHeight(): boolean;
    hasFixedWidth(): boolean;
    getHeight(rowIndex: number, columnIndex: number): number;
    getWidth(rowIndex: number, columnIndex: number): number;
    has(rowIndex: number, columnIndex: number): boolean;
    rowHeight: (params: { index: number }) => number;
    set(rowIndex: number, columnIndex: number, width: number, height: number): void;
}

export type CellPosition = {
    columnIndex: number;
    rowIndex: number;
};

export type MeasuredCellParent = {
    invalidateCellSizeAfterRender?: (cell: CellPosition) => void;
    recomputeGridSize?: (cell: CellPosition) => void;
};

export type CellMeasurerChildProps = {
    measure: () => void,
    registerChild?: (element: Element) => void
}

export type CellMeasurerProps = {
    cache: CellMeasurerCacheInterface;
    children: ((props: CellMeasurerChildProps) => React.ReactNode) | React.ReactNode;
    columnIndex?: number;
    index?: number;
    parent: MeasuredCellParent;
    rowIndex?: number;
    style?: React.CSSProperties;
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
 * Wraps a cell and measures its rendered content.
 * Measurements are stored in a per-cell cache.
 * Cached-content is not be re-measured.
 */
export class CellMeasurer extends PureComponent<CellMeasurerProps> {}
