// Type definitions for babel-traverse 6.25
// Project: https://github.com/babel/babel/tree/master/packages/babel-traverse
// Definitions by: Troy Gerwien <https://github.com/yortus>
//                 Marvin Hagemeister <https://github.com/marvinhagemeister>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import * as t from 'babel-types';
export type Node = t.Node;

export default function traverse(parent: Node | Node[], opts?: TraverseOptions, scope?: Scope, state?: any, parentPath?: NodePath): void;

export interface TraverseOptions extends Visitor {
    scope?: Scope;
    noScope?: boolean;
}

export class Scope {
    constructor(path: NodePath, parentScope?: Scope);
    path: NodePath;
    block: Node;
    parentBlock: Node;
    parent: Scope;
    hub: Hub;
    bindings: { [name: string]: Binding; };

    /** Traverse node with current scope and path. */
    traverse(node: Node | Node[], opts?: TraverseOptions, state?: any): void;

    /** Generate a unique identifier and add it to the current scope. */
    generateDeclaredUidIdentifier(name?: string): t.Identifier;

    /** Generate a unique identifier. */
    generateUidIdentifier(name?: string): t.Identifier;

    /** Generate a unique `_id1` binding. */
    generateUid(name?: string): string;

    /** Generate a unique identifier based on a node. */
    generateUidIdentifierBasedOnNode(parent: Node, defaultName?: string): t.Identifier;

    /**
     * Determine whether evaluating the specific input `node` is a consequenceless reference. ie.
     * evaluating it wont result in potentially arbitrary code from being ran. The following are
     * whitelisted and determined not to cause side effects:
     *
     *  - `this` expressions
     *  - `super` expressions
     *  - Bound identifiers
     */
    isStatic(node: Node): boolean;

    /** Possibly generate a memoised identifier if it is not static and has consequences. */
    maybeGenerateMemoised(node: Node, dontPush?: boolean): t.Identifier;

    checkBlockScopedCollisions(local: Node, kind: string, name: string, id: object): void;

    rename(oldName: string, newName?: string, block?: Node): void;

    dump(): void;

    toArray(node: Node, i?: number): Node;

    registerDeclaration(path: NodePath): void;

    buildUndefinedNode(): Node;

    registerConstantViolation(path: NodePath): void;

    registerBinding(kind: string, path: NodePath, bindingPath?: NodePath): void;

    addGlobal(node: Node): void;

    hasUid(name: string): boolean;

    hasGlobal(name: string): boolean;

    hasReference(name: string): boolean;

    isPure(node: Node, constantsOnly?: boolean): boolean;

    setData(key: string, val: any): any;

    getData(key: string): any;

    removeData(key: string): void;

    push(opts: any): void;

    getProgramParent(): Scope;

    getFunctionParent(): Scope;

    getBlockParent(): Scope;

    /** Walks the scope tree and gathers **all** bindings. */
    getAllBindings(...kinds: string[]): object;

    bindingIdentifierEquals(name: string, node: Node): boolean;

    getBinding(name: string): Binding | undefined;

    getOwnBinding(name: string): Binding | undefined;

    getBindingIdentifier(name: string): t.Identifier;

    getOwnBindingIdentifier(name: string): t.Identifier;

    hasOwnBinding(name: string): boolean;

    hasBinding(name: string, noGlobals?: boolean): boolean;

    parentHasBinding(name: string, noGlobals?: boolean): boolean;

    /** Move a binding of `name` to another `scope`. */
    moveBindingTo(name: string, scope: Scope): void;

    removeOwnBinding(name: string): void;

    removeBinding(name: string): void;
}

export class Binding {
    constructor(opts: { existing: Binding; identifier: t.Identifier; scope: Scope; path: NodePath; kind: 'var' | 'let' | 'const'; });
    identifier: t.Identifier;
    scope: Scope;
    path: NodePath;
    kind: 'var' | 'let' | 'const' | 'module';
    referenced: boolean;
    references: number;
    referencePaths: NodePath[];
    constant: boolean;
    constantViolations: NodePath[];
}

