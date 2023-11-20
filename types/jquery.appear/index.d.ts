/// <reference types="jquery" />

export interface Options<T> {
    /**
     * Data to pass into callback
     */
    data?: T | undefined;

    /**
     * Callback is called only in first appear
     */
    one?: boolean | undefined;

    /**
     * X accuracy
     */
    accX?: number | undefined;

    /**
     * Y accuracy
     */
    accY?: number | undefined;
}
declare global {
    interface JQuery {
        /**
         * Initialize appear plugin
         */
        appear<T>(callback: (element: HTMLElement, data: T) => void, options?: Options<T>): JQuery;
    }
}
