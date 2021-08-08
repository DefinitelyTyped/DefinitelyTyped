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

    protected constructor(text: Text, offsetInText: number, length: number);

    getAncestors(options?: {
        includeSelf?: boolean | undefined;
        parentFirst?: boolean | undefined;
    }): Array<Element | DocumentFragment>;
    getAttribute(key: string): string | number | boolean;
    getAttributeKeys(): ReturnType<Text["getAttributeKeys"]>;
    getAttributes(): ReturnType<Text["getAttributes"]>;
    getPath(): number[];
    hasAttribute(key: string): boolean;
    is(type: string): boolean;
}
