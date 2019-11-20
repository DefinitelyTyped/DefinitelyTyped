import * as esprima from 'esprima';
import * as esquery from 'esquery';

const AST = esprima.parseScript(`const x = 2;
function f (n) {
    const y = 4;
    if (n > y) return true;
    return false;
}`);

const s = 'FunctionDeclaration !VariableDeclaration > VariableDeclarator[init.value > 3]';

// $ExpectType Selector | undefined
const selector = esquery.parse(s);

// $ExpectType Node[]
const nodes = esquery.query(AST, s);

// $ExpectType Node[]
esquery(AST, s);

// $ExpectError
esquery.parse(3);

if (selector) {
    // $ExpectType Node[]
    esquery.match(AST, selector);

    // $ExpectError
    esquery.match(AST, 'VariableDeclarator');

    // $ExpectType boolean
    esquery.matches(nodes[0], selector, esquery(AST, 'FunctionDeclaration'));
}

// $ExpectError
esquery.match(3, selector);
