import type { Linter, Rule } from "eslint";

type XssRuleModule = Rule.RuleModule & {
    meta: Rule.RuleMetaData;
};

export = eslint_plugin_xss;

declare const eslint_plugin_xss: {
    configs: {
        recommended: Linter.LegacyConfig & {
            rules: Linter.RulesRecord;
        };
    };
    rules: {
        "no-location-href-assign": XssRuleModule;
        "no-mixed-html": XssRuleModule;
    };
};
