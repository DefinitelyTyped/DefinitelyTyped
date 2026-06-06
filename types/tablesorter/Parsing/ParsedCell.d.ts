import "jquery";
import { ParsedOption } from "./ParsedOption";

/**
 * Represents a parsed row.
 */
export interface ParsedCell extends ParsedOption {
    /**
     * The index of the row.
     */
    rowIndex: number;

    /**
     * The index of the `tbody` of the row.
     */
    tbodyIndex: number;

    /**
     * The jQuery-object which contains the row.
     */
    $row: JQuery;

    /**
     * The jQuery-object which contains the cell.
     */
    $cell: JQuery;
}
