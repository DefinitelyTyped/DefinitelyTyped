import type { Linter, Rule } from "eslint";

export = eslint_plugin_no_unsanitized;

declare const eslint_plugin_no_unsanitized: {
    meta: {
        name: string;
        version: string;
    };
    configs: {
        // flat config (plugin value is object)
        recommended: Linter.Config;
        // legacy configs (plugin value is string[])
        "recommended-legacy": Linter.LegacyConfig;
        DOM: Linter.LegacyConfig;
    };
    rules: {
        method: Rule.RuleModule;
        property: Rule.RuleModule;
    };
};
