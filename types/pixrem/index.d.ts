import { Plugin } from "postcss";

declare namespace pixrem {
    /** @see {@link <https://github.com/robwierzbowski/node-pixrem#options>} */
    interface Options {
        /**
         * The root element font size.
         * Can be `px`, `rem`, `em`, `%`, or unitless pixel value.
         * Pixrem also tries to get the root font-size from CSS (`html` or `:root`)
         * and overrides this option.
         * Use {@link html} option to disable this behaviour
         * @default 16
         */
        rootValue?: string | number | undefined;
        /**
         * *Replaces* rules containing `rem`s instead of adding fallbacks
         * @default false
         */
        replace?: boolean | undefined;
        /**
         * Generates fallback in at-rules too (media-queries)
         * @default false
         */
        atrules?: boolean | undefined;
        /**
         * Overrides root font-size from CSS `html {}` or `:root {}`
         * @default true
         */
        html?: boolean | undefined;
        /**
         * Sets browser's range you want to target, based on browserslist
         * @see {@link <https://github.com/ai/browserslist>}
         * @default 'ie <= 8'
         */
        browsers?: string | readonly string[] | undefined;
        /**
         * Control the significant digits after the decimal point
         * @default 3
         */
        unitPrecision?: number | undefined;
    }
}

declare const pixrem: Plugin<pixrem.Options>;

export = pixrem;
