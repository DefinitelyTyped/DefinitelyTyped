import { ForwardRefReturn, InternationalProps, ReactAttr } from "../../../typings/shared";

export type PaginationNavTranslationKey =
    | "carbon.pagination-nav.next"
    | "carbon.pagination-nav.previous"
    | "carbon.pagination-nav.item"
    | "carbon.pagination-nav.active"
    | "carbon.pagination-nav.of";

export interface PaginationNavProps
    extends Omit<ReactAttr, "onChange">, InternationalProps<PaginationNavTranslationKey>
{
    onChange?(page: number): void;
    itemsShown?: number | undefined;
    loop?: boolean | undefined;
    page?: number | undefined;
    totalItems?: number | undefined;
}

declare const PaginationNav: ForwardRefReturn<HTMLElement, PaginationNavProps>;

export default PaginationNav;
