export type Tag = string;
export type Content = Node[];
export interface Attrs {
    [key: string]: Attr;
}
export type Attr = string | number | boolean;

export class TagNode {
    tag: Tag;
    attrs: Attrs;
    content: Content | null;
    constructor(tag: Tag, attrs: Attrs, content: Content | string);

    attr(name: string, value: Attr): Attr;
    append(value: string): void;
    get length(): number;
    toTagStart(options?: { openTag?: string; closeTag?: string }): string;
    toTagEnd(options?: { openTag?: string; closeTag?: string }): string;
    toTagNode(): TagNode;
    toString(options?: { openTag?: string; closeTag?: string }): string;

    static create(tag: Tag, attrs: Attrs, content: Content): TagNode;
    static isOf(node: Node, type: Tag): boolean;
}

export type Node = TagNode | string | number;
export default TagNode;
