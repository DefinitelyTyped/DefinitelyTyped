import { Content, TagNode } from "@bbob/plugin-helper";

export function iterate(t: any[], cb: (val: any) => any): any[];
export function iterate(t: TagNode, cb: (val: any) => any): TagNode;

export function same(expected: any, actual: any): boolean;

export function match<T, V>(expression: T[], cb: (val: T) => V): Array<T | V>;
