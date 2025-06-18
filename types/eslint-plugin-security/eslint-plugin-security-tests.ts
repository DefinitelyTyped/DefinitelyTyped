import type { Linter, Rule } from "eslint";
import { configs, rules } from "eslint-plugin-security";

const config: Linter.FlatConfig = configs.recommended;
const rule: Rule.RuleModule = rules["detect-unsafe-regex"];
