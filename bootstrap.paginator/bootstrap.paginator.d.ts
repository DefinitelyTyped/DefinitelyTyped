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
    itemText?: (type, page, current) => any;
    tooltipTitles?: (type, page, current) => string;
    useBootstrapTooltip?: boolean;
    bootstrapTooltipOptions?: {};
    onPageClicked?: (event, originalEvent, type, page) => void;
    onPageChanged?: (event, originalEvent, type, page) => void;
}

interface JQuery {
    bootstrapPaginator(): JQuery;
    bootstrapPaginator(options: PaginatorOptions): JQuery;
}