import { HTMLHint, LintResult, Rule, RuleSet } from "htmlhint";

const htmlHintRules: RuleSet = {
    "tagname-lowercase": true,
    "attr-lowercase": true,
    "attr-value-double-quotes": true,
    "doctype-first": true,
    "tag-pair": true,
    "spec-char-escape": true,
    "id-unique": true,
    "src-not-empty": true,
    "attr-no-duplication": true,
    "title-require": true,
    "space-tab-mixed-disabled": "tab"
};

const rule: Rule = {
    id: 'custom-rule',
    description: 'Custom rule',
    link: '../custom-rule'
};
HTMLHint.addRule(rule);

const result: LintResult[] = HTMLHint.verify('<span></span>', htmlHintRules);
const formatted: string[] = HTMLHint.format(result, { indent: 2 });
