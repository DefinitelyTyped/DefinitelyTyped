import "jquery";

/**
 * Provides options for the `stickyHeaders`-widget.
 */
export interface StickyHeaderOptions {
    /**
     * A set of classes to add to the sticky header.
     */
    stickyHeaders?: string;

    /**
     * A value indicating whether the table should be resized automatically when data is added to or removed from the table.
     */
    stickyHeaders_addResizeEvent?: boolean;

    /**
     * A value indicating whether the caption should be included in the sticky header.
     */
    stickyHeaders_includeCaption?: boolean;

    /**
     * A jQuery-selector to get an element to append the sticky header to.
     */
    stickyHeaders_appendTo?: JQuery.Selector | JQuery;

    /**
     * A jQuery-selector to get an element to attach the sticky header to.
     */
    stickyHeaders_attachTo?: JQuery.Selector | JQuery;

    /**
     * A string to append to the table-id for the cloned sticky table.
     */
    stickyHeaders_cloneId?: string;

    /**
     * A value indicating whether the filter should be scrolled into view when inputing a filter.
     */
    stickyHeaders_filteredToTop?: boolean;

    /**
     * Either a number of the offset to the top of the browser-window or a jQuery-selector or -object for the elemtn which represents the offset.
     */
    stickyHeaders_offset?: number | JQuery.Selector | JQuery;

    /**
     * The jQuery-selector or -object to monitor for horizontal scrolling.
     */
    stickyHeaders_xScroll?: JQuery.Selector | JQuery;

    /**
     * The jQuery-selector or -object to monitor for vertical scrolling.
     */
    stickyHeaders_yScroll?: JQuery.Selector | JQuery;

    /**
     * The z-index of the sticky header.
     */
    stickyHeaders_zindex?: number;
}
