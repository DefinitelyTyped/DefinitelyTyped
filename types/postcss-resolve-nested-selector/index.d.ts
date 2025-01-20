import { Node } from "postcss";

/**
 * Returns an array of selectors resolved from `selector`.
 */
declare function resolvedNestedSelector(selector: string, node: Node): string[];

export = resolvedNestedSelector;
