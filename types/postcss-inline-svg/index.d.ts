import { PluginCreator } from "postcss";

declare namespace postcssInlineSvg {
    interface Options {
        /**
         * Array of paths to resolve URL. Paths are tried in order, until an existing file is found.
         * If omitted, path will be relative to source file if it was specified
         */
        paths?: readonly string[];

        /**
         * Removes all `fill` attributes before applying specified. Passed `RegExp` filters files by ID
         * @default false
         */
        readonly removeFill?: RegExp | boolean;

        /**
         * Removes all `stroke` attributes before applying specified. Passed `RegExp` filters files by ID
         * @default false
         */
        removeStroke?: RegExp | boolean;

        /**
         * Processes SVG after applying parameters
         */
        encode?: (svg: string) => string;

        /**
         * Transforms SVG after `encode` function and generates URL
         */
        transform?: (svg: string, path: string) => string;

        /**
         * Adds `xmlns` attribute to SVG if not present
         * @default true
         */
        xmlns?: boolean;
    }
}

declare const postcssInlineSvg: PluginCreator<postcssInlineSvg.Options>;

export = postcssInlineSvg;
