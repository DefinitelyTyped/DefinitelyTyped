// Type definitions for JSX extensions to ESTree AST specification
// Project: https://github.com/facebook/jsx
// Definitions by: Tony Ross <https://github.com/antross>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

// Based on https://github.com/facebook/jsx/blob/master/AST.md.
// Extends existing types for ESTree AST from `@types/estree`.

import {
    BaseExpression,
    BaseNode,
    Expression,
    Literal,
    Node as ESTreeNode
} from 'estree';

export * from 'estree';

export type Node =
    ESTreeNode | JSXIdentifier | JSXNamespacedName | JSXMemberExpression |
    JSXEmptyExpression | JSXExpressionContainer | JSXSpreadAttribute |
    JSXAttribute | JSXOpeningElement | JSXOpeningFragment | JSXClosingElement |
    JSXClosingFragment | JSXElement | JSXFragment | JSXText;

export interface JSXIdentifier extends BaseNode {
    type: 'JSXIdentifier';
    name: string;
}

export interface JSXMemberExpression extends BaseExpression {
    type: 'JSXMemberExpression';
}

export interface JSXNamespacedName extends BaseExpression {
    type: 'JSXNamespacedName';
}

export interface JSXEmptyExpression extends BaseNode {
    type: 'JSXEmptyExpression';
}

export interface JSXExpressionContainer extends BaseNode {
    type: 'JSXExpressionContainer';
    expression: Expression | JSXEmptyExpression;
}

export interface JSXSpreadChild extends BaseNode {
    type: 'JSXSpreadChild';
    expression: Expression;
}

interface JSXBoundaryElement extends BaseNode {
    name: JSXIdentifier | JSXMemberExpression | JSXNamespacedName;
}

export interface JSXOpeningElement extends JSXBoundaryElement {
    type: 'JSXOpeningElement';
    attributes: Array<JSXAttribute | JSXSpreadAttribute>;
    selfClosing: boolean;
}

export interface JSXClosingElement extends JSXBoundaryElement {
    type: 'JSXClosingElement';
}

export interface JSXAttribute extends BaseNode {
    type: 'JSXAttribute';
    name: JSXIdentifier | JSXNamespacedName;
    value: Literal | JSXExpressionContainer | JSXElement | JSXFragment | null;
}

export interface JSXSpreadAttribute extends BaseNode {
    type: 'JSXSpreadAttribute';
    argument: Expression;
}

export interface JSXText extends BaseNode {
    type: 'JSXText';
    value: string;
    raw: string;
}

export interface JSXElement extends BaseExpression {
    type: 'JSXElement';
    openingElement: JSXOpeningElement;
    children: Array<JSXText | JSXExpressionContainer | JSXSpreadChild | JSXElement | JSXFragment>;
    closingElement: JSXClosingElement | null;
}

export interface JSXFragment extends BaseExpression {
    type: 'JSXFragment';
    openingFragment: JSXOpeningFragment;
    children: Array<JSXText | JSXExpressionContainer | JSXSpreadChild | JSXElement | JSXFragment>;
    closingFragment: JSXClosingFragment;
}

export interface JSXOpeningFragment extends BaseNode {
    type: 'JSXOpeningFragment';
}

export interface JSXClosingFragment extends BaseNode {
    type: 'JSXClosingFragment';
}
