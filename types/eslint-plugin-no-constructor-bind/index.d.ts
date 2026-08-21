import type { Rule } from "eslint";

export = eslint_plugin_no_constructor_bind;

declare const eslint_plugin_no_constructor_bind: {
    rules: {
        "no-constructor-bind": Rule.RuleModule;
        "no-constructor-state": Rule.RuleModule;
    };
};
