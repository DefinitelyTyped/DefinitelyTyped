// Type definitions for markdown-it-highlightjs 3.3
// Project: https://github.com/valeriangalliat/markdown-it-highlightjs
// Definitions by: Wilson Gramer <https://github.com/WilsonGramer>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.5

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
