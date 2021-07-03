// Type definitions for postcss-focus-within 4.0
// Project: https://github.com/csstools/postcss-focus-within#readme
// Definitions by: Piotr Błażejewicz <https://github.com/peterblazejewicz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
import { Plugin } from 'postcss';

/**
 * PostCSS Focus Within lets you use the `:focus-within` pseudo-class in CSS,
 * following the Selectors Level 4 specification.
 */
declare namespace focusWithin {
    /**
     * @see {@link https://github.com/csstools/postcss-focus-within#options}
     */
    interface Options {
        /**
         * The preserve option defines whether the original selector should remain.
         * By default, the original selector is preserved.
         * @default true
         */
        preserve?: boolean;
        /**
         * The replaceWith option defines the selector to replace `:focus-within`.
         * By default, the replacement selector is `[focus-within]`.
         * @default `[focus-within]`
         */
        replaceWith?: string;
    }

    type FocusWithin = Plugin<Options>;
}

declare const focusWithin: focusWithin.FocusWithin;

export = focusWithin;
