// Type definitions for babel-traverse v6.7
// Project: https://github.com/babel/babel/tree/master/packages/babel-traverse
// Definitions by: Troy Gerwien <https://github.com/yortus>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="babel-types" />


import * as t from 'babel-types';
type Node = t.Node;

export default function traverse(parent: Node | Node[], opts?: TraverseOptions, scope?: Scope, state?: any, parentPath?: NodePath<Node>): void;

export interface TraverseOptions extends Visitor {
    scope?: Scope;
    noScope?: boolean;
}

export class Scope {
    constructor(path: NodePath<Node>, parentScope?: Scope);
    path: NodePath<Node>;
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

    checkBlockScopedCollisions(local: Node, kind: string, name: string, id: Object): void;

    rename(oldName: string, newName?: string, block?: Node): void;

    dump(): void;

    toArray(node: Node, i?: number): Node;

    registerDeclaration(path: NodePath<Node>): void;

    buildUndefinedNode(): Node;

    registerConstantViolation(path: NodePath<Node>): void;

    registerBinding(kind: string, path: NodePath<Node>, bindingPath?: NodePath<Node>): void;

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
    getAllBindings(...kinds: string[]): Object;

    bindingIdentifierEquals(name: string, node: Node): boolean;

    getBinding(name: string): Binding;

    getOwnBinding(name: string): Binding;

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
    constructor(opts: { existing: Binding; identifier: t.Identifier; scope: Scope; path: NodePath<Node>; kind: 'var' | 'let' | 'const'; });
    identifier: t.Identifier;
    scope: Scope;
    path: NodePath<Node>;
    kind: 'var' | 'let' | 'const' | 'module';
    referenced: boolean;
    references: number;
    referencePaths: NodePath<Node>[];
    constant: boolean;
    constantViolations: NodePath<Node>[];
}

