import Element from "./element";
import Node from "./node";
import Range from "./range";
import Text from "./text";

export default class DocumentFragment implements Iterable<Node> {
    readonly childCount: number;
    readonly isEmpty: boolean;
    readonly markers: Map<string, Range>;
    readonly maxOffset: number;
    readonly parent: null;
    readonly root: DocumentFragment;

    [Symbol.iterator](): Iterator<Element | Text>;
    getChild(index: number): Node | null;
    getChildIndex(node: Node): number | null;
    getChildStartOffset(node: Node): number | null;
    getChildren(): IterableIterator<Element | Text>;
    getNodeByPath(relativePath: number[]): Node | DocumentFragment;
    getPath(): [];
    is(type: string): boolean;
    offsetToIndex(offset: number): number;
    toJSON(): Pick<DocumentFragment, "childCount" | "isEmpty" | "markers" | "maxOffset" | "parent" | "root">;

    static fromJSON(json: FromJSONArg[]): DocumentFragment;
}

interface FromJSONArg {
    name?: string;
    data?: string;
    attributes?: Record<string, string> | Array<[string, string]>;
    children?: FromJSONArg[];
}

export {};
