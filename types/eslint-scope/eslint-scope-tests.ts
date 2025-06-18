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
// $ExpectType Scope<Variable<Reference>, Reference>[]
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
    // $ExpectType Scope<Variable<Reference>, Reference>[]
    scope.childScopes;
    // $ExpectType Node
    scope.block;
    // $ExpectType boolean
    scope.functionExpressionScope;
    // $ExpectType Reference[]
    scope.implicit.left;
    // $ExpectType Map<string, Variable>
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
