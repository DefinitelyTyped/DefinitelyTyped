// Type definitions for react-html-parser 2.0
// Project: https://github.com/wrakky/react-html-parser#readme
// Definitions by: Spencer Elliott <https://github.com/elliottsj>
//                 Wooram Jun <https://github.com/chatoo2412>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import { ReactElement } from "react";
import { DomElement } from "htmlparser2";

export interface Transform {
    (node: DomElement, index: number, transform?: Transform): ReactElement | void | null;
}

export interface Options {
    decodeEntities?: boolean;
    transform?: Transform;
    preprocessNodes?(nodes: DomElement[]): any;
}

export function convertNodeToElement(
    node: DomElement,
    index: number,
    transform: Transform,
): ReactElement;

export function processNodes(nodes: DomElement[], transform: Transform): ReactElement[];

export default function HtmlParser(html: string, options?: Options): ReactElement[];
