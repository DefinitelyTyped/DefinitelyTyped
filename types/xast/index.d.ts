import type { Data as UnistData, Literal as UnistLiteral, Node as UnistNode, Parent as UnistParent } from "unist";

// ## Interfaces

/**
 * Info associated with an element.
 */
export interface Attributes {
    [name: string]: string | null | undefined;
}

/**
 * Info associated with xast nodes by the ecosystem.
 *
 * This space is guaranteed to never be specified by unist or xast.
 * But you can use it in utilities and plugins to store data.
 *
 * This type can be augmented to register custom data.
 * For example:
 *
 * ```ts
 * declare module 'xast' {
 *   interface Data {
 *     // `someNode.data.myId` is typed as `number | undefined`
 *     myId?: number | undefined
 *   }
 * }
 * ```
 */
export interface Data extends UnistData {}

// ## Content maps

/**
 * Union of registered xast nodes that can occur in {@link Element}.
 *
 * To register more custom xast nodes, add them to {@link ElementContentMap}.
 * They will be automatically added here.
 */
export type ElementContent = ElementContentMap[keyof ElementContentMap];

/**
 * Registry of all xast nodes that can occur as children of {@link Element}.
 *
 * For a union of all {@link Element} children, see {@link ElementContent}.
 */
export interface ElementContentMap {
    cdata: Cdata;
    comment: Comment;
    element: Element;
    instruction: Instruction;
    text: Text;
}

/**
 * Union of registered xast nodes that can occur in {@link Root}.
 *
 * To register custom xast nodes, add them to {@link RootContentMap}.
 * They will be automatically added here.
 */
export type RootContent = RootContentMap[keyof RootContentMap];

/**
 * Registry of all xast nodes that can occur as children of {@link Root}.
 *
 * > 👉 **Note**: {@link Root} does not need to be an entire document.
 * > it can also be a fragment.
 *
 * For a union of all {@link Root} children, see {@link RootContent}.
 */
export interface RootContentMap {
    cdata: Cdata;
    comment: Comment;
    doctype: Doctype;
    element: Element;
    instruction: Instruction;
    text: Text;
}

// ### Special content types

/**
 * Union of registered xast literals.
 *
 * To register custom xast nodes, add them to {@link RootContentMap} and other
 * places where relevant.
 * They will be automatically added here.
 */
export type Literals = Extract<Nodes, UnistLiteral>;

/**
 * Union of registered xast nodes.
 *
 * To register custom xast nodes, add them to {@link RootContentMap} and other
 * places where relevant.
 * They will be automatically added here.
 */
export type Nodes = Root | RootContent;

/**
 * Union of registered xast parents.
 *
 * To register custom xast nodes, add them to {@link RootContentMap} and other
 * places where relevant.
 * They will be automatically added here.
 */
export type Parents = Extract<Nodes, UnistParent>;

// ## Abstract nodes

/**
 * Abstract xast node that contains the smallest possible value.
 *
 * This interface is supposed to be extended if you make custom xast nodes.
 *
 * For a union of all registered xast literals, see {@link Literals}.
 */
export interface Literal extends Node {
    /**
     * Plain-text value.
     */
    value: string;
}

/**
 * Abstract xast node.
 *
 * This interface is supposed to be extended.
 * If you can use {@link Literal} or {@link Parent}, you should.
 * But for example in XML, a `Doctype` is neither literal nor parent, but
 * still a node.
 *
 * To register custom xast nodes, add them to {@link RootContentMap} and other
 * places where relevant (such as {@link ElementContentMap}).
 *
 * For a union of all registered xast nodes, see {@link Nodes}.
 */
export interface Node extends UnistNode {
    /**
     * Info from the ecosystem.
     */
    data?: Data | undefined;
}

/**
 * Abstract xast node that contains other xast nodes (*children*).
 *
 * This interface is supposed to be extended if you make custom xast nodes.
 *
 * For a union of all registered xast parents, see {@link Parents}.
 */
export interface Parent extends Node {
    /**
     * List of children.
     */
    children: RootContent[];
}

// ## Concrete nodes

/**
 * XML CDATA section.
 */
export interface Cdata extends Literal {
    /**
     * Node type of XML CDATA sections in xast.
     */
    type: "cdata";
    /**
     * Data associated with the cdata.
     */
    data?: CdataData | undefined;
}

/**
 * Info associated with xast instructions by the ecosystem.
 */
export interface CdataData extends Data {}

/**
 * XML comment.
 */
export interface Comment extends Literal {
    /**
     * Node type of XML comments in xast.
     */
    type: "comment";
    /**
     * Data associated with the comment.
     */
    data?: CommentData | undefined;
}

/**
 * Info associated with xast comments by the ecosystem.
 */
export interface CommentData extends Data {}

/**
 * XML document type.
 */
export interface Doctype extends Node {
    /**
     * Node type of XML document types in xast.
     */
    type: "doctype";
    /**
     * Name of the root element.
     *
     * To illustrate, for `<!DOCTYPE html>`, `name` is `'html'`.
     */
    name: string;
    /**
     * Public identifier of the document.
     */
    public?: string | undefined;
    /**
     * System identifier of the document.
     */
    system?: string | undefined;
    /**
     * Data associated with the doctype.
     */
    data?: DoctypeData | undefined;
}

/**
 * Info associated with xast doctypes by the ecosystem.
 */
export interface DoctypeData extends Data {}

/**
 * XML processing instruction.
 */
export interface Instruction extends Literal {
    /**
     * Node type of XML processing instructions in xast.
     */
    type: "instruction";
    /**
     * Name of the instruction.
     *
     * To illustrate, for `<?php?>`, `name` is `'php'`.
     */
    name: string;
    /**
     * Data associated with the instruction.
     */
    data?: InstructionData | undefined;
}

/**
 * Info associated with xast instructions by the ecosystem.
 */
export interface InstructionData extends Data {}

/**
 * XML element.
 */
export interface Element extends Parent {
    /**
     * Node type of elements.
     */
    type: "element";
    /**
     * Qualified name (such as `'artist'` or `'svg:rect'`) of the element.
     */
    name: string;
    /**
     * Info associated with the element.
     */
    attributes: Attributes;
    /**
     * Children of element.
     */
    children: ElementContent[];
    /**
     * Data associated with the element.
     */
    data?: ElementData | undefined;
}

/**
 * Info associated with xast elements by the ecosystem.
 */
export interface ElementData extends Data {}

/**
 * Document fragment or a whole document.
 *
 * Should be used as the root of a tree and must not be used as a child.
 *
 * XML specifies that documents should have exactly one element child, so a
 * root should have exactly one element child when representing a whole
 * document.
 */
export interface Root extends Parent {
    /**
     * Node type of xast root.
     */
    type: "root";
    /**
     * Data associated with the xast root.
     */
    data?: RootData | undefined;
}

/**
 * Info associated with xast root nodes by the ecosystem.
 */
export interface RootData extends Data {}

/**
 * XML character data (plain text).
 */
export interface Text extends Literal {
    /**
     * Node type of XML character data (plain text) in xast.
     */
    type: "text";
    /**
     * Data associated with the text.
     */
    data?: TextData | undefined;
}

/**
 * Info associated with xast texts by the ecosystem.
 */
export interface TextData extends Data {}
