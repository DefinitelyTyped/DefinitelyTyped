// Type definitions for @xmpp/xml 0.6
// Project: https://github.com/xmppjs/xmpp.js/tree/master/packages/xml
// Definitions by: BendingBender <https://github.com/BendingBender>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

/// <reference types="node" />

export = xml;

import * as ltx from 'ltx';
import * as escape from 'ltx/lib/escape';
import { EventEmitter } from 'events';

declare function xml(
    name: string,
    attrs?: string | { [key: string]: any },
    ...children: xml.ElementChild[]
): xml.Element;

declare namespace xml {
    function x(
        name: string,
        attrs?: string | { [key: string]: any },
        ...children: ElementChild[]
    ): Element;

    const escapeXML: typeof escape.escapeXML;
    const unescapeXML: typeof escape.unescapeXML;
    const escapeXMLText: typeof escape.escapeXMLText;
    const unescapeXMLText: typeof escape.unescapeXMLText;

    class Element extends ltx.Element {
        attrs: { [key: string]: any };
        append(nodes: ElementChild): Element;
        prepend(nodes: ElementChild): Element;
    }
    type ElementChild = Element | Element[] | string | number | boolean;

    class Parser extends EventEmitter {
        readonly XMLError: typeof XMLError;
        readonly parser: ltx.Parser;
        root: Element | null;
        cursor: Element | null;

        onStartElement(name: string, attrs?: string | { [attrName: string]: any }): void;
        onEndElement(name: string): void;
        onText(str: string): void;
        write(data: Buffer): void;
        end(data: Buffer): void;
    }
}

declare class XMLError extends Error {
    readonly name: 'XMLError';
}

declare global {
    namespace JSX {
        interface IntrinsicElements {
            [elemName: string]: any;
        }

        type Element = xml.Element;
    }
}
