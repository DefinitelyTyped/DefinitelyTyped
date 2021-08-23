import MarkdownIt = require('markdown-it/lib');
import Token = require('markdown-it/lib/token');
import StateBlock = require('markdown-it/lib/rules_block/state_block');
import ParserBlock = require('markdown-it/lib/parser_block');

const md = new MarkdownIt();
const tokens: Token[] = [];
const state: StateBlock = new md.block.State('# Foobar', md, {}, tokens);
md.block.tokenize(state, state.line, state.lineMax);
state.md.block.parse(state.src, state.md, state.env, state.tokens);

const rule: ParserBlock.RuleBlock = (state: StateBlock, startLine: number, endLine: number, silent: boolean) => {
    return false;
};

md.block.ruler.push('foobar', rule, { alt: ['paragraph', 'reference'] });
