import Document from "./document";
import DocumentFragment from "./documentfragment";
import Element from "./element";
import Node from "./node";
import Text from "./text";

export default class TextProxy {
    readonly data: string;
    readonly document: Document | null;
    readonly isPartial: boolean;
    readonly offsetInText: number;
    readonly offsetSize: number;
    readonly parent: Element | DocumentFragment | null;
    readonly root: Node | DocumentFragment;
    readonly textNode: Text;

    getAncestors(options?: { includeSelf?: boolean; parentFirst?: boolean }): Array<Element | DocumentFragment>;
    is(type: string): boolean;
}