export interface Visitor extends VisitNodeObject<Node> {
    ArrayExpression?: VisitNode<t.ArrayExpression>;
    AssignmentExpression?: VisitNode<t.AssignmentExpression>;
    LVal?: VisitNode<t.LVal>;
    Expression?: VisitNode<t.Expression>;
    BinaryExpression?: VisitNode<t.BinaryExpression>;
    Directive?: VisitNode<t.Directive>;
    DirectiveLiteral?: VisitNode<t.DirectiveLiteral>;
    BlockStatement?: VisitNode<t.BlockStatement>;
    BreakStatement?: VisitNode<t.BreakStatement>;
    Identifier?: VisitNode<t.Identifier>;
    CallExpression?: VisitNode<t.CallExpression>;
    CatchClause?: VisitNode<t.CatchClause>;
    ConditionalExpression?: VisitNode<t.ConditionalExpression>;
    ContinueStatement?: VisitNode<t.ContinueStatement>;
    DebuggerStatement?: VisitNode<t.DebuggerStatement>;
    DoWhileStatement?: VisitNode<t.DoWhileStatement>;
    Statement?: VisitNode<t.Statement>;
    EmptyStatement?: VisitNode<t.EmptyStatement>;
    ExpressionStatement?: VisitNode<t.ExpressionStatement>;
    File?: VisitNode<t.File>;
    Program?: VisitNode<t.Program>;
    ForInStatement?: VisitNode<t.ForInStatement>;
    VariableDeclaration?: VisitNode<t.VariableDeclaration>;
    ForStatement?: VisitNode<t.ForStatement>;
    FunctionDeclaration?: VisitNode<t.FunctionDeclaration>;
    FunctionExpression?: VisitNode<t.FunctionExpression>;
    IfStatement?: VisitNode<t.IfStatement>;
    LabeledStatement?: VisitNode<t.LabeledStatement>;
    StringLiteral?: VisitNode<t.StringLiteral>;
    NumericLiteral?: VisitNode<t.NumericLiteral>;
    NullLiteral?: VisitNode<t.NullLiteral>;
    BooleanLiteral?: VisitNode<t.BooleanLiteral>;
    RegExpLiteral?: VisitNode<t.RegExpLiteral>;
    LogicalExpression?: VisitNode<t.LogicalExpression>;
    MemberExpression?: VisitNode<t.MemberExpression>;
    NewExpression?: VisitNode<t.NewExpression>;
    ObjectExpression?: VisitNode<t.ObjectExpression>;
    ObjectMethod?: VisitNode<t.ObjectMethod>;
    ObjectProperty?: VisitNode<t.ObjectProperty>;
    RestElement?: VisitNode<t.RestElement>;
    ReturnStatement?: VisitNode<t.ReturnStatement>;
    SequenceExpression?: VisitNode<t.SequenceExpression>;
    SwitchCase?: VisitNode<t.SwitchCase>;
    SwitchStatement?: VisitNode<t.SwitchStatement>;
    ThisExpression?: VisitNode<t.ThisExpression>;
    ThrowStatement?: VisitNode<t.ThrowStatement>;
    TryStatement?: VisitNode<t.TryStatement>;
    UnaryExpression?: VisitNode<t.UnaryExpression>;
    UpdateExpression?: VisitNode<t.UpdateExpression>;
    VariableDeclarator?: VisitNode<t.VariableDeclarator>;
    WhileStatement?: VisitNode<t.WhileStatement>;
    WithStatement?: VisitNode<t.WithStatement>;
    AssignmentPattern?: VisitNode<t.AssignmentPattern>;
    ArrayPattern?: VisitNode<t.ArrayPattern>;
    ArrowFunctionExpression?: VisitNode<t.ArrowFunctionExpression>;
    ClassBody?: VisitNode<t.ClassBody>;
    ClassDeclaration?: VisitNode<t.ClassDeclaration>;
    ClassExpression?: VisitNode<t.ClassExpression>;
    ExportAllDeclaration?: VisitNode<t.ExportAllDeclaration>;
    ExportDefaultDeclaration?: VisitNode<t.ExportDefaultDeclaration>;
    ExportNamedDeclaration?: VisitNode<t.ExportNamedDeclaration>;
    Declaration?: VisitNode<t.Declaration>;
    ExportSpecifier?: VisitNode<t.ExportSpecifier>;
    ForOfStatement?: VisitNode<t.ForOfStatement>;
    ImportDeclaration?: VisitNode<t.ImportDeclaration>;
    ImportDefaultSpecifier?: VisitNode<t.ImportDefaultSpecifier>;
    ImportNamespaceSpecifier?: VisitNode<t.ImportNamespaceSpecifier>;
    ImportSpecifier?: VisitNode<t.ImportSpecifier>;
    MetaProperty?: VisitNode<t.MetaProperty>;
    ClassMethod?: VisitNode<t.ClassMethod>;
    ObjectPattern?: VisitNode<t.ObjectPattern>;
    SpreadElement?: VisitNode<t.SpreadElement>;
    Super?: VisitNode<t.Super>;
    TaggedTemplateExpression?: VisitNode<t.TaggedTemplateExpression>;
    TemplateLiteral?: VisitNode<t.TemplateLiteral>;
    TemplateElement?: VisitNode<t.TemplateElement>;
    YieldExpression?: VisitNode<t.YieldExpression>;
    AnyTypeAnnotation?: VisitNode<t.AnyTypeAnnotation>;
    ArrayTypeAnnotation?: VisitNode<t.ArrayTypeAnnotation>;
    BooleanTypeAnnotation?: VisitNode<t.BooleanTypeAnnotation>;
    BooleanLiteralTypeAnnotation?: VisitNode<t.BooleanLiteralTypeAnnotation>;
    NullLiteralTypeAnnotation?: VisitNode<t.NullLiteralTypeAnnotation>;
    ClassImplements?: VisitNode<t.ClassImplements>;
    ClassProperty?: VisitNode<t.ClassProperty>;
    DeclareClass?: VisitNode<t.DeclareClass>;
    DeclareFunction?: VisitNode<t.DeclareFunction>;
    DeclareInterface?: VisitNode<t.DeclareInterface>;
    DeclareModule?: VisitNode<t.DeclareModule>;
    DeclareTypeAlias?: VisitNode<t.DeclareTypeAlias>;
    DeclareVariable?: VisitNode<t.DeclareVariable>;
    ExistentialTypeParam?: VisitNode<t.ExistentialTypeParam>;
    FunctionTypeAnnotation?: VisitNode<t.FunctionTypeAnnotation>;
    FunctionTypeParam?: VisitNode<t.FunctionTypeParam>;
    GenericTypeAnnotation?: VisitNode<t.GenericTypeAnnotation>;
    InterfaceExtends?: VisitNode<t.InterfaceExtends>;
    InterfaceDeclaration?: VisitNode<t.InterfaceDeclaration>;
    IntersectionTypeAnnotation?: VisitNode<t.IntersectionTypeAnnotation>;
    MixedTypeAnnotation?: VisitNode<t.MixedTypeAnnotation>;
    NullableTypeAnnotation?: VisitNode<t.NullableTypeAnnotation>;
    NumericLiteralTypeAnnotation?: VisitNode<t.NumericLiteralTypeAnnotation>;
    NumberTypeAnnotation?: VisitNode<t.NumberTypeAnnotation>;
    StringLiteralTypeAnnotation?: VisitNode<t.StringLiteralTypeAnnotation>;
    StringTypeAnnotation?: VisitNode<t.StringTypeAnnotation>;
    ThisTypeAnnotation?: VisitNode<t.ThisTypeAnnotation>;
    TupleTypeAnnotation?: VisitNode<t.TupleTypeAnnotation>;
    TypeofTypeAnnotation?: VisitNode<t.TypeofTypeAnnotation>;
    TypeAlias?: VisitNode<t.TypeAlias>;
    TypeAnnotation?: VisitNode<t.TypeAnnotation>;
    TypeCastExpression?: VisitNode<t.TypeCastExpression>;
    TypeParameterDeclaration?: VisitNode<t.TypeParameterDeclaration>;
    TypeParameterInstantiation?: VisitNode<t.TypeParameterInstantiation>;
    ObjectTypeAnnotation?: VisitNode<t.ObjectTypeAnnotation>;
    ObjectTypeCallProperty?: VisitNode<t.ObjectTypeCallProperty>;
    ObjectTypeIndexer?: VisitNode<t.ObjectTypeIndexer>;
    ObjectTypeProperty?: VisitNode<t.ObjectTypeProperty>;
    QualifiedTypeIdentifier?: VisitNode<t.QualifiedTypeIdentifier>;
    UnionTypeAnnotation?: VisitNode<t.UnionTypeAnnotation>;
    VoidTypeAnnotation?: VisitNode<t.VoidTypeAnnotation>;
    JSXAttribute?: VisitNode<t.JSXAttribute>;
    JSXIdentifier?: VisitNode<t.JSXIdentifier>;
    JSXNamespacedName?: VisitNode<t.JSXNamespacedName>;
    JSXElement?: VisitNode<t.JSXElement>;
    JSXExpressionContainer?: VisitNode<t.JSXExpressionContainer>;
    JSXClosingElement?: VisitNode<t.JSXClosingElement>;
    JSXMemberExpression?: VisitNode<t.JSXMemberExpression>;
    JSXOpeningElement?: VisitNode<t.JSXOpeningElement>;
    JSXEmptyExpression?: VisitNode<t.JSXEmptyExpression>;
    JSXSpreadAttribute?: VisitNode<t.JSXSpreadAttribute>;
    JSXText?: VisitNode<t.JSXText>;
    Noop?: VisitNode<t.Noop>;
    ParenthesizedExpression?: VisitNode<t.ParenthesizedExpression>;
    AwaitExpression?: VisitNode<t.AwaitExpression>;
    BindExpression?: VisitNode<t.BindExpression>;
    Decorator?: VisitNode<t.Decorator>;
    DoExpression?: VisitNode<t.DoExpression>;
    ExportDefaultSpecifier?: VisitNode<t.ExportDefaultSpecifier>;
    ExportNamespaceSpecifier?: VisitNode<t.ExportNamespaceSpecifier>;
    RestProperty?: VisitNode<t.RestProperty>;
    SpreadProperty?: VisitNode<t.SpreadProperty>;
    Binary?: VisitNode<t.Binary>;
    Scopable?: VisitNode<t.Scopable>;
    BlockParent?: VisitNode<t.BlockParent>;
    Block?: VisitNode<t.Block>;
    Terminatorless?: VisitNode<t.Terminatorless>;
    CompletionStatement?: VisitNode<t.CompletionStatement>;
    Conditional?: VisitNode<t.Conditional>;
    Loop?: VisitNode<t.Loop>;
    While?: VisitNode<t.While>;
    ExpressionWrapper?: VisitNode<t.ExpressionWrapper>;
    For?: VisitNode<t.For>;
    ForXStatement?: VisitNode<t.ForXStatement>;
    Function?: VisitNode<t.Function>;
    FunctionParent?: VisitNode<t.FunctionParent>;
    Pureish?: VisitNode<t.Pureish>;
    Literal?: VisitNode<t.Literal>;
    Immutable?: VisitNode<t.Immutable>;
    UserWhitespacable?: VisitNode<t.UserWhitespacable>;
    Method?: VisitNode<t.Method>;
    ObjectMember?: VisitNode<t.ObjectMember>;
    Property?: VisitNode<t.Property>;
    UnaryLike?: VisitNode<t.UnaryLike>;
    Pattern?: VisitNode<t.Pattern>;
    Class?: VisitNode<t.Class>;
    ModuleDeclaration?: VisitNode<t.ModuleDeclaration>;
    ExportDeclaration?: VisitNode<t.ExportDeclaration>;
    ModuleSpecifier?: VisitNode<t.ModuleSpecifier>;
    Flow?: VisitNode<t.Flow>;
    FlowBaseAnnotation?: VisitNode<t.FlowBaseAnnotation>;
    FlowDeclaration?: VisitNode<t.FlowDeclaration>;
    JSX?: VisitNode<t.JSX>;
    Scope?: VisitNode<t.Scopable>;
}

