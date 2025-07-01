import type { Linter, Rule } from "eslint";

export const meta: { name: string; version: string };
export const rules: {
    "exhaustive-make-observable": Rule.RuleModule;
    "unconditional-make-observable": Rule.RuleModule;
    "missing-make-observable": Rule.RuleModule;
    "missing-observer": Rule.RuleModule;
    "no-anonymous-observer": Rule.RuleModule;
};

export const configs: {
    recommended: Linter.Config;
};

export const flatConfigs: {
    recommended: Linter.Config;
};
