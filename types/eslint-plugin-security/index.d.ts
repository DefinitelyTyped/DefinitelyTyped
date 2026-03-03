import type { ESLint, Linter, Rule } from "eslint";

export const meta: Required<NonNullable<ESLint.ObjectMetaProperties["meta"]>>;

export const rules: Record<string, Rule.RuleModule>;

export const rulesConfig: Record<string, Linter.Severity>;

export const configs: {
    readonly "recommended": Linter.Config;
    readonly "recommended-legacy": Linter.LegacyConfig;
};
