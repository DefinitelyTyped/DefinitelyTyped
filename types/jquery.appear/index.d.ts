// Type definitions for JQuery Appear 1.0
// Project: https://github.com/bas2k/jquery.appear
// Definitions by: Anderson Friaça <https://github.com/AndersonFriaca>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/// <reference types="jquery" />

declare namespace JQueryAppear {
    interface Options {
        /**
         * Data to pass into callback
         */
        data?: any;

        /**
         * Callback is called only in first appear
         */
        one?: boolean;

        /**
         * X accuracy
         */
        accX?: number;

        /**
         * Y accuracy
         */
        accY?: number;
    }
}
interface JQuery {
    /**
     * Initialize appear plugin
     */
    appear(callback: ((element?: HTMLElement, data?: any) => void), options?: JQueryAppear.Options): JQuery;
}
