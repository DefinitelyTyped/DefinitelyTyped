// Type definitions for parse5 2.2.0
// Project: https://github.com/inikulin/parse5
// Definitions by: Nico Jansen <https://github.com/nicojs>, Meirion Hughes <https://github.com/MeirionHughes>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

import * as stream from "stream";
import * as events from "events";

/**
 * Parses an HTML string.
 * @function
 * @param {string} html - Input HTML string.
 * @param {ParserOptions} html - Parsing options.
 * 
 * @example
 * var parse5 = require('parse5');
 * var document = parse5.parse('<!DOCTYPE html><html><head></head><body>Hi there!</body></html>');
 */
export declare function parse(html: string, options?: ParserOptions): ASTNode;

/**
 * Parses an HTML fragment.
 * 
 * @param {string} html - Input html fragment
 * @param {ParserOptions} - Parsign options
 * @example
 * var parse5 = require('parse5');
 * var documentFragment = parse5.parseFragment('<table></table>');
 * // Parses the html fragment in the context of the parsed <table> element.
 * var trFragment = parser.parseFragment(documentFragment.childNodes[0], '<tr><td>Shake it, baby</td></tr>');
 */
export declare function parseFragment(html: string, options?: ParserOptions): ASTNode;
export declare function parseFragment(fragmentContext: any, html: string, options?: ParserOptions): ASTNode;

/**
 * Serializes an AST node to an HTML string.
 * @param node Node to serialize.
 * @param options Serialization options
 */
export declare function serialize(node: ASTNode, options?: SerializerOptions): string;

export interface ASTAttribute {
    name: string;
    value: string;
    prefix?: string;
}

export interface Attribute {
    key: string;
    value: string;
}

export interface ASTNode {
    attrs: ASTAttribute[];
    childNodes?: ASTNode[];
    data?: string;
    namespaceURI?: string;
    parentNode?: ASTNode;
    nodeName: string;
    tagName?: string;
    quirksMode?: boolean;
    value?: string;
    __location: LocationInfo | ElementLocationInfo;
}

export interface LocationInfo {
    /**
     * One-based line index
     */
    line: number;
    /**
     * Zero-based first character index
     */
    col: number;
    /**
     * Zero-based first character index
     */
    startOffset: number;
    /**
     * Zero-based last character index
     */
    endOffset: number;
}


/**
 * Streaming AST node to an HTML serializer. A readable stream.
 */
export declare class SerializerStream extends stream.Readable {
    /**
     * Streaming AST node to an HTML serializer. A readable stream.
     * 
     * @param Node to serialize.
     * @param options Serialization options.
     */
    constructor(node: ASTNode, options: SerializerOptions);
}

/**
 * Streaming HTML parser with scripting support. A writable stream.
 */
export declare class ParserStream extends stream.Writable {
    /**
     * @param options Parsing options.
     */
    constructor(options?: ParserOptions);
    /**
     * The resulting document node.
     */
    document: ASTNode;
    on(event: string, listener: Function): this;
    /**
     * Raised then parser encounters a <script> element. If this event has listeners, parsing will be suspended
     *  once it is emitted. So, if <script> has the src attribute, 
     * you can fetch it, execute and then resume parsing just like browsers do.
     * The listener will have 3 parameters:
     * The script element that caused the event, a function for writing additional html at the current parsing position. Suitable for implementing the DOM document.write and document.writeln methods.
     * And finally a resume function as a callback to signal the continuation of the parsing
     */
    on(event: 'script', listener: (scriptElement: ASTNode, documentWrite: (html: string) => void, resume: Function) => void): this;
}

export declare class SAXParser extends stream.Transform {
    constructor(options?: SAXParserOptions);
    on(event: string, listener: Function): this;
    /**
     * Raised when the parser encounters a start tag.
     * Listener function has 4 parameters:
     * Tag name, List of attributes in the { name: String, value: String, prefix?: String } form, selfClosing boolean  
     * and start tag source code location info. Available if location info is enabled in SAXParserOptions.
     */
    on(event: 'startTag', listener: (name: string, attrs: ASTAttribute[], selfClosing: boolean, location?: StartTagLocationInfo) => void): this;
    /**
     * Raised when parser encounters an end tag.
     * Listener function has 2 parameters:
     * Tag name and location End tag source code location info. Available if location info is enabled in SAXParserOptions. 
     */
    on(event: 'endTag', listener: (name: string, location?: LocationInfo) => void): this;
    /**
     * Raised then parser encounters a comment.
     * Listener function has 2 parameters:
     * The comment text and the source code location info. Available if location info is enabled in SAXParserOptions.
     */
    on(event: 'comment', listener: (text: string, location?: LocationInfo) => void): this;
    /**
     * Raised then parser encounters text content.
     * Listener function has 2 parameters:
     * The text content and location info. Available if location info is enabled in SAXParserOptions.
     */
    on(event: 'text', listener: (text: string, location?: LocationInfo) => void): this;
    /**
     * Raised then parser encounters a document type declaration.
     * Listener function has 4 parameters:
     * The document type name, document type public identifier, document type system identifier and
     * location info. Available if location info is enabled in SAXParserOptions.
     */
    on(event: 'doctype', listener: (name: string, publicId: string, systemId: string, location?: LocationInfo) => void): this;
    /**
     * Stops parsing. Useful if you want the parser to stop consuming CPU time once you've obtained the desired info from the input stream. 
     * Doesn't prevent piping, so that data will flow through the parser as usual.
     */
    stop(): void;
}

