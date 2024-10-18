/// <reference types="node"/>
import { EventEmitter } from "events";

export const version: string;
export const libxml_version: string;
export const libxml_parser_version: string;

// eslint-disable-next-line @definitelytyped/strict-export-declare-modifiers
interface StringMap {
    [key: string]: string;
}

// eslint-disable-next-line @definitelytyped/strict-export-declare-modifiers
interface ParserOptions {
    recover?: boolean | undefined;
    noent?: boolean | undefined;
    dtdload?: boolean | undefined;
    doctype?: boolean | undefined;
    dtdattr?: any;
    dtdvalid?: boolean | undefined;
    noerror?: boolean | undefined;
    errors?: boolean | undefined;
    nowarning?: boolean | undefined;
    warnings?: boolean | undefined;
    pedantic?: boolean | undefined;
    noblanks?: boolean | undefined;
    blanks?: boolean | undefined;
    sax1?: boolean | undefined;
    xinclude?: boolean | undefined;
    nonet?: boolean | undefined;
    net?: boolean | undefined;
    nodict?: boolean | undefined;
    dict?: boolean | undefined;
    nsclean?: boolean | undefined;
    implied?: boolean | undefined;
    nocdata?: boolean | undefined;
    cdata?: boolean | undefined;
    noxincnode?: boolean | undefined;
    compact?: boolean | undefined;
    old?: boolean | undefined;
    nobasefix?: boolean | undefined;
    basefix?: boolean | undefined;
    huge?: boolean | undefined;
    oldsax?: boolean | undefined;
    ignore_enc?: boolean | undefined;
    big_lines?: boolean | undefined;
    baseUrl?: string | undefined;
}

export function parseXml(source: string, options?: ParserOptions): Document;
export function parseXmlString(source: string, options?: ParserOptions): Document;

export function parseHtml(source: string, options?: ParserOptions): Document;
export function parseHtmlString(source: string, options?: ParserOptions): Document;
export function parseHtmlFragment(source: string, options?: ParserOptions): Document;

export function memoryUsage(): number;
export function nodeCount(): number;

export class Document {
    /**
     * Create a new XML Document
     * @param version XML document version, defaults to 1.0
     * @param encoding Encoding, defaults to utf8
     */
    constructor(version?: number, encoding?: string);

    errors: SyntaxError[];
    validationErrors: ValidationError[];

    child(idx: number): Element | null;
    childNodes(): Element[];
    encoding(): string;
    encoding(enc: string): this;
    find(xpath: string, ns_uri?: string): Element[];
    find(xpath: string, namespaces: StringMap): Element[];
    get(xpath: string, namespaces?: StringMap): Element | null;
    node(name: string, content?: string): Element;
    root(): Element | null;
    root(newRoot: Node): Node;
    toString(formatted?: boolean): string;
    type(): "document";
    validate(xsdDoc: Document): boolean;
    version(): string;
    setDtd(name: string, ext: string, sys: string): void;
    getDtd(): {
        name: string;
        externalId: string;
        systemId: string;
    };
}

export class Node {
    doc(): Document;
    parent(): Element | Document;
    /**
     * The namespace or null in case of comment nodes
     */
    namespace(): Namespace | null;

    /**
     * An array of namespaces that the object belongs to.
     *
     * @param local If it is true, only the namespace declarations local to this
     *              node are returned, rather than all of the namespaces in scope
     *              at this node (including the ones from the parent elements).
     */
    namespaces(local?: boolean): Namespace[];

    prevSibling(): Node | null;
    nextSibling(): Node | null;

    type(): "comment" | "element" | "text" | "attribute";
    remove(): this;
    clone(): this;
    /**
     * Serializes the node to a string. The string will contain all contents of the node formatted as XML and can be used to print the node.
     */
    toString(
        format?: boolean | {
            declaration: boolean;
            selfCloseEmpty: boolean;
            whitespace: boolean;
            type: "xml" | "html" | "xhtml";
        },
    ): string;
    text(): string;
    text(newText: string): this;
}

export class Element extends Node {
    constructor(doc: Document, name: string, content?: string);
    node(name: string, content?: string): Element;
    name(): string;
    name(newName: string): this;
    text(): string;
    text(newText: string): this;
    attr(name: string): Attribute | null;
    attr(attrObject: StringMap): this;
    attrs(): Attribute[];

    doc(): Document;
    child(idx: number): Node | null;
    childNodes(): Node[];

    /**
     * @return The original element, not the child.
     */
    addChild(child: Element): this;

    prevElement(): Element | null;
    nextElement(): Element | null;
    addNextSibling(siblingNode: Node): Node;
    addPrevSibling(siblingNode: Node): Node;

    find(xpath: string, ns_uri?: string): Node[];
    find(xpath: string, namespaces: StringMap): Node[];
    get(xpath: string, ns_uri?: string): Element | null;
    get(xpath: string, namespaces: StringMap): Element | null;

    defineNamespace(prefixOrHref: string, hrefInCaseOfPrefix?: string): Namespace;

    namespace(): Namespace | null;
    namespace(newNamespace: Namespace): this;
    namespace(prefixOrHref: string, hrefInCaseOfPrefix?: string): Namespace;

    replace(replacement: string): string;
    replace(replacement: Element): Element;

    path(): string;
}

export class Attribute {
    name(): string;
    value(): string;
    value(newValue: string): Attribute;
    namespace(): Namespace;

    remove(): void;
}

export class Namespace {
    href(): string;
    prefix(): string;
}

export class SaxParser extends EventEmitter {
    constructor();
    parseString(source: string): boolean;
}

export class SaxPushParser extends EventEmitter {
    constructor();
    push(source: string): boolean;
}

export interface SyntaxError {
    domain: number | null;
    code: number | null;
    message: string | null;
    level: number | null;
    file: string | null;
    line: number | null;
    /**
     * 1-based column number, 0 if not applicable/available.
     */
    column: number;

    str1: number | null;
    str2: number | null;
    str3: number | null;
    int1: number | null;
}

export interface ValidationError extends Error {
    domain: number | null;
    code: number | null;
    level: number | null;

    line: number | null;
    /**
     * 1-based column number, 0 if not applicable/available.
     */
    column: number;
}
