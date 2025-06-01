import * as eslint from "eslint";
import { VisitorKeys } from "eslint-visitor-keys";
import * as ESTree from "estree";

declare namespace EslintScope {
    /**
     * Options for scope analysis.
     */
    interface AnalyzeOptions {
        /**
         * Whether to ignore eval() calls, which normally create scopes.
         * @default false
         */
        ignoreEval?: boolean;

        /**
         * Whether to create a top-level function scope for CommonJS evaluation.
         * @default false
         */
        nodejsScope?: boolean;

        /**
         * Whether to evaluate code in strict mode even outside modules or without "use strict".
         * @default false
         */
        impliedStrict?: boolean;

        /**
         * The ECMAScript version to use for evaluation (e.g., 5, 2015, 2022).
         * @default 5
         */
        ecmaVersion?: number;

        /**
         * The type of JavaScript file to evaluate.
         * @default "script"
         */
        sourceType?: "script" | "module" | "commonjs";

        /**
         * Visitor key information for performance enhancement.
         * @default null
         */
        childVisitorKeys?: VisitorKeys | null;

        /**
         * Strategy to use when childVisitorKeys is not specified.
         * @default "iteration"
         */
        fallback?: "iteration" | ((node: ESTree.Node) => string[]);

        /**
         * Whether to enable optimistic scope analysis.
         * @default false
         */
        optimistic?: boolean;

        /**
         * Enables the tracking of JSX components as variable references.
         * @default false
         */
        jsx?: boolean;
    }
}

/**
 * Manages the scope hierarchy of an AST.
 */
declare class ScopeManager implements eslint.Scope.ScopeManager {
    /**
     * Creates a new ScopeManager instance.
     * @param options Options for scope analysis.
     */
    constructor(options: EslintScope.AnalyzeOptions);

    /**
     * The global scope.
     */
    globalScope: GlobalScope;

    /**
     * All scopes in the analyzed program.
     */
    scopes: Scope[];

    /**
     * Acquires the scope for a given node.
     * @param node The AST node to get the scope for.
     * @param inner Whether to get the innermost scope.
     * @returns The scope or null if not found.
     */
    acquire(node: ESTree.Node, inner?: boolean): Scope | null;

    /**
     * acquire all scopes from node.
     * @function ScopeManager#acquireAll
     * @param node node for the acquired scope.
     * @returns Scope array
     */
    acquireAll(node: ESTree.Node): Scope[] | null;

    /**
     * Releases a scope, moving to its parent.
     * @param node The AST node to release the scope for.
     * @param inner Whether to release the innermost scope.
     * @returns The parent scope or null if not found.
     */
    release(node: ESTree.Node, inner?: boolean): Scope | null;

    /**
     * Gets all scopes for a given node, including parents.
     * @param node The AST node to get scopes for.
     * @param inner Whether to start from the innermost scope.
     * @returns Array of scopes or empty array if none found.
     */
    getDeclaredVariables(node: ESTree.Node): Variable[];

    isGlobalReturn(): boolean;

    isModule(): boolean;

    isImpliedStrict(): boolean;

    isStrictModeSupported(): boolean;
}

/**
 * Base class for all scopes.
 */
