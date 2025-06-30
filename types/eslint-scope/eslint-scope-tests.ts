import * as eslintScope from "eslint-scope";
import type { AnalyzeOptions } from "eslint-scope";
import * as espree from "espree";
import * as estree from "estree";

const code = `
function example() {
  let x = 1;
  console.log(x);
}
`;

const ast = espree.parse(code, { ecmaVersion: 2022, sourceType: "module" }) as estree.Program;

// $ExpectType ScopeManager
const scopeManager = eslintScope.analyze(
    ast,
    {
        ecmaVersion: 2022,
        sourceType: "module",
        ignoreEval: true,
        nodejsScope: false,
        impliedStrict: false,
        childVisitorKeys: null,
        fallback: "iteration",
    } satisfies AnalyzeOptions,
);

// $ExpectType GlobalScope
scopeManager.globalScope;
// $ExpectType  Scope<Variable<Reference>, Reference>[]
scopeManager.scopes;

// $ExpectType Scope<Variable<Reference>, Reference> | null
const scope = scopeManager.acquire(ast);

// $ExpectType Scope<Variable<Reference>, Reference> | null
scopeManager.release(ast);

if (scope) {
    // $ExpectType "function" | "module" | "block" | "catch" | "class" | "for" | "function-expression-name" | "global" | "switch" | "with" | "TDZ"
    scope.type;
    // $ExpectType boolean
    scope.isStrict;
    // $ExpectType Scope<Variable<Reference>, Reference> | null
    scope.upper;
    // $ExpectType Scope<Variable<Reference>, Reference>
    scope.variableScope;
    // $ExpectType Variable<Reference>[]
    scope.variables;
    // $ExpectType Reference[]
    scope.references;
    // $ExpectType  Scope<Variable<Reference>, Reference>[]
    scope.childScopes;
    // $ExpectType Node
    scope.block;
    // $ExpectType boolean
    scope.functionExpressionScope;
    // $ExpectType Reference[]
    scope.implicit.left;
    // $ExpectType  Map<string, Variable>
    scope.set;
    // $ExpectType Reference[]
    scope.through;
}

const variable = scope?.variables[0];
if (variable) {
    // $ExpectType string
    variable.name;
    // $ExpectType Scope<Variable<Reference>, Reference>
    variable.scope;
    // $ExpectType Identifier[]
    variable.identifiers;
    // $ExpectType Reference[]
    variable.references;
    // $ExpectType Definition[]
    variable.defs;
}

const reference = scope?.references[0];
if (reference) {
    // $ExpectType Identifier
    reference.identifier;
    // $ExpectType Variable<Reference> | null
    reference.resolved;
    // $ExpectType () => boolean
    reference.isWrite;
    // $ExpectType () => boolean
    reference.isRead;
    // $ExpectType Scope<Variable<Reference>, Reference>
    reference.from;
}

const definition = variable?.defs[0];
if (definition) {
    // $ExpectType "CatchClause" | "TDZ" | "ClassName" | "FunctionName" | "ImplicitGlobalVariable" | "ImportBinding" | "Parameter" | "Variable"
    definition.type;
    // $ExpectType Identifier
    definition.name;
    // $ExpectType ImportDeclaration | VariableDeclaration | null
    definition.parent;
}

// $ExpectType GlobalScope
const globalScope = scopeManager.globalScope;
// $ExpectType 'global'
globalScope.type;

// $ExpectType ScopeManager
eslintScope.analyze(ast);

const blockScope = new eslintScope.BlockScope(scopeManager, scopeManager.globalScope, ast);
// $ExpectType "block"
blockScope.type;

const identifier: estree.Identifier = {
    type: "Identifier",
    name: "foo",
};
const definition2 = new eslintScope.Definition(
    "Variable",
    identifier,
    ast,
    null,
    null,
    "let",
);
// $ExpectType "CatchClause" | "TDZ" | "ClassName" | "FunctionName" | "ImplicitGlobalVariable" | "ImportBinding" | "Parameter" | "Variable"
definition2.type;
// $ExpectType Identifier
definition2.name;

const functionScope = new eslintScope.FunctionScope(scopeManager, scopeManager.globalScope, ast, false);
// $ExpectType "function"
functionScope.type;
// $ExpectType boolean
functionScope.isArgumentsMaterialized();
// $ExpectType boolean
functionScope.isThisMaterialized();

