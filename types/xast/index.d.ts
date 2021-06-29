// Type definitions for non-npm package xast 1.0
// Project: https://github.com/syntax-tree/xast
// Definitions by: stefanprobst <https://github.com/stefanprobst>
//                 Titus Wormer <https://github.com/wooorm>
//                 Christian Murphy <https://github.com/ChristianMurphy>
//                 Junyoung Choi <https://github.com/rokt33r>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.0

import { Parent as UnistParent, Literal as UnistLiteral, Node as UnistNode } from 'unist';

export { UnistNode as Node };
export { UnistParent as Parent };

/**
 * Node in xast containing a value.
 */
export interface Literal extends UnistLiteral {
    value: string;
}

/**
 * This map registers valid children for a xast root node.
 *
 * For example to register a custom node type as a valid xast rppt child:
 *
 * ```ts
 * interface Custom extends Node {
 *   type: 'custom';
 * }
 *
 * declare module 'xast' {
 *   interface RootChildMap {
 *     custom: Custom;
 *   }
 * }
 * ```
 */
export interface RootChildMap {
    cdata: Cdata;
    comment: Comment;
    doctype: Doctype;
    element: Element;
    instruction: Instruction;
    text: Text;
}

/**
 * Document fragment or a whole document.
 * Should be used as the root of a tree and must not be used as a child.
 *
 * XML specifies that documents should have exactly one element child,
 * therefore a root should have exactly one element child when representing a
 * whole document.
 */
export interface Root extends UnistParent {
    type: 'root';
    children: Array<RootChildMap[keyof RootChildMap]>;
}

/**
 * This map registers valid children for a xast element node.
 *
 * For example to register a custom node type as a valid xast element child:
 *
 * ```ts
 * interface Custom extends Node {
 *   type: 'custom';
 * }
 *
 * declare module 'xast' {
 *   interface ElementChildMap {
 *     custom: Custom;
 *   }
 * }
 * ```
 */
export interface ElementChildMap {
    element: Element;
    text: Text;
    comment: Comment;
    instruction: Instruction;
    cdata: Cdata;
}

/**
 * An XML element.
 */
export interface Element extends UnistParent {
    type: 'element';
    /**
     * The element's qualified name.
     */
    name: string;
    /**
     * Information associated with the element.
     */
    attributes?: Attributes;
    children: Array<ElementChildMap[keyof ElementChildMap]>;
}

/**
 * Information associated with an element.
 */
export interface Attributes {
    [name: string]: string | null | undefined;
}

/**
 * XML character data.
 */
export interface Text extends Literal {
    type: 'text';
}

/**
 * XML comment.
 */
export interface Comment extends Literal {
    type: 'comment';
}

/**
 * XML doctype.
 */
export interface Doctype extends UnistNode {
    type: 'doctype';
    name: string;
    /**
     * The document’s public identifier.
     */
    public?: string;
    /**
     * The document’s system identifier.
     */
    system?: string;
}

/**
 * XML processing instruction.
 */
export interface Instruction extends Literal {
    type: 'instruction';
    name: string;
}

/**
 * XML CDATA section.
 */
export interface Cdata extends Literal {
    type: 'cdata';
}