declare class Scope<TVariable extends Variable = Variable, TReference extends Reference = Reference>
    implements eslint.Scope.Scope
{
    /**
     * Creates a new Scope instance.
     * @param scopeManager The scope manager this scope belongs to.
     * @param type The type of the scope.
     * @param upper The parent scope, or null for the global scope.
     * @param block The AST node that created this scope.
     * @param isMethodDefinition Whether this scope is for a method definition.
     */
    constructor(
        scopeManager: ScopeManager,
        type: string,
        upper: Scope | null,
        block: ESTree.Node,
        isMethodDefinition: boolean,
    );

    /**
     * The type of the scope (e.g., 'global', 'function').
     */
    type: eslint.Scope.Scope["type"];

    /**
     * Whether the scope is in strict mode.
     */
    isStrict: boolean;

    /**
     * The parent scope, or null for the global scope.
     */
    upper: Scope | null;

    /**
     * The scope where variables are declared (same as this for most scopes).
     */
    variableScope: this;

    /**
     * Variables defined in this scope.
     */
    variables: TVariable[];

    /**
     * References to variables in this scope.
     */
    references: TReference[];

    /**
     * Child scopes.
     */
    childScopes: Scope[];

    /**
     * The AST node that created this scope.
     */
    block: ESTree.Node;

    /**
     * Whether this is a function expression scope.
     */
    functionExpressionScope: boolean;

    /**
     * Implicit references (e.g., 'arguments' in functions).
     */
    implicit: { left: TReference[]; set: Map<string, Variable> };

    /**
     * Map of variable names to variables.
     */
    set: eslint.Scope.Scope["set"];

    /**
     * The tainted variables of this scope.
     */
    taints: Map<string, Variable>;

    /**
     * References that pass through this scope to outer scopes.
     */
    through: eslint.Scope.Scope["through"];

    /**
     * Dynamic flag for certain scope types.
     */
    dynamic: boolean;

    /**
     * Direct call to eval() flag.
     */
    directCallToEvalScope: boolean;

    /**
     * This scope flag.
     */
    thisFound: boolean;

    /**
     * Resolves a reference in this scope.
     * @param ref The reference to resolve.
     * @param noChain Whether to avoid chaining to parent scopes.
     */
    resolve(ref: Reference, noChain?: boolean): void;

    /**
     * Whether the reference is static.
     */
    isStatic(): boolean;

    /**
     * returns this scope has materialized arguments.
     */
    isArgumentsMaterialized(): boolean;

    /**
     * returns this scope has materialized `this` reference
     */
    isThisMaterialized(): boolean;

    isUsedName(name: string): boolean;
}

/**
 * Global scope.
 */
declare class GlobalScope extends Scope {
    /**
     * Creates a new GlobalScope instance.
     * @param scopeManager The scope manager this scope belongs to.
     * @param block The AST node that created this scope.
     */
    constructor(scopeManager: ScopeManager, block: ESTree.Node);

    type: "global";
}

/**
 * Module scope.
 */
declare class ModuleScope extends Scope {
    /**
     * Creates a new ModuleScope instance.
     * @param scopeManager The scope manager this scope belongs to.
     * @param upper The parent scope.
     * @param block The AST node that created this scope.
     */
    constructor(scopeManager: ScopeManager, upper: Scope, block: ESTree.Node);

    type: "module";
}

/**
 * Function scope.
 */
declare class FunctionScope extends Scope {
    /**
     * Creates a new FunctionScope instance.
     * @param scopeManager The scope manager this scope belongs to.
     * @param upper The parent scope.
     * @param block The AST node that created this scope.
     * @param isMethodDefinition Whether this scope is for a method definition.
     */
    constructor(
        scopeManager: ScopeManager,
        upper: Scope,
        block: ESTree.Node,
        isMethodDefinition: boolean,
    );

    type: "function";

    isArgumentsMaterialized(): boolean;

    isThisMaterialized(): boolean;
}

/**
 * Block scope.
 */
declare class BlockScope extends Scope {
    /**
     * Creates a new BlockScope instance.
     * @param scopeManager The scope manager this scope belongs to.
     * @param upper The parent scope.
     * @param block The AST node that created this scope.
     */
    constructor(scopeManager: ScopeManager, upper: Scope, block: ESTree.Node);

    type: "block";
}

/**
 * Represents a variable in a scope.
 */
declare class Variable<TReference extends Reference = Reference> implements eslint.Scope.Variable {
    /**
     * Creates a new Variable instance.
     * @param name The name of the variable.
     * @param scope The scope where the variable is defined.
     */
    constructor(name: string, scope: Scope);

    /**
     * The name of the variable.
     */
    name: string;

    /**
     * The scope where the variable is defined.
     */
    scope: Scope;

    /**
     * Identifiers that declare this variable.
     */
    identifiers: ESTree.Identifier[];

    /**
     * References to this variable.
     */
    references: TReference[];

    /**
     * Definitions of this variable.
     */
    defs: eslint.Scope.Definition[];

    /**
     * Whether the variable is tainted (e.g., potentially modified externally).
     */
    tainted: boolean;

    /**
     * Stack flag for certain variable types.
     */
    stack: boolean;
}

/**
 * Represents a reference to a variable.
 */
