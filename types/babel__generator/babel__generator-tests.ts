// Example from https://github.com/babel/babel/tree/master/packages/babel-generator
// Named import from docs (added in @babel/generator@7.27.0): https://github.com/babel/website/blob/main/docs/generator.md#usage
import generate, { generate as generate2 } from "@babel/generator";
import * as t from "@babel/types";

const code = "class Example {}";
declare const ast: t.Node;

ast.type;
ast.loc!.start;

const output = generate(ast, {/* options */}, code);

// Example (originally) from https://github.com/thejameskyle/babel-handbook/blob/master/translations/en/plugin-handbook.md#babel-generator
const result = generate(
    ast,
    {
        retainLines: false,
        compact: "auto",
        concise: false,
        jsescOption: {
            quotes: "double",
        },
        jsonCompatibleStrings: true,
        // ...
    },
    code,
);
result.code;
result.map;

const result2 = generate2(
    ast,
    {
        retainLines: false,
        compact: "auto",
        concise: false,
        jsescOption: {
            quotes: "double",
        },
        jsonCompatibleStrings: true,
        // ...
    },
    code,
);
result2.code;
result2.map;
