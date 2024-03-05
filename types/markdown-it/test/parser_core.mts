import MarkdownIt from "markdown-it/lib/index.mjs";
import { RuleCore } from "markdown-it/lib/parser_core.mjs";
import StateCore from "markdown-it/lib/rules_core/state_core.mjs";

const md = new MarkdownIt();
const state: StateCore = new md.core.State("# Foobar", md, {});
md.core.process(state);

const rule: RuleCore = (state: StateCore): boolean => {
    return false;
};

md.core.ruler.push("foobar", rule);
