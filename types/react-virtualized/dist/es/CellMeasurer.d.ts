import { PureComponent } from "react";

export interface ICellMeasurerCache {
    hasFixedWidth(): boolean;
    hasFixedHeight(): boolean;
    has(rowIndex: number, columnIndex: number): boolean;
    set(
        rowIndex: number,
        columnIndex: number,
        width: number,
        height: number
    ): void;
    getHeight(rowIndex: number, columnIndex?: number): number;
    getWidth(rowIndex: number, columnIndex?: number): number;
}

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
export class CellMeasurerCache implements ICellMeasurerCache {
    constructor(params?: CellMeasurerCacheParams);
    clear(rowIndex: number, columnIndex: number): void;
    clearAll(): void;
    columnWidth: (params: { index: number }) => number | undefined;
    get defaultHeight(): number;
    get defaultWidth(): number;
    hasFixedHeight(): boolean;
    hasFixedWidth(): boolean;
    getHeight(rowIndex: number, columnIndex: number): number | undefined;
    getWidth(rowIndex: number, columnIndex: number): number | undefined;
    has(rowIndex: number, columnIndex: number): boolean;
    rowHeight: (params: { index: number }) => number | undefined;
    set(
        rowIndex: number,
        columnIndex: number,
        width: number,
        height: number
    ): void;
}

export type CellPosition = {
    columnIndex: number;
    rowIndex: number;
};

export type MeasuredCellParent = {
    invalidateCellSizeAfterRender?: (cell: CellPosition) => void;
    recomputeGridSize?: (cell: CellPosition) => void;
};

export type CellMeasurerProps = {
    cache: ICellMeasurerCache;
    children:
        | ((props: { measure: () => void }) => React.ReactNode)
        | React.ReactNode;
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