// The Visitor has to be generic because babel binds `this` for each property.
// `this` is usually used in babel plugins to pass plugin state from
// `pre` -> `visitor` -> `post`. An example of this can be seen in the official
// babel handbook:
// https://github.com/thejameskyle/babel-handbook/blob/master/translations/en/plugin-handbook.md#-pre-and-post-in-plugins
export interface Visitor<S = Node> extends VisitNodeObject<Node> {
    ArrayExpression?: VisitNode<S, t.ArrayExpression>;
    AssignmentExpression?: VisitNode<S, t.AssignmentExpression>;
    LVal?: VisitNode<S, t.LVal>;
    Expression?: VisitNode<S, t.Expression>;
    BinaryExpression?: VisitNode<S, t.BinaryExpression>;
    Directive?: VisitNode<S, t.Directive>;
    DirectiveLiteral?: VisitNode<S, t.DirectiveLiteral>;
    BlockStatement?: VisitNode<S, t.BlockStatement>;
    BreakStatement?: VisitNode<S, t.BreakStatement>;
    Identifier?: VisitNode<S, t.Identifier>;
    CallExpression?: VisitNode<S, t.CallExpression>;
    CatchClause?: VisitNode<S, t.CatchClause>;
    ConditionalExpression?: VisitNode<S, t.ConditionalExpression>;
    ContinueStatement?: VisitNode<S, t.ContinueStatement>;
    DebuggerStatement?: VisitNode<S, t.DebuggerStatement>;
    DoWhileStatement?: VisitNode<S, t.DoWhileStatement>;
    Statement?: VisitNode<S, t.Statement>;
    EmptyStatement?: VisitNode<S, t.EmptyStatement>;
    ExpressionStatement?: VisitNode<S, t.ExpressionStatement>;
    File?: VisitNode<S, t.File>;
    Program?: VisitNode<S, t.Program>;
    ForInStatement?: VisitNode<S, t.ForInStatement>;
    VariableDeclaration?: VisitNode<S, t.VariableDeclaration>;
    ForStatement?: VisitNode<S, t.ForStatement>;
    FunctionDeclaration?: VisitNode<S, t.FunctionDeclaration>;
    FunctionExpression?: VisitNode<S, t.FunctionExpression>;
    IfStatement?: VisitNode<S, t.IfStatement>;
    LabeledStatement?: VisitNode<S, t.LabeledStatement>;
    StringLiteral?: VisitNode<S, t.StringLiteral>;
    NumericLiteral?: VisitNode<S, t.NumericLiteral>;
    NullLiteral?: VisitNode<S, t.NullLiteral>;
    BooleanLiteral?: VisitNode<S, t.BooleanLiteral>;
    RegExpLiteral?: VisitNode<S, t.RegExpLiteral>;
    LogicalExpression?: VisitNode<S, t.LogicalExpression>;
    MemberExpression?: VisitNode<S, t.MemberExpression>;
    NewExpression?: VisitNode<S, t.NewExpression>;
    ObjectExpression?: VisitNode<S, t.ObjectExpression>;
    ObjectMethod?: VisitNode<S, t.ObjectMethod>;
    ObjectProperty?: VisitNode<S, t.ObjectProperty>;
    RestElement?: VisitNode<S, t.RestElement>;
    ReturnStatement?: VisitNode<S, t.ReturnStatement>;
    SequenceExpression?: VisitNode<S, t.SequenceExpression>;
    SwitchCase?: VisitNode<S, t.SwitchCase>;
    SwitchStatement?: VisitNode<S, t.SwitchStatement>;
    ThisExpression?: VisitNode<S, t.ThisExpression>;
    ThrowStatement?: VisitNode<S, t.ThrowStatement>;
    TryStatement?: VisitNode<S, t.TryStatement>;
    UnaryExpression?: VisitNode<S, t.UnaryExpression>;
    UpdateExpression?: VisitNode<S, t.UpdateExpression>;
    VariableDeclarator?: VisitNode<S, t.VariableDeclarator>;
    WhileStatement?: VisitNode<S, t.WhileStatement>;
    WithStatement?: VisitNode<S, t.WithStatement>;
    AssignmentPattern?: VisitNode<S, t.AssignmentPattern>;
    ArrayPattern?: VisitNode<S, t.ArrayPattern>;
    ArrowFunctionExpression?: VisitNode<S, t.ArrowFunctionExpression>;
    ClassBody?: VisitNode<S, t.ClassBody>;
    ClassDeclaration?: VisitNode<S, t.ClassDeclaration>;
    ClassExpression?: VisitNode<S, t.ClassExpression>;
    ExportAllDeclaration?: VisitNode<S, t.ExportAllDeclaration>;
    ExportDefaultDeclaration?: VisitNode<S, t.ExportDefaultDeclaration>;
    ExportNamedDeclaration?: VisitNode<S, t.ExportNamedDeclaration>;
    Declaration?: VisitNode<S, t.Declaration>;
    ExportSpecifier?: VisitNode<S, t.ExportSpecifier>;
    ForOfStatement?: VisitNode<S, t.ForOfStatement>;
    ImportDeclaration?: VisitNode<S, t.ImportDeclaration>;
    ImportDefaultSpecifier?: VisitNode<S, t.ImportDefaultSpecifier>;
    ImportNamespaceSpecifier?: VisitNode<S, t.ImportNamespaceSpecifier>;
    ImportSpecifier?: VisitNode<S, t.ImportSpecifier>;
    MetaProperty?: VisitNode<S, t.MetaProperty>;
    ClassMethod?: VisitNode<S, t.ClassMethod>;
    ObjectPattern?: VisitNode<S, t.ObjectPattern>;
    SpreadElement?: VisitNode<S, t.SpreadElement>;
    Super?: VisitNode<S, t.Super>;
    TaggedTemplateExpression?: VisitNode<S, t.TaggedTemplateExpression>;
    TemplateLiteral?: VisitNode<S, t.TemplateLiteral>;
    TemplateElement?: VisitNode<S, t.TemplateElement>;
    YieldExpression?: VisitNode<S, t.YieldExpression>;
    AnyTypeAnnotation?: VisitNode<S, t.AnyTypeAnnotation>;
    ArrayTypeAnnotation?: VisitNode<S, t.ArrayTypeAnnotation>;
    BooleanTypeAnnotation?: VisitNode<S, t.BooleanTypeAnnotation>;
    BooleanLiteralTypeAnnotation?: VisitNode<S, t.BooleanLiteralTypeAnnotation>;
    NullLiteralTypeAnnotation?: VisitNode<S, t.NullLiteralTypeAnnotation>;
    ClassImplements?: VisitNode<S, t.ClassImplements>;
    ClassProperty?: VisitNode<S, t.ClassProperty>;
    DeclareClass?: VisitNode<S, t.DeclareClass>;
    DeclareFunction?: VisitNode<S, t.DeclareFunction>;
    DeclareInterface?: VisitNode<S, t.DeclareInterface>;
    DeclareModule?: VisitNode<S, t.DeclareModule>;
    DeclareTypeAlias?: VisitNode<S, t.DeclareTypeAlias>;
    DeclareVariable?: VisitNode<S, t.DeclareVariable>;
    ExistentialTypeParam?: VisitNode<S, t.ExistentialTypeParam>;
    FunctionTypeAnnotation?: VisitNode<S, t.FunctionTypeAnnotation>;
    FunctionTypeParam?: VisitNode<S, t.FunctionTypeParam>;
    GenericTypeAnnotation?: VisitNode<S, t.GenericTypeAnnotation>;
    InterfaceExtends?: VisitNode<S, t.InterfaceExtends>;
    InterfaceDeclaration?: VisitNode<S, t.InterfaceDeclaration>;
    IntersectionTypeAnnotation?: VisitNode<S, t.IntersectionTypeAnnotation>;
    MixedTypeAnnotation?: VisitNode<S, t.MixedTypeAnnotation>;
    NullableTypeAnnotation?: VisitNode<S, t.NullableTypeAnnotation>;
    NumericLiteralTypeAnnotation?: VisitNode<S, t.NumericLiteralTypeAnnotation>;
    NumberTypeAnnotation?: VisitNode<S, t.NumberTypeAnnotation>;
    StringLiteralTypeAnnotation?: VisitNode<S, t.StringLiteralTypeAnnotation>;
    StringTypeAnnotation?: VisitNode<S, t.StringTypeAnnotation>;
    ThisTypeAnnotation?: VisitNode<S, t.ThisTypeAnnotation>;
    TupleTypeAnnotation?: VisitNode<S, t.TupleTypeAnnotation>;
    TypeofTypeAnnotation?: VisitNode<S, t.TypeofTypeAnnotation>;
    TypeAlias?: VisitNode<S, t.TypeAlias>;
    TypeAnnotation?: VisitNode<S, t.TypeAnnotation>;
    TypeCastExpression?: VisitNode<S, t.TypeCastExpression>;
    TypeParameterDeclaration?: VisitNode<S, t.TypeParameterDeclaration>;
    TypeParameterInstantiation?: VisitNode<S, t.TypeParameterInstantiation>;
    ObjectTypeAnnotation?: VisitNode<S, t.ObjectTypeAnnotation>;
    ObjectTypeCallProperty?: VisitNode<S, t.ObjectTypeCallProperty>;
    ObjectTypeIndexer?: VisitNode<S, t.ObjectTypeIndexer>;
    ObjectTypeProperty?: VisitNode<S, t.ObjectTypeProperty>;
    QualifiedTypeIdentifier?: VisitNode<S, t.QualifiedTypeIdentifier>;
    UnionTypeAnnotation?: VisitNode<S, t.UnionTypeAnnotation>;
    VoidTypeAnnotation?: VisitNode<S, t.VoidTypeAnnotation>;
    JSXAttribute?: VisitNode<S, t.JSXAttribute>;
    JSXIdentifier?: VisitNode<S, t.JSXIdentifier>;
    JSXNamespacedName?: VisitNode<S, t.JSXNamespacedName>;
    JSXElement?: VisitNode<S, t.JSXElement>;
    JSXExpressionContainer?: VisitNode<S, t.JSXExpressionContainer>;
    JSXClosingElement?: VisitNode<S, t.JSXClosingElement>;
    JSXMemberExpression?: VisitNode<S, t.JSXMemberExpression>;
    JSXOpeningElement?: VisitNode<S, t.JSXOpeningElement>;
    JSXEmptyExpression?: VisitNode<S, t.JSXEmptyExpression>;
    JSXSpreadAttribute?: VisitNode<S, t.JSXSpreadAttribute>;
    JSXText?: VisitNode<S, t.JSXText>;
    Noop?: VisitNode<S, t.Noop>;
    ParenthesizedExpression?: VisitNode<S, t.ParenthesizedExpression>;
    AwaitExpression?: VisitNode<S, t.AwaitExpression>;
    BindExpression?: VisitNode<S, t.BindExpression>;
    Decorator?: VisitNode<S, t.Decorator>;
    DoExpression?: VisitNode<S, t.DoExpression>;
    ExportDefaultSpecifier?: VisitNode<S, t.ExportDefaultSpecifier>;
    ExportNamespaceSpecifier?: VisitNode<S, t.ExportNamespaceSpecifier>;
    RestProperty?: VisitNode<S, t.RestProperty>;
    SpreadProperty?: VisitNode<S, t.SpreadProperty>;
    Binary?: VisitNode<S, t.Binary>;
    Scopable?: VisitNode<S, t.Scopable>;
    BlockParent?: VisitNode<S, t.BlockParent>;
    Block?: VisitNode<S, t.Block>;
    Terminatorless?: VisitNode<S, t.Terminatorless>;
    CompletionStatement?: VisitNode<S, t.CompletionStatement>;
    Conditional?: VisitNode<S, t.Conditional>;
    Loop?: VisitNode<S, t.Loop>;
    While?: VisitNode<S, t.While>;
    ExpressionWrapper?: VisitNode<S, t.ExpressionWrapper>;
    For?: VisitNode<S, t.For>;
    ForXStatement?: VisitNode<S, t.ForXStatement>;
    Function?: VisitNode<S, t.Function>;
    FunctionParent?: VisitNode<S, t.FunctionParent>;
    Pureish?: VisitNode<S, t.Pureish>;
    Literal?: VisitNode<S, t.Literal>;
    Immutable?: VisitNode<S, t.Immutable>;
    UserWhitespacable?: VisitNode<S, t.UserWhitespacable>;
    Method?: VisitNode<S, t.Method>;
    ObjectMember?: VisitNode<S, t.ObjectMember>;
    Property?: VisitNode<S, t.Property>;
    UnaryLike?: VisitNode<S, t.UnaryLike>;
    Pattern?: VisitNode<S, t.Pattern>;
    Class?: VisitNode<S, t.Class>;
    ModuleDeclaration?: VisitNode<S, t.ModuleDeclaration>;
    ExportDeclaration?: VisitNode<S, t.ExportDeclaration>;
    ModuleSpecifier?: VisitNode<S, t.ModuleSpecifier>;
    Flow?: VisitNode<S, t.Flow>;
    FlowBaseAnnotation?: VisitNode<S, t.FlowBaseAnnotation>;
    FlowDeclaration?: VisitNode<S, t.FlowDeclaration>;
    JSX?: VisitNode<S, t.JSX>;
    Scope?: VisitNode<S, t.Scopable>;
}

