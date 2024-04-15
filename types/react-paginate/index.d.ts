import * as React from "react";

export interface ReactPaginateProps {
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
    previousLabel?: React.ReactNode | undefined;

    /**
     * Label for the `next` button.
     */
    nextLabel?: React.ReactNode | undefined;

    /**
     * Label for ellipsis.
     */
    breakLabel?: string | React.ReactNode | undefined;

    /**
     * The classname on tag `li` of the ellipsis element.
     */
    breakClassName?: string | undefined;

    /**
     * The classname on tag `a` of the ellipsis element.
     */
    breakLinkClassName?: string | undefined;

    /**
     * The method to call when a page is clicked. Exposes the current page object as an argument.
     */
    onPageChange?(selectedItem: { selected: number }): void;

    /**
     * The method to call when an active page is clicked. Exposes the active page object as an argument.
     */
    onPageActive?(selectedItem: { selected: number }): void;

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
     * Function to set the text on page links. Defaults to `(page) => page`
     */
    pageLabelBuilder?: ((page: number) => string) | undefined;

    /**
     * The classname for the active page.
     */
    activeClassName?: string | undefined;

    /**
     * The classname for the active link.
     */
    activeLinkClassName?: string | undefined;

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
     * @deprecated The extraAriaContext prop is deprecated. You should now use the ariaLabelBuilder instead.
     * Extra context to add to the aria-label HTML attribute.
     */
    extraAriaContext?: string | undefined;

    /**
     * The method is called to generate the `aria-label` attribute value on each page link
     */
    ariaLabelBuilder?: ((pageIndex: number, selected: boolean) => string) | undefined;

    /**
     * The event to listen onto before changing the selected page. Default is: "onClick".
     */
    eventListener?: string | undefined;
}

declare const ReactPaginate: React.ComponentClass<ReactPaginateProps>;
export default ReactPaginate;
