import { PureComponent, Validator, Requireable } from 'react'

export type SizedColumnProps = {
    adjustedWidth: number,
    columnWidth: number,
    getColumnWidth: () => number,
    registerChild: any
}

export type ColumnSizerProps = {
    /**
     * Function responsible for rendering a virtualized Grid.
     * This function should implement the following signature:
     * ({ adjustedWidth, getColumnWidth, registerChild }) => PropTypes.element
     *
     * The specified :getColumnWidth function should be passed to the Grid's :columnWidth property.
     * The :registerChild should be passed to the Grid's :ref property.
     * The :adjustedWidth property is optional; it reflects the lesser of the overall width or the width of all columns.
     */
    children?: (props: SizedColumnProps) => React.ReactNode;
    /** Optional maximum allowed column width */
    columnMaxWidth?: number;
    /** Optional minimum allowed column width */
    columnMinWidth?: number;
    /** Number of columns in Grid or Table child */
    columnCount?: number;
    /** Width of Grid or Table child */
    width: number;
}
/**
 * High-order component that auto-calculates column-widths for `Grid` cells.
 */
export class ColumnSizer extends PureComponent<ColumnSizerProps> {
    static propTypes: {
        children: Validator<(props: SizedColumnProps) => React.ReactNode>,
        columnMaxWidth: Requireable<number>,
        columnMinWidth: Requireable<number>,
        columnCount: Validator<number>,
        width: Validator<number>
    };

    constructor(props: ColumnSizerProps, context: any);

    componentDidUpdate(prevProps: ColumnSizerProps, prevState: any): void;

    render(): JSX.Element;
}
