/// <reference types="babylon" />



// Example from https://github.com/babel/babel/tree/master/packages/babel-generator
import {parse} from 'babylon';
import generate from 'babel-generator';

const code = 'class Example {}';
const ast = parse(code);

ast.type;
ast.loc.start;

const output = generate(ast, { /* options */ }, code);


// Example from https://github.com/thejameskyle/babel-handbook/blob/master/translations/en/plugin-handbook.md#babel-generator
let result = generate(ast, {
    retainLines: false,
    compact: "auto",
    concise: false,
    quotes: "double",
    // ...
}, code);
result.code;
result.map;
