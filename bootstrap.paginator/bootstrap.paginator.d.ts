// Type definitions for bootstrap.paginator
// Project: https://github.com/lyonlai/bootstrap-paginator
// Definitions by: derikwhittaker <https://github.com/derikwhittaker/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../jquery/jquery.d.ts"/>

interface PaginatorOptions{
    alignment?: string;
    size?: string;
    itemContainerClass?: (type, page, current) => string;
    currentPage?: number;
    numberOfPages?: number;
    totalPages?: number;
    pageUrl?: (type, page, current) => string;
    shouldShowPage?: boolean;
    itemTexts?: (type:string, page:number, current:number) => string;
    tooltipTitles?: (type, page, current) => string;
    useBootstrapTooltip?: boolean;
    bootstrapTooltipOptions?: {};
    bootstrapMajorVersion?: number;
    onPageClicked?: (event, originalEvent, type, page) => void;
    onPageChanged?: (event, originalEvent, type, page) => void;
}

interface JQuery {
    bootstrapPaginator(): JQuery;
    bootstrapPaginator(options: PaginatorOptions): JQuery;
}
