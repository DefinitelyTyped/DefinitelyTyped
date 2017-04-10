import { PureComponent, Validator, Requireable } from 'react'

export type SizedColumnProps = {
    adjustedWidth: number,
    getColumnWidth: () => number,
    registerChild: any
}

export type ColumnSizerProps = {
    children?: (props: SizedColumnProps) => React.ReactNode;
    columnMaxWidth?: number;
    columnMinWidth?: number;
    columnCount?: number;
    width: number;
}
/**
 * High-order component that auto-calculates column-widths for `Grid` cells.
 */
export class ColumnSizer extends PureComponent<ColumnSizerProps, {}> {
    static propTypes: {
        /**
         * Function responsible for rendering a virtualized Grid.
         * This function should implement the following signature:
         * ({ adjustedWidth, getColumnWidth, registerChild }) => PropTypes.element
         *
         * The specified :getColumnWidth function should be passed to the Grid's :columnWidth property.
         * The :registerChild should be passed to the Grid's :ref property.
         * The :adjustedWidth property is optional; it reflects the lesser of the overall width or the width of all columns.
         */
        children: Validator<(props: SizedColumnProps) => React.ReactNode>,

        /** Optional maximum allowed column width */
        columnMaxWidth: Requireable<number>,

        /** Optional minimum allowed column width */
        columnMinWidth: Requireable<number>,

        /** Number of columns in Grid or Table child */
        columnCount: Validator<number>,

        /** Width of Grid or Table child */
        width: Validator<number>
    };

    constructor(props: ColumnSizerProps, context: any);

    componentDidUpdate(prevProps: ColumnSizerProps, prevState: any): void;

    render(): JSX.Element;
}
