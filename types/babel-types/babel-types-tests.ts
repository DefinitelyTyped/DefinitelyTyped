// Examples from https://github.com/thejameskyle/babel-handbook/blob/master/translations/en/plugin-handbook.md#babel-types
import traverse from "babel-traverse";
import * as t from "babel-types";

declare const ast: t.Node;

traverse(ast, {
    enter(path) {
        const node = path.node;
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

const exp: t.Expression = t.nullLiteral();

// React examples:
// https://github.com/babel/babel/blob/4e50b2d9d9c376cee7a2cbf56553fe5b982ea53c/packages/babel-plugin-transform-react-inline-elements/src/index.js#L61
traverse(ast, {
    JSXElement(path, file) {
        const { node } = path;
        const open = node.openingElement;

        // init
        const type = open.name;

        let newType: t.StringLiteral;
        if (t.isJSXIdentifier(type) && t.react.isCompatTag(type.name)) {
            newType = t.stringLiteral(type.name);
        }

        const args: any[] = [];
        if (node.children.length) {
            const children = t.react.buildChildren(node);
            args.push(
                t.unaryExpression("void", t.numericLiteral(0), true),
                ...children,
            );
        }
    }
});