export type VisitNode<T> = VisitNodeFunction<T> | VisitNodeObject<T>;

export type VisitNodeFunction<T> = (path: NodePath<T>, state: any) => void;

export interface VisitNodeObject<T> {
    enter?(path: NodePath<T>, state: any): void;
    exit?(path: NodePath<T>, state: any): void;
}

export class NodePath<T> {
    constructor(hub: Hub, parent: Node);
    parent: Node;
    hub: Hub;
    contexts: TraversalContext[];
    data: Object;
    shouldSkip: boolean;
    shouldStop: boolean;
    removed: boolean;
    state: any;
    opts: Object;
    skipKeys: Object;
    parentPath: NodePath<Node>;
    context: TraversalContext;
    container: Object | Object[];
    listKey: string;
    inList: boolean;
    parentKey: string;
    key: string;
    node: T;
    scope: Scope;
    type: string;
    typeAnnotation: Object;

    getScope(scope: Scope): Scope;

    setData(key: string, val: any): any;

    getData(key: string, def?: any): any;

    buildCodeFrameError<TError extends Error>(msg: string, Error?: new (msg: string) => TError): TError;

    traverse(visitor: Visitor, state?: any): void;

    set(key: string, node: Node): void;

    getPathLocation(): string;

    debug(buildMessage: Function): void;

