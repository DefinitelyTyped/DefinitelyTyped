import * as React from "react";
import { BlockProperties, Leaf, Mark, Node as SlateNode, Value, ValueJSON } from "slate";

export interface Rule {
    deserialize?:
        | ((el: Element, next: (elements: Element[] | NodeList | Array<Node & ChildNode>) => any) => any)
        | undefined;
    serialize?: ((obj: any, children: string) => React.ReactNode) | undefined;
}

export interface HtmlOptions {
    rules?: Rule[] | undefined;
    defaultBlock?: BlockProperties | string | undefined;
    parseHtml?: ((html: string) => HTMLElement) | undefined;
}

export default class Html {
    constructor(options?: HtmlOptions);

    deserialize(html: string, options: { toJSON: true }): ValueJSON;
    deserialize(html: string, options?: { toJSON?: false | undefined }): Value;

    serialize(value: Value, options?: { render?: true | undefined }): string;
    serialize(value: Value, options: { render: false }): Element[];

    protected rules: Rule[];
    protected defaultBlock: BlockProperties;
    protected parseHtml: (html: string) => HTMLElement;

    protected deserializeElements: (elements: HTMLElement[]) => SlateNode[];
    protected deserializeElement: (element: HTMLElement) => any;
    protected deserializeMark: (mark: Mark) => SlateNode[];

    protected serializeNode: (node: SlateNode) => string;
    protected serializeLeaf: (leaf: Leaf) => string;
    protected serializeString: (string: string) => string;
}
