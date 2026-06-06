import type { Linter, Rule } from "eslint";
import promise from "eslint-plugin-promise";

const rules: Record<string, Rule.RuleModule> = promise.rules;
const rule: Rule.RuleModule = promise.rules["always-return"];
const ruleConfig: Linter.Severity = promise.rulesConfig["param-names"];

const flatConfig: Linter.Config = promise.configs["flat/recommended"];
const ownFlatConfig: Linter.Config = {
    plugins: { promise },
    rules: {
        "promise/always-return": "error",
        "promise/no-return-wrap": "error",
        "promise/prefer-catch": "warn",
    },
};

const legacyConfig: Linter.LegacyConfig = promise.configs.recommended;