export type VisitNode<T, P> = VisitNodeFunction<T, P> | VisitNodeObject<T>;

export type VisitNodeFunction<T, P> = (this: T, path: NodePath<P>, state: any) => void;

export interface VisitNodeObject<T> {
    enter?(path: NodePath<T>, state: any): void;
    exit?(path: NodePath<T>, state: any): void;
}

export class NodePath<T = Node> {
    constructor(hub: Hub, parent: Node);
    parent: Node;
    hub: Hub;
    contexts: TraversalContext[];
    data: object;
    shouldSkip: boolean;
    shouldStop: boolean;
    removed: boolean;
    state: any;
    opts: object;
    skipKeys: object;
    parentPath: NodePath;
    context: TraversalContext;
    container: object | object[];
    listKey: string;
    inList: boolean;
    parentKey: string;
    key: string;
    node: T;
    scope: Scope;
    type: string;
    typeAnnotation: object;

    getScope(scope: Scope): Scope;

    setData(key: string, val: any): any;

    getData(key: string, def?: any): any;

    buildCodeFrameError<TError extends Error>(msg: string, Error?: new (msg: string) => TError): TError;

    traverse(visitor: Visitor, state?: any): void;

    set(key: string, node: Node): void;

    getPathLocation(): string;

    // Example: https://github.com/babel/babel/blob/63204ae51e020d84a5b246312f5eeb4d981ab952/packages/babel-traverse/src/path/modification.js#L83
    debug(buildMessage: () => string): void;

