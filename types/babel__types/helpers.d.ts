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

export declare function addComment<T extends BabelNode>(
    node: T,
    type: string,
    content: string,
    line?: boolean
): T;

export declare function addComments<T extends BabelNode>(
    node: T,
    type: string,
    comments: Comment[]
): T;

export declare function appendToMemberExpression(
    member: MemberExpression,
    property: Expression,
    computed?: boolean // default: false
): MemberExpression;

export declare function buildMatchMemberExpression(
    match: string,
    allowPartial?: boolean // default: false
): (node: any) => boolean;

export declare function clone<T extends BabelNode | null | void>(node: T): T;

export declare function cloneDeep<T extends BabelNode | null | void>(
    node: T
): T;

export declare function cloneNode<T extends BabelNode | null | void>(
    node: T,
    deep?: boolean // default: true
): T;

export declare function cloneWithoutLoc<T extends BabelNode | null | void>(
    node: T
): T;
export declare function createTypeAnnotationBasedOnTypeof(
    type:
        | "string"
        | "number"
        | "boolean"
        | "symbol"
        | "undefined"
        | "object"
        | "function"
): FlowType;

export declare function createUnionTypeAnnotation(
    types: ReadonlyArray<FlowType>
): UnionTypeAnnotation;

export declare function ensureBlock(
    node: BabelNode,
    key?: string // default: 'body'
): BlockStatement;

export declare function getBindingIdentifiers(
    node: BabelNode,
    duplicates?: boolean,
    outerOnly?: boolean
): { [key: string]: Identifier | Identifier[] };

export declare function getOuterBindingIdentifiers(
    node: BabelNode,
    duplicates?: boolean
): { [key: string]: Identifier | Identifier[] };

export declare function inheritInnerComments(
    child: BabelNode,
    parent: BabelNode
): void;

export declare function inheritLeadingComments(
    child: BabelNode,
    parent: BabelNode
): void;

export declare function inheritTrailingComments(
    child: BabelNode,
    parent: BabelNode
): void;

export declare function inherits(
    key: string,
    child: BabelNode,
    parent: BabelNode
): void;

export declare function inheritsComments(
    child: BabelNode,
    parent: BabelNode
): void;

export declare function isBinding(node: BabelNode, parent: BabelNode): boolean;

export declare function is(type: string, node?: object, opts?: object): boolean;

export declare function isBlockScoped(node?: object): boolean;

/** counterintuitively includes `const` */
export declare function isLet(node?: object): boolean;

export declare function isNodesEquivalent(a: any, b: any): boolean;

export declare function isReferenced(
    node: BabelNode,
    parent: BabelNode
): boolean;

export declare function isScope(node: BabelNode, parent: BabelNode): boolean;

export declare function isSpecifierDefault(specifier: BabelNode): boolean;

export declare function isValidES3Identifier(name: string): boolean;

export declare function isValidIdentifier(name: string): boolean;

export declare function isVar(node?: object): boolean;

export declare function isType(
    nodeType: NodeName,
    targetType: NodeName | AliasName
): boolean;

export declare function matchesPattern(
    member: BabelNode,
    match: string | ReadonlyArray<string>,
    allowPartial?: boolean
): boolean;

export declare function prependToMemberExpression(
    member: MemberExpression,
    prepend: Expression
): MemberExpression;

export declare const react: {
    /** test if a MemberExpression: `React.Component` */
    isReactComponent(node: any): boolean;
    isCompatTag(tagName?: string): boolean;
    buildChildren(node: object): object[];
};

export declare function removeComments<T extends BabelNode>(node: T): T;

export declare function removeProperties(
    node: BabelNode,
    opts?: { preserveComments?: boolean }
): void;

export declare function removePropertiesDeep<T extends BabelNode>(
    tree: T,
    opts?: { preserveComments?: boolean }
): T;

export declare function removeTypeDuplicates(
    nodes: ReadonlyArray<FlowType>
): FlowType[];

export declare function shallowEqual(actual: object, expected: object): boolean;

export declare function toBindingIdentifierName(name: string): string;

export declare function toBlock(
    node: BabelNode,
    parent: BabelNode
): BlockStatement;

export declare function toComputedKey(
    node: MemberExpression | JSXMemberExpression,
    key?: Expression
): Expression;

export declare function toExpression(node: BabelNode): Expression;

export declare function toIdentifier(name: string): string;

export declare function toKeyAlias(node: BabelNode, key?: BabelNode): string;

export declare function toSequenceExpression(
    nodes: BabelNode[],
    scope: any
): Expression | void;

export declare function toStatement(nodes: BabelNode): Statement;
export declare function toStatement(
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
export type TraversalHandlers<T> = {
    enter?: TraversalHandler<T>;
    exit?: TraversalHandler<T>;
};

export declare function traverse<T>(
    node: BabelNode,
    handlers: TraversalHandler<T> | TraversalHandlers<T>,
    state?: T
): void;

export declare function traverseFast<T = void>(
    node: BabelNode,
    enter: (node: BabelNode, opts: T) => void,
    opts?: T
): void;

export declare function validate(node: object, key: string, val: any): void;

export declare function valueToNode(value: any): BabelNode;
