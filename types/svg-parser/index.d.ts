// Type definitions for svg-parser 2.0
// Project: https://github.com/Rich-Harris/svg-parser
// Definitions by: mrmlnc <https://github.com/mrmlnc>
//                 Joel Shinness <https://github.com/JoelCodes>
//                 Piotr Błażejewicz <https://github.com/peterblazejewicz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export interface TextNode {
    type: 'text';
    value?: string | boolean | number | undefined;
}

export interface ElementNode {
    type: 'element';
    tagName?: string | undefined;
    properties?: Record<string, string|number> | undefined;
    children: Array<Node | string>;
    value?: string | undefined;
    metadata?: string | undefined;
}

export type Node = TextNode | ElementNode;

export interface RootNode {
    type: 'root';
    children: [Node];
}

export function parse(source: string): RootNode;

export as namespace svgParser;
