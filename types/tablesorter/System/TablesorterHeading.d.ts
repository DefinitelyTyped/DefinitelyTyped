import { ColumnFilter } from "../Filtering/ColumnFilter";
import { EmptySorting } from "../Sorting/EmptySorting";
import { SortOrder } from "../Sorting/SortOrder";
import { StringSorting } from "../Sorting/StringSorting";
import { TablesorterConfigBase } from "../System/TablesorterConfigBase";

/**
 * Represents settings for a table header generated using `tablesorter`.
 */
export interface TablesorterHeading extends TablesorterConfigBase {
    /**
     * Either the name of the parser to use for sorting or a value indicating whether sorting is enabled.
     */
    sorter?: string | boolean;

    /**
     * Either the name of the parser to use for text-extraction or a value indicating whether text-extraction is enabled.
     */
    parser?: string | boolean;

    /**
     * A value indicating whether the column should be resizable.
     */
    resizable?: boolean;

    /**
     * The sorting to apply for empty cells.
     */
    empty?: EmptySorting;

    /**
     * The sorting to apply for text-cells.
     */
    string?: StringSorting;

    /**
     * The filter-concept for the column.
     */
    filter?: ColumnFilter;

    /**
     * The locked sort-order of the heading.
     */
    lockedOrder?: SortOrder;
}
