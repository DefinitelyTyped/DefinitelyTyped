import { ESLint, Linter } from "eslint";

interface ESLintMochaConfigs {
    configs: {
        recommended: Linter.Config;
        all: Linter.Config;
        flat: {
            recommended: Linter.FlatConfig;
            all: Linter.FlatConfig;
        };
    };
}

declare const plugin: ESLintMochaConfigs & ESLint.Plugin;
export = plugin;
