/// <reference types="jquery" />

export interface Options {
    minWidth?: number | undefined;
    activeClass?: string | undefined;
    containerSelector?: string | undefined;
    padding?: {
        top?: number | undefined;
        bottom?: number | undefined;
    } | undefined;
}
declare global {
    interface JQuery {
        pin(options?: Options): JQuery;
    }
}
