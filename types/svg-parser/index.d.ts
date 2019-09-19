// Type definitions for svg-parser 2.0
// Project: https://gitlab.com/Rich-Harris/svg-parser#README
// Definitions by: mrmlnc <https://github.com/mrmlnc>
//                 Joel Shinness <https://github.com/JoelCodes>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.1

export interface TextNode {
    type: 'text';
    value?: string | boolean | number;
}

export interface ElementNode {
    type: string;
    tagName?: string;
    properties?: {};
    children: Array<Node | string>;
    value?: string;
    metadata?: string;
}

export type Node = TextNode | ElementNode;

export function parse(source: string): Node;
