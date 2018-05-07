// Type definitions for Libxmljs v0.14.2
// Project: https://github.com/polotek/libxmljs
// Definitions by: François de Campredon <https://github.com/fdecampredon>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node"/>



import events = require('events');

export declare function parseXml(source: string): XMLDocument;
export declare function parseHtml(source: string): HTMLDocument;
export declare function parseXmlString(source: string, options?: { [key: string]: string }): XMLDocument;
export declare function parseHtmlString(source: string): HTMLDocument;


export declare class XMLDocument {
    constructor(version: number, encoding: string);
    child(idx: number): Element | undefined;
    childNodes(): Element[];
    errors(): SyntaxError[];
    encoding(): string;
    encoding(enc: string): void;
    find(xpath: string): Element[];
    get(xpath: string): Element | undefined;
    node(name: string, content: string): Element;
    root(): Element;
    toString(): string;
    validate(xsdDoc: XMLDocument): boolean;
    validationErrors: XmlError[];
    version(): Number;
}

export declare class HTMLDocument extends XMLDocument {

}


export declare class Element {
    constructor(doc: XMLDocument, name: string, content?: string);
    name(): string;
    name(newName: string): void;
    text(): string;
    attr(name: string): Attribute;
    attr(attr: Attribute): void;
    attr(attrObject: { [key: string]: string; }): void;
    attrs(): Attribute[];
    parent(): Element;
    doc(): XMLDocument;
    child(idx: number): Element | undefined;
    childNodes(): Element[];
    addChild(child: Element): Element;
    nextSibling(): Element;
    nextElement(): Element;
    addNextSibling(siblingNode: Element): Element;
    prevSibling(): Element;
    prevElement(): Element;
    addPrevSibling(siblingNode: Element): Element;
    find(xpath: string): Element[];
    find(xpath: string, ns_uri: string): Element[];
    find(xpath: string, namespaces: { [key: string]: string; }): Element[];
    get(xpath: string): Element | undefined;
    get(xpath: string, ns_uri: string): Element | undefined;
    get(xpath: string, ns_uri: { [key: string]: string; }): Element | undefined;
    defineNamespace(href: string): Namespace;
    defineNamespace(prefix: string, href: string): Namespace;
    namespace(): Namespace;
    namespace(ns: Namespace): void;
    namespace(href: string): void;
    namespace(prefix: string, href: string): void;
    remove(): void;
    path(): string;
    type(): string;
}


export declare class Attribute {
    constructor(node: Element, name: string, value: string);
    constructor(node: Element, name: string, value: string, ns: Namespace);
    name(): string;
    namespace(): Namespace;
    namespace(ns: Namespace): Namespace;
    nextSibling(): Attribute;
    node(): Element;
    prevSibling(): Attribute;
    remove(): void;
    value(): string;
}

export declare class Namespace {
    constructor(node: Element, prefix: string, href: string);
    href(): string;
    prefix(): string;
}

export declare class SaxParser extends events.EventEmitter {
    parseString(source: string): boolean;
}


export declare class SaxPushParser extends events.EventEmitter {
    push(source: string): boolean;
}

export interface XmlError {
    domain: number;
    code: number;
    message: string;
    level: number;
    file?: string;
    column: number;
    line: number;
}
