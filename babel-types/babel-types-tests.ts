/// <reference path="babel-types.d.ts" />
/// <reference path="../babel-traverse/babel-traverse.d.ts" />


// Examples from https://github.com/thejameskyle/babel-handbook/blob/master/translations/en/plugin-handbook.md#babel-types
import traverse from "babel-traverse";
import * as t from "babel-types";

let ast: t.Node;

traverse(ast, {
    enter(path) {
        if (t.isIdentifier(path.node, { name: "n" })) {
            path.node.name = "x";
        }
    }
});

if (t.isBinaryExpression(ast)) {
    ast.left;
    ast.right;
    ast.operator;
}
t.assertBinaryExpression(ast);
t.assertBinaryExpression(ast, { operator: "*" });
