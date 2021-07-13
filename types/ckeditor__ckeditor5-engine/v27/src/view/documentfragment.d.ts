import Document from "./document";
import Node from "./node";
import { Item } from "./item";

export default class DocumentFragment implements Iterable<Node> {
    readonly childCount: number;
    readonly document: Document;
    readonly isEmpty: boolean;
    readonly parent: null;
    readonly root: this;

    [Symbol.iterator](): Iterator<Node>;
    _appendChild(items: Item | Iterable<Item>): number;
    _insertChild(index: number, items: Item | Iterable<Item>): number;
    _removeChildren(index: number, howMany?: number): Node[];
    getChild(index: number): Node;
    getChildIndex(node: Node): number;
    getChildren(): IterableIterator<Node>;
    is(type: string): boolean;
}
