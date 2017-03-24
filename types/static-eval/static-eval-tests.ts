import evaluate = require('static-eval');
import esprima = require('esprima');
import * as ESTree from 'estree';

var parse = esprima.parse;


var src = '[1,2,3+4*10+n,foo(3+5),obj[""+"x"].y]';

var ast = (<ESTree.ExpressionStatement>(parse(src).body[0])).expression;

console.log(evaluate(ast, {
    n: 6,
    foo: function (x: number) { return x * 100 },
    obj: { x: { y: 555 } }
}));