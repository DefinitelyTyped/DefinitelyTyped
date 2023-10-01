import { Attr, Attrs } from "@bbob/core";
import { Node, TagNode } from "./TagNode";

export function isTagNode(node: Node): node is TagNode
export function isStringNode(node: Node): node is string
export function isEOL(el: string): boolean
export function keysReduce<T extends string>(obj: {[key in T]: any}, reduce: (previousValue: T | null, currentValue: T, currentIndex: number, array: T[]) => T | null, def: T | null): T | null
export function getNodeLength(node: Node): boolean;
export function appendToNode(node: TagNode, value: string): void;
export function escapeHTML(value: string): string
export function attrValue(name: string, value: any): string
export function attrsToString(values: any): string // TODO
export function getUniqAttr(obj: Attrs): Attr | null
