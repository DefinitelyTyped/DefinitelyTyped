// Type definitions for remark-hint 1.0
// Project: https://github.com/sergioramos/remark-hint
// Definitions by: Neko <https://github.com/NotEvenANeko>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Minimum TypeScript Version: 4.5

import { Root } from "mdast";
import { Plugin } from "unified";

declare const remarkHint: Plugin<[], Root, Root>;
export = remarkHint;
