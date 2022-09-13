import * as esprima from 'esprima';
import * as esquery from 'esquery';

const AST = esprima.parseScript(`const x = 2;
function f (n) {
    const y = 4;
    if (n > y) return true;
    return false;
}`);

const s = 'FunctionDeclaration !VariableDeclaration > VariableDeclarator[init.value > 3]';

// $ExpectType Selector
const selector = esquery.parse(s);

// $ExpectType Node[]
const nodes = esquery.query(AST, s);

// $ExpectType Node[]
esquery(AST, s);

// @ts-expect-error
esquery.parse(3);

// $ExpectType Node[]
esquery.match(AST, selector);

// @ts-expect-error
esquery.match(AST, 'VariableDeclarator');

// $ExpectType boolean
esquery.matches(nodes[0], selector, esquery(AST, 'FunctionDeclaration'));

// @ts-expect-error
esquery.match(3, selector);

switch (selector.type) {
    case 'adjacent':
        // $ExpectType SubjectSelector
        selector.left;
        // $ExpectType SubjectSelector
        selector.right;
        break;

    case 'attribute':
        // $ExpectType string
        selector.name;
}
