// Type definitions for json_ml 0.0
// Project: https://github.com/59naga/json-ml
// Definitions by: Alan Plum <https://github.com/pluma>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="cheerio" />

export type Node = string | Element;
export type SimpleElement = [string, Attributes] | [string];
export interface NodeList extends Array<Node> {}
export type Element = SimpleElement & NodeList;
export interface Attributes {
    [key: string]: string;
}
export function parse(xml: string, trim?: boolean): Node[];
export function stringify(
    object: Node[],
    replacer?: ((node: Cheerio) => any) | null,
    indent?: number
): string;
