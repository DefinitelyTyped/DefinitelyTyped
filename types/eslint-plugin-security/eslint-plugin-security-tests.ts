import type { Linter, Rule } from "eslint";
import security from "eslint-plugin-security";

const name: string = security.meta.name;
const version: string = security.meta.version;

const rule: Rule.RuleModule = security.rules["detect-unsafe-regex"];

const ruleConfig: Linter.Severity = security.rulesConfig["detect-unsafe-regex"];

const config: Linter.Config = security.configs.recommended;
const configLegacy: Linter.LegacyConfig = security.configs["recommended-legacy"];
