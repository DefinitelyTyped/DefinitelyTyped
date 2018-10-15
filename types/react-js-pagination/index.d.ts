// Type definitions for react-js-pagination 3.0
// Project: https://github.com/vayser/react-js-pagination
// Definitions by: Ernesto Cruz <https://github.com/netoisc>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import * as React from "react";

export interface ReactJsPaginationProps {
    totalItemsCount: number;
    onChange: (pageNumber: number) => void;
    activePage: number;
    itemsCountPerPage?: number;
    pageRangeDisplayed?: number;
    prevPageText?: string| React.ReactElement<any>;
    nextPageText?: string | React.ReactElement<any>;
    lastPageText?: string | React.ReactElement<any>;
    firstPageText?: string | React.ReactElement<any>;
    disabledClass?: string;
    hideDisabled?: boolean;
    hideNavigation?: boolean;
    innerClass?: string;
    itemClass?: string;
    itemClassFirst?: string;
    itemClassPrev?: string;
    itemClassNext?: string;
    itemClassLast?: string;
    linkClass?: string;
    activeClass?: string;
    activeLinkClass?: string;
    linkClassFirst?: string;
    linkClassPrev?: string;
    linkClassNext?: string;
    linkClassLast?: string;
    hideFirstLastPages?: boolean;
    getPageUrl?(): string;
}
declare const Pagination: React.ClassicComponentClass<ReactJsPaginationProps>;

export default Pagination;