    // ------------------------- ancestry -------------------------
    /**
     * Call the provided `callback` with the `NodePath`s of all the parents.
     * When the `callback` returns a truthy value, we return that node path.
     */
    findParent(callback: (path: NodePath) => boolean): NodePath;

    find(callback: (path: NodePath) => boolean): NodePath;

    /** Get the parent function of the current path. */
    getFunctionParent(): NodePath;

    /** Walk up the tree until we hit a parent node path in a list. */
    getStatementParent(): NodePath;

    /**
     * Get the deepest common ancestor and then from it, get the earliest relationship path
     * to that ancestor.
     *
     * Earliest is defined as being "before" all the other nodes in terms of list container
     * position and visiting key.
     */
    getEarliestCommonAncestorFrom(paths: NodePath[]): NodePath[];

    /** Get the earliest path in the tree where the provided `paths` intersect. */
    getDeepestCommonAncestorFrom(
        paths: NodePath[],
        filter?: (deepest: Node, i: number, ancestries: NodePath[]) => NodePath
    ): NodePath;

    /**
     * Build an array of node paths containing the entire ancestry of the current node path.
     *
     * NOTE: The current node path is included in this.
     */
    getAncestry(): NodePath[];

    inType(...candidateTypes: string[]): boolean;

    // ------------------------- inference -------------------------
    /** Infer the type of the current `NodePath`. */
    getTypeAnnotation(): t.FlowTypeAnnotation;

    isBaseType(baseName: string, soft?: boolean): boolean;

    couldBeBaseType(name: string): boolean;

    baseTypeStrictlyMatches(right: NodePath): boolean;

    isGenericType(genericName: string): boolean;

    // ------------------------- replacement -------------------------
    /**
     * Replace a node with an array of multiple. This method performs the following steps:
     *
     *  - Inherit the comments of first provided node with that of the current node.
     *  - Insert the provided nodes after the current node.
     *  - Remove the current node.
     */
    replaceWithMultiple(nodes: Node[]): void;

    /**
     * Parse a string as an expression and replace the current node with the result.
     *
     * NOTE: This is typically not a good idea to use. Building source strings when
     * transforming ASTs is an antipattern and SHOULD NOT be encouraged. Even if it's
     * easier to use, your transforms will be extremely brittle.
     */
    replaceWithSourceString(replacement: any): void;

    /** Replace the current node with another. */
    replaceWith(replacement: Node | NodePath): void;

    /**
     * This method takes an array of statements nodes and then explodes it
     * into expressions. This method retains completion records which is
     * extremely important to retain original semantics.
     */
    replaceExpressionWithStatements(nodes: Node[]): Node;

    replaceInline(nodes: Node | Node[]): void;

    // ------------------------- evaluation -------------------------
    /**
     * Walk the input `node` and statically evaluate if it's truthy.
     *
     * Returning `true` when we're sure that the expression will evaluate to a
     * truthy value, `false` if we're sure that it will evaluate to a falsy
     * value and `undefined` if we aren't sure. Because of this please do not
     * rely on coercion when using this method and check with === if it's false.
     */
    evaluateTruthy(): boolean;

    /**
     * Walk the input `node` and statically evaluate it.
     *
     * Returns an object in the form `{ confident, value }`. `confident` indicates
     * whether or not we had to drop out of evaluating the expression because of
     * hitting an unknown node that we couldn't confidently find the value of.
     *
     * Example:
     *
     *   t.evaluate(parse("5 + 5")) // { confident: true, value: 10 }
     *   t.evaluate(parse("!true")) // { confident: true, value: false }
     *   t.evaluate(parse("foo + foo")) // { confident: false, value: undefined }
     */
    evaluate(): { confident: boolean; value: any };

