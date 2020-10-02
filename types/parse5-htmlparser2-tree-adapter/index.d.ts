// Type definitions for parse5-htmlparser2-tree-adapter 6.0
// Project: https://github.com/inikulin/parse5
// Definitions by: Ivan Nikulin <https://github.com/inikulin>
//                 James Garbutt <https://github.com/43081j>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import * as parse5 from "parse5";

export interface Node {
    /**
     * The type of the node. E.g. {@link Document} will have `type` equal to 'root'`.
     */
    type: string;
    /**
     * [DOM spec](https://dom.spec.whatwg.org/#dom-node-nodetype)-compatible node {@link type}.
     */
    nodeType: number;
    /**
     * Parent node.
     */
    parent: ParentNode;
    /**
     * Same as {@link parent}. [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
     */
    parentNode: ParentNode;
    /**
     * Previous sibling.
     */
    prev: Node;
    /**
     * Same as {@link prev}. [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
     */
    previousSibling: Node;
    /**
     * Next sibling.
     */
    next: Node;
    /**
     * Same as {@link next}. [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
     */
    nextSibling: Node;
}

export interface ChildNode extends Node {
    /**
     * Parent node.
     */
    parentNode: ParentNode;
}

export interface ParentNode extends Node {
    /**
     * Child nodes.
     */
    children: ChildNode[];
    /**
     * Same as {@link children}. [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
     */
    childNodes: ChildNode[];
    /**
     * First child of the node.
     */
    firstChild: ChildNode;
    /**
     * Last child of the node.
     */
    lastChild: ChildNode;
}

export interface DocumentType extends Node {
    /**
     * The type of the node.
     */
    type: "directive";
    /**
     * Node name.
     */
    name: "!doctype";
    /**
     * Serialized doctype {@link name}, {@link publicId} and {@link systemId}.
     */
    data: string;
    /**
     * Document type name.
     */
    "x-name": string;
    /**
     * Document type public identifier.
     */
    "x-publicId": string;
    /**
     * Document type system identifier.
     */
    "x-systemId": string;
}

export interface Document extends ParentNode {
    /**
     * The type of the node.
     */
    type: "root";
    /**
     * The name of the node.
     */
    name: "root";
    /**
     * [Document mode](https://dom.spec.whatwg.org/#concept-document-limited-quirks).
     */
    "x-mode": parse5.DocumentMode;
}

export interface DocumentFragment extends ParentNode {
    /**
     * The type of the node.
     */
    type: "root";
    /**
     * The name of the node.
     */
    name: "root";
}

export interface Element extends ChildNode, ParentNode {
    /**
     * The name of the node. Equals to element {@link tagName}.
     */
    name: string;
    /**
     * Element tag name.
     */
    tagName: string;
    /**
     * Element namespace.
     */
    namespace: string;
    /**
     * Element attributes.
     */
    attribs: { [name: string]: string };
    /**
     * Element attribute namespaces.
     */
    "x-attribsNamespace": { [name: string]: string };
    /**
     * Element attribute namespace-related prefixes.
     */
    "x-attribsPrefix": { [name: string]: string };
    /**
     * Element source code location info. Available if location info is enabled via ParserOptions.
     */
    sourceCodeLocation?: parse5.ElementLocation;
}

export interface CommentNode extends ChildNode {
    /**
     * The name of the node.
     */
    name: "comment";
    /**
     * Comment text.
     */
    data: string;
    /**
     * Same as {@link data}. [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
     */
    nodeValue: string;
    /**
     * Comment source code location info. Available if location info is enabled via ParserOptions.
     */
    sourceCodeLocation?: parse5.Location;
}

export interface TextNode extends ChildNode {
    /**
     * The name of the node.
     */
    name: "text";
    /**
     * Text content.
     */
    data: string;
    /**
     * Same as {@link data}. [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
     */
    nodeValue: string;
    /**
     * Comment source code location info. Available if location info is enabled via ParserOptions.
     */
    sourceCodeLocation?: parse5.Location;
}

export const adoptAttributes: parse5.TreeAdapter['adoptAttributes'];
export const appendChild: parse5.TreeAdapter['appendChild'];
export const createCommentNode: parse5.TreeAdapter['createCommentNode'];
export const createDocument: parse5.TreeAdapter['createDocument'];
export const createDocumentFragment: parse5.TreeAdapter['createDocumentFragment'];
export const createElement: parse5.TreeAdapter['createElement'];
export const detachNode: parse5.TreeAdapter['detachNode'];
export const getAttrList: parse5.TreeAdapter['getAttrList'];
export const getChildNodes: parse5.TreeAdapter['getChildNodes'];
export const getCommentNodeContent: parse5.TreeAdapter['getCommentNodeContent'];
export const getDocumentMode: parse5.TreeAdapter['getDocumentMode'];
export const getDocumentTypeNodeName: parse5.TreeAdapter['getDocumentTypeNodeName'];
export const getDocumentTypeNodePublicId: parse5.TreeAdapter['getDocumentTypeNodePublicId'];
export const getDocumentTypeNodeSystemId: parse5.TreeAdapter['getDocumentTypeNodeSystemId'];
export const getFirstChild: parse5.TreeAdapter['getFirstChild'];
export const getNamespaceURI: parse5.TreeAdapter['getNamespaceURI'];
export const getNodeSourceCodeLocation: parse5.TreeAdapter['getNodeSourceCodeLocation'];
export const getParentNode: parse5.TreeAdapter['getParentNode'];
export const getTagName: parse5.TreeAdapter['getTagName'];
export const getTextNodeContent: parse5.TreeAdapter['getTextNodeContent'];
export const getTemplateContent: parse5.TreeAdapter['getTemplateContent'];
export const insertBefore: parse5.TreeAdapter['insertBefore'];
export const insertText: parse5.TreeAdapter['insertText'];
export const insertTextBefore: parse5.TreeAdapter['insertTextBefore'];
export const isCommentNode: parse5.TreeAdapter['isCommentNode'];
export const isDocumentTypeNode: parse5.TreeAdapter['isDocumentTypeNode'];
export const isElementNode: parse5.TreeAdapter['isElementNode'];
export const isTextNode: parse5.TreeAdapter['isTextNode'];
export const setDocumentMode: parse5.TreeAdapter['setDocumentMode'];
export const setDocumentType: parse5.TreeAdapter['setDocumentType'];
export const setNodeSourceCodeLocation: parse5.TreeAdapter['setNodeSourceCodeLocation'];
export const setTemplateContent: parse5.TreeAdapter['setTemplateContent'];
