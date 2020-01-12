// Type definitions for Hast 2.3
// Project: https://github.com/syntax-tree/hast
// Definitions by: Junyoung Choi <https://github.com/rokt33r>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.0

import { Parent as UnistParent, Literal as UnistLiteral, Node } from 'unist';

/**
 * Parent (UnistParent) represents a node in hast containing other nodes (said to be children).
 *
 * Its content is limited to only other hast content.
 */
export interface Parent extends UnistParent {
    children: Array<Element | Doctype | Comment | Text>;
}

/**
 * Literal (UnistLiteral) represents a node in hast containing a value.
 */
export interface Literal extends UnistLiteral {
    value: string;
}

/**
 * Root (Parent) represents a document.
 *
 * Root can be used as the root of a tree, or as a value of the content field on a 'template' Element, never as a child.
 */
export interface Root extends Parent {
    type: 'root';
}

/**
 * Element (Parent) represents an Element ([DOM]).
 *
 * A tagName field must be present. It represents the element’s local name ([DOM]).
 *
 * The properties field represents information associated with the element. The value of the properties field implements the Properties interface.
 *
 * If the tagName field is 'template', a content field can be present. The value of the content field implements the Root interface.
 *
 * If the tagName field is 'template', the element must be a leaf.
 *
 * If the tagName field is 'noscript', its children should be represented as if scripting is disabled ([HTML]).
 */
export interface Element extends Parent {
    type: 'element';
    tagName: string;
    properties?: Properties;
    content?: Root;
    children: Array<Element | Comment | Text>;
}

/**
 * Properties represents information associated with an element.
 *
 * Every field must be a PropertyName and every value a PropertyValue.
 */
export interface Properties {
    [key: string]: PropertyValue;
}

/**
 * Property names are keys on Properties objects and reflect HTML, SVG, ARIA, XML, XMLNS, or XLink attribute names.
 */
export type PropertyName = string;

/**
 * Property values should reflect the data type determined by their property name.
 */
export type PropertyValue = any;

/**
 * Doctype (Node) represents a DocumentType ([DOM]).
 *
 * A name field must be present.
 *
 * A public field can be present. If present, it must be set to a string, and represents the document’s public identifier.
 *
 * A system field can be present. If system, it must be set to a string, and represents the document’s system identifier.
 */
export interface Doctype extends Node {
    type: 'doctype';
    name: string;
    public?: string;
    system?: string;
}

/**
 * Comment (Literal) represents a Comment ([DOM]).
 */
export interface Comment extends Literal {
    type: 'comment';
}

/**
 * Text (Literal) represents a Text ([DOM]).
 */
export interface Text extends Literal {
    type: 'text';
}
