import { Plugin } from "postcss";

declare namespace cologuard {
    interface Options {
        /** Colors of hex codes to ignore */
        ignore?: readonly string[] | undefined;
        /**
         * Scale from 0-100.
         * Lower values are more precise
         * @default 3
         */
        threshold?: number | undefined;
        /**
         * An array of color pairs to ignore
         * @example
         * [['#000000', '#010101']]
         */
        whitelist?: ReadonlyArray<readonly [string, string]> | undefined;
        /**
         * By default, colorguard will complain
         * if identical colors are represented with different notations.
         * For example, `#000`, `#000000`, `rgba(0, 0, 0, 0)`, and `black`.
         * If you want to permit these equivalent notations, set this option to `true`
         * @default false
         * @see {@link <https://github.com/SlexAxton/css-colorguard/tree/master#allowequivalentnotation>}
         */
        allowEquivalentNotation?: boolean | undefined;
    }
}

declare const colorguard: Plugin<cologuard.Options>;

export = colorguard;
