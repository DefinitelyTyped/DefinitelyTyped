// Type definitions for non-npm package Hast 2.3
// Project: https://github.com/syntax-tree/hast
// Definitions by: lukeggchapman <https://github.com/lukeggchapman>
//                 Junyoung Choi <https://github.com/rokt33r>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.0

import { Parent as UnistParent, Literal as UnistLiteral, Node as UnistNode } from 'unist';

export { UnistNode as Node };

/**
 * Node in hast containing other nodes.
 */
export interface Parent extends UnistParent {
    /**
     * List representing the children of a node.
     */
    children: Array<Element | DocType | Comment | Text>;
}

/**
 * Nodes in hast containing a value.
 */
export interface Literal extends UnistLiteral {
    value: string;
}

/**
 * Root represents a document.
 * Can be used as the rood of a tree, or as a value of the
 * content field on a 'template' Element, never as a child.
 */
export interface Root extends Parent {
    /**
     * Represents this variant of a Node.
     */
    type: 'root';
}

/**
 * Element represents an HTML Element.
 */
export interface Element extends Parent {
    /**
     * Represents this variant of a Node.
     */
    type: 'element';

    /**
     * Represents the element’s local name.
     */
    tagName: string;

    /**
     * Represents information associated with the element.
     */
    properties?: Properties;

    /**
     * If the tagName field is 'template', a content field can be present.
     */
    content?: Root;

    /**
     * List representing the children of a node.
     */
    children: Array<Element | Comment | Text>;
}

/**
 * Represents information associated with an element.
 */
export interface Properties {
    [PropertyName: string]: any;
}

/**
 * Represents an HTML DocumentType.
 */
export interface DocType extends UnistNode {
    /**
     * Represents this variant of a Node.
     */
    type: 'doctype';

    name: string;

    /**
     * Represents the document’s public identifier.
     */
    public?: string;

    /**
     * Represents the document’s system identifier.
     */
    system?: string;
}

/**
 * Represents an HTML Comment.
 */
export interface Comment extends Literal {
    /**
     * Represents this variant of a Literal.
     */
    type: 'comment';
}

/**
 * Represents an HTML Text.
 */
export interface Text extends Literal {
    /**
     * Represents this variant of a Literal.
     */
    type: 'text';
}
