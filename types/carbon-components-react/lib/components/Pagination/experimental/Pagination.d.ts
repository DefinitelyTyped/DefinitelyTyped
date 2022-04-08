import * as React from "react";
import { ReactAttr } from "../../../../typings/shared";

export interface ExperimentalPaginationProps extends ReactAttr {
    backwardText?: string,
    forwardText?: string,
    initialPage?: number,
    itemRangeText?(min: number, max: number, total: number): string,
    itemText?(min: number, max: number): string,
    itemsPerPageText?: string,
    pageRangeText?(current: number | string, total: number): string,
    pageSizes?: readonly number[],
    pageText?(currentPage: number): string,
    pagesUnknown?: boolean,
    totalItems?: number,
}

declare const Pagination: React.FC<ExperimentalPaginationProps>;

export default Pagination;
