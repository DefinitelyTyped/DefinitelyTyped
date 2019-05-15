import "jquery";
import { RelativeSortDefinition } from "../Sorting/RelativeSortDefinition";
import { SortDefinition } from "../Sorting/SortDefinition";
import { TriggerCallbackHandler } from "./TriggerCallbackHandler";

/**
 * The names and the data-types of the trigger.
 */
export interface TriggerNameMap<TElement = HTMLElement> {
    /**
     * Applies a sort to the table.
     */
    sorton: [ReadonlyArray<(SortDefinition | RelativeSortDefinition)>, TriggerCallbackHandler<TElement>?];

    /**
     * Resets the sorting.
     */
    sortReset: [TriggerCallbackHandler<TElement>?];

    /**
     * Adds rows to the table.
     */
    addRows: [JQuery | string, boolean, TriggerCallbackHandler<TElement>?];

    /**
     * Removes the tablesorter from the table.
     */
    destroy: [boolean, TriggerCallbackHandler<TElement>?];

    /**
     * Applies the widget to the table.
     */
    applyWidgetId: string;

    /**
     * Applies the configured widgets to the table.
     */
    applyWidgets: TriggerCallbackHandler<TElement>;

    /**
     * Refreshes the widgets.
     */
    refreshWidgets: [boolean?, boolean?];

    /**
     * Removes widgets.
     */
    removeWidget: string | ReadonlyArray<string> | boolean;

    /**
     * Updates the data of the table-body.
     */
    update: [boolean | ReadonlyArray<SortDefinition>, TriggerCallbackHandler<TElement>?];

    /**
     * Updates the data of the table-body.
     */
    updateRows: [boolean | ReadonlyArray<SortDefinition>, TriggerCallbackHandler<TElement>?];

    /**
     * Updates the cache and optionally adds new `tbody`s.
     */
    updateCache: [TriggerCallbackHandler<TElement>?, JQuery?];

    /**
     * Updates the cell of the table.
     */
    updateCell: [JQuery, (boolean | ReadonlyArray<SortDefinition>)?, TriggerCallbackHandler<TElement>?];

    /**
     * Updates the table-headers.
     */
    updateHeaders: TriggerCallbackHandler<TElement>;

    /**
     * Updates the data of the whole table.
     */
    updateAll: [(boolean | ReadonlyArray<SortDefinition>)?, TriggerCallbackHandler<TElement>?];

    /**
     * Performs a search.
     */
    search: [ReadonlyArray<string>?] | boolean;

    /**
     * Opens the specified page.
     */
    pageSet: number;

    /**
     * Sets the specified size for the page.
     */
    pageSize: number;

    /**
     * Opens the specified page with the specified size.
     */
    pageAndSize: [number, number];

    /**
     * Updates the pager and opens the specified page.
     */
    pagerUpdate: number;
}
