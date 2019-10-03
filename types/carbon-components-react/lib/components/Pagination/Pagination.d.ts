import * as React from "react";
import { ReactDivAttr } from "../../../typings/shared";

type ExcludedAttributes = "id" | "onChange";
interface InheritedProps extends Omit<ReactDivAttr, ExcludedAttributes> {
    id?: string | number,
}

export interface PaginationProps extends InheritedProps {
    backwardText?: string,
    forwardText?: string,
    isLastPage?: boolean,
    itemsPerPageText?: string,
    itemRangeText?(min: number, max: number, total: number): string,
    itemText?(min: number, max: number): string,
    onChange(data: { page: number, pageSize: number }): void,
    page?: number,
    pageInputDisabled?: boolean,
    pageNumberText?: string,
    pageRangeText?(current: number, total: number): string,
    pageSize?: number,
    pageSizes: number[],
    pagesUnknown?: boolean,
    totalItems?: number,
}

declare class Pagination extends React.Component<PaginationProps> { }

export default Pagination;
