import "jquery";
import { AjaxDataProcessor } from "./AjaxDataProcessor";
import { AjaxErrorHandler } from "./AjaxErrorHandler";
import { AjaxUrlProcessor } from "./AjaxUrlProcessor";
import { PagerInitialRows } from "./PagerInitialRows";
import { PagerOutputProcessor } from "./PagerOutputProcessor";
import { PageSize } from "./PageSize";

/**
 * Provides options for the pager.
 */
export interface PagerConfiguration<TElement = HTMLElement> {
    /**
     * The url to query data from.
     *
     * Following portions of text are substituted:
     *
     * | Tag                                    | Replacement                                                            |
     * |----------------------------------------|------------------------------------------------------------------------|
     * | `{page}`                               | The zero-based index of the page to show.                              |
     * | `{page+n}`                             | The zero-based index of the page added to `n`.                         |
     * | `{size}`                               | The number of rows to fetch.                                           |
     * | `{sortList:name}` or `{sort:name}`     | A GET-variable called `name` containing the current sorting.           |
     * | `{filterList:name}` or `{filter:name}` | A GET-variable called `name` containing all currently applied filters. |
     */
    ajaxUrl?: string;

    /**
     * Pre-processes the url for `ajax`.
     */
    customAjaxUrl?: AjaxUrlProcessor<TElement>;

    /**
     * The settings for the api-interaction of the pager.
     */
    ajaxObject?: JQueryAjaxSettings;

    /**
     * Handles errors caused by an ajax-request.
     */
    ajaxError?: AjaxErrorHandler<TElement>;

    /**
     * Processes the ajax-result for the `pager`-widget.
     *
     * @param data
     * The result of ajax.
     *
     * @param table
     * The table which is being processed.
     *
     * @param request
     * The ajax-request which processed the `data`.
     *
     * @return
     * The data for the pager to show.
     */
    ajaxProcessing?: AjaxDataProcessor<TElement>;

    /**
     * The output to display in the output-area.
     *
     * Following portions of text are substituted:
     *
     * | Tag                | Replacement                                  |
     * |--------------------|----------------------------------------------|
     * | `{size}`           | The current page size.                       |
     * | `{page}`           | The current page.                            |
     * | `{page:input}`     | The page inputted by the user.               |
     * | `{totalPages}`     | The total amount of pages.                   |
     * | `{filteredPages}`  | The filtered number of pages.                |
     * | `{startRow}`       | The number of the first row being displayed. |
     * | `{startRow:input}` | The start-row inputted by the user.          |
     * | `{endRow}`         | The number of the last row being displayed.  |
     * | `{filteredRows}`   | The amount of filtered rows.                 |
     * | `{totalRows}`      | The total amount of rows.                    |
     */
    output?: string | PagerOutputProcessor<TElement>;

    /**
     * The number of the first page to show.
     */
    page?: number;

    /**
     * The number of the first page to show after applying a filter.
     */
    pageReset?: number | boolean;

    /**
     * The initial page-size.
     */
    size?: PageSize;

    /**
     * A value indicating whether to split child-rows on page-breaks.
     */
    countChildRows?: boolean;

    /**
     * A value indicating whether an ajax-request should be executed after the initialization of the table.
     */
    processAjaxOnInit?: boolean;

    /**
     * The initial amount of rows to show.
     */
    initialRows?: PagerInitialRows;

    /**
     * A value indicating whether to remove the rows while performing sortings for speed up.
     */
    removeRows?: boolean;

    /**
     * The key to of the local storage to save data to.
     */
    storageKey?: string;

    /**
     * A value indicating whether to save the current page locally.
     */
    savePages?: boolean;

    /**
     * The selector for querying the pager-container.
     */
    container?: JQuery.Selector | JQuery;

    /**
     * The selector for querying the control to jump to the first page.
     */
    cssFirst?: JQuery.Selector | JQuery;

    /**
     * The selector for querying the control to jump to the previous page.
     */
    cssPrev?: JQuery.Selector | JQuery;

    /**
     * The selector for querying the control to jump to the next page.
     */
    cssNext?: JQuery.Selector | JQuery;

    /**
     * The selector for querying the control to jump to the last page.
     */
    cssLast?: JQuery.Selector | JQuery;

    /**
     * The selector for querying the dropdown-control to jump to a specific page.
     */
    cssGoto?: JQuery.Selector | JQuery;

    /**
     * The selector for querying the control to set the page-size.
     */
    cssPageSize?: JQuery.Selector | JQuery;

    /**
     * The selector for querying the container to print the output to.
     */
    cssPageDisplay?: JQuery.Selector | JQuery;

    /**
     * A value indicating whether the table should always have the same number of rows even if there is a lesser number of records to show.
     */
    fixedHeight?: boolean;

    /**
     * A value indicating whether the `cssDisabled` class should be applied to non-applicable buttons.
     */
    updateArrows?: boolean;

    /**
     * The css-class to apply to disabled pager-controls.
     */
    cssDisabled?: string;

    /**
     * The css-class to apply to the table-row which displays the error-message in case of an ajax-error.
     */
    cssErrorRow?: string;
}
