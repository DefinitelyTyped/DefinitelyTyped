// Type definitions for react-paginate v4.2.0
// Project: https://github.com/AdeleD/react-paginate
// Definitions by: Simon Hartcher <https://github.com/deevus>, Wouter Hardeman <https://github.com/wouterhardeman>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.1

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
    previousLabel?: string | JSX.Element;

    /**
     * Label for the `next` button.
     */
    nextLabel?: string | JSX.Element;

    /**
     * Label for ellipsis.
     */
    breakLabel?: string | JSX.Element;

    /**
     * The classname on tag `li` of the ellipsis element.
     */
    breakClassName?: string | JSX.Element;

    /**
     * The method to call when a page is clicked. Exposes the current page object as an argument.
     */
    onPageChange?: Function;

    /**
     * The initial page selected.
     */
    initialPage?: number;

    /**
     * To override selected page with parent prop.
     */
    forcePage?: number;

    /**
     * Disable `onPageChange` callback with initial page. Default: `false`
     */
    disableInitialCallback?: boolean

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
     * The classname for the active page.
     */
    activeClassName?: string;

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
     * The method is called to generate the `href` attribute value on tag `a` of each page element.
     */
    hrefBuilder?: Function;
}

declare const ReactPaginate: React.ComponentClass<ReactPaginateProps>;
export = ReactPaginate;
