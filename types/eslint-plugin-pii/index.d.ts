import type { Linter, Rule } from "eslint";

export = eslint_plugin_pii;

declare const eslint_plugin_pii: {
    configs: {
        recommended: Linter.LegacyConfig;
    };
    rules: {
        "no-dob": Rule.RuleModule;
        "no-email": Rule.RuleModule;
        "no-ip": Rule.RuleModule;
        "no-phone-number": Rule.RuleModule;
    };
};
