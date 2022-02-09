import MarkdownIt = require('markdown-it');
import Token = require('markdown-it/lib/token');

import StateCore = require('markdown-it/lib/rules_core/state_core');

const md = new MarkdownIt();

const state = new StateCore('# Foobar', md, {});

{
    state.src = '# Foobar';
    state.env = {};
    state.tokens = [] as Token[];
    state.inlineMode = false;
    state.md = md;
}

{
    let token = new state.Token('heading_open', 'h1', -1);
    state.tokens.push(token);
}
