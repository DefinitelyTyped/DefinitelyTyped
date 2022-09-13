import { WidgetOptions } from "./WidgetOptions";

/**
 * Represents the configuration-store of the widgets.
 */
export interface WidgetOptionStore<TElement> extends WidgetOptions<TElement> {
    /**
     * A value indicating whether the filters have initialized.
     */
    filter_initialized: boolean;

    /**
     * The jQuery-object containing the cloned table for the sticky headers.
     */
    $sticky: JQuery;

    /**
     * A jQuery-object containing all external filters.
     */
    filter_$externalFilters: JQuery;

    /**
     * A jQuery-object containing all filters which are bound to all columns.
     */
    filter_$anyMatch: JQuery;
}
