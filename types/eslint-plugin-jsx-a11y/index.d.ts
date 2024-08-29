import { ESLint, Linter } from "eslint";

declare const eslintPluginJsxA11y: ESLint.Plugin & {
    configs: {
        recommended: Linter.LegacyConfig;
        strict: Linter.LegacyConfig;
    };
    flatConfigs: {
        recommended: Linter.FlatConfig;
        strict: Linter.FlatConfig;
    };
};

export = eslintPluginJsxA11y;
