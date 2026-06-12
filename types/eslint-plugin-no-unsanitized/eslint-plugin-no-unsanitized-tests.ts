import type { Linter, Rule } from "eslint";
import noUnsanitized from "eslint-plugin-no-unsanitized";

const rules: Record<string, Rule.RuleModule> = noUnsanitized.rules;
const rule: Rule.RuleModule = noUnsanitized.rules["method"];

const flatConfig: Linter.Config = noUnsanitized.configs.recommended;
const legacyConfig: Linter.LegacyConfig = noUnsanitized.configs["recommended-legacy"];
const domConfig: Linter.LegacyConfig = noUnsanitized.configs.DOM;

const ownFlatConfig: Linter.Config = {
    plugins: { "no-unsanitized": noUnsanitized },
    rules: {
        "no-unsanitized/method": "error",
        "no-unsanitized/property": "error",
    },
};
