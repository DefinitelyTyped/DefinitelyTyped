// Type definitions for postcss-resolve-nested-selector 0.1
// Project: https://github.com/davidtheclark/postcss-resolve-nested-selector
// Definitions by: Remco Haszing <https://github.com/remcohaszing>
//                 Masafumi Koba <https://github.com/ybiquitous>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { Node } from "postcss";

/**
 * Returns an array of selectors resolved from `selector`.
 */
declare function resolvedNestedSelector(selector: string, node: Node): string[];

export = resolvedNestedSelector;
