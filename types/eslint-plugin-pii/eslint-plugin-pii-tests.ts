import type { Linter, Rule } from "eslint";
import pii from "eslint-plugin-pii";

const rules: Record<string, Rule.RuleModule> = pii.rules;
const rule: Rule.RuleModule = pii.rules["no-email"];

const legacyConfig: Linter.LegacyConfig = pii.configs.recommended;

const ownFlatConfig: Linter.Config = {
    plugins: { pii },
    rules: {
        "pii/no-email": "error",
        "pii/no-ip": "error",
        "pii/no-dob": "warn",
        "pii/no-phone-number": "error",
    },
};
