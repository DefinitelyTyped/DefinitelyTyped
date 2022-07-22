import * as eslint from "eslint";
import * as estree from "estree";
import * as eslintScope from "eslint-scope";

declare const program: estree.Program;
declare const scope: eslintScope.Scope;
declare const variable: eslintScope.Variable;
declare const reference: eslintScope.Reference;

const manager1: eslintScope.ScopeManager = eslintScope.analyze(
    program,
    {
        directive: false,
        ecmaVersion: 2018,
        fallback(node) {
            return Object.keys(node);
        },
        ignoreEval: true,
        impliedStrict: true,
        nodejsScope: true,
        optimistic: true,
        sourceType: "module"
    }
);
const manager2: eslintScope.ScopeManager = eslintScope.analyze(
    program,
    {
        ecmaVersion: 5,
        ignoreEval: false,
        impliedStrict: false,
        nodejsScope: false,
        optimistic: false,
        sourceType: "script"
    }
);
const manager3: eslintScope.ScopeManager = eslintScope.analyze(program);

const managerInterface = manager1; // $ExpectType ScopeManager
const scopeInterface = scope; // $ExpectType Scope
const variableInterface = variable; // $ExpectType Variable
const referenceInterface = reference; // $ExpectType Reference

scope.references[0].resolved?.scope; // $ExpectType Scope | undefined
