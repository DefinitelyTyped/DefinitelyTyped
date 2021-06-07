import Element from "./element";
import TextProxy from "./textproxy";
import NodeList from "./nodelist";
import DocumentFragment from "./documentfragment";
import { toMap } from "@ckeditor/ckeditor5-utils";

export type NodeSet = Node | TextProxy | string | NodeList | DocumentFragment | Iterable<NodeSet>;

export default class Node {
    readonly endOffset: number | null;
    readonly index: number | null;
    readonly nextSibling: Node | null;
    readonly offsetSize: number;
    readonly parent: Element | DocumentFragment | null;
    readonly previousSibling: Node | null;
    readonly root: Node | DocumentFragment;
    readonly startOffset: number | null;

    constructor(attrs?: Parameters<typeof toMap>[0]);
    getAncestors(options?: { includeSelf?: boolean; parentFirst?: boolean }): Array<Element | DocumentFragment>;
    getAttribute(key: string): string | undefined;
    getAttributeKeys(): IterableIterator<string>;
    getAttributes(): IterableIterator<[string, string | number | boolean]>;
    getCommonAncestor(node: Node, options?: { includeSelf?: boolean }): Element | DocumentFragment | null;
    getPath(): number[];
    hasAttribute(key: string): boolean;
    is(type: string): boolean;
    isAfter(node: Node): boolean;
    isAttached(): boolean;
    isBefore(node: Node): boolean;
    toJSON(): Record<string, string | number | boolean>;
}
