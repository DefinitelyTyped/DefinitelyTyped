import * as React from "react";
import { ReactDivAttr } from "../../../typings/shared";

type ExcludedAttributes = "id" | "onChange";

export interface PaginationPageSize {
    text: string,
    value: string,
}

export interface PaginationProps extends Omit<ReactDivAttr, ExcludedAttributes> {
    backwardText?: string,
    forwardText?: string,
    id?: number | string,
    isLastPage?: boolean,
    itemsPerPageText?: string,
    itemRangeText?(min: number, max: number, total: number): string,
    itemText?(min: number, max: number): string,
    onChange(data: { page: number, pageSize: number }): void,
    page?: number,
    /**
     * @deprecated
     */
    pageInputDisabled?: boolean,
    pageNumberText?: string,
    pageRangeText?(current: number, total: number): string,
    pageSize?: number,
    pageSizes: readonly number[] | readonly PaginationPageSize[],
    pageText?(page: number): string,
    pagesUnknown?: boolean,
    totalItems?: number,
}

declare class Pagination extends React.Component<PaginationProps> { }

export default Pagination;
