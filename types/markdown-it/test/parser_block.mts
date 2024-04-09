import MarkdownIt from "markdown-it/lib/index.mjs";
import ParserBlock from "markdown-it/lib/parser_block.mjs";
import StateBlock from "markdown-it/lib/rules_block/state_block.mjs";
import Token from "markdown-it/lib/token.mjs";

const md = new MarkdownIt();
const tokens: Token[] = [];
const state: StateBlock = new md.block.State("# Foobar", md, {}, tokens);
md.block.tokenize(state, state.line, state.lineMax);
state.md.block.parse(state.src, state.md, state.env, state.tokens);

const rule: ParserBlock.RuleBlock = (state: StateBlock, startLine: number, endLine: number, silent: boolean) => {
    return false;
};

md.block.ruler.push("foobar", rule, { alt: ["paragraph", "reference"] });
