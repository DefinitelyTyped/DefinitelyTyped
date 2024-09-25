import type * as PropTypes from "prop-types";
import { PureComponent } from "react";
import { CellPosition } from "./CellMeasurer";
import { GridProps } from "./Grid";

export type MultiGridProps = {
    classNameBottomLeftGrid?: string | undefined;
    classNameBottomRightGrid?: string | undefined;
    classNameTopLeftGrid?: string | undefined;
    classNameTopRightGrid?: string | undefined;
    enableFixedColumnScroll?: boolean | undefined;
    enableFixedRowScroll?: boolean | undefined;
    fixedColumnCount?: number | undefined;
    fixedRowCount?: number | undefined;
    style?: React.CSSProperties | undefined;
    styleBottomLeftGrid?: React.CSSProperties | undefined;
    styleBottomRightGrid?: React.CSSProperties | undefined;
    styleTopLeftGrid?: React.CSSProperties | undefined;
    styleTopRightGrid?: React.CSSProperties | undefined;
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
        classNameBottomLeftGrid: PropTypes.Validator<string>;
        classNameBottomRightGrid: PropTypes.Validator<string>;
        classNameTopLeftGrid: PropTypes.Validator<string>;
        classNameTopRightGrid: PropTypes.Validator<string>;
        enableFixedColumnScroll: PropTypes.Validator<boolean>;
        enableFixedRowScroll: PropTypes.Validator<boolean>;
        fixedColumnCount: PropTypes.Validator<number>;
        fixedRowCount: PropTypes.Validator<number>;
        style: PropTypes.Validator<React.CSSProperties>;
        styleBottomLeftGrid: PropTypes.Validator<React.CSSProperties>;
        styleBottomRightGrid: PropTypes.Validator<React.CSSProperties>;
        styleTopLeftGrid: PropTypes.Validator<React.CSSProperties>;
        styleTopRightGrid: PropTypes.Validator<React.CSSProperties>;
    };

    static defaultProps: {
        classNameBottomLeftGrid: "";
        classNameBottomRightGrid: "";
        classNameTopLeftGrid: "";
        classNameTopRightGrid: "";
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
    recomputeGridSize(params?: { columnIndex?: number | undefined; rowIndex?: number | undefined }): void;
    static getDerivedStateFromProps(nextProps: MultiGridProps, prevState: MultiGridState): MultiGridState | null;
}

export default MultiGrid;
