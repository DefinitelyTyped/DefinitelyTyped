// Type definitions for react-paginate 7.1
// Project: https://github.com/AdeleD/react-paginate
// Definitions by: Simon Hartcher <https://github.com/deevus>
//                 Wouter Hardeman <https://github.com/wouterhardeman>
//                 pegel03 <https://github.com/pegel03>
//                 Simon Archer <https://github.com/archy-bold>
//                 Yasunori Ohoka <https://github.com/yasupeke>
//                 Shingo Sato <https://github.com/sugarshin>
//                 SPWizard01 <https://github.com/SPWizard01>
//                 Kevin Rambaud <https://github.com/kevinrambaud>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import * as React from 'react';

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
    previousLabel?: React.ReactNode;

    /**
     * Label for the `next` button.
     */
    nextLabel?: React.ReactNode;

    /**
     * Label for ellipsis.
     */
    breakLabel?: string | React.ReactNode;

    /**
     * The classname on tag `li` of the ellipsis element.
     */
    breakClassName?: string;

    /**
     * The classname on tag `a` of the ellipsis element.
     */
    breakLinkClassName?: string;

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
    initialPage?: number;

    /**
     * To override selected page with parent prop.
     */
    forcePage?: number;

    /**
     * Disable onPageChange callback with initial page. Default: false
     */
    disableInitialCallback?: boolean;

    /**
     * The classname of the pagination container.
     */
    containerClassName?: string;

    /**
     * The classname on tag `li` of each page element.
     */
    pageClassName?: string;

    /**
     * The classname on tag `a` of each page element.
     */
    pageLinkClassName?: string;

    /**
     * Function to set the text on page links. Defaults to `(page) => page`
     */
    pageLabelBuilder?: (page: number) => string;

    /**
     * The classname for the active page.
     */
    activeClassName?: string;

    /**
     * The classname for the active link.
     */
    activeLinkClassName?: string;

    /**
     * The classname on tag `li` of the `previous` button.
     */
    previousClassName?: string;

    /**
     * The classname on tag `li` of the `next` button.
     */
    nextClassName?: string;

    /**
     * The classname on tag `a` of the `previous` button.
     */
    previousLinkClassName?: string;

    /**
     * The classname on tag `a` of the `next` button.
     */
    nextLinkClassName?: string;

    /**
     * The classname for disabled `previous` and `next` buttons.
     */
    disabledClassName?: string;

    /**
     * The method is called to generate the href attribute value on tag a of each page element.
     */
    hrefBuilder?(pageIndex: number): void;

    /**
     * @deprecated The extraAriaContext prop is deprecated. You should now use the ariaLabelBuilder instead.
     * Extra context to add to the aria-label HTML attribute.
     */
    extraAriaContext?: string;

    /**
     * The method is called to generate the `aria-label` attribute value on each page link
     */
    ariaLabelBuilder?: (pageIndex: number, selected: boolean) => string;

    /**
     * The event to listen onto before changing the selected page. Default is: "onClick".
     */
    eventListener?: string;
}

declare const ReactPaginate: React.ComponentClass<ReactPaginateProps>;
export default ReactPaginate;
