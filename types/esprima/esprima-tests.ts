import esprima = require('esprima');
import * as ESTree from 'estree';

let token: esprima.Token;
let program: esprima.Program;
let string: string;

// esprima
string = esprima.version;

// Parse Module & Parse Script
program = esprima.parseScript('answer = 42');
program = esprima.parseModule('import { sqrt } from "math.js"');

// Parsing Options
const title = 'Hello World!';
program = esprima.parseScript(`var el= <title>${title}</title>`, { jsx: true });
program = esprima.parseScript('if (x) function y() {}');
program = esprima.parseScript('"use strict"; with (x) {}', { tolerant: true });
program = esprima.parseScript('answer = 42', { range: true });
program = esprima.parseScript('answer = 42', { range: true });
program = esprima.parseScript('const answer = 42', { tokens: true });
if (program.tokens) {
    token = program.tokens[0];
}
program = esprima.parseScript('answer = 42 // TODO: why', { comment: true });
program = esprima.parseScript('answer = 42 // TODO: why', { comment: true, range: true });

// Tokenizing
token = esprima.tokenize('code')[0];
token = esprima.tokenize('code', {range: true})[0];

// Syntax Delegate
esprima.parseScript('answer = 42', {}, (node) => {
    if (node.type === esprima.Syntax.VariableDeclaration) {
    }
});

// Token
string = token.type;
string = token.value;

// Type narrowing
const node: ESTree.Node = program.body[0];
if (node.type === esprima.Syntax.IfStatement) {
    node.consequent = node;
}
