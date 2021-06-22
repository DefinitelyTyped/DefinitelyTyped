import "jquery";

/**
 * Provides selectors for the `pager`-widget.
 */
export interface PagerSelectors {
    /**
     * The selector for querying the pager-container.
     */
    container?: JQuery.Selector | JQuery;

    /**
     * The selector for querying the control to jump to the first page.
     */
    first?: JQuery.Selector | JQuery;

    /**
     * The selector for querying the control to jump to the previous page.
     */
    prev?: JQuery.Selector | JQuery;

    /**
     * The selector for querying the control to jump to the next page.
     */
    next?: JQuery.Selector | JQuery;

    /**
     * The selector for querying the control to jump to the last page.
     */
    last?: JQuery.Selector | JQuery;

    /**
     * The selector for querying the dropdown-control to jump to a specific page.
     */
    gotoPage?: JQuery.Selector | JQuery;

    /**
     * The selector for querying the control to set the page-size.
     */
    pageSize?: JQuery.Selector | JQuery;

    /**
     * The selector for querying the container to print the output to.
     */
    pageDisplay?: JQuery.Selector | JQuery;
}
