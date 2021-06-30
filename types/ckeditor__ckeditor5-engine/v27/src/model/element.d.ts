import { toMap } from "@ckeditor/ckeditor5-utils";
import Node from "./node";
import Text from "./text";

export default class Element extends Node {
    readonly childCount: number;
    readonly isEmpty: boolean;
    readonly maxOffset: number;
    readonly name: string;

    constructor(name: string, attrs?: Parameters<typeof toMap>[0] | null, children?: Node | Iterable<Node>);

    findAncestor(parentName: string, options?: { includeSelf?: boolean }): Element | null;
    getChild(index: number): Element | Text;
    getChildIndex(node: Node): number;
    getChildStartOffset(node: Node): number;
    getChildren(): IterableIterator<Element | Text>;
    getNodeByPath(relativePath: number[]): Element | Text;
    is(type: string, name?: string): boolean;
    offsetToIndex(offset: number): number;
    toJSON(): ReturnType<Node["toJSON"]> & {
        name: string;
        children?: Array<ReturnType<Element["toJSON"] | Text["toJSON"]>>;
    };

    static fromJSON(json: ReturnType<Element["toJSON"]>): Element;
}
