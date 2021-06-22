import "jquery";
import { FilterControlFactory } from "../Filtering/Formatter/FilterControlFactory";
import { FilterFunction } from "../Filtering/FilterFunction";
import { FilterFunctionCollection } from "../Filtering/FilterFunctionCollection";
import { FilterPlaceholders } from "../Filtering/FilterPlaceholders";
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
    filter_columnFilters?: boolean;

    /**
     * A value indicating whether the letter-case should be ignored.
     */
    filter_ignoreCase?: boolean;

    /**
     * A value indicating whether the filters should be saved to the client.
     */
    filter_saveFilters?: boolean;

    /**
     * A value indicating whether a search should be performed without having to hit `Enter`.
     */
    filter_liveSearch?: (boolean | number) | MappedSettings<(boolean | number)>;

    /**
     * A value indicating whether only filtered rows should be considered while searching.
     */
    filter_searchFiltered?: boolean;

    /**
     * A jQuery-selector for querying the button for resetting the filter.
     */
    filter_reset?: JQuery.Selector | JQuery;

    /**
     * A value indicating whether the filter should be resetted when `ESC` is hit.
     */
    filter_resetOnEsc?: boolean;

    /**
     * A value indicating whether the filter-controls should be hidden when the table is empty.
     */
    filter_hideEmpty?: boolean;

    /**
     * A value indicating whether the filter should hide automatically.
     */
    filter_hideFilters?: boolean | ((config: TablesorterConfigurationStore<TElement>) => boolean);

    /**
     * The default filters to apply.
     */
    filter_defaultFilter?: MappedSettings<string>;

    /**
     * A set of filters to prevent.
     */
    filter_excludeFilter?: MappedSettings<string>;

    /**
     * The jQuery-selector for querying the external search-box.
     */
    filter_external?: JQuery.Selector;

    /**
     * The filter-controls to apply.
     */
    filter_formatter?: MappedSettings<FilterControlFactory>;

    /**
     * A value indicating whether searches using the `{index}:{query}` in the anyMatch-textbox is allowed.
     */
    filter_columnAnyMatch?: boolean;

    /**
     * A set of classes to apply to the filter-cells.
     */
    filter_cellFilter?: string | string[];

    /**
     * A value indicating whether child-rows should be considered when filtering.
     */
    filter_childRows?: boolean;

    /**
     * A value indicating whether only the filtered column of child-rows should be considered when filtering.
     */
    filter_childByColumn?: boolean;

    /**
     * A value indicating whether siblings should be displayed when filtering.
     */
    filter_childWithSibs?: boolean;

    /**
     * The attribute-name which is used for querying the default filter-value.
     */
    filter_defaultAttrib?: string;

    /**
     * The template for generating the ARIA-label of the filter-control.
     */
    filter_filterLabel?: string;

    /**
     * A set of filter-functions to apply for the columns.
     */
    filter_functions?: MappedSettings<FilterFunctionCollection<TElement> | FilterFunction<TElement>>;

    /**
     * The match-types to apply to the controls.
     */
    filter_matchType?: MatchTypeSettings;

    /**
     * A value indicating whether searches should be performed with the `starts with`-logic.
     */
    filter_startsWith?: boolean;

    /**
     * A class for indicating whether only visible entries should be available in `select`-controls.
     */
    filter_onlyAvail?: string;

    /**
     * The placeholders to set initially.
     */
    filter_placeholder?: FilterPlaceholders;

    /**
     * The sources for the select-controls.
     */
    filter_selectSource?: SelectSources<TElement> | MappedSettings<SelectSources<TElement>>;

    /**
     * The character for separating display-name and value inside the `filter_selectSource`.
     */
    filter_selectSourceSeparator?: string;

    /**
     * A value indicating whether filtering is performed server-side.
     */
    filter_serversideFiltering?: boolean;

    /**
     * The number of miliseconds to wait before performing a search.
     */
    filter_searchDelay?: number;

    /**
     * A value indicating whether filtering should be perormed using parsed data.
     */
    filter_useParsedData?: boolean;

    /**
     * A CSS class which is applied to each filter-cell.
     */
    filter_cssFilter?: string | string[];

    /**
     * A CSS class which is applied for each cel which is filtered.
     */
    filter_filteredRow?: string;
}
