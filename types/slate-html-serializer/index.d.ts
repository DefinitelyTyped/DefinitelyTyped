// Type definitions for slate-html-serializer 0.6
// Project: https://github.com/ianstormtaylor/slate
// Definitions by: Brandon Shelton <https://github.com/YangusKhan>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.6
import * as React from 'react';
import { Slate } from 'slate';

export interface Rule {
    deserialize?: (el: Element, next: (elements: Element[] | NodeList | Array<Node & ChildNode>) => any) => any;
    serialize?: (obj: any, children: string) => React.ReactNode;
}

export interface HtmlOptions {
    rules?: Rule[];
    defaultBlock?: Slate.BlockProperties;
    parseHtml?: (html: string) => HTMLElement;
}

export default class Html {
    constructor(options?: HtmlOptions);

    deserialize(html: string, options: { toJSON: true }): Slate.ValueJSON;
    deserialize(html: string, options?: { toJSON?: false }): Slate.Value;

    serialize(value: Slate.Value, options?: { render?: true }): string;
    serialize(value: Slate.Value, options: { render: false }): Element[];

    protected rules: Rule[];
    protected defaultBlock: Slate.BlockProperties;
    protected parseHtml: (html: string) => HTMLElement;

    protected deserializeElements: (elements: HTMLElement[]) => Slate.Node[];
    protected deserializeElement: (element: HTMLElement) => any;
    protected deserializeMark: (mark: Slate.Mark) => Slate.Node[];

    protected serializeNode: (node: Slate.Node) => string;
    protected serializeLeaf: (leaf: Slate.Leaf) => string;
    protected serializeString: (string: string) => string;
}
