// Type definitions for JQuery Pin 1.0
// Project: https://github.com/webpop/jquery.pin
// Definitions by: Anderson Friaça <https://github.com/AndersonFriaca>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/// <reference types="jquery" />

export interface Options {
    minWidth?: number;
    activeClass?: string;
    containerSelector?: string;
    padding?: {
        top?: number;
        bottom?: number;
    };
}
declare global {
    interface JQuery {
        pin(options?: Options): JQuery;
    }
}
