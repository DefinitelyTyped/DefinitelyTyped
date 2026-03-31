export default xml;

import * as ltx from "ltx";

declare function xml(...args: Parameters<typeof ltx.createElement>): ReturnType<typeof ltx.createElement>;

type Element = ltx.Element;
type Node = ltx.Node;

declare const Element: typeof ltx.Element;
declare const createElement: typeof ltx.createElement;

declare const escapeXML: typeof ltx.escapeXML;
declare const unescapeXML: typeof ltx.unescapeXML;
declare const escapeXMLText: typeof ltx.escapeXMLText;
declare const unescapeXMLText: typeof ltx.unescapeXMLText;

export { createElement, Element, escapeXML, escapeXMLText, Node, unescapeXML, unescapeXMLText };

export class Parser extends ltx.Parser {
    static readonly XMLError: typeof XMLError;
    readonly parser: ltx.Parser;
    root: Element | null;
    cursor: Element | null;

    onStartElement(name: string, attrs?: string | { [attrName: string]: any }): void;
    onEndElement(name: string): void;
    onText(str: string): void;
}

export class XMLError extends Error {
    readonly name: "XMLError";
}

declare global {
    namespace JSX {
        interface IntrinsicElements {
            [elemName: string]: any;
        }

        type Element = ltx.Element;
    }
}
