import type { Linter, Rule } from "eslint";
import redos from "eslint-plugin-redos";

const rules: Record<string, Rule.RuleModule> = redos.rules;
const rule: Rule.RuleModule = redos.rules["no-vulnerable"];

const legacyConfig: Linter.LegacyConfig = redos.configs.recommended;

const ownFlatConfig: Linter.Config = {
  plugins: { redos },
  rules: {
    "redos/no-vulnerable": "error",
  },
};