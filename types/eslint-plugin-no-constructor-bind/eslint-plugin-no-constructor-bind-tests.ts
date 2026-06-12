import type { Rule } from "eslint";
import noConstructorBind from "eslint-plugin-no-constructor-bind";

const rules: Record<string, Rule.RuleModule> = noConstructorBind.rules;
const rule: Rule.RuleModule = noConstructorBind.rules["no-constructor-bind"];

const ownFlatConfig = {
    plugins: { "no-constructor-bind": noConstructorBind },
    rules: {
        "no-constructor-bind/no-constructor-bind": "error",
        "no-constructor-bind/no-constructor-state": "error",
    },
};
