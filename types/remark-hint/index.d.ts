// Type definitions for remark-hint 1.0
// Project: https://github.com/sergioramos/remark-hint
// Definitions by: Neko <https://github.com/Cattttttttt>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Minimum TypeScript Version: 4.5

import { Plugin } from 'unified';
import { Root } from 'mdast';

declare const remarkHint: Plugin<[], Root, Root>;
export = remarkHint;
