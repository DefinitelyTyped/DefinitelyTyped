/**
 * Represents a theme.
 */
export class Theme {
    /**
     * A set of classes to apply to the table.
     */
    table: string;

    /**
     * A set of classes to apply to the caption.
     */
    caption: string;

    /**
     * A set of classes to apply to the header.
     */
    header: string;

    /**
     * A set of classes to apply to unsorted headers.
     */
    sortNone: string;

    /**
     * A set of classes to apply to ascending sorted headers.
     */
    sortAsc: string;

    /**
     * A set of classes to apply to descending sorted headers.
     */
    sortDesc: string;

    /**
     * A set of classes to apply to cells inside the active column.
     */
    active: string;

    /**
     * A set of classes to apply to hovered cells.
     */
    hover: string;

    /**
     * A set of classes to apply to icons.
     */
    icons: string;

    /**
     * A set of classes to apply to icons for unsorted headers.
     */
    iconSortNone: string;

    /**
     * A set of classes to apply to icons for ascending sorted headers.
     */
    iconSortAsc: string;

    /**
     * A set of classes to apply to icons for descending sorted headers.
     */
    iconSortDesc: string;

    /**
     * A set of classes to apply to the filter-row.
     */
    filterRow: string;

    /**
     * A set of classes to apply to even rows.
     */
    even: string;

    /**
     * A set of classes to apply to odd rows.
     */
    odd: string;
}
