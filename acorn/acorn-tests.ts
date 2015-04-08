/// <reference path="../estree/estree.d.ts" />
/// <reference path="acorn.d.ts" />

import acorn = require('acorn');

var token: acorn.Token;
var tokens: acorn.Token[];
var comment: acorn.Comment;
var comments: acorn.Comment[];
var program: ESTree.Program;
var any: any;
var string: string;

// acorn
string = acorn.version;
program = acorn.parse('code');
program = acorn.parse('code', {range: true, onToken: tokens, onComment: comments});
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
