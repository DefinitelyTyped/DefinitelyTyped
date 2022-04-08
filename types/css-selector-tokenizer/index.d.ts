// Type definitions for css-selector-tokenizer 0.7
// Project: https://github.com/css-modules/css-selector-tokenizer
// Definitions by: Avi Vahl <https://github.com/AviVahl>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export interface BaseNode {
    name?: string;
    before?: string;
    after?: string;
}

/** Any node returned by `parse`. Useful for `walk` implementations. */
export type AnySelectorNode = SelectorsNode | SelectorNode | SelectorNodeType;

export interface SelectorsNode extends BaseNode {
    type: 'selectors';
    nodes: SelectorNode[];
}

export interface SelectorNode extends BaseNode {
    type: 'selector';
    nodes: SelectorNodeType[];
}

/** Any node that can be child of `SelectorNode`. */
export type SelectorNodeType =
    | ElementNode
    | ClassNode
    | SpacingNode
    | IdNode
    | PseudoClassNode
    | NestedPseudoClassNode
    | UniversalNode
    | AttributeNode
    | CommentNode
    | OperatorNode
    | InvalidNode
    | PseudoElementNode;

export interface ElementNode extends BaseNode {
    type: 'element';
    name: string;
    namespace?: string;
}

export interface PseudoElementNode extends BaseNode {
    type: 'pseudo-element';
    name: string;
}

export interface ClassNode extends BaseNode {
    type: 'class';
    name: string;
}

export interface PseudoClassNode extends BaseNode {
    type: 'pseudo-class';
    name: string;
    content?: string;
}

export interface AttributeNode extends BaseNode {
    type: 'attribute';
    content: string;
}

export interface CommentNode extends BaseNode {
    type: 'comment';
    content: string;
}

export interface NestedPseudoClassNode extends BaseNode {
    type: 'nested-pseudo-class';
    name: string;
    nodes: SelectorNode[];
}

export interface IdNode extends BaseNode {
    type: 'id';
    name: string;
}

export interface SpacingNode extends BaseNode {
    type: 'spacing';
    value: string;
}

export interface UniversalNode extends BaseNode {
    type: 'universal';
    namespace?: string;
}

export interface OperatorNode extends BaseNode {
    type: 'operator';
    operator: string;
}

export interface InvalidNode extends BaseNode {
    type: 'invalid';
    value: string;
}

/** Any node returned by `parseValues`. Useful for `walk` implementations. */
export type AnyValueNode = ValuesNode | ValueNode | ValueNodeType;

export interface ValuesNode extends BaseNode {
    type: 'values';
    nodes: ValueNode[];
}

export interface ValueNode extends BaseNode {
    type: 'value';
    nodes: ValueNodeType[];
}

/** Any node that can be child of `ValueNode`. */
export type ValueNodeType = ItemNode | NestedItemNode | StringNode | CommentNode | UrlNode | InvalidNode;

export interface ItemNode extends BaseNode {
    type: 'item';
    name: string;
}

export interface NestedItemNode extends BaseNode {
    type: 'nested-item';
    name: string;
    nodes: ValueNode[];
}

export interface UrlNode extends BaseNode {
    type: 'url';
    url: string;
    stringType?: string;
    innerSpacingBefore?: string;
    innerSpacingAfter?: string;
}

export interface StringNode extends BaseNode {
    type: 'string';
    value: string;
    stringType: string;
}

export function parse(selectors: string): SelectorsNode;
export function stringify(node: SelectorsNode): string;
export function parseValues(values: string): ValuesNode;
export function stringifyValues(node: ValuesNode): string;
