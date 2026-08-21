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
