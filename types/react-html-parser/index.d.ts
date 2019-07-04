// Type definitions for react-html-parser 2.0
// Project: https://github.com/wrakky/react-html-parser#readme
// Definitions by: Spencer Elliott <https://github.com/elliottsj>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import { ReactElement } from "react";

export interface Transform {
    (node: object, index: number, transform?: Transform): ReactElement | void | null;
}

export interface Options {
    decodeEntities?: boolean;
    transform?: Transform;
    preprocessNodes?(nodes: object[]): any;
}

export function convertNodeToElement(
    node: object,
    index: number,
    transform: Transform,
): ReactElement;

export function processNodes(nodes: object[], transform: Transform): ReactElement[];

export default function HtmlParser(html: string, options?: Options): ReactElement[];
