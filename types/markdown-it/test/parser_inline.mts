import MarkdownIt from "markdown-it/lib/index.mjs";
import { RuleInline, RuleInline2 } from "markdown-it/lib/parser_inline.mjs";
import StateInline from "markdown-it/lib/rules_inline/state_inline.mjs";
import Token from "markdown-it/lib/token.mjs";

const md = new MarkdownIt();
const tokens: Token[] = [];
const state: StateInline = new md.inline.State("__foobar", md, {}, tokens);

const rule: RuleInline = (state: StateInline, silent: boolean) => {
    return false;
};

md.inline.ruler.push("foobar", rule);

const rule2: RuleInline2 = (state: StateInline) => {
    return false;
};

md.inline.ruler2.push("foobar", rule2);
