/**
 * Attributes object for a tag node.
 */
export interface Attributes {
    [key: string]: string;
}

/**
 * A tag node in the AST.
 */
export interface TagNode {
    type: "tag";
    name: string;
    attrs: Attributes;
    voidElement: boolean;
    children: ASTNode[];
}

/**
 * A text node in the AST.
 */
export interface TextNode {
    type: "text";
    content: string;
}

/**
 * A comment node in the AST.
 */
export interface CommentNode {
    type: "comment";
    comment: string;
}

/**
 * A component node in the AST.
 * Similar to tag but children are ignored during parsing.
 */
export interface ComponentNode {
    type: "component";
    name: string;
    attrs: Attributes;
    voidElement: boolean;
    children: ASTNode[];
}

/**
 * Any AST node type.
 */
export type ASTNode = TagNode | TextNode | CommentNode | ComponentNode;

/**
 * Options for parsing HTML.
 */
export interface ParseOptions {
    /**
     * Object of registered component names whose children will be ignored
     * when generating the AST.
     */
    components?: {
        [componentName: string]: boolean | object;
    };
}

/**
 * Parses a string of HTML into an AST.
 *
 * @param html - The HTML string to parse
 * @param options - Parse options
 * @returns An array of AST nodes
 *
 * @example
 * ```javascript
 * var HTML = require('html-parse-stringify');
 * var ast = HTML.parse('<div class="oh"><p>hi</p></div>');
 * ```
 */
export function parse(html: string, options?: ParseOptions): ASTNode[];

/**
 * Stringifies an AST back to HTML.
 *
 * @param ast - The AST to stringify
 * @returns The HTML string
 *
 * @example
 * ```javascript
 * var HTML = require('html-parse-stringify');
 * var html = HTML.stringify(ast);
 * ```
 */
export function stringify(ast: ASTNode[]): string;