export interface TreeAdapter {
    createDocument(): ASTNode;
    createDocumentFragment(): ASTNode;
    createElement(tagName: string, namespaceURI: string, attrs: Attribute[]): ASTNode;
    createCommentNode(data: string): ASTNode;
    appendChild(parentNode: ASTNode, newNode: ASTNode): void;
    insertBefore(parentNode: ASTNode, newNode: ASTNode, referenceNode: ASTNode): void;
    setTemplateContent(templateElement: ASTNode, contentTemplate: ASTNode): void;
    getTemplateContent(templateElement: ASTNode): ASTNode;
    setDocumentType(document: ASTNode, name: string, publicId: string, systemId: string): void;
    setQuirksMode(document: ASTNode): void;
    isQuirksMode(document: ASTNode): boolean;
    detachNode(node: ASTNode): void;
    insertText(parentNode: ASTNode, text: string): void;
    insertTextBefore(parentNode: ASTNode, text: string, referenceNode: ASTNode): void;
    adoptAttributes(recipientNode: ASTNode, attrs: Attribute[]): void;
    getFirstChild(node: ASTNode): ASTNode;
    getChildNodes(node: ASTNode): ASTNode[];
    getParentNode(node: ASTNode): ASTNode;
    getAttrList(node: ASTNode): ASTAttribute[];
    getTagName(element: ASTNode): string;
    getNamespaceURI(element: ASTNode): string;
    getTextNodeContent(textNode: ASTNode): string;
    getCommentNodeContent(commentNode: ASTNode): string;
    getDocumentTypeNodeName(doctypeNode: ASTNode): string;
    getDocumentTypeNodePublicId(doctypeNode: ASTNode): string;
    getDocumentTypeNodeSystemId(doctypeNode: ASTNode): string;
    isTextNode(node: ASTNode): boolean;
    isCommentNode(node: ASTNode): boolean;
    isDocumentTypeNode(node: ASTNode): boolean;
    isElementNode(node: ASTNode): boolean;
}

export interface AttributesLocationInfo {
    [attributeName: string]: LocationInfo;
}

export interface StartTagLocationInfo extends LocationInfo {
    /**
     * Start tag attributes' location info
     */
    attrs: AttributesLocationInfo
}

export interface ElementLocationInfo {
    /**
     * Element's start tag location info.
     */
    startTag: StartTagLocationInfo;
    /**
     * Element's end tag location info.
     */
    endTag: LocationInfo;
}

/**
 * Provides built-in tree adapters that can be used for parsing and serialization.
 */
export declare var treeAdapters: {
    /**
     * Default tree format for parse5.
     */
    default: TreeAdapter,
    /**
     * Quite popular htmlparser2 tree format (e.g. used by cheerio and jsdom).
     */
    htmlparser2: TreeAdapter
};

export interface ParserOptions {
    /**
     * Enables source code location information for the nodes. When enabled, each node (except root node) has the __location property. 
     * In case the node is not an empty element, __location will be ElementLocationInfo object, otherwise it's LocationInfo.
     * If the element was implicitly created by *the parser it's __location property will be null.
     */
    locationInfo?: boolean;
    /**
     * Specifies the resulting tree format.
     */
    treeAdapter?: TreeAdapter;
}

export interface SerializerOptions {
    /***
     * Specifies input tree format.
     */
    treeAdapter: TreeAdapter;
}

/**
 * Enables source code location information for the tokens.
 *  When enabled, each token event handler will receive LocationInfo 
 * (or StartTagLocationInfo) object as its last argument.
 */
export interface SAXParserOptions {
    locationInfo?: boolean;
}
