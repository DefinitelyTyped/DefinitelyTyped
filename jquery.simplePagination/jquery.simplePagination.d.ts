// Type definitions for jQuery simplePagination.js v1.4
// Project: https://github.com/flaviusmatis/simplePagination.js
// Definitions by: Natan Vivo <https://github.com/nvivo/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../jquery/jquery.d.ts" />

interface SimplePaginationOptions {
    items?: number;
    itemsOnPage?: number;
    pages?: number;
    displayedPages?: number;
    edges?: number;
    currentPage?: number;
    hrefTextPrefix?: string;
    hrefTextSuffix?: string;
    prevText?: string;
    nextText?: string;
    cssStyle?: string;
    selectOnClick?: boolean;
    onPageClick?: (page: number, event: any) => void;
    onInit?: () => void;
}

interface JQuery {
    pagination(options?: SimplePaginationOptions): JQuery;
    pagination(method: 'selectPage', pageNumber: number): void;
    pagination(method: 'prevPage'): void;
    pagination(method: 'nextPage'): void;
    pagination(method: 'getPagesCount'): number;
    pagination(method: 'getCurrentPage'): number;
    pagination(method: 'disable'): void;
    pagination(method: 'enable'): void;
    pagination(method: 'destroy'): void;
    pagination(method: 'redraw'): void;
    pagination(method: 'updateItems', items: number): void;
    pagination(method: string): any;
    pagination(method: string, value: any): any;
}
