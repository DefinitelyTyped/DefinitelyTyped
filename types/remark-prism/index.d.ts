// Type definitions for remark-prism 1.3
// Project: https://github.com/sergioramos/remark-prism#readme
// Definitions by: Hojun Bun <https://github.com/bunhojun>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 4.0

import { Plugin } from 'unified';

declare namespace remarkPrism {
    type Prism = Plugin<[Options?]>;

    interface Options {
        transformInlineCode?: boolean | undefined;
        plugins?: [
            'autolinker'?,
            'command-line'?,
            'data-uri-highlight'?,
            'diff-highlight'?,
            'inline-color'?,
            'keep-markup'?,
            'line-numbers'?,
            'show-invisibles'?,
            'treeview'?,
        ];
    }
}

declare const remarkPrism: remarkPrism.Prism;
export = remarkPrism;
