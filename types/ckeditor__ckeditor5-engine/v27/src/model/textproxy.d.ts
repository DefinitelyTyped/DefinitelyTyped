import DocumentFragment from "./documentfragment";
import Element from "./element";
import Node from "./node";
import Text from "./text";

export default class TextProxy {
    readonly data: string;
    readonly endOffset: number;
    readonly isPartial: boolean;
    readonly offsetInText: number;
    readonly offsetSize: number;
    readonly parent: Element | DocumentFragment | null;
    readonly root: Node | DocumentFragment;
    readonly startOffset: number;
    readonly textNode: Text;

    getAncestors(options?: { includeSelf?: boolean; parentFirst?: boolean }): Array<Element | DocumentFragment>;
    getAttribute(key: string): string | number | boolean;
    getAttributeKeys(): ReturnType<Text["getAttributeKeys"]>;
    getAttributes(): ReturnType<Text["getAttributes"]>;
    getPath(): number[];
    hasAttribute(key: string): boolean;
    is(type: string): boolean;
}
