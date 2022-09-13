import "jquery";
import { ParsedOption } from "../Parsing/ParsedOption";

/**
 * Represents the static instance of the `filter`-widget.
 */
export interface FilterStatic<TElement = HTMLElement> {
    /**
     * Adds new controls to the tablesorter as external search-filters.
     *
     * @param table
     * The table to add the external search to.
     * @param controls
     * The controls to bind as external search-controls.
     *
     * @param forceStart
     * A value indicating whether a new search should be performed after adding the controls.
     */
    bindSearch(table: JQuery<TElement> | TElement, controls: JQuery, forceStart: boolean): void;

    /**
     * Updates a select-control.
     *
     * @param table
     * The table to build the selec-control for.
     *
     * @param column
     * The index of the column to build the select-control for.
     *
     * @param options
     * The options to display in the select-control.
     *
     * @param replace
     * A value indicating whether to replace the current options with the new options.
     *
     * @param visibleOnly
     * A value indicating whether the new options should only include visible row-values if no `options` are defined.
     */
    buildSelect(table: JQuery<TElement> | TElement, column: number, options: ReadonlyArray<any> | string | JQuery, replace: boolean, visibleOnly?: boolean): void;

    /**
     * Gets all available column-values of a column.
     *
     * @param table
     * The table to get the options from.
     *
     * @param column
     * The index of the column to get the options from.
     *
     * @param visibleOnly
     * A value indicating whether only visible column-values should be included.
     *
     * @return
     * The values which appear in the column.
     */
    getOptionSource(table: JQuery<TElement> | TElement, column: number, visibleOnly?: boolean): ParsedOption[];

    /**
     * Gets all available column-values of a column.
     *
     * @param table
     * The table to get the options from.
     *
     * @param column
     * The index of the column to get the options from.
     *
     * @param visibleOnly
     * A value indicating whether only visible column-values should be included.
     *
     * @return
     * The values which appear in the column.
     */
    getOptions(table: JQuery<TElement> | TElement, column: number, visibleOnly?: boolean): string[];

    /**
     * Processes and sorts the options according to the options of the specified `column`.
     *
     * @param table
     * The table to process the options for.
     *
     * @param column
     * The column to add the options to.
     *
     * @param options
     * The options to add.
     */
    processOptions(table: JQuery<TElement> | TElement, column: number | null | undefined, options: ReadonlyArray<any>): string[];
}
