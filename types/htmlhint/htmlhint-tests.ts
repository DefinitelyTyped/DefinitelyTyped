import { HTMLHint, RuleSet } from "htmlhint";

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

const result = HTMLHint.verify('<span></span>', htmlHintRules);
const formatted = HTMLHint.format(result, { indent: 2 });
