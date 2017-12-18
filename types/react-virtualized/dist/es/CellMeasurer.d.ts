import { PureComponent } from 'react'

export type KeyMapper = (
    rowIndex: number,
    columnIndex: number
) => any;

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
    columnWidth: (params: { index: number }) => number | undefined;
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
    rowHeight: (params: { index: number }) => number | undefined;
    set(
        rowIndex: number,
        columnIndex: number,
        width: number,
        height: number
    ): void;
}

export type CellMeasurerProps = {
    cache?: CellMeasurerCache;
    children?: ((props: {measure: () => void}) => React.ReactNode) | JSX.Element;
    columnIndex?: number;
    index?: number;
    parent?: React.ReactType;
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
}
/**
 * Wraps a cell and measures its rendered content.
 * Measurements are stored in a per-cell cache.
 * Cached-content is not be re-measured.
 */
export class CellMeasurer extends PureComponent<CellMeasurerProps> {
    constructor(props: CellMeasurerProps, context: any);

    componentDidMount(): void;

    componentDidUpdate(prevProps: CellMeasurerProps, prevState: any): void;

    render(): JSX.Element;
}
