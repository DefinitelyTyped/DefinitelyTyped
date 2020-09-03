import MarkdownIt = require('markdown-it/lib');
import Token = require('markdown-it/lib/token');
import StateInline = require('markdown-it/lib/rules_inline/state_inline');
import ParserInline = require('markdown-it/lib/parser_inline');

const md = new MarkdownIt();
const tokens: Token[] = [];
const state: StateInline = new md.inline.State('__foobar', md, {}, tokens);

const rule: ParserInline.RuleInline = (state: StateInline, silent: boolean) => {
    return false;
};

md.inline.ruler.push('foobar', rule);

const rule2: ParserInline.RuleInline2 = (state: StateInline) => {
    return false;
};

md.inline.ruler2.push('foobar', rule2);
