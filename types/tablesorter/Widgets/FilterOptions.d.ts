import "jquery";
import { FilterFunction } from "../Filtering/FilterFunction";
import { FilterFunctionCollection } from "../Filtering/FilterFunctionCollection";
import { FilterPlaceholders } from "../Filtering/FilterPlaceholders";
import { FilterControlFactory } from "../Filtering/Formatter/FilterControlFactory";
import { MatchTypeSettings } from "../Filtering/MatchTypeSettings";
import { SelectSources } from "../Filtering/SelectSources";
import { MappedSettings } from "../System/MappedSettings";
import { TablesorterConfigurationStore } from "../System/TablesorterConfigurationStore";

/**
 * Represents options for the `filter`-widget.
 */
export interface FilterOptions<TElement = HTMLElement> {
    /**
     * A value indicating whether filtering is enabled.
     */
    filter_columnFilters?: boolean | undefined;

    /**
     * A value indicating whether the letter-case should be ignored.
     */
    filter_ignoreCase?: boolean | undefined;

    /**
     * A value indicating whether the filters should be saved to the client.
     */
    filter_saveFilters?: boolean | undefined;

    /**
     * A value indicating whether a search should be performed without having to hit `Enter`.
     */
    filter_liveSearch?: (boolean | number) | MappedSettings<(boolean | number)> | undefined;

    /**
     * A value indicating whether only filtered rows should be considered while searching.
     */
    filter_searchFiltered?: boolean | undefined;

    /**
     * A jQuery-selector for querying the button for resetting the filter.
     */
    filter_reset?: JQuery.Selector | JQuery | undefined;

    /**
     * A value indicating whether the filter should be resetted when `ESC` is hit.
     */
    filter_resetOnEsc?: boolean | undefined;

    /**
     * A value indicating whether the filter-controls should be hidden when the table is empty.
     */
    filter_hideEmpty?: boolean | undefined;

    /**
     * A value indicating whether the filter should hide automatically.
     */
    filter_hideFilters?: boolean | ((config: TablesorterConfigurationStore<TElement>) => boolean) | undefined;

    /**
     * The default filters to apply.
     */
    filter_defaultFilter?: MappedSettings<string> | undefined;

    /**
     * A set of filters to prevent.
     */
    filter_excludeFilter?: MappedSettings<string> | undefined;

    /**
     * The jQuery-selector for querying the external search-box.
     */
    filter_external?: JQuery.Selector | undefined;

    /**
     * The filter-controls to apply.
     */
    filter_formatter?: MappedSettings<FilterControlFactory> | undefined;

    /**
     * A value indicating whether searches using the `{index}:{query}` in the anyMatch-textbox is allowed.
     */
    filter_columnAnyMatch?: boolean | undefined;

    /**
     * A set of classes to apply to the filter-cells.
     */
    filter_cellFilter?: string | string[] | undefined;

    /**
     * A value indicating whether child-rows should be considered when filtering.
     */
    filter_childRows?: boolean | undefined;

    /**
     * A value indicating whether only the filtered column of child-rows should be considered when filtering.
     */
    filter_childByColumn?: boolean | undefined;

    /**
     * A value indicating whether siblings should be displayed when filtering.
     */
    filter_childWithSibs?: boolean | undefined;

    /**
     * The attribute-name which is used for querying the default filter-value.
     */
    filter_defaultAttrib?: string | undefined;

    /**
     * The template for generating the ARIA-label of the filter-control.
     */
    filter_filterLabel?: string | undefined;

    /**
     * A set of filter-functions to apply for the columns.
     */
    filter_functions?: MappedSettings<FilterFunctionCollection<TElement> | FilterFunction<TElement>> | undefined;

    /**
     * The match-types to apply to the controls.
     */
    filter_matchType?: MatchTypeSettings | undefined;

    /**
     * A value indicating whether searches should be performed with the `starts with`-logic.
     */
    filter_startsWith?: boolean | undefined;

    /**
     * A class for indicating whether only visible entries should be available in `select`-controls.
     */
    filter_onlyAvail?: string | undefined;

    /**
     * The placeholders to set initially.
     */
    filter_placeholder?: FilterPlaceholders | undefined;

    /**
     * The sources for the select-controls.
     */
    filter_selectSource?: SelectSources<TElement> | MappedSettings<SelectSources<TElement>> | undefined;

    /**
     * The character for separating display-name and value inside the `filter_selectSource`.
     */
    filter_selectSourceSeparator?: string | undefined;

    /**
     * A value indicating whether filtering is performed server-side.
     */
    filter_serversideFiltering?: boolean | undefined;

    /**
     * The number of miliseconds to wait before performing a search.
     */
    filter_searchDelay?: number | undefined;

    /**
     * A value indicating whether filtering should be perormed using parsed data.
     */
    filter_useParsedData?: boolean | undefined;

    /**
     * A CSS class which is applied to each filter-cell.
     */
    filter_cssFilter?: string | string[] | undefined;

    /**
     * A CSS class which is applied for each cel which is filtered.
     */
    filter_filteredRow?: string | undefined;
}
