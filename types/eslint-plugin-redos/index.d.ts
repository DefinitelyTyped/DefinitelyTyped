import type { Linter, Rule } from "eslint";

export = eslint_plugin_redos;

declare const eslint_plugin_redos: {
    configs: {
        recommended: Linter.LegacyConfig;
    };
    rules: {
        "no-vulnerable": Rule.RuleModule;
    };
};
