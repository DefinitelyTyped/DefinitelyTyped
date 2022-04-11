// Type definitions for remark-prism 1.3
// Project: https://github.com/sergioramos/remark-prism#readme
// Definitions by: Hojun Bun <https://github.com/bunhojun>
//                 Stephen Weiss <https://github.com/stephencweiss>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 4.0

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
    type Prism = Plugin<[Options?]>;

    interface Options {
        transformInlineCode?: boolean;
        plugins?: SupportedPlugins[];
    }
}

declare const remarkPrism: remarkPrism.Prism;
export = remarkPrism;
