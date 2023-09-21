export function isTagNode(node: any): boolean
export function isStringNode(node: any): boolean
export function isEOL(el: string): boolean
export function keysReduce<T extends string>(obj: {[key in T]: any}, reduce: (previousValue: T, currentValue: T, currentIndex: number, array: T[]) => T, def: T): T
export function getNodeLength(node: any): boolean;
export function escapeHTML(value: string): string
export function attrValue(name: string, value: any): string
export function attrsToString(values: any): string // TODO
export function getUniqAttr<T extends string>(obj: {[key in T]: T}): T | null
