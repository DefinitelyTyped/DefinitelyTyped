import {
    AliasName,
    BlockStatement,
    Comment,
    Expression,
    FlowType,
    Identifier,
    JSXMemberExpression,
    MemberExpression,
    BabelNode,
    NodeName,
    Statement,
    UnionTypeAnnotation
} from "./generated";

export function addComment<T extends BabelNode>(
    node: T,
    type: string,
    content: string,
    line?: boolean
): T;

export function addComments<T extends BabelNode>(
    node: T,
    type: string,
    comments: Comment[]
): T;

export function appendToMemberExpression(
    member: MemberExpression,
    property: Expression,
    computed?: boolean // default: false
): MemberExpression;

export function buildMatchMemberExpression(
    match: string,
    allowPartial?: boolean // default: false
): (node: any) => boolean;

export function clone<T extends BabelNode | null | undefined>(node: T): T;

export function cloneDeep<T extends BabelNode | null | undefined>(node: T): T;

export function cloneNode<T extends BabelNode | null | undefined>(
    node: T,
    deep?: boolean // default: true
): T;

export function cloneWithoutLoc<T extends BabelNode | null | undefined>(
    node: T
): T;
export function createTypeAnnotationBasedOnTypeof(
    type:
        | "string"
        | "number"
        | "boolean"
        | "symbol"
        | "undefined"
        | "object"
        | "function"
): FlowType;

export function createUnionTypeAnnotation(
    types: ReadonlyArray<FlowType>
): UnionTypeAnnotation;

export function ensureBlock(
    node: BabelNode,
    key?: string // default: 'body'
): BlockStatement;

export function getBindingIdentifiers(
    node: BabelNode,
    duplicates?: boolean,
    outerOnly?: boolean
): { [key: string]: Identifier | Identifier[] };

export function getOuterBindingIdentifiers(
    node: BabelNode,
    duplicates?: boolean
): { [key: string]: Identifier | Identifier[] };

export function inheritInnerComments(child: BabelNode, parent: BabelNode): void;

export function inheritLeadingComments(
    child: BabelNode,
    parent: BabelNode
): void;

export function inheritTrailingComments(
    child: BabelNode,
    parent: BabelNode
): void;

export function inherits(
    key: string,
    child: BabelNode,
    parent: BabelNode
): void;

export function inheritsComments(child: BabelNode, parent: BabelNode): void;

export function isBinding(node: BabelNode, parent: BabelNode): boolean;

export function is(type: string, node?: object, opts?: object): boolean;

export function isBlockScoped(node?: object): boolean;

/** counterintuitively includes `const` */
export function isLet(node?: object): boolean;

export function isNodesEquivalent(a: any, b: any): boolean;

export function isReferenced(node: BabelNode, parent: BabelNode): boolean;

export function isScope(node: BabelNode, parent: BabelNode): boolean;

export function isSpecifierDefault(specifier: BabelNode): boolean;

export function isValidES3Identifier(name: string): boolean;

export function isValidIdentifier(name: string): boolean;

export function isVar(node?: object): boolean;

export function isType(
    nodeType: NodeName,
    targetType: NodeName | AliasName
): boolean;

export function matchesPattern(
    member: BabelNode,
    match: string | ReadonlyArray<string>,
    allowPartial?: boolean
): boolean;

export function prependToMemberExpression(
    member: MemberExpression,
    prepend: Expression
): MemberExpression;

export const react: {
    /** test if a MemberExpression: `React.Component` */
    isReactComponent(node: any): boolean;
    isCompatTag(tagName?: string): boolean;
    buildChildren(node: object): object[];
};

export function removeComments<T extends BabelNode>(node: T): T;

export function removeProperties(
    node: BabelNode,
    opts?: { preserveComments?: boolean }
): void;

export function removePropertiesDeep<T extends BabelNode>(
    tree: T,
    opts?: { preserveComments?: boolean }
): T;

export function removeTypeDuplicates(
    nodes: ReadonlyArray<FlowType>
): FlowType[];

export function shallowEqual(actual: object, expected: object): boolean;

export function toBindingIdentifierName(name: string): string;

export function toBlock(node: BabelNode, parent: BabelNode): BlockStatement;

export function toComputedKey(
    node: MemberExpression | JSXMemberExpression,
    key?: Expression
): Expression;

export function toExpression(node: BabelNode): Expression;

export function toIdentifier(name: string): string;

export function toKeyAlias(node: BabelNode, key?: BabelNode): string;

export function toSequenceExpression(
    nodes: BabelNode[],
    scope: any
): Expression | void;

export function toStatement(nodes: BabelNode): Statement;
export function toStatement(
    nodes: BabelNode,
    ignore: boolean
): Statement | false;

export type TraversalAncestors = Array<{
    node: BabelNode;
    key: string;
    index?: number;
}>;
export type TraversalHandler<T> = (
    node: BabelNode,
    ancesstors: TraversalAncestors,
    state: T
) => void;
export interface TraversalHandlers<T> {
    enter?: TraversalHandler<T>;
    exit?: TraversalHandler<T>;
}

export function traverse<T>(
    node: BabelNode,
    handlers: TraversalHandler<T> | TraversalHandlers<T>,
    state?: T
): void;

export function traverseFast<T = void>(
    node: BabelNode,
    enter: (node: BabelNode, opts: T) => void,
    opts?: T
): void;

export function validate(node: object, key: string, val: any): void;

export function valueToNode(value: any): BabelNode;
