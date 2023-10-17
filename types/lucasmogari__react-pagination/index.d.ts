import * as React from "react";

export interface UseNavigationParameters {
    page?: number | undefined;
    arrows?: boolean | undefined;
    numbers?: boolean | undefined;
    totalItems: number;
    itemsPerPage: number;
    maxPageItems?: number | undefined;
    getPageItemProps: (...parameters: any[]) => void;
}

export enum PageVariant {
    "before" = "before",
    "next" = "next",
    "gap" = "gap",
}

export interface PageItemProps {
    disabled?: boolean | undefined;
    "aria-current"?: boolean | undefined;
    onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

export interface PageItem {
    current?: boolean | undefined;
    disabled?: boolean | undefined;
    props: PageItemProps;
    page: PageVariant | number;
}

export type Page = PageVariant | number;

export interface UseNavigationPayload {
    page: number;
    size: number;
    goTo: (page: Page) => void;
    next: () => void;
    arrows: boolean;
    toItem: number;
    numbers: boolean;
    previous: () => void;
    fromItem: number;
    totalItems: number;
    totalPages: number;
    getPageItem: (pageIndex: number) => PageItem;
    itemsPerPage: number;
    maxPageItems: number;
    setTotalItems: (totalItem: number) => void;
    setMaxPageItems: (maxPageItems: number) => void;
}

export function useNavigation(parameters: UseNavigationParameters): UseNavigationPayload;
