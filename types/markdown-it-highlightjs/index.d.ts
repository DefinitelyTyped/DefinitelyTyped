import hljs = require("highlight.js");
import { PluginWithOptions } from "markdown-it";

declare const highlightjs: PluginWithOptions<{
    /**
     * Whether to automatically detect language if not specified.
     */
    auto?: boolean | undefined;

    /**
     * Whether to add the `hljs` class to raw code blocks (not fenced blocks).
     */
    code?: boolean | undefined;

    /**
     * Register other languages which are not included in the standard pack.
     */
    register?: {
        [language: string]: (hljs?: HLJSApi) => Language;
    } | undefined;

    /**
     * Whether to highlight inline code.
     */
    inline?: boolean | undefined;
}>;

export = highlightjs;