const globalScopeInstance = new eslintScope.GlobalScope(scopeManager, ast);
// $ExpectType "global"
globalScopeInstance.type;

const moduleScope = new eslintScope.ModuleScope(scopeManager, scopeManager.globalScope, ast);
// $ExpectType "module"
moduleScope.type;

const ref = new eslintScope.Reference(
    identifier,
    scopeManager.globalScope,
    0,
    null,
    false,
    false,
    false,
);
// $ExpectType Identifier
ref.identifier;
// $ExpectType Scope<Variable<Reference>, Reference>
ref.from;
// $ExpectType boolean
ref.isRead();
// $ExpectType boolean
ref.isWrite();
// $ExpectType boolean
ref.isReadOnly();
// $ExpectType boolean
ref.isWriteOnly();
// $ExpectType boolean
ref.isReadWrite();

const scopeInstance = new eslintScope.Scope(
    scopeManager,
    "block",
    null,
    ast,
    false,
);
// $ExpectType "function" | "module" | "block" | "catch" | "class" | "for" | "function-expression-name" | "global" | "switch" | "with" | "TDZ"
scopeInstance.type;
// $ExpectType boolean
scopeInstance.isStrict;
// $ExpectType Scope<Variable<Reference>, Reference> | null
scopeInstance.upper;
// $ExpectType Scope<Variable<Reference>, Reference>
scopeInstance.variableScope;
// $ExpectType Variable<Reference>[]
scopeInstance.variables;
// $ExpectType Reference[]
scopeInstance.references;
// $ExpectType Scope<Variable<Reference>, Reference>[]
scopeInstance.childScopes;
// $ExpectType Node
scopeInstance.block;
// $ExpectType boolean
scopeInstance.functionExpressionScope;
// $ExpectType { left: Reference[]; set: Map<string, Variable<Reference>>; }
scopeInstance.implicit;
// $ExpectType Map<string, Variable>
scopeInstance.set;
// $ExpectType Map<string, Variable<Reference>>
scopeInstance.taints;
// $ExpectType Reference[]
scopeInstance.through;
// $ExpectType boolean
scopeInstance.dynamic;
// $ExpectType boolean
scopeInstance.directCallToEvalScope;
// $ExpectType boolean
scopeInstance.thisFound;
// $ExpectType void
scopeInstance.resolve(ref);
// $ExpectType boolean
scopeInstance.isStatic();
// $ExpectType boolean
scopeInstance.isArgumentsMaterialized();
// $ExpectType boolean
scopeInstance.isThisMaterialized();
// $ExpectType boolean
scopeInstance.isUsedName("foo");

const scopeManagerInstance = new eslintScope.ScopeManager({
    ecmaVersion: 2022,
    sourceType: "module",
});
// $ExpectType GlobalScope
scopeManagerInstance.globalScope;
// $ExpectType Scope<Variable<Reference>, Reference>[]
scopeManagerInstance.scopes;
// $ExpectType Scope<Variable<Reference>, Reference> | null
scopeManagerInstance.acquire(ast);
// $ExpectType Scope<Variable<Reference>, Reference>[] | null
scopeManagerInstance.acquireAll(ast);
// $ExpectType Scope<Variable<Reference>, Reference> | null
scopeManagerInstance.release(ast);
// $ExpectType Variable<Reference>[]
scopeManagerInstance.getDeclaredVariables(ast);
// $ExpectType boolean
scopeManagerInstance.isGlobalReturn();
// $ExpectType boolean
scopeManagerInstance.isModule();
// $ExpectType boolean
scopeManagerInstance.isImpliedStrict();
// $ExpectType boolean
scopeManagerInstance.isStrictModeSupported();

const variableInstance = new eslintScope.Variable("foo", scopeInstance);
// $ExpectType string
variableInstance.name;
// $ExpectType Scope<Variable<Reference>, Reference>
variableInstance.scope;
// $ExpectType Identifier[]
variableInstance.identifiers;
// $ExpectType Reference[]
variableInstance.references;
// $ExpectType Definition[]
variableInstance.defs;
// $ExpectType boolean
variableInstance.tainted;
// $ExpectType boolean
variableInstance.stack;
