// Type definitions for remark-abbr 1.4
// Project: https://github.com/zestedesavoir/zmarkdown, https://zestedesavoir.github.io/zmarkdown/
// Definitions by: Luke Carrier <https://github.com/LukeCarrier>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 4.0

import { Plugin } from 'unified';

declare namespace remarkAbbr {
    type Abbr = Plugin<[Options?]>;

    interface Options {
        expandFirst?: boolean;
    }
}

declare const remarkAbbr: remarkAbbr.Abbr;
export = remarkAbbr;
