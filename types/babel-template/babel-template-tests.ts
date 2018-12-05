// Example from https://github.com/babel/babel/tree/master/packages/babel-template
import template = require('babel-template');
import generate from 'babel-generator';
import * as t from 'babel-types';

const buildRequire = template(`
    var IMPORT_NAME = require(SOURCE);
`);

const ast = buildRequire({
    IMPORT_NAME: t.identifier('myModule'),
    SOURCE: t.stringLiteral('my-module')
});

console.log(generate(ast).code);
// var myModule = require('my-module');
