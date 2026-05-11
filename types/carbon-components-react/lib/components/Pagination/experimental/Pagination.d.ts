import * as React from "react";
import { ReactAttr } from "../../../../typings/shared";

export interface ExperimentalPaginationProps extends ReactAttr {
    backwardText?: string | undefined;
    forwardText?: string | undefined;
    initialPage?: number | undefined;
    itemRangeText?(min: number, max: number, total: number): string;
    itemText?(min: number, max: number): string;
    itemsPerPageText?: string | undefined;
    pageRangeText?(current: number | string, total: number): string;
    pageSizes?: readonly number[] | undefined;
    pageText?(currentPage: number): string;
    pagesUnknown?: boolean | undefined;
    totalItems?: number | undefined;
}

declare const Pagination: React.FC<ExperimentalPaginationProps>;

export default Pagination;