    // ------------------------- introspection -------------------------
    /**
     * Match the current node if it matches the provided `pattern`.
     *
     * For example, given the match `React.createClass` it would match the
     * parsed nodes of `React.createClass` and `React["createClass"]`.
     */
    matchesPattern(pattern: string, allowPartial?: boolean): boolean;

    /**
     * Check whether we have the input `key`. If the `key` references an array then we check
     * if the array has any items, otherwise we just check if it's falsy.
     */
    has(key: string): boolean;

    isStatic(): boolean;

    /** Alias of `has`. */
    is(key: string): boolean;

    /** Opposite of `has`. */
    isnt(key: string): boolean;

    /** Check whether the path node `key` strict equals `value`. */
    equals(key: string, value: any): boolean;

    /**
     * Check the type against our stored internal type of the node. This is handy when a node has
     * been removed yet we still internally know the type and need it to calculate node replacement.
     */
    isNodeType(type: string): boolean;

    /**
     * This checks whether or not we're in one of the following positions:
     *
     *   for (KEY in right);
     *   for (KEY;;);
     *
     * This is because these spots allow VariableDeclarations AND normal expressions so we need
     * to tell the path replacement that it's ok to replace this with an expression.
     */
    canHaveVariableDeclarationOrExpression(): boolean;

    /**
     * This checks whether we are swapping an arrow function's body between an
     * expression and a block statement (or vice versa).
     *
     * This is because arrow functions may implicitly return an expression, which
     * is the same as containing a block statement.
     */
    canSwapBetweenExpressionAndStatement(replacement: Node): boolean;

    /** Check whether the current path references a completion record */
    isCompletionRecord(allowInsideFunction?: boolean): boolean;

    /**
     * Check whether or not the current `key` allows either a single statement or block statement
     * so we can explode it if necessary.
     */
    isStatementOrBlock(): boolean;

    /** Check if the currently assigned path references the `importName` of `moduleSource`. */
    referencesImport(moduleSource: string, importName: string): boolean;

    /** Get the source code associated with this node. */
    getSource(): string;

    // ------------------------- context -------------------------
    call(key: string): boolean;

    isBlacklisted(): boolean;

    visit(): boolean;

    skip(): void;

    skipKey(key: string): void;

    stop(): void;

    setScope(): void;

    setContext(context: TraversalContext): NodePath<T>;

    popContext(): void;

    pushContext(context: TraversalContext): void;

    // ------------------------- removal -------------------------
    remove(): void;

    // ------------------------- modification -------------------------
    /** Insert the provided nodes before the current one. */
    insertBefore(nodes: Node | Node[]): any;

    /**
     * Insert the provided nodes after the current one. When inserting nodes after an
     * expression, ensure that the completion record is correct by pushing the current node.
     */
    insertAfter(nodes: Node | Node[]): any;

    /** Update all sibling node paths after `fromIndex` by `incrementBy`. */
    updateSiblingKeys(fromIndex: number, incrementBy: number): void;

    /** Hoist the current node to the highest scope possible and return a UID referencing it. */
    hoist(scope: Scope): void;

    // ------------------------- family -------------------------
    getOpposite(): NodePath;

    getCompletionRecords(): NodePath[];

    getSibling(key: string): NodePath;

    get(key: string, context?: boolean | TraversalContext): NodePath;

    getBindingIdentifiers(duplicates?: boolean): Node[];

    getOuterBindingIdentifiers(duplicates?: boolean): Node[];

    // ------------------------- comments -------------------------
    /** Share comments amongst siblings. */
    shareCommentsWithSiblings(): void;

    addComment(type: string, content: string, line?: boolean): void;

    /** Give node `comments` of the specified `type`. */
    addComments(type: string, comments: any[]): void;

