// Type definitions for bootstrap.paginator
// Project: https://github.com/lyonlai/bootstrap-paginator
// Definitions by: derikwhittaker <https://github.com/derikwhittaker>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/// <reference types="jquery"/>

interface PaginatorOptions {
    alignment?: string | undefined;
    size?: string | undefined;
    itemContainerClass?: ((type: string, page: number, current: number) => string) | undefined;
    currentPage?: number | undefined;
    numberOfPages?: number | undefined;
    totalPages?: number | undefined;
    pageUrl?: ((type: string, page: number, current: number) => string) | undefined;
    shouldShowPage?: boolean | undefined;
    itemTexts?: ((type: string, page: number, current: number) => string) | undefined;
    tooltipTitles?: ((type: string, page: number, current: number) => string) | undefined;
    useBootstrapTooltip?: boolean | undefined;
    bootstrapTooltipOptions?: {} | undefined;
    bootstrapMajorVersion?: number | undefined;
    onPageClicked?: ((event: any, originalEvent: any, type: string, page: number) => void) | undefined;
    onPageChanged?: ((event: any, originalEvent: any, type: string, page: number) => void) | undefined;
}

interface JQuery {
    bootstrapPaginator(options?: PaginatorOptions): JQuery;
}