declare class Reference implements eslint.Scope.Reference {
    /**
     * Creates a new Reference instance.
     * @param identifier The identifier node of the reference.
     * @param scope The scope where the reference occurs.
     * @param flag The reference flag (read, write, or read-write).
     * @param writeExpr The expression being written, if applicable.
     * @param maybeImplicitGlobal Whether this is a potential implicit global.
     * @param partial Whether this is a partial reference.
     * @param init Whether this is an initialization reference.
     */
    constructor(
        identifier: ESTree.Identifier,
        scope: Scope,
        flag: number,
        writeExpr: ESTree.Expression | null,
        maybeImplicitGlobal: boolean,
        partial: boolean,
        init: boolean,
    );

    /**
     * The identifier node of the reference.
     */
    identifier: ESTree.Identifier;

    /**
     * The variable being referenced, or null if unresolved.
     */
    resolved: Variable | null;

    /**
     * Whether the reference is static.
     */
    isStatic(): boolean;

    /**
     * Whether this is a write operation.
     */
    isWrite: eslint.Scope.Reference["isWrite"];

    /**
     * Whether this is a read operation.
     */
    isRead: eslint.Scope.Reference["isRead"];

    /**
     * The scope where the reference occurs.
     */
    from: Scope;

    /**
     * Whether the reference comes from a dynamic scope (such as 'eval',
     * 'with', etc.), and may be trapped by dynamic scopes.
     */
    tainted: boolean;

    /**
     * The expression being written, if applicable.
     */
    writeExpr: ESTree.Expression | null;

    /**
     * Whether this is a partial reference.
     */
    partial: boolean;

    /**
     * Whether this is an initialization reference.
     */
    init: boolean;

    /**
     * Whether this reference is only read.
     * @returns True if the reference is read-only.
     */
    isReadOnly(): boolean;

    /**
     * Whether this reference is only written.
     * @returns True if the reference is write-only.
     */
    isWriteOnly(): boolean;

    /**
     * Whether this reference is read-write.
     * @returns True if the reference is read-write.
     */
    isReadWrite(): boolean;
}

/**
 * Represents a variable definition.
 * @todo extends eslint.Scope.Definition for this class
 */
declare class Definition {
    /**
     * Creates a new Definition instance.
     * @param type The type of definition (e.g., 'Variable', 'Parameter').
     * @param name The identifier node of the definition.
     * @param node The AST node where the definition occurs.
     * @param parent The parent node, if applicable.
     * @param index The index of the definition in a pattern, if applicable.
     * @param kind The kind of variable (e.g., 'var', 'let', 'const'), if applicable.
     */
    constructor(
        type: eslint.Scope.Definition["type"],
        name: eslint.Scope.Definition["name"],
        node: eslint.Scope.Definition["node"],
        parent: eslint.Scope.Definition["parent"],
        index: number | null,
        kind: string | null,
    );

    /**
     * The type of definition (e.g., 'Variable', 'Parameter').
     */
    type: eslint.Scope.Definition["type"];

    /**
     * The identifier node of the definition.
     */
    name: eslint.Scope.Definition["name"];

    /**
     * The AST node where the definition occurs.
     */
    node: eslint.Scope.Definition["node"];

    /**
     * The parent node, if applicable.
     */
    parent: eslint.Scope.Definition["parent"];

    /**
     * The index of the definition in a pattern, if applicable.
     */
    index: number | null;

    /**
     * The kind of variable (e.g., 'var', 'let', 'const'), if applicable.
     */
    kind: string | null;
}

/**
 * Analyzes the scope of an AST.
 * @param ast The ESTree-compliant AST to analyze.
 * @param options Options for scope analysis.
 * @returns The scope manager for the analyzed AST.
 */
declare function analyze(ast: ESTree.Program, options?: EslintScope.AnalyzeOptions): ScopeManager;

declare const EslintScope: {
    analyze: typeof analyze;
    BlockScope: typeof BlockScope;
    Definition: typeof Definition;
    FunctionScope: typeof FunctionScope;
    GlobalScope: typeof GlobalScope;
    ModuleScope: typeof ModuleScope;
    Reference: typeof Reference;
    Scope: typeof Scope;
    ScopeManager: typeof ScopeManager;
    Variable: typeof Variable;
};

export = EslintScope;
