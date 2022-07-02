/**
 * Represents options for the `column`-widget.
 */
export interface ColumnOptions {
    /**
     * The names of the classes to apply when sorting in chronological order.
     */
    columns?: string[] | undefined;

    /**
     * A value indicating whether the class specified in `columns` should also be applied to the table-head.
     */
    columns_thead?: boolean | undefined;

    /**
     * A value indicating whether the class specified in `columns` should also be applied to the table-foot.
     */
    columns_tfoot?: boolean | undefined;
}
