// Type definitions for remark-prism 1.3
// Project: https://github.com/sergioramos/remark-prism#readme
// Definitions by: Hojun Bun <https://github.com/bunhojun>
//                 Stephen Weiss <https://github.com/stephencweiss>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 4.0

import { Root } from 'mdast';
import { Plugin } from 'unified';

type SupportedPlugins =
    | 'autolinker'
    | 'command-line'
    | 'data-uri-highlight'
    | 'diff-highlight'
    | 'inline-color'
    | 'keep-markup'
    | 'line-numbers'
    | 'show-invisibles'
    | 'treeview';

declare namespace remarkPrism {
    interface Options {
        transformInlineCode?: boolean;
        plugins?: SupportedPlugins[];
    }

    /**
     * Plugin to use prism with remark.
     * https://github.com/unifiedjs/unified/blob/main/index.d.ts#L488-L489
     */
    type Prism = Plugin<[Options?] | undefined[], Root, Root>;
}

declare const remarkPrism: remarkPrism.Prism;
export = remarkPrism;
