import { HTMLHint } from 'htmlhint';
import { Rule, Ruleset } from 'htmlhint/types';

const htmlHintRules: Ruleset = {
    'tagname-lowercase': true,
    'attr-lowercase': true,
    'attr-value-double-quotes': true,
    'doctype-first': true,
    'tag-pair': true,
    'spec-char-escape': true,
    'id-unique': true,
    'src-not-empty': true,
    'attr-no-duplication': true,
    'title-require': true,
    'space-tab-mixed-disabled': 'tab',
};

const rule: Rule = {
    id: 'custom-rule',
    description: 'Custom rule',
    link: '../custom-rule',
    init(parser, reporter) {
        parser; // $ExpectType HTMLParser
        reporter; // $ExpectType Reporter
    },
};

HTMLHint.addRule(rule); // $ExpectType void

// $ExpectType Hint[]
const result = HTMLHint.verify('<span></span>', htmlHintRules);

// $ExpectType string[]
const formatted = HTMLHint.format(result, { indent: 2 });
