/// <reference types="jquery" />

interface SimplePaginationOptions {
    /**
     * Total number of items that will be used to calculate the pages.
     *
     * @memberof SimplePaginationOptions
     */
    items?: number | undefined;
    /**
     * Number of items displayed on each page.
     *
     * @memberof SimplePaginationOptions
     */
    itemsOnPage?: number | undefined;
    /**
     *     If specified, items and itemsOnPage will not be used to calculate the number of pages.
     *
     * @memberof SimplePaginationOptions
     */
    pages?: number | undefined;
    /**
     * How many page numbers should be visible while navigating.
     * Minimum allowed: 3 (previous, current & next)
     *
     * @memberof SimplePaginationOptions
     */
    displayedPages?: number | undefined;
    /**
     * How many page numbers are visible at the beginning/ending of the pagination.
     *
     * @memberof SimplePaginationOptions
     */
    edges?: number | undefined;
    /**
     * Which page will be selected immediately after init.
     *
     * @memberof SimplePaginationOptions
     */
    currentPage?: number | undefined;
    /**
     * A string used to build the href attribute, added before the page number.
     *
     * @memberof SimplePaginationOptions
     */
    hrefTextPrefix?: string | undefined;
    /**
     * Another string used to build the href attribute, added after the page number.
     *
     * @memberof SimplePaginationOptions
     */
    hrefTextSuffix?: string | undefined;
    /**
     * Text to be display on the previous button.
     *
     * @memberof SimplePaginationOptions
     */
    prevText?: string | undefined;
    /**
     * Text to be display on the next button.
     *
     * @memberof SimplePaginationOptions
     */
    nextText?: string | undefined;
    /**
     * The class of the CSS theme.
     *
     * @memberof SimplePaginationOptions
     */
    cssStyle?: string | undefined;
    /**
     * Set to false if you don't want to select the page immediately after click.
     *
     * @memberof SimplePaginationOptions
     */
    selectOnClick?: boolean | undefined;
    useAnchors?: boolean | undefined;
    ellipseText?: string | undefined;
    /**
     * When this option is true,
     * clicking on the ellipse will replace the ellipse
     * with a number type input in which you can manually set the resulting page.
     *
     * @memberof SimplePaginationOptions
     */
    ellipsePageSet?: boolean | undefined;
    listStyle?: boolean | undefined;
    /**
     * A collection of labels that will be used to render the pagination items, replacing the numbers.
     *
     * @memberof SimplePaginationOptions
     */
    labelMap?: any[] | undefined;
    nextAtFront?: boolean | undefined;
    invertPageOrder?: boolean | undefined;
    useStartEdge?: boolean | undefined;
    useEndEdge?: boolean | undefined;
    /**
     * Function to call when a page is clicked.
     * Page number and event are optional parameters.
     *
     * @memberof SimplePaginationOptions
     */
    onPageClick?: ((page: number, event: any) => void) | undefined;
    /**
     * Function to call when the pagination is initialized.
     *
     * @memberof SimplePaginationOptions
     */
    onInit?: (() => void) | undefined;
}

interface JQuery {
    pagination(options?: SimplePaginationOptions): JQuery;
    /**
     * selectPage - Select a page based on page number.
     *
     * @param selectPage
     * @param {number} pageNumber
     * @memberof JQuery
     */
    pagination(method: "selectPage", pageNumber: number): void;
    /**
     * prevPage - Selects the previous page.
     *
     * @param prevPage
     * @returns {JQuery}
     * @memberof JQuery
     */
    pagination(method: "prevPage"): JQuery;
    /**
     * nextPage - Select the next page.
     *
     * @param nextPage
     * @returns {JQuery}
     * @memberof JQuery
     */
    pagination(method: "nextPage"): JQuery;
    pagination(method: "selectPage"): JQuery;
    /**
     * getPagesCount - Returns the total number of pages.
     *
     * @param getPagesCount
     * @returns {number}
     * @memberof JQuery
     */
    pagination(method: "getPagesCount"): number;
    pagination(method: "setPagesCount", count: number): void;
    /**
     * getCurrentPage - Returns the current page number.
     *
     * @param getCurrentPage
     * @returns {number}
     * @memberof JQuery
     */
    pagination(method: "getCurrentPage"): number;
    /**
     * disable - Disables pagination functionality.
     *
     * @param disable
     * @returns {JQuery}
     * @memberof JQuery
     */
    pagination(method: "disable"): JQuery;
    /**
     * enable - Enables the pagination after it was previously disabled.
     *
     * @param enable
     * @returns {JQuery}
     * @memberof JQuery
     */
    pagination(method: "enable"): JQuery;
    /**
     * destroy - Visually destroys the pagination, any existing settings are kept.
     *
     * @param destroy
     * @returns {JQuery}
     * @memberof JQuery
     */
    pagination(method: "destroy"): JQuery;
    /**
     * redraw - The pagination is drawn again using the existing settings. (useful after you have destroyed a pagination for example)
     *
     * @param redraw
     * @returns {JQuery}
     * @memberof JQuery
     */
    pagination(method: "redraw"): JQuery;
    /**
     * drawPage - takes a page number as a parameter and it sets the "currentPage" value to the given page number and draws the pagination
     *
     * @param drawPage
     * @param {number} pageNumber
     * @returns {JQuery}
     * @memberof JQuery
     */
    pagination(method: "drawPage", pageNumber: number): JQuery;
    /**
     * updateItems - allows to dynamically change how many items are rendered by the pagination
     *
     * @param updateItems
     * @param {number} items
     * @memberof JQuery
     */
    pagination(method: "updateItems", items: number): void;
    /**
     * updateItemsOnPage - allows to dynamically change how many items are rendered on each page
     *
     * @param updateItemsOnPage
     * @param {number} itemsOnPage
     * @returns {JQuery}
     * @memberof JQuery
     */
    pagination(method: "updateItemsOnPage", itemsOnPage: number): JQuery;
    pagination(method: "getItemsOnPage"): number;
    pagination(method: string): any;
    pagination(method: string, value: any): any;
}