    // ------------------------- ancestry -------------------------
    /**
     * Call the provided `callback` with the `NodePath`s of all the parents.
     * When the `callback` returns a truthy value, we return that node path.
     */
    findParent(callback: (path: NodePath<Node>) => boolean): NodePath<Node>;

    find(callback: (path: NodePath<Node>) => boolean): NodePath<Node>;

    /** Get the parent function of the current path. */
    getFunctionParent(): NodePath<Node>;

    /** Walk up the tree until we hit a parent node path in a list. */
    getStatementParent(): NodePath<Node>;

    /**
     * Get the deepest common ancestor and then from it, get the earliest relationship path
     * to that ancestor.
     *
     * Earliest is defined as being "before" all the other nodes in terms of list container
     * position and visiting key.
     */
    getEarliestCommonAncestorFrom(paths: NodePath<Node>[]): NodePath<Node>;

    /** Get the earliest path in the tree where the provided `paths` intersect. */
    getDeepestCommonAncestorFrom(paths: NodePath<Node>[], filter?: Function): NodePath<Node>;

    /**
     * Build an array of node paths containing the entire ancestry of the current node path.
     *
     * NOTE: The current node path is included in this.
     */
    getAncestry(): NodePath<Node>[];

    inType(...candidateTypes: string[]): boolean;

    // ------------------------- inference -------------------------
    /** Infer the type of the current `NodePath`. */
    getTypeAnnotation(): t.FlowTypeAnnotation;

    isBaseType(baseName: string, soft?: boolean): boolean;

    couldBeBaseType(name: string): boolean;

    baseTypeStrictlyMatches(right: NodePath<Node>): boolean;

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
    replaceWith(replacement: Node | NodePath<Node>): void;

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
    getStatementParent(): NodePath<Node>;

    getOpposite(): NodePath<Node>;

    getCompletionRecords(): NodePath<Node>[];

    getSibling(key: string): NodePath<Node>;

    get(key: string, context?: boolean | TraversalContext): NodePath<Node>;

    getBindingIdentifiers(duplicates?: boolean): Node[];

    getOuterBindingIdentifiers(duplicates?: boolean): Node[];

    // ------------------------- comments -------------------------
    /** Share comments amongst siblings. */
    shareCommentsWithSiblings(): void;

    addComment(type: string, content: string, line?: boolean): void;

    /** Give node `comments` of the specified `type`. */
    addComments(type: string, comments: any[]): void;

