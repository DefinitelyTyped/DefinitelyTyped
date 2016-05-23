/// <reference types="estree" />

import acorn = require('acorn');

declare var token: acorn.Token;
declare var tokens: acorn.Token[];
declare var comment: acorn.Comment;
declare var comments: acorn.Comment[];
declare var program: ESTree.Program;
var any: any;
var string: string;

// acorn
string = acorn.version;
program = acorn.parse('code');
program = acorn.parse('code', {ranges: true, onToken: tokens, onComment: comments});
program = acorn.parse('code', {
    ranges: true,
    onToken: (token) => tokens.push(token),
    onComment: (isBlock, text, start, end) => { }
});

// Token
token = tokens[0];
string = token.type.label;
any = token.value;

// Comment
string = comment.value;
