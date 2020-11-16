import MarkdownIt = require('markdown-it');
import Token = require('markdown-it/lib/token');

import StateBlock = require('markdown-it/lib/rules_block/state_block');

const md = new MarkdownIt();
const tokens: Token[] = [];

const state = new StateBlock('# Foobar', md, {}, tokens);

{
    state.src = '# Foobar';
    state.md = md;
    state.env = {};
    state.tokens = tokens;

    state.bMarks = [] as number[];
    state.eMarks = [] as number[];
    state.tShift = [] as number[];
    state.sCount = [] as number[];

    state.bsCount = [] as number[];

    state.blkIndent = 0;

    state.line = 0;
    state.lineMax = 0;
    state.tight = false;
    state.ddIndent = -1;
    state.listIndent = -1;

    state.parentType = 'root';

    state.level = 0;

    state.result = '';

    state.bMarks.push(16);
    state.eMarks.push(16);
    state.tShift.push(0);
    state.sCount.push(0);
    state.bsCount.push(0);

    state.lineMax = state.bMarks.length - 1;
}

{
    let token: Token;
    let flag: boolean;
    let num: number;

    token = state.push('hr', 'hr', 0);
    flag = state.isEmpty(2);
    num = state.skipEmptyLines(123);
    num = state.skipSpaces(456);
    num = state.skipSpacesBack(789, 456);
    num = state.skipChars(234, '*'.charCodeAt(0));
    num = state.skipCharsBack(345, '_'.charCodeAt(0), 456);

    token = new state.Token('hr', 'hr', 0);
}
