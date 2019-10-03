import * as esprima from 'esprima';
import * as esquery from 'esquery';

const AST = esprima.parseScript(`const x = 2;
const f = n => {
    const y = 4;
    if (n > 4) return true;
    return false;
}`);

const s = 'FunctionDeclaration !VariableDeclaration > VariableDeclarator[init.value>3]';

// $ExpectType Selector | undefined
const selector = esquery.parse(s);

// $ExpectError
esquery.parse(3);

if (selector) {
    // $ExpectType Node[]
    esquery.match(AST, selector);

    // $ExpectError
    esquery.match(AST, 'VariableDeclarator');
}

// $ExpectError
esquery.match(3, selector);

// $ExpectType Node[]
esquery(AST, s);

// $ExpectType Node[]
esquery.query(AST, s)
