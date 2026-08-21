/// <reference types="jquery" />

interface JQueryRowGridJSOptions {
    minMargin?: number | undefined;
    maxMargin?: number | undefined;
    itemSelector: string;
}

interface JQuery {
    rowGrid(options?: JQueryRowGridJSOptions): JQuery;
    rowGrid(appended: string): JQuery;
}
