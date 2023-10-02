import { Node } from "@bbob/plugin-helper"

export type Options = {
    onSkip: boolean
}

export class CharGrabber {
    constructor(source: string, options?: Options)
    skip(num: number, silent: boolean): void
    hasNext(): boolean
    getCurr(): string
    getRest(): string
    getNext(): string | null
    getPrev(): string | null
    isLast(): boolean
    includes(val: string): boolean
    grabWhile(cond: (curr: string) => boolean, silent: boolean): string
    grabN(num?: number): string
    substrUntilChar(char: string): string
}

/**
 * Creates a grabber wrapper for source string, that helps to iterate over string char by char
 */
export function createCharGrabber(source: string, options?: Options): CharGrabber

export function trimChar(str: string, charToRemove: string): string

export function unquote(str: string): string

export type NodeListValue = Node
export class NodeList {
    constructor(values?: NodeListValue[])

    push(value: NodeListValue): void
    toArray(): NodeListValue[]
    getLast(): NodeListValue | null
    flushLast(): NodeListValue | boolean
}

export function createList(values?: NodeListValue[]): NodeList