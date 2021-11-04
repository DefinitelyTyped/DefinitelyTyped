import "jquery";
import { TablesorterConfigurationStore } from "../System/TablesorterConfigurationStore";

/**
 * Represents a function for filtering.
 */
export interface FilterFunction<TElement = HTMLElement> {
    /**
     * A function for determining whether to include a row.
     *
     * @param originalContent
     * The original content of the cell.
     *
     * @param normalizedText
     * The normalized content of the cell.
     *
     * @param filterInput
     * The currently applied filter.
     *
     * @param index
     * The index of the column.
     *
     * @param row
     * The row of the cell being filtered.
     *
     * @return
     * A value indicating whether the row should be included.
     */
    (originalContent: string, normalizedText: string, filterInput: string, index: number, row: JQuery, config: TablesorterConfigurationStore<TElement>, data: object): boolean;
}
