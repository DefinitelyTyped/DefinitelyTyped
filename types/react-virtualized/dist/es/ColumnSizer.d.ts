import { PureComponent, Validator, Requireable } from 'react';

export type SizedColumnProps = {
    adjustedWidth: number;
    columnWidth: number;
    getColumnWidth: () => number;
    registerChild: any;
};

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
    children: (props: SizedColumnProps) => React.ReactNode;
    /** Optional maximum allowed column width */
    columnMaxWidth?: number | undefined;
    /** Optional minimum allowed column width */
    columnMinWidth?: number | undefined;
    /** Number of columns in Grid or Table child */
    columnCount?: number | undefined;
    /** Width of Grid or Table child */
    width: number;
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
 * High-order component that auto-calculates column-widths for `Grid` cells.
 */
export class ColumnSizer extends PureComponent<ColumnSizerProps> {
    static propTypes: {
        children: Validator<(props: SizedColumnProps) => React.ReactNode>;
        columnMaxWidth: Requireable<number>;
        columnMinWidth: Requireable<number>;
        columnCount: Validator<number>;
        width: Validator<number>;
    };
}

export default ColumnSizer;
