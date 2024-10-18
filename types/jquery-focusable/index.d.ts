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
