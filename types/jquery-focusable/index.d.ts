// Type definitions for JQuery Focusable 1.0
// Project: https://github.com/makeup-jquery/jquery-focusable
// Definitions by: Anderson Friaça <https://github.com/AndersonFriaca>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/// <reference types="jquery" />

export type Options = Partial<{
    /**
     * Find elements with tabindex equal to -1
     */
    findNegativeTabindex: boolean;

    /**
     * Find elements with tabindex greater than 0
     */
    findPositiveTabindex: true;
}>;

declare global {
    interface JQuery {
        focusable(options?: Options): JQuery;
    }
}
