
/// <reference types="babel-traverse" />


// Examples from https://github.com/thejameskyle/babel-handbook/blob/master/translations/en/plugin-handbook.md#babel-types
import traverse from "babel-traverse";
import * as t from "babel-types";

let ast: t.Node;

traverse(ast, {
    enter(path) {
        let node = path.node;
        if (t.isIdentifier(node, { name: "n" })) {
            node.name = "x";
        }
        if (t.isFunctionExpression(node)) {
            node.params = [t.identifier('param')];
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

var exp: t.Expression = t.nullLiteral();
