import template from "@babel/template";
import generate from "@babel/generator";
import * as t from "@babel/types";

const buildRequire = template.statement(`
  var IMPORT_NAME = require(SOURCE);
`);

const ast1 = buildRequire({
    IMPORT_NAME: t.identifier("myModule"),
    SOURCE: t.stringLiteral("my-module")
});

console.log(generate(ast1).code);

const ast2 = template.ast(`
  var myModule = require("my-module");
`);

const fn = template.statement`
  var IMPORT_NAME = require('${"my-module"}');
`;

const ast3 = fn({
    IMPORT_NAME: t.identifier("myModule")
});

console.log(generate(ast3).code);

declare const mod: string;

const ast4 = template.ast`
  var ${mod} = require("${name}");
`;
