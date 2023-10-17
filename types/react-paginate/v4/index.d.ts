import * as React from "react";

interface ReactPaginateProps {
    /**
     * The total number of pages.
     */
    pageCount: number;

    /**
     * The range of pages displayed.
     */
    pageRangeDisplayed: number;

    /**
     * The number of pages to display for margins.
     */
    marginPagesDisplayed: number;

    /**
     * Label for the `previous` button.
     */
    previousLabel?: string | JSX.Element | undefined;

    /**
     * Label for the `next` button.
     */
    nextLabel?: string | JSX.Element | undefined;

    /**
     * Label for ellipsis.
     */
    breakLabel?: string | JSX.Element | undefined;

    /**
     * The classname on tag `li` of the ellipsis element.
     */
    breakClassName?: string | JSX.Element | undefined;

    /**
     * The method to call when a page is clicked. Exposes the current page object as an argument.
     */
    onPageChange?(selectedItem: { selected: number }): void;

    /**
     * The initial page selected.
     */
    initialPage?: number | undefined;

    /**
     * To override selected page with parent prop.
     */
    forcePage?: number | undefined;

    /**
     * Disable onPageChange callback with initial page. Default: false
     */
    disableInitialCallback?: boolean | undefined;

    /**
     * The classname of the pagination container.
     */
    containerClassName?: string | undefined;

    /**
     * The classname on tag `li` of each page element.
     */
    pageClassName?: string | undefined;

    /**
     * The classname on tag `a` of each page element.
     */
    pageLinkClassName?: string | undefined;

    /**
     * The classname for the active page.
     */
    activeClassName?: string | undefined;

    /**
     * The classname on tag `li` of the `previous` button.
     */
    previousClassName?: string | undefined;

    /**
     * The classname on tag `li` of the `next` button.
     */
    nextClassName?: string | undefined;

    /**
     * The classname on tag `a` of the `previous` button.
     */
    previousLinkClassName?: string | undefined;

    /**
     * The classname on tag `a` of the `next` button.
     */
    nextLinkClassName?: string | undefined;

    /**
     * The classname for disabled `previous` and `next` buttons.
     */
    disabledClassName?: string | undefined;

    /**
     * The method is called to generate the href attribute value on tag a of each page element.
     */
    hrefBuilder?(pageIndex: number): void;

    /**
     * Extra context to add to the aria-label HTML attribute.
     */
    extraAriaContext?: string | undefined;
}

declare const ReactPaginate: React.ComponentClass<ReactPaginateProps>;
export = ReactPaginate;
