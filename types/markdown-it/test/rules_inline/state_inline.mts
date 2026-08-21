import MarkdownIt from "markdown-it/lib/index.mjs";
import Token from "markdown-it/lib/token.mjs";

import StateInline, { Delimiter, Scanned, TokenMeta } from "markdown-it/lib/rules_inline/state_inline.mjs";

const md = new MarkdownIt();
const tokens: Token[] = [];

const state = new StateInline("__foobar__", md, {}, tokens);

{
    state.src = "__foobar__";
    state.env = {};
    state.md = md;
    state.tokens = tokens;
    state.tokens_meta = [] as TokenMeta[];
    state.pos = 0;
    state.posMax = state.src.length;
    state.level = 0;
    state.pending = "";
    state.pendingLevel = 0;
    state.cache = {};
    state.delimiters = [] as Delimiter[];
}

{
    let token: Token;
    if (state.pending) {
        token = state.pushPending();
    }
    token = state.push("image", "img", 0);
    token = new state.Token("image", "img", 0);
}

{
    const marker = "*".charCodeAt(0);
    let scanned: Scanned = {
        can_open: true,
        can_close: true,
        length: 16,
    };

    scanned = state.scanDelims(state.pos, marker === 0x2a);

    state.delimiters.push({
        marker: marker,
        length: scanned.length,
        token: state.tokens.length - 1,
        end: -1,
        open: scanned.can_open,
        close: scanned.can_close,
    });
}
