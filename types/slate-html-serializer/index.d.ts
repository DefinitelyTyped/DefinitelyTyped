// Type definitions for slate-html-serializer 0.6
// Project: https://github.com/ianstormtaylor/slate
// Definitions by: Brandon Shelton <https://github.com/YangusKhan>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8
import * as React from 'react';
import { BlockProperties, ValueJSON, Value, Node, Mark, Leaf } from 'slate';

export interface Rule {
    deserialize?: (el: Element, next: (elements: Element[] | NodeList | Array<Node & ChildNode>) => any) => any;
    serialize?: (obj: any, children: string) => React.ReactNode;
}

export interface HtmlOptions {
    rules?: Rule[];
    defaultBlock?: BlockProperties;
    parseHtml?: (html: string) => HTMLElement;
}

export default class Html {
    constructor(options?: HtmlOptions);

    deserialize(html: string, options: { toJSON: true }): ValueJSON;
    deserialize(html: string, options?: { toJSON?: false }): Value;

    serialize(value: Value, options?: { render?: true }): string;
    serialize(value: Value, options: { render: false }): Element[];

    protected rules: Rule[];
    protected defaultBlock: BlockProperties;
    protected parseHtml: (html: string) => HTMLElement;

    protected deserializeElements: (elements: HTMLElement[]) => Node[];
    protected deserializeElement: (element: HTMLElement) => any;
    protected deserializeMark: (mark: Mark) => Node[];

    protected serializeNode: (node: Node) => string;
    protected serializeLeaf: (leaf: Leaf) => string;
    protected serializeString: (string: string) => string;
}
