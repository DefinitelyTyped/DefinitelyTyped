import type { Linter, Rule } from "eslint";
import github from "eslint-plugin-github";

const rules: Record<string, Rule.RuleModule> = github.rules;
const rule: Rule.RuleModule = github.rules["array-foreach"];

const flatConfigs: Record<string, Linter.Config> = github.getFlatConfigs();
const flatConfig: Linter.Config = github.getFlatConfigs().recommended;

const legacyConfig: Linter.LegacyConfig = github.configs.recommended;

const ownFlatConfig: Linter.Config = {
    plugins: { github },
    rules: {
        "github/array-foreach": "error",
        "github/no-then": "error",
        "github/no-inner-html": "warn",
    },
};
