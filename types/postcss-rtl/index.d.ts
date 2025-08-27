import { PluginCreator } from "postcss";

declare namespace postcssRtl {
    interface Options {
        /**
         * Custom function to add prefixes to selectors
         * @example
         * function addPrefixToSelector(selector, prefix) {
         *     // Make selectors like [dir=rtl] > .selector
         *     return `${prefix} > ${selector}`;
         * }
         */
        addPrefixToSelector?: ((selector: string, prefix: string) => string) | undefined;
        /** Generate for only the specified direction */
        onlyDirection?: "ltr" | "rtl" | undefined;
        /**
         * Whether to add attributes or classes.
         *
         * Attributes: `.foo` -> `[dir=rtl] .foo`\
         * Classes: `.foo` -> `.dir-rtl .foo`
         * @default 'attribute'
         */
        prefixType?: "attribute" | "class" | undefined;
        /**
         * The prefix to use for added attributes/class selectors
         * @default 'dir'
         */
        prefix?: string | undefined;
        /**
         * Remove `rtl:*` comments after processing them
         * @default true
         */
        removeComments?: boolean | undefined;
        /**
         * Assume all styles are written in _RTL_, and generate _LTR_ styles
         * @default false
         */
        fromRTL?: boolean | undefined;
        /** An array of CSS properties to ignore */
        blacklist?: readonly string[] | undefined;
        /** An array of CSS properties to include (only these will be processed) */
        whitelist?: readonly string[] | undefined;
        /**
         * Aliases, passed to rtlcss
         * @see {@link https://rtlcss.com/learn/usage-guide/aliases/}
         */
        aliases?: Record<string, string> | undefined;
    }
}

declare const postcssRtl: PluginCreator<postcssRtl.Options>;

export = postcssRtl;
