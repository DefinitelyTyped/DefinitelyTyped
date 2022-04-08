import * as eslint from "eslint";
import * as estree from "estree";
import * as escope from "eslint-scope";

declare const program: estree.Program;
declare const scope: escope.Scope;
declare const variable: escope.Variable;
declare const reference: escope.Reference;

const manager1: escope.ScopeManager = escope.analyze(
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
const manager2: escope.ScopeManager = escope.analyze(
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
const manager3: escope.ScopeManager = escope.analyze(program);

const managerInterface: eslint.Scope.ScopeManager = manager1;
const scopeInterface: eslint.Scope.Scope = scope;
const variableInterface: eslint.Scope.Variable = variable;
const referenceInterface: eslint.Scope.Reference = reference;
