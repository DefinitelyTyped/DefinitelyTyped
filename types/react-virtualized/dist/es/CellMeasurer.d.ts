import { PureComponent } from "react";

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
    defaultHeight?: number | undefined;
    defaultWidth?: number | undefined;
    fixedHeight?: boolean | undefined;
    fixedWidth?: boolean | undefined;
    minHeight?: number | undefined;
    minWidth?: number | undefined;
    keyMapper?: KeyMapper | undefined;
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
    invalidateCellSizeAfterRender?: ((cell: CellPosition) => void) | undefined;
    recomputeGridSize?: ((cell: CellPosition) => void) | undefined;
};

export type CellMeasurerChildProps = {
    measure: () => void;
    registerChild: (element?: Element | null) => void;
};

export type CellMeasurerProps = {
    cache: CellMeasurerCacheInterface;
    children: ((props: CellMeasurerChildProps) => React.ReactNode) | React.ReactNode;
    columnIndex?: number | undefined;
    index?: number | undefined;
    parent: MeasuredCellParent;
    rowIndex?: number | undefined;
    style?: React.CSSProperties | undefined;
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

export default CellMeasurer;