    // ------------------------- isXXX -------------------------
    isArrayExpression(opts?: Object): boolean;
    isAssignmentExpression(opts?: Object): boolean;
    isBinaryExpression(opts?: Object): boolean;
    isDirective(opts?: Object): boolean;
    isDirectiveLiteral(opts?: Object): boolean;
    isBlockStatement(opts?: Object): boolean;
    isBreakStatement(opts?: Object): boolean;
    isCallExpression(opts?: Object): boolean;
    isCatchClause(opts?: Object): boolean;
    isConditionalExpression(opts?: Object): boolean;
    isContinueStatement(opts?: Object): boolean;
    isDebuggerStatement(opts?: Object): boolean;
    isDoWhileStatement(opts?: Object): boolean;
    isEmptyStatement(opts?: Object): boolean;
    isExpressionStatement(opts?: Object): boolean;
    isFile(opts?: Object): boolean;
    isForInStatement(opts?: Object): boolean;
    isForStatement(opts?: Object): boolean;
    isFunctionDeclaration(opts?: Object): boolean;
    isFunctionExpression(opts?: Object): boolean;
    isIdentifier(opts?: Object): boolean;
    isIfStatement(opts?: Object): boolean;
    isLabeledStatement(opts?: Object): boolean;
    isStringLiteral(opts?: Object): boolean;
    isNumericLiteral(opts?: Object): boolean;
    isNullLiteral(opts?: Object): boolean;
    isBooleanLiteral(opts?: Object): boolean;
    isRegExpLiteral(opts?: Object): boolean;
    isLogicalExpression(opts?: Object): boolean;
    isMemberExpression(opts?: Object): boolean;
    isNewExpression(opts?: Object): boolean;
    isProgram(opts?: Object): boolean;
    isObjectExpression(opts?: Object): boolean;
    isObjectMethod(opts?: Object): boolean;
    isObjectProperty(opts?: Object): boolean;
    isRestElement(opts?: Object): boolean;
    isReturnStatement(opts?: Object): boolean;
    isSequenceExpression(opts?: Object): boolean;
    isSwitchCase(opts?: Object): boolean;
    isSwitchStatement(opts?: Object): boolean;
    isThisExpression(opts?: Object): boolean;
    isThrowStatement(opts?: Object): boolean;
    isTryStatement(opts?: Object): boolean;
    isUnaryExpression(opts?: Object): boolean;
    isUpdateExpression(opts?: Object): boolean;
    isVariableDeclaration(opts?: Object): boolean;
    isVariableDeclarator(opts?: Object): boolean;
    isWhileStatement(opts?: Object): boolean;
    isWithStatement(opts?: Object): boolean;
    isAssignmentPattern(opts?: Object): boolean;
    isArrayPattern(opts?: Object): boolean;
    isArrowFunctionExpression(opts?: Object): boolean;
    isClassBody(opts?: Object): boolean;
    isClassDeclaration(opts?: Object): boolean;
    isClassExpression(opts?: Object): boolean;
    isExportAllDeclaration(opts?: Object): boolean;
    isExportDefaultDeclaration(opts?: Object): boolean;
    isExportNamedDeclaration(opts?: Object): boolean;
    isExportSpecifier(opts?: Object): boolean;
    isForOfStatement(opts?: Object): boolean;
    isImportDeclaration(opts?: Object): boolean;
    isImportDefaultSpecifier(opts?: Object): boolean;
    isImportNamespaceSpecifier(opts?: Object): boolean;
    isImportSpecifier(opts?: Object): boolean;
    isMetaProperty(opts?: Object): boolean;
    isClassMethod(opts?: Object): boolean;
    isObjectPattern(opts?: Object): boolean;
    isSpreadElement(opts?: Object): boolean;
    isSuper(opts?: Object): boolean;
    isTaggedTemplateExpression(opts?: Object): boolean;
    isTemplateElement(opts?: Object): boolean;
    isTemplateLiteral(opts?: Object): boolean;
    isYieldExpression(opts?: Object): boolean;
    isAnyTypeAnnotation(opts?: Object): boolean;
    isArrayTypeAnnotation(opts?: Object): boolean;
    isBooleanTypeAnnotation(opts?: Object): boolean;
    isBooleanLiteralTypeAnnotation(opts?: Object): boolean;
    isNullLiteralTypeAnnotation(opts?: Object): boolean;
    isClassImplements(opts?: Object): boolean;
    isClassProperty(opts?: Object): boolean;
    isDeclareClass(opts?: Object): boolean;
    isDeclareFunction(opts?: Object): boolean;
    isDeclareInterface(opts?: Object): boolean;
    isDeclareModule(opts?: Object): boolean;
    isDeclareTypeAlias(opts?: Object): boolean;
    isDeclareVariable(opts?: Object): boolean;
    isExistentialTypeParam(opts?: Object): boolean;
    isFunctionTypeAnnotation(opts?: Object): boolean;
    isFunctionTypeParam(opts?: Object): boolean;
    isGenericTypeAnnotation(opts?: Object): boolean;
    isInterfaceExtends(opts?: Object): boolean;
    isInterfaceDeclaration(opts?: Object): boolean;
    isIntersectionTypeAnnotation(opts?: Object): boolean;
    isMixedTypeAnnotation(opts?: Object): boolean;
    isNullableTypeAnnotation(opts?: Object): boolean;
    isNumericLiteralTypeAnnotation(opts?: Object): boolean;
    isNumberTypeAnnotation(opts?: Object): boolean;
    isStringLiteralTypeAnnotation(opts?: Object): boolean;
    isStringTypeAnnotation(opts?: Object): boolean;
    isThisTypeAnnotation(opts?: Object): boolean;
    isTupleTypeAnnotation(opts?: Object): boolean;
    isTypeofTypeAnnotation(opts?: Object): boolean;
    isTypeAlias(opts?: Object): boolean;
    isTypeAnnotation(opts?: Object): boolean;
    isTypeCastExpression(opts?: Object): boolean;
    isTypeParameterDeclaration(opts?: Object): boolean;
    isTypeParameterInstantiation(opts?: Object): boolean;
    isObjectTypeAnnotation(opts?: Object): boolean;
    isObjectTypeCallProperty(opts?: Object): boolean;
    isObjectTypeIndexer(opts?: Object): boolean;
    isObjectTypeProperty(opts?: Object): boolean;
    isQualifiedTypeIdentifier(opts?: Object): boolean;
    isUnionTypeAnnotation(opts?: Object): boolean;
    isVoidTypeAnnotation(opts?: Object): boolean;
    isJSXAttribute(opts?: Object): boolean;
    isJSXClosingElement(opts?: Object): boolean;
    isJSXElement(opts?: Object): boolean;
    isJSXEmptyExpression(opts?: Object): boolean;
    isJSXExpressionContainer(opts?: Object): boolean;
    isJSXIdentifier(opts?: Object): boolean;
    isJSXMemberExpression(opts?: Object): boolean;
    isJSXNamespacedName(opts?: Object): boolean;
    isJSXOpeningElement(opts?: Object): boolean;
    isJSXSpreadAttribute(opts?: Object): boolean;
    isJSXText(opts?: Object): boolean;
    isNoop(opts?: Object): boolean;
    isParenthesizedExpression(opts?: Object): boolean;
    isAwaitExpression(opts?: Object): boolean;
    isBindExpression(opts?: Object): boolean;
    isDecorator(opts?: Object): boolean;
    isDoExpression(opts?: Object): boolean;
    isExportDefaultSpecifier(opts?: Object): boolean;
    isExportNamespaceSpecifier(opts?: Object): boolean;
    isRestProperty(opts?: Object): boolean;
    isSpreadProperty(opts?: Object): boolean;
    isExpression(opts?: Object): boolean;
    isBinary(opts?: Object): boolean;
    isScopable(opts?: Object): boolean;
    isBlockParent(opts?: Object): boolean;
    isBlock(opts?: Object): boolean;
    isStatement(opts?: Object): boolean;
    isTerminatorless(opts?: Object): boolean;
    isCompletionStatement(opts?: Object): boolean;
    isConditional(opts?: Object): boolean;
    isLoop(opts?: Object): boolean;
    isWhile(opts?: Object): boolean;
    isExpressionWrapper(opts?: Object): boolean;
    isFor(opts?: Object): boolean;
    isForXStatement(opts?: Object): boolean;
    isFunction(opts?: Object): boolean;
    isFunctionParent(opts?: Object): boolean;
    isPureish(opts?: Object): boolean;
    isDeclaration(opts?: Object): boolean;
    isLVal(opts?: Object): boolean;
    isLiteral(opts?: Object): boolean;
    isImmutable(opts?: Object): boolean;
    isUserWhitespacable(opts?: Object): boolean;
    isMethod(opts?: Object): boolean;
    isObjectMember(opts?: Object): boolean;
    isProperty(opts?: Object): boolean;
    isUnaryLike(opts?: Object): boolean;
    isPattern(opts?: Object): boolean;
    isClass(opts?: Object): boolean;
    isModuleDeclaration(opts?: Object): boolean;
    isExportDeclaration(opts?: Object): boolean;
    isModuleSpecifier(opts?: Object): boolean;
    isFlow(opts?: Object): boolean;
    isFlowBaseAnnotation(opts?: Object): boolean;
    isFlowDeclaration(opts?: Object): boolean;
    isJSX(opts?: Object): boolean;
    isNumberLiteral(opts?: Object): boolean;
    isRegexLiteral(opts?: Object): boolean;
    isReferencedIdentifier(opts?: Object): boolean;
    isReferencedMemberExpression(opts?: Object): boolean;
    isBindingIdentifier(opts?: Object): boolean;
    isScope(opts?: Object): boolean;
    isReferenced(opts?: Object): boolean;
    isBlockScoped(opts?: Object): boolean;
    isVar(opts?: Object): boolean;
    isUser(opts?: Object): boolean;
    isGenerated(opts?: Object): boolean;
    isPure(opts?: Object): boolean;

