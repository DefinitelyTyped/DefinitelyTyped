import { Plugin } from "postcss";

declare namespace postcssGray {
    interface Options {
        /**
         * The `preserve` option determines whether the original `gray()` function
         * should be preserved or replaced.
         * By default, the `gray()` function is replaced.
         * By setting `preserve` to `true`, the original `gray()` function is preserved
         * @default false
         * @example
         * ```css
         * body {
         *   background-color: gray(100);
         *   color: gray(0 / 90%);
         * }
         *
         * body {
         *     background-color: gray(100);
         *     background-color: rgb(255,255,255);
         *     color: gray(0 / 90%);
         *     color: rgba(0,0,0,.9);
         *   }
         * ```
         * @see {@link <https://github.com/postcss/postcss-color-gray#preserve>}
         */
        preserve?: boolean | undefined;
    }
}

declare const postcssGray: Plugin<postcssGray.Options>;

export = postcssGray;
