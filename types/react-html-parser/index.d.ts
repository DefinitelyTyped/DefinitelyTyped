import { DomElement } from "htmlparser2";
import { ReactElement } from "react";

export interface Transform {
    (node: DomElement, index: number, transform?: Transform): ReactElement | void | null;
}

export interface Options {
    decodeEntities?: boolean | undefined;
    transform?: Transform | undefined;
    preprocessNodes?(nodes: DomElement[]): any;
}

export function convertNodeToElement(
    node: DomElement,
    index: number,
    transform: Transform,
): ReactElement;

export function processNodes(nodes: DomElement[], transform: Transform): ReactElement[];

export default function HtmlParser(html: string, options?: Options): ReactElement[];