    // ------------------------- assertXXX -------------------------
    assertArrayExpression(opts?: Object): void;
    assertAssignmentExpression(opts?: Object): void;
    assertBinaryExpression(opts?: Object): void;
    assertDirective(opts?: Object): void;
    assertDirectiveLiteral(opts?: Object): void;
    assertBlockStatement(opts?: Object): void;
    assertBreakStatement(opts?: Object): void;
    assertCallExpression(opts?: Object): void;
    assertCatchClause(opts?: Object): void;
    assertConditionalExpression(opts?: Object): void;
    assertContinueStatement(opts?: Object): void;
    assertDebuggerStatement(opts?: Object): void;
    assertDoWhileStatement(opts?: Object): void;
    assertEmptyStatement(opts?: Object): void;
    assertExpressionStatement(opts?: Object): void;
    assertFile(opts?: Object): void;
    assertForInStatement(opts?: Object): void;
    assertForStatement(opts?: Object): void;
    assertFunctionDeclaration(opts?: Object): void;
    assertFunctionExpression(opts?: Object): void;
    assertIdentifier(opts?: Object): void;
    assertIfStatement(opts?: Object): void;
    assertLabeledStatement(opts?: Object): void;
    assertStringLiteral(opts?: Object): void;
    assertNumericLiteral(opts?: Object): void;
    assertNullLiteral(opts?: Object): void;
    assertBooleanLiteral(opts?: Object): void;
    assertRegExpLiteral(opts?: Object): void;
    assertLogicalExpression(opts?: Object): void;
    assertMemberExpression(opts?: Object): void;
    assertNewExpression(opts?: Object): void;
    assertProgram(opts?: Object): void;
    assertObjectExpression(opts?: Object): void;
    assertObjectMethod(opts?: Object): void;
    assertObjectProperty(opts?: Object): void;
    assertRestElement(opts?: Object): void;
    assertReturnStatement(opts?: Object): void;
    assertSequenceExpression(opts?: Object): void;
    assertSwitchCase(opts?: Object): void;
    assertSwitchStatement(opts?: Object): void;
    assertThisExpression(opts?: Object): void;
    assertThrowStatement(opts?: Object): void;
    assertTryStatement(opts?: Object): void;
    assertUnaryExpression(opts?: Object): void;
    assertUpdateExpression(opts?: Object): void;
    assertVariableDeclaration(opts?: Object): void;
    assertVariableDeclarator(opts?: Object): void;
    assertWhileStatement(opts?: Object): void;
    assertWithStatement(opts?: Object): void;
    assertAssignmentPattern(opts?: Object): void;
    assertArrayPattern(opts?: Object): void;
    assertArrowFunctionExpression(opts?: Object): void;
    assertClassBody(opts?: Object): void;
    assertClassDeclaration(opts?: Object): void;
    assertClassExpression(opts?: Object): void;
    assertExportAllDeclaration(opts?: Object): void;
    assertExportDefaultDeclaration(opts?: Object): void;
    assertExportNamedDeclaration(opts?: Object): void;
    assertExportSpecifier(opts?: Object): void;
    assertForOfStatement(opts?: Object): void;
    assertImportDeclaration(opts?: Object): void;
    assertImportDefaultSpecifier(opts?: Object): void;
    assertImportNamespaceSpecifier(opts?: Object): void;
    assertImportSpecifier(opts?: Object): void;
    assertMetaProperty(opts?: Object): void;
    assertClassMethod(opts?: Object): void;
    assertObjectPattern(opts?: Object): void;
    assertSpreadElement(opts?: Object): void;
    assertSuper(opts?: Object): void;
    assertTaggedTemplateExpression(opts?: Object): void;
    assertTemplateElement(opts?: Object): void;
    assertTemplateLiteral(opts?: Object): void;
    assertYieldExpression(opts?: Object): void;
    assertAnyTypeAnnotation(opts?: Object): void;
    assertArrayTypeAnnotation(opts?: Object): void;
    assertBooleanTypeAnnotation(opts?: Object): void;
    assertBooleanLiteralTypeAnnotation(opts?: Object): void;
    assertNullLiteralTypeAnnotation(opts?: Object): void;
    assertClassImplements(opts?: Object): void;
    assertClassProperty(opts?: Object): void;
    assertDeclareClass(opts?: Object): void;
    assertDeclareFunction(opts?: Object): void;
    assertDeclareInterface(opts?: Object): void;
    assertDeclareModule(opts?: Object): void;
    assertDeclareTypeAlias(opts?: Object): void;
    assertDeclareVariable(opts?: Object): void;
    assertExistentialTypeParam(opts?: Object): void;
    assertFunctionTypeAnnotation(opts?: Object): void;
    assertFunctionTypeParam(opts?: Object): void;
    assertGenericTypeAnnotation(opts?: Object): void;
    assertInterfaceExtends(opts?: Object): void;
    assertInterfaceDeclaration(opts?: Object): void;
    assertIntersectionTypeAnnotation(opts?: Object): void;
    assertMixedTypeAnnotation(opts?: Object): void;
    assertNullableTypeAnnotation(opts?: Object): void;
    assertNumericLiteralTypeAnnotation(opts?: Object): void;
    assertNumberTypeAnnotation(opts?: Object): void;
    assertStringLiteralTypeAnnotation(opts?: Object): void;
    assertStringTypeAnnotation(opts?: Object): void;
    assertThisTypeAnnotation(opts?: Object): void;
    assertTupleTypeAnnotation(opts?: Object): void;
    assertTypeofTypeAnnotation(opts?: Object): void;
    assertTypeAlias(opts?: Object): void;
    assertTypeAnnotation(opts?: Object): void;
    assertTypeCastExpression(opts?: Object): void;
    assertTypeParameterDeclaration(opts?: Object): void;
    assertTypeParameterInstantiation(opts?: Object): void;
    assertObjectTypeAnnotation(opts?: Object): void;
    assertObjectTypeCallProperty(opts?: Object): void;
    assertObjectTypeIndexer(opts?: Object): void;
    assertObjectTypeProperty(opts?: Object): void;
    assertQualifiedTypeIdentifier(opts?: Object): void;
    assertUnionTypeAnnotation(opts?: Object): void;
    assertVoidTypeAnnotation(opts?: Object): void;
    assertJSXAttribute(opts?: Object): void;
    assertJSXClosingElement(opts?: Object): void;
    assertJSXElement(opts?: Object): void;
    assertJSXEmptyExpression(opts?: Object): void;
    assertJSXExpressionContainer(opts?: Object): void;
    assertJSXIdentifier(opts?: Object): void;
    assertJSXMemberExpression(opts?: Object): void;
    assertJSXNamespacedName(opts?: Object): void;
    assertJSXOpeningElement(opts?: Object): void;
    assertJSXSpreadAttribute(opts?: Object): void;
    assertJSXText(opts?: Object): void;
    assertNoop(opts?: Object): void;
    assertParenthesizedExpression(opts?: Object): void;
    assertAwaitExpression(opts?: Object): void;
    assertBindExpression(opts?: Object): void;
    assertDecorator(opts?: Object): void;
    assertDoExpression(opts?: Object): void;
    assertExportDefaultSpecifier(opts?: Object): void;
    assertExportNamespaceSpecifier(opts?: Object): void;
    assertRestProperty(opts?: Object): void;
    assertSpreadProperty(opts?: Object): void;
    assertExpression(opts?: Object): void;
    assertBinary(opts?: Object): void;
    assertScopable(opts?: Object): void;
    assertBlockParent(opts?: Object): void;
    assertBlock(opts?: Object): void;
    assertStatement(opts?: Object): void;
    assertTerminatorless(opts?: Object): void;
    assertCompletionStatement(opts?: Object): void;
    assertConditional(opts?: Object): void;
    assertLoop(opts?: Object): void;
    assertWhile(opts?: Object): void;
    assertExpressionWrapper(opts?: Object): void;
    assertFor(opts?: Object): void;
    assertForXStatement(opts?: Object): void;
    assertFunction(opts?: Object): void;
    assertFunctionParent(opts?: Object): void;
    assertPureish(opts?: Object): void;
    assertDeclaration(opts?: Object): void;
    assertLVal(opts?: Object): void;
    assertLiteral(opts?: Object): void;
    assertImmutable(opts?: Object): void;
    assertUserWhitespacable(opts?: Object): void;
    assertMethod(opts?: Object): void;
    assertObjectMember(opts?: Object): void;
    assertProperty(opts?: Object): void;
    assertUnaryLike(opts?: Object): void;
    assertPattern(opts?: Object): void;
    assertClass(opts?: Object): void;
    assertModuleDeclaration(opts?: Object): void;
    assertExportDeclaration(opts?: Object): void;
    assertModuleSpecifier(opts?: Object): void;
    assertFlow(opts?: Object): void;
    assertFlowBaseAnnotation(opts?: Object): void;
    assertFlowDeclaration(opts?: Object): void;
    assertJSX(opts?: Object): void;
    assertNumberLiteral(opts?: Object): void;
    assertRegexLiteral(opts?: Object): void;
}

export class Hub {
    constructor(file: any, options: any);
    file: any;
    options: any;
}

interface TraversalContext {
    parentPath: NodePath<Node>;
    scope: Scope;
    state: any;
    opts: any;
}
