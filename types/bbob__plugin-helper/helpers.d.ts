import { Node, StringNode, TagNode } from "bbob__plugin-helper";

export function isTagNode(node: Node): node is TagNode;
export function isStringNode(node: Node): node is StringNode;
export function isEOL(el: string): boolean
type ObjectKey = string | number | symbol
export function keysReduce<T extends ObjectKey>(obj: {[key in T]: any}, reduce: (previousValue: T, currentValue: T, currentIndex: number, array: T[]) => T, def: T): T
export function getNodeLength(node: Node): boolean;
export function escapeHTML(value: string): string
export function attrValue(name: string, value: any): string
export function attrsToString(values: any): string // TODO
export function getUniqAttr<T extends ObjectKey>(obj: {[key in T]: T}): T | null