    // ------------------------- isXXX -------------------------
    isArrayExpression(opts?: object): boolean;
    isAssignmentExpression(opts?: object): boolean;
    isBinaryExpression(opts?: object): boolean;
    isDirective(opts?: object): boolean;
    isDirectiveLiteral(opts?: object): boolean;
    isBlockStatement(opts?: object): boolean;
    isBreakStatement(opts?: object): boolean;
    isCallExpression(opts?: object): boolean;
    isCatchClause(opts?: object): boolean;
    isConditionalExpression(opts?: object): boolean;
    isContinueStatement(opts?: object): boolean;
    isDebuggerStatement(opts?: object): boolean;
    isDoWhileStatement(opts?: object): boolean;
    isEmptyStatement(opts?: object): boolean;
    isExpressionStatement(opts?: object): boolean;
    isFile(opts?: object): boolean;
    isForInStatement(opts?: object): boolean;
    isForStatement(opts?: object): boolean;
    isFunctionDeclaration(opts?: object): boolean;
    isFunctionExpression(opts?: object): boolean;
    isIdentifier(opts?: object): boolean;
    isIfStatement(opts?: object): boolean;
    isLabeledStatement(opts?: object): boolean;
    isStringLiteral(opts?: object): boolean;
    isNumericLiteral(opts?: object): boolean;
    isNullLiteral(opts?: object): boolean;
    isBooleanLiteral(opts?: object): boolean;
    isRegExpLiteral(opts?: object): boolean;
    isLogicalExpression(opts?: object): boolean;
    isMemberExpression(opts?: object): boolean;
    isNewExpression(opts?: object): boolean;
    isProgram(opts?: object): boolean;
    isObjectExpression(opts?: object): boolean;
    isObjectMethod(opts?: object): boolean;
    isObjectProperty(opts?: object): boolean;
    isRestElement(opts?: object): boolean;
    isReturnStatement(opts?: object): boolean;
    isSequenceExpression(opts?: object): boolean;
    isSwitchCase(opts?: object): boolean;
    isSwitchStatement(opts?: object): boolean;
    isThisExpression(opts?: object): boolean;
    isThrowStatement(opts?: object): boolean;
    isTryStatement(opts?: object): boolean;
    isUnaryExpression(opts?: object): boolean;
    isUpdateExpression(opts?: object): boolean;
    isVariableDeclaration(opts?: object): boolean;
    isVariableDeclarator(opts?: object): boolean;
    isWhileStatement(opts?: object): boolean;
    isWithStatement(opts?: object): boolean;
    isAssignmentPattern(opts?: object): boolean;
    isArrayPattern(opts?: object): boolean;
    isArrowFunctionExpression(opts?: object): boolean;
    isClassBody(opts?: object): boolean;
    isClassDeclaration(opts?: object): boolean;
    isClassExpression(opts?: object): boolean;
    isExportAllDeclaration(opts?: object): boolean;
    isExportDefaultDeclaration(opts?: object): boolean;
    isExportNamedDeclaration(opts?: object): boolean;
    isExportSpecifier(opts?: object): boolean;
    isForOfStatement(opts?: object): boolean;
    isImportDeclaration(opts?: object): boolean;
    isImportDefaultSpecifier(opts?: object): boolean;
    isImportNamespaceSpecifier(opts?: object): boolean;
    isImportSpecifier(opts?: object): boolean;
    isMetaProperty(opts?: object): boolean;
    isClassMethod(opts?: object): boolean;
    isObjectPattern(opts?: object): boolean;
    isSpreadElement(opts?: object): boolean;
    isSuper(opts?: object): boolean;
    isTaggedTemplateExpression(opts?: object): boolean;
    isTemplateElement(opts?: object): boolean;
    isTemplateLiteral(opts?: object): boolean;
    isYieldExpression(opts?: object): boolean;
    isAnyTypeAnnotation(opts?: object): boolean;
    isArrayTypeAnnotation(opts?: object): boolean;
    isBooleanTypeAnnotation(opts?: object): boolean;
    isBooleanLiteralTypeAnnotation(opts?: object): boolean;
    isNullLiteralTypeAnnotation(opts?: object): boolean;
    isClassImplements(opts?: object): boolean;
    isClassProperty(opts?: object): boolean;
    isDeclareClass(opts?: object): boolean;
    isDeclareFunction(opts?: object): boolean;
    isDeclareInterface(opts?: object): boolean;
    isDeclareModule(opts?: object): boolean;
    isDeclareTypeAlias(opts?: object): boolean;
    isDeclareVariable(opts?: object): boolean;
    isExistentialTypeParam(opts?: object): boolean;
    isFunctionTypeAnnotation(opts?: object): boolean;
    isFunctionTypeParam(opts?: object): boolean;
    isGenericTypeAnnotation(opts?: object): boolean;
    isInterfaceExtends(opts?: object): boolean;
    isInterfaceDeclaration(opts?: object): boolean;
    isIntersectionTypeAnnotation(opts?: object): boolean;
    isMixedTypeAnnotation(opts?: object): boolean;
    isNullableTypeAnnotation(opts?: object): boolean;
    isNumericLiteralTypeAnnotation(opts?: object): boolean;
    isNumberTypeAnnotation(opts?: object): boolean;
    isStringLiteralTypeAnnotation(opts?: object): boolean;
    isStringTypeAnnotation(opts?: object): boolean;
    isThisTypeAnnotation(opts?: object): boolean;
    isTupleTypeAnnotation(opts?: object): boolean;
    isTypeofTypeAnnotation(opts?: object): boolean;
    isTypeAlias(opts?: object): boolean;
    isTypeAnnotation(opts?: object): boolean;
    isTypeCastExpression(opts?: object): boolean;
    isTypeParameterDeclaration(opts?: object): boolean;
    isTypeParameterInstantiation(opts?: object): boolean;
    isObjectTypeAnnotation(opts?: object): boolean;
    isObjectTypeCallProperty(opts?: object): boolean;
    isObjectTypeIndexer(opts?: object): boolean;
    isObjectTypeProperty(opts?: object): boolean;
    isQualifiedTypeIdentifier(opts?: object): boolean;
    isUnionTypeAnnotation(opts?: object): boolean;
    isVoidTypeAnnotation(opts?: object): boolean;
    isJSXAttribute(opts?: object): boolean;
    isJSXClosingElement(opts?: object): boolean;
    isJSXElement(opts?: object): boolean;
    isJSXEmptyExpression(opts?: object): boolean;
    isJSXExpressionContainer(opts?: object): boolean;
    isJSXIdentifier(opts?: object): boolean;
    isJSXMemberExpression(opts?: object): boolean;
    isJSXNamespacedName(opts?: object): boolean;
    isJSXOpeningElement(opts?: object): boolean;
    isJSXSpreadAttribute(opts?: object): boolean;
    isJSXText(opts?: object): boolean;
    isNoop(opts?: object): boolean;
    isParenthesizedExpression(opts?: object): boolean;
    isAwaitExpression(opts?: object): boolean;
    isBindExpression(opts?: object): boolean;
    isDecorator(opts?: object): boolean;
    isDoExpression(opts?: object): boolean;
    isExportDefaultSpecifier(opts?: object): boolean;
    isExportNamespaceSpecifier(opts?: object): boolean;
    isRestProperty(opts?: object): boolean;
    isSpreadProperty(opts?: object): boolean;
    isExpression(opts?: object): boolean;
    isBinary(opts?: object): boolean;
    isScopable(opts?: object): boolean;
    isBlockParent(opts?: object): boolean;
    isBlock(opts?: object): boolean;
    isStatement(opts?: object): boolean;
    isTerminatorless(opts?: object): boolean;
    isCompletionStatement(opts?: object): boolean;
    isConditional(opts?: object): boolean;
    isLoop(opts?: object): boolean;
    isWhile(opts?: object): boolean;
    isExpressionWrapper(opts?: object): boolean;
    isFor(opts?: object): boolean;
    isForXStatement(opts?: object): boolean;
    isFunction(opts?: object): boolean;
    isFunctionParent(opts?: object): boolean;
    isPureish(opts?: object): boolean;
    isDeclaration(opts?: object): boolean;
    isLVal(opts?: object): boolean;
    isLiteral(opts?: object): boolean;
    isImmutable(opts?: object): boolean;
    isUserWhitespacable(opts?: object): boolean;
    isMethod(opts?: object): boolean;
    isObjectMember(opts?: object): boolean;
    isProperty(opts?: object): boolean;
    isUnaryLike(opts?: object): boolean;
    isPattern(opts?: object): boolean;
    isClass(opts?: object): boolean;
    isModuleDeclaration(opts?: object): boolean;
    isExportDeclaration(opts?: object): boolean;
    isModuleSpecifier(opts?: object): boolean;
    isFlow(opts?: object): boolean;
    isFlowBaseAnnotation(opts?: object): boolean;
    isFlowDeclaration(opts?: object): boolean;
    isJSX(opts?: object): boolean;
    isNumberLiteral(opts?: object): boolean;
    isRegexLiteral(opts?: object): boolean;
    isReferencedIdentifier(opts?: object): boolean;
    isReferencedMemberExpression(opts?: object): boolean;
    isBindingIdentifier(opts?: object): boolean;
    isScope(opts?: object): boolean;
    isReferenced(opts?: object): boolean;
    isBlockScoped(opts?: object): boolean;
    isVar(opts?: object): boolean;
    isUser(opts?: object): boolean;
    isGenerated(opts?: object): boolean;
    isPure(opts?: object): boolean;

