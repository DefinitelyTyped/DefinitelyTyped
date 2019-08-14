import acorn = require('acorn');
import * as ESTree from 'estree';

declare let token: acorn.Token;
declare let tokens: acorn.Token[];
declare let comment: acorn.Comment;
declare let comments: acorn.Comment[];
declare let program: ESTree.Program;
let any: any;
let string: string;

// acorn
string = acorn.version;
program = acorn.parse('code');
program = acorn.parse('code', { ranges: true, onToken: tokens, onComment: comments });
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

const parser = new acorn.Parser({}, 'export default ""', 0);

const node = new acorn.Node(parser, 1, 1);

class LooseParser {
    constructor(input: string, options = {}) {}

    // this means you can extend LooseParser
    test() {}
}
acorn.addLooseExports(() => {
    return {
        type: 'Program',
        sourceType: 'script',
        body: [
            {
                type: 'EmptyStatement'
            }
        ]
    };
}, LooseParser, {});

acorn.parseExpressionAt('string', 2);

acorn.isNewLine(56);

acorn.isIdentifierStart(56);

acorn.isIdentifierChar(56);

acorn.getLineInfo('string', 56);

acorn.plugins['test'] = (p: acorn.Parser, config: any) => {};

acorn.tokenizer('console.log("hello world)', {locations: true}).getToken();
acorn.tokenizer('console.log("hello world)', {locations: true})[Symbol.iterator]().next();
