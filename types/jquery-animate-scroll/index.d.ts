// Type definitions for JQuery Animate Scroll 1.0
// Project: https://github.com/risan/jquery-animate-scroll
// Definitions by: Anderson Friaça <https://github.com/AndersonFriaca>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/// <reference types="jquery" />

export type Options = Partial<{
    $container: JQuery;
    speed: number;
    offset: number;
}>;

declare global {
    interface JQuery {
        animateScroll(options?: Options): JQuery;
        scrollHere(options?: Options): JQuery;
    }

    interface JQueryStatic {
        scrollTo(element: JQuery, options?: Options): void;
    }
}
