// Type definitions for json_ml 0.0
// Project: https://github.com/59naga/json-ml
// Definitions by: Alan Plum <https://github.com/pluma>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.0

/// <reference types="cheerio" />

export type Node = string | [string, ...any[]];
export function parse(xml: string, trim?: boolean): Node[];
export function stringify(
    object: Node[],
    replacer?: ((node: Cheerio) => any) | null,
    indent?: number
): string;
