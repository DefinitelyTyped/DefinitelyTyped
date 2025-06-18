import MarkdownIt from "markdown-it/lib/index.mjs";
import Token from "markdown-it/lib/token.mjs";

import StateCore from "markdown-it/lib/rules_core/state_core.mjs";

const md = new MarkdownIt();

const state = new StateCore("# Foobar", md, {});

{
    state.src = "# Foobar";
    state.env = {};
    state.tokens = [] as Token[];
    state.inlineMode = false;
    state.md = md;
}

{
    let token = new state.Token("heading_open", "h1", -1);
    state.tokens.push(token);
}