    // ------------------------- assertXXX -------------------------
    assertArrayExpression(opts?: object): void;
    assertAssignmentExpression(opts?: object): void;
    assertBinaryExpression(opts?: object): void;
    assertDirective(opts?: object): void;
    assertDirectiveLiteral(opts?: object): void;
    assertBlockStatement(opts?: object): void;
    assertBreakStatement(opts?: object): void;
    assertCallExpression(opts?: object): void;
    assertCatchClause(opts?: object): void;
    assertConditionalExpression(opts?: object): void;
    assertContinueStatement(opts?: object): void;
    assertDebuggerStatement(opts?: object): void;
    assertDoWhileStatement(opts?: object): void;
    assertEmptyStatement(opts?: object): void;
    assertExpressionStatement(opts?: object): void;
    assertFile(opts?: object): void;
    assertForInStatement(opts?: object): void;
    assertForStatement(opts?: object): void;
    assertFunctionDeclaration(opts?: object): void;
    assertFunctionExpression(opts?: object): void;
    assertIdentifier(opts?: object): void;
    assertIfStatement(opts?: object): void;
    assertLabeledStatement(opts?: object): void;
    assertStringLiteral(opts?: object): void;
    assertNumericLiteral(opts?: object): void;
    assertNullLiteral(opts?: object): void;
    assertBooleanLiteral(opts?: object): void;
    assertRegExpLiteral(opts?: object): void;
    assertLogicalExpression(opts?: object): void;
    assertMemberExpression(opts?: object): void;
    assertNewExpression(opts?: object): void;
    assertProgram(opts?: object): void;
    assertObjectExpression(opts?: object): void;
    assertObjectMethod(opts?: object): void;
    assertObjectProperty(opts?: object): void;
    assertRestElement(opts?: object): void;
    assertReturnStatement(opts?: object): void;
    assertSequenceExpression(opts?: object): void;
    assertSwitchCase(opts?: object): void;
    assertSwitchStatement(opts?: object): void;
    assertThisExpression(opts?: object): void;
    assertThrowStatement(opts?: object): void;
    assertTryStatement(opts?: object): void;
    assertUnaryExpression(opts?: object): void;
    assertUpdateExpression(opts?: object): void;
    assertVariableDeclaration(opts?: object): void;
    assertVariableDeclarator(opts?: object): void;
    assertWhileStatement(opts?: object): void;
    assertWithStatement(opts?: object): void;
    assertAssignmentPattern(opts?: object): void;
    assertArrayPattern(opts?: object): void;
    assertArrowFunctionExpression(opts?: object): void;
    assertClassBody(opts?: object): void;
    assertClassDeclaration(opts?: object): void;
    assertClassExpression(opts?: object): void;
    assertExportAllDeclaration(opts?: object): void;
    assertExportDefaultDeclaration(opts?: object): void;
    assertExportNamedDeclaration(opts?: object): void;
    assertExportSpecifier(opts?: object): void;
    assertForOfStatement(opts?: object): void;
    assertImportDeclaration(opts?: object): void;
    assertImportDefaultSpecifier(opts?: object): void;
    assertImportNamespaceSpecifier(opts?: object): void;
    assertImportSpecifier(opts?: object): void;
    assertMetaProperty(opts?: object): void;
    assertClassMethod(opts?: object): void;
    assertObjectPattern(opts?: object): void;
    assertSpreadElement(opts?: object): void;
    assertSuper(opts?: object): void;
    assertTaggedTemplateExpression(opts?: object): void;
    assertTemplateElement(opts?: object): void;
    assertTemplateLiteral(opts?: object): void;
    assertYieldExpression(opts?: object): void;
    assertAnyTypeAnnotation(opts?: object): void;
    assertArrayTypeAnnotation(opts?: object): void;
    assertBooleanTypeAnnotation(opts?: object): void;
    assertBooleanLiteralTypeAnnotation(opts?: object): void;
    assertNullLiteralTypeAnnotation(opts?: object): void;
    assertClassImplements(opts?: object): void;
    assertClassProperty(opts?: object): void;
    assertDeclareClass(opts?: object): void;
    assertDeclareFunction(opts?: object): void;
    assertDeclareInterface(opts?: object): void;
    assertDeclareModule(opts?: object): void;
    assertDeclareTypeAlias(opts?: object): void;
    assertDeclareVariable(opts?: object): void;
    assertExistentialTypeParam(opts?: object): void;
    assertFunctionTypeAnnotation(opts?: object): void;
    assertFunctionTypeParam(opts?: object): void;
    assertGenericTypeAnnotation(opts?: object): void;
    assertInterfaceExtends(opts?: object): void;
    assertInterfaceDeclaration(opts?: object): void;
    assertIntersectionTypeAnnotation(opts?: object): void;
    assertMixedTypeAnnotation(opts?: object): void;
    assertNullableTypeAnnotation(opts?: object): void;
    assertNumericLiteralTypeAnnotation(opts?: object): void;
    assertNumberTypeAnnotation(opts?: object): void;
    assertStringLiteralTypeAnnotation(opts?: object): void;
    assertStringTypeAnnotation(opts?: object): void;
    assertThisTypeAnnotation(opts?: object): void;
    assertTupleTypeAnnotation(opts?: object): void;
    assertTypeofTypeAnnotation(opts?: object): void;
    assertTypeAlias(opts?: object): void;
    assertTypeAnnotation(opts?: object): void;
    assertTypeCastExpression(opts?: object): void;
    assertTypeParameterDeclaration(opts?: object): void;
    assertTypeParameterInstantiation(opts?: object): void;
    assertObjectTypeAnnotation(opts?: object): void;
    assertObjectTypeCallProperty(opts?: object): void;
    assertObjectTypeIndexer(opts?: object): void;
    assertObjectTypeProperty(opts?: object): void;
    assertQualifiedTypeIdentifier(opts?: object): void;
    assertUnionTypeAnnotation(opts?: object): void;
    assertVoidTypeAnnotation(opts?: object): void;
    assertJSXAttribute(opts?: object): void;
    assertJSXClosingElement(opts?: object): void;
    assertJSXElement(opts?: object): void;
    assertJSXEmptyExpression(opts?: object): void;
    assertJSXExpressionContainer(opts?: object): void;
    assertJSXIdentifier(opts?: object): void;
    assertJSXMemberExpression(opts?: object): void;
    assertJSXNamespacedName(opts?: object): void;
    assertJSXOpeningElement(opts?: object): void;
    assertJSXSpreadAttribute(opts?: object): void;
    assertJSXText(opts?: object): void;
    assertNoop(opts?: object): void;
    assertParenthesizedExpression(opts?: object): void;
    assertAwaitExpression(opts?: object): void;
    assertBindExpression(opts?: object): void;
    assertDecorator(opts?: object): void;
    assertDoExpression(opts?: object): void;
    assertExportDefaultSpecifier(opts?: object): void;
    assertExportNamespaceSpecifier(opts?: object): void;
    assertRestProperty(opts?: object): void;
    assertSpreadProperty(opts?: object): void;
    assertExpression(opts?: object): void;
    assertBinary(opts?: object): void;
    assertScopable(opts?: object): void;
    assertBlockParent(opts?: object): void;
    assertBlock(opts?: object): void;
    assertStatement(opts?: object): void;
    assertTerminatorless(opts?: object): void;
    assertCompletionStatement(opts?: object): void;
    assertConditional(opts?: object): void;
    assertLoop(opts?: object): void;
    assertWhile(opts?: object): void;
    assertExpressionWrapper(opts?: object): void;
    assertFor(opts?: object): void;
    assertForXStatement(opts?: object): void;
    assertFunction(opts?: object): void;
    assertFunctionParent(opts?: object): void;
    assertPureish(opts?: object): void;
    assertDeclaration(opts?: object): void;
    assertLVal(opts?: object): void;
    assertLiteral(opts?: object): void;
    assertImmutable(opts?: object): void;
    assertUserWhitespacable(opts?: object): void;
    assertMethod(opts?: object): void;
    assertObjectMember(opts?: object): void;
    assertProperty(opts?: object): void;
    assertUnaryLike(opts?: object): void;
    assertPattern(opts?: object): void;
    assertClass(opts?: object): void;
    assertModuleDeclaration(opts?: object): void;
    assertExportDeclaration(opts?: object): void;
    assertModuleSpecifier(opts?: object): void;
    assertFlow(opts?: object): void;
    assertFlowBaseAnnotation(opts?: object): void;
    assertFlowDeclaration(opts?: object): void;
    assertJSX(opts?: object): void;
    assertNumberLiteral(opts?: object): void;
    assertRegexLiteral(opts?: object): void;
}

export class Hub {
    constructor(file: any, options: any);
    file: any;
    options: any;
}

export interface TraversalContext {
    parentPath: NodePath;
    scope: Scope;
    state: any;
    opts: any;
}
