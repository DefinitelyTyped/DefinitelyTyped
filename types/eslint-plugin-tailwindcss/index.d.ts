import { ESLint, Linter } from "eslint";

declare const eslintPluginTailwindCSS: ESLint.Plugin & {
    configs: {
        "flat/recommended": Linter.Config[];
        recommended: Linter.LegacyConfig;
    };
};

export = eslintPluginTailwindCSS;
