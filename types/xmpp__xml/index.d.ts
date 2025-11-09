export = xml;

import * as ltx from "ltx";

declare function xml(...args: Parameters<typeof ltx.createElement>): ReturnType<typeof ltx.createElement>;

declare namespace xml {
    type Element = ltx.Element;
    type Node = ltx.Node;

    const Element: typeof ltx.Element;
    const createElement: typeof ltx.createElement;

    const escapeXML: typeof ltx.escapeXML;
    const unescapeXML: typeof ltx.unescapeXML;
    const escapeXMLText: typeof ltx.escapeXMLText;
    const unescapeXMLText: typeof ltx.unescapeXMLText;

    class Parser extends ltx.Parser {
        static readonly XMLError: typeof XMLError;
        readonly parser: ltx.Parser;
        root: Element | null;
        cursor: Element | null;

        onStartElement(name: string, attrs?: string | { [attrName: string]: any }): void;
        onEndElement(name: string): void;
        onText(str: string): void;
    }

    class XMLError extends Error {
        readonly name: "XMLError";
    }
}

declare global {
    namespace JSX {
        interface IntrinsicElements {
            [elemName: string]: any;
        }

        type Element = xml.Element;
    }
}
