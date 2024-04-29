import * as React from "react";

export interface ReactJsPaginationProps {
    totalItemsCount: number;
    onChange: (pageNumber: number) => void;
    activePage: number;
    itemsCountPerPage?: number | undefined;
    pageRangeDisplayed?: number | undefined;
    prevPageText?: string | React.ReactElement | undefined;
    nextPageText?: string | React.ReactElement | undefined;
    lastPageText?: string | React.ReactElement | undefined;
    firstPageText?: string | React.ReactElement | undefined;
    disabledClass?: string | undefined;
    hideDisabled?: boolean | undefined;
    hideNavigation?: boolean | undefined;
    innerClass?: string | undefined;
    itemClass?: string | undefined;
    itemClassFirst?: string | undefined;
    itemClassPrev?: string | undefined;
    itemClassNext?: string | undefined;
    itemClassLast?: string | undefined;
    linkClass?: string | undefined;
    activeClass?: string | undefined;
    activeLinkClass?: string | undefined;
    linkClassFirst?: string | undefined;
    linkClassPrev?: string | undefined;
    linkClassNext?: string | undefined;
    linkClassLast?: string | undefined;
    hideFirstLastPages?: boolean | undefined;
    getPageUrl?: ((pageNumber: number) => string) | undefined;
}
declare const Pagination: React.ClassicComponentClass<ReactJsPaginationProps>;

export default Pagination;
