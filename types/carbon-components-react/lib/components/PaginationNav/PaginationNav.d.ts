import { ForwardRefReturn, ReactAttr, InternationalProps } from "../../../typings/shared";

export type PaginationNavTranslationKey =
    | "carbon.pagination-nav.next"
    | "carbon.pagination-nav.previous"
    | "carbon.pagination-nav.item"
    | "carbon.pagination-nav.active"
    | "carbon.pagination-nav.of";

export interface PaginationNavProps extends Omit<ReactAttr, "onChange">, InternationalProps<PaginationNavTranslationKey> {
    onChange?(page: number): void;
    itemsShown?: number,
    loop?: boolean,
    page?: number,
    totalItems?: number,
}

declare const PaginationNav: ForwardRefReturn<HTMLElement, PaginationNavProps>;

export default PaginationNav;
