import Document from "./document";
import Element from "./element";
import DocumentFragment from "./documentfragment";

export default abstract class Node {
    readonly document: Document;
    readonly index: number | null;
    readonly nextSibling: Node | null;
    readonly parent: Element | DocumentFragment | null;
    readonly previousSibling: Node | null;
    readonly root: Node | DocumentFragment;

    getAncestors(options?: { includeSelf?: boolean; parentFirst?: boolean }): Array<Element | DocumentFragment>;
    getCommonAncestor(node: Node, options?: { includeSelf?: boolean }): Element | DocumentFragment | null;
    getPath(): number[];
    is(type: string): boolean;
    isAfter(node: Node): boolean;
    isAttached(): boolean;
    isBefore(node: Node): boolean;
    isSimilar(otherElement: Node): boolean;
    toJSON(): {
        _textData?: string;
        document: string;
    };
}
