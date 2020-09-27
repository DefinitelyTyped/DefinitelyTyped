// Type definitions for @lucasmogari/react-navigation 0.0
// Project: https://github.com/lucasmogari/react-pagination
// Definitions by: Laura Beatris <https://github.com/LauraBeatris>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import * as React from 'react';

export interface UseNavigationParameters {
    page?: number;
    arrows?: boolean;
    numbers?: boolean;
    totalItems: number;
    itemsPerPage: number;
    maxPageItems?: number;
    getPageItemProps: (...parameters: any[]) => void;
}

export enum PageVariant {
    'before' = 'before',
    'next' = 'next',
    'gap' = 'gap',
}

export interface PageItemProps {
    disabled?: boolean;
    'aria-current'?: boolean;
    onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

export interface PageItem {
    current?: boolean;
    disabled?: boolean;
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
