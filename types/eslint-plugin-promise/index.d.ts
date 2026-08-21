import type { ESLint, Linter, Rule } from "eslint";

declare const eslintPluginPromise: ESLint.Plugin & {
    rules: {
        "always-return": Rule.RuleModule;
        "avoid-new": Rule.RuleModule;
        "catch-or-return": Rule.RuleModule;
        "no-callback-in-promise": Rule.RuleModule;
        "no-multiple-resolved": Rule.RuleModule;
        "no-native": Rule.RuleModule;
        "no-nesting": Rule.RuleModule;
        "no-new-statics": Rule.RuleModule;
        "no-promise-in-callback": Rule.RuleModule;
        "no-return-in-finally": Rule.RuleModule;
        "no-return-wrap": Rule.RuleModule;
        "param-names": Rule.RuleModule;
        "prefer-await-to-callbacks": Rule.RuleModule;
        "prefer-await-to-then": Rule.RuleModule;
        "prefer-catch": Rule.RuleModule;
        "spec-only": Rule.RuleModule;
        "valid-params": Rule.RuleModule;
    };
    rulesConfig: {
        "always-return": Linter.Severity;
        "catch-or-return": Linter.Severity;
        "no-native": Linter.Severity;
        "no-return-wrap": Linter.Severity;
        "param-names": Linter.Severity;
    };
    configs: {
        recommended: Linter.LegacyConfig;
        "flat/recommended": Linter.Config;
    };
};

export = eslintPluginPromise;
