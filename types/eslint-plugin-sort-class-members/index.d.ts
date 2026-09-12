import type { ESLint, Linter, Rule } from "eslint";

declare const eslintPluginSortClassMembers: ESLint.Plugin & {
    rules: {
        "sort-class-members": Rule.RuleModule;
    };
    configs: {
        recommended: Linter.LegacyConfig;
        "flat/recommended": Linter.Config;
    };
};

export = eslintPluginSortClassMembers;
