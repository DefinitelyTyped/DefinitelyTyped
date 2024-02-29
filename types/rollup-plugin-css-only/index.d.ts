/// <reference types="node" />
import { OutputBundle, Plugin } from "rollup";

declare namespace css {
    interface Options {
        /**
         *  All CSS files will be parsed by default, but you can also specifically include files
         */
        include?: ReadonlyArray<string | RegExp> | string | RegExp | null;
        /**
         *  CSS files to exclude from being parsed
         */
        exclude?: ReadonlyArray<string | RegExp> | string | RegExp | null;
        /**
         * Callback that will be called ongenerate
         */
        output?:
            | boolean
            | string
            | ((styles: string, styleNodes: Record<string, string>, bundle: OutputBundle) => void)
            | null
            | undefined;
    }
}

declare function css(options?: css.Options): Plugin;
export = css;
