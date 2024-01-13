export interface TextNode {
    type: "text";
    value?: string | boolean | number | undefined;
}

export interface ElementNode {
    type: "element";
    tagName?: string | undefined;
    properties?: Record<string, string | number> | undefined;
    children: Array<Node | string>;
    value?: string | undefined;
    metadata?: string | undefined;
}

export type Node = TextNode | ElementNode;

export interface RootNode {
    type: "root";
    children: [Node];
}

export function parse(source: string): RootNode;

export as namespace svgParser;
