import * as React from 'react';
import { ReactDivAttr } from '../../../typings/shared';

type ExcludedAttributes = 'id' | 'onChange';

export interface PaginationPageSize {
    text: string;
    value: string;
}

export interface PaginationProps extends Omit<ReactDivAttr, ExcludedAttributes> {
    backwardText?: string | undefined;
    forwardedRef?: React.ForwardedRef<HTMLDivElement>;
    forwardText?: string | undefined;
    id?: number | string | undefined;
    isLastPage?: boolean | undefined;
    itemsPerPageText?: string | undefined;
    itemRangeText?(min: number, max: number, total: number): string;
    itemText?(min: number, max: number): string;
    onChange(data: { page: number; pageSize: number }): void;
    page?: number | undefined;
    pageInputDisabled?: boolean | undefined;
    pageNumberText?: string | undefined;
    pageRangeText?(current: number, total: number): string;
    pageSize?: number | undefined;
    pageSizeInputDisabled?: boolean | undefined;
    pageSizes: readonly number[] | readonly PaginationPageSize[];
    pageText?(page: number): string;
    pagesUnknown?: boolean | undefined;
    size?: 'sm' | 'md' | 'lg' | undefined;
    totalItems?: number | undefined;
}

declare class Pagination extends React.Component<PaginationProps> {}

export default Pagination;
