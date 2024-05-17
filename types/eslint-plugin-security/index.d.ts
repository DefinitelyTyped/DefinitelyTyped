import { Linter, Rule } from "eslint";

export const configs: {
    recommended: Linter.FlatConfig;
};

export const rules: Record<string, Rule.RuleModule>;
