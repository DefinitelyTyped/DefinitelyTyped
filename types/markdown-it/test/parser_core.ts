import MarkdownIt = require('markdown-it/lib');
import Token = require('markdown-it/lib/token');
import StateCore = require('markdown-it/lib/rules_core/state_core');
import ParserCore = require('markdown-it/lib/parser_core');

const md = new MarkdownIt();
const state: StateCore = new md.core.State('# Foobar', md, {});
md.core.process(state);

const rule: ParserCore.RuleCore = (state: StateCore): boolean => {
    return false;
};

md.core.ruler.push('foobar', rule);
