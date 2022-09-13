import { ValidSelectSources } from "./ValidSelectSources";

/**
 * Represents a function for generating select-sources.
 */
export interface FunctionSelectSource<TElement = HTMLElement> {
    /**
     * Generates a set of select-sources.
     *
     * @param table
     * The table which is being filtered.
     *
     * @param index
     * The index of the column to filter.
     *
     * @param onlyAvail
     * A value indicating whether only visible rows should be displayed.
     */
    (table: TElement, index: number, onlyAvail: boolean): ValidSelectSources;
}
