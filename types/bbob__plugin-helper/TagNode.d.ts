import { Attr, Attrs } from "@bbob/core"
import { CLOSE_BRAKET, OPEN_BRAKET } from "./char"

export function getTagAttrs(tag: string, params: Attrs): string

export type Tag = string
export type Content = string[]

export class TagNode {
    tag: Tag
    attrs: Attrs
    content: Content
    constructor(tag: Tag, attrs: Attrs, content: Content | string)

    attr(name: string, value: Attr): Attr;
    append(value: string): void
    get length(): number
    toTagStart({openTag = OPEN_BRAKET, closeTag = CLOSE_BRAKET}): string
    toTagEnd({openTag = OPEN_BRAKET, closeTag = CLOSE_BRAKET}): string
    toTagNode(): TagNode
    toString({openTag = OPEN_BRAKET, closeTag = CLOSE_BRAKET}): string

    static create(tag: Tag, attrs: Attrs, content: Content): TagNode
    static isOf(node: Node, type: Tag): boolean
}

export type Node = TagNode | string
export default TagNode