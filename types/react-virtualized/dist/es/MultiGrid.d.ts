import { PureComponent, Validator, Requireable } from 'react';
import { GridProps } from './Grid';
import { CellPosition } from './CellMeasurer';

export type MultiGridProps = {
    classNameBottomLeftGrid?: string;
    classNameBottomRightGrid?: string;
    classNameTopLeftGrid?: string;
    classNameTopRightGrid?: string;
    enableFixedColumnScroll?: boolean;
    enableFixedRowScroll?: boolean;
    fixedColumnCount?: number;
    fixedRowCount?: number;
    style?: React.CSSProperties;
    styleBottomLeftGrid?: React.CSSProperties;
    styleBottomRightGrid?: React.CSSProperties;
    styleTopLeftGrid?: React.CSSProperties;
    styleTopRightGrid?: React.CSSProperties;
} & GridProps;

export type MultiGridState = {
    scrollLeft: number;
    scrollTop: number;
};

/**
 * Renders 1, 2, or 4 Grids depending on configuration.
 * A main (body) Grid will always be rendered.
 * Optionally, 1-2 Grids for sticky header rows will also be rendered.
 * If no sticky columns, only 1 sticky header Grid will be rendered.
 * If sticky columns, 2 sticky header Grids will be rendered.
 */
export class MultiGrid extends PureComponent<MultiGridProps, MultiGridState> {
    static propTypes: {
        classNameBottomLeftGrid: Validator<string>;
        classNameBottomRightGrid: Validator<string>;
        classNameTopLeftGrid: Validator<string>;
        classNameTopRightGrid: Validator<string>;
        enableFixedColumnScroll: Validator<boolean>;
        enableFixedRowScroll: Validator<boolean>;
        fixedColumnCount: Validator<number>;
        fixedRowCount: Validator<number>;
        style: Validator<React.CSSProperties>;
        styleBottomLeftGrid: Validator<React.CSSProperties>;
        styleBottomRightGrid: Validator<React.CSSProperties>;
        styleTopLeftGrid: Validator<React.CSSProperties>;
        styleTopRightGrid: Validator<React.CSSProperties>;
    };

    static defaultProps: {
        classNameBottomLeftGrid: '';
        classNameBottomRightGrid: '';
        classNameTopLeftGrid: '';
        classNameTopRightGrid: '';
        enableFixedColumnScroll: false;
        enableFixedRowScroll: false;
        fixedColumnCount: 0;
        fixedRowCount: 0;
        scrollToColumn: -1;
        scrollToRow: -1;
        style: {};
        styleBottomLeftGrid: {};
        styleBottomRightGrid: {};
        styleTopLeftGrid: {};
        styleTopRightGrid: {};
    };

    forceUpdateGrids(): void;

    /** See Grid#invalidateCellSizeAfterRender */
    invalidateCellSizeAfterRender(params?: Partial<CellPosition>): void;

    /** See Grid#measureAllCells */
    measureAllCells(): void;

    /** See Grid#recomputeGridSize */
    recomputeGridSize(params?: { columnIndex?: number; rowIndex?: number }): void;
    static getDerivedStateFromProps(nextProps: MultiGridProps, prevState: MultiGridState): MultiGridState | null;
}
