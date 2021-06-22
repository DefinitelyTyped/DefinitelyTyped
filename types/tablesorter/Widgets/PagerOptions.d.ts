import "jquery";
import { AjaxDataProcessor } from "../Paging/AjaxDataProcessor";
import { AjaxErrorHandler } from "../Paging/AjaxErrorHandler";
import { AjaxUrlProcessor } from "../Paging/AjaxUrlProcessor";
import { PagerClasses } from "../Paging/PagerClasses";
import { PagerInitialRows } from "../Paging/PagerInitialRows";
import { PagerOutputProcessor } from "../Paging/PagerOutputProcessor";
import { PagerSelectors } from "../Paging/PagerSelectors";
import { PageSize } from "../Paging/PageSize";

/**
 * Provides options for the `pager`-widget.
 */
export interface PagerOptions<TElement = HTMLElement> {
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
    pager_ajaxUrl?: string;

    /**
     * Pre-processes the url for `ajax`.
     */
    pager_customAjaxUrl?: AjaxUrlProcessor<TElement>;

    /**
     * The settings for the api-interaction of the pager.
     */
    pager_ajaxObject?: JQueryAjaxSettings;

    /**
     * Handles errors caused by an ajax-request.
     */
    pager_ajaxError?: AjaxErrorHandler<TElement>;

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
    pager_ajaxProcessing?: AjaxDataProcessor<TElement>;

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
    pager_output?: string | PagerOutputProcessor<TElement>;

    /**
     * The number of the first page to show.
     */
    pager_startPage?: number;

    /**
     * The number of the first page to show after applying a filter.
     */
    pager_pageReset?: number | boolean;

    /**
     * The initial page-size.
     */
    pager_size?: PageSize;

    /**
     * A value indicating whether to split child-rows on page-breaks.
     */
    pager_countChildRows?: boolean;

    /**
     * A value indicating whether an ajax-request should be executed after the initialization of the table.
     */
    pager_processAjaxOnInit?: boolean;

    /**
     * The initial amount of rows to show.
     */
    pager_initialRows?: PagerInitialRows;

    /**
     * The key to of the local storage to save data to.
     */
    pager_storageKey?: string;

    /**
     * A value indicating whether to save the current page locally.
     */
    pager_savePages?: boolean;

    /**
     * A value indicating whether to remove the rows while performing sortings for speed up.
     */
    pager_removeRows?: boolean;

    /**
     * The selectors for for handling click-events.
     */
    pager_selectors?: PagerSelectors;

    /**
     * The css-classes to apply to the pager-controls.
     */
    pager_css?: PagerClasses;

    /**
     * A value indicating whether the table should always have the same number of rows even if there is a lesser number of records to show.
     */
    pager_fixedHeight?: boolean;

    /**
     * A value indicating whether the `pager_css.disabled` class should be applied to non-applicable buttons.
     */
    pager_updateArrows?: boolean;
}
