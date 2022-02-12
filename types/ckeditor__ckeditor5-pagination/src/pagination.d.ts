import { Plugin } from '@ckeditor/ckeditor5-core';

export default class Pagination extends Plugin {
    pageNumber: number;
    totalPages: number;
    scrollToPage(pageNumber: number): void;
}

export interface PaginationConfig {
    enableOnUnsupportedBrowsers?: boolean | undefined;
    pageHeight: string;
    pageMargins: PaginationMarginsConfig;
    pageWidth: string;
}

export interface PaginationMarginsConfig {
    bottom: string;
    left: string;
    right: string;
    top: string;
}

declare module '@ckeditor/ckeditor5-core/src/plugincollection' {
    interface Plugins {
        Pagination: Pagination;
    }
}
