import * as ESTree from 'estree';

import {
    Node,
    JSXIdentifier,
    JSXNamespacedName,
    JSXMemberExpression,
    JSXEmptyExpression,
    JSXExpressionContainer,
    JSXSpreadChild,
    JSXSpreadAttribute,
    JSXAttribute,
    JSXOpeningElement,
    JSXOpeningFragment,
    JSXClosingElement,
    JSXClosingFragment,
    JSXElement,
    JSXFragment,
    JSXText,
} from 'estree-jsx';

declare let node: Node;
declare let identifier: JSXIdentifier;
declare let namespacedName: JSXNamespacedName;
declare let memberExpression: JSXMemberExpression;
declare let emptyExpression: JSXEmptyExpression;
declare let expressionContainer: JSXExpressionContainer;
declare let spreadChild: JSXSpreadChild;
declare let spreadAttribute: JSXSpreadAttribute;
declare let attribute: JSXAttribute;
declare let openingElement: JSXOpeningElement;
declare let openingFragment: JSXOpeningFragment;
declare let closingElement: JSXClosingElement;
declare let closingFragment: JSXClosingFragment;
declare let element: JSXElement;
declare let fragment: JSXFragment;
declare let text: JSXText;

declare let estreeNode: ESTree.Node;

declare let children: Array<JSXText | JSXExpressionContainer | JSXSpreadChild | JSXElement | JSXFragment>;

declare let string: string;
declare let boolean: boolean;

// JSXNamespacedName
const namespacedNameNamespace: JSXIdentifier = namespacedName.namespace;
const namespacedNameName: JSXIdentifier = namespacedName.name;

// JSXMemberExpression
const memberRxpressionObject: JSXMemberExpression | JSXIdentifier = memberExpression.object;
const memberRxpressionProperty: JSXIdentifier = memberExpression.property;

// JSXExpressionContainer
const expOrEmpty: ESTree.Expression | JSXEmptyExpression = expressionContainer.expression;

// JSXSpreadChild
const exp: ESTree.Expression = spreadChild.expression;

// JSXAttribute
const attributeName: JSXIdentifier | JSXNamespacedName = attribute.name;
const attributeValue: ESTree.Literal | JSXExpressionContainer | JSXElement | JSXFragment | null = attribute.value;

// JSXOpeningElement
const attributes: Array<JSXAttribute | JSXSpreadAttribute> = openingElement.attributes;
boolean = openingElement.selfClosing;

// JSXElement
openingElement = element.openingElement;
children = element.children;
const closingElementOrNull: JSXClosingElement | null = element.closingElement;

// JSXFragment
openingFragment = fragment.openingFragment;
children = fragment.children;
closingFragment = fragment.closingFragment;

// JSXText
string = text.value;
string = text.raw;

// Test narrowing

switch (node.type) {
    case 'JSXAttribute':
        attribute = node;
        break;
    case 'JSXClosingElement':
        closingElement = node;
        break;
    case 'JSXClosingFragment':
        closingFragment = node;
        break;
    case 'JSXElement':
        element = node;
        break;
    case 'JSXEmptyExpression':
        emptyExpression = node;
        break;
    case 'JSXExpressionContainer':
        expressionContainer = node;
        break;
    case 'JSXFragment':
        fragment = node;
        break;
    case 'JSXIdentifier':
        identifier = node;
        break;
    case 'JSXMemberExpression':
        memberExpression = node;
        break;
    case 'JSXNamespacedName':
        namespacedName = node;
        break;
    case 'JSXOpeningElement':
        openingElement = node;
        break;
    case 'JSXOpeningFragment':
        openingFragment = node;
        break;
    case 'JSXSpreadAttribute':
        spreadAttribute = node;
        break;
    case 'JSXText':
        text = node;
        break;

    default:
        estreeNode = node;
}
