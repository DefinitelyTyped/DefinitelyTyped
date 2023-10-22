import { Attr, Attrs, Node, TagNode } from "./TagNode";

export function isTagNode(node: Node): node is TagNode;
export function isStringNode(node: Node): node is string;
export function isEOL(el: string): boolean;
export function keysReduce<V>(
    obj: object,
    reduce: (previousValue: V, currentValue: string, currentIndex: number, array: string[]) => V,
    def: V,
): V;
export function getNodeLength(node: Node): number;
/**
 * Appends value to Tag Node
 */
export function appendToNode(node: TagNode, value: string): void;
/**
 * Replaces " to &qquot;
 */
export function escapeHTML(value: string): string;
/**
 * Acept name and value and return valid html5 attribute string
 */
export function attrValue(name: string, value: any): string;

/**
 * Transforms attrs to html params string
 */
export function attrsToString(values: Attrs | null): string;
/**
 * Gets value from
 * @example
 * getUniqAttr({ 'foo': true, 'bar': bar' }) => 'bar'
 */
export function getUniqAttr(obj: Attrs): Attr | null;
