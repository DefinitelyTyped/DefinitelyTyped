import type { Linter, Rule } from "eslint";

interface RuleDef {
    create(context: Rule.RuleContext): Rule.RuleListener;
    meta: {
        docs: {
            description: string;
            recommended: boolean;
            url: string;
        };
        schema: unknown[];
        type: "problem" | "suggestion" | "layout";
        messages?: Record<string, string>;
        fixable?: "code" | "whitespace";
        deprecated?: boolean;
        replacedBy?: string[];
    };
}

interface FlatConfigs {
    browser: Linter.Config;
    internal: Linter.Config;
    recommended: Linter.Config;
    typescript: Linter.Config;
    react: Linter.Config;
    [key: string]: Linter.Config;
}

declare const plugin: {
    meta: {
        name: string;
        version: string;
    };
    rules: {
        "a11y-aria-label-is-well-formatted": RuleDef;
        "a11y-no-generic-link-text": RuleDef;
        "a11y-no-title-attribute": RuleDef;
        "a11y-no-visually-hidden-interactive-element": RuleDef;
        "a11y-role-supports-aria-props": RuleDef;
        "a11y-svg-has-accessible-name": RuleDef;
        "array-foreach": RuleDef;
        "async-currenttarget": RuleDef;
        "async-preventdefault": RuleDef;
        "authenticity-token": RuleDef;
        "filenames-match-regex": RuleDef;
        "get-attribute": RuleDef;
        "js-class-name": RuleDef;
        "no-blur": RuleDef;
        "no-d-none": RuleDef;
        "no-dataset": RuleDef;
        "no-dynamic-script-tag": RuleDef;
        "no-implicit-buggy-globals": RuleDef;
        "no-inner-html": RuleDef;
        "no-innerText": RuleDef;
        "no-then": RuleDef;
        "no-useless-passive": RuleDef;
        "prefer-observers": RuleDef;
        "require-passive-events": RuleDef;
        "unescaped-html-literal": RuleDef;
    };
    configs: {
        browser: Linter.LegacyConfig;
        internal: Linter.LegacyConfig;
        recommended: Linter.LegacyConfig;
        typescript: Linter.LegacyConfig;
        react: Linter.LegacyConfig;
    };
    getFlatConfigs(): FlatConfigs;
};

export default plugin;
