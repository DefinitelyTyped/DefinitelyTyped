// Type definitions for JQuery Gray 1.6
// Project: https://github.com/karlhorky/gray
// Definitions by: Anderson Friaça <https://github.com/AndersonFriaca>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/// <reference types="jquery" />

export type Classes = Partial<{
    fade: string;
}>;

export type Options = Partial<{
    fade: boolean;
    classes: Classes;
}>;

declare global {
    interface JQuery {
        gray(options?: Options): JQuery;
        toggleClass(className: 'grayscale-off'): JQuery;
    }
}
