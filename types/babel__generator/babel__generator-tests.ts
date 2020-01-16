// Example from https://github.com/babel/babel/tree/master/packages/babel-generator
import generate from "@babel/generator";
import * as t from "@babel/types";

const code = "class Example {}";
declare const ast: t.Node;

ast.type;
ast.loc!.start;

const output = generate(ast, { /* options */ }, code);

// Example (originally) from https://github.com/thejameskyle/babel-handbook/blob/master/translations/en/plugin-handbook.md#babel-generator
const result = generate(
  ast,
  {
    retainLines: false,
    compact: 'auto',
    concise: false,
    jsescOption: {
      quotes: 'double',
    },
    jsonCompatibleStrings: true,
    // ...
  },
  code,
);
result.code;
result.map;